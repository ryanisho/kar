// wf4/backend/src/linkSuggestions.ts
import { query } from "./db";
import { embedText } from "./embed";

const OLLAMA_URL = process.env.OLLAMA_URL ?? "http://localhost:11434";
const LLM_MODEL = "llama3.2:3b-instruct-q4_0";


interface DocCandidate {
  id: number;
  slug: string;
  title: string;
  body: string;
  score: number;
}

export interface LinkSuggestion {
  url: string;
  title: string;
  description: string;
  confidence: number;
  reason?: string;
}

function buildEmbeddingQuery(deadUrl: string, context?: string): string {
  let path = deadUrl;
  try {
    const url = new URL(deadUrl);
    path = url.pathname;
  } catch {
    // deadUrl might already be a path
  }

  return [
    `Dead path: ${path}`,
    context ? `Context: ${context.slice(0, 500)}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

async function fetchCandidates(
  queryEmbedding: number[],
  limit: number = 5
): Promise<DocCandidate[]> {
  const embeddingLiteral = `[${queryEmbedding.join(",")}]`;

  const { rows } = await query<{
    id: number;
    slug: string;
    title: string;
    body: string;
    score: number;
  }>(
    `
    SELECT d.id, d.slug, d.title, d.body,
           1 - (e.embedding <-> $1::vector) AS score
    FROM doc_embeddings e
    JOIN docs d ON d.id = e.doc_id
    ORDER BY e.embedding <-> $1::vector
    LIMIT $2
    `,
    [embeddingLiteral, limit]
  );

  return rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    body: r.body,
    score: r.score,
  }));
}

function buildLLMPrompt(
  deadUrl: string,
  queryText: string,
  candidates: DocCandidate[]
): string {
  let path = deadUrl;
  try {
    const url = new URL(deadUrl);
    path = url.pathname;
  } catch {
    /* ignore */
  }

  const lines = candidates.map((c, idx) => {
    const snippet = c.body.replace(/\s+/g, " ").slice(0, 400);
    return `Candidate ${idx + 1}:
- url: /docs/${c.slug}
- title: ${c.title}
- snippet: ${snippet}
- retrievalScore: ${c.score.toFixed(4)}`;
  });

  return `
You are an expert at analyzing broken documentation links and finding the best matching pages.

USER'S REQUEST:
Broken URL: ${deadUrl}
Path: ${path}
Search Context: ${queryText}

AVAILABLE CANDIDATES:
${lines.join("\n\n")}

ANALYSIS REQUIRED:
Carefully analyze each candidate and determine which page the user most likely intended to visit. Consider:

1. URL Path Similarity: Does the candidate's slug match or closely resemble the broken path?
2. Content Relevance: Does the page content match what the user was searching for?
3. Title Matching: Does the title indicate this is the right page?
4. Semantic Understanding: Based on the context, what was the user trying to accomplish?

Rank all candidates by relevance, with the best match first.

OUTPUT FORMAT (STRICT JSON):
{
  "best": <integer index 1-${candidates.length}>,
  "bestReason": "<concise explanation of why this is the best match>",
  "alternates": [<other relevant indices in order>],
  "alternateReasons": ["<reason for first alternate>", "<reason for second alternate>"]
}

Example:
{
  "best": 2,
  "bestReason": "URL slug 'getting-started' closely matches broken path, and content covers initial setup",
  "alternates": [1, 3],
  "alternateReasons": ["Related introductory content", "Covers similar setup topics"]
}
`;
}

type SelectionResult = {
  best: number;
  alternates: number[];
  bestReason?: string;
  alternateReasons?: string[];
};

/**
 * Parse the LLM response as a selection object.
 * We try:
 *  1) JSON directly
 *  2) JSON inside ```json fenced blocks
 *  3) Fallback: extract integer indices from text
 */
function parseSelection(
  raw: string,
  candidateCount: number
): SelectionResult | null {
  if (!raw) return null;

  const tryJson = (s: string): SelectionResult | null => {
    try {
      const parsed = JSON.parse(s);
      if (!parsed || typeof parsed !== "object") return null;

      const best = Number(parsed.best);
      const alternatesRaw = Array.isArray(parsed.alternates)
        ? parsed.alternates
        : [];

      const validBest =
        Number.isInteger(best) && best >= 1 && best <= candidateCount;
      const alternates: number[] = [];

      for (const v of alternatesRaw) {
        const n = Number(v);
        if (
          Number.isInteger(n) &&
          n >= 1 &&
          n <= candidateCount &&
          n !== best &&
          !alternates.includes(n)
        ) {
          alternates.push(n);
        }
      }

      if (validBest) {
        return {
          best,
          alternates,
          bestReason: parsed.bestReason,
          alternateReasons: Array.isArray(parsed.alternateReasons)
            ? parsed.alternateReasons
            : [],
        };
      }
      return null;
    } catch {
      return null;
    }
  };

  // 1) Direct JSON
  const direct = tryJson(raw.trim());
  if (direct) return direct;

  // 2) JSON fenced block
  const fenced = raw.match(/```json([\s\S]*?)```/i);
  if (fenced?.[1]) {
    const withinFence = tryJson(fenced[1].trim());
    if (withinFence) return withinFence;
  }

  // 3) Fallback: extract integers and treat as indices
  const nums = Array.from(raw.matchAll(/\d+/g))
    .map((m) => parseInt(m[0], 10))
    .filter((n) => n >= 1 && n <= candidateCount);

  if (nums.length === 0) return null;

  const best = nums[0];
  const alternates = Array.from(new Set(nums.slice(1))).filter(
    (n) => n !== best
  );
  return { best, alternates };
}

export async function getLinkSuggestions(
  deadUrl: string,
  context?: string
): Promise<LinkSuggestion[]> {
  const t0 = Date.now();

  // 1) Build query + embed
  const queryText = buildEmbeddingQuery(deadUrl, context);
  const queryEmbedding = await embedText(queryText);
  const t1 = Date.now();

  // 2) Vector search
  const candidates = await fetchCandidates(queryEmbedding, 5);
  const t2 = Date.now();

  if (!candidates.length) {
    console.log("[wf4] linkSuggestions timings (no candidates)", {
      totalMs: t2 - t0,
      embedMs: t1 - t0,
      searchMs: t2 - t1,
      llmMs: 0,
      candidateCount: 0,
      suggestionCount: 0,
    });
    return [];
  }

  // 3) LLM selection
  const prompt = buildLLMPrompt(deadUrl, queryText, candidates);

  const llmResp = await fetch(`${OLLAMA_URL}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: LLM_MODEL,
      prompt,
      stream: false,
      format: "json", // hint to Ollama
      options: {
        temperature: 0.3,
        num_predict: 256, // allow more tokens for reasoning
        top_p: 0.9,
      },
    }),
  });

  const t3 = Date.now();

  let selection: SelectionResult | null = null;

  if (!llmResp.ok) {
    const body = await llmResp.text();
    console.error("LLM backend error:", llmResp.status, body);
  } else {
    const llmData = (await llmResp.json()) as { response: string };
    const raw = llmData.response;
    selection = parseSelection(raw, candidates.length);
  }

  // 4) Build final suggestions on the Node side
  // If selection failed, just fall back to ranking by retrieval score.
  const orderedCandidates = [...candidates].sort(
    (a, b) => b.score - a.score
  );

  let ordered: DocCandidate[] = orderedCandidates;

  if (selection) {
    const byIndex = (i: number) => candidates[i - 1];
    const picked: DocCandidate[] = [];
    const seen = new Set<number>();

    const pushCandidate = (c: DocCandidate | undefined) => {
      if (!c) return;
      if (seen.has(c.id)) return;
      seen.add(c.id);
      picked.push(c);
    };

    pushCandidate(byIndex(selection.best));
    for (const idx of selection.alternates) {
      pushCandidate(byIndex(idx));
    }
    for (const c of orderedCandidates) {
      pushCandidate(c);
    }

    ordered = picked;
  }

  const suggestions: LinkSuggestion[] = ordered.slice(0, 1).map((c, idx) => {
    const baseConfidence = 0.9;
    const confidence = Math.max(0.5, baseConfidence - idx * 0.15);
    
    let reason: string;
    if (idx === 0 && selection?.bestReason) {
      reason = selection.bestReason;
    } else if (
      idx > 0 &&
      selection?.alternateReasons &&
      selection.alternateReasons[idx - 1]
    ) {
      reason = selection.alternateReasons[idx - 1];
    } else if (idx === 0) {
      reason = selection
        ? "Best match based on URL similarity and content relevance"
        : "Top match by vector similarity (LLM analysis unavailable)";
    } else {
      reason = selection
        ? "Alternative match with relevant content"
        : "Ranked by vector similarity";
    }

    return {
      url: `/docs/${c.slug}`,
      title: c.title,
      description:
        c.body.replace(/\s+/g, " ").slice(0, 200) +
        (c.body.length > 200 ? "…" : ""),
      confidence,
      reason,
    };
  });

  const t4 = Date.now();

  console.log("[wf4] linkSuggestions timings", {
    totalMs: t4 - t0,
    embedMs: t1 - t0,
    searchMs: t2 - t1,
    llmMs: t4 - t2,
    candidateCount: candidates.length,
    suggestionCount: suggestions.length,
  });

  return suggestions;
}

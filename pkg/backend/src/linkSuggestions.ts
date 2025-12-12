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
    const snippet = c.body.replace(/\s+/g, " ").slice(0, 300);
    return `Candidate ${idx + 1}:
- url: /docs/${c.slug}
- title: ${c.title}
- snippet: ${snippet}
- retrievalScore: ${c.score.toFixed(4)}`;
  });

  return `
You are helping fix a broken link in a documentation site.

Broken URL:
${deadUrl}

Path only:
${path}

Semantic query for this 404:
${queryText}

We searched our documentation index and found the following candidate pages:

${lines.join("\n\n")}

Your task:
- Choose the single best candidate that most likely matches what the user wanted.
- Optionally, you may list other strong alternatives, in order of relevance.
- Consider both:
  - How similar the candidate URL path is to the broken path.
  - How relevant the candidate content is to the query.

Output STRICT JSON only, with no explanation text before or after it.
The JSON MUST have this shape:

{
  "best": <integer index between 1 and ${candidates.length}>,
  "alternates": [<other distinct indices between 1 and ${candidates.length}>]
}

Examples of valid answers (for illustration):

{"best": 1, "alternates": [2, 3]}
{"best": 2, "alternates": []}
`;
}

type SelectionResult = {
  best: number;
  alternates: number[];
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
        return { best, alternates };
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
        temperature: 0,
        num_predict: 96, // short JSON
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

  const suggestions: LinkSuggestion[] = ordered.slice(0, 3).map((c, idx) => {
    const baseConfidence = 0.9;
    const confidence = Math.max(0.5, baseConfidence - idx * 0.15);
    const reason =
      idx === 0
        ? selection
          ? "Top candidate by vector similarity and LLM selection."
          : "Top candidate by vector similarity (LLM selection unavailable)."
        : selection
        ? "Alternate candidate ranked by LLM and vector similarity."
        : "Alternate candidate ranked by vector similarity.";

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

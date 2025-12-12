import { query } from "./db";
import { embedText } from "./embed";

const OLLAMA_URL = process.env.OLLAMA_URL ?? "http://localhost:11434";
const LLM_MODEL = "phi3:mini"; // tinyllama?

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
  limit: number = 10
): Promise<DocCandidate[]> {
  // pgvector: ORDER BY embedding <-> $1 limits by distance
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

  const candidateSummaries = candidates.map((c) => ({
    url: `/docs/${c.slug}`,
    title: c.title,
    // shorter snippet to keep prompt tight
    snippet: c.body.slice(0, 600),
    retrievalScore: c.score,
  }));

  return `
    You are helping fix a broken link in a documentation site.

    The user tried to visit this URL and got a 404:
    ${deadUrl}

    Path only:
    ${path}

    We constructed a semantic query for this 404:
    ${queryText}

    We searched our documentation index and found these candidate pages that might match what they wanted.

    Candidates (JSON):

    ${JSON.stringify(candidateSummaries, null, 2)}

    Task:
    - From these candidates, choose the ones that best match the user's intent.
    - DO NOT invent new URLs; only use the provided candidate urls.
    - Consider:
    - How similar the path /docs/... is to the broken path.
    - How well the snippet might answer the user's needs.
    - Return STRICT JSON only, with the following shape and nothing else:

    {
    "suggestions": [
        {
        "url": "string (one of the candidate urls)",
        "title": "string",
        "description": "string",
        "confidence": 0.0_to_1.0,
        "reason": "short explanation"
        }
    ]
    }
    `;
}

// this may have to be changed later...
function extractJsonObject(raw: string): any {
  // try direct JSON parse
  try {
    return JSON.parse(raw);
  } catch {
    // ignore
  }

  // look for ```json ... ```
  const fencedMatch = raw.match(/```json([\s\S]*?)```/i);
  const candidate = fencedMatch ? fencedMatch[1] : raw;

  const first = candidate.indexOf("{");
  const last = candidate.lastIndexOf("}");
  if (first === -1 || last === -1 || last <= first) {
    throw new Error("No JSON object found in LLM output");
  }
  const jsonStr = candidate.slice(first, last + 1);
  return JSON.parse(jsonStr);
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
  const candidates = await fetchCandidates(queryEmbedding, 8);
  const t2 = Date.now();

  if (!candidates.length) {
    console.log("[wf4] linkSuggestions timings (no candidates)", {
      totalMs: t2 - t0,
      embedMs: t1 - t0,
      searchMs: t2 - t1,
      llmMs: 0,
      candidateCount: 0,
    });
    return [];
  }

  // 3) LLM rerank
  const prompt = buildLLMPrompt(deadUrl, queryText, candidates);
  console.log("[wf4] LLM prompt:", prompt);

  const llmResp = await fetch(`${OLLAMA_URL}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: LLM_MODEL,
      prompt,
      stream: false,
      options: {
        temperature: 0,
        num_predict: 256,
      },
    }),
  });

  const t3 = Date.now();

  if (!llmResp.ok) {
    const body = await llmResp.text();
    console.log("[wf4] linkSuggestions timings (LLM error)", {
      totalMs: t3 - t0,
      embedMs: t1 - t0,
      searchMs: t2 - t1,
      llmMs: t3 - t2,
      candidateCount: candidates.length,
    });
    throw new Error(`LLM backend error: ${llmResp.status} – ${body}`);
  }

  const llmData = (await llmResp.json()) as { response: string };
  const raw = llmData.response;
  console.log("[wf4] LLM raw response:", raw);

  const parsed = extractJsonObject(raw);
  const suggestions: LinkSuggestion[] =
    parsed && Array.isArray(parsed.suggestions) ? parsed.suggestions : [];

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

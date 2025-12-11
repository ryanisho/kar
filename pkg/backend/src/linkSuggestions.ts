// wf4/backend/src/linkSuggestions.ts
import { query } from "./db";
import { embedText } from "./embed";

const OLLAMA_URL = process.env.OLLAMA_URL ?? "http://localhost:11434";
const LLM_MODEL = process.env.WF4_LLM_MODEL ?? "llama3";

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

function buildLLMPrompt(deadUrl: string, queryText: string, candidates: DocCandidate[]): string {
  let path = deadUrl;
  try {
    const url = new URL(deadUrl);
    path = url.pathname;
  } catch {/* ignore */}

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

export async function getLinkSuggestions(deadUrl: string, context?: string): Promise<LinkSuggestion[]> {
  const queryText = buildEmbeddingQuery(deadUrl, context);
  const queryEmbedding = await embedText(queryText);

  const candidates = await fetchCandidates(queryEmbedding, 8);
  if (!candidates.length) return [];

  const prompt = buildLLMPrompt(deadUrl, queryText, candidates);

  const llmResp = await fetch(`${OLLAMA_URL}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: LLM_MODEL,
      prompt,
      stream: false,
    }),
  });

  if (!llmResp.ok) {
    const body = await llmResp.text();
    throw new Error(`LLM backend error: ${llmResp.status} – ${body}`);
  }

  const llmData = (await llmResp.json()) as { response: string };
  const raw = llmData.response;

  const parsed = extractJsonObject(raw);
  if (!parsed || !Array.isArray(parsed.suggestions)) return [];

  return parsed.suggestions as LinkSuggestion[];
}

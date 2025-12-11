const EMBED_API_URL = process.env.WF4_EMBED_API_URL ?? "http://localhost:7000/embed";

export async function embedText(text: string): Promise<number[]> {
  const resp = await fetch(EMBED_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`Embedding service error: ${resp.status} ${resp.statusText} – ${body}`);
  }

  const data = (await resp.json()) as { embedding: number[] };
  if (!data.embedding || !Array.isArray(data.embedding)) {
    throw new Error("Invalid embedding payload");
  }

  return data.embedding;
}

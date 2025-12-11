import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const OLLAMA_URL = "http://localhost:11434/api/generate"; 
const MODEL_NAME = "llama3"; 

// extract json object from LLM
function extractJsonObject(raw: string) : any {
    const first = raw.indexOf("{");
    const last = raw.indexOf("}");

    if (first === -1 || last === -1 || last <= first) {
        // this shld nvr occur
        throw new Error("No JSON object found in LLM output");
    }

    const jsonStr = raw.slice(first, last + 1);
    return JSON.parse(jsonStr);
}

function buildPrompt(deadUrl: string, context: string): string {
  return `
You are an assistant that fixes broken links in a documentation website.

The user tried to visit this URL and got a 404:
${deadUrl}

Here is some text from the site or page (may be partial):

${context.slice(0, 2000)}

Task:
- Guess up to 3 URLs that are likely what the user intended.
- Prefer URLs on the same site.
- Return STRICT JSON with this shape and nothing else (NO OTHER TEXT):

{
  "suggestions": [
    {
      "url": "string",
      "title": "string",
      "description": "string",
      "confidence": 0.0_to_1.0
    }
  ]
}
`;
}

app.post("/api/link-suggestions", async (req, res) => {
  const { deadUrl, context } = req.body as { deadUrl?: string; context?: string };

  if (!deadUrl) {
    return res.status(400).json({ error: "deadUrl is required" });
  }

  try {
    const prompt = buildPrompt(deadUrl, context ?? "");

    const response = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: MODEL_NAME,
        prompt,
        stream: false,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Ollama HTTP error:", response.status, text);
      return res.status(500).json({ error: "LLM backend error" });
    }

    const data = (await response.json()) as { response: string };
    const raw = data.response;

    // parse json ! 
    let parsed: any;
    try {
      parsed = extractJsonObject(raw);
    } catch (e) {
      console.error("Failed to extract or parse LLM JSON:", e);
      console.error("Raw LLM output:", raw);
      return res.status(500).json({ error: "Bad LLM JSON output" });
    }

    const suggestions = Array.isArray(parsed.suggestions) ? parsed.suggestions : [];
    return res.json({ suggestions });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`wf4 backend listening on http://localhost:${PORT}`);
});

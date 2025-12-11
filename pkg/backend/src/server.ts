import express from "express";
import cors from "cors";
import { docsRouter } from "./docsApi";
import { getLinkSuggestions } from "./linkSuggestions";

const app = express();

const FRONTEND_ORIGIN = process.env.WF4_FRONTEND_ORIGIN ?? "http://localhost:5173";

app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path} - ${res.statusCode} (${duration}ms)`);
  });
  
  next();
});

// docs api
app.use("/api/docs", docsRouter);

app.post("/api/link-suggestions", async (req, res) => {
  const { deadUrl, context } = req.body as { deadUrl?: string; context?: string };

  console.log(`Link suggestion request: deadUrl="${deadUrl}", context length: ${context?.length ?? 0}`);

  if (!deadUrl) {
    console.warn("Missing deadUrl in request");
    return res.status(400).json({ error: "deadUrl is required" });
  }

  try {
    const suggestions = await getLinkSuggestions(deadUrl, context);
    console.log(`Generated ${suggestions.length} link suggestions for "${deadUrl}"`);
    return res.json({ suggestions });
  } catch (err: any) {
    console.error("link-suggestions error:", err);
    console.error("Stack trace:", err.stack);
    return res.status(500).json({ error: err.message ?? "Internal error" });
  }
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
app.listen(PORT, () => {
  console.log(`wf4 backend listening on http://localhost:${PORT}`);
  console.log(`CORS enabled for origin: ${FRONTEND_ORIGIN}`);
});

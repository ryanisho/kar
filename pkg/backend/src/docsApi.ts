import { Router } from "express";
import { query } from "./db";

export const docsRouter = Router();

// list doc names (sidebar)
docsRouter.get("/", async (req, res) => {
  const { rows } = await query<{ id: number; slug: string; title: string }>(
    "SELECT id, slug, title FROM docs ORDER BY id ASC"
  );

  if (rows.length === 0) {
    console.log("Docs table is empty - no documents found");
  }

  res.json(rows);
});

// retrieve via slug
docsRouter.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  const { rows } = await query<{ id: number; slug: string; title: string; body: string }>(
    "SELECT id, slug, title, body FROM docs WHERE slug = $1",
    [slug]
  );

  if (!rows.length) {
    return res.status(404).json({ error: "Doc not found" });
  }

  res.json(rows[0]);
});

// TODO: endpoint to write to db via text forms on frontend
docsRouter.post("/", async (req, res) => {
  const { slug, title, body } = req.body;
  if (!slug || !title || !body) {
    return res.status(400).json({ error: "Missing slug, title, or body" });
  }
  try {
    const { rows } = await query<{ id: number }>(
      "INSERT INTO docs (slug, title, body) VALUES ($1, $2, $3) RETURNING id",
      [slug, title, body]
    );
    res.status(201).json({ id: rows[0].id, slug, title, body });
  } catch (err) {
    console.error("Error inserting doc:", err);
    res.status(500).json({ error: "Failed to create doc" });
  }
});

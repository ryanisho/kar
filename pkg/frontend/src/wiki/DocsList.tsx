import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

interface DocSummary {
  id: number;
  slug: string;
  title: string;
}

export const DocsList: React.FC = () => {
  const [docs, setDocs] = useState<DocSummary[]>([]);
  const [creating, setCreating] = useState(false);

  const fetchDocs = useCallback(() => {
    fetch("http://localhost:3001/api/docs")
      .then((r) => r.json())
      .then(setDocs)
      .catch((err) => {
        console.error("Failed to fetch docs:", err);
      });
  }, []);

  useEffect(() => {
    fetchDocs();
  }, [fetchDocs]);

  const handleCreateSampleDoc = async () => {
    setCreating(true);
    try {
      const now = new Date();
      const title = `Sample doc ${now.toLocaleString()}`;
      const body = `This is a sample document created at ${now.toISOString()}.\n\nYou can edit this behavior later to take input from a form.`;

      const res = await fetch("http://localhost:3001/api/docs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Failed to create doc:", res.status, text);
        return;
      }

      fetchDocs();
    } catch (err) {
      console.error("Error creating sample doc:", err);
    } finally {
      setCreating(false);
    }
  };

  return (
    <aside
      style={{
        width: 260,
        borderRight: "1px solid #ddd",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <h3>Docs</h3>

      <button
        type="button"
        onClick={handleCreateSampleDoc}
        disabled={creating}
        style={{ marginBottom: "1rem", display: "block" }}
      >
        {creating ? "Creating sample doc..." : "Add sample doc"}
      </button>

      {/* hc broken for testing */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Test links</strong>
        <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: "0.5rem" }}>
          <li>
            {/* typo on purpose */}
            <Link to="/docs/gettting-started">
              Broken: Getting Started (typo)
            </Link>
          </li>
        </ul>
      </div>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {docs.map((d) => (
          <li key={d.id} style={{ marginBottom: "0.5rem" }}>
            <Link to={`/docs/${d.slug}`}>{d.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

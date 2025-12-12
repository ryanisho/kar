// frontend/src/wiki/DocPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage";

interface Doc {
  id: number;
  slug: string;
  title: string;
  body: string;
}

export const DocPage: React.FC = () => {
  const { slug } = useParams();
  const [doc, setDoc] = useState<Doc | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);

    fetch(`http://localhost:3001/api/docs/${slug}`)
      .then((r) => {
        if (r.status === 404) {
          setNotFound(true);
          setLoading(false);
          return null;
        }
        return r.json();
      })
      .then((data) => {
        if (!data) return;
        setDoc(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching doc:", err);
        setDoc(null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div style={{ padding: "1rem" }}>Loading…</div>;
  }

  if (notFound) {
    return <NotFoundPage />;
  }

  if (!doc) {
    return <div style={{ padding: "1rem" }}>Document not found.</div>;
  }

  return (
    <article style={{ padding: "1rem" }}>
      <h1>{doc.title}</h1>
      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
        {doc.body}
      </pre>
    </article>
  );
};

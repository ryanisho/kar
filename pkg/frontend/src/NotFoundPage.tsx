import React, { useEffect } from "react";
import { useLinkResolver } from "./LinkResolverContext";

export const NotFoundPage: React.FC = () => {
  const { state, resolveBrokenLink } = useLinkResolver();

  useEffect(() => {
    const deadUrl = window.location.href;
    void resolveBrokenLink(deadUrl);
  }, [resolveBrokenLink]);

  return (
    <div style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>404 – Page not found</h1>
      <p>
        We couldn’t find this page. We’re asking the local AI to suggest where
        you might have meant to go.
      </p>

      {state.loading && <p>Asking the AI for suggestions…</p>}

      {state.error && (
        <p style={{ color: "red" }}>Error getting suggestions: {state.error}</p>
      )}

      {!state.loading && !state.error && state.suggestions.length === 0 && (
        <p>No AI suggestions yet. Try the main navigation or search.</p>
      )}

      {state.suggestions.length > 0 && (
        <>
          <h2>AI-suggested links</h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {state.suggestions.map((s, idx) => (
              <li
                key={`${s.url}-${idx}`}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  padding: "1rem",
                  marginBottom: "0.75rem",
                }}
              >
                <a href={s.url}>
                  <strong>{s.title}</strong>
                </a>
                {s.description && (
                  <p style={{ marginTop: "0.5rem" }}>{s.description}</p>
                )}
                <small>Confidence: {Math.round(s.confidence * 100)}%</small>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

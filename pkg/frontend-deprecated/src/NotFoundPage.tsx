import React, { useEffect } from "react";
import { useLinkResolver } from "./LinkResolverContext";

export const NotFoundPage: React.FC = () => {
  const { state, resolveBrokenLink } = useLinkResolver();

  useEffect(() => {
    const deadUrl = window.location.href;
    void resolveBrokenLink(deadUrl);
  }, [resolveBrokenLink]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>404 – Page not found</h1>
      <p>
        We couldn’t find this page. We’re asking the local wf4 to suggest where
        you might have meant to go.
      </p>

      {state.loading && <p>wf4 processing.</p>}

      {state.error && (
        <p style={{ color: "red" }}>Error getting suggestions: {state.error}</p>
      )}

      {!state.loading && !state.error && state.suggestions.length === 0 && (
        <p>No wf4 suggestions yet. Try the sidebar navigation.</p>
      )}

      {state.suggestions.length > 0 && (
        <>
          <h2>wf4-suggested links</h2>
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
                <small>
                  Confidence: {Math.round(s.confidence * 100)}%
                  {s.reason ? ` – ${s.reason}` : ""}
                </small>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

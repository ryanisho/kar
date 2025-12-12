import React, { createContext, useCallback, useContext, useState } from "react";

export interface SuggestedLink {
  url: string;
  title: string;
  description?: string;
  confidence: number;
  reason?: string;
}

interface ResolverState {
  loading: boolean;
  error?: string;
  suggestions: SuggestedLink[];
}

interface LinkResolverContextValue {
  state: ResolverState;
  resolveBrokenLink: (deadUrl: string) => Promise<void>;
}

const LinkResolverContext = createContext<LinkResolverContextValue | null>(
  null
);

export const useLinkResolver = () => {
  const ctx = useContext(LinkResolverContext);
  if (!ctx) {
    throw new Error("useLinkResolver must be used within LinkResolverProvider");
  }
  return ctx;
};

interface ProviderProps {
  apiBaseUrl?: string;
  children: React.ReactNode;
}

export const LinkResolverProvider: React.FC<ProviderProps> = ({
  apiBaseUrl = "http://localhost:3001",
  children,
}) => {
  const [state, setState] = useState<ResolverState>({
    loading: false,
    suggestions: [],
  });

  const resolveBrokenLink = useCallback(
    async (deadUrl: string) => {
      setState({ loading: true, suggestions: [], error: undefined });

      try {
        const context =
          typeof document !== "undefined"
            ? document.body.innerText.slice(0, 2000)
            : "";

        const res = await fetch(`${apiBaseUrl}/api/link-suggestions`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ deadUrl, context }),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = (await res.json()) as { suggestions?: SuggestedLink[] };

        setState({
          loading: false,
          suggestions: data.suggestions ?? [],
          error: undefined,
        });
      } catch (err) {
        setState({
          loading: false,
          suggestions: [],
          error: err?.message ?? "Unknown error",
        });
      }
    },
    [apiBaseUrl]
  );

  return (
    <LinkResolverContext.Provider value={{ state, resolveBrokenLink }}>
      {children}
    </LinkResolverContext.Provider>
  );
};

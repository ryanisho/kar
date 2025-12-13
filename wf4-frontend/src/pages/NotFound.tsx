import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLinkResolver } from "@/contexts/LinkResolverContext";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, SearchX, Sparkles, ArrowRight, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { state, resolveBrokenLink } = useLinkResolver();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    const deadUrl = window.location.href;
    void resolveBrokenLink(deadUrl);
  }, [location.pathname, resolveBrokenLink]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />

      <main className="ml-64 pt-14">
        <div className="max-w-4xl mx-auto px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <SearchX className="w-10 h-10 text-muted-foreground" />
            </div>

            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Page Not Found
            </h1>

            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off. But don't
              worry —
              <span className="font-semibold text-foreground">
                {" "}
                wf4's intelligent search
              </span>{" "}
              is working to find what you need.
            </p>

            <div className="flex items-center justify-center gap-3">
              <Button asChild variant="default">
                <a href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Return Home
                </a>
              </Button>
            </div>
          </div>

          {/* Loading State */}
          {state.loading && (
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="relative flex items-center justify-center w-12 h-12">
                  <Loader2 className="w-12 h-12 animate-spin text-primary" />
                  <Sparkles className="w-6 h-6 text-primary absolute animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Analyzing Your Request
                  </h3>
                  <p className="text-muted-foreground">
                    wf4 is searching through documentation to find the most
                    relevant matches...
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Error State */}
          {state.error && (
            <Card className="p-6 bg-destructive/5 border-destructive/20">
              <div className="flex items-start gap-3">
                <SearchX className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-destructive mb-1">
                    Unable to Generate Suggestions
                  </h3>
                  <p className="text-sm text-muted-foreground">{state.error}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Try navigating from the sidebar or return to the home page.
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* No Results State */}
          {!state.loading && !state.error && state.suggestions.length === 0 && (
            <Card className="p-8 text-center bg-muted/30">
              <SearchX className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Matches Found</h3>
              <p className="text-muted-foreground mb-4">
                wf4 couldn't find any pages matching your request. Try exploring
                the sidebar or starting from the homepage.
              </p>
              <Button asChild variant="outline">
                <a href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </a>
              </Button>
            </Card>
          )}

          {/* Suggestions */}
          {state.suggestions.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">Suggested Pages</h2>
                <Badge variant="secondary" className="ml-2">
                  {state.suggestions.length}{" "}
                  {state.suggestions.length === 1 ? "match" : "matches"}
                </Badge>
              </div>

              <div className="grid gap-4">
                {state.suggestions.map((s, idx) => (
                  <Card
                    key={`${s.url}-${idx}`}
                    className="group relative overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] hover:border-primary/50"
                  >
                    <a href={s.url} className="block p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {s.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>

                      {s.description && (
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {s.description}
                        </p>
                      )}

                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="outline" className="font-normal">
                          {Math.round(s.confidence * 100)}% match
                        </Badge>
                        {idx === 0 && (
                          <Badge variant="default" className="font-normal">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Best Match
                          </Badge>
                        )}
                      </div>

                      {s.reason && (
                        <p className="text-xs text-muted-foreground mt-3 italic">
                          {s.reason}
                        </p>
                      )}
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default NotFound;

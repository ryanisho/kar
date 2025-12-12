import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Copy } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Doc {
  id: number;
  slug: string;
  title: string;
  body: string;
}

const DocTemplate = () => {
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
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Sidebar />
        <main className="ml-64 pt-14">
          <div className="max-w-3xl mx-auto px-8 py-12">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </main>
      </div>
    );
  }

  if (notFound || !doc) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />

      <main className="ml-64 pt-14">
        <div className="max-w-3xl mx-auto px-8 py-12">
          {/* Document Content */}
          <section className="mb-10">
            <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-foreground prose-p:leading-7 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:text-foreground prose-pre:border prose-pre:border-border prose-strong:text-foreground prose-li:text-foreground">
              <ReactMarkdown>{doc.body}</ReactMarkdown>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DocTemplate;

import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Copy, Trash2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Doc {
  id: number;
  slug: string;
  title: string;
  body: string;
}

const DocTemplate = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
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

  const handleDelete = () => {
    if (!doc) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${doc.title}"? This action cannot be undone.`
    );

    if (confirmed) {
      // TODO: Add API call to delete document when backend is ready
      console.log("Deleting document:", doc.slug);

      // For now, just navigate back to home
      navigate("/");
    }
  };

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
          {/* Document Header with Delete Button */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <h1 className="text-3xl font-bold">{doc.title}</h1>
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-md transition-colors"
              title="Delete document"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </button>
          </div>

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

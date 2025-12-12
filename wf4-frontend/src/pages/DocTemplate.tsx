import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Copy } from "lucide-react";

interface Doc {
  id: number;
  slug: string;
  title: string;
  body: string;
}

const DeveloperMode = () => {
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

  if (notFound) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Sidebar />
        <main className="ml-64 pt-14">
          <div className="max-w-3xl mx-auto px-8 py-12">
            <h1 className="text-3xl font-semibold text-foreground mb-4">
              404 - Page Not Found
            </h1>
            <p className="text-muted-foreground">
              The document you're looking for doesn't exist.
            </p>
          </div>
        </main>
      </div>
    );
  }

  if (!doc) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Sidebar />
        <main className="ml-64 pt-14">
          <div className="max-w-3xl mx-auto px-8 py-12">
            <p className="text-muted-foreground">Document not found.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />

      <main className="ml-64 pt-14">
        <div className="max-w-3xl mx-auto px-8 py-12">
          {/* Page Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-semibold text-foreground mb-2">
                {doc.title}
              </h1>
            </div>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Copy className="w-4 h-4" />
              Copy page
            </button>
          </div>

          {/* Document Content */}
          <section className="mb-10">
            <div className="text-foreground leading-relaxed whitespace-pre-wrap">
              {doc.body}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DeveloperMode;

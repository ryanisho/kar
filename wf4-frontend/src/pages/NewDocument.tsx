import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ReactMarkdown from "react-markdown";

const NewDocument = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Add API call to create document when backend is ready
    console.log("Creating document:", formData);

    // For now, just navigate back
    navigate("/");
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      // Auto-generate slug from title
      slug: title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 mt-14 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <h1 className="text-3xl font-bold">New Document</h1>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Form Column */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title */}
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium mb-2"
                    >
                      Title *
                    </label>
                    <input
                      id="title"
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Enter document title"
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  {/* Slug */}
                  <div>
                    <label
                      htmlFor="slug"
                      className="block text-sm font-medium mb-2"
                    >
                      Slug *
                    </label>
                    <input
                      id="slug"
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData({ ...formData, slug: e.target.value })
                      }
                      placeholder="document-slug"
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <p className="mt-1 text-sm text-muted-foreground">
                      URL-friendly identifier for this document
                    </p>
                  </div>

                  {/* Content */}
                  <div>
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium mb-2"
                    >
                      Content *
                    </label>
                    <textarea
                      id="content"
                      required
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      placeholder="Write your document content here..."
                      rows={20}
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-y font-mono text-sm"
                    />
                    <p className="mt-1 text-sm text-muted-foreground">
                      Supports Markdown formatting
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
                    >
                      Create Document
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="px-6 py-2 border border-input rounded-md hover:bg-accent transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>

              {/* Preview Column */}
              <div className="sticky top-25">
                <div className="border border-input rounded-md p-6 bg-card">
                  <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-border">
                    Preview
                  </h2>
                  {formData.title && (
                    <h1 className="text-3xl font-bold mb-6">
                      {formData.title}
                    </h1>
                  )}
                  {formData.content ? (
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      <ReactMarkdown>{formData.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-muted-foreground italic">
                      Start typing to see the preview...
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewDocument;

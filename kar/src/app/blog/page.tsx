import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      title: "Getting Started with Next.js 15",
      author: "Ryan",
      date: "November 10, 2025",
      excerpt:
        "Explore the latest features in Next.js 15 including improved server components, better caching strategies, and enhanced developer experience.",
      slug: "getting-started-nextjs-15",
    },
    {
      title: "TypeScript Best Practices for React",
      author: "Katherine",
      date: "November 5, 2025",
      excerpt:
        "Learn how to leverage TypeScript's type system to write safer, more maintainable React applications with practical examples.",
      slug: "typescript-react-best-practices",
    },
    {
      title: "Building Accessible Web Applications",
      author: "Ashley",
      date: "October 28, 2025",
      excerpt:
        "A comprehensive guide to web accessibility, covering ARIA attributes, keyboard navigation, and screen reader compatibility.",
      slug: "accessible-web-applications",
    },
    {
      title: "State Management in Modern React",
      author: "Ryan",
      date: "October 20, 2025",
      excerpt:
        "Comparing different state management solutions: Context API, Redux Toolkit, Zustand, and Jotai. When to use each approach.",
      slug: "state-management-react",
    },
    {
      title: "Optimizing Performance in Next.js",
      author: "Katherine",
      date: "October 12, 2025",
      excerpt:
        "Deep dive into performance optimization techniques including code splitting, image optimization, and lazy loading.",
      slug: "optimizing-nextjs-performance",
    },
    {
      title: "CSS-in-JS vs Tailwind CSS",
      author: "Ashley",
      date: "October 5, 2025",
      excerpt:
        "An honest comparison of styling approaches in modern web development, with pros and cons of each method.",
      slug: "css-in-js-vs-tailwind",
    },
  ];

  return (
    <>
      <Navigation />
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "8rem 2rem 4rem",
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Blog
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            opacity: 0.8,
            marginBottom: "4rem",
            lineHeight: "1.6",
          }}
        >
          Thoughts, tutorials, and insights from our team on web development,
          programming, and technology.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              style={{
                padding: "2rem",
                border: "1px solid #333",
                borderRadius: "0",
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    textDecoration: "underline",
                  }}
                >
                  {post.title}
                </h2>
              </Link>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                  opacity: 0.7,
                }}
              >
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <p style={{ lineHeight: "1.6", opacity: 0.9 }}>{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  color: "inherit",
                  textDecoration: "underline",
                }}
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

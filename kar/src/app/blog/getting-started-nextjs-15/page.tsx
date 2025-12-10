import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function GettingStartedNextJS15() {
  return (
    <>
      <Navigation />
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "8rem 2rem 4rem",
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        <Link
          href="/blog"
          style={{
            display: "inline-block",
            marginBottom: "2rem",
            color: "inherit",
            textDecoration: "underline",
            opacity: 0.8,
          }}
        >
          ← Back to Blog
        </Link>

        <article>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              lineHeight: "1.2",
            }}
          >
            Getting Started with Next.js 15
          </h1>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "3rem",
              fontSize: "0.95rem",
              opacity: 0.7,
            }}
          >
            <span>
              By{" "}
              <Link
                href="/ryan"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Ryan
              </Link>
            </span>
            <span>•</span>
            <span>November 10, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <div style={{ fontSize: "1.125rem", lineHeight: "1.8" }}>
            <p
              style={{
                marginBottom: "1.5rem",
                fontSize: "1.25rem",
                opacity: 0.9,
              }}
            >
              Next.js 15 has arrived with significant improvements to
              performance, developer experience, and new features that make
              building React applications easier than ever. In this post, we'll
              explore what's new and how to get started.
            </p>

            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "3rem",
                marginBottom: "1rem",
              }}
            >
              What's New in Next.js 15?
            </h2>

            <p style={{ marginBottom: "1.5rem" }}>
              Next.js 15 introduces several exciting features and improvements:
            </p>

            <ul style={{ marginLeft: "2rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Improved Turbopack:</strong> Faster development builds
                and hot module replacement
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>React 19 Support:</strong> Full compatibility with the
                latest React features
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Enhanced Caching:</strong> Better caching strategies for
                improved performance
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Partial Prerendering:</strong> Combine static and
                dynamic rendering in a single route
              </li>
            </ul>

            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "3rem",
                marginBottom: "1rem",
              }}
            >
              Setting Up Your First Project
            </h2>

            <p style={{ marginBottom: "1.5rem" }}>
              Getting started with Next.js 15 is straightforward. You can create
              a new project using the create-next-app command:
            </p>

            <pre
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "1.5rem",
                borderRadius: "0",
                overflow: "auto",
                marginBottom: "1.5rem",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              <code>npx create-next-app@latest my-app</code>
            </pre>

            <p style={{ marginBottom: "1.5rem" }}>
              This will prompt you with several options including TypeScript
              support, ESLint configuration, and whether to use the App Router
              (recommended).
            </p>

            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "3rem",
                marginBottom: "1rem",
              }}
            >
              App Router vs Pages Router
            </h2>

            <p style={{ marginBottom: "1.5rem" }}>
              Next.js 15 continues to support both the App Router and the
              traditional Pages Router, but the App Router is now the
              recommended approach for new projects. It offers:
            </p>

            <ul style={{ marginLeft: "2rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                Server Components by default
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Improved layouts and nested routing
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Better data fetching patterns
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Streaming and Suspense support
              </li>
            </ul>

            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "3rem",
                marginBottom: "1rem",
              }}
            >
              Key Concepts to Master
            </h2>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginTop: "2rem",
                marginBottom: "0.75rem",
              }}
            >
              1. Server and Client Components
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Understanding when to use Server Components (default) versus
              Client Components ('use client') is crucial for optimizing your
              application's performance.
            </p>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginTop: "2rem",
                marginBottom: "0.75rem",
              }}
            >
              2. Data Fetching
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Next.js 15 simplifies data fetching with async/await directly in
              Server Components, eliminating the need for getServerSideProps and
              getStaticProps in many cases.
            </p>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginTop: "2rem",
                marginBottom: "0.75rem",
              }}
            >
              3. Metadata API
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              The new Metadata API makes it easy to manage SEO tags, Open Graph
              images, and other metadata without complex configuration.
            </p>

            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "3rem",
                marginBottom: "1rem",
              }}
            >
              Conclusion
            </h2>

            <p style={{ marginBottom: "1.5rem" }}>
              Next.js 15 represents a significant step forward for the
              framework, with improvements that benefit both developers and end
              users. Whether you're building a small personal project or a
              large-scale application, Next.js 15 provides the tools and
              performance you need to succeed.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Ready to dive deeper? Check out the{" "}
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                official Next.js documentation
              </a>{" "}
              and start building!
            </p>
          </div>

          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid #333",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Related Posts
            </h3>
            <ul style={{ marginLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link
                  href="/blog/state-management-react"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  State Management in Modern React
                </Link>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link
                  href="/blog/optimizing-nextjs-performance"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  Optimizing Performance in Next.js
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
}

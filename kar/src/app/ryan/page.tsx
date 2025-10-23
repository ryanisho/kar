import Link from "next/link";

export default function Ryan() {
  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "4rem 2rem",
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "3rem",
          }}
        >
          Ryan
        </h1>

        <div style={{ fontSize: "1.125rem", lineHeight: "1.8" }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Hi, I'm Ryan. I'm a software engineer passionate about building web
            applications and exploring new technologies. You can find my work on{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              GitHub
            </a>{" "}
            and connect with me on{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              LinkedIn
            </a>
            .
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            I currently work with{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              React
            </a>
            ,{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              Next.js
            </a>
            , and{" "}
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              TypeScript
            </a>
            . I love creating clean, minimal interfaces that prioritize user
            experience.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            When I'm not coding, you might find me reading about{" "}
            <a
              href="https://en.wikipedia.org/wiki/Design"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              design
            </a>
            , exploring{" "}
            <a
              href="https://en.wikipedia.org/wiki/Open-source_software"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              open source
            </a>{" "}
            projects, or experimenting with new frameworks and tools.
          </p>

          <p>
            Check out my teammates{" "}
            <Link
              href="/katherine"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              Katherine
            </Link>{" "}
            and{" "}
            <Link
              href="/ashley"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              Ashley
            </Link>
            .
          </p>
        </div>
      </div>

      <Link
        href="/"
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "2rem",
          color: "inherit",
          textDecoration: "underline",
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        Back to home
      </Link>
    </>
  );
}

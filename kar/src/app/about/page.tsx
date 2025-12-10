import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function About() {
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
            marginBottom: "2rem",
          }}
        >
          About KAR Wiki
        </h1>

        <div style={{ fontSize: "1.125rem", lineHeight: "1.8" }}>
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              What is KAR?
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              KAR is a collaborative wiki created by three software engineers:{" "}
              <Link
                href="/katherine"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Katherine
              </Link>
              ,{" "}
              <Link
                href="/ashley"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Ashley
              </Link>
              , and{" "}
              <Link
                href="/ryan"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Ryan
              </Link>
              . We're passionate about web development, open source, and sharing
              knowledge.
            </p>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Our Mission
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Our mission is to create a comprehensive resource for developers
              at all levels. We believe in:
            </p>
            <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                📚 Knowledge sharing and open collaboration
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                🚀 Building practical, real-world projects
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                🌱 Continuous learning and growth
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                ✨ Clean, accessible, and user-friendly design
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Technology Stack
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              This wiki is built with modern web technologies:
            </p>
            <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Next.js 15</strong> - React framework for production
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>TypeScript</strong> - Type-safe JavaScript
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Tailwind CSS</strong> - Utility-first CSS framework
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>React</strong> - UI component library
              </li>
            </ul>
          </section>

          <section>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Get Involved
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              We're always looking to improve and expand this wiki. If you have
              suggestions, corrections, or would like to contribute, feel free
              to reach out to any of our team members or check out our{" "}
              <Link
                href="/resources"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                resources page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

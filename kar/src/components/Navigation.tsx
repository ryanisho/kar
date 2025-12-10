import Link from "next/link";

export default function Navigation() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "var(--background)",
        borderBottom: "1px solid #333",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "var(--font-geist-sans)",
        zIndex: 1000,
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        KAR Wiki
      </Link>

      <div style={{ display: "flex", gap: "2rem" }}>
        <Link
          href="/about"
          style={{
            textDecoration: "none",
            color: "inherit",
            opacity: 0.8,
            transition: "opacity 0.2s",
          }}
        >
          About
        </Link>
        <Link
          href="/projects"
          style={{
            textDecoration: "none",
            color: "inherit",
            opacity: 0.8,
            transition: "opacity 0.2s",
          }}
        >
          Projects
        </Link>
        <Link
          href="/blog"
          style={{
            textDecoration: "none",
            color: "inherit",
            opacity: 0.8,
            transition: "opacity 0.2s",
          }}
        >
          Blog
        </Link>
        <Link
          href="/resources"
          style={{
            textDecoration: "none",
            color: "inherit",
            opacity: 0.8,
            transition: "opacity 0.2s",
          }}
        >
          Resources
        </Link>
      </div>
    </nav>
  );
}

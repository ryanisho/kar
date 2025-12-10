"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import WikiCard from "@/components/WikiCard";

export default function Home() {
  return (
    <>
      <Navigation />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          fontFamily: "var(--font-geist-sans)",
          padding: "6rem 2rem 4rem",
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "clamp(8rem, 20vw, 20rem)",
            fontWeight: "bold",
            marginBottom: "4rem",
          }}
        >
          <Link
            href="/katherine"
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            K
          </Link>
          <Link
            href="/ashley"
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            A
          </Link>
          <Link
            href="/ryan"
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            R
          </Link>
        </div>

        {/* Welcome Text */}
        <div
          style={{
            maxWidth: "800px",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Welcome to KAR Wiki
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.6",
              opacity: 0.8,
            }}
          >
            A collaborative knowledge base by Katherine, Ashley, and Ryan.
            Explore our projects, read our blog posts, and discover resources
            for web development.
          </p>
        </div>

        {/* Quick Links */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Quick Links
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <WikiCard
              title="About Us"
              description="Learn more about the KAR Wiki team, our mission, and the technology stack we use."
              link="/about"
            />
            <WikiCard
              title="Projects"
              description="Browse our collection of web development projects and open source contributions."
              link="/projects"
            />
            <WikiCard
              title="Blog"
              description="Read articles and tutorials on React, Next.js, TypeScript, and modern web development."
              link="/blog"
            />
            <WikiCard
              title="Resources"
              description="Curated list of tools, libraries, and learning resources for developers."
              link="/resources"
            />
            <WikiCard
              title="Katherine"
              description="Full-stack developer with expertise in React, Node.js, and DevOps."
              link="/katherine"
            />
            <WikiCard
              title="Ashley"
              description="Frontend developer passionate about UI/UX design and accessibility."
              link="/ashley"
            />
            <WikiCard
              title="Ryan"
              description="Software engineer specializing in web applications and developer tooling."
              link="/ryan"
            />
          </div>
        </div>
      </div>
    </>
  );
}

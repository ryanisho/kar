"use client";

import Link from "next/link";

interface WikiCardProps {
  title: string;
  description: string;
  link: string;
}

export default function WikiCard({ title, description, link }: WikiCardProps) {
  return (
    <Link
      href={link}
      style={{
        display: "block",
        padding: "1.5rem",
        border: "1px solid #333",
        borderRadius: "0",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.2s",
        backgroundColor: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#666";
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#333";
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h3>
      <p style={{ opacity: 0.8, lineHeight: "1.6" }}>{description}</p>
    </Link>
  );
}

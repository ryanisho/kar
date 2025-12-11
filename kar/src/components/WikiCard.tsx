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
        border: "1px solid #ddd",
        borderRadius: "0.75rem",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "#fff",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#ccc";
        e.currentTarget.style.backgroundColor = "#fafafa";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#ddd";
        e.currentTarget.style.backgroundColor = "#fff";
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

import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontSize: "20rem",
        fontWeight: "bold",
        fontFamily: "var(--font-geist-sans)",
      }}
    >
      <Link
        href="/katherine"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        K
      </Link>
      <Link href="/ashley" style={{ textDecoration: "none", color: "inherit" }}>
        A
      </Link>
      <Link href="/ryan" style={{ textDecoration: "none", color: "inherit" }}>
        R
      </Link>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export default function ColorInverter({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // randomly choose between normal and inverted colors on mount
    const shouldInvert = Math.random() > 0.5;

    if (shouldInvert) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, []);

  return <>{children}</>;
}

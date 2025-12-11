"use client";

import { useEffect, useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function AboutSidebar() {
  // 🆕 1️⃣ Avoid SSR mismatch by rendering only after mount
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const activeId = useScrollSpy([
    "#what-is-kar",
    "#our-mission",
    "#tech-stack",
    "#get-involved",
  ]);

  if (!isMounted) {
    return <aside className="hidden md:block w-[250px]" />;
  }


  return (
    <aside
      className="
        border-r border-gray-200 dark:border-gray-800 
        p-6 hidden md:block sticky top-20 
        h-[calc(100vh-5rem)] 
        bg-white dark:bg-[#0a0a0a]
      "
    >
      <p className="uppercase text-xs font-semibold text-gray-400 dark:text-gray-500 mb-4 tracking-wider">
        On this page
      </p>

      <nav className="space-y-1 text-sm">
        {[
          { id: "what-is-kar", label: "What is KAR?" },
          { id: "our-mission", label: "Our Mission" },
          { id: "tech-stack", label: "Technology Stack" },
          { id: "get-involved", label: "Get Involved" },
        ].map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block px-3 py-2 rounded-md border-l-2 transition-all duration-200 ${
                isActive
                  ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-100 font-medium border-black dark:border-gray-100"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-black dark:hover:text-gray-200 border-transparent"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

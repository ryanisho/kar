"use client";
import { useEffect, useState } from "react";

export function useScrollSpy(selectors: string[], offset = 0) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset + 100; 
      let current = "";

      selectors.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element && element instanceof HTMLElement) {
          if (scrollPosition >= element.offsetTop) {
            current = selector.substring(1); 
          }
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectors, offset]);

  return activeId;
}

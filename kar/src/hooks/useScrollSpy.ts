"use client";
import { useEffect, useState } from "react";

export function useScrollSpy(selectors: string[], offset = 0) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollMidpoint = window.scrollY + window.innerHeight / 2;
      let currentSection = "";

      for (const selector of selectors) {
        const el = document.querySelector(selector);
        if (el && el instanceof HTMLElement) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollMidpoint >= top && scrollMidpoint < top + height) {
            currentSection = selector.substring(1);
            break;
          }
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        currentSection = selectors[selectors.length - 1].substring(1);
      }

      setActiveId(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectors, offset]);

  return activeId;
}

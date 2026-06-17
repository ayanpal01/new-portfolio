"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // ---- Scroll progress rule ----
    const rule = document.querySelector(".progress-rule") as HTMLElement;
    const updateProgress = () => {
      if (!rule) return;
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (scrolled / max) * 100 : 0;
      rule.style.width = pct + "%";
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  useEffect(() => {
    // ---- Scroll reveal ----
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => {
        io.observe(el);
      });
    } else {
      revealEls.forEach((el) => {
        el.classList.add("is-visible");
      });
    }

    return () => {
      if (typeof window !== "undefined" && "IntersectionObserver" in window) {
        revealEls.forEach((el) => {
          // io.unobserve is handled by disconnecting or the elements being removed
        });
      }
    };
  }, [pathname]);

  useEffect(() => {
    // ---- Footer year ----
    const yearEl = document.querySelector("[data-year]");
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
  }, []);

  return null;
}

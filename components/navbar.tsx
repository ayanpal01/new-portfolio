"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Pixelify_Sans } from "next/font/google";
import { flushSync } from "react-dom";

const pixelFont = Pixelify_Sans({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const isTransitioningRef = React.useRef(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted
    ? resolvedTheme === "dark"
    : typeof document !== "undefined" && document.documentElement.classList.contains("dark");

  const applyTheme = (nextTheme: "light" | "dark") => {
    try {
      localStorage.setItem("theme-user-choice", "true");
      localStorage.setItem("theme", nextTheme);
    } catch (e) {}

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    document.documentElement.style.colorScheme = nextTheme;
    setTheme(nextTheme);
  };

  const toggleTheme = (e?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    if (isTransitioningRef.current) return;

    const currentIsDark = document.documentElement.classList.contains("dark");
    const nextTheme: "light" | "dark" = currentIsDark ? "light" : "dark";

    // Respect reduced-motion preferences
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fallback for browsers that do not support the View Transitions API or if user prefers reduced motion
    if (
      typeof document === "undefined" ||
      !("startViewTransition" in document) ||
      typeof (document as any).startViewTransition !== "function" ||
      prefersReducedMotion
    ) {
      applyTheme(nextTheme);
      return;
    }

    // Capture the exact screen position and center coordinates of the toggle button
    const button = buttonRef.current;
    const rect = button?.getBoundingClientRect() || (e?.currentTarget as HTMLElement | undefined)?.getBoundingClientRect();

    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 40;
    const y = rect ? rect.top + rect.height / 2 : 28;

    // Calculate maximum radius dynamically so the circle completely covers all 4 corners of the viewport
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Set CSS variables on root so CSS animation keyframes have exact coordinates
    document.documentElement.style.setProperty("--clip-x", `${x}px`);
    document.documentElement.style.setProperty("--clip-y", `${y}px`);
    document.documentElement.style.setProperty("--clip-radius", `${endRadius}px`);

    isTransitioningRef.current = true;

    try {
      const transition = (document as any).startViewTransition(() => {
        flushSync(() => {
          applyTheme(nextTheme);
        });
      });

      transition.ready
        .then(() => {
          try {
            document.documentElement.animate(
              {
                clipPath: [
                  `circle(0px at ${x}px ${y}px)`,
                  `circle(${endRadius}px at ${x}px ${y}px)`,
                ],
              },
              {
                duration: 750,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                pseudoElement: "::view-transition-new(root)",
              }
            );
          } catch (err) {}
        })
        .catch(() => {});

      transition.finished.finally(() => {
        isTransitioningRef.current = false;
      });
    } catch (err) {
      applyTheme(nextTheme);
      isTransitioningRef.current = false;
    }
  };

  return (
    <nav className="w-full h-14 px-4 sm:px-6 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800/50 sticky top-0 z-50 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md">
      {/* Brand */}
      <Link 
        href="/" 
        className={`text-xl sm:text-2xl leading-none tracking-wide uppercase text-neutral-900 dark:text-neutral-100 shrink-0 ${pixelFont.className}`}
      >
        AYAN PAL
      </Link>
      
      {/* Navigation Links and Theme Toggle */}
      <div className="flex items-center gap-3 sm:gap-5 shrink-0">
        <Link 
          href="/projects" 
          className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors py-1 px-1"
        >
          Projects
        </Link>
        <Link 
          href="/contact" 
          className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors py-1 px-1"
        >
          Contact
        </Link>
        <div className="h-4 w-[1px] bg-neutral-200 dark:bg-neutral-800 shrink-0" />
        
        {/* Animated Circular Theme Toggle Button */}
        <button 
          ref={buttonRef}
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="relative inline-flex items-center justify-center rounded-full size-8 shrink-0 border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80 hover:scale-105 active:scale-95 transition-all duration-200 touch-manipulation cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
        >
          {/* Sun icon for light mode */}
          <Sun className="h-4 w-4 text-amber-500 transition-all duration-500 ease-out rotate-0 scale-100 opacity-100 dark:-rotate-90 dark:scale-0 dark:opacity-0 motion-reduce:transition-none" />
          
          {/* Moon icon for dark mode */}
          <Moon className="absolute h-4 w-4 text-neutral-600 dark:text-neutral-300 transition-all duration-500 ease-out rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100 motion-reduce:transition-none" />
          
          <span className="sr-only">
            {isDark ? "Switch to light mode" : "Switch to dark mode"}
          </span>
        </button>
      </div>
    </nav>
  );
}
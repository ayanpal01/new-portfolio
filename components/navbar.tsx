"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Pixelify_Sans } from "next/font/google";

const pixelFont = Pixelify_Sans({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    try {
      const isDark = document.documentElement.classList.contains("dark");
      const nextTheme = isDark ? "light" : "dark";
      localStorage.setItem("theme-user-choice", "true");
      localStorage.setItem("theme", nextTheme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(nextTheme);
      document.documentElement.style.colorScheme = nextTheme;
      setTheme(nextTheme);
    } catch (e) {
      setTheme("light");
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
        <button 
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative inline-flex items-center justify-center rounded-full size-8 shrink-0 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors touch-manipulation cursor-pointer"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
          <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-neutral-600 dark:text-neutral-300" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </nav>
  );
}
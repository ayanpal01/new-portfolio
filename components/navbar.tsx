"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Pixelify_Sans } from "next/font/google";

const pixelFont = Pixelify_Sans({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme, systemTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <nav className="w-full h-14 px-6 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800/50 sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md">
      {/* Brand */}
      <Link href="/" className={`text-2xl leading-none tracking-wide uppercase ${pixelFont.className}`}>
        AYAN PAL
      </Link>
      
      {/* Middle Links */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="/projects" className="text-[13px] text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
          Projects
        </Link>
        <Link href="/contact" className="text-[13px] text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
          Contact
        </Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-2 border-l border-neutral-200 dark:border-neutral-800/50 pl-4">
        <button 
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="inline-flex items-center justify-center rounded-full size-7 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors relative"
        >
          {mounted && (
            <>
              {isDark ? (
                <Sun className="h-[18px] w-[18px] text-neutral-500 hover:text-white transition-colors" />
              ) : (
                <Moon className="h-[18px] w-[18px] text-neutral-500 hover:text-black transition-colors" />
              )}
            </>
          )}
        </button>
      </div>
    </nav>
  );
}
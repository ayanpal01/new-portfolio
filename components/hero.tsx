"use client";

import * as React from "react";
import Image from "next/image";
import { Send , FileUser } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = React.useState(false);
  const [avatar, setAvatar] = React.useState<string>("/FaceAvatar.png");
  const { setTheme, resolvedTheme } = useTheme();

  const titles = ["Full Stack Developer", "MCA Student", "Problem Solver"];
  const [titleIndex, setTitleIndex] = React.useState(0);

  React.useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

  const isDark = resolvedTheme === "dark";

  const toggleAvatar = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAvatar((prev) => (prev === "/FaceAvatar.png" ? "/image.png" : "/FaceAvatar.png"));
  };

  const toggleTheme = () => {
    try {
      localStorage.setItem("theme-user-choice", "true");
    } catch (e) {}
    const newTheme = isDark ? "light" : "dark";
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }
    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <section className="relative w-full border-b border-neutral-200 dark:border-neutral-800/50" id="profile">
      {/* Dotted Background top half */}
      <div 
        className="absolute top-0 left-0 w-full h-40 opacity-20 dark:opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #888 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      
      <div className="pt-24 pb-8 px-6 flex flex-col gap-5">
        {/* Top Row: Avatar and Info */}
        <div className="flex flex-row items-center gap-6 z-10">
          <button 
            type="button"
            className="relative w-24 h-24 cursor-pointer overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black shadow-sm shrink-0 active:scale-95 transition-transform touch-manipulation focus:outline-none select-none"
            onClick={toggleAvatar}
            title="Click to swap avatar"
            aria-label="Click to swap profile photo"
          >
            <Image 
              src="/FaceAvatar.png"
              alt="Ayan Pal"
              fill
              className={`object-cover p-1 rounded-2xl transition-opacity duration-300 ${avatar === "/FaceAvatar.png" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
              sizes="96px"
              priority
            />
            <Image 
              src="/image.png"
              alt="Ayan Pal Alternate"
              fill
              className={`object-cover p-1 rounded-2xl transition-opacity duration-300 ${avatar === "/image.png" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
              sizes="96px"
              priority
            />
          </button>

          <div className="flex flex-col">
            <h1 className="text-[22px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Ayan Pal
            </h1>
            <div className="text-[13px] text-neutral-500 dark:text-neutral-400 font-medium h-[20px] overflow-hidden relative w-[180px] mt-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={titleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 whitespace-nowrap"
                >
                  {titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[14px] text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
          MCA student & developer building clean, fast web experiences with React, Next.js, and TypeScript. Focused on modern UI, scalable backends, and practical AI integrations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="mailto:work.ayanpal@gmail.com"
            className="flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[13px] font-medium px-4 py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-[13px] font-medium px-4 py-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors border border-neutral-200/50 dark:border-neutral-800/50"
          >
            <FileUser className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

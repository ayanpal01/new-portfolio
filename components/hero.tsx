"use client";

import * as React from "react";
import Image from "next/image";
import { Send , FileUser } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = React.useState(false);
  const [avatar, setAvatar] = React.useState("/FaceAvatar.png");
  const { setTheme, theme, systemTheme } = useTheme();

  const titles = ["Full Stack Developer", "MCA Student", "Problem Solver"];
  const [titleIndex, setTitleIndex] = React.useState(0);

  React.useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
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
          <div 
            className="relative w-24 h-24 cursor-pointer overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black shadow-sm shrink-0"
            onClick={() => setAvatar(prev => prev === "/FaceAvatar.png" ? "/image.png" : "/FaceAvatar.png")}
            title="Click to swap avatar"
          >
            <Image 
              src={avatar}
              alt="Ayan Pal"
              fill
              className="object-cover transition-opacity duration-300 p-1 rounded-2xl"
              sizes="96px"
              priority
            />
          </div>

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

        {/* Bottom Row: Actions */}
        <div className="flex gap-3 z-10">
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-800 dark:border-neutral-200 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-50 transition-colors text-[11px] font-medium text-neutral-300 dark:text-neutral-700 cursor-pointer"
          >
            <FileUser className="w-3 h-3 text-blue-600" />
            View Resume
          </a>
          <a 
            href="/contact"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-800 dark:border-neutral-200 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-50 transition-colors text-[11px] font-medium text-neutral-300 dark:text-neutral-700 cursor-pointer"
          >
            <Send className="w-3 h-3 text-cyan-600" />
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

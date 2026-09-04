import * as React from "react";
import Link from 'next/link';
import Connect from "@/components/connect";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";

export const metadata = {
  title: "About | Ayan Pal",
  description: "I engineer digital experiences that are fast, accessible, and visually striking.",
};

export default function AboutAyanPal() {
  return (
    <div className="relative w-full">
      {/* Dotted Background top half */}
      <div 
        className="absolute top-0 left-0 w-full h-40 opacity-20 dark:opacity-40 pointer-events-none z-[-1]"
        style={{
          backgroundImage: "radial-gradient(circle, #888 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      
      <div className="pt-24 pb-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50">
        <div className="flex items-center gap-2 mb-4">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Available for new opportunities</span>
        </div>
        <h1 className="text-[22px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Hi, I'm Ayan Pal.
        </h1>
        <p className="text-[14px] text-neutral-500 dark:text-neutral-400 font-medium max-w-xl leading-relaxed">
          I engineer digital experiences that are fast, accessible, and visually striking — building the modern web from Kolkata, India.
        </p>
        
        <div className="flex items-center gap-3 mt-6">
          <Link href="/projects" className="inline-flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-[12px] font-medium transition-opacity hover:opacity-90">
            View My Work →
          </Link>
          <a href="#details" className="inline-flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-[12px] font-medium text-neutral-900 dark:text-neutral-100 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900">
            Read My Story
          </a>
        </div>
      </div>

      <section id="details" className="py-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50">
        <h2 className="text-[17px] font-medium mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">The journey so far</h2>
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
          I am a software developer and technology enthusiast who focuses on creating exceptional web experiences by bridging the gap between design and engineering. With a working knowledge of the full stack and a keen eye for detail, I bring ideas to life — from a Figma frame to a deployed build.
        </p>
      </section>

      <section className="py-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50">
        <h2 className="text-[17px] font-medium mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">How I work</h2>
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
          I believe in writing code that's as clean beneath the surface as the interface is on screen. Performance, accessibility, and scalability are never afterthoughts — they're part of the spec from line one.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="text-[14px] font-medium text-neutral-900 dark:text-neutral-100 mb-2">Based in India</h3>
            <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Working from the vibrant city of Kolkata, I collaborate with teams and clients globally to deliver production-ready software.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
            <h3 className="text-[14px] font-medium text-neutral-900 dark:text-neutral-100 mb-2">Academic background</h3>
            <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Pursuing a Master of Computer Applications (MCA) at Adamas University (2025–2027). My academic work aligns closely with my professional focus.
            </p>
          </div>
        </div>
      </section>

      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Connect />

    </div>
  );
}

import * as React from "react";
import ProjectsComponent from "@/components/projects";

export const metadata = {
  title: "Projects | Ayan Pal",
  description: "A selection of my recent work and side projects.",
};

export default function ProjectsPage() {
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
        <h1 className="text-[22px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
          Projects
        </h1>
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400 font-medium">
          A selection of my recent work and side projects.
        </p>
      </div>
      <ProjectsComponent />
    </div>
  );
}

import * as React from "react";
import { ExternalLink, FileText, BrainCircuit, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  SiNextdotjs,
  SiTypescript,
  SiSocketdotio,
  SiReact,
  SiJavascript,
  SiCss,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    name: "SketchSync",
    description:
      "Real-time collaborative whiteboard that turns a phone into a wireless pen tablet, synchronized using Socket.IO.",
    tech: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
      },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      {
        name: "Socket.IO",
        icon: SiSocketdotio,
        color: "text-zinc-800 dark:text-zinc-400",
      },
    ],
    img: "/SketchSync.png",
    live: "https://sketch-sync-rho.vercel.app/",
    code: "https://github.com/ayanpal01",
    // bgColor: "bg-orange-100 dark:bg-orange-950"
  },
  {
    name: "IngrediScan",
    description:
      "Full-stack nutrition analysis application supporting image/OCR input with AI-powered analysis.",
    tech: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
      },
      { name: "AI/GROQ", icon: BrainCircuit, color: "text-green-600" },
    ],
    img: "/IngrediScan.png",
    live: "https://ingredi-scan.vercel.app/",
    code: "https://github.com/ayanpal01",
    bgColor: "bg-blue-100 dark:bg-blue-950",
  },
  {
    name: "PG Master",
    description:
      "Role-based PG management system for attendance, expense management and payment-receipt generation.",
    tech: [
      { name: "React", icon: SiReact, color: "text-sky-500" },
      { name: "jsPDF", icon: FileText, color: "text-red-500" },
    ],
    img: "/PgMaster.png",
    live: "https://pg-master-gilt.vercel.app/",
    code: "https://github.com/ayanpal01",
    bgColor: "bg-purple-100 dark:bg-purple-950",
  },
  {
    name: "Novara",
    description:
      "Full-stack fashion e-commerce platform with product management, authentication, cart and wishlist features, secure Razorpay payments, order tracking, reviews, and an admin dashboard.",
    tech: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
      },
      { name: "React", icon: SiReact, color: "text-sky-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "Razorpay", icon: CreditCard, color: "text-blue-500" },
    ],
    img: "/novara.png",
    live: "",
    code: "https://github.com/ayanpal01/novara",
    bgColor: "bg-rose-100 dark:bg-rose-950",
  },
  {
    name: "Weather Dash",
    description:
      "Minimal weather application providing live weather information including temperature and wind speed.",
    tech: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "CSS", icon: SiCss, color: "text-blue-400" },
    ],
    img: "/WeatherDash.png",
    live: "https://simple-weather-website-eight.vercel.app/",
    code: "https://github.com/ayanpal01",
    bgColor: "bg-emerald-100 dark:bg-emerald-950",
  },
];

export default function Projects({ limit }: { limit?: number }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section
      className="py-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50"
      id="projects"
    >
      <h2 className="text-[17px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedProjects.map((project, index) => (
          <div key={index} className="flex flex-col group">
            {/* Image Placeholder : image in center */}
            <div
              className={`w-full aspect-video rounded-xl mb-3 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 relative overflow-hidden`}
            >
              {project.img ? (
                <Image
                  src={project.img}
                  alt={project.name}
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <span className="text-neutral-400 dark:text-neutral-600 font-medium text-[13px]">
                  Project Preview
                </span>
              )}
            </div>

            {/* Header: Title and Links */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[14px] font-medium text-neutral-900 dark:text-neutral-100">
                {project.name}
              </h3>
              <div className="flex gap-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] font-medium bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                >
                  Live <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] font-medium bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                >
                  <FaGithub className="w-3 h-3" />
                  Code
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-[12px] text-neutral-500 dark:text-neutral-400 mb-3 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tech.map((t, i) => {
                const Icon = t.icon;
                return (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-[10px] font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    <Icon className={`w-2.5 h-2.5 ${t.color}`} />
                    {t.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {limit && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="text-[12px] font-medium bg-neutral-100 dark:bg-neutral-900 px-4 py-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1"
          >
            See all projects <span>→</span>
          </Link>
        </div>
      )}
    </section>
  );
}

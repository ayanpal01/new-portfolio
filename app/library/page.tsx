import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

const BASE_URL = "https://www.ayanpal.tech";

export const metadata: Metadata = {
  title: "Library | Ayan Pal",
  description: "A curated collection of frameworks, developer tools, AI architectures, and technical references used by Ayan Pal (ayanpal01).",
  openGraph: {
    title: "Library | Ayan Pal",
    description: "A curated collection of frameworks, developer tools, AI architectures, and technical references used by Ayan Pal (ayanpal01).",
    url: `${BASE_URL}/library`,
    images: [
      {
        url: `${BASE_URL}/ayan-pal-img3.jpg`,
        width: 1254,
        height: 1254,
        alt: "Ayan Pal Library",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/library`,
  },
};

interface LibraryResource {
  name: string;
  description: string;
  tag: string;
  url: string;
}

interface LibraryCategory {
  title: string;
  items: LibraryResource[];
}

const libraryCategories: LibraryCategory[] = [
  {
    title: "Core Stack & Frameworks",
    items: [
      {
        name: "Next.js",
        description: "Full-stack React framework for production with App Router, Turbopack, and SSR.",
        tag: "Framework",
        url: "https://nextjs.org",
      },
      {
        name: "React 19",
        description: "Component-driven frontend architecture with Server Actions and concurrent rendering.",
        tag: "Frontend",
        url: "https://react.dev",
      },
      {
        name: "TypeScript",
        description: "Static type system ensuring type safety, self-documenting code, and clean refactoring.",
        tag: "Language",
        url: "https://www.typescriptlang.org",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first modern CSS framework enabling fast, composable, responsive styling.",
        tag: "Styling",
        url: "https://tailwindcss.com",
      },
      {
        name: "Node.js & Express",
        description: "Asynchronous event-driven runtime and minimalist web framework for scalable REST APIs.",
        tag: "Backend",
        url: "https://nodejs.org",
      },
    ],
  },
  {
    title: "AI & Multi-Agent Systems",
    items: [
      {
        name: "Groq Cloud API",
        description: "Ultra-low latency LPU inference engine powering sub-second LLM streaming and reasoning.",
        tag: "LLM Engine",
        url: "https://groq.com",
      },
      {
        name: "LangChain & LangGraph",
        description: "Stateful multi-agent decision framework for cyclical AI workflows and agent orchestration.",
        tag: "Agent AI",
        url: "https://www.langchain.com",
      },
      {
        name: "Model Context Protocol (MCP)",
        description: "Open standard protocol for connecting AI models to local databases, tools, and dev environments.",
        tag: "Protocol",
        url: "https://modelcontextprotocol.io",
      },
      {
        name: "Hugging Face",
        description: "Open ecosystem for state-of-the-art transformer models, embeddings, and AI pipelines.",
        tag: "Models & NLP",
        url: "https://huggingface.co",
      },
    ],
  },
  {
    title: "Databases & Storage",
    items: [
      {
        name: "MongoDB & Mongoose",
        description: "Document-oriented NoSQL database optimized for high-throughput JSON workloads.",
        tag: "NoSQL",
        url: "https://www.mongodb.com",
      },
      {
        name: "PostgreSQL & Prisma",
        description: "ACID-compliant relational database paired with type-safe ORM schema migrations.",
        tag: "SQL & ORM",
        url: "https://www.prisma.io",
      },
      {
        name: "Firebase",
        description: "Google cloud platform for real-time database sync, user auth, and cloud assets.",
        tag: "Cloud BaaS",
        url: "https://firebase.google.com",
      },
    ],
  },
  {
    title: "Dev Tools & UI Motion",
    items: [
      {
        name: "Framer Motion",
        description: "Declarative animation library for fluid page transitions, gestures, and layout morphing.",
        tag: "Animation",
        url: "https://www.framer.com/motion",
      },
      {
        name: "Postman",
        description: "Comprehensive platform for designing, testing, inspecting, and mocking API endpoints.",
        tag: "API Testing",
        url: "https://www.postman.com",
      },
      {
        name: "GitHub & Actions",
        description: "Version control platform with automated continuous integration and test verification.",
        tag: "DevOps",
        url: "https://github.com/ayanpal01",
      },
    ],
  },
  {
    title: "Learning & Problem Solving",
    items: [
      {
        name: "LeetCode",
        description: "Algorithmic problem solving and data structures practice to refine core CS fundamentals.",
        tag: "DSA Practice",
        url: "https://leetcode.com/ayanpal01",
      },
      {
        name: "MDN Web Docs",
        description: "The authoritative web development documentation for HTML5, CSS3, JavaScript, and Web APIs.",
        tag: "Web Standards",
        url: "https://developer.mozilla.org",
      },
      {
        name: "Refactoring.Guru",
        description: "Interactive visual guides to Object-Oriented design patterns, clean architecture, and SOLID principles.",
        tag: "Architecture",
        url: "https://refactoring.guru",
      },
    ],
  },
];

export default function LibraryPage() {
  return (
    <div className="w-full pb-24">
      {/* Header (Same exact UI and layout as /contact and /) */}
      <div className="pt-24 pb-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50">
        <h1 className="text-[22px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
          Library
        </h1>
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400 font-medium">
          A curated collection of frameworks, developer tools, AI architectures, and technical references I use daily.
        </p>
      </div>

      {/* Sections (Same exact UI style as /contact Fastest routes and / experience) */}
      {libraryCategories.map((category, idx) => {
        const isLast = idx === libraryCategories.length - 1;
        return (
          <section
            key={category.title}
            className={`py-8 px-6 ${isLast ? "" : "border-b border-neutral-200 dark:border-neutral-800/50"}`}
          >
            <h2 className="text-[15px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">
              {category.title}
            </h2>
            <div className="flex flex-col gap-4">
              {category.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center group py-1"
                >
                  <div className="flex flex-col pr-4">
                    <span className="text-[13px] font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">
                      {item.name}
                    </span>
                    <span className="text-[12px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                      {item.description}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                      {item.tag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}


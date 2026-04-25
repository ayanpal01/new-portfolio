"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, ArrowRight, Github, Globe } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "SketchSync",
        subtitle: "Real-time Collaborative Whiteboard",
        description: "Transform mobile devices into wireless pen tablets. Engineered with real-time synchronization using Socket.IO, featuring secure room-based access and seamless latency-free drawing.",
        tags: ["Socket.IO", "Next.js", "TypeScript", "Tailwind CSS"],
        links: {
            demo: "https://sketch-sync-rho.vercel.app/"
        },
        gradient: "from-blue-500/20 to-indigo-500/20",
        border: "group-hover:border-blue-500/30"
    },
    {
        title: "IngrediScan",
        subtitle: "AI Nutrition Analysis Platform",
        description: "A full-stack application for modern nutrition analysis. Upload images for OCR processing or input text directly to receive AI-powered health scores and ingredient insights via the GROQ API.",
        tags: ["Next.js", "TypeScript", "AI", "GROQ API"],
        links: {
            demo: "https://ingredi-scan.vercel.app"
        },
        gradient: "from-emerald-500/20 to-teal-500/20",
        border: "group-hover:border-emerald-500/30"
    },
    {
        title: "PG Master",
        subtitle: "Complete Property Management",
        description: "A comprehensive, role-based PG facility management system. Streamlines daily operations with modules for attendance tracking, expense logging, and payment receipt generation.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "jsPdf"],
        links: {
            demo: "https://pg-master-gilt.vercel.app"
        },
        gradient: "from-orange-500/20 to-red-500/20",
        border: "group-hover:border-orange-500/30"
    },
    {
        title: "Weather Dash",
        subtitle: "Minimalist Weather Client",
        description: "A clean, beautiful, and hyper-fast weather application. Provides beautifully formatted real-time weather metrics including temperature trends, wind speed, and atmospheric conditions based on global city search.",
        tags: ["JavaScript", "API Integration", "CSS"],
        links: {
            demo: "https://simple-weather-website-eight.vercel.app"
        },
        gradient: "from-cyan-500/20 to-blue-500/20",
        border: "group-hover:border-cyan-500/30"
    }
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-slate-900 selection:text-white pt-24 pb-20">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/40 rounded-full blur-3xl" />
                {/* Dotted Grid */}
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            </div>

            <div className="max-w-8xl mx-auto px-4 md:px-8 relative z-10">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl tracking-wide font-extrabold text-slate-900 mb-6 font-sans">
                        PROJECTS
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        A curated selection of projects I've designed and engineered. From real-time web sockets to AI integrations.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative bg-white/60 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden ${project.border}`}
                        >
                            {/* Abstract Gradient Blob Background */}
                            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10 flex-grow">
                                <h4 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">
                                    {project.subtitle}
                                </h4>
                                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex} 
                                            className="px-3 py-1.5 bg-slate-100/80 border border-slate-200/50 rounded-lg text-sm text-slate-700 font-medium backdrop-blur-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-md group-hover:shadow-xl group-hover:shadow-blue-900/20 active:scale-95"
                                    >
                                        <Globe size={18} />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center pt-10 border-t border-slate-200"
                >
                    <a
                        href="https://github.com/ayanpal01?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-lg rounded-full font-medium transition-all group"
                    >
                        <Github size={20} className="group-hover:scale-110 transition-transform" />
                        Explore More on GitHub
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </main>
    );
}

// Simple local SVG component for the Sparkles top badge
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
        </svg>
    )
}

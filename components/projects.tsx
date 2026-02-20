"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Bug, CodeXml,FolderGit2, LayoutTemplate } from 'lucide-react';

const projects = [
    {
        title: "NearShield",
        description: "A safety app that locates nearby emergency services, shows real-time weather/alerts, and lets users report incidents with photos. Built with React Native and Expo.",
        tags: ["React Native", "Expo", "Mapbox", "JavaScript"],
        links: {
            github: "https://github.com/ayanpal01/NearShield",
            demo: null
        }
    },
    {
        title: "IngrediScan",
        description: "A full-stack application for nutrition analysis. Features image upload with OCR, text input, and AI-powered analysis via GROQ to provide health scores and ingredient insights.",
        tags: ["Next.js", "TypeScript", "AI", "GROQ API"],
        links: {
            github: "https://github.com/ayanpal01/NutriLens.ai",
            demo: "https://ingredi-scan.vercel.app"
        }
    },
    {
        title: "Simple Weather Website",
        description: "A clean and simple weather application that provides real-time weather information based on the city entered. Displays temperature, wind speed, and more.",
        tags: ["JavaScript", "API Integration", "CSS"],
        links: {
            github: "https://github.com/ayanpal01/simple-weather-website",
            demo: "https://simple-weather-website-eight.vercel.app"
        }
    },
    {
        title: "Airbnb Clone",
        description: "A functional clone of the Airbnb platform features, showcasing frontend development skills and UI replication.",
        tags: ["React", "UI/UX", "Clone"],
        links: {
            github: "https://github.com/ayanpal01/Airbnb-clone",
            demo: null
        }
    }
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-0">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-zinc-900 mb-8"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-zinc-100 rounded-lg text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                                        <FolderGit2 size={24} />
                                    </div>
                                    <div className="flex gap-3 text-zinc-400">
                                        {project.links.github && (
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                                                <CodeXml size={20} />
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                                <LayoutTemplate size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-600 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium text-zinc-500 font-mono">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="https://github.com/ayanpal01?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-zinc-600 hover:text-black font-medium transition-colors"
                    >
                        View all repositories <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}

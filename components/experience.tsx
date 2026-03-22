"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Full Stack Developer",
        company: "Intelli Edtech",
        period: "Jan 2026 - Present",
        description: "Developed a multimodal AI system to detect and categorize previous year examination questions, built automated database integration for storage and retrieval, and delivered full-stack features to streamline question processing workflows."
    },
    {
        role: "Frontend Web Dev Intern",
        company: "Azmth",
        period: "Jun 2023 - May 2025",
        description: "Built responsive and interactive user interfaces using Nextjs, Reactjs, TypeScript, Tailwindcss, and other modern web technologies. Worked closely with designers to translate UI/UX designs into production-ready components and improved page load performance and accessibility."
    }
];

export default function Experience() {
    return (
        <section className="w-full py-20 ">
            <div className="max-w-4xl mx-auto px-4 md:px-0">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-zinc-900 mb-12"
                >
                    Work & Experience
                </motion.h2>

                <div className="flex flex-col gap-8 relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-zinc-200 md:left-8" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-12 md:pl-20"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-2 md:left-6 top-1 w-4 h-4 rounded-full bg-white border-4 border-black z-10" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-zinc-900">{exp.role}</h3>
                                <span className="text-sm font-medium text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="text-zinc-600 font-medium mb-2 flex items-center gap-2">
                                <Briefcase size={16} />
                                {exp.company}
                            </div>

                            <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

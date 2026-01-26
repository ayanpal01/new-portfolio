"use client";

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "C++", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Flutter", category: "Mobile" },
    { name: "Git", category: "Tools" },
];

export default function Skills() {
    return (
        <section className="w-full py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-0">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-zinc-900 mb-8"
                >
                    Skills & Technologies
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl flex flex-col items-start gap-2 shadow-sm hover:shadow-md transition-shadow cursor-default"
                        >
                            <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md">
                                {skill.category}
                            </span>
                            <span className="font-semibold text-zinc-800 text-lg">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

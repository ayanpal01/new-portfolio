"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Code2 } from 'lucide-react';

const achievements = [
    {
        title: "LeetCode",
        metric: "350+",
        badge: "Problems Solved",
        icon: Code2,
        description: "Consistently sharpening problem-solving skills with DSA."
    },
    {
        title: "Academic",
        metric: "8.91",
        badge: "CGPA (BCA)",
        icon: GraduationCap,
        description: "Graduated with distinction from Adamas University."
    },
    // {
    //     title: "Flipkart GRID 6.0",
    //     metric: "Hackathon",
    //     badge: "Participant",
    //     icon: Trophy,
    //     description: "Participated in the prestigious national level hackathon solving algorithmic challenges."
    // },
];

export default function Achievements() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-0">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-zinc-900 mb-12"
                >
                    Achievements
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="group relative h-[240px] rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-all"
                        >
                            {/* Icon Background */}
                            <div className="absolute top-6 right-6 p-3 bg-zinc-50 rounded-xl group-hover:bg-zinc-100 transition-colors">
                                <item.icon size={24} className="text-zinc-600 group-hover:text-black transition-colors" />
                            </div>

                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-2">{item.title}</div>
                                    <div className="text-4xl font-bold text-zinc-900 tracking-tight mb-3">{item.metric}</div>
                                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">
                                        {item.badge}
                                    </div>
                                </div>

                                <p className="text-sm text-zinc-600 leading-relaxed pt-4 border-t border-zinc-100 mt-4">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

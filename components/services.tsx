"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Server } from 'lucide-react';

const services = [
    {
        title: "Web Development",
        icon: Layout,
        description: "Building high-performance, responsive websites using Next.js, React, and Tailwind CSS. Focused on SEO and user experience."
    },
    {
        title: "Mobile App Development",
        icon: Smartphone,
        description: "Creating cross-platform mobile applications with React Native. Delivering smooth, native-like experiences for iOS and Android."
    },
    {
        title: "Backend & API",
        icon: Server,
        description: "Designing scalable server-side architectures, RESTful APIs, and database solutions using Node.js, Express, and modern DBs."
    }
];

export default function Services() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-zinc-900 mb-4">What I Do</h2>
                    <p className="text-zinc-500 max-w-2xl">
                        I help businesses and individuals bring their ideas to life with robust, scalable, and user-friendly digital solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="group relative min-h-[260px] rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 hover:shadow-lg transition-all flex flex-col"
                        >
                            <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-black transition-colors duration-300 flex-shrink-0">
                                <service.icon size={24} className="text-zinc-700 group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-2 md:mb-3">{service.title}</h3>
                            <p className="text-sm text-zinc-600 leading-relaxed break-words">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

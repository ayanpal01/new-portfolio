"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Code, Briefcase, GraduationCap, Laptop, Sparkles, Server } from 'lucide-react';
import Image from 'next/image';

export default function AboutAyanPal() {
    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);
    
    return (
        <div className="min-h-screen bg-slate-50 selection:bg-slate-900 selection:text-white">
            {/* Hero Section */}
            <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-slate-50 pt-20 px-4 md:px-8">
                {/* Background Details */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-indigo-100/50 rounded-full blur-3xl" />
                    {/* Dotted Grid Overlay */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                </div>

                <motion.div 
                    style={{ y: yHero }}
                    className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative mb-10 group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden">
                            <Image
                                src="/ayan1.jpg"
                                alt="Ayan Pal"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-slate-700 tracking-wide">Available for New Opportunities</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                            Hi, I'm Ayan Pal.
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                            I engineer digital experiences that are fast, accessible, and visually striking. Building the modern web from <strong className="text-slate-900">Kolkata, India</strong>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="/projects"
                                className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20"
                            >
                                View My Work
                            </a>
                            <a
                                href="#details"
                                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all hover:scale-105 active:scale-95"
                            >
                                Read My Story
                            </a>
                        </div>

                        <div className="mt-14 flex items-center justify-center gap-8 text-slate-400">
                            <a href="https://github.com/ayanpal01" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors transform hover:-translate-y-1">
                                <Github size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/ayanpal01" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors transform hover:-translate-y-1">
                                <Linkedin size={28} />
                            </a>
                            <a href="mailto:work.ayanpal@gmail.com" className="hover:text-red-500 transition-colors transform hover:-translate-y-1">
                                <Mail size={28} />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
                
                {/* Scroll Down Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-slate-300 to-transparent mx-auto" />
                </motion.div>
            </section>

            {/* About Details Section */}
            <section id="details" className="w-full px-4 md:px-8 py-32 bg-white relative">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 md:mb-24"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">The Journey So Far</h2>
                        <div className="w-20 h-1 bg-blue-500 rounded-full mb-10" />
                        
                        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-light">
                            I am a software developer and technology enthusiast. I focus on creating exceptional web experiences by bridging the gap between design and engineering. With deep knowledge of the full stack and a keen eye for detail, I bring ideas to life.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Location & Role */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <MapPin className="text-slate-700" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Based in India</h3>
                            <p className="text-slate-600 leading-relaxed font-light">
                                Working from the vibrant city of <strong>Kolkata</strong>, I collaborate with teams and clients globally to deliver production-ready software.
                            </p>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group lg:col-span-2"
                        >
                            <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Code className="text-slate-700" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Technology Arsenal</h3>
                            <p className="text-slate-600 leading-relaxed font-light mb-6">
                                Fluent in the modern JavaScript/TypeScript ecosystem. I specialize in building SPAs, SSG/SSR applications, and robust backend microservices.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'AI Integration'].map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group lg:col-span-2"
                        >
                            <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <GraduationCap className="text-slate-700" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Academic Background</h3>
                            <p className="text-slate-600 leading-relaxed font-light">
                                Pursuing a <strong>Master of Computer Applications (MCA)</strong> at <strong>Adamas University</strong> (2025-2027). 
                                My academic journey strongly aligns with my professional work, focusing heavily on software engineering principles, algorithms, and advanced systems architecture.
                            </p>
                        </motion.div>

                        {/* Approach */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Sparkles className="text-slate-700" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Development Ethos</h3>
                            <p className="text-slate-600 leading-relaxed font-light">
                                I believe in writing code that is as clean beneath the surface as the interface is on the screen. Performance, accessibility, and scalability are never afterthoughts.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

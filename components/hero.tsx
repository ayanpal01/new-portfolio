"use client";

import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Scan } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;

        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="relative w-full min-h-[85vh] overflow-hidden bg-white">
            <svg
                className="absolute left-0 top-0 h-full w-[45%] opacity-60"
                viewBox="0 0 600 800"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="heroDotPattern"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx="2" cy="2" r="1.4" fill="rgba(0,0,0,0.28)" />
                        <circle cx="14" cy="16" r="1" fill="rgba(0,0,0,0.18)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#heroDotPattern)" />
            </svg>
            <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 pt-20 px-4 md:px-20">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 flex flex-col justify-center items-start z-10"
                >
                <div className="mb-2 flex items-center justify-center gap-2 px-3 py-1.5">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
                    </span>
                    <span className="text-[12px] font-semibold text-gray-700 uppercase tracking-wide">Available for Full-Stack opportunities & Freelance</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
                    Building digital <br />
                    <span className="text-zinc-500">experiences that matter.</span>
                </h1>
                <p className="text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
                    I'm <a href="/about-ayan-pal" className="font-semibold text-zinc-900 hover:underline">Ayan Pal </a>, a Full Stack Developer passionate about creating intuitive, scalable, and beautiful web applications.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <motion.a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors"
                    >
                        View Projects <ArrowRight size={18} />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-full font-medium border border-zinc-200 hover:bg-zinc-50 transition-colors text-zinc-900"
                    >
                        Contact Me
                    </motion.a>
                </div>

                <div className="mt-12 flex items-center gap-6 text-zinc-400">
                    <a href="https://github.com/ayanpal01" target="_blank" className="hover:text-black transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ayanpal01" className="hover:text-blue-600 transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:work.ayanpal@gmail.com" className="hover:text-red-500 transition-colors">
                        <Mail size={24} />
                    </a>
                </div>
                </motion.div>

                {/* Right Content - 3D ID Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-1/2 flex justify-center items-center perspective-1000"
                    style={{ perspective: 1000 }}
                >
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-[320px] h-[480px] bg-white rounded-3xl shadow-2xl border border-zinc-200/60 p-6 flex flex-col items-center select-none cursor-pointer group"
                    >
                    {/* Floating Elements for Depth */}
                    <div
                        className="absolute inset-0 rounded-3xl border-2 border-zinc-50 pointer-events-none"
                        style={{ transform: "translateZ(20px)" }}
                    />

                    {/* Header Hole Punch Look */}
                    <div className="w-16 h-2 bg-zinc-200 rounded-full mb-8" />

                    {/* Profile Image */}
                    <div className="relative group-hover:scale-105 transition-transform duration-500" style={{ transform: "translateZ(50px)" }}>
                        <motion.div
                            className="w-32 h-32 rounded-full border-[6px] border-white shadow-xl overflow-hidden mb-6 relative z-10 aspect-square mx-auto"
                        >
                            <Image
                                src="/ayan1.jpg"
                                alt="Ayan Pal Full Stack Web Developer from India"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Text Details */}
                    <motion.div
                        className="text-center w-full"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        <h2 className="text-2xl font-bold text-zinc-900">Ayan Pal</h2>
                        <p className="text-zinc-500 font-semibold mt-1">Full Stack Dev</p>

                        <div className="mt-4 flex flex-col items-center gap-2 text-sm text-zinc-600">
                            <div className="flex items-center gap-2 font-medium">
                                <span>MCA Student</span>
                                <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                                <span>2025-2027</span>
                            </div>
                            <p className="text-xs text-zinc-500">Adamas University</p>

                            <div className="w-2/3 h-[1px] bg-zinc-100 my-1" />

                            <div className="text-xs flex flex-col gap-1 items-center text-zinc-500">
                                <p>Kolkata, West Bengal</p>
                                <p className="font-mono">+91-908XX XXX50</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Section - Signature */}
                    <motion.div
                        className="mt-auto w-full flex justify-center items-end"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        <div className="h-8 w-28 relative opacity-60">
                            {/* Simulated Signature */}
                            <svg width="100%" height="100%" viewBox="0 0 120 40" fill="none" stroke="currentColor" className="text-zinc-800">
                                <path d="M10,30 Q30,10 50,30 T80,20 T110,30" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

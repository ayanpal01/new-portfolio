"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import Image from 'next/image';
import GallerySection from '@/components/galaryview';

export default function AboutAyanPal() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 pt-20 px-4 md:px-20 bg-white">
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
                        Ayan Pal – <br />
                        <span className="text-zinc-500">Full-Stack Web Developer</span>
                    </h1>

                    {/* <div className="mb-4 px-4 py-2 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                        <p className="text-sm text-blue-800 font-medium">
                            👨‍💻 <strong>Note:</strong> This is Ayan Pal, the <strong>Full-Stack Web Developer from India</strong>, not the author or public speaker.
                        </p>
                    </div> */}

                    <p className="text-xl text-zinc-600 mb-6 max-w-lg leading-relaxed">
                        I'm <strong>Ayan Pal</strong>, a passionate Full-Stack Web Developer based in <strong>Kolkata, India</strong>. I specialize in building modern, scalable web applications using cutting-edge technologies like <strong>React</strong>, <strong>Next.js</strong>, <strong>React Native</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong>, and <strong>AI-powered solutions</strong>.
                    </p>

                    <p className="text-lg text-zinc-600 mb-8 max-w-lg leading-relaxed">
                        As a technology professional, my work focuses on software engineering, web development, and creating innovative digital products. I bring technical expertise, clean code practices, and creative problem-solving to every project—from dynamic frontend interfaces to robust backend systems and intelligent AI integrations.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <motion.a
                            href="/#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors"
                        >
                            View Portfolio
                        </motion.a>

                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-full font-medium border border-zinc-200 hover:bg-zinc-50 transition-colors text-zinc-900"
                        >
                            Contact Me
                        </motion.a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-zinc-400">
                        <a href="https://github.com/ayanpal01" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" aria-label="GitHub Profile">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/ayanpal01" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="LinkedIn Profile">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:work.ayanpal@gmail.com" className="hover:text-red-500 transition-colors" aria-label="Email Contact">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-1/2 flex justify-center items-center"
                >
                    <div className="relative w-[320px] h-[480px] bg-white rounded-3xl shadow-2xl border border-zinc-200/60 p-6 flex flex-col items-center">
                        {/* Header Hole Punch Look */}
                        <div className="w-16 h-2 bg-zinc-200 rounded-full mb-8" />

                        {/* Profile Image */}
                        <div className="relative">
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
                        <div className="text-center w-full">
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
                        </div>

                        {/* Bottom Section - Signature */}
                        <div className="mt-auto w-full flex justify-center items-end">
                            <div className="h-8 w-28 relative opacity-60">
                                {/* Simulated Signature */}
                                <svg width="100%" height="100%" viewBox="0 0 120 40" fill="none" stroke="currentColor" className="text-zinc-800">
                                    <path d="M10,30 Q30,10 50,30 T80,20 T110,30" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* About Details Section */}
            <section className="w-full px-4 md:px-20 py-20 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Who is Ayan Pal (Developer)?</h2>
                    
                    <p className="text-lg text-zinc-600 mb-12 max-w-3xl leading-relaxed">
                        Ayan Pal is a <strong>technology professional</strong> specializing in <strong>software engineering and web development</strong>. 
                        This individual is <strong>not an author, writer, or public speaker</strong>—but rather a hands-on developer building 
                        real-world applications with React, Next.js, AI technologies, and modern cloud infrastructure.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Location & Role */}
                        <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="text-zinc-600" size={24} />
                                <h3 className="text-2xl font-bold text-zinc-900">Developer Identity</h3>
                            </div>
                            <p className="text-zinc-600 leading-relaxed">
                                Based in <strong>Kolkata, India</strong>, this Ayan Pal is a <strong>Full-Stack Web Developer</strong> known as <strong>@ayanpal01</strong> across developer platforms. 
                                Focus areas include <strong>software engineering</strong>, <strong>web application development</strong>, and <strong>AI-powered solutions</strong>—distinctly different from individuals in publishing or speaking careers.
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <Code className="text-zinc-600" size={24} />
                                <h3 className="text-2xl font-bold text-zinc-900">Core Technologies</h3>
                            </div>
                            <p className="text-zinc-600 leading-relaxed">
                                Expert in the <strong>modern JavaScript/TypeScript ecosystem</strong>: <strong>React.js</strong>, <strong>Next.js</strong>, <strong>React Native</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, <strong>Tailwind CSS</strong>, and <strong>AI/ML integration</strong>. 
                                This technical stack defines a software development professional, not a content creator.
                            </p>
                        </div>

                        {/* Education */}
                        <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="text-zinc-600" size={24} />
                                <h3 className="text-2xl font-bold text-zinc-900">Academic Background</h3>
                            </div>
                            <p className="text-zinc-600 leading-relaxed">
                                Currently pursuing <strong>Master of Computer Applications (MCA)</strong> at <strong>Adamas University</strong> (2025-2027). 
                                Academic focus on <strong>computer science</strong>, <strong>software engineering</strong>, and <strong>advanced programming</strong>—building upon practical development experience.
                            </p>
                        </div>

                        {/* Professional Approach */}
                        <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <Briefcase className="text-zinc-600" size={24} />
                                <h3 className="text-2xl font-bold text-zinc-900">Professional Services</h3>
                            </div>
                            <p className="text-zinc-600 leading-relaxed">
                                Offers <strong>Full-Stack Development</strong>, <strong>Custom Web Application Development</strong>, <strong>API Design & Backend Architecture</strong>, <strong>Mobile App Development</strong>, <strong>AI/ML Integration</strong>, and <strong>Technical Consulting</strong>. 
                                Available for freelance projects and full-time software development roles.
                            </p>
                        </div>
                    </div>

                    {/* What Sets Ayan Apart */}
                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-10 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="text-zinc-300" size={28} />
                            <h3 className="text-3xl font-bold">What Sets Ayan Pal Apart</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-zinc-100">User-Centric Design</h4>
                                <p className="text-zinc-300 leading-relaxed">
                                    Every application Ayan Pal builds prioritizes user experience, ensuring interfaces are intuitive, accessible, and delightful to use.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-zinc-100">Performance First</h4>
                                <p className="text-zinc-300 leading-relaxed">
                                    With a focus on optimization, Ayan delivers applications that are fast, efficient, and scalable, meeting modern web standards.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-zinc-100">Clean Code</h4>
                                <p className="text-zinc-300 leading-relaxed">
                                    Maintainability matters. Ayan writes clean, well-documented code following industry best practices and design patterns.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-zinc-100">Continuous Learning</h4>
                                <p className="text-zinc-300 leading-relaxed">
                                    Staying current with emerging technologies and frameworks ensures Ayan brings cutting-edge solutions to every project.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <GallerySection />
            {/* CTA Section */}
            <section className="w-full px-4 md:px-20 py-16 bg-zinc-50 border-t border-zinc-100">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Let's Build Something Amazing</h2>
                    <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto">
                        Whether you're looking for a Full-Stack Web Developer for your team or need a freelance expert for your next project, Ayan Pal is ready to help bring your vision to life.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.a
                            href="/#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors text-lg"
                        >
                            Get In Touch
                        </motion.a>
                        <motion.a
                            href="/"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full font-medium border border-zinc-200 hover:bg-white transition-colors text-zinc-900 text-lg"
                        >
                            Back to Home
                        </motion.a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

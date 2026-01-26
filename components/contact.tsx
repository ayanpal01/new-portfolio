"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    const socialLinks = [
        { name: 'GitHub', icon: Github, url: 'https://github.com/ayanpal01' },
        { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/ayanpal01' },
        { name: 'Twitter', icon: Twitter, url: 'https://x.com/ayanpal01' },
    ];

    return (
        <section className="w-full py-20 bg-zinc-50 border-t border-zinc-200">
            <div className="max-w-4xl mx-auto px-4 md:px-0 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                        Let's build something <br />
                        <span className="text-zinc-500">amazing together.</span>
                    </h2>
                    <p className="text-zinc-600 text-lg max-w-lg mx-auto mb-10">
                        Always open to discussing product design work, new opportunities, or partnerships.
                    </p>

                    <a
                        href="mailto:work.ayanpal@gmail.com"
                        className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-zinc-900 hover:text-blue-600 transition-colors border-b-2 border-zinc-200 hover:border-blue-600 pb-1"
                    >
                        work.ayanpal@gmail.com
                        <ArrowUpRight size={28} className="text-zinc-400" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-8 mt-4"
                >
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white border border-zinc-200 rounded-full text-zinc-600 hover:text-black hover:border-black hover:scale-110 transition-all shadow-sm"
                            aria-label={social.name}
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </motion.div>

                <footer className="mt-20 text-zinc-400 text-sm">
                    © {new Date().getFullYear()} Ayan Pal. All rights reserved.
                </footer>
            </div>
        </section>
    );
}

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code, Briefcase, FolderGit2, Mail, Library } from 'lucide-react';

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    const navItems = [
        { name: 'About', icon: User, href: '#about' },
        { name: 'Skills', icon: Code, href: '#skills' },
        { name: 'Experience', icon: Briefcase, href: '#experience' },
        { name: 'Projects', icon: FolderGit2, href: '#projects' },
        { name: 'Library', icon: Library, href: '/library' },
        { name: 'Contact', icon: Mail, href: '#contact' },
    ];

    return (
        <motion.div
            // Added justify-between to ensure content separation on expansion
            className={`flex items-center bg-white border border-zinc-200 rounded-full shadow-lg overflow-hidden ${isHovered ? 'justify-between' : ''}`}
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
            // Use flex-basis or min-width logic if needed, but width: 100% should work in the container
            initial={{ width: 'fit-content' }}
            animate={{ width: isHovered ? '100%' : 'fit-content' }}
            style={{ height: 75 }}
        >
            {/* Profile Section - Always Visible */}
            <motion.div
                layout="position" // Participate in layout transitions
                className="flex-shrink-0 p-2 pl-2 flex items-center gap-3"
            >
                <div className="relative w-[58px] h-[58px] rounded-full overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-colors">
                    <Image
                        src="/ayan1.jpg"
                        alt="Profile"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Name & Role - Always Visible */}
                <motion.div
                    layout="position"
                    className="flex flex-col whitespace-nowrap pr-4"
                >
                    <span className="font-bold text-lg leading-tight text-black">Ayan Pal</span>
                    <span className="text-xs text-zinc-500">Full Stack Developer</span>
                </motion.div>
            </motion.div>

            {/* Expandable Menu Items */}
            <AnimatePresence mode="popLayout">
                {isHovered && (
                    <motion.div
                        layout="position"
                        className="flex items-center gap-1 pr-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <div className="h-8 w-[1px] bg-zinc-200 mx-2" />

                        <div className="flex items-center gap-1">
                            {navItems.map((item) => {
                                const isExternal = item.href.startsWith('/');
                                const Element = isExternal ? Link : 'a';
                                const props = isExternal ? { href: item.href } : { 
                                    href: item.href,
                                    onClick: (e: React.MouseEvent) => {
                                        e.preventDefault();
                                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                };
                                
                                return (
                                <motion.div key={item.name} layout="position">
                                    <Element
                                        {...props}
                                        className="block p-2 rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-black transition-colors relative group"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <item.icon size={20} />
                                        </motion.div>
                                        <span className="sr-only">{item.name}</span>

                                        {/* Tooltip */}
                                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                            {item.name}
                                        </span>
                                    </Element>
                                </motion.div>
                            );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
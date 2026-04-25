"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { User, FolderGit2, ImageIcon, Hash, X, Menu } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'About', icon: User, href: '/about-ayan-pal' },
        { name: 'Projects', icon: FolderGit2, href: '/projects' },
        { name: 'Gallery', icon: ImageIcon, href: '/library' },
        // { name: 'Contact', icon: Mail, href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-2 relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="text-2xl font-extrabold tracking-tighter text-slate-900">AYAN PAL</span>
                    </Link>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => {
                            return (
                                <Link key={index} href={item.href}
                                    className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors group"
                                >
                                    <Hash size={16} className='text-slate-400 group-hover:text-blue-500 transition-colors'/>
                                    <span className="text-sm font-semibold tracking-widest">{item.name.toUpperCase()}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center relative z-50">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-900 font-semibold tracking-widest text-xs hover:bg-slate-100 active:scale-95 transition-all"
                        >
                            {isMobileMenuOpen ? (
                                <>
                                    <span>CLOSE</span>
                                    <X size={16} />
                                </>
                            ) : (
                                <>
                                    <span>MENU</span>
                                    {/* <Menu size={16} /> */}
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown (Top to Bottom Dropdown) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl shadow-slate-900/10 absolute top-20 left-0 w-full"
                    >
                        <div className="px-4 py-6 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
                            {navItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <Link 
                                        key={index} 
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 active:bg-blue-50 active:border-blue-100 transition-colors"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 border border-slate-100">
                                                <Icon size={24} />
                                            </div>
                                            <span className="text-xl font-bold text-slate-800 tracking-tight">
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
"use client";

import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    FolderKanban,
    Briefcase,
    Code2,
    Trophy,
    Layout,
    LogOut,
    Plus,
    Trash2,
    Database
} from 'lucide-react';
import { collection, addDoc, getDocs, deleteDoc, doc, writeBatch } from 'firebase/firestore';

export default function AdminDashboard() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('projects');
    const [data, setData] = useState<any[]>([]);
    const [fetchLoading, setFetchLoading] = useState(false);
    const router = useRouter();

    // Data Configuration for Seeding
    const seedData: Record<string, any[]> = {
        projects: [
            {
                title: "NearShield",
                description: "A safety app that locates nearby emergency services, shows real-time weather/alerts, and lets users report incidents with photos. Built with React Native and Expo.",
                tags: ["React Native", "Expo", "Mapbox", "JavaScript"],
                links: { github: "https://github.com/ayanpal01/NearShield", demo: null }
            },
            {
                title: "NutriLens.ai",
                description: "A full-stack application for nutrition analysis. Features image upload with OCR, text input, and AI-powered analysis via GROQ to provide health scores and ingredient insights.",
                tags: ["Next.js", "TypeScript", "AI", "GROQ API"],
                links: { github: "https://github.com/ayanpal01/NutriLens.ai", demo: null }
            },
            {
                title: "Simple Weather Website",
                description: "A clean and simple weather application that provides real-time weather information based on the city entered. Displays temperature, wind speed, and more.",
                tags: ["JavaScript", "API Integration", "CSS"],
                links: { github: "https://github.com/ayanpal01/simple-weather-website", demo: null }
            },
            {
                title: "Airbnb Clone",
                description: "A functional clone of the Airbnb platform features, showcasing frontend development skills and UI replication.",
                tags: ["React", "UI/UX", "Clone"],
                links: { github: "https://github.com/ayanpal01/Airbnb-clone", demo: null }
            }
        ],
        experience: [
            {
                role: "Full Stack Developer",
                company: "Intelli Edtech",
                period: "Jan 2026 - Present",
                description: "Developed a multimodal AI system to detect and categorize previous year examination questions, built automated database integration for storage and retrieval, and delivered full-stack features to streamline question processing workflows."
            },
            {
                role: "Frontend Web Development",
                company: "Azmth",
                period: "Jun 2023 - Nov 2024",
                description: "Built responsive and interactive user interfaces using Nextjs, Reactjs, TypeScript, Tailwindcss, and other modern web technologies. Worked closely with designers to translate UI/UX designs into production-ready components and improved page load performance and accessibility."
            }
        ],
        skills: [
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
        ],
        achievements: [
            {
                title: "LeetCode",
                metric: "350+",
                badge: "Problems Solved",
                iconName: "Code2",
                description: "Consistently sharpening problem-solving skills with DSA."
            },
            {
                title: "Academic",
                metric: "8.91",
                badge: "CGPA (BCA)",
                iconName: "GraduationCap",
                description: "Graduated with distinction from Adamas University."
            }
        ],
        services: [
            {
                title: "Web Development",
                iconName: "Layout",
                description: "Building high-performance, responsive websites using Next.js, React, and Tailwind CSS. Focused on SEO and user experience."
            },
            {
                title: "Mobile App Development",
                iconName: "Smartphone",
                description: "Creating cross-platform mobile applications with React Native. Delivering smooth, native-like experiences for iOS and Android."
            },
            {
                title: "Backend & API",
                iconName: "Server",
                description: "Designing scalable server-side architectures, RESTful APIs, and database solutions using Node.js, Express, and modern DBs."
            }
        ]
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                router.push('/admin');
            } else {
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [router]);

    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [user, activeTab]);

    const fetchData = async () => {
        setFetchLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, activeTab));
            const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(items);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setFetchLoading(false);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        router.push('/admin');
    };

    const handleSeed = async () => {
        if (!confirm(`Overwrite ${activeTab} with seed data? This will add initial data to your Firestore.`)) return;

        const collectionData = seedData[activeTab];
        if (!collectionData) {
            alert("No seed data available for this collection.");
            return;
        }

        setFetchLoading(true);
        try {
            for (const item of collectionData) {
                await addDoc(collection(db, activeTab), item);
            }

            alert(`Successfully seeded ${collectionData.length} items to ${activeTab}.`);
            fetchData(); // Refresh display
        } catch (error) {
            console.error("Error seeding data:", error);
            alert("Error seeding data. Check console. (Likely permission denied if not logged in)");
        } finally {
            setFetchLoading(false);
        }
    };

    // NEW: Seed All Collections at once
    const handleGlobalSeed = async () => {
        if (!confirm("WARNING: This will attempt to upload default data for ALL collections (Projects, Experience, Skills, Achievements, Services). Continue?")) return;

        setFetchLoading(true);
        let log = "";
        try {
            for (const [key, items] of Object.entries(seedData)) {
                log += `Seeding ${key}...\n`;
                for (const item of items) {
                    await addDoc(collection(db, key), item);
                }
                log += `Completed ${key} (${items.length} items).\n`;
            }
            alert("Global Seed Complete!\n\n" + log);
            fetchData();
        } catch (error) {
            console.error("Global seed error:", error);
            alert("Error during global seed. Check console.");
        } finally {
            setFetchLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this item?')) return;
        try {
            await deleteDoc(doc(db, activeTab, id));
            setData(prev => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error("Error deleting document: ", error);
            alert("Failed to delete. Check permissions.");
        }
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!user) return null;

    const tabs = [
        { id: 'projects', label: 'Projects', icon: FolderKanban },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'skills', label: 'Skills', icon: Code2 },
        { id: 'achievements', label: 'Achievements', icon: Trophy },
        { id: 'services', label: 'Services', icon: Layout },
    ];

    return (
        <div className="min-h-screen bg-zinc-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-zinc-200 fixed h-full z-10 hidden md:flex flex-col">
                <div className="p-6 border-b border-zinc-100">
                    <h2 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                        <LayoutDashboard size={24} />
                        Admin Panel
                    </h2>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id
                                    ? 'bg-black text-white'
                                    : 'text-zinc-600 hover:bg-zinc-100'
                                }`}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-zinc-100 space-y-2">
                    <button
                        onClick={handleGlobalSeed}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                        <Database size={18} />
                        Seed Database
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-0 md:ml-64 p-8">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-zinc-900 capitalize">
                        {activeTab} Management
                    </h1>
                    <div className="flex gap-3">
                        <button
                            onClick={handleSeed}
                            className="bg-white border border-zinc-200 text-zinc-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-50 flex items-center gap-2"
                        >
                            <Database size={16} /> Seed {activeTab}
                        </button>
                        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 flex items-center gap-2">
                            <Plus size={16} /> Add New
                        </button>
                    </div>
                </header>

                <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden min-h-[400px]">
                    {fetchLoading ? (
                        <div className="p-12 text-center text-zinc-500">Loading data...</div>
                    ) : data.length === 0 ? (
                        <div className="p-12 text-center text-zinc-400 flex flex-col items-center justify-center h-full mt-20">
                            <Database size={48} className="mb-4 opacity-20" />
                            <p>No items found in {activeTab}.</p>
                            <p className="text-sm mt-2">Click "Seed Data" to upload initial content.</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-zinc-100">
                            {data.map((item) => (
                                <div key={item.id} className="p-4 flex items-center justify-between hover:bg-zinc-50 transition-colors">
                                    <div>
                                        <h3 className="font-semibold text-zinc-900">{item.title || item.name || item.role || 'Untitled'}</h3>
                                        <p className="text-sm text-zinc-500 truncate max-w-md">
                                            {item.description || item.company || item.subtitle || 'No description'}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

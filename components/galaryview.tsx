"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, ThumbsUp, MessageCircle } from "lucide-react";

type Category = "All" | "Certifications" | "Events" | "Achievements" | "Projects";

interface GalleryItem {
  id: string;
  category: Category;
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  link?: string;
  stats?: {
    likes: number;
    comments: number;
  };
}

const galleryData: GalleryItem[] = [
  {
    id: "1",
    category: "Events",
    title: "Google DevFest Kolkata 2025 – Participant",
    description: "Attended Google DevFest Kolkata 2025, an annual conference hosted by Google Developer Groups. The event focuses on showcasing the latest technologies and development tools, including AI, machine learning, cloud computing, web, mobile, and emerging trends. It brings together developers, students, and tech enthusiasts to learn, collaborate, and share insights through workshops, talks, and hackathons.",
    date: "December 2025",
    imageSrc: "/ayan1.jpg",
    link: "https://www.linkedin.com/in/ayanpal01",
    stats: { likes: 124, comments: 18 }
  },
  {
    id: "2",
    category: "Achievements",
    title: "Bachelor of Computer Applications (BCA)",
    description: "Successfully completed BCA with a strong foundation in software development, web technologies, databases, and computer fundamentals. Built multiple academic and personal projects focused on practical problem-solving and clean UI-driven applications.",
    date: "February 11 2026",
    imageSrc: "/ayan-pal-img3.jpg",
    link: "https://www.linkedin.com/in/ayanpal01",
    stats: { likes: 312, comments: 45 }
  },
  // {
  //   id: "3",
  //   category: "Certifications",
  //   title: "Advanced React & Web Performance Certified",
  //   description: "Just completed an intensive 8-week certification on frontend architecture and web core vitals optimization.",
  //   date: "November 22, 2024",
  //   imageSrc: "/ayan-pal-img4.jpg",
  //   link: "https://www.linkedin.com/in/ayanpal01",
  //   stats: { likes: 89, comments: 5 }
  // },
  // {
  //   id: "4",
  //   category: "Projects",
  //   title: "Launched my Full-Stack Portfolio",
  //   description: "Excited to share my new portfolio built from the ground up using Next.js 14, Tailwind CSS, and Framer Motion.",
  //   date: "August 5, 2024",
  //   imageSrc: "/ayan-pal-full-stack-developer.jpg",
  //   link: "https://www.linkedin.com/in/ayanpal01",
  //   stats: { likes: 215, comments: 22 }
  // }
];

const categories: Category[] = ["All", "Events", "Achievements", "Certifications", "Projects"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredData = galleryData.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-slate-900 text-white shadow-md scale-105"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry-Style Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              {/* Image Header */}
              <div
                className="relative w-full h-64 sm:h-72 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Content (LinkedIn Post Style) */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-slate-500 mb-2 font-medium">{item.date}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                  {item.description}
                </p>

                {/* Footer Stats */}
                {/* <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex gap-4 text-slate-500">
                    <span className="flex items-center gap-1.5 text-sm hover:text-blue-600 transition-colors cursor-pointer">
                      <ThumbsUp size={16} /> {item.stats?.likes}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm hover:text-blue-600 transition-colors cursor-pointer">
                      <MessageCircle size={16} /> {item.stats?.comments}
                    </span>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                      title="View on LinkedIn"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div> */}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full text-slate-900 hover:bg-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              
              {/* Image Side */}
              <div className="relative w-full md:w-3/5 h-64 md:h-auto min-h-[50vh] bg-slate-100">
                <Image
                  src={selectedImage.imageSrc}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-2/5 p-8 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                <div className="mb-6 flex items-center gap-3">
                   <div className="w-12 h-12 rounded-full overflow-hidden relative border border-slate-200">
                      <Image src="/ayan1.jpg" alt="Ayan Pal" fill className="object-cover" />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900">Ayan Pal</h4>
                      <p className="text-xs text-slate-500">Full-Stack Web Developer</p>
                   </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-2">{selectedImage.title}</h2>
                <span className="text-sm text-slate-500 mb-6 font-medium block">{selectedImage.date} • {selectedImage.category}</span>
                
                <p className="text-slate-700 whitespace-pre-wrap leading-relaxed flex-grow">
                  {selectedImage.description}
                </p>
                
                {selectedImage.link && (
                  <div className="mt-8 pt-6 border-t border-slate-100">
                     <a
                        href={selectedImage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg active:scale-[0.98]"
                     >
                        View Original Post <ExternalLink size={18} />
                     </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
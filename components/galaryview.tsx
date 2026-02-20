"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { id: 1, src: "/ayan1.jpg" },
  { id: 2, src: "/ayan-pal-img3.jpg" },
  { id: 3, src: "/ayan-pal-img4.jpg" },
];

export default function GallerySection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-16 px-4">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center md:gap-8">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className={`relative w-64 rounded-lg overflow-hidden shadow-lg
              ${image.id % 2 === 0 ? 'lg:w-96 h-80' : 'w-64 h-80'}
            `}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Image
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
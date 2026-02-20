import type { Metadata } from 'next';
import AboutJsonLd from './json-ld';

export const metadata: Metadata = {
    title: "About Ayan Pal | Full-Stack Web Developer Portfolio",
    description: "Learn about Ayan Pal, a Full-Stack Web Developer from Kolkata, India. Passionate about React, Next.js, Node.js, TypeScript, and building innovative web applications. Explore projects, skills, and professional background.",
    openGraph: {
        title: "About Ayan Pal | Full-Stack Web Developer Portfolio",
        description: "Learn about Ayan Pal, a Full-Stack Web Developer from Kolkata, India. Passionate about React, Next.js, Node.js, TypeScript, and building innovative web applications.",
        url: "https://www.ayanpal.tech/about-ayan-pal",
        type: "profile",
        images: [
            {
                url: "https://www.ayanpal.tech/ayan-pal-developer.jpg",
                width: 1200,
                height: 630,
                alt: "Ayan Pal - Full Stack Web Developer",
            }
        ],
    },
    twitter: {
        title: "About Ayan Pal | Full-Stack Web Developer",
        description: "Learn about Ayan Pal, a Full-Stack Web Developer from Kolkata, India. Specializing in React, Next.js, Node.js, and TypeScript.",
        images: ["https://www.ayanpal.tech/ayan-pal-developer.jpg"],
    },
    alternates: {
        canonical: "https://www.ayanpal.tech/about-ayan-pal",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AboutJsonLd />
            {children}
        </>
    );
}

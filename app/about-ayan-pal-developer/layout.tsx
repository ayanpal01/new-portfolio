import type { Metadata } from 'next';
import AboutJsonLd from './json-ld';

export const metadata: Metadata = {
    title: "About Ayan Pal – Full-Stack Web Developer from India",
    description: "Ayan Pal is a Full-Stack Web Developer from India (not the author or speaker). Specializing in React, Next.js, React Native, Node.js, TypeScript, and AI-powered applications. Building modern web solutions.",
    openGraph: {
        title: "About Ayan Pal – Full-Stack Web Developer from India",
        description: "Ayan Pal is a Full-Stack Web Developer from India (not the author or speaker). Specializing in React, Next.js, React Native, Node.js, TypeScript, and AI-powered applications.",
        url: "https://www.ayanpal.tech/about-ayan-pal-developer",
        type: "profile",
        images: [
            {
                url: "https://www.ayanpal.tech/ayan1.jpg",
                width: 1200,
                height: 630,
                alt: "Ayan Pal - Full Stack Web Developer from India",
            }
        ],
    },
    twitter: {
        title: "About Ayan Pal – Full-Stack Web Developer from India",
        description: "Ayan Pal is a Full-Stack Web Developer from India. Specializing in React, Next.js, React Native, Node.js, TypeScript, and AI-powered applications.",
        images: ["https://www.ayanpal.tech/ayan-pal-img3.jpg"],
    },
    alternates: {
        canonical: "https://www.ayanpal.tech/about-ayan-pal-developer",
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

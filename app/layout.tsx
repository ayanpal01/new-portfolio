import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "./json-ld";
import Navbar from "@/components/navbar";
import ClientScripts from "@/components/ClientScripts";
import CustomCursor from "@/components/CustomCursor";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ayanpal.tech'),
  applicationName: "Ayan Pal Portfolio",
  title: {
    default: "Ayan Pal | Full-Stack Web Developer",
    template: "%s | Ayan Pal"
  },
  description: "Ayan Pal is a Full-Stack Web Developer from India, specializing in React, Next.js, React Native, Node.js, TypeScript, and AI-powered applications. Building modern, scalable web solutions.",
  keywords: [
    "Ayan Pal", 
    "ayanpal01", 
    "Ayan Pal developer",
    "Ayan Pal Full Stack Developer",
    "ayanpal01 github",
    "ayanpal01 portfolio",
    "Ayan Pal Kolkata",
    "Ayan Pal India",
    "Ayan Pal React Developer",
    "Ayan Pal Next.js",
    "Ayan Pal software developer",
    "Ayan Pal tech creator",
    "Full Stack Developer Kolkata",
    "React Developer India",
    "Next.js Developer",
    "React Native Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Kolkata",
    "Software Engineer India",
    "Karimpur",
    "West Bengal",
    "Ayan Pal Karimpur",
    "Nadia",
    "Ayan Pal Nadia",
    "Ayan Pal West Bengal",
    "Ayan Pal tech",
    "Think With Ayan"
  ],
  authors: [{ name: "Ayan Pal", url: "https://www.ayanpal.tech" }],
  creator: "Ayan Pal",
  publisher: "Ayan Pal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://www.ayanpal.tech",
    title: "Ayan Pal | Full-Stack Web Developer",
    description: "Ayan Pal is a Full-Stack Web Developer from India, specializing in React, Next.js, React Native, Node.js, TypeScript, and AI-powered applications. Building modern, scalable web solutions.",
    siteName: "Ayan Pal - Developer Portfolio",
    images: [
      {
        url: "https://www.ayanpal.tech/ayan-pal-developer.jpg",
        width: 1200,
        height: 630,
        alt: "Ayan Pal - Full Stack Web Developer from India",
        type: "image/jpeg",
      },
    ],
    username: "ayanpal01",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayanpal01",
    creator: "@ayanpal01",
    title: "Ayan Pal | Full-Stack Web Developer",
    description: "Full-Stack Web Developer from India. Specializing in React, Next.js, React Native, Node.js, TypeScript, and AI-powered applications.",
    images: ["https://www.ayanpal.tech/ayan-pal-developer.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },
  alternates: {
    canonical: "https://www.ayanpal.tech",
    types: {
      'application/rss+xml': 'https://www.ayanpal.tech/rss.xml',
    },
  },
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=IBM+Plex+Sans+Condensed:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      </head>
      <body className={`antialiased font-sans`}>
        <div className="blueprint-grid" aria-hidden="true"></div>
        <div className="progress-rule" aria-hidden="true"></div>
        <div className="regmarks" aria-hidden="true">
          <span className="tl"><i className="tick"></i> SHEET 01/04 — PORTFOLIO</span>
          <span className="br">REV. 2026.06 <i className="tick"></i></span>
        </div>
        <JsonLd />
        <CustomCursor />
        <Navbar/>
        {children}
        <footer className="site-footer">
          <div className="container site-footer__row">
            <span className="site-footer__brand">© <span data-year="2026">2026</span> Ayan Pal — Full Stack Developer. All rights reserved.</span>
            <div className="site-footer__social">
              <a href="https://github.com/ayanpal01" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/ayanpal01" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://x.com/ayanpal01" target="_blank" rel="noopener noreferrer">X</a>
            </div>
            <span className="site-footer__meta">Based in Kolkata, India<br/>Built with React, Next.js &amp; Node.js</span>
          </div>
        </footer>
        <ClientScripts />
      </body>
    </html>
  );
}

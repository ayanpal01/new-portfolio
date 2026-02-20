import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ayanpal.tech'),
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
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

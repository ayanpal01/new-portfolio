import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ayanpal.tech'),
  title: {
    default: "Ayan Pal (ayanpal01) - Full Stack Developer | React, Next.js & Node.js Expert",
    template: "%s | Ayan Pal"
  },
  description: "Ayan Pal (ayanpal01) - Professional Full Stack Developer from Kolkata, India. Expert in React, Next.js, React Native, Node.js & modern web development. Available for freelance projects. Portfolio & contact information.",
  keywords: [
    "Ayan Pal", 
    "ayanpal01", 
    "Ayan", 
    "ayan pal", 
    "AYAN PAL",
    "Ayan Pal developer",
    "Ayan Pal Full Stack Developer",
    "ayanpal01 github",
    "ayanpal01 portfolio",
    "Ayan Pal Kolkata",
    "Ayan Pal India",
    "Ayan Pal React Developer",
    "Ayan Pal Next.js",
    "Ayan Pal Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Freelance Developer India",
    "Web Developer Kolkata"
  ],
  authors: [{ name: "Ayan Pal", url: "https://www.ayanpal.tech" }],
  creator: "Ayan Pal",
  publisher: "Ayan Pal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://www.ayanpal.tech",
    title: "Ayan Pal (ayanpal01) - Full Stack Developer | React, Next.js & Node.js Expert",
    description: "Ayan Pal (ayanpal01) - Professional Full Stack Developer from Kolkata, India. Expert in React, Next.js, React Native, Node.js & modern web development.",
    siteName: "Ayan Pal - Full Stack Developer Portfolio",
    images: [
      {
        url: "https://www.ayanpal.tech/ayan-pal-full-stack-developer.jpg",
        width: 1200,
        height: 630,
        alt: "Ayan Pal - Full Stack Developer (ayanpal01)",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayanpal01",
    creator: "@ayanpal01",
    title: "Ayan Pal - Full Stack Developer (ayanpal01) ",
    description: "Ayan Pal - Professional Full Stack Developer. React, Next.js, React Native & Node.js Expert. Available for freelance projects.",
    images: ["https://www.ayanpal.tech/ayan-pal-full-stack-developer.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
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
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://www.ayanpal.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

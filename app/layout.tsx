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
  title: {
    default: "Ayan Pal | Full Stack Developer & UI Designer",
    template: "%s | Ayan Pal"
  },
  description: "Portfolio of Ayan Pal (ayanpal01), a Full Stack Developer specializing in React, Next.js, and Modern UI Design. Available for freelance projects.",
  keywords: ["Ayan", "Ayan Pal", "ayanpal01", "Ayanpal01", "AYAN", "Full Stack Developer", "Web Developer", "React Native", "Next.js", "UI Designer", "Freelance Developer"],
  authors: [{ name: "Ayan Pal", url: "https://ayanpal.tech" }],
  creator: "Ayan Pal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayanpal.tech",
    title: "Ayan Pal | Full Stack Developer & UI Designer",
    description: "Portfolio of Ayan Pal (ayanpal01), a Full Stack Developer specializing in React, Next.js, and Modern UI Design.",
    siteName: "Ayan Pal Portfolio",
    images: [
      {
        url: "https://ayanpal.tech/ayan1.jpg",
        width: 1200,
        height: 630,
        alt: "Ayan Pal - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayan Pal | Full Stack Developer & UI Designer",
    description: "Portfolio of Ayan Pal (ayanpal01), a Full Stack Developer specializing in React, Next.js, and Modern UI Design.",
    images: ["https://ayanpal.tech/ayan1.jpg"],
    creator: "@ayanpal01",
  },
  icons: {
    icon: "/favicon.ico",
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

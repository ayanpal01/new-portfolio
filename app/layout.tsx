import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Script from "next/script";

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
    default: "Ayan Pal - Flutter & Full-Stack Web Developer | ayanpal01 Portfolio",
    template: "%s | Ayan Pal - Developer Portfolio"
  },
  description: "Ayan Pal (ayanpal01) - Professional Flutter & Full-Stack Web Developer specializing in React, Next.js, Node.js, MongoDB, TypeScript. Browse portfolio, projects, and developer profile. Available for freelance web development, mobile app development, and consulting services. Expert in modern JavaScript frameworks and responsive web design.",
  keywords: [
    "Ayan Pal",
    "ayanpal01",
    "Ayan Pal 01",
    "Ayan Pal developer",
    "Ayan Pal portfolio",
    "ayanpal01 images",
    "Flutter developer",
    "Full-stack developer",
    "React developer",
    "Next.js developer",
    "Web developer India",
    "Mobile app developer",
    "JavaScript developer",
    "TypeScript developer",
    "Node.js developer",
    "MongoDB developer",
    "Freelance developer",
    "Software engineer",
    "ayanpal.tech",
    "www.ayanpal.tech",
    "Portfolio website",
    "Developer portfolio",
    "India developer",
    "Kolkata developer",
    "West Bengal developer",
    "Firebase developer",
    "Tailwind CSS",
    "Responsive design",
    "Mobile-first design",
    "Modern web development",
    "JavaScript expert",
    "React expert",
    "Flutter expert",
    "Full-stack engineer",
    "Web application developer",
    "Mobile application developer",
    "UI/UX developer",
    "Frontend specialist",
    "Backend developer"
  ],
  authors: [{ name: "Ayan Pal", url: "https://www.ayanpal.tech" }],
  creator: "Ayan Pal",
  publisher: "Ayan Pal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ayanpal.tech",
    siteName: "Ayan Pal - Developer Portfolio",
    title: "Ayan Pal - Flutter & Full-Stack Web Developer | ayanpal01",
    description: "Professional Flutter & Full-Stack Web Developer specializing in React, Next.js, Node.js. View portfolio, projects and hire for development work.",
    images: [
      {
        url: "/ayan-pal-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Ayan Pal - Flutter & Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayan Pal - Flutter & Full-Stack Developer | ayanpal01",
    description: "Professional Flutter & Full-Stack Web Developer. Expert in React, Next.js, Node.js, MongoDB. View portfolio and projects.",
    creator: "@ayanpal01",
    images: ["/ayan-pal-profile.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.ayanpal.tech",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/Person">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0891b2" />
        <meta name="msapplication-TileColor" content="#0891b2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ayan Pal Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="canonical" href="https://www.ayanpal.tech" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ayan Pal",
              "alternateName": ["ayanpal01", "Ayan Pal 01"],
              "url": "https://www.ayanpal.tech",
              "image": "https://www.ayanpal.tech/ayan-pal-profile.jpg",
              "sameAs": [
                "https://github.com/ayanpal01",
                "https://linkedin.com/in/ayanpal01",
                "https://twitter.com/ayanpal01",
                "https://www.instagram.com/ayan.pal__/",
                "https://youtube.com/@ayanpal01"
              ],
              "jobTitle": "Flutter & Full-Stack Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance Developer",
                "url": "https://www.ayanpal.tech"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Adamas University",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "West Bengal",
                  "addressCountry": "India"
                }
              },
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "West Bengal",
                "addressCountry": "India"
              },
              "nationality": "Indian",
              "birthPlace": "India",
              "knowsAbout": [
                "Flutter",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "MongoDB",
                "Web Development",
                "Mobile App Development"
              ],
              "description": "Professional Flutter & Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB. Available for freelance projects."
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

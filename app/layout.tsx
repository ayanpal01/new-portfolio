import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "./json-ld";
import Navbar from "@/components/navbar";
import ClientScripts from "@/components/ClientScripts";
import { ThemeProvider } from "@/components/theme-provider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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
      { url: '/FaceAvatar.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/FaceAvatar.png',
    apple: [
      { url: '/FaceAvatar.png', sizes: '180x180', type: 'image/png' },
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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/FaceAvatar.png" type="image/png" />
        <link rel="shortcut icon" href="/FaceAvatar.png" type="image/png" />
        <link rel="apple-touch-icon" href="/FaceAvatar.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <JsonLd />
        <script
          id="theme-detector"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var userChoice = localStorage.getItem('theme-user-choice');
                  var storedTheme = localStorage.getItem('theme');

                  // If user has explicitly changed the theme previously, respect their saved choice
                  if (userChoice === 'true' && (storedTheme === 'dark' || storedTheme === 'light')) {
                    document.documentElement.classList.remove('light', 'dark');
                    document.documentElement.classList.add(storedTheme);
                    document.documentElement.style.colorScheme = storedTheme;
                    return;
                  }

                  // 1st visit: Mobile screen -> light theme, Laptop / Desktop -> dark theme
                  var isMobile = (
                    (typeof window !== 'undefined' && window.innerWidth > 0 && window.innerWidth <= 768) ||
                    (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 768px)').matches) ||
                    (window.screen && window.screen.width > 0 && window.screen.width <= 768) ||
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                  );

                  var initialTheme = isMobile ? 'light' : 'dark';
                  localStorage.setItem('theme', initialTheme);
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(initialTheme);
                  document.documentElement.style.colorScheme = initialTheme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`antialiased font-sans bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 min-h-screen selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="theme" disableTransitionOnChange>
          <div className="max-w-[700px] mx-auto min-h-screen border-x border-neutral-200 dark:border-neutral-800/50 bg-white dark:bg-[#0a0a0a]">
            <Navbar/>
            {children}
            <footer className="w-full py-8 text-[13px] text-neutral-500 border-t border-neutral-200 dark:border-neutral-800/50 flex flex-col items-center justify-center gap-1">
              <p>
                Designed and developed by <a href="https://x.com/ayanpal01" target="_blank" rel="noreferrer" className="text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 font-medium">Ayan Pal</a>
              </p>
              <p>© {new Date().getFullYear()}. </p>
            </footer>
          </div>
          <ClientScripts />
        </ThemeProvider>
      </body>
    </html>
  );
}

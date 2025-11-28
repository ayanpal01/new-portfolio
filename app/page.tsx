'use client';

import Terminal from "./components/Terminal";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import MessageButton from "./components/MessageButton";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import CursorTrail from "./components/CursorTrail";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export default function Home() {
  const { data: portfolioData, isLoading } = usePortfolioData();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Ayan Pal Portfolio",
            "alternateName": "ayanpal01 Portfolio",
            "url": "https://www.ayanpal.tech",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.ayanpal.tech/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "author": {
              "@type": "Person",
              "name": "Ayan Pal",
              "alternateName": "ayanpal01"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ayanpal.tech"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Portfolio",
                "item": "https://www.ayanpal.tech#projects"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Skills",
                "item": "https://www.ayanpal.tech#skills"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Experience",
                "item": "https://www.ayanpal.tech#timeline"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://www.ayanpal.tech#contact"
              }
            ]
          })
        }}
      />
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Cursor Trail Effect */}
      <CursorTrail />
      
      {/* Navigation Bar */}
      <Navbar />
      
      <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-slate opacity-20"></div>
        
        {/* Floating Message Button */}
        <MessageButton />
        
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Heading */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight" itemProp="name">
                  <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
                    Hi, I&apos;m {portfolioData.personal.name}
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-medium animate-slide-in" itemProp="jobTitle">
                  {portfolioData.personal.title} | ayanpal01
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-delay" itemProp="description">
                  {portfolioData.personal.description}
                </p>
                <div className="text-sm text-slate-500" itemProp="skills">
                  <p><strong>Specialties:</strong> Flutter Development, React Development, Next.js, Node.js, MongoDB, TypeScript, Full-Stack Web Development</p>
                  <p><strong>Keywords:</strong> Ayan Pal, ayanpal01, Ayan Pal developer, Flutter developer, React developer, Full-stack developer, Web developer, ayanpal.tech</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2">
                <a
                  href={portfolioData.personal.resumeUrl}
                  download
                  className="group px-8 py-4 bg-slate-800 border-2 border-slate-700 rounded-lg font-semibold text-slate-200 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    Download Resume
                    <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </span>
                </a>
              </div>              
            </div>

            {/* Right Side - Profile Image & Terminal */}
            <div className="order-1 lg:order-2 space-y-6">
              
              {/* Terminal */}
              <div className="animate-fade-in-delay">
                <Terminal />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Timeline Section */}
      <Timeline />

      {/* Contact Section */}
      <Contact />
      </div>
    </>
  );
}

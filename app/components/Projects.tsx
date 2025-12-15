'use client';

import { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePortfolioData } from '../../hooks/usePortfolioData';

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { data: portfolioData, isLoading } = usePortfolioData();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { projects } = portfolioData;

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [projects.items]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 800; // Increased to show ~2 cards per click
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  if (isLoading) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-6 h-6 border-2 border-slate-600 border-t-cyan-500 rounded-full animate-spin"></div>
              Loading projects...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal visible`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">
            {projects.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {projects.subtitle}
          </p>
        </div>

        {/* Scrollable Container with Controls */}
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="hidden sm:flex flex-shrink-0 p-2 sm:p-3 rounded-full text-white transition-all duration-300 shadow-lg"
            style={{
              background: canScrollLeft
                ? 'linear-gradient(135deg, #06b6d4, #3b82f6)'
                : 'linear-gradient(135deg, #475569, #334155)',
              opacity: canScrollLeft ? 1 : 0.5,
              cursor: canScrollLeft ? 'pointer' : 'not-allowed',
              transform: canScrollLeft ? 'scale(1)' : 'scale(0.95)',
            }}
            onMouseEnter={(e) => {
              if (canScrollLeft) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              if (canScrollLeft) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }}
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div className="flex-1 min-w-0 relative group overflow-hidden">
            {/* Left Blur Gradient - Smaller width */}
            <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 lg:w-8 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent z-[5] pointer-events-none hidden sm:block"></div>

            {/* Scrollable Projects Container */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide"
              style={{
                scrollBehavior: 'smooth',
              }}
            >
              <div className="flex gap-6 sm:gap-8 px-2 sm:px-3 py-2">
                {projects.items?.map((project, index) => (
                  <div
                    key={project.title}
                    className="animate-fade-in flex-shrink-0 w-72 sm:w-80"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tech={project.tech}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      gradient={project.gradient}
                      imageUrl={project.imageUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Blur Gradient - Smaller width */}
            <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-6 lg:w-8 bg-gradient-to-l from-slate-950 via-slate-950/50 to-transparent z-[5] pointer-events-none hidden sm:block"></div>
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="hidden sm:flex flex-shrink-0 p-2 sm:p-3 rounded-full text-white transition-all duration-300 shadow-lg"
            style={{
              background: canScrollRight
                ? 'linear-gradient(135deg, #3b82f6, #06b6d4)'
                : 'linear-gradient(135deg, #334155, #475569)',
              opacity: canScrollRight ? 1 : 0.5,
              cursor: canScrollRight ? 'pointer' : 'not-allowed',
              transform: canScrollRight ? 'scale(1)' : 'scale(0.95)',
            }}
            onMouseEnter={(e) => {
              if (canScrollRight) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              if (canScrollRight) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }}
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

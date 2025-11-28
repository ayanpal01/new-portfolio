'use client';

import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePortfolioData } from '../../hooks/usePortfolioData';

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { data: portfolioData, isLoading } = usePortfolioData();

  const { skills } = portfolioData;

  if (isLoading) {
    return (
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-6 h-6 border-2 border-slate-600 border-t-cyan-500 rounded-full animate-spin"></div>
              Loading skills...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative" itemScope itemType="https://schema.org/ItemList">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal visible`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-cyan-400" itemProp="knowsAbout">
            Ayan Pal Skills & Expertise
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional skills and technologies used by Ayan Pal (ayanpal01) - Flutter & Full-Stack Web Developer
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.categories.map((category, index) => (
            <div
              key={category.category}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                relative group
                bg-linear-to-br from-slate-800/50 to-slate-900/50 
                backdrop-blur-sm
                rounded-xl p-6
                border border-slate-700
                transition-all duration-300
                hover:scale-105
                ${hoveredCard === index ? `shadow-lg ${category.glowColor}` : 'shadow-md'}
                animate-fade-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Content */}
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-slate-200">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`
                        px-3 py-1.5
                        bg-slate-800/80
                        border border-slate-600
                        rounded-full
                        text-sm font-medium text-slate-300
                        transition-all duration-300
                        group-hover:border-slate-500
                        group-hover:text-slate-100
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center gap-2">
          {skills.categories.map((category, index) => (
            <div
              key={index}
              className={`
                w-2 h-2 rounded-full
                bg-linear-to-r ${category.color}
                transition-all duration-300
                ${hoveredCard === index ? 'w-8' : ''}
              `}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

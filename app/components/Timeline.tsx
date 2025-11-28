'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePortfolioData } from '../../hooks/usePortfolioData';

export default function Timeline() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { data: portfolioData, isLoading } = usePortfolioData();
  
  const { timeline } = portfolioData;
  const { experience, education } = timeline;

  if (isLoading) {
    return (
      <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-6 h-6 border-2 border-slate-600 border-t-cyan-500 rounded-full animate-spin"></div>
              Loading timeline...
            </div>
          </div>
        </div>
      </section>
    );
  }

  const allItems = [...experience, ...education].sort((a, b) => {
    const getYear = (period: string) => {
      const match = period.match(/\d{4}/);
      return match ? parseInt(match[0]) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal visible`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">
            Experience & Education
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My journey through professional work and academic learning
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-blue-500 via-cyan-500 to-purple-500 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {allItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isWork = item.type === 'work';

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div
                      className={`
                        group relative
                        bg-slate-800/40 backdrop-blur-md
                        border border-slate-700/50
                        rounded-xl p-6
                        transition-all duration-300
                        hover:border-slate-600
                        hover:shadow-lg
                        ${isWork ? 'hover:shadow-blue-500/20' : 'hover:shadow-purple-500/20'}
                      `}
                    >
                      {/* Icon Badge */}
                      <div
                        className={`
                          absolute -top-3 ${isLeft ? 'left-6' : 'right-6 md:left-auto md:right-6'}
                          w-12 h-12
                          bg-linear-to-br ${isWork ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'}
                          rounded-full
                          flex items-center justify-center
                          text-2xl
                          shadow-lg
                        `}
                      >
                        {item.icon}
                      </div>

                      {/* Period Badge */}
                      <div className="mb-3 mt-6">
                        <span className="inline-block px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs text-slate-300 font-medium">
                          {item.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-100 mb-2">
                        {item.title}
                      </h3>

                      {/* Organization */}
                      <p className="text-cyan-400 font-medium mb-3">
                        {item.organization}
                      </p>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Connector Line to Center (Desktop) */}
                      <div
                        className={`
                          hidden md:block
                          absolute top-1/2 transform -translate-y-1/2
                          ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}
                          w-12 h-0.5
                          bg-linear-to-r ${isLeft ? 'from-slate-700 to-cyan-500' : 'from-cyan-500 to-slate-700'}
                        `}
                      ></div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 border-4 border-cyan-500 rounded-full z-10"></div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats at Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          <div className="text-center p-6 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl">
            <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {timeline.stats.experience.value}
            </div>
            <div className="text-slate-400 text-sm">{timeline.stats.experience.label}</div>
          </div>
          <div className="text-center p-6 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl">
            <div className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {timeline.stats.currentPursuit.value}
            </div>
            <div className="text-slate-400 text-sm">{timeline.stats.currentPursuit.label}</div>
          </div>
          <div className="text-center p-6 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl col-span-2 md:col-span-1">
            <div className="text-3xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              {timeline.stats.graduated.value}
            </div>
            <div className="text-slate-400 text-sm">{timeline.stats.graduated.label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

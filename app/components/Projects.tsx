'use client';

import ProjectCard from './ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePortfolioData } from '../../hooks/usePortfolioData';

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { data: portfolioData, isLoading } = usePortfolioData();

  const { projects } = portfolioData;

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal visible`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-cyan-400">
            My Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in"
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
    </section>
  );
}

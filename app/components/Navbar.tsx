'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'timeline', label: 'Experience', href: '#timeline' },
    { id: 'images', label: 'Images', href: '/images' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector('#home');
      if (homeSection) {
        const homeBottom = (homeSection as HTMLElement).offsetHeight;
        setIsVisible(window.scrollY < homeBottom - 100);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = (element as HTMLElement).offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`
        absolute top-0 left-0 right-0 z-40
        transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2 font-mono text-lg font-bold"
          >
            <span className="text-green-400">$</span>
            <span className="text-slate-200">Ayan Pal</span>
            <span className="text-cyan-400 animate-pulse">_</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm
                  transition-all duration-300
                  ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-slate-800'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400 hover:text-slate-200 transition-colors"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              mobileMenu?.classList.toggle('hidden');
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  handleClick(e, item.href);
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm
                  transition-all duration-300
                  ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-slate-800'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

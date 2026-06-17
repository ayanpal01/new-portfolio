"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <Link href="/" className="nav__logo" onClick={closeMenu}>
        [ <b>AYAN</b> PAL ]
      </Link>
      
      <button 
        className={`nav__toggle ${isOpen ? 'is-open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu" 
        aria-expanded={isOpen}
      >
        <span></span><span></span><span></span>
      </button>

      <ul className={`nav__links ${isOpen ? 'is-open' : ''}`}>
        <li>
          <Link 
            href="/" 
            className={pathname === '/' ? 'is-active' : ''}
            onClick={closeMenu}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link 
            href="/about-ayan-pal" 
            className={pathname === '/about-ayan-pal' ? 'is-active' : ''}
            onClick={closeMenu}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link 
            href="/projects" 
            className={pathname === '/projects' ? 'is-active' : ''}
            onClick={closeMenu}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link 
            href="/gallery" 
            className={pathname === '/gallery' ? 'is-active' : ''}
            onClick={closeMenu}
          >
            GALLERY
          </Link>
        </li>
      </ul>

      <a href="mailto:work.ayanpal@gmail.com" className="btn btn-ghost nav__cta">
        Contact
      </a>
    </nav>
  );
}
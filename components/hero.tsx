"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero__grid">
        <div className="reveal">
          <span className="status-tag">
            <span className="dot"></span> Available for full-stack roles &amp; freelance
          </span>
          <h1>Building digital<br />
          <em>experiences</em> that matter.</h1>
          <p className="hero__lede">I'm Ayan Pal — a full-stack developer who takes a project from spec to shipped product: React and Next.js on the front, Node.js and databases underneath, AI where it earns its place.</p>
          <div className="hero__actions">
            <Link href="/projects" className="btn btn-primary">
              View Projects <span className="btn-arrow">→</span>
            </Link>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
          <div className="hero__social">
            <a href="https://github.com/ayanpal01" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.35 4.69-4.58 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.59.69.48A10 10 0 0 0 12 2z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ayanpal01" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-1.7 3.15-1.7 3.37 0 4 2.2 4 5.1V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.05 1.4-2.05 2.9V21H10V9z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:work.ayanpal@gmail.com">
              <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M4 6l8 7 8-7"/></svg>
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="factpanel reveal">
          <div className="factpanel__item"><span className="label">Currently</span><span className="value">MCA Student · 2025–2027</span></div>
          <div className="factpanel__item"><span className="label">Institute</span><span className="value">Adamas University</span></div>
          <div className="factpanel__item"><span className="label">Location</span><span className="value">Kolkata, West Bengal</span></div>
          <div className="factpanel__item"><span className="label">Focus</span><span className="value">Full-Stack &amp; Gen AI </span></div>
        </div>
      </div>
    </header>
  );
}

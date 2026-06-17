"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  
  // Re-trigger reveal animation on filter change if needed
  useEffect(() => {
    const revealEls = document.querySelectorAll(".gallery-grid .plate");
    revealEls.forEach(el => el.classList.add('is-visible'));
  }, [filter]);

  return (
    <main>
      <header className="pagehead">
        <div className="container reveal">
          <span className="eyebrow">Sheet 04 — Archive</span>
          <h1>Gallery</h1>
          <p>A visual timeline of my journey — events, certifications, achievements, and project milestones.</p>
        </div>
      </header>

      <section id="archive">
        <div className="container">
          <div className="filterbar reveal">
            <button className={filter === 'all' ? 'is-active' : ''} onClick={() => setFilter('all')}>All</button>
            <button className={filter === 'events' ? 'is-active' : ''} onClick={() => setFilter('events')}>Events</button>
            <button className={filter === 'achievements' ? 'is-active' : ''} onClick={() => setFilter('achievements')}>Achievements</button>
            <button className={filter === 'certifications' ? 'is-active' : ''} onClick={() => setFilter('certifications')}>Certifications</button>
            <button className={filter === 'projects' ? 'is-active' : ''} onClick={() => setFilter('projects')}>Projects</button>
          </div>

          <div className="gallery-grid reveal">
            <article className="plate" style={{ display: filter === 'all' || filter === 'events' ? 'block' : 'none' }}>
              <div className="plate__art">
                <span className="plate__no z-10 bg-black/60 px-2 py-1 rounded text-white backdrop-blur-sm">PLATE 01</span>
                <Image src="/ayan1.jpg" alt="DevFest Kolkata 2025" fill className="object-cover" />
              </div>
              <div className="plate__body">
                <div className="plate__meta"><span>Events</span><span className="date">December 2025</span></div>
                <h3>Google DevFest Kolkata 2025 — Participant</h3>
                <p>Attended Google DevFest Kolkata 2025, an annual conference hosted by Google Developer Groups covering AI, machine learning, cloud, web, and mobile — bringing developers together through workshops, talks, and hackathons.</p>
              </div>
            </article>

            <article className="plate" style={{ display: filter === 'all' || filter === 'achievements' ? 'block' : 'none' }}>
              <div className="plate__art">
                <span className="plate__no z-10 bg-black/60 px-2 py-1 rounded text-white backdrop-blur-sm">PLATE 02</span>
                <Image src="/ayan-pal-img3.jpg" alt="BCA Graduation" fill className="object-cover" />
              </div>
              <div className="plate__body">
                <div className="plate__meta"><span>Achievements</span><span className="date">11 Feb 2026</span></div>
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p>Completed BCA with a strong foundation in software development, web technologies, databases, and computer fundamentals — built on multiple academic and personal projects focused on practical, clean UI-driven solutions.</p>
              </div>
            </article>

            <article className="plate plate--empty" style={{ display: filter === 'all' ? 'flex' : 'none' }}>
              <div className="inner">
                <span className="label">Next entry — TBD</span>
                <p>New certifications and milestones land here as they're earned.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="closing">
        <div className="container reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Following along?</span>
          <h2>More builds and milestones are on the way.</h2>
          <p>Check back, or follow the work in progress directly on GitHub.</p>
          <div className="closing__actions">
            <a href="https://github.com/ayanpal01" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit GitHub <span className="btn-arrow">→</span></a>
            <Link href="/projects" className="btn btn-ghost">Back to Projects</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

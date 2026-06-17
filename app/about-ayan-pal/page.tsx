import Link from 'next/link';

export default function AboutAyanPal() {
  return (
    <main>
      <header className="hero">
        <div className="container hero__grid">
          <div className="reveal">
            <span className="status-tag"><span className="dot"></span> Available for new opportunities</span>
            <h1>Hi, I'm <em>Ayan</em> Pal.</h1>
            <p className="hero__lede">I engineer digital experiences that are fast, accessible, and visually striking — building the modern web from Kolkata, India.</p>
            <div className="hero__actions">
              <Link href="/projects" className="btn btn-primary">View My Work <span className="btn-arrow">→</span></Link>
              <a href="#details" className="btn btn-ghost">Read My Story</a>
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
      </header>

      {/* ============ JOURNEY ============ */}
      <section id="details">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-head__copy">
              <span className="eyebrow">Module 01 — Overview</span>
              <h2>The journey so far</h2>
            </div>
            <span className="sheet-tag">PROFILE</span>
          </div>
          <p className="reveal" style={{ maxWidth: '68ch', fontSize: '1.05rem' }}>I am a software developer and technology enthusiast who focuses on creating exceptional web experiences by bridging the gap between design and engineering. With a working knowledge of the full stack and a keen eye for detail, I bring ideas to life — from a Figma frame to a deployed build.</p>
        </div>
      </section>

      {/* ============ DETAIL CARDS ============ */}
      <section id="background">
        <div className="container">
          <div className="grid-2 reveal">
            <article className="card">
              <p className="card__eyebrow">Where I work from</p>
              <h3>Based in India</h3>
              <p>Working from the vibrant city of Kolkata, I collaborate with teams and clients globally to deliver production-ready software.</p>
            </article>

            <article className="card">
              <p className="card__eyebrow">What I build with</p>
              <h3>Technology arsenal</h3>
              <p>Fluent in the modern JavaScript/TypeScript ecosystem — I specialise in SPAs, SSG/SSR applications, and robust backend microservices.</p>
              <div className="tag-row" style={{ marginTop: '1.2rem' }}>
                <span className="tag">React</span><span className="tag">Next.js</span><span className="tag">TypeScript</span>
                <span className="tag">Node.js</span><span className="tag">Tailwind CSS</span><span className="tag">PostgreSQL</span>
                <span className="tag">MongoDB</span><span className="tag">AI Integration</span>
              </div>
            </article>

            <article className="card">
              <p className="card__eyebrow">Where I'm studying</p>
              <h3>Academic background</h3>
              <p>Pursuing a Master of Computer Applications (MCA) at Adamas University (2025–2027). My academic work aligns closely with my professional focus — software engineering principles, algorithms, and advanced systems architecture.</p>
            </article>

            <article className="card">
              <p className="card__eyebrow">How I work</p>
              <h3>Development ethos</h3>
              <p>I believe in writing code that's as clean beneath the surface as the interface is on screen. Performance, accessibility, and scalability are never afterthoughts — they're part of the spec from line one.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ CONTACT / CLOSING ============ */}
      <section id="contact" className="closing">
        <div className="container reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Module 02 — Get in touch</span>
          <h2>Have a project in mind?</h2>
          <p>I'm currently open to full-stack roles, freelance work, and interesting collaborations.</p>
          <a href="mailto:work.ayanpal@gmail.com" className="closing__email">work.ayanpal@gmail.com</a>
          <div className="closing__actions">
            <Link href="/projects" className="btn btn-primary">See My Projects <span className="btn-arrow">→</span></Link>
            <a href="https://github.com/ayanpal01" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Visit GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
}

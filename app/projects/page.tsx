import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main>
      <header className="pagehead">
        <div className="container reveal">
          <span className="eyebrow">Sheet 03 — Catalogue</span>
          <h1>Projects</h1>
          <p>A curated selection of what I've designed and engineered — from real-time sockets to AI integrations.</p>
        </div>
      </header>

      <section id="catalogue">
        <div className="container">
          <div className="grid-2 reveal">

            <article className="card">
              <p className="card__eyebrow">Real-time collaborative whiteboard</p>
              <h3>SketchSync</h3>
              <p>Transforms mobile devices into wireless pen tablets. Engineered with real-time synchronisation over Socket.IO, featuring secure room-based access and seamless, latency-free drawing.</p>
              <div className="tag-row">
                <span className="tag">Socket.IO</span><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Tailwind CSS</span>
              </div>
              <a className="card__link" href="https://sketch-sync-rho.vercel.app/" target="_blank" rel="noopener noreferrer">Live demo <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
            </article>

            <article className="card">
              <p className="card__eyebrow">AI nutrition analysis platform</p>
              <h3>IngrediScan</h3>
              <p>A full-stack application for modern nutrition analysis. Upload images for OCR processing, or input text directly, to receive AI-powered health scores and ingredient insights via the GROQ API.</p>
              <div className="tag-row">
                <span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">AI</span><span className="tag">GROQ API</span>
              </div>
              <a className="card__link" href="https://ingredi-scan.vercel.app" target="_blank" rel="noopener noreferrer">Live demo <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
            </article>

            <article className="card">
              <p className="card__eyebrow">Complete property management</p>
              <h3>PG Master</h3>
              <p>A comprehensive, role-based PG facility management system. Streamlines daily operations with modules for attendance tracking, expense logging, and payment-receipt generation.</p>
              <div className="tag-row">
                <span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Tailwind CSS</span><span className="tag">jsPDF</span>
              </div>
              <a className="card__link" href="https://pg-master-gilt.vercel.app" target="_blank" rel="noopener noreferrer">Live demo <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
            </article>

            <article className="card">
              <p className="card__eyebrow">Minimalist weather client</p>
              <h3>Weather Dash</h3>
              <p>A clean, beautiful, hyper-fast weather application. Returns real-time metrics — temperature trends, wind speed, and atmospheric conditions — for any city worldwide.</p>
              <div className="tag-row">
                <span className="tag">JavaScript</span><span className="tag">API Integration</span><span className="tag">CSS</span>
              </div>
              <a className="card__link" href="https://simple-weather-website-eight.vercel.app" target="_blank" rel="noopener noreferrer">Live demo <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
            </article>

          </div>

          <div className="text-center mt-lg reveal" style={{ marginTop: '3rem' }}>
            <a href="https://github.com/ayanpal01?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Explore more on GitHub <span className="btn-arrow">→</span></a>
          </div>
        </div>
      </section>

      <section id="contact" className="closing">
        <div className="container reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Got an idea worth building?</span>
          <h2>Let's build something amazing together.</h2>
          <p>Always open to discussing product work, new opportunities, or partnerships.</p>
          <a href="mailto:work.ayanpal@gmail.com" className="closing__email">work.ayanpal@gmail.com</a>
        </div>
      </section>
    </main>
  );
}

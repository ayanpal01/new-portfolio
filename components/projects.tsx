export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head__copy">
            <span className="eyebrow">Module 02 — Builds</span>
            <h2>Featured projects</h2>
          </div>
          <span className="sheet-tag">4 OF 12+ SHOWN</span>
        </div>

        <div className="grid-2 reveal">
          <article className="card">
            <p className="card__eyebrow">Real-time collaboration</p>
            <h3>SketchSync</h3>
            <p>A real-time collaborative whiteboard that turns a phone into a wireless pen tablet, synced over Socket.IO with secure, room-based access.</p>
            <div className="tag-row">
              <span className="tag">Socket.IO</span><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Tailwind CSS</span>
            </div>
            <a className="card__link" href="https://sketch-sync-rho.vercel.app/" target="_blank" rel="noopener noreferrer">View live demo <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
          </article>

          <article className="card">
            <p className="card__eyebrow">AI nutrition analysis</p>
            <h3>IngrediScan</h3>
            <p>A full-stack app for nutrition analysis — image upload with OCR or direct text input, scored and explained by AI through the GROQ API.</p>
            <div className="tag-row">
              <span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">AI</span><span className="tag">GROQ API</span>
            </div>
            <a className="card__link" href="https://ingredi-scan.vercel.app" target="_blank" rel="noopener noreferrer">View live demo <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
          </article>

          <article className="card">
            <p className="card__eyebrow">Property management</p>
            <h3>PG Master</h3>
            <p>A role-based PG management system covering attendance, expense logging, and payment-receipt generation for day-to-day facility operations.</p>
            <div className="tag-row">
              <span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Tailwind CSS</span><span className="tag">jsPDF</span>
            </div>
            <a className="card__link" href="https://pg-master-gilt.vercel.app" target="_blank" rel="noopener noreferrer">View live demo <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
          </article>

          <article className="card">
            <p className="card__eyebrow">Weather client</p>
            <h3>Weather Dash</h3>
            <p>A clean, fast weather app that returns live temperature, wind speed and conditions for any city, with no clutter in the way of the data.</p>
            <div className="tag-row">
              <span className="tag">JavaScript</span><span className="tag">API Integration</span><span className="tag">CSS</span>
            </div>
            <a className="card__link" href="https://simple-weather-website-eight.vercel.app" target="_blank" rel="noopener noreferrer">View live demo <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></a>
          </article>
        </div>

        <div className="text-center mt-lg reveal" style={{ marginTop: '3rem' }}>
          <a href="https://github.com/ayanpal01?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            View all repositories <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head__copy">
            <span className="eyebrow">Module 05 — Capability</span>
            <h2>What I do</h2>
            <p>I help businesses and individuals bring ideas to life with robust, scalable, user-friendly digital solutions.</p>
          </div>
        </div>

        <div className="grid-3 reveal">
          <article className="card">
            <div className="iconmark"><svg viewBox="0 0 24 24"><path d="M3 5h18M3 12h18M3 19h18"/></svg></div>
            <h3>Web Development</h3>
            <p>High-performance, responsive websites built with Next.js, React and Tailwind CSS — tuned for SEO and a smooth user experience.</p>
          </article>
          <article className="card">
            <div className="iconmark"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5v14"/><circle cx="12" cy="12" r="9"/></svg></div>
            <h3>Backend &amp; API</h3>
            <p>Scalable server-side architectures, RESTful APIs and database design using Node.js, Express and modern databases.</p>
          </article>
          <article className="card">
            <div className="iconmark"><svg viewBox="0 0 24 24"><path d="M13 2 3 14h8l-1 8 11-12h-8z"/></svg></div>
            <h3>Automation</h3>
            <p>Scripting repetitive tasks away with Python and supporting tools — built to save time and reduce manual error.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

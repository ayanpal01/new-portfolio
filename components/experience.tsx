export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head__copy">
            <span className="eyebrow">Module 01 — Record</span>
            <h2>Work &amp; experience</h2>
          </div>
          <span className="sheet-tag">LOG — 2023 / PRESENT</span>
        </div>

        <div className="timeline reveal">
          <div className="timeline__item">
            <div className="timeline__meta"><span>Jan 2026 — Apr 2026</span><span className="org">Intelli Edtech</span></div>
            <h3>Full Stack Developer</h3>
            <p>Developed a multimodal AI system to detect and categorise previous-year exam questions, built automated database integration for storage and retrieval, and delivered full-stack features that streamlined the question-processing workflow.</p>
          </div>
          <div className="timeline__item">
            <div className="timeline__meta"><span>Jun 2023 — May 2025</span><span className="org">Azmth</span></div>
            <h3>Frontend Web Dev Intern</h3>
            <p>Built responsive, interactive interfaces with Next.js, React, TypeScript and Tailwind CSS. Worked closely with designers to translate UI/UX designs into production-ready components, and improved page-load performance and accessibility.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

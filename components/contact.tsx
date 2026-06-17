export default function Contact() {
  return (
    <section id="contact" className="closing">
      <div className="container reveal">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>Module 06 — Get in touch</span>
        <h2>Let's build something amazing together.</h2>
        <p>Always open to discussing product work, new opportunities, or partnerships.</p>
        <a href="mailto:work.ayanpal@gmail.com" className="closing__email">work.ayanpal@gmail.com</a>
        <div className="closing__actions">
          <a href="mailto:work.ayanpal@gmail.com" className="btn btn-primary">Email Me <span className="btn-arrow">→</span></a>
          <a href="https://www.linkedin.com/in/ayanpal01" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Connect on LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

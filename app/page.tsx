export default function Home() {
  return (
    <section
      className="hero anchor-section"
      id="about"
      aria-labelledby="about-title"
    >
      <article className="hero-card">
        <span className="eyebrow">Personal Portfolio</span>
        <h2 className="hero-title" id="about-title">
          Building dependable software with a focus on clarity, delivery, and
          continuous learning.
        </h2>
        <p className="hero-summary">
          I build reliable software and enjoy turning complex ideas into useful
          products. This portfolio highlights my background, recent work, and
          the open source contributions that shape how I learn and collaborate.
        </p>

        <div className="hero-actions">
          <a className="button-link button-link-primary" href="#projects">
            View Projects
          </a>
          <a className="button-link" href="#contact">
            Contact Me
          </a>
        </div>
      </article>

      <aside className="contact-card" aria-labelledby="contact-summary-title">
        <h2 className="section-title" id="contact-summary-title">
          Quick Contact
        </h2>
        <p className="section-subtitle">
          Available for thoughtful engineering conversations, collaboration, and
          new product ideas.
        </p>
        <ul className="contact-list">
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/sassan404"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/sassan404
            </a>
          </li>
          <li>
            Focus: Full-stack web development, API design, and pragmatic problem
            solving
          </li>
          <li>Location: Remote-friendly and collaboration-oriented</li>
          <li>
            About: Focused on building thoughtful software experiences with a
            balance of speed and maintainability.
          </li>
        </ul>
      </aside>
    </section>
  );
}

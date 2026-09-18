'use client';

import { useEffect, useMemo, useState } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'contact', label: 'Contact' },
] as const;

export default function Home() {
  const sectionIds = useMemo(() => sections.map((section) => section.id), []);
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const syncHash = () => {
      const currentHash = window.location.hash.replace('#', '');

      if (sectionIds.includes(currentHash as (typeof sectionIds)[number])) {
        setActiveSection(currentHash);
      }
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener('hashchange', syncHash);
      observer.disconnect();
    };
  }, [sectionIds]);

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <h1 className="brand-title">Sassan</h1>
            <p className="brand-tagline">
              Software Engineer · Problem Solver · Lifelong Learner
            </p>
          </div>

          <nav aria-label="Primary" className="section-nav">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`nav-link${isActive ? ' nav-link-active' : ''}`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="page-content" id="main-content">
        <section className="hero" id="about" aria-labelledby="about-title">
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
              Available for thoughtful engineering conversations, collaboration,
              and new product ideas.
            </p>
            <ul className="contact-list">
              <li>
                GitHub:{' '}
                <a
                  href="https://github.com/sassan404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/sassan404
                </a>
              </li>
              <li>
                Focus: Full-stack web development, API design, and pragmatic
                problem solving
              </li>
              <li>Location: Remote-friendly and collaboration-oriented</li>
            </ul>
          </aside>
        </section>

        <div className="section-grid">
          <section className="panel" id="education" aria-labelledby="education-title">
            <h2 className="section-title" id="education-title">
              Education
            </h2>
            <p className="section-copy">
              A foundation in computer science principles, self-directed learning,
              and continuous skill development.
            </p>
            <ul className="item-list">
              <li>
                <div className="item-heading">
                  <h3>Formal Studies</h3>
                  <span className="item-meta">Academic Background</span>
                </div>
                <p className="item-copy">
                  Placeholder for degree details, institution, and focus areas that
                  best represent core technical strengths.
                </p>
              </li>
              <li>
                <div className="item-heading">
                  <h3>Continued Learning</h3>
                  <span className="item-meta">Ongoing</span>
                </div>
                <p className="item-copy">
                  Regularly expanding knowledge through hands-on building, system
                  design practice, and exploration of modern web technologies.
                </p>
              </li>
            </ul>
          </section>

          <section className="panel" id="experience" aria-labelledby="experience-title">
            <h2 className="section-title" id="experience-title">
              Experience
            </h2>
            <p className="section-copy">
              Delivering software with an emphasis on maintainability, iteration,
              and user impact.
            </p>
            <ul className="item-list">
              <li>
                <div className="item-heading">
                  <h3>Software Engineering</h3>
                  <span className="item-meta">Product & Platform Work</span>
                </div>
                <p className="item-copy">
                  Experience designing, building, and improving applications with
                  strong attention to reliability, developer experience, and
                  long-term quality.
                </p>
              </li>
              <li>
                <div className="item-heading">
                  <h3>Collaboration</h3>
                  <span className="item-meta">Team Delivery</span>
                </div>
                <p className="item-copy">
                  Comfortable working across ambiguous requirements, refining
                  implementation details, and shipping pragmatic solutions.
                </p>
              </li>
            </ul>
          </section>

          <section className="panel" id="projects" aria-labelledby="projects-title">
            <h2 className="section-title" id="projects-title">
              Projects
            </h2>
            <p className="section-copy">
              Selected work spanning product development, experimentation, and
              practical problem solving.
            </p>
            <ul className="item-list">
              <li>
                <div className="item-heading">
                  <h3>Portfolio Website</h3>
                  <span className="item-meta">Next.js · TypeScript</span>
                </div>
                <p className="item-copy">
                  A responsive personal site focused on concise storytelling,
                  accessible navigation, and clean presentation.
                </p>
              </li>
              <li>
                <div className="item-heading">
                  <h3>Product & Utility Builds</h3>
                  <span className="item-meta">Featured Work</span>
                </div>
                <p className="item-copy">
                  Space for highlighting projects that demonstrate ownership,
                  technical depth, and measurable results.
                </p>
              </li>
            </ul>
          </section>

          <section className="panel" id="open-source" aria-labelledby="open-source-title">
            <h2 className="section-title" id="open-source-title">
              Open Source
            </h2>
            <p className="section-copy">
              Open source is where experimentation, shared learning, and community
              contribution come together.
            </p>
            <ul className="item-list">
              <li>
                <div className="item-heading">
                  <h3>GitHub Contributions</h3>
                  <span className="item-meta">Public Collaboration</span>
                </div>
                <p className="item-copy">
                  Contributions and repositories that reflect curiosity, problem
                  solving, and a willingness to improve tools in the open.
                </p>
              </li>
            </ul>
            <ul className="pill-list" aria-label="Open source interests">
              <li>Web Platforms</li>
              <li>Developer Tools</li>
              <li>Automation</li>
              <li>Knowledge Sharing</li>
            </ul>
          </section>

          <section className="panel" id="contact" aria-labelledby="contact-title">
            <h2 className="section-title" id="contact-title">
              Contact
            </h2>
            <p className="section-copy">
              If you would like to discuss a project, collaboration, or idea, the
              best place to start is GitHub.
            </p>
            <ul className="contact-list">
              <li>
                GitHub:{' '}
                <a
                  href="https://github.com/sassan404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @sassan404
                </a>
              </li>
              <li>
                About: Focused on building thoughtful software experiences with a
                balance of speed and maintainability.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

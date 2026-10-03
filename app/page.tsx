import Link from "next/link";
import { profile, skills } from "./cv-data";

export default function Home() {
  return (
    <>
      <section
        className="hero anchor-section"
        id="about"
        aria-labelledby="about-title"
      >
        <article className="hero-card">
          <span className="eyebrow">Personal Portfolio</span>
          <h2 className="hero-title" id="about-title">
            {profile.name}, full stack developer building dependable software
            with a focus on clarity, delivery and continuous learning.
          </h2>
          <p className="hero-summary">
            I work mostly with Next.js, TypeScript, Java and Scala, across web
            platforms, backend services and IoT research. This portfolio covers
            my experience, studies, projects and the open source tools I use to
            own my own data.
          </p>

          <div className="hero-actions">
            <Link className="button-link button-link-primary" href="/projects">
              View Projects
            </Link>
            <a className="button-link" href="#contact">
              Contact Me
            </a>
            <Link className="button-link" href="/cv">
              Download CV
            </Link>
          </div>
        </article>

        <aside className="contact-card" id="contact" aria-labelledby="contact-summary-title">
          <h2 className="section-title" id="contact-summary-title">
            Quick Contact
          </h2>
          <p className="section-subtitle">
            Available for thoughtful engineering conversations, collaboration
            and new product ideas.
          </p>
          <ul className="contact-list">
            <li>
              Email:{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.linkedinLabel}
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                {profile.githubLabel}
              </a>
            </li>
            <li>
              Phone: <a href="tel:+96181498774">{profile.phone}</a>
            </li>
            <li>Location: {profile.location} — remote friendly</li>
          </ul>
        </aside>
      </section>

      <section className="panel" aria-labelledby="skills-title">
        <h2 className="section-title" id="skills-title">
          Main Skills
        </h2>
        <ul className="item-list">
          {skills.map((skill) => (
            <li key={skill.group}>
              <div className="item-heading">
                <h3>{skill.group}</h3>
              </div>
              <ul className="pill-list">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

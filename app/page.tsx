import Link from "next/link";
import SkillPills from "./skill-pills";
import { profile, skillsByGroup } from "./cv-data";

export default function Home() {
  return (
    <>
      <section
        className="hero anchor-section"
        id="about"
        aria-labelledby="about-title"
      >
        <article className="hero-card">
          <h2 className="hero-title" id="about-title">
            {profile.name}
          </h2>
          <p className="hero-summary">
            Full stack developer. Sometimes passionate, sometimes distracted.
          </p>
          <p className="hero-summary">
            Strongly until AI in the morning, easily submitting to the AI
            overlords in the afternoon.
          </p>
          <p className="hero-summary">
            I start some personal projects that I rarely finish, but I never
            give up.
          </p>
          <p className="hero-summary">
            This website covers my experience, projects and my other interests.
          </p>
        </article>

        <aside
          className="contact-card"
          id="contact"
          aria-labelledby="contact-summary-title"
        >
          <h2 className="section-title" id="contact-summary-title">
            Quick Contact
          </h2>
          <p className="section-subtitle">
            Available for thoughtful engineering conversations, collaboration
            and new product ideas.
          </p>
          <ul className="contact-list">
            <li>
              Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
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
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.githubLabel}
              </a>
            </li>
            <li>
              Phone: <a href="tel:+96181498774">{profile.phone}</a>
            </li>
            <li>Location: {profile.location} — remote friendly</li>
          </ul>

          <div className="hero-actions">
            <Link className="button-link button-link-primary" href="/projects">
              View Projects
            </Link>
            <Link className="button-link" href="/cv">
              Download CV
            </Link>
          </div>
        </aside>
      </section>

      <section className="panel" id="skills" aria-labelledby="skills-title">
        <h2 className="section-title" id="skills-title">
          Main Skills
        </h2>
        <ul className="item-list">
          {skillsByGroup.map((group) => (
            <li key={group.slug}>
              <div className="item-heading">
                <h3>{group.label}</h3>
              </div>
              <SkillPills skills={group.skills} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

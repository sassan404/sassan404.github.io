"use client";

import { useEffect } from "react";
import {
  certLabel,
  certifications,
  education,
  experienceWithSkills,
  languages,
  profile,
  projectsWithSkills,
  skillsByGroup,
} from "../cv-data";

function Row({ children, dates }: { children: React.ReactNode; dates?: string }) {
  return (
    <div className="cv-row">
      <span>{children}</span>
      {dates ? <span className="cv-dates">{dates}</span> : null}
    </div>
  );
}

export default function Cv() {
  useEffect(() => {
    document.title = `${profile.name} - CV`;
    window.print();
  }, []);

  return (
    <article className="cv">
      <header className="cv-header">
        <h1 className="cv-name">{profile.name}</h1>
        <p className="cv-contact">
          {profile.location} · {profile.phone} · {profile.email} ·{" "}
          <a href={profile.linkedin}>{profile.linkedinLabel}</a> ·{" "}
          <a href={profile.github}>{profile.githubLabel}</a>
        </p>
      </header>

      <h2 className="cv-heading">Experience</h2>
      <ul className="cv-list">
        {experienceWithSkills.map((role) => (
          <li key={`${role.company}-${role.period}`}>
            <Row dates={role.period}>
              <strong>{role.role}</strong> — {role.company}, {role.place}
            </Row>
            <ul className="cv-bullets">
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className="cv-heading">Education</h2>
      <ul className="cv-list">
        {education.map((entry) => (
          <li key={entry.degree}>
            <Row dates={entry.period}>
              <strong>{entry.degree}</strong> — {entry.schools}
            </Row>
          </li>
        ))}
      </ul>

      <h2 className="cv-heading">Certifications</h2>
      <ul className="cv-list">
        {certifications.map((cert) => (
          <li key={cert.name}>
            <Row dates={cert.period}>
              <strong>{cert.name}</strong>
              {cert.issuer ? ` — ${cert.issuer}` : ""}
            </Row>
          </li>
        ))}
      </ul>

      <h2 className="cv-heading">Main Skills</h2>
      <div className="cv-skills">
        {skillsByGroup.map((group) => (
          <p key={group.slug}>
            <strong>{group.label}:</strong>{" "}
            {group.skills.map((skill) => skill.name).join(", ")}
          </p>
        ))}
      </div>

      <h2 className="cv-heading">Languages</h2>
      <p className="cv-line">
        {languages.map((entry) => `${entry.language} — ${entry.level}`).join(" · ")}
      </p>

      <h2 className="cv-heading">Personal Projects</h2>
      <ul className="cv-list">
{projectsWithSkills.map((project) => (
            <li key={project.slug}>
              <Row>
                <strong>{project.name}</strong> — {project.copy} (
                {project.skills.map((skill) => skill.name).join(", ")}){" "}
                {project.href ? (
                  <a href={project.href}>live app</a>
                ) : null}
              </Row>
            </li>
          ))}
      </ul>
    </article>
  );
}

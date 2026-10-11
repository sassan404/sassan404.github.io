import { education, languages } from "../cv-data";

export default function Education() {
  return (
    <section
      className="panel anchor-section"
      id="education"
      aria-labelledby="education-title"
    >
      <h2 className="section-title" id="education-title">
        Education
      </h2>
      <p className="section-copy">
        Computer and communications engineering followed by a specialization in
        telecom networks and security.
      </p>
      <ul className="item-list">
        {education.map((entry) => (
          <li key={entry.degree}>
            <div className="item-heading">
              <h3>{entry.degree}</h3>
              <span className="item-meta">{entry.period}</span>
            </div>
            <p className="item-copy">{entry.schools}</p>
          </li>
        ))}
      </ul>

      <h3 className="section-subtitle-heading">Languages</h3>
      <ul className="pill-list">
        {languages.map((entry) => (
          <li key={entry.language}>
            <span className="pill">
              {entry.language} — {entry.level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

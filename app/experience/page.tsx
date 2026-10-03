import { experience } from "../cv-data";

export default function Experience() {
  return (
    <section
      className="panel anchor-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <h2 className="section-title" id="experience-title">
        Experience
      </h2>
      <p className="section-copy">
        Delivering software across full stack web, IoT research and front-end
        work, with an emphasis on maintainability, iteration and user impact.
      </p>
      <ul className="item-list">
        {experience.map((role) => (
          <li key={`${role.company}-${role.period}`}>
            <div className="item-heading">
              <h3>
                {role.role} — {role.company}
              </h3>
              <span className="item-meta">
                {role.period} · {role.place}
              </span>
            </div>
            <ul className="note-list">
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

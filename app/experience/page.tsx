import SkillPills from "../skill-pills";
import { experienceWithSkills } from "../cv-data";

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
        Every skill below opens the projects and roles behind it.
      </p>
      <ul className="item-list">
        {experienceWithSkills.map((role) => (
          <li key={role.slug}>
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
            <SkillPills skills={role.skills} />
          </li>
        ))}
      </ul>
    </section>
  );
}

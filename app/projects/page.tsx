import SkillPills from "../skill-pills";
import { projectsWithSkills } from "../cv-data";

export default function Projects() {
  return (
    <section
      className="panel anchor-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <h2 className="section-title" id="projects-title">
        Projects
      </h2>
      <p className="section-copy">
        Personal builds where I get to own the whole stack, from idea to
        deployment. Every skill below opens the projects and roles behind it.
      </p>
      <ul className="item-list">
        {projectsWithSkills.map((project) => (
          <li key={project.slug}>
            <div className="item-heading">
              <h3>
                {project.name}
                {project.href ? (
                  <>
                    {" "}
                    <a href={project.href}>live app</a>
                  </>
                ) : null}
              </h3>
            </div>
            <p className="item-copy">{project.copy}</p>
            <SkillPills skills={project.skills} />
          </li>
        ))}
      </ul>
    </section>
  );
}

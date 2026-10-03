import { projects } from "../cv-data";

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
        deployment.
      </p>
      <ul className="item-list">
        {projects.map((project) => (
          <li key={project.name}>
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
              <span className="item-meta">{project.meta}</span>
            </div>
            <p className="item-copy">{project.copy}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

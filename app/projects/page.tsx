import SectionNav from "../section-nav";

export default function Home() {
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
  );
}

export default function Home() {
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
        Delivering software with an emphasis on maintainability, iteration, and
        user impact.
      </p>
      <ul className="item-list">
        <li>
          <div className="item-heading">
            <h3>Software Engineering</h3>
            <span className="item-meta">Product & Platform Work</span>
          </div>
          <p className="item-copy">
            Experience designing, building, and improving applications with
            strong attention to reliability, developer experience, and long-term
            quality.
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
  );
}

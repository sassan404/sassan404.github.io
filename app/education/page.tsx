export default function Home() {
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
        A foundation in computer science principles, self-directed learning, and
        continuous skill development.
      </p>
      <ul className="item-list">
        <li>
          <div className="item-heading">
            <h3>Formal Studies</h3>
            <span className="item-meta">Academic Background</span>
          </div>
          <p className="item-copy">
            Placeholder for degree details, institution, and focus areas that
            best represent core technical strengths.
          </p>
        </li>
        <li>
          <div className="item-heading">
            <h3>Continued Learning</h3>
            <span className="item-meta">Ongoing</span>
          </div>
          <p className="item-copy">
            Regularly expanding knowledge through hands-on building, system
            design practice, and exploration of modern web technologies.
          </p>
        </li>
      </ul>
    </section>
  );
}

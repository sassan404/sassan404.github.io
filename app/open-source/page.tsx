export default function Home() {
  return (
    <section
      className="panel anchor-section"
      id="open-source"
      aria-labelledby="open-source-title"
    >
      <h2 className="section-title" id="open-source-title">
        Open Source
      </h2>
      <p className="section-copy">
        Open source is where experimentation, shared learning, and community
        contribution come together.
      </p>
      <ul className="item-list">
        <li>
          <div className="item-heading">
            <h3>GitHub Contributions</h3>
            <span className="item-meta">Public Collaboration</span>
          </div>
          <p className="item-copy">
            Contributions and repositories that reflect curiosity, problem
            solving, and a willingness to improve tools in the open.
          </p>
        </li>
      </ul>
      <ul className="pill-list" aria-label="Open source interests">
        <li>Web Platforms</li>
        <li>Developer Tools</li>
        <li>Automation</li>
        <li>Knowledge Sharing</li>
      </ul>
    </section>
  );
}

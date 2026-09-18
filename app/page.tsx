export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: '0 auto',
        maxWidth: 760,
        lineHeight: 1.5,
        padding: '2rem 1.25rem 3rem',
      }}
    >
      <header>
        <h1 style={{ marginBottom: '0.25rem' }}>Sassan</h1>
        <p style={{ marginTop: 0, color: '#4b5563' }}>
          Software Engineer · Problem Solver · Lifelong Learner
        </p>
      </header>

      <section style={{ marginTop: '1.5rem' }}>
        <h2>About Me</h2>
        <p>
          I build reliable software and enjoy turning complex ideas into useful
          products. This page is a quick snapshot of who I am, what I do, and
          how to reach me.
        </p>
      </section>

      <section style={{ marginTop: '1.5rem' }}>
        <h2>Core Skills</h2>
        <ul>
          <li>Full-stack web development</li>
          <li>System design and API development</li>
          <li>Testing, debugging, and continuous improvement</li>
        </ul>
      </section>

      <section style={{ marginTop: '1.5rem' }}>
        <h2>Contact</h2>
        <ul>
          <li>
            GitHub:{' '}
            <a
              href="https://github.com/sassan404"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/sassan404
              <span
                style={{
                  border: 0,
                  clip: 'rect(0 0 0 0)',
                  height: '1px',
                  margin: '-1px',
                  overflow: 'hidden',
                  padding: 0,
                  position: 'absolute',
                  whiteSpace: 'nowrap',
                  width: '1px',
                }}
              >
                {' '}
                (opens in a new tab)
              </span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

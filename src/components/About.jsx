const TAGS = [
  'Healthcare AI',
  'Computer Vision',
  'Generative AI',
  'MLOps',
  'Deep Learning',
  'Predictive Modelling',
  'Data Analytics',
  'SSUET 2027',
]

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div>
          <div className="sec-label reveal">About Me</div>
          <h2 className="sec-h reveal rd1">
            The mind
            <br />
            behind the <em>code</em>
          </h2>
          <div className="about-text reveal rd2">
            <p>
              I'm a <strong>Software Engineering student</strong> at SSUET, Karachi —
              specialising in Artificial Intelligence, Machine Learning, Computer Vision, and
              Generative AI.
            </p>
            <p>
              My journey began with a simple question:{' '}
              <strong>how can data be transformed into meaningful decisions?</strong> That
              question led me to build intelligent systems that solve practical problems — from
              medical diagnostics to interior design.
            </p>
            <p>
              I enjoy combining <strong>research, engineering, and design</strong> to create
              products that deliver measurable impact. I continuously explore modern AI
              architectures, deployment workflows, and MLOps practices.
            </p>
          </div>
          <div className="about-tags reveal rd3">
            {TAGS.map((t) => (
              <span className="about-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="about-right reveal rd2">
          <div className="about-stat-grid">
            <div className="ast">
              <span className="ast-n">3</span>
              <span className="ast-l">Projects Shipped</span>
            </div>
            <div className="ast">
              <span className="ast-n" style={{ color: '#F0B429' }}>
                6
              </span>
              <span className="ast-l">Models Deployed</span>
            </div>
            <div className="ast">
              <span className="ast-n" style={{ color: '#C9A66B' }}>
                25+
              </span>
              <span className="ast-l">Technologies</span>
            </div>
            <div className="ast">
              <span className="ast-n">3+</span>
              <span className="ast-l">Years Learning</span>
            </div>
          </div>

          <div
            style={{
              border: '1px solid rgba(var(--fg-rgb),.1)',
              borderRadius: 12,
              padding: 28,
              background: 'rgba(var(--fg-rgb),.03)',
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: 9.5,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'rgba(var(--fg-rgb),.4)',
                marginBottom: 14,
              }}
            >
              Education
            </div>
            <div
              style={{
                fontFamily: "'Instrument Serif',serif",
                fontSize: 20,
                fontWeight: 400,
                color: 'rgb(var(--fg-rgb))',
                marginBottom: 4,
                letterSpacing: '-.01em',
              }}
            >
              BS Software Engineering
            </div>
            <div style={{ fontSize: 13.5, color: 'rgba(var(--fg-rgb),.55)', fontWeight: 300 }}>
              Sir Syed University of Engineering &amp; Technology
            </div>
            <div
              style={{
                fontSize: 12,
                color: 'rgba(var(--fg-rgb),.4)',
                marginTop: 4,
                fontFamily: "'Space Mono',monospace",
              }}
            >
              2023 – 2027 · Karachi, Pakistan
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

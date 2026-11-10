import ProjectThumb from './ProjectThumb'

export default function ProjectCard({ project, onOpenCaseStudy }) {
  const {
    flagship, badge, num, internship,
    title, desc, tags, live, code,
    image, imageAlt, features, outcome,
    impact, caseStudy,
  } = project

  return (
    <div className={`proj-card reveal${flagship ? ' flagship' : ''}`}>
      {/* ── LEFT — text content ───────────────────────────── */}
      <div>
        {/* Flagship badge */}
        {flagship && <div className="flagship-badge">{badge}</div>}

        {/* Internship label — only on FlyRank card */}
        {internship && (
          <div className="proj-internship-label" aria-label={`Built during: ${internship}`}>
            <span className="proj-internship-dot" aria-hidden="true" />
            {internship}
          </div>
        )}

        <div className="proj-num">{num}</div>

        <h3 className="proj-title">
          {title[0]}
          <br />
          {title[1]}
        </h3>

        <p className="proj-desc">{desc}</p>

        {/* Outcome pill */}
        {outcome && (
          <div className="proj-outcome">
            <span className="proj-outcome-icon" aria-hidden="true">→</span>
            {outcome}
          </div>
        )}

        {/* Quantified impact — optional per-project results grid */}
        {impact && (
          <div className="proj-impact">
            <div className="proj-impact-label">{impact.label}</div>
            <div className="about-stat-grid">
              {impact.stats.map((s) => (
                <div className="ast" key={s.label}>
                  <span className="ast-n">{s.value}</span>
                  <span className="ast-l">{s.label}</span>
                </div>
              ))}
            </div>
            {impact.note && <p className="proj-impact-note">{impact.note}</p>}
          </div>
        )}

        {/* Tech tags */}
        <div className="proj-tags">
          {tags.map((t) => (
            <span
              className={`ptag${t.featured ? ' featured' : ''}`}
              key={t.label}
            >
              {t.label}
            </span>
          ))}
        </div>

        {/* Links — only render buttons for real URLs */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {caseStudy && onOpenCaseStudy && (
            <button
              type="button"
              className="proj-link"
              onClick={() => onOpenCaseStudy(caseStudy)}
              aria-haspopup="dialog"
            >
              View Case Study
            </button>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
              aria-label={`Visit live project: ${title.join(' ')}`}
            >
              Visit Live Project
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
              aria-label={`View source code for ${title.join(' ')}`}
            >
              View Code
            </a>
          )}
        </div>
      </div>

      {/* ── RIGHT — thumbnail + features ─────────────────── */}
      <div className="proj-right">
        <ProjectThumb
          image={image}
          alt={imageAlt}
          liveUrl={live}
          /* All project screenshots are wide dashboard/browser captures (~2.1:1 landscape) */
          aspectRatio="16/7.5"
        />
        <div className="proj-features">
          {features.map((f) => (
            <div
              className="pf"
              style={f.accent ? { color: '#F0B429' } : undefined}
              key={f.label}
            >
              {f.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

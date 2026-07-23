import ProjectThumb from './ProjectThumb'

export default function ProjectCard({ project }) {
  const { flagship, badge, num, title, desc, tags, live, code, image, imageAlt, features, outcome } =
    project

  return (
    <div className={`proj-card reveal${flagship ? ' flagship' : ''}`}>
      <div>
        {flagship && <div className="flagship-badge">{badge}</div>}
        <div className="proj-num">{num}</div>
        <h3 className="proj-title">
          {title[0]}
          <br />
          {title[1]}
        </h3>
        <p className="proj-desc">{desc}</p>
        {outcome && (
          <div className="proj-outcome">
            <span className="proj-outcome-icon" aria-hidden="true">→</span>
            {outcome}
          </div>
        )}
        <div className="proj-tags">
          {tags.map((t) => (
            <span className={`ptag${t.featured ? ' featured' : ''}`} key={t.label}>
              {t.label}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href={live} target="_blank" rel="noreferrer" className="proj-link">
            Visit Live Project
          </a>
          <a href={code} target="_blank" rel="noreferrer" className="proj-link">
            View Code
          </a>
        </div>
      </div>
      <div className="proj-right">
        <ProjectThumb image={image} alt={imageAlt} liveUrl={live} />
        <div className="proj-features">
          {features.map((f) => (
            <div className="pf" style={f.accent ? { color: '#F0B429' } : undefined} key={f.label}>
              {f.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

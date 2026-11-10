import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

/**
 * Full case-study detail view for a flagship project. Rendered via
 * React Portal so it isn't clipped by .proj-card's overflow:hidden,
 * and stacks above nav / mobile menu / back-to-top.
 * Reuses existing typographic + component patterns (sec-label,
 * timeline dots/line, skill category cards, proj-link buttons) so the
 * modal feels like part of the same site rather than a new template.
 */
export default function CaseStudyModal({ study, onClose }) {
  const closeBtnRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!study) return null

  const {
    eyebrow, title, subtitle, problem, approach,
    pipeline, stack, whyItMatters, live, code,
  } = study

  return createPortal(
    <div
      className="cs-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="cs-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cs-title"
      >
        <button
          type="button"
          className="cs-close"
          onClick={onClose}
          aria-label="Close case study"
          ref={closeBtnRef}
        >
          ✕
        </button>

        <div className="sec-label">{eyebrow}</div>
        <h2 className="cs-title" id="cs-title">{title}</h2>
        <p className="cs-subtitle">{subtitle}</p>

        <div className="cs-section-label">Problem</div>
        <p className="cs-p">{problem}</p>

        <div className="cs-section-label">Approach</div>
        <p className="cs-p">{approach}</p>

        <div className="cs-section-label">Technical Pipeline</div>
        <div className="tl-track cs-pipeline">
          <div className="tl-line">
            <div className="tl-line-fill" style={{ height: '100%' }}></div>
          </div>
          {pipeline.map((step) => (
            <div className="tl-item" key={step.title}>
              <div className="tl-dot"></div>
              <div className="tl-year">{step.stage}</div>
              <div className="tl-title">{step.title}</div>
              <p className="tl-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="cs-section-label">Tech Stack</div>
        <div className="skills-grid cs-stack-grid">
          {stack.map((cat) => (
            <div className="skill-cat" key={cat.title}>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-items">
                {cat.items.map((item) => (
                  <span className="skill-item" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cs-section-label">Why It Matters</div>
        <p className="cs-p">{whyItMatters}</p>

        <div className="cs-buttons">
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="proj-link">
              View Live Project
            </a>
          )}
          {code && (
            <a href={code} target="_blank" rel="noopener noreferrer" className="proj-link">
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

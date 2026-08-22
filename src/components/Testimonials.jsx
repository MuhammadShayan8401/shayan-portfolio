import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section id="recommendations">
      <div className="rec-inner">
        <div className="sec-label reveal">Recommendations</div>

        {testimonials.length > 0 ? (
          <div className="rec-grid reveal rd1">
            {testimonials.map((t) => (
              <div className="rec-card" key={t.name}>
                <span className="rec-quote-mark" aria-hidden="true">❝</span>
                <p className="rec-quote">{t.quote}</p>
                <div className="rec-name">{t.name}</div>
                <div className="rec-role">{t.role}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rec-placeholder reveal rd1">
            <span className="rec-quote-mark" aria-hidden="true">❝</span>
            <div className="rec-placeholder-title">Recommendations coming soon</div>
            <p className="rec-placeholder-text">
              Notes from mentors and collaborators will appear here as they come in.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

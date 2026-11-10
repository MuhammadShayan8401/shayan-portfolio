const ITEMS = [
  'Machine Learning',
  'Computer Vision',
  'Generative AI',
  'Healthcare AI',
  'Predictive Modelling',
  'Model Deployment',
  'Deep Learning',
  'MLOps',
]

export default function Marquee() {
  // Duplicate the list once so the CSS scroll animation loops seamlessly
  const looped = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-section">
      <div className="mq-track">
        {looped.map((item, i) => (
          <span className="mq-item" key={i}>
            {item} <span className="mq-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

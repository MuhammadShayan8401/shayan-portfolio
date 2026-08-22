import { useEffect, useRef } from 'react'

const ITEMS = [
  {
    year: '2023 · Foundation',
    title: 'Programming Foundations',
    desc: 'Enrolled in BS Software Engineering at SSUET. Discovered a deep fascination with AI and data — beginning the journey from fundamentals toward intelligent systems.',
  },
  {
    year: '2024 · Data',
    title: 'AI & Machine Learning',
    desc: 'Built strong ML and analytics foundations. Developed first predictive models, BI dashboards, and began exploring deep learning architectures.',
  },
  {
    year: '2025 · Build',
    title: 'Production AI Platforms',
    desc: 'Launched Aeterna — a production AI interior design platform. Built healthcare AI systems: pneumonia detection and disease outbreak prediction.',
  },
  {
    year: 'Jun 2026 · Present',
    title: 'ML Engineering Intern, FlyRank AI',
    desc: 'Defining end-to-end ML problem statements, running exploratory data analysis, and documenting ML workflows and experimentation plans with mentors — remote.',
  },
  {
    year: 'Jul 2027 · Goal',
    title: 'Research to Industry, Full-Time',
    desc: 'Graduating BS Software Engineering and moving into a full-time ML Engineering role — bridging research and production to build scalable AI solutions at industry scale.',
    future: true,
  },
]

export default function Timeline() {
  const trackRef = useRef(null)
  const fillRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const fill = fillRef.current
    if (!track || !fill) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (prefersReducedMotion) {
              fill.style.height = '100%'
              io.unobserve(entry.target)
              return
            }
            let h = 0
            const anim = () => {
              h = Math.min(h + 1, 100)
              fill.style.height = h + '%'
              if (h < 100) requestAnimationFrame(anim)
            }
            requestAnimationFrame(anim)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    io.observe(track)
    return () => io.disconnect()
  }, [])

  return (
    <section id="timeline">
      <div className="timeline-inner">
        <div>
          <div className="sec-label reveal">Journey</div>
          <h2 className="sec-h reveal rd1">
            The path
            <br />
            so <em>far</em>
          </h2>
          <p
            className="reveal rd2"
            style={{
              fontSize: 15,
              color: 'rgba(var(--fg-rgb),.55)',
              fontWeight: 300,
              lineHeight: 1.78,
              maxWidth: 280,
            }}
          >
            A continuous journey of learning, building, and shipping intelligent systems.
          </p>
        </div>

        <div className="tl-track reveal rd2" ref={trackRef}>
          <div className="tl-line">
            <div className="tl-line-fill" ref={fillRef}></div>
          </div>

          {ITEMS.map((item) => (
            <div className="tl-item" key={item.title}>
              <div className="tl-dot" style={item.future ? { borderColor: '#F0B429' } : undefined}></div>
              <div className="tl-year" style={item.future ? { color: 'rgba(var(--fg-rgb),.4)' } : undefined}>
                {item.year}
              </div>
              <div className="tl-title">{item.title}</div>
              <p className="tl-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

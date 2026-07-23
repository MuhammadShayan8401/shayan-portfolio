import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [linkHover, setLinkHover] = useState(false)

  return (
    <section id="projects">
      <div className="section-header reveal">
        <div>
          <div className="sec-label">Selected Work</div>
          <h2 className="sec-h" style={{ marginBottom: 0 }}>
            Projects that push <em>boundaries</em>
          </h2>
        </div>
        <a
          href="https://github.com/MuhammadShayan8401"
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: 12.5,
            fontFamily: "'Space Mono',monospace",
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            color: linkHover ? '#F0B429' : 'rgba(var(--fg-rgb),.5)',
            borderBottom: `1px solid ${linkHover ? 'rgba(240,180,41,.35)' : 'rgba(var(--fg-rgb),.25)'}`,
            paddingBottom: 2,
            transition: 'color .2s',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            alignSelf: 'flex-end',
          }}
          onMouseEnter={() => setLinkHover(true)}
          onMouseLeave={() => setLinkHover(false)}
        >
          View all on GitHub →
        </a>
      </div>

      <div className="proj-grid">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.id} />
        ))}
      </div>
    </section>
  )
}

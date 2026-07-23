import { useState } from 'react'
import profileImg from '../assets/profile.jpeg'

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  const smoothScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero">
      <div className="hero-grid">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-tag" style={{ opacity: 0, animation: 'fadeUp .7s .2s forwards' }}>
            <span className="hero-tag-dot"></span>
            AI Engineer · Karachi, Pakistan
          </div>

          <h1 className="hero-h1" style={{ opacity: 0, animation: 'fadeUp .8s .35s forwards' }}>
            Building <em>intelligence</em>
            <br />
            that creates
            <br />
            real impact.
          </h1>

          <p className="hero-lead" style={{ opacity: 0, animation: 'fadeUp .8s .5s forwards' }}>
            I work at the intersection of <strong>AI, machine learning, and data</strong> — turning
            complex research into production-ready intelligent systems.
          </p>

          <p className="hero-sub" style={{ opacity: 0, animation: 'fadeUp .8s .6s forwards' }}>
            From computer vision pipelines to generative AI platforms, my work focuses on one
            thing: making intelligent systems that actually work in the real world.
          </p>

          <div className="hero-btns" style={{ opacity: 0, animation: 'fadeUp .8s .72s forwards' }}>
            <a href="#projects" className="btn-dark" onClick={(e) => smoothScroll(e, '#projects')}>
              View My Work →
            </a>
            <a href="#about" className="btn-ghost" onClick={(e) => smoothScroll(e, '#about')}>
              My Approach
            </a>
            <a
              href="https://linkedin.com/in/muhammad-shayan-ahmed-05b847281"
              target="_blank"
              rel="noreferrer"
              className="btn-linkedin"
            >
              Connect on LinkedIn
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <div className="hero-stats" style={{ opacity: 0, animation: 'fadeUp .8s .88s forwards' }}>
            <div className="stat">
              <span className="stat-n">3</span>
              <span className="stat-l">Featured Projects</span>
            </div>
            <div className="stat">
              <span className="stat-n">6</span>
              <span className="stat-l">Models Deployed</span>
            </div>
            <div className="stat">
              <span className="stat-n">3+</span>
              <span className="stat-l">Years Building</span>
            </div>
          </div>
        </div>

        {/* RIGHT — PHOTO */}
        <div className="hero-right" style={{ opacity: 0, animation: 'fadeUp 1s .45s forwards' }}>
          <div className="photo-frame">
            <div className="hello-tag">
              <span className="hello-emoji">👋</span>
              <span className="hello-text">I am Muhammad Shayan</span>
            </div>

            {!photoFailed && (
              <img
                src={profileImg}
                alt="Muhammad Shayan Ahmed"
                className="photo-img"
                onError={() => setPhotoFailed(true)}
              />
            )}

            {photoFailed && (
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  aspectRatio: '4/5',
                  background: 'linear-gradient(160deg,#e8e0d4,#d4cdc4)',
                  borderRadius: 4,
                  border: '6px solid #fff',
                  boxShadow: '0 4px 12px rgba(26,22,18,.08),0 20px 48px rgba(26,22,18,.12)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Instrument Serif',serif",
                    fontSize: 64,
                    fontStyle: 'italic',
                    color: 'rgba(26,22,18,.2)',
                  }}
                >
                  MS
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono',monospace",
                    fontSize: 10,
                    letterSpacing: '.14em',
                    color: 'rgba(26,22,18,.3)',
                    textTransform: 'uppercase',
                  }}
                >
                  Photo Placeholder
                </div>
              </div>
            )}

            <div className="tech-badge">
              <div className="tb-label">Flagship Project</div>
              <div className="tb-value">Aeterna AI ✦</div>
            </div>

            <div className="dot-accent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

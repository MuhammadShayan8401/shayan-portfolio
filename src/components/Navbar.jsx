import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#timeline', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const navRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')

  // Scrolled background state
  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 48)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for whichever section is currently in view
  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!sections.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Lock body scroll while the mobile menu is open; close on Escape
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav id="navbar" ref={navRef}>
      <div className="nav-logo">MSA.</div>

      <ul className="nav-links">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={activeHref === l.href ? 'active' : ''}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-cta-group">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <a
          href="/Muhammad-Shayan-Ahmed-Resume.pdf"
          download="Muhammad-Shayan-Ahmed-Resume.pdf"
          className="nav-cv"
        >
          Download CV
        </a>
        <a href="mailto:m.shayan.8401@gmail.com" className="nav-cta">
          Get In Touch
        </a>
      </div>

      <div className="nav-mobile-actions">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <button
          className={`nav-burger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={closeMenu} className={activeHref === l.href ? 'active' : ''}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-ctas">
          <a
            href="/Muhammad-Shayan-Ahmed-Resume.pdf"
            download="Muhammad-Shayan-Ahmed-Resume.pdf"
            className="nav-cv"
            onClick={closeMenu}
          >
            Download CV
          </a>
          <a href="mailto:m.shayan.8401@gmail.com" className="nav-cta" onClick={closeMenu}>
            Get In Touch
          </a>
        </div>
      </div>

      {menuOpen && <div className="mobile-menu-backdrop" onClick={closeMenu}></div>}
    </nav>
  )
}

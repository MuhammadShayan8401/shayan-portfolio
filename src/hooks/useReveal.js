import { useEffect } from 'react'

/**
 * Observes every element with class="reveal" inside the document and
 * adds the "show" class once it scrolls into view — mirrors the
 * original vanilla-JS IntersectionObserver reveal behaviour.
 * Re-runs whenever `deps` changes (e.g. after content mounts).
 */
export default function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.show)')
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -44px 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

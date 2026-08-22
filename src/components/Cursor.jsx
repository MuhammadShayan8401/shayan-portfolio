import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const $c = dotRef.current
    const $r = ringRef.current
    if (!$c || !$r) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      $c.style.left = mx + 'px'
      $c.style.top = my + 'px'
    }

    const loop = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      $r.style.left = rx + 'px'
      $r.style.top = ry + 'px'
      raf = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cur" ref={dotRef}></div>
      <div id="cur-ring" ref={ringRef}></div>
    </>
  )
}

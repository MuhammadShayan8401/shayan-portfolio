// Swaps the tab icon to match the site's light/dark theme toggle.
// Light site -> dark tile, dark site -> cream tile (inverted, like the nav chips).
const INK = '#1A1612'
const PAPER = '#F5F0E8'
const GOLD = '#F0B429'

function svgFor(theme) {
  const tile = theme === 'dark' ? PAPER : INK
  const letter = theme === 'dark' ? INK : PAPER
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
    `<rect width="64" height="64" rx="14" fill="${tile}"/>` +
    `<text x="32" y="40" text-anchor="middle" font-family="'Instrument Serif',Georgia,'Times New Roman',serif" font-size="34" fill="${letter}">M</text>` +
    `<rect x="24" y="46" width="16" height="3" rx="1.5" fill="${GOLD}"/>` +
    `</svg>`
  )
}

export function setFavicon(theme) {
  const link = document.getElementById('favicon')
  if (!link) return
  link.href = 'data:image/svg+xml,' + encodeURIComponent(svgFor(theme))
}

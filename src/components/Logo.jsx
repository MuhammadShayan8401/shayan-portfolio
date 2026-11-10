// Minimal wordmark: MSA + gold rule (+ optional full name).
// Colours follow the theme variables, so it switches with light/dark.
export default function Logo({ variant = 'nav' }) {
  const full = variant === 'full'
  return (
    <div className={`logo logo-${variant}`} aria-label="Muhammad Shayan Ahmed">
      <span className="logo-msa">MSA</span>
      <span className="logo-rule" />
      {full && <span className="logo-name">Muhammad Shayan Ahmed</span>}
    </div>
  )
}

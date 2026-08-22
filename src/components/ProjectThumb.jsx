/**
 * ProjectThumb
 * Clickable screenshot thumbnail with hover overlay.
 * Accepts an optional `aspectRatio` prop so each project
 * can declare its own image dimensions without CSS overrides.
 * Default: '16/10' (matches existing three projects).
 * FlyRank: '1324/628' (~16:7 landscape).
 */
export default function ProjectThumb({
  image,
  alt,
  liveUrl,
  aspectRatio = '16/10',
}) {
  const open = () => {
    if (liveUrl) window.open(liveUrl, '_blank', 'noopener,noreferrer')
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      open()
    }
  }

  return (
    <div
      className="proj-thumb"
      role="button"
      tabIndex={0}
      aria-label={`Open live project: ${alt}`}
      onClick={open}
      onKeyDown={onKeyDown}
      style={{ cursor: liveUrl ? 'pointer' : 'default' }}
    >
      <img
        src={image}
        alt={alt}
        style={{ aspectRatio }}
        loading="lazy"
        decoding="async"
      />
      <div className="thumb-overlay">
        <span className="thumb-overlay-label">Click to view live</span>
        <span className="thumb-overlay-icon" aria-hidden="true">↗</span>
      </div>
    </div>
  )
}

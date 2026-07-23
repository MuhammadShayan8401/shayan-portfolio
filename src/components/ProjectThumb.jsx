export default function ProjectThumb({ image, alt, liveUrl }) {
  const open = () => window.open(liveUrl, '_blank', 'noopener,noreferrer')

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
    >
      <img src={image} alt={alt} />
      <div className="thumb-overlay">
        <span className="thumb-overlay-label">Click to view live</span>
        <span className="thumb-overlay-icon" aria-hidden="true">
          ↗
        </span>
      </div>
    </div>
  )
}

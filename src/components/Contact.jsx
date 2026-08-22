import { useRef, useState } from 'react'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/m.shayan.8401@gmail.com'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ text: '', color: 'rgba(var(--fg-rgb),.5)' })
  const [btnState, setBtnState] = useState('idle') // idle | sending | sent
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    const honey = form._honey.value

    // Bot trap: if the hidden honeypot field has a value, a scraper filled it.
    // Silently pretend success without ever hitting the network.
    if (honey) {
      setBtnState('sent')
      setStatus({ text: "Thanks — I'll get back to you soon.", color: '#6FCF97' })
      form.reset()
      setTimeout(() => setBtnState('idle'), 4000)
      return
    }

    if (!name || !email || !message) {
      setStatus({ text: 'Please fill in your name, email, and message.', color: '#E5776A' })
      return
    }

    setDisabled(true)
    setBtnState('sending')
    setStatus({ text: '', color: 'rgba(var(--fg-rgb),.5)' })

    const payload = {
      name,
      email,
      inquiry_type: form.inquiry_type.value || 'Not specified',
      message,
      _subject: `New portfolio inquiry from ${name}`,
      _template: 'table',
      _captcha: 'false',
      _honey: honey,
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setBtnState('sent')
        setStatus({ text: "Thanks — I'll get back to you soon.", color: '#6FCF97' })
        form.reset()
      } else {
        throw new Error('Request failed')
      }
    } catch {
      setBtnState('idle')
      setStatus({
        text: "Couldn't send right now — please email me directly at m.shayan.8401@gmail.com.",
        color: '#E5776A',
      })
    } finally {
      setDisabled(false)
      setTimeout(() => setBtnState('idle'), 4000)
    }
  }

  const btnLabel = btnState === 'sending' ? 'Sending…' : btnState === 'sent' ? 'Message Sent ✓' : 'Send Message →'
  const btnStyle = btnState === 'sent' ? { background: '#6FCF97' } : undefined

  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="sec-label reveal">Contact</div>
        <h2 className="contact-hl reveal rd1">
          Let's build
          <br />
          something <em>intelligent</em>
          <br />
          together.
        </h2>

        <div className="contact-grid">
          <div className="reveal">
            <div className="ci">
              <span className="ci-label">Email</span>
              <span className="ci-val">
                <a href="mailto:m.shayan.8401@gmail.com">m.shayan.8401@gmail.com</a>
              </span>
            </div>
            <div className="ci">
              <span className="ci-label">LinkedIn</span>
              <span className="ci-val">
                <a
                  href="https://linkedin.com/in/muhammad-shayan-ahmed-05b847281"
                  target="_blank"
                  rel="noreferrer"
                >
                  muhammad-shayan-ahmed
                </a>
              </span>
            </div>
            <div className="ci">
              <span className="ci-label">GitHub</span>
              <span className="ci-val">
                <a href="https://github.com/MuhammadShayan8401" target="_blank" rel="noreferrer">
                  MuhammadShayan8401
                </a>
              </span>
            </div>
            <div className="ci">
              <span className="ci-label">Instagram</span>
              <span className="ci-val">
                <a href="https://instagram.com/shayan_isalive" target="_blank" rel="noreferrer">
                  @shayan_isalive
                </a>
              </span>
            </div>
            <div className="ci">
              <span className="ci-label">Location</span>
              <span className="ci-val">Karachi, Pakistan</span>
            </div>
            <div className="ci">
              <span className="ci-label">Status</span>
              <span className="ci-val" style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    background: '#F0B429',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'blink 2.5s infinite',
                    flexShrink: 0,
                  }}
                ></span>
                Available for opportunities
              </span>
            </div>
          </div>

          <div className="reveal rd2">
            <form className="cform" ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                name="_honey"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="cf-field">
                <label className="cf-label">Full Name</label>
                <input className="cf-input" type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="cf-field">
                <label className="cf-label">Email Address</label>
                <input className="cf-input" type="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="cf-field">
                <label className="cf-label">What are you reaching out about?</label>
                <select className="cf-input" name="inquiry_type" style={{ WebkitAppearance: 'none', cursor: 'pointer' }}>
                  <option value="">Select one...</option>
                  <option>Full-Time ML Engineering Role</option>
                  <option>Internship Opportunity</option>
                  <option>Collaboration / Project</option>
                  <option>Just Saying Hi</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="cf-field">
                <label className="cf-label">Message</label>
                <textarea
                  className="cf-input"
                  rows="4"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <div style={{ fontSize: 12.5, color: status.color, minHeight: 16, marginBottom: 4 }}>
                {status.text}
              </div>
              <button className="cf-submit" type="submit" disabled={disabled} style={btnStyle}>
                {btnLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

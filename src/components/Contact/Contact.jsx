import { useEffect, useRef, useState } from 'react'
import './Contact.css'

export default function Contact() {
  const ref  = useRef(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.target.reset()
  }

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <div className="contact__island reveal">
          {/* Ambient orb */}
          <div className="contact__orb" aria-hidden="true" />
          <div className="contact__orb contact__orb--2" aria-hidden="true" />

          <div className="contact__inner">
            {/* Left */}
            <div className="contact__left">
              <span className="eyebrow">// let's.connect</span>
              <h2 className="contact__title">
                Let's Build<br />
                Reliable Backend<br />
                Systems.
              </h2>
              <p className="contact__sub">
                Open to backend developer roles and internships
                focused on Node.js and server-side development.
              </p>

              <div className="contact__links">
                <a href="mailto:jeevasri970@gmail.com" className="clink" id="email-link" aria-label="Send email">
                  <span className="clink__icon" aria-hidden="true">✉</span>
                  jeevasri970@gmail.com
                </a>
                <a href="https://github.com/jeevithdev" target="_blank" rel="noopener noreferrer" className="clink" id="github-link" aria-label="GitHub profile">
                  <span className="clink__icon mono" aria-hidden="true">GH</span>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/jeevithdev" target="_blank" rel="noopener noreferrer" className="clink" id="linkedin-link" aria-label="LinkedIn profile">
                  <span className="clink__icon mono" aria-hidden="true">in</span>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="contact__right">
              {sent ? (
                <div className="contact__sent" role="status" aria-live="polite">
                  <div className="sent-icon" aria-hidden="true">✓</div>
                  <p>Message sent! I'll get back to you soon.</p>
                </div>
              ) : (
                <form className="cform" onSubmit={handleSubmit} noValidate>
                  <div className="cform__group">
                    <label htmlFor="cf-name">Name</label>
                    <input id="cf-name" type="text" name="name" placeholder="Your name" required autoComplete="name" />
                  </div>
                  <div className="cform__group">
                    <label htmlFor="cf-email">Email</label>
                    <input id="cf-email" type="email" name="email" placeholder="your@email.com" required autoComplete="email" />
                  </div>
                  <div className="cform__group">
                    <label htmlFor="cf-msg">Message</label>
                    <textarea id="cf-msg" name="message" rows={4} placeholder="Tell me about the role or project…" required />
                  </div>
                  <button type="submit" className="btn btn-fill-light btn-full" id="contact-submit">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

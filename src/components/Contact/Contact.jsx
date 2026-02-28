import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiCheck, FiArrowRight } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.target.reset()
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="contact__island"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
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
                  <span className="clink__icon" aria-hidden="true"><FiMail /></span>
                  jeevasri970@gmail.com
                </a>
                <a href="https://github.com/jeevithdev" target="_blank" rel="noopener noreferrer" className="clink" id="github-link" aria-label="GitHub profile">
                  <span className="clink__icon" aria-hidden="true"><FiGithub /></span>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/jeevithdev" target="_blank" rel="noopener noreferrer" className="clink" id="linkedin-link" aria-label="LinkedIn profile">
                  <span className="clink__icon" aria-hidden="true"><FiLinkedin /></span>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="contact__right">
              {sent ? (
                <motion.div
                  className="contact__sent"
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="sent-icon" aria-hidden="true"><FiCheck /></div>
                  <p>Message sent! I'll get back to you soon.</p>
                </motion.div>
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
                    Send Message <FiArrowRight style={{ marginLeft: '6px' }} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

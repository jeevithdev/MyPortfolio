import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__bg" aria-hidden="true">BACKEND FOCUS</div>
      <div className="container about__layout">
        <motion.div
          className="about__left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">// about.me</span>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
            Backend development is<br />
            where <span className="text-accent">logic</span> meets<br />
            responsibility.
          </h2>
        </motion.div>
        
        <motion.div
          className="about__right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass about__card rotate-pos">
            <p>
              I'm <strong>Jeevith K</strong>, a backend developer focused on building
              clean, maintainable server-side applications with Node.js and Express.js.
            </p>
            <p>
              I'm drawn to problems that require thought on structure — how to organise
              routes so they scale, how to handle errors so the system doesn't silently
              break, and how to write code that a teammate can understand without a walkthrough.
            </p>
            <p>
              I'm currently improving in system design fundamentals,
              DSA, and backend architecture patterns. Every project I build is an opportunity
              to practise structuring server-side logic in a cleaner, more intentional way.
            </p>
            <div className="about__pills">
              {['Clean Architecture', 'Modular Routing', 'API Design', 'Problem Solving'].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

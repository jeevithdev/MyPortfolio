import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="container footer__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="footer__brand">
          <img src="/jk-favicon.svg" alt="JK" className="footer__logo" draggable="false" />
          <span className="footer__name">Jeevith K</span>
        </div>

        <p className="footer__copy mono">Backend Developer · Built with React & Vite</p>

        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="https://github.com/jeevithdev"     target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/jeevithdev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:jeevasri970@gmail.com">Email</a>
        </nav>
      </motion.div>
    </footer>
  )
}

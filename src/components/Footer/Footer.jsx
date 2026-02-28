import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">JK</div>
          <span className="footer__name">Jeevith K</span>
        </div>

        <p className="footer__copy mono">Backend Developer · Built with React & Vite</p>

        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="https://github.com/jeevithdev"     target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/jeevithdev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:jeevasri970@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  )
}

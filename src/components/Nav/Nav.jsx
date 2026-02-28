import { useEffect, useState } from 'react'
import './Nav.css'

const LINKS = [
  { href: '#skills',   label: 'Tech Stack'  },
  { href: '#projects', label: 'Projects'   },
  { href: '#about',    label: 'About'      },
  { href: '#contact',  label: 'Contact',   cta: true },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav-wrap${scrolled ? ' nav-wrap--scrolled' : ''}`}>
      <nav className="nav glass">
        {/* Logo */}
        <a href="#" className="nav__logo" onClick={() => setOpen(false)}>
          <img src="/jk-favicon.svg" alt="JK" className="nav__logo-box" draggable="false" />
          <span className="nav__logo-label">Jeevith K</span>
        </a>

        {/* Desktop links */}
        <div className="nav__links">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className={`nav__link${l.cta ? ' nav__link--cta' : ''}`}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className={`nav__burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav__drawer${open ? ' nav__drawer--open' : ''}`} aria-hidden={!open}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href} className="nav__drawer-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}

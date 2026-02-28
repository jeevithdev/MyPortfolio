import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const raf = requestAnimationFrame(() =>
      ref.current?.classList.add('hero--loaded')
    )
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="hero" id="home" aria-label="Introduction">

      {/* ── Decorative blobs: absolute, purely visual, z-index 0 ── */}
      <div className="hero__blob hero__blob--a" aria-hidden="true" />
      <div className="hero__blob hero__blob--b" aria-hidden="true" />

      {/* ── Faded watermark: absolute, bottom-left, z-index 0 ── */}
      <div className="hero__watermark" aria-hidden="true">BACKEND</div>

      {/* ── Main content: constrained to layout-max, z-index 1 ── */}
      <div className="container hero__inner" ref={ref}>

        {/* ────────── LEFT COLUMN ────────── */}
        <div className="hero__left">

          {/* Badge — inline-block, auto width, never stretched */}
          <span className="hero__badge" role="text">
            Backend Developer · Node.js &amp; Express.js
          </span>

          {/* Headline */}
          <h1 className="hero__h1">
            Backend<br />
            Systems<br />
            <span className="hero__h1-em">Developer.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero__sub">
            Building structured and maintainable REST APIs
            using Node.js and Express.js.
          </p>

          {/* Description */}
          <p className="hero__desc">
            Backend-focused developer passionate about modular
            architecture, clean routing, and scalable server-side logic.
          </p>

          {/* CTAs */}
          <div className="hero__ctas">
            <a href="#projects" className="btn btn-fill">View Projects</a>
            <a href="#contact"  className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        {/* ────────── RIGHT COLUMN ────────── */}
        <div className="hero__right">

          {/* ── Image frame wrapper ── */}
          <div className="himg__wrapper" aria-label="Profile image">

            {/* Accent corner blob */}
            <div className="himg__corner-blob" aria-hidden="true" />

            {/* Profile photo */}
            <div className="himg__frame">
              <img
                src="/profile.jpeg"
                alt="Jeevith K — Backend Developer"
                className="himg__photo"
                draggable="false"
              />

              {/* Open-to-work overlay badge */}
              <span className="himg__status-badge">
                <span className="himg__status-dot" aria-hidden="true" />
                Open to Work
              </span>
            </div>

            {/* ── Floating icon badges ── */}

            {/* Node.js — top-left */}
            <div className="hbadge hbadge--tl" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hbadge__icon">
                <path d="M16 2L3 9v14l13 7 13-7V9L16 2z" fill="#339933" opacity=".15"/>
                <path d="M16 4.5L5 10.8v10.4L16 27.5l11-6.3V10.8L16 4.5z" fill="#339933" opacity=".6"/>
                <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="800" fill="#339933" fontFamily="monospace">JS</text>
              </svg>
              <span className="hbadge__label">Node.js</span>
            </div>

            {/* Express.js — top-right */}
            <div className="hbadge hbadge--tr" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hbadge__icon">
                <rect x="4" y="4" width="24" height="24" rx="6" fill="#000" opacity=".08"/>
                <text x="16" y="22" textAnchor="middle" fontSize="13" fontWeight="900" fill="#333" fontFamily="monospace">Ex</text>
              </svg>
              <span className="hbadge__label">Express</span>
            </div>

            {/* MongoDB — bottom-left */}
            <div className="hbadge hbadge--bl" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hbadge__icon">
                <path d="M16 3C16 3 9 11 9 18a7 7 0 0014 0C23 11 16 3 16 3z" fill="#00ED64" opacity=".25"/>
                <path d="M16 5C16 5 11 12.5 11 18a5 5 0 0010 0C21 12.5 16 5 16 5z" fill="#00ED64" opacity=".7"/>
                <rect x="15" y="20" width="2" height="7" rx="1" fill="#00ED64"/>
              </svg>
              <span className="hbadge__label">MongoDB</span>
            </div>

            {/* REST API — bottom-right */}
            <div className="hbadge hbadge--br" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hbadge__icon">
                <rect x="3" y="10" width="26" height="12" rx="6" fill="#6366f1" opacity=".18"/>
                <text x="16" y="20.5" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#6366f1" fontFamily="monospace">REST</text>
              </svg>
              <span className="hbadge__label">REST API</span>
            </div>

          </div>
        </div>

      </div>

      {/* Scroll indicator — purely decorative */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-label">scroll</span>
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
      </div>
    </section>
  )
}

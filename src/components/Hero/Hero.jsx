import { useEffect, useRef } from 'react'
import { SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
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
              <SiNodedotjs className="hbadge__icon" style={{ color: '#339933' }} />
              <span className="hbadge__label">Node.js</span>
            </div>

            {/* Express.js — top-right */}
            <div className="hbadge hbadge--tr" aria-hidden="true">
              <SiExpress className="hbadge__icon" style={{ color: '#333' }} />
              <span className="hbadge__label">Express</span>
            </div>

            {/* MongoDB — bottom-left */}
            <div className="hbadge hbadge--bl" aria-hidden="true">
              <SiMongodb className="hbadge__icon" style={{ color: '#00ED64' }} />
              <span className="hbadge__label">MongoDB</span>
            </div>

            {/* REST API — bottom-right */}
            <div className="hbadge hbadge--br" aria-hidden="true">
              <TbApi className="hbadge__icon" style={{ color: '#6366f1' }} />
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

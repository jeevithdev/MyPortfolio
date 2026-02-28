import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="about__bg" aria-hidden="true">BACKEND FOCUS</div>
      <div className="container about__layout">
        <div className="about__left reveal">
          <span className="eyebrow">// about.me</span>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
            Backend development is<br />
            where <span className="text-accent">logic</span> meets<br />
            responsibility.
          </h2>
        </div>
        <div className="about__right reveal" style={{ '--d': '0.15s' }}>
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
        </div>
      </div>
    </section>
  )
}

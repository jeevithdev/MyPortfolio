import { useEffect, useRef } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    num: '01',
    title: 'Mess Attendance System',
    img: '/proj-attendance.png',
    tag: 'REST API',
    desc: 'Built backend APIs using Node.js and Express to manage student attendance records, structured routing, and database queries.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    focus: [
      'Designed modular route structure for attendance CRUD',
      'Implemented JWT auth middleware for protected endpoints',
      'Built Mongoose schemas for student and attendance data',
    ],
    learning: 'Understood how middleware placement order affects request flow, and learned to keep route handlers small by abstracting DB logic into service functions.',
  },
  {
    num: '02',
    title: 'Task Manager API',
    img: '/proj-taskmanager.png',
    tag: 'Backend',
    desc: 'Full backend for a task management app — modular routes, middleware validation, and CRUD with MongoDB integration.',
    stack: ['Node.js', 'Express.js', 'MongoDB'],
    focus: [
      'Structured route grouping with Express Router',
      'Centralised async error handling pattern',
      'User-scoped task queries with ownership validation',
    ],
    learning: 'Learned to use a reusable asyncHandler wrapper to eliminate try/catch boilerplate and pass errors to Express error middleware consistently.',
  },
  {
    num: '03',
    title: 'Auth Service',
    img: '/proj-auth.png',
    tag: 'Auth / JWT',
    desc: 'Standalone JWT authentication service with login, registration, bcrypt password hashing, and protected route middleware.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'bcrypt'],
    focus: [
      'JWT sign/verify lifecycle and token expiry',
      'Password hashing with bcrypt salt rounds',
      'Protect middleware for guarding private routes',
    ],
    learning: 'Gained a clear understanding of how to separate auth logic from route handlers and how stateless tokens differ from session-based auth.',
  },
  {
    num: '04',
    title: 'REST API — Product Catalogue',
    img: '/proj-catalogue.png',
    tag: 'API Design',
    desc: 'Backend API for a product catalogue with filtering, sorting, pagination, and structured controller/service separation.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    focus: [
      'Reusable APIFeatures class for query building',
      'Controller/service/model separation (MVC)',
      'Global error handler with custom AppError class',
    ],
    learning: 'Practised building a reusable query class to keep controller code clean, and understood how centralised error handling makes debugging easier at scale.',
  },
]

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <div className="proj__hdr reveal">
          <span className="eyebrow">// projects.built</span>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
            Systems Built<br />
            <span className="text-accent">for Practice.</span>
          </h2>
          <p className="proj__hdr-sub">
            Detailed Engineering Portfolio · Placement 2024
          </p>
        </div>

        {/* Projects — alternating layout */}
        <div className="proj__list">
          {PROJECTS.map((p, i) => (
            <div
              key={p.num}
              className={`proj-row reveal${i % 2 === 1 ? ' proj-row--rev' : ''}`}
              style={{ '--d': `${i * 0.08}s` }}
            >
              {/* ── Left: image panel ── */}
              <div className="proj-img-wrap">
                <img
                  src={p.img}
                  alt={p.title}
                  className="proj-img"
                  loading="lazy"
                  draggable="false"
                />
                <div className="proj-img__overlay" />
                <span className="proj-img__tag">{p.tag}</span>
              </div>

              {/* ── Right: info panel ── */}
              <div className="glass proj-info">
                <div className="proj-info__top">
                  <span className="mono proj-num">{p.num}</span>
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>
                </div>

                <div className="proj-section">
                  <span className="proj-label mono">Tech Stack</span>
                  <div className="proj-chips">
                    {p.stack.map(s => <span key={s} className="floating-pill">{s}</span>)}
                  </div>
                </div>

                <div className="proj-section">
                  <span className="proj-label mono">Backend Focus</span>
                  <ul className="proj-focus">
                    {p.focus.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>

                <div className="proj-section proj-learning">
                  <span className="proj-label mono">Key Learning</span>
                  <p className="proj-learning-text">{p.learning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

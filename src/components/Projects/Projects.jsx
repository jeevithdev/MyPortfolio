import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens, SiMongoose } from 'react-icons/si'
import { FaUserShield } from 'react-icons/fa'
import './Projects.css'

const PROJECTS = [
  {
    num: '01',
    title: 'Mess Attendance System',
    img: '/proj-attendance.png',
    tag: 'REST API',
    desc: 'Built backend APIs using Node.js and Express to manage student attendance records, structured routing, and database queries.',
    stack: [
      { label: 'Node.js',   icon: <SiNodedotjs /> },
      { label: 'Express.js',icon: <SiExpress /> },
      { label: 'MongoDB',   icon: <SiMongodb /> },
      { label: 'JWT',       icon: <SiJsonwebtokens /> },
    ],
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
    stack: [
      { label: 'Node.js',   icon: <SiNodedotjs /> },
      { label: 'Express.js',icon: <SiExpress /> },
      { label: 'MongoDB',   icon: <SiMongodb /> },
    ],
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
    stack: [
      { label: 'Node.js',   icon: <SiNodedotjs /> },
      { label: 'Express.js',icon: <SiExpress /> },
      { label: 'MongoDB',   icon: <SiMongodb /> },
      { label: 'bcrypt',    icon: <FaUserShield /> },
    ],
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
    stack: [
      { label: 'Node.js',   icon: <SiNodedotjs /> },
      { label: 'Express.js',icon: <SiExpress /> },
      { label: 'MongoDB',   icon: <SiMongodb /> },
      { label: 'Mongoose',  icon: <SiMongoose /> },
    ],
    focus: [
      'Reusable APIFeatures class for query building',
      'Controller/service/model separation (MVC)',
      'Global error handler with custom AppError class',
    ],
    learning: 'Practised building a reusable query class to keep controller code clean, and understood how centralised error handling makes debugging easier at scale.',
  },
]

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="proj__hdr"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">// projects.built</span>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
            Systems Built<br />
            <span className="text-accent">for Practice.</span>
          </h2>
          <p className="proj__hdr-sub">
            Detailed Engineering Portfolio · Placement 2024
          </p>
        </motion.div>

        {/* Projects — alternating layout */}
        <div className="proj__list">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`proj-row${i % 2 === 1 ? ' proj-row--rev' : ''}`}
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
                    {p.stack.map(s => (
                      <span key={s.label} className="floating-pill floating-pill--icon">
                        <span className="floating-pill__icon">{s.icon}</span>
                        {s.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="proj-section">
                  <span className="proj-label mono">Backend Focus</span>
                  <ul className="proj-focus">
                    {p.focus.map(f => (
                      <li key={f}>
                        <FiArrowRight className="proj-focus__icon" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="proj-section proj-learning">
                  <span className="proj-label mono">Key Learning</span>
                  <p className="proj-learning-text">{p.learning}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


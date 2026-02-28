import { useEffect, useRef } from 'react'
import {
  SiNodedotjs, SiExpress, SiJavascript, SiMongodb,
  SiMysql, SiGit, SiPostman, SiGithub,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { MdOutlineRouter } from 'react-icons/md'
import './Skills.css'

import { LuServer, LuDatabase, LuCode } from 'react-icons/lu'

/* ── Groups for floating cards ─────────────────────────── */
const GROUPS = [
  {
    icon: <LuServer />,
    title: 'Backend Development',
    border: '#511F52',
    skills: [
      { icon: <SiNodedotjs />,    label: 'Node.js',         color: '#3d8c3d' },
      { icon: <SiExpress />,      label: 'Express.js',      color: '#511F52' },
      { icon: <TbApi />,          label: 'REST APIs',        color: '#693B69' },
      { icon: <MdOutlineRouter />,label: 'Middleware',       color: '#A987A8' },
      { icon: <SiJavascript />,   label: 'Routing',          color: '#b38d00' },
    ],
  },
  {
    icon: <LuDatabase />,
    title: 'Data & Storage',
    border: '#511F52',
    skills: [
      { icon: <SiMongodb />,      label: 'MongoDB',         color: '#26a65b' },
      { icon: <SiMysql />,        label: 'SQL Basics',      color: '#2563eb' },
      { icon: <SiJavascript />,   label: 'CRUD Operations', color: '#b38d00' },
      { icon: <SiMongodb />,      label: 'Schema Design',   color: '#3d7a5c' },
    ],
  },
  {
    icon: <LuCode />,
    title: 'Engineering Foundations',
    border: '#511F52',
    skills: [
      { icon: <SiJavascript />,   label: 'JavaScript ES6+', color: '#b38d00' },
      { icon: <SiGit />,          label: 'Git',             color: '#c2410c' },
      { icon: <SiGithub />,       label: 'GitHub',          color: '#333'    },
      { icon: <SiPostman />,      label: 'Postman',         color: '#b45309' },
    ],
  },
]

/* ── Stack icon row ────────────────────────────────────── */
const STACK = [
  { icon: <SiNodedotjs />,   label: 'Node.js',    color: '#3d8c3d' },
  { icon: <SiExpress />,     label: 'Express',    color: '#511F52' },
  { icon: <SiJavascript />,  label: 'JavaScript', color: '#b38d00' },
  { icon: <SiMongodb />,     label: 'MongoDB',    color: '#26a65b' },
  { icon: <SiMysql />,       label: 'SQL',        color: '#2563eb' },
  { icon: <SiGit />,         label: 'Git',        color: '#c2410c' },
  { icon: <SiPostman />,     label: 'Postman',    color: '#b45309' },
  { icon: <SiGithub />,      label: 'GitHub',     color: '#333'    },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills section" id="skills" ref={ref}>
      {/* Faded background word */}
      <div className="skills__bg-word" aria-hidden="true">ARCHITECTURE</div>

      <div className="container">
        {/* Header */}
        <div className="skills__header reveal">
          <span className="eyebrow">// tech.stack</span>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
            Tech Stack
          </h2>
          <p className="skills__sub">
            Categorised competencies across backend development
          </p>
        </div>

        {/* Floating grouped cards */}
        <div className="skills__cards">
          {GROUPS.map((g, gi) => (
            <div
              key={g.title}
              className="sg glass reveal"
              style={{
                '--d': `${gi * 0.1}s`,
                '--border-col': g.border,
              }}
            >
              <div className="sg__head">
                <div className="sg__icon-box" style={{ background: g.border }}>
                  {g.icon}
                </div>
                <h3 className="sg__title">{g.title}</h3>
              </div>

              <div className="sg__skills">
                {g.skills.map(s => (
                  <div key={s.label} className="sk-pill">
                    <span className="sk-pill__icon" style={{ color: s.color }}>
                      {s.icon}
                    </span>
                    <span className="sk-pill__label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stack icon row */}
        <div className="stack-row reveal" style={{ '--d': '0.25s' }}>
          {STACK.map(s => (
            <div key={s.label} className="stack-item">
              <div className="stack-icon" style={{ color: s.color, borderColor: s.color + '44', background: s.color + '14' }}>
                {s.icon}
              </div>
              <span className="stack-item__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

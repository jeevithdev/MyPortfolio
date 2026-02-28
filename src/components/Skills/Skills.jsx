import { motion } from 'framer-motion'
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="skills section" id="skills">
      {/* Faded background word */}
      <div className="skills__bg-word" aria-hidden="true">ARCHITECTURE</div>

      <div className="container">
        {/* Header */}
        <motion.div
          className="skills__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <span className="eyebrow">// tech.stack</span>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
            Tech Stack
          </h2>
          <p className="skills__sub">
            Categorised competencies across backend development
          </p>
        </motion.div>

        {/* Floating grouped cards */}
        <motion.div
          className="skills__cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {GROUPS.map((g) => (
            <motion.div
              key={g.title}
              variants={itemVariants}
              className="sg glass"
              style={{
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
            </motion.div>
          ))}
        </motion.div>

        {/* Stack icon row */}
        <motion.div
          className="stack-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {STACK.map(s => (
            <div key={s.label} className="stack-item">
              <div className="stack-icon" style={{ color: s.color, borderColor: s.color + '44', background: s.color + '14' }}>
                {s.icon}
              </div>
              <span className="stack-item__label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

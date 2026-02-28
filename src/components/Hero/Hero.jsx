import { motion } from 'framer-motion'
import { SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import './Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="hero" id="home" aria-label="Introduction">

      {/* ── Decorative blobs ── */}
      <div className="hero__blob hero__blob--a" aria-hidden="true" />
      <div className="hero__blob hero__blob--b" aria-hidden="true" />

      {/* ── Faded watermark ── */}
      <div className="hero__watermark" aria-hidden="true">BACKEND</div>

      {/* ── Main content ── */}
      <motion.div
        className="container hero__inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ────────── LEFT COLUMN ────────── */}
        <div className="hero__left">
          <motion.span variants={itemVariants} className="hero__badge" role="text">
            Backend Developer · Node.js &amp; Express.js
          </motion.span>

          <motion.h1 variants={itemVariants} className="hero__h1">
            Backend<br />
            Systems<br />
            <span className="hero__h1-em">Developer.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero__sub">
            Building structured and maintainable REST APIs
            using Node.js and Express.js.
          </motion.p>

          <motion.p variants={itemVariants} className="hero__desc">
            Backend-focused developer passionate about modular
            architecture, clean routing, and scalable server-side logic.
          </motion.p>

          <motion.div variants={itemVariants} className="hero__ctas">
            <a href="#projects" className="btn btn-fill">View Projects</a>
            <a href="#contact"  className="btn btn-outline">Contact Me</a>
          </motion.div>
        </div>

        {/* ────────── RIGHT COLUMN ────────── */}
        <motion.div variants={itemVariants} className="hero__right">
          <div className="himg__wrapper" aria-label="Profile image">
            <div className="himg__corner-blob" aria-hidden="true" />
            <div className="himg__frame">
              <img
                src="/profile.jpeg"
                alt="Jeevith K — Backend Developer"
                className="himg__photo"
                draggable="false"
              />
              <span className="himg__status-badge">
                <span className="himg__status-dot" aria-hidden="true" />
                Open to Work
              </span>
            </div>

            {/* Floating icon badges */}
            <motion.div
              className="hbadge hbadge--tl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
            >
              <SiNodedotjs className="hbadge__icon" style={{ color: '#339933' }} />
              <span className="hbadge__label">Node.js</span>
            </motion.div>

            <motion.div
              className="hbadge hbadge--tr"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5, type: 'spring' }}
            >
              <SiExpress className="hbadge__icon" style={{ color: '#333' }} />
              <span className="hbadge__label">Express</span>
            </motion.div>

            <motion.div
              className="hbadge hbadge--bl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5, type: 'spring' }}
            >
              <SiMongodb className="hbadge__icon" style={{ color: '#00ED64' }} />
              <span className="hbadge__label">MongoDB</span>
            </motion.div>

            <motion.div
              className="hbadge hbadge--br"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5, type: 'spring' }}
            >
              <TbApi className="hbadge__icon" style={{ color: '#6366f1' }} />
              <span className="hbadge__label">REST API</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        aria-hidden="true"
      >
        <span className="hero__scroll-label">scroll</span>
        <div className="hero__scroll-track">
          <motion.div
            className="hero__scroll-thumb"
            animate={{ y: [0, 24, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}


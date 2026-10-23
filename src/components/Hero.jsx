import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const orbitVariants = {
  animate: { rotate: 360, transition: { duration: 34, repeat: Infinity, ease: 'linear' } },
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="container hero-layout">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <div className="status-pill"><span className="pulse-dot" /> THE ANDROID MODDING UNIVERSE</div>
          <h1>Make Android<br />feel <span className="text-gradient">limitless.</span></h1>
          <p className="hero-description">Discover app ports, useful tools and customization resources — gathered for people who love getting more out of Android.</p>
          <div className="hero-actions">
            <Link to="/library" className="button button-primary">Explore the library <ArrowRight size={17} /></Link>
            <a href="#featured" className="button button-ghost">Discover APW <ArrowDown size={16} /></a>
          </div>
          <div className="hero-trust-row">
            <span><ShieldCheck size={15} /> Source-aware listings</span>
            <span><Sparkles size={15} /> Built for enthusiasts</span>
          </div>
        </motion.div>

        <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}>
          <motion.div className="orbit orbit-outer" variants={orbitVariants} animate="animate"><i className="orbit-node node-one" /><i className="orbit-node node-two" /></motion.div>
          <motion.div className="orbit orbit-middle" animate={{ rotate: -360 }} transition={{ duration: 27, repeat: Infinity, ease: 'linear' }}><i className="orbit-node node-three" /></motion.div>
          <div className="orbit orbit-inner" />
          <div className="hero-core">
            <div className="core-symbol"><span className="core-eye eye-left" /><span className="core-eye eye-right" /><span className="core-mouth" /></div>
            <span className="core-caption">ANDROID, REIMAGINED</span>
          </div>
          <div className="floating-chip chip-top"><span className="chip-icon">01</span><span><strong>Explore</strong><small>Ports & tools</small></span></div>
          <div className="floating-chip chip-bottom"><span className="chip-spark">✳</span><span><strong>Customize</strong><small>Your experience</small></span><ArrowUpRight size={15} className="chip-arrow" /></div>
          <div className="art-label"><span className="pulse-dot" /> YOUR NEXT ANDROID EXPERIENCE</div>
        </motion.div>
      </div>
      <div className="hero-bottom-line container"><span>DISCOVER MORE</span><div /><span>01 — 04</span></div>
    </section>
  )
}

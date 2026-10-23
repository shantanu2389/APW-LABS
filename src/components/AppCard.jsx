import { ArrowUpRight, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AppCard({ app, index = 0 }) {
  return (
    <motion.article className="app-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.42, delay: Math.min(index * 0.06, 0.24) }}>
      <div className={`app-icon app-icon-${app.accent || 'mint'}`}>
        <span>{app.shortName}</span>
        <i />
      </div>
      <div className="app-card-topline">
        <span className="category-tag">{app.categoryLabel}</span>
        {app.featured && <span className="featured-tag">FEATURED</span>}
      </div>
      <Link to={`/app/${app.slug}`} className="app-card-title-link"><h3>{app.name}<ArrowUpRight size={16} /></h3></Link>
      <p className="app-card-description">{app.description}</p>
      <div className="app-card-meta">
        <span><Smartphone size={14} /> {app.version}</span>
        <span className="meta-dot" />
        <span>{app.updated}</span>
      </div>
      <div className="app-card-footer">
        <span className="source-note"><span className="tiny-status" /> Details available</span>
        <Link to={`/app/${app.slug}`} className="card-arrow" aria-label={`View ${app.name} details`}><ArrowUpRight size={18} /></Link>
      </div>
    </motion.article>
  )
}

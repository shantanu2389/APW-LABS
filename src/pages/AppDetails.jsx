import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Download, Info, Smartphone, ShieldAlert } from 'lucide-react'
import { getAppBySlug } from '../data/apps.js'
import NotFound from './NotFound.jsx'

export default function AppDetails() {
  const { slug } = useParams()
  const app = getAppBySlug(slug)
  if (!app) return <NotFound />

  return (
    <motion.main className="inner-page details-page" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
      <div className="container details-container">
        <Link to="/library" className="back-link"><ArrowLeft size={16} /> Back to library</Link>
        <div className="details-layout">
          <div className="details-main">
            <div className="details-heading">
              <div className={`app-icon app-icon-large app-icon-${app.accent}`}><span>{app.shortName}</span><i /></div>
              <div><span className="category-tag">{app.categoryLabel}</span><h1>{app.name}</h1><p>{app.version}</p></div>
            </div>
            <p className="details-description">{app.description}</p>
            <div className="details-panel"><h2>About this listing</h2><p>{app.details}</p><p>Release details on this page are placeholders. Replace them with verified information from the original maintainer before sharing publicly.</p></div>
            <div className="details-panel"><h2>Before you install</h2>
              <ul className="check-list">
                <li><CheckCircle2 size={17} /> Confirm the source is official or trusted.</li>
                <li><CheckCircle2 size={17} /> Check device and Android-version compatibility.</li>
                <li><CheckCircle2 size={17} /> Review requested permissions and back up important data.</li>
              </ul>
            </div>
          </div>
          <aside className="details-sidebar">
            <div className="download-panel">
              <div className="download-panel-icon"><Download size={21} /></div>
              <h2>Get this release</h2>
              <p>Download links will appear here after the maintainer source is verified.</p>
              <button className="button button-primary button-full" disabled><Download size={16} /> Download unavailable</button>
              <div className="source-warning"><Info size={15} /> Demo listing — no file is attached.</div>
            </div>
            <div className="spec-panel"><h3>Listing information</h3>
              <div className="spec-row"><span><Smartphone size={15} /> Compatibility</span><strong>{app.compatibility}</strong></div>
              <div className="spec-row"><span><ShieldAlert size={15} /> Source status</span><strong className="status-unverified">Not verified</strong></div>
              <div className="spec-row"><span>Category</span><strong>{app.categoryLabel}</strong></div>
              <div className="spec-row"><span>Updated</span><strong>{app.updated}</strong></div>
            </div>
            <Link to="/library" className="text-link sidebar-link">Browse other listings <ArrowUpRight size={15} /></Link>
          </aside>
        </div>
      </div>
    </motion.main>
  )
}

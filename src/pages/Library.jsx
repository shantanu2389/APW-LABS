import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownUp, ArrowUpRight, Search, Smartphone, Globe, Laptop, BrainCircuit } from 'lucide-react'
import { labsAreas } from '../data/labs.js'

const projects = [
  { name: 'AndroidPortWorld community', area: 'android', kind: 'Community', description: 'The Android porting community that APW Labs grew out of.', href: 'https://github.com/AndroidPortWorld', tags: ['Android', 'Ports'] },
  { name: 'APW Labs repositories', area: 'all', kind: 'Organization', description: 'Explore public repositories and discover projects you might want to contribute to.', href: 'https://github.com/APW-Labs', tags: ['Open source', 'Engineering'] },
]

const icons = { android: Smartphone, web: Globe, desktop: Laptop, ai: BrainCircuit, all: ArrowUpRight }

export default function Library() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('area')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const allProjects = projects
    return allProjects
      .filter((project) => category === 'all' || project.area === category)
      .filter((project) => !q || [project.name, project.description, project.kind, ...project.tags].join(' ').toLowerCase().includes(q))
      .sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : a.kind.localeCompare(b.kind))
  }, [query, category, sort])

  return (
    <motion.main className="inner-page labs-library-page" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
      <section className="page-hero labs-library-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="eyebrow"><span className="eyebrow-dot" /> PROJECT DIRECTORY</div>
          <h1>Made by curious minds<span className="heading-period">.</span></h1>
          <p>Discover APW communities and project spaces across Android, web, desktop and edge AI.</p>
        </div>
      </section>
      <section className="section library-section">
        <div className="container">
          <div className="labs-library-toolbar">
            <label className="labs-search"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects and areas…" aria-label="Search project directory" />{query && <button onClick={() => setQuery('')} type="button">Clear</button>}</label>
            <label className="labs-sort"><ArrowDownUp size={16} /><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort projects"><option value="area">Default</option><option value="name">Name A–Z</option></select></label>
          </div>
          <div className="labs-filter-row" role="group" aria-label="Filter project areas">
            {[{ id: 'all', title: 'All projects' }, ...labsAreas.map((area) => ({ id: area.id, title: area.title }))].map((item) => <button className={`filter-chip ${category === item.id ? 'selected' : ''}`} key={item.id} onClick={() => setCategory(item.id)} aria-pressed={category === item.id}>{item.title}</button>)}
          </div>
          <p className="labs-result-count">Showing <strong>{filtered.length}</strong> public starting points</p>
          {filtered.length ? <div className="labs-project-grid">
            {filtered.map((project) => {
              const Icon = icons[project.area] || ArrowUpRight
              return <article className="labs-project-card" key={project.name}>
                <div className="labs-project-icon"><Icon size={23} /></div>
                <span className="labs-project-kind">{project.kind}</span>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="labs-tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="button button-ghost" href={project.href} target="_blank" rel="noreferrer">Open on GitHub <ArrowUpRight size={15} /></a>
              </article>
            })}
          </div> : <div className="empty-state"><h2>No matching projects</h2><p>Try a different search or category.</p><button className="button button-ghost" onClick={() => { setQuery(''); setCategory('all') }}>Reset filters</button></div>}
          <p className="labs-library-note">This directory only features known organization/community starting points. It does not claim to list every APW Labs repository or release.</p>
        </div>
      </section>
    </motion.main>
  )
}

import { motion } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, BrainCircuit, Code2, GitPullRequest,
  HeartHandshake, Laptop, Layers3, MessageCircle, ShieldCheck, Smartphone,
  Terminal, Workflow
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { labsAreas, stackAreas } from '../data/labs.js'

const areaIcons = {
  android: Smartphone,
  web: Code2,
  desktop: Laptop,
  ai: BrainCircuit,
}

const principles = [
  {
    icon: Workflow,
    number: '01',
    title: 'No artificial deadlines',
    description: 'Work on a problem at a sustainable pace. A quiet month should not make a project fall apart.',
  },
  {
    icon: HeartHandshake,
    number: '02',
    title: 'Ideas over titles',
    description: 'Good ideas can come from anyone. Reviews focus on the code and the reasoning, not the person.',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Clean structure, honest docs',
    description: 'Explain trade-offs, document unfinished edges and be clear about what has and has not been tested.',
  },
  {
    icon: GitPullRequest,
    number: '04',
    title: 'Work that represents you',
    description: 'Projects should be maintained and understandable, so a contribution can be meaningful portfolio work.',
  },
]

const contributionSteps = [
  ['Find a problem', 'Browse repositories and open issues until something catches your interest.'],
  ['Start a discussion', 'Open an issue or discussion before starting to avoid duplicated work.'],
  ['Build it', 'Fork the repository, create a branch and implement your change.'],
  ['Open a pull request', 'Explain the change and give reviewers the context they need.'],
  ['Review and improve', 'Use feedback to improve the code. If changes are needed, iterate and resubmit.'],
]

const communities = [
  { label: 'APW Labs on GitHub', detail: 'Explore repositories and source code', href: 'https://github.com/APW-Labs', icon: Code2 },
  { label: 'AndroidPortWorld', detail: 'Visit the Android porting community', href: 'https://github.com/AndroidPortWorld', icon: Smartphone },
  { label: 'LinkedIn', detail: 'Connect with APW Labs', href: 'https://www.linkedin.com/company/apw-labs', icon: Laptop },
  { label: 'Telegram discussion', detail: 'Join the community conversation', href: 'https://t.me/APWLabsDiscussion', icon: MessageCircle },
]

export default function About() {
  return (
    <motion.main className="inner-page labs-about-page" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
      <section className="labs-hero">
        <div className="labs-hero-pattern" aria-hidden="true" />
        <div className="container labs-hero-inner">
          <div className="eyebrow"><span className="eyebrow-dot" /> OPEN SOURCE • NO ARTIFICIAL DEADLINES</div>
          <p className="labs-hero-kicker">ANDROID ROOTS. MUCH BIGGER PLAYGROUND.</p>
          <h1>Curiosity builds<br /><span>better things.</span></h1>
          <p className="labs-hero-description">
            APW Labs is an open-source research and development collective that grew out of AndroidPortWorld and now explores software across systems, cloud, desktop and on-device intelligence.
          </p>
          <div className="labs-hero-actions">
            <a className="button button-primary" href="https://github.com/APW-Labs" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="https://t.me/APWLabsDiscussion" target="_blank" rel="noreferrer">Join the conversation <MessageCircle size={16} /></a>
          </div>
          <div className="labs-badges" aria-label="Community principles">
            <span>✳ Open source</span><span>✳ PRs welcome</span><span>✳ Code-focused reviews</span>
          </div>
        </div>
      </section>

      <section className="section labs-intro-section">
        <div className="container labs-intro-grid">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> ABOUT APW LABS</div>
            <h2>Real engineering.<br /><span className="text-gradient">Open collaboration.</span></h2>
          </div>
          <div className="labs-intro-copy">
            <p>APW Labs builds and maintains software across system engineering, cloud architecture, desktop tooling and on-device intelligence. Its projects are intended to be shipped, maintained and understood—not just followed as tutorials.</p>
            <p>Its roots are in <a href="https://github.com/AndroidPortWorld" target="_blank" rel="noreferrer">AndroidPortWorld</a>, an Android porting community. The work now extends well beyond mobile while keeping the same curiosity-driven spirit.</p>
          </div>
        </div>
      </section>

      <section className="section labs-areas-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> FOUR AREAS, ONE COLLECTIVE</div>
              <h2>What we build<span className="heading-period">.</span></h2>
              <p>From system-level experiments to software people use every day.</p>
            </div>
            <span className="labs-section-stamp">APW LABS / 2026</span>
          </div>
          <div className="labs-area-grid">
            {labsAreas.map((area) => {
              const Icon = areaIcons[area.id]
              return (
                <article className={`labs-area-card labs-area-${area.color}`} key={area.id}>
                  <div className="labs-area-top"><span className="labs-area-number">{area.number} / 04</span><span className="labs-area-icon"><Icon size={21} /></span></div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <div className="labs-tag-row">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section labs-stack-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> TOOLBOX</div>
              <h2>The stack<span className="heading-period">.</span></h2>
              <p>Technologies referenced by APW Labs. A given project uses only the tools relevant to its needs.</p>
            </div>
          </div>
          <div className="labs-stack-grid">
            {stackAreas.map((area) => (
              <article className="labs-stack-card" key={area.id}>
                <div className="labs-stack-card-heading"><Terminal size={17} /><h3>{area.name}</h3></div>
                <div className="labs-stack-tags">{area.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                {area.extra && <p>{area.extra}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section labs-values-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> HOW WE WORK</div>
              <h2>People first. Code reviewed.<span className="heading-period">.</span></h2>
            </div>
          </div>
          <div className="labs-values-grid">
            {principles.map(({ icon: Icon, number, title, description }) => (
              <article className="labs-value-card" key={number}>
                <div className="labs-value-top"><span>{number}</span><Icon size={21} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section labs-contribute-section">
        <div className="container labs-contribute-layout">
          <div className="labs-contribute-intro">
            <div className="eyebrow"><span className="eyebrow-dot" /> YOUR FIRST CONTRIBUTION</div>
            <h2>Find it.<br />Build it.<br /><span className="text-gradient">Ship it.</span></h2>
            <p>New here? You do not need a perfect idea to get started. Pick a problem, talk it through, and learn by contributing.</p>
            <a href="https://github.com/APW-Labs" target="_blank" rel="noreferrer" className="button button-primary">Browse repositories <ArrowUpRight size={16} /></a>
          </div>
          <div className="labs-steps">
            {contributionSteps.map(([title, description], index) => (
              <div className="labs-step" key={title}>
                <span className="labs-step-number">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                {index < contributionSteps.length - 1 && <span className="labs-step-connector" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section labs-join-section">
        <div className="container labs-join-card">
          <div className="labs-join-pattern" aria-hidden="true" />
          <div className="eyebrow"><span className="eyebrow-dot" /> THERE'S ROOM FOR YOUR IDEA</div>
          <h2>Build something<br /><span>worth sharing.</span></h2>
          <p>Porting a ROM, writing a microservice, shipping a desktop tool or squeezing a model onto a phone—there's space to contribute.</p>
          <div className="labs-community-grid">
            {communities.map(({ label, detail, href, icon: Icon }) => (
              <a className="labs-community-link" href={href} target="_blank" rel="noreferrer" key={label}>
                <span className="labs-community-icon"><Icon size={19} /></span>
                <span><strong>{label}</strong><small>{detail}</small></span>
                <ArrowRight size={16} className="labs-community-arrow" />
              </a>
            ))}
          </div>
          <p className="labs-join-footnote">APW Labs · Open source · 2026</p>
        </div>
      </section>
    </motion.main>
  )
}

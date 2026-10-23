
import { Link } from 'react-router-dom'
import './Home.css'
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Monitor,
  BrainCircuit,
  GitPullRequest,
  HeartHandshake,
  BookOpen,
  Terminal,
  Rocket,
  Github,
  MessageCircle,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'
import { motion } from 'framer-motion'
import AppCard from '../components/AppCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { apps } from '../data/apps.js'

const areas = [
  {
    number: '01',
    title: 'Android & Systems',
    description:
      'Custom ROMs, GSIs, kernel development, Magisk, KernelSU and bringing apps to more devices.',
    tags: ['AOSP', 'Kotlin', 'Magisk', 'KernelSU'],
    icon: Smartphone,
    color: 'labs-area-mint',
  },
  {
    number: '02',
    title: 'Web & Cloud',
    description:
      'Full-stack products, APIs, microservices, cloud deployments and distributed databases.',
    tags: ['React', 'Node.js', 'Docker', 'PostgreSQL'],
    icon: Code2,
    color: 'labs-area-lavender',
  },
  {
    number: '03',
    title: 'Desktop & PC',
    description:
      'Desktop applications, native tools, custom interfaces and utilities for everyday workflows.',
    tags: ['C++', 'Qt', 'Python', 'Linux'],
    icon: Monitor,
    color: 'labs-area-peach',
  },
  {
    number: '04',
    title: 'Edge AI & Embedded',
    description:
      'On-device intelligence, compact ML models, embedded systems and firmware experiments.',
    tags: ['PyTorch', 'ONNX', 'OpenCV', 'Embedded'],
    icon: BrainCircuit,
    color: 'labs-area-blue',
  },
]

const values = [
  {
    number: '01',
    icon: Rocket,
    title: 'Build real things',
    text: 'Create software people can run, use, maintain and show in their portfolios.',
  },
  {
    number: '02',
    icon: HeartHandshake,
    title: 'No artificial pressure',
    text: 'No artificial deadlines or pressure to contribute at a pace that does not work for you.',
  },
  {
    number: '03',
    icon: GitPullRequest,
    title: 'Better together',
    text: 'Share ideas, review code respectfully and improve projects through collaboration.',
  },
  {
    number: '04',
    icon: BookOpen,
    title: 'Document honestly',
    text: 'Explain decisions, document limitations and make projects easier to understand.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Find something interesting',
    text: 'Explore projects, issues and ideas across the APW ecosystem.',
  },
  {
    number: '02',
    title: 'Start a conversation',
    text: 'Open an issue or discussion before beginning larger changes.',
  },
  {
    number: '03',
    title: 'Build and contribute',
    text: 'Fork the repository, create a branch and write your solution.',
  },
  {
    number: '04',
    title: 'Review and improve',
    text: 'Open a pull request, discuss feedback and refine your contribution.',
  },
]

const stack = [
  { name: 'Android', items: ['Kotlin', 'Java', 'C/C++', 'Flutter', 'Gradle', 'ADB'] },
  { name: 'Web & Cloud', items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Docker', 'PostgreSQL'] },
  { name: 'Desktop', items: ['Python', 'Qt', 'JavaFX', 'Bash', 'Linux', 'MySQL'] },
  { name: 'AI & ML', items: ['PyTorch', 'TensorFlow', 'OpenCV', 'ONNX', 'JNI', 'Edge AI'] },
]

const community = [
  {
    name: 'APW Labs on GitHub',
    description: 'Explore open-source repositories and contributions.',
    href: 'https://github.com/APW-Labs',
    icon: Github,
  },
  {
    name: 'Explore APW Labs repositories',
    description: 'Browse projects, source code and open issues.',
    href: 'https://github.com/APW-Labs',
    icon: Code2,
  },
  {
    name: 'Community discussions',
    description: 'Connect with the community on Telegram.',
    href: 'https://t.me/APWLabsDiscussion',
    icon: MessageCircle,
  },
  {
    name: 'APW Labs on LinkedIn',
    description: 'Find the organization and its updates.',
    href: 'https://www.linkedin.com/company/apw-labs',
    icon: ArrowUpRight,
  },
]

function SectionLabel({ children }) {
  return (
    <span className="eyebrow">
      <span className="eyebrow-dot" />
      {children}
    </span>
  )
}

export default function Home() {
  const featured = apps.filter((app) => app.featured).slice(0, 3)

  return (
    <motion.main
      className="labs-home"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {/* APW Labs hero — uses the existing site CSS */}
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow-one" aria-hidden="true" />
        <div className="hero-glow-two" aria-hidden="true" />

        <div className="hero-layout container">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="status-pill">
              <span className="pulse-dot" />
              APW LABS / INDEPENDENT ENGINEERING
            </div>

            <h1>
              Ideas are easy.
              <br />
              <span className="text-gradient">Building is everything.</span>
            </h1>

            <p className="hero-description">
              APW Labs is an open-source engineering collective exploring
              software, systems, desktop tools, cloud infrastructure and
              on-device intelligence. Different disciplines, shared curiosity,
              and useful things built together.
            </p>

            <div className="hero-actions">
              <a href="#areas" className="button button-primary">
                Explore our work <ArrowRight size={17} />
              </a>
              <a href="#community" className="button button-ghost">
                Get involved <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="hero-trust-row">
              <span><ShieldCheck size={15} /> Open-source minded</span>
              <span><GitPullRequest size={15} /> Built through collaboration</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <motion.div
              className="orbit orbit-outer"
              animate={{ rotate: 360 }}
              transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="orbit orbit-middle"
              animate={{ rotate: -360 }}
              transition={{ duration: 31, repeat: Infinity, ease: 'linear' }}
            >
              <span className="orbit-node node-one" />
            </motion.div>
            <div className="orbit orbit-inner" />

            <motion.div
              className="hero-core"
              animate={{ y: [0, -7, 0], rotate: [-5, 0, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="core-symbol">
                <span className="core-eye eye-left" />
                <span className="core-eye eye-right" />
                <span className="core-mouth" />
              </div>
              <span className="core-caption">APW / LABS</span>
            </motion.div>

            <motion.div
              className="floating-chip chip-top"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="chip-icon">01</span>
              <span><strong>Explore</strong><small>Systems & software</small></span>
            </motion.div>

            <motion.div
              className="floating-chip chip-bottom"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="chip-spark"><Sparkles size={17} /></span>
              <span><strong>Experiment</strong><small>Build what matters</small></span>
              <ArrowUpRight size={15} className="chip-arrow" />
            </motion.div>

            <div className="art-label">
              <span className="pulse-dot" /> OPEN MINDS / OPEN SOURCE
            </div>
          </motion.div>
        </div>

        <div className="hero-bottom-line container">
          <span>INDEPENDENT THINKING</span>
          <div />
          <span>BUILD / LEARN / SHARE</span>
        </div>
      </section>

      {/* The wider APW ecosystem */}
      <section className="section labs-intro-section">
        <div className="container labs-intro-grid">
          <div>
            <SectionLabel>MORE THAN ANDROID</SectionLabel>
            <h2>
              One community.
              <br />
              <span className="text-gradient">Many directions.</span>
            </h2>
          </div>

          <div className="labs-intro-copy">
            <p>
              APW Labs is an independent open-source research and development
              collective, bringing together people who enjoy solving problems
              across different areas of engineering.
            </p>
            <p>
              From platform and systems work to cloud software, desktop tools
              and on-device AI, the goal is to build useful projects, share
              what we learn and make collaboration accessible.
            </p>
            <Link to="/about" className="text-link">
              Get to know APW Labs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Four engineering areas */}
      <section className="section labs-areas-section" id="areas">
        <div className="container">
          <SectionHeading
            eyebrow="FOUR WORLDS, ONE ECOSYSTEM"
            title={<>What we build<span className="heading-period">.</span></>}
            description="Explore the different areas where APW contributors can experiment, build and collaborate."
            action={
              <span className="labs-section-stamp">
                OPEN SOURCE / 001—004
              </span>
            }
          />

          <div className="labs-area-grid">
            {areas.map(({ number, title, description, tags, icon: Icon, color }) => (
              <motion.article
                className={`labs-area-card ${color}`}
                key={number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4 }}
              >
                <div className="labs-area-top">
                  <span className="labs-area-number">AREA / {number}</span>
                  <span className="labs-area-icon">
                    <Icon size={21} />
                  </span>
                </div>

                <h3>{title}</h3>
                <p>{description}</p>

                <div className="labs-tag-row">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured catalog items */}
      <section className="section section-featured" id="featured">
        <div className="container">
          <SectionHeading
            eyebrow="FROM THE APW CATALOG"
            title={<>Worth a closer look<span className="heading-period">.</span></>}
            description="Explore the app and port collection. Check the original source and compatibility details before installing."
            action={
              <Link to="/library" className="text-link">
                Browse the library <ArrowRight size={16} />
              </Link>
            }
          />

          {featured.length > 0 ? (
            <>
              <div className="app-grid app-grid-three">
                {featured.map((app, index) => (
                  <AppCard key={app.id} app={app} index={index} />
                ))}
              </div>
              <p className="demo-notice">
                <ShieldCheck size={15} style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
                Verify each release against its original source before installing.
              </p>
            </>
          ) : (
            <div className="empty-state">
              <Layers3 size={30} />
              <h2>The collection is taking shape.</h2>
              <p>Visit the library to explore the available catalog entries.</p>
              <Link to="/library" className="button button-primary">
                Open library <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Technologies */}
      <section className="section labs-stack-section" id="technology">
        <div className="container">
          <SectionHeading
            eyebrow="TOOLS OF THE TRADE"
            title={<>Different stacks. Shared curiosity<span className="heading-period">.</span></>}
            description="A snapshot of the technologies associated with the APW Labs engineering areas."
            action={
              <Link to="/about" className="text-link">
                Explore the team and stack <ArrowRight size={16} />
              </Link>
            }
          />

          <div className="labs-stack-grid">
            {stack.map(({ name, items }, index) => (
              <motion.article
                className="labs-stack-card"
                key={name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
              >
                <div className="labs-stack-card-heading">
                  <Terminal size={20} />
                  <h3>{name}</h3>
                  <span className="labs-area-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="labs-stack-tags">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
          <p className="demo-notice">
            Technology examples, not a claim that every tool is used in every project.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section labs-values-section" id="philosophy">
        <div className="container">
          <SectionHeading
            eyebrow="THE WAY WE WORK"
            title={<>Good code. Good people<span className="heading-period">.</span></>}
            description="A community philosophy built around useful work, thoughtful reviews and the freedom to contribute at your own pace."
            action={
              <Link to="/about" className="text-link">
                Read our approach <ArrowRight size={16} />
              </Link>
            }
          />

          <div className="labs-values-grid">
            {values.map(({ number, icon: Icon, title, text }) => (
              <article className="labs-value-card" key={number}>
                <div className="labs-value-top">
                  <span>PRINCIPLE / {number}</span>
                  <Icon size={21} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution flow */}
      <section className="section labs-contribute-section" id="contribute">
        <div className="container labs-contribute-layout">
          <div className="labs-contribute-intro">
            <SectionLabel>YOUR FIRST CONTRIBUTION</SectionLabel>
            <h2>
              Don't just
              <br />
              scroll.
              <br />
              <span className="text-gradient">Build something.</span>
            </h2>
            <p>
              You do not need to know everything to start. Find a problem,
              talk to the community and learn by contributing.
            </p>
            <a
              className="button button-primary"
              href="https://github.com/APW-Labs"
              target="_blank"
              rel="noreferrer"
            >
              Explore repositories <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="labs-steps">
            {steps.map(({ number, title, text }) => (
              <article className="labs-step" key={number}>
                <span className="labs-step-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section labs-join-section" id="community">
        <div className="container">
          <div className="labs-join-card">
            <div className="labs-join-pattern" aria-hidden="true" />

            <SectionLabel>OPEN SOURCE, OPEN POSSIBILITIES</SectionLabel>
            <h2>
              Find your people.
              <br />
              <span>Ship your ideas.</span>
            </h2>
            <p>
              Build a backend service, explore system software, create a
              desktop tool or experiment with on-device AI. There is room
              to explore different kinds of engineering.
            </p>

            <div className="labs-community-grid">
              {community.map(({ name, description, href, icon: Icon }) => (
                <a
                  className="labs-community-link"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  key={name}
                >
                  <span className="labs-community-icon">
                    <Icon size={19} />
                  </span>
                  <span>
                    <strong>{name}</strong>
                    <small>{description}</small>
                  </span>
                  <ArrowUpRight className="labs-community-arrow" size={17} />
                </a>
              ))}
            </div>

            <p className="labs-join-footnote">
              APW LABS · OPEN SOURCE · BUILT THROUGH COLLABORATION
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

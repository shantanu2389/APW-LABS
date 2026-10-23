import { ArrowUpRight, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Logo />
            <p>A discovery space for Android ports, tools and customization resources.</p>
          </div>
          <div className="footer-links-group">
            <span className="footer-label">EXPLORE</span>
            <Link to="/library">App library <ArrowUpRight size={13} /></Link>
            <Link to="/about">About APW <ArrowUpRight size={13} /></Link>
          </div>
          <div className="footer-links-group">
            <span className="footer-label">COMMUNITY</span>
            <a href="https://t.me/AndroidPortWorld" target="_blank" rel="noreferrer">Telegram <Send size={13} /></a>
            <span className="footer-muted">Follow official sources for releases.</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} APW concept website.</span>
          <span className="footer-disclaimer">Respect developers, licenses and source links.</span>
          <a href="#top" className="back-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { Orbit } from 'lucide-react'

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="brand" aria-label="Android Port World home" onClick={onClick}>
      <span className="brand-mark"><Orbit size={22} strokeWidth={2.2} /></span>
      <span className="brand-copy">
        <strong>APW LABS<span>.</span></strong>
        
      </span>
    </Link>
  )
}

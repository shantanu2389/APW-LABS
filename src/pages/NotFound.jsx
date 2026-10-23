import { Link } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="not-found container">
      <span className="not-found-code">404</span>
      <h1>Looks like a dead end.</h1>
      <p>The page you're looking for isn't here. Let's get you back to the APW collection.</p>
      <div className="not-found-actions"><Link to="/" className="button button-primary"><ArrowLeft size={16} /> Back home</Link><Link to="/library" className="button button-ghost"><Search size={16} /> Explore library</Link></div>
    </main>
  )
}

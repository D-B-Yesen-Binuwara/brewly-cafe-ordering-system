import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <main className="fallback-screen"><div className="fallback-card"><span className="fallback-icon">404</span><h1>Page not found</h1><p>That Brewly page does not exist yet.</p><Link className="primary-button fallback-link" to="/menu">Back to menu</Link></div></main>
}

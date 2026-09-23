import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/menu' },
  { label: 'Menu', to: '/menu' },
  { label: 'My orders', to: '/orders' },
  { label: 'History', to: '/history' },
  { label: 'Contact us', to: '/contact' },
]

export function Sidebar({ onNotice }) {
  return <aside className="sidebar"><div><div className="brand">Brewly</div><p className="tagline">Good coffee, great day.</p><nav className="sidebar-nav" aria-label="Primary navigation">{links.map((link) => <NavLink to={link.to} className={({ isActive }) => link.label === 'Menu' ? 'nav-link' : isActive ? 'nav-link is-active' : 'nav-link'} key={link.label}>{link.label}</NavLink>)}</nav><div className="sidebar-rule" /><button type="button" className="nav-link" onClick={() => onNotice('Settings is coming soon')}>Settings</button></div><button type="button" className="nav-link logout-link" onClick={() => onNotice('Log out is coming soon')}>Log out</button></aside>
}

import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

export function Topbar({ query, onQueryChange }) {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  return <header className="topbar"><label className="search-field"><span className="sr-only">Search menu</span><input aria-label="Search menu" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search coffee, drinks, food..." onFocus={() => navigate('/menu')} /></label><button type="button" className="filter-button" onClick={() => navigate('/menu')}>Filter</button><div className="user-profile"><div className="avatar">AF</div><div><strong>Albert Flores</strong><span>albert@email.com</span></div></div><button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? '☾' : '☀'}</button></header>
}

import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

export function Topbar({ query, onQueryChange, cartItemCount, cartOpen, onCartToggle }) {
  const navigate = useNavigate()
  const searchInputRef = useRef(null)
  const { theme, toggleTheme } = useTheme()

  return <header className="topbar"><label className="search-field"><span className="sr-only">Search menu</span><input ref={searchInputRef} aria-label="Search menu" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search coffee, drinks, food..." onFocus={() => navigate('/menu')} /></label><button type="button" className="search-icon-button" onClick={() => searchInputRef.current?.focus()} aria-label="Focus menu search">⌕</button><div className="user-profile"><div className="avatar">AF</div><div><strong>Albert Flores</strong><span>albert@email.com</span></div></div><button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? '☾' : '☀'}</button><button type="button" className={cartOpen ? 'cart-toggle is-open' : 'cart-toggle'} onClick={onCartToggle} aria-expanded={cartOpen} aria-label={cartOpen ? 'Close cart' : 'Open cart'}><span aria-hidden="true">🛒</span>{cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}</button></header>
}

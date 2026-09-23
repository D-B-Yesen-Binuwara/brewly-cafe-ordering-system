import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { CartPanel } from '../cart/CartPanel'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import { Topbar } from './Topbar'

export function AppShell() {
  const [fulfilment, setFulfilment] = useState('Dine in')
  const [cartOpen, setCartOpen] = useState(false)
  const [notice, setNotice] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const cartState = useCart()
  const cartItemCount = cartState.cart.reduce((total, item) => total + item.quantity, 0)

  const showNotice = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2200)
  }

  return <div className={cartOpen ? 'app-shell is-cart-open' : 'app-shell'}><Sidebar onNotice={showNotice} /><div className="app-content"><Topbar query={searchQuery} onQueryChange={setSearchQuery} cartItemCount={cartItemCount} cartOpen={cartOpen} onCartToggle={() => setCartOpen((current) => !current)} /><Outlet context={{ ...cartState, fulfilment, setFulfilment, showNotice, searchQuery, setSearchQuery }} /><Footer /></div>{cartOpen && <CartPanel {...cartState} fulfilment={fulfilment} setFulfilment={setFulfilment} onClose={() => setCartOpen(false)} onPlaceOrder={() => showNotice(`Order ready for ${fulfilment.toLowerCase()}`)} />}{notice && <div className="toast" role="status">{notice}</div>}</div>
}

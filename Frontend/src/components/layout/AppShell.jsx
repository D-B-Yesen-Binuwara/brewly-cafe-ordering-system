import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { initialCart } from '../../data/menuData'
import { useCart } from '../../hooks/useCart'
import { CartPanel } from '../cart/CartPanel'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function AppShell() {
  const [fulfilment, setFulfilment] = useState('Pickup')
  const [notice, setNotice] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const cartState = useCart(initialCart)

  const showNotice = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2200)
  }

  return <div className="app-shell"><Sidebar onNotice={showNotice} /><div className="app-content"><Topbar query={searchQuery} onQueryChange={setSearchQuery} /><Outlet context={{ ...cartState, fulfilment, setFulfilment, showNotice, searchQuery, setSearchQuery }} /></div><CartPanel {...cartState} fulfilment={fulfilment} setFulfilment={setFulfilment} onPlaceOrder={() => showNotice(`Order ready for ${fulfilment.toLowerCase()}`)} />{notice && <div className="toast" role="status">{notice}</div>}</div>
}

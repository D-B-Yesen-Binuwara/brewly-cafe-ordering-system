import { useState } from 'react'

export function useCart(initialItems = []) {
  const [cart, setCart] = useState(initialItems)

  const addItem = (item, size, quantity, fulfilment) => {
    setCart((currentCart) => {
      const sizeLabel = size === 'Small' ? 'Small · 250ml' : 'Large · 350ml'
      const existingItem = currentCart.find((entry) => entry.id === item.id && entry.size === sizeLabel && entry.fulfilment === fulfilment)
      if (existingItem) {
        return currentCart.map((entry) => entry === existingItem ? { ...entry, quantity: entry.quantity + quantity } : entry)
      }
      return [...currentCart, { ...item, size: sizeLabel, quantity, fulfilment }]
    })
  }

  const updateQuantity = (item, quantity) => {
    setCart((currentCart) => quantity <= 0
      ? currentCart.filter((entry) => !(entry.id === item.id && entry.size === item.size && entry.fulfilment === item.fulfilment))
      : currentCart.map((entry) => entry.id === item.id && entry.size === item.size && entry.fulfilment === item.fulfilment ? { ...entry, quantity } : entry))
  }

  const removeItem = (item) => {
    setCart((currentCart) => currentCart.filter((entry) => !(entry.id === item.id && entry.size === item.size && entry.fulfilment === item.fulfilment)))
  }

  const summaryFor = (fulfilment) => {
    const visibleItems = fulfilment ? cart.filter((item) => item.fulfilment === fulfilment) : cart
    const itemCount = visibleItems.reduce((total, item) => total + item.quantity, 0)
    const subtotal = visibleItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const discount = visibleItems.length ? 1.5 : 0
    return { itemCount, subtotal, discount, total: Math.max(0, subtotal - discount) }
  }

  const clearCart = (fulfilment) => setCart((currentCart) => fulfilment ? currentCart.filter((item) => item.fulfilment !== fulfilment) : [])

  return { cart, addItem, updateQuantity, removeItem, clearCart, summaryFor }
}

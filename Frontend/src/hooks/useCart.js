import { useMemo, useState } from 'react'

export function useCart(initialItems = []) {
  const [cart, setCart] = useState(initialItems)

  const addItem = (item, size, quantity) => {
    setCart((currentCart) => {
      const sizeLabel = size === 'Small' ? 'Small · 250ml' : 'Large · 350ml'
      const existingItem = currentCart.find((entry) => entry.id === item.id && entry.size === sizeLabel)
      if (existingItem) {
        return currentCart.map((entry) => entry === existingItem ? { ...entry, quantity: entry.quantity + quantity } : entry)
      }
      return [...currentCart, { ...item, size: sizeLabel, quantity }]
    })
  }

  const updateQuantity = (item, quantity) => {
    setCart((currentCart) => quantity <= 0
      ? currentCart.filter((entry) => !(entry.id === item.id && entry.size === item.size))
      : currentCart.map((entry) => entry.id === item.id && entry.size === item.size ? { ...entry, quantity } : entry))
  }

  const summary = useMemo(() => {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    const discount = cart.length ? 1.5 : 0
    return { itemCount, subtotal, discount, total: Math.max(0, subtotal - discount) }
  }, [cart])

  return { cart, addItem, updateQuantity, clearCart: () => setCart([]), ...summary }
}

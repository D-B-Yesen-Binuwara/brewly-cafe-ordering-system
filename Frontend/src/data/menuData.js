export const menuCategories = ['Coffee', 'Non Coffee', 'Food', 'Snack', 'Dessert']
export const fulfilmentOptions = ['Dine in', 'Takeaway', 'Pickup']
export const sizeOptions = ['Small', 'Large']

// Menu entries are intentionally kept as data so API-backed items or supplied image URLs
// can replace this fixture without changing the page or card components.
export const menuItems = [
  { id: 'cappuccino', name: 'Cappuccino', initial: 'C', price: 4.95, category: 'Coffee', description: 'Espresso, steamed milk, deep foam.' },
  { id: 'cafe-latte', name: 'Cafe Latte', initial: 'L', price: 5.95, category: 'Coffee', description: 'Smooth espresso with milk and soft foam.' },
  { id: 'americano', name: 'Americano', initial: 'A', price: 3.95, category: 'Coffee', description: 'Espresso and hot water for a clean finish.' },
  { id: 'v60', name: 'V60', initial: 'V', price: 5.95, category: 'Coffee', description: 'Pour-over coffee with a bright, clean taste.' },
]

export const formatMoney = (value) => `Rs. ${value.toFixed(2)}`

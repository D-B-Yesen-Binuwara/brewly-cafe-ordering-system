import { useOutletContext } from 'react-router-dom'
import { CategoryTabs } from '../components/menu/CategoryTabs'
import { ProductCard } from '../components/menu/ProductCard'
import { menuCategories, menuItems } from '../data/menuData'
import { useMenu } from '../hooks/useMenu'

export function CustomerMenuPage() {
  const { addItem, showNotice, setFulfilment, searchQuery, setSearchQuery } = useOutletContext()
  const { activeCategory, setActiveCategory, filteredItems } = useMenu(menuItems, 'Coffee', { value: searchQuery, setValue: setSearchQuery })

  const addToCart = (item, size, quantity, fulfilment) => {
    addItem(item, size, quantity, fulfilment)
    setFulfilment(fulfilment)
    showNotice(`${item.name} added to cart`)
  }

  return <main className="menu-content"><CategoryTabs categories={menuCategories} activeCategory={activeCategory} onSelect={setActiveCategory} /><div className="menu-heading-row"><div><p className="screen-label">01  CUSTOMER / MENU</p><h1>{activeCategory === 'Coffee' ? 'Coffee menu' : `${activeCategory} menu`}</h1></div><span className="result-count">{filteredItems.length} items</span></div>{filteredItems.length ? <div className="product-grid">{filteredItems.map((item) => <ProductCard item={item} onAdd={addToCart} key={item.id} />)}</div> : <div className="no-results" role="status"><span>!</span><h2>No menu items found</h2><p>Try a different search or category.</p></div>}</main>
}

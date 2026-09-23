import { formatMoney, fulfilmentOptions } from '../../data/menuData'
import { ItemVisual } from '../menu/ItemVisual'
import { QuantityControl } from '../menu/QuantityControl'

export function CartPanel({ cart, summaryFor, updateQuantity, removeItem, fulfilment, setFulfilment, onClose, onPlaceOrder }) {
  const visibleCart = cart.filter((item) => item.fulfilment === fulfilment)
  const { itemCount, subtotal, discount, total } = summaryFor(fulfilment)

  return <aside className="cart-panel" aria-label="Shopping cart">
    <div className="cart-header"><h2>Cart</h2><button type="button" className="cart-close-button" onClick={onClose} aria-label="Close cart">×</button></div>
      <div className="fulfilment-options" role="tablist" aria-label="Cart fulfilment tabs">{fulfilmentOptions.map((option) => <button type="button" role="tab" aria-selected={fulfilment === option} className={fulfilment === option ? 'fulfilment-option is-selected' : 'fulfilment-option'} onClick={() => setFulfilment(option)} key={option}>{option}</button>)}</div>
      <div className="cart-list-header"><span>{itemCount} {itemCount === 1 ? 'item' : 'items'}</span></div>
      {visibleCart.length ? <div className="cart-items">{visibleCart.map((item, index) => <div className="cart-item" key={`${item.id}-${item.size}-${item.fulfilment}`}><ItemVisual item={item} size="cart" /><div className="cart-item-content"><button type="button" className="delete-item-button" onClick={() => removeItem(item)} aria-label={`Remove ${item.name} from cart`} title={`Remove ${item.name}`}>🗑</button><h3>{item.name}</h3><p>{item.size}</p><div className="cart-item-footer"><strong>{formatMoney(item.price * item.quantity)}</strong><QuantityControl value={item.quantity} onChange={(next) => updateQuantity(item, next)} label={`${item.name} cart quantity`} /></div></div>{index < visibleCart.length - 1 && <span className="cart-divider" aria-hidden="true" />}</div>)}</div> : <div className="empty-cart" role="status"><span className="empty-cart-icon">+</span><p>Your {fulfilment.toLowerCase()} cart is empty</p><small>Add a menu item to get started.</small></div>}
      <div className="cart-summary"><div><span>Items</span><strong>{formatMoney(subtotal)}</strong></div><div><span>Discount</span><strong className="discount">− {formatMoney(discount)}</strong></div><div className="summary-total"><span>Total</span><strong>{formatMoney(total)}</strong></div></div>
      <button type="button" className="place-order-button" disabled={!visibleCart.length} onClick={onPlaceOrder}>Place order</button>
  </aside>
}

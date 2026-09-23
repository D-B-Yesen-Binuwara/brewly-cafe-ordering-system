import { formatMoney } from '../../data/menuData'
import { ItemVisual } from '../menu/ItemVisual'
import { QuantityControl } from '../menu/QuantityControl'

export function CartPanel({ cart, itemCount, subtotal, discount, total, onClear, onUpdateQuantity, fulfilment, setFulfilment, onPlaceOrder }) {
  return <aside className="cart-panel" aria-label="Shopping cart">
    <div className="cart-header"><h2>Cart</h2><button type="button" className="clear-button" onClick={onClear} disabled={!cart.length}>Clear all ({itemCount})</button></div>
    <div className="fulfilment-options" role="group" aria-label="Order fulfilment">{['Pickup', 'Dine in', 'Takeaway'].map((option) => <button type="button" className={fulfilment === option ? 'fulfilment-option is-selected' : 'fulfilment-option'} onClick={() => setFulfilment(option)} key={option}>{option}</button>)}</div>
    {cart.length ? <div className="cart-items">{cart.map((item, index) => <div className="cart-item" key={`${item.id}-${item.size}`}><ItemVisual item={item} size="cart" /><div className="cart-item-content"><h3>{item.name}</h3><p>{item.size}</p><div className="cart-item-footer"><strong>{formatMoney(item.price * item.quantity)}</strong><QuantityControl value={item.quantity} onChange={(next) => onUpdateQuantity(item, next)} label={`${item.name} cart quantity`} /></div></div>{index < cart.length - 1 && <span className="cart-divider" aria-hidden="true" />}</div>)}</div> : <div className="empty-cart" role="status"><span className="empty-cart-icon">+</span><p>Your cart is empty</p><small>Add a drink to get started.</small></div>}
    <div className="cart-summary"><div><span>Items</span><strong>{formatMoney(subtotal)}</strong></div><div><span>Discount</span><strong className="discount">− {formatMoney(discount)}</strong></div><div className="summary-total"><span>Total</span><strong>{formatMoney(total)}</strong></div></div>
    <button type="button" className="place-order-button" disabled={!cart.length} onClick={onPlaceOrder}>Place order</button>
  </aside>
}

import { useState } from 'react'
import { formatMoney, fulfilmentOptions, sizeOptions } from '../../data/menuData'
import { ItemVisual } from './ItemVisual'
import { QuantityControl } from './QuantityControl'

export function ProductCard({ item, onAdd }) {
  const [size, setSize] = useState('Small')
  const [quantity, setQuantity] = useState(1)
  const [fulfilment, setFulfilment] = useState(fulfilmentOptions[0])

  const addToCart = () => {
    onAdd(item, size, quantity, fulfilment)
    setQuantity(1)
  }

  return <article className="product-card">
    <div className="product-main">
      <ItemVisual item={item} />
      <div className="product-details">
        <div className="product-heading"><h3>{item.name}</h3><span className="product-price">{formatMoney(item.price)}</span></div>
        <p className="product-description">{item.description}</p>
        <div className="size-row"><span>Size</span><div className="size-options">{sizeOptions.map((option) => <button type="button" className={size === option ? 'size-option is-selected' : 'size-option'} onClick={() => setSize(option)} key={option}>{option}</button>)}</div></div>
        <div className="fulfilment-tags" role="group" aria-label={`${item.name} fulfilment`}>
          {fulfilmentOptions.map((option) => <button type="button" className={fulfilment === option ? 'fulfilment-tag is-selected' : 'fulfilment-tag'} onClick={() => setFulfilment(option)} key={option}>{option}</button>)}
        </div>
      </div>
    </div>
    <div className="product-actions"><QuantityControl value={quantity} onChange={setQuantity} label={`${item.name} quantity`} /><button type="button" className="add-button" onClick={addToCart}>Add to cart</button></div>
  </article>
}

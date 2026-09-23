import { useState } from 'react'

export function ItemVisual({ item, size = 'card' }) {
  const [failed, setFailed] = useState(false)
  const showFallback = !item.image || failed

  return <div className={`item-visual item-visual--${size}`} aria-label={`${item.name} image`}>
    {showFallback ? <span aria-hidden="true">{item.initial}</span> : <img src={item.image} alt="" onError={() => setFailed(true)} />}
  </div>
}

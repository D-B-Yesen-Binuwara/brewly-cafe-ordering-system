export function QuantityControl({ value, onChange, label }) {
  return <div className="quantity-control" aria-label={label}>
    <button type="button" onClick={() => onChange(Math.max(0, value - 1))} aria-label={`Decrease ${label}`}>−</button>
    <span>{value}</span>
    <button type="button" onClick={() => onChange(value + 1)} aria-label={`Increase ${label}`}>+</button>
  </div>
}

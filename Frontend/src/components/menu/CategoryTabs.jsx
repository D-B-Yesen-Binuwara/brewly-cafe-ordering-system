export function CategoryTabs({ categories, activeCategory, onSelect }) {
  return <div className="category-tabs" role="tablist" aria-label="Menu categories">
    {categories.map((category) => <button type="button" role="tab" aria-selected={activeCategory === category} className={activeCategory === category ? 'category-tab is-selected' : 'category-tab'} onClick={() => onSelect(category)} key={category}>{category}</button>)}
  </div>
}

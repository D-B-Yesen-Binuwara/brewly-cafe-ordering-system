import { useMemo, useState } from 'react'

export function useMenu(items, initialCategory, controlledSearch) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [internalQuery, setInternalQuery] = useState('')
  const query = controlledSearch?.value ?? internalQuery
  const setQuery = controlledSearch?.setValue ?? setInternalQuery

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return items.filter((item) => {
      const matchesCategory = item.category === activeCategory
      const searchableText = `${item.name} ${item.description}`.toLowerCase()
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery))
    })
  }, [activeCategory, items, query])

  return { activeCategory, setActiveCategory, query, setQuery, filteredItems }
}

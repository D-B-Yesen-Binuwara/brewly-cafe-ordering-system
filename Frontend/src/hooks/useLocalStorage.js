import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const storedValue = window.localStorage.getItem(key)
      return storedValue ? JSON.parse(storedValue) : initialValue
    } catch {
      return initialValue
    }
  })

  const setStoredValue = (nextValue) => {
    setValue((currentValue) => {
      const resolvedValue = typeof nextValue === 'function' ? nextValue(currentValue) : nextValue
      try {
        window.localStorage.setItem(key, JSON.stringify(resolvedValue))
      } catch {
        // Storage can be unavailable in private browsing; state still remains usable.
      }
      return resolvedValue
    })
  }

  return [value, setStoredValue]
}

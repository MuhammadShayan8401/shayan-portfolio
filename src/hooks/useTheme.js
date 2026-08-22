import { useEffect, useState } from 'react'

const STORAGE_KEY = 'shayan-portfolio-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  // Follow system changes only if the user hasn't explicitly chosen a theme here
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      if (!window.localStorage.getItem(STORAGE_KEY + '-explicit')) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = () => {
    window.localStorage.setItem(STORAGE_KEY + '-explicit', '1')
    setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  }

  return [theme, toggleTheme]
}

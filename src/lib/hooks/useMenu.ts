import { useLenis } from 'lenis/react'
import { useState, useEffect } from 'react'

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lenis = useLenis()

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden'
      lenis?.stop()
      document.documentElement.style.scrollbarGutter = 'stable'
    } else {
      document.documentElement.style.overflow = ''
      lenis?.start()
      document.documentElement.style.scrollbarGutter = ''
    }

    return () => {
      lenis?.start()
      document.documentElement.style.overflow = ''
      document.documentElement.style.scrollbarGutter = ''
    }
  }, [isMenuOpen])

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseMenu()
    }
  }

  return {
    isMenuOpen,
    handleToggleMenu,
    handleCloseMenu,
    handleKeyDown
  }
}

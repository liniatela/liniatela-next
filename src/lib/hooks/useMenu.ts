import { useState, useEffect } from 'react'

export const useMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Блокировка скролла при открытом меню
	useEffect(() => {
		if (isMenuOpen) {
			document.documentElement.style.overflow = 'hidden'
			document.documentElement.style.scrollbarGutter = 'stable'
		} else {
			document.documentElement.style.overflow = ''
			document.documentElement.style.scrollbarGutter = ''
		}

		return () => {
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

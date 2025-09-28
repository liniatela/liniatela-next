import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0)
	const [documentHeight, setDocumentHeight] = useState(0)
	const [lastScrollY, setLastScrollY] = useState(0)
	const [isHeaderVisible, setIsHeaderVisible] = useState(true)

	useEffect(() => {
		const updateScrollPosition = () => {
			const currentScrollY = window.scrollY
			setScrollPosition(currentScrollY)
			setDocumentHeight(document.documentElement.scrollHeight - window.innerHeight)

			// Определяем направление скролла
			const isScrollingDown = currentScrollY > lastScrollY
			const isScrollingUp = currentScrollY < lastScrollY

			// Логика для показа/скрытия хедера
			if (isScrollingDown && currentScrollY > 100) {
				// Скрываем при скролле вниз (с небольшой задержкой в 100px)
				setIsHeaderVisible(false)
			} else if (isScrollingUp || currentScrollY <= 100) {
				// Показываем при скролле вверх или если находимся в топе страницы
				setIsHeaderVisible(true)
			}

			setLastScrollY(currentScrollY)
		}

		const handleScroll = () => {
			updateScrollPosition()
		}

		const handleResize = () => {
			updateScrollPosition()
		}

		// Инициализация
		updateScrollPosition()

		window.addEventListener('scroll', handleScroll, { passive: true })
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleResize)
		}
	}, [lastScrollY])

	const scrollPercentage = documentHeight > 0 ? (scrollPosition / documentHeight) * 100 : 0

	return {
		scrollPercentage,
		isHeaderVisible,
		scrollPosition
	}
}

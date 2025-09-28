'use client'

import { useState, useEffect } from 'react'
import { Button } from '../../button'
import { MenuIcon, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { MENU_ITEMS } from './constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useMenu } from '@/lib/hooks'

const Menu = () => {
	const { isMenuOpen, handleToggleMenu, handleCloseMenu, handleKeyDown } = useMenu()

	return (
		<div className='relative'>
			<Button
				className={cn(
					'transition-all duration-300 ease-in-out z-50 relative',
					isMenuOpen && 'bg-white text-primary hover:bg-white/90'
				)}
				variant={isMenuOpen ? 'white' : 'ghost'}
				onClick={handleToggleMenu}
				onKeyDown={handleKeyDown}
				aria-expanded={isMenuOpen}
				aria-controls='mobile-menu'
				aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
			>
				<motion.div
					initial={false}
					animate={{ rotate: isMenuOpen ? 90 : 0 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					{isMenuOpen ? <XIcon strokeWidth={1.5} /> : <MenuIcon strokeWidth={1.5} />}
				</motion.div>
				Меню
			</Button>


			{/* Меню всегда в DOM для SEO */}
			<nav
				className={cn(
					'h-[560px] lg:h-[460px] w-[320px]',
					'absolute right-0 top-0 lg:inset-0 z-40 pointer-events-none',
					isMenuOpen && 'pointer-events-auto'
				)}
				id='mobile-menu'
				aria-hidden={!isMenuOpen}
			>
				<AnimatePresence>
					{isMenuOpen && (
						<>
							{/* Фон меню */}
							<motion.div
								className='absolute -right-4 inset-0 lg:right-0 bg-primary rounded-2xl origin-top-right lg:origin-top-left'
								initial={{ opacity: 0, scaleX: 0, scaleY: 0, x: 0, y: 0 }}
								animate={{ opacity: 1, scaleX: 1, scaleY: 1, x: -8, y: -8 }}
								exit={{ opacity: 0, scaleX: 0, scaleY: 0, x: 0, y: 0 }}
								transition={{ duration: 0.4, ease: 'easeInOut' }}
							/>

							{/* Контент меню */}
							<motion.div
								className='absolute -inset-2 -right-2 lg:right-2 bottom-2 z-10 flex flex-col'
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.4, ease: 'easeOut' }}
							>
								<ul className='mt-15 p-6 flex flex-col gap-4'>
									{MENU_ITEMS.map((item, index) => (
										<motion.li
											key={item.id}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 20 }}
											transition={{
												duration: 0.6,
												delay: 0.1 + index * 0.1,
												ease: 'easeOut'
											}}
										>
											<Link
												className='block text-4xl lg:text-3xl text-white max-lg:text-end'
												href={item.href}
												onClick={handleCloseMenu}
												onKeyDown={e => {
													if (e.key === 'Enter' || e.key === ' ') {
														handleCloseMenu()
													}
												}}
												tabIndex={isMenuOpen ? 0 : -1}
											>
												{item.title}
											</Link>
										</motion.li>
									))}
									<motion.li
										className='lg:hidden'
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 20 }}
										transition={{
											duration: 0.6,
											delay: 0.1 + 6 * 0.1,
											ease: 'easeOut'
										}}
									>
										<Link
											className='block text-4xl lg:text-3xl text-white max-lg:text-end'
											href={'#'}
											onClick={handleCloseMenu}
											onKeyDown={e => {
												if (e.key === 'Enter' || e.key === ' ') {
													handleCloseMenu()
												}
											}}
											tabIndex={isMenuOpen ? 0 : -1}
										>
											Записаться
										</Link>
									</motion.li>
								</ul>

								{/* Социальные ссылки */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 20 }}
									transition={{
										duration: 0.6,
										delay: 0.1 + MENU_ITEMS.length * 0.1,
										ease: 'easeOut'
									}}
									className='mt-auto p-6 flex justify-end lg:justify-start gap-6'
								>
									<Link
										href='#'
										onClick={handleCloseMenu}
										className='text-white hover:text-white/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary rounded-lg px-2 py-1'
										tabIndex={isMenuOpen ? 0 : -1}
										aria-label='Instagram'
									>
										Instagram
									</Link>
									<Link
										href='#'
										onClick={handleCloseMenu}
										className='text-white hover:text-white/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary rounded-lg px-2 py-1'
										tabIndex={isMenuOpen ? 0 : -1}
										aria-label='Telegram'
									>
										Telegram
									</Link>
								</motion.div>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</nav>
		</div>
	)
}

export default Menu
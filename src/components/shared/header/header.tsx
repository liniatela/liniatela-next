'use client'

import Link from 'next/link'
import ButtonMenu from './menu'
import Image from 'next/image'

import logo from '@/icons/logo.svg'
import { Button } from '../button'
import { cn } from '@/lib/utils'
import { useScrollPosition } from '@/lib/hooks'

const Header = () => {
	const { scrollPercentage, isHeaderVisible } = useScrollPosition()
	const isSticky = scrollPercentage >= 5

	return (
		<>
			<header
				className={cn(
					'sticky top-0 inset-0 z-50 h-[60px] mt-[-60px] lg:h-[80px] lg:mt-[-80px] transition-transform duration-300 ease-in-out',
					isSticky && !isHeaderVisible ? '-translate-y-[120%]' : 'translate-y-[unset]',
					isSticky ? 'bg-black/30 backdrop-blur-2xl shadow-2xl lg:bg-transparent lg:backdrop-blur-none lg:shadow-none' : ''
				)}
			>
				<div className='container h-full'>
					<div className={cn(
						'flex gap-10 transition-all duration-300 flex-row-reverse lg:flex-row items-center justify-between relative h-full',
						isSticky ? 'lg:mt-4 lg:bg-black/50 lg:p-6 lg:rounded-3xl lg:backdrop-blur-2xl lg:shadow-2xl' : ''
					)}>
						<ButtonMenu />

						<Link
							className='block lg:lg:absolute lg:left-1/2 transform lg:-translate-x-1/2'
							href={'/'}
						>
							<Image src={logo} alt='' width={220} height={80} priority />
						</Link>

						<div className='space-x-2 hidden lg:block'>
							<Button variant={'white'}>Абонементы</Button>
							<Button>Записаться</Button>
						</div>
					</div>
				</div>
			</header>


		</>
	)
}

export default Header
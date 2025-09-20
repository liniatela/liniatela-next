import Link from 'next/link'
import ButtonMenu from './menu'
import Image from 'next/image'

import logo from '@/icons/logo.svg'
import { Button } from '../button'

function Header() {
	return (
		<header className='fixed inset-0 z-50 h-[80px]'>
			<div className='container h-full'>
				<div className='flex items-center justify-between relative h-full'>
					<ButtonMenu />

					<Link className='block absolute left-1/2 transform -translate-x-1/2' href={'/'}>
						<Image src={logo} alt='' width={220} height={80} priority />
					</Link>

					<div className='space-x-2'>
						<Button variant={'white'}>Абонементы</Button>
						<Button>Записаться</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

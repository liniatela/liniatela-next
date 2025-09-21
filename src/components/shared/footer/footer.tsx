import { CopyrightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { COMPANY_INFO, FOOTER_SECTIONS, SOCIAL_LINKS } from './constants'

import logo from '@/icons/short-logo.svg'

function Footer() {
	return (
		<footer id='contacts'>
			<div className='container'>
				<div className='bg-primary text-white rounded-[40px] p-10'>
					<div className='grid lg:grid-cols-[minmax(0,365px)_minmax(0,550px)] justify-between'>
						<header className='flex flex-col gap-6 mb-10'>
							<Image src={logo} width={45} height={45} alt='' />
							<h2 className='text-3xl leading-none tracking-tighter text-pretty'>
								{COMPANY_INFO.slogan}
							</h2>
							<p className='leading-none tracking-tighter text-balance'>
								{COMPANY_INFO.description}
							</p>
						</header>
						<nav className='grid sm:grid-cols-2 gap-10'>
							{/* Карта сайта */}
							<div>
								{FOOTER_SECTIONS.map(section => (
									<div key={section.title}>
										<h3 className='text-2xl mb-6 leading-none tracking-tighter'>
											{section.title}
										</h3>
										<ul className='space-y-4'>
											{section.links.map(link => (
												<li key={link.href}>
													<Link
														href={link.href}
														className='text-white hover:text-white/70 transition-colors leading-none tracking-tighter'
													>
														{link.title}
													</Link>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>

							{/* Социальные сети */}
							<div>
								<h3 className='text-2xl mb-6 leading-none tracking-tighter'>
									Социальные сети
								</h3>
								<ul className='space-y-4'>
									{SOCIAL_LINKS.map(social => (
										<li key={social.name}>
											<Link
												href={social.href}
												target='_blank'
												rel='noopener noreferrer'
												className='text-end text-white hover:text-white/70 transition-colors leading-none tracking-tighter'
											>
												{social.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<p className='text-xs my-6 text-white/50 mt-4 leading-none tracking-tighter sm:col-span-2'>
								{COMPANY_INFO.metaDisclaimer}
							</p>
						</nav>
					</div>
					<footer className='flex items-center justify-between gap-10 flex-wrap border-t pt-5 border-white/10'>
						<Link className='text-white hover:text-white/70 transition-colors' href={'/'}>Политика конфиденциальности</Link>
						<p className='inline-flex items-center gap-1 leading-none tracking-tighter'>
							<CopyrightIcon strokeWidth={1.5} size={20} />
							Все права защищены
						</p>
					</footer>
				</div>
			</div>
		</footer>
	)
}

export default Footer

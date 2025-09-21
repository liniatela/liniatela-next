import Image from 'next/image'

import backgroundImage from './images/background.jpg'

function Hero() {
	return (
		<section className='hero relative h-[105vh] overflow-hidden '>
			<div className='container h-full flex flex-col justify-center'>
				<div className='text-white space-y-3'>
					<p className='text-3xl tracking-tighter text-[#D8D8D8]'>
						Твоя гибкость — <br /> Это свобода быть собой{' '}
					</p>
					<h1 className='text-[80px] leading-none tracking-tighter'>Студия мягкого фитнеса</h1>
				</div>
			</div>
			<Image
				className='absolute -z-10 inset-0 w-full h-full object-cover object-bottom pointer-events-none brightness-40'
				src={backgroundImage}
				alt=''
				width={1920}
				height={800}
				priority
				sizes='(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px'
			/>
		</section>
	)
}

export default Hero

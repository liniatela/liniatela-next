import Image from 'next/image'

import backgroundImage from './images/background.jpg'

function Hero() {
	return (
		<section className='hero relative h-[105vh] overflow-hidden '>
			<div className='container h-full flex flex-col justify-center'>
				<div className='text-white space-y-3'>
					<p className='text-2xl lg:text-3xl tracking-tighter text-[#D8D8D8]'>
						Твоя гибкость — <br /> Это свобода быть собой{' '}
					</p>
					<h1 className='text-[40px] lg:text-[80px] leading-none tracking-tighter'>Студия мягкого фитнеса</h1>
				</div>
			</div>
			<div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
				<Image
					className="w-full h-full object-cover object-bottom"
					src={backgroundImage}
					alt=""
					width={1920}
					height={800}
					priority
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
				/>
				<div className="absolute inset-0 bg-black/60" aria-hidden="true" />
			</div>
		</section>
	)
}

export default Hero

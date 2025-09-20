import Image from 'next/image'

import backgroundImage from './images/background.jpg'

function Hero() {
	return (
		<section className='hero relative h-screen overflow-hidden'>
			<div className='container'></div>
			<Image
				className='absolute inset-0 w-full h-full object-cover object-bottom '
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

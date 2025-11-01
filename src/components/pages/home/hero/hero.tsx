import Image from 'next/image'

import backgroundImage from './images/background.jpg'
import PauseableVideo from '@/components/shared/pauseable-video'

function Hero() {
  return (
    <section className='hero relative h-[105vh] overflow-hidden '>
      <div className='container h-full flex flex-col justify-center'>
        <div className='text-white space-y-3 mt-60'>
          <p className='text-2xl lg:text-3xl tracking-tighter text-[#D8D8D8]'>
            Твоя гибкость — <br /> Это свобода быть собой{' '}
          </p>
          <h1 className='text-[40px] lg:text-[80px] leading-none tracking-tighter'>Студия мягкого фитнеса</h1>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
        <PauseableVideo
          className="absolute h-full w-full"
          videoClassName="h-full w-full object-cover"
          width={1920}
          height={1080}
          poster={backgroundImage.src}
        >
          <source src='/videos/hero/background.mp4' type="video/mp4" />
          <source src="/videos/pages/home/hero/background.webm" type="video/webm" />
        </PauseableVideo>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero

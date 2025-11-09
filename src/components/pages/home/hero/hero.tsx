import Image from 'next/image'

import backgroundImage from './images/background.jpg'
import PauseableVideo from '@/components/shared/pauseable-video'
import { getMediaAlt, getMediaImageUrl, getMediaVideoUrl, getPosterUrl, isVideo, SanityHero } from '@/sanity/lib'

interface HeroProps {
  hero: SanityHero
}

function Hero({ hero }: HeroProps) {
  const { subtitle, title, backgroundMedia } = hero

  const isVideoBackground = isVideo(backgroundMedia)
  const mediaAlt = getMediaAlt(backgroundMedia) || title

  return (
    <section className='hero relative h-[105vh] overflow-hidden '>
      <div className='container h-full flex flex-col justify-center'>
        <div className='text-white space-y-3 mt-60'>
          <p className='text-2xl lg:text-3xl tracking-tighter text-[#D8D8D8]' dangerouslySetInnerHTML={{ __html: subtitle }} />

          <h1 className='text-[40px] lg:text-[80px] leading-none tracking-tighter'>{title}</h1>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
        {isVideoBackground ? (
          // Если это видео
          <PauseableVideo
            className="absolute h-full w-full"
            videoClassName="h-full w-full object-cover"
            width={1920}
            height={1080}
            poster={getPosterUrl(backgroundMedia, { width: 1920, height: 1080 }) || undefined}
          >
            <source src={getMediaVideoUrl(backgroundMedia) || ''} type="video/mp4" />
          </PauseableVideo>
        ) : (
          // Если это изображение
          <Image
            src={getMediaImageUrl(backgroundMedia, {
              width: 1920,
              height: 1080,
              quality: 90,
              fit: 'crop'
            }) || ''}
            alt={mediaAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero

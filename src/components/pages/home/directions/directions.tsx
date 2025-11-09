
import Tag from '@/components/shared/ui/tag'

import { DirectionCarousel } from './carousel'


function Directions() {
  return (
    <section className='directions -mt-7 overflow-hidden select-none' id='directions'>
      <div className='bg-white rounded-4xl py-10 sm:py-20'>
        <div className='container flex flex-col gap-10'>
          <header className='flex flex-col items-start sm:flex-row sm:items-center sm:gap-8 gap-4'>
            <Tag>Направления</Tag>
            <h2 className='text-3xl [&_span]:text-muted-foreground leading-none tracking-tighter'>
              <span>Исследуй себя</span> через наши направления
            </h2>
          </header>

          <div className='relative'>
            <DirectionCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Directions

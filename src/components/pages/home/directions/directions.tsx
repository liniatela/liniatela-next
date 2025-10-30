'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselNavigationWithDots,
} from '@/components/shared/ui/carousel'
import Tag from '@/components/shared/ui/tag'
import Image from 'next/image'
import { Direction, MOCK_DIRECTIONS } from './constants'
import { Button } from '@/components/shared/ui/button'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/shared/ui/dialog'

import { cn } from '@/lib/utils'
import { FlameIcon } from 'lucide-react'

function Directions() {
  return (
    <section className='directions -mt-7 overflow-hidden select-none' id='directions'>
      <div className='bg-white rounded-4xl py-10 sm:py-20 '>
        <div className='container flex flex-col gap-10'>
          <header className='flex flex-col items-start sm:flex-row sm:items-center sm:gap-8 gap-4'>
            <Tag>Направления</Tag>
            <h2 className='text-3xl [&_span]:text-muted-foreground leading-none tracking-tighter'>
              <span>Исследуй себя</span> через наши направления
            </h2>
          </header>

          <div className='relative'>
            <Carousel
              className='w-full'
              opts={{
                align: 'start'
              }}
            >
              <CarouselContent>
                {MOCK_DIRECTIONS.map(direction => (
                  <CarouselItem
                    key={direction.id}
                    className='pl-4 basis-[90%] 2xs:basis-1/2 lg:basis-1/3'
                  >
                    <DirectionCard direction={direction} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <footer className='mt-10 flex flex-wrap-reverse justify-between gap-5 sm:gap-10 empty:hidden'>
                <CarouselNavigation />
                <p className='text-end text-muted-foreground leading-none tracking-tighter sm:block ml-auto'>
                  Запишись на практику, где тело отпускает, разум отдыхает, <br /> а ты
                  возвращаешься к себе.
                </p>
              </footer>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Directions

const DirectionCard = ({ direction }: { direction: Direction }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleOpenDialog = () => {
    setIsDialogOpen(true)
  }

  const haveGallery = direction.gallery && direction.gallery.length > 0

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <article
        className='group/card relative rounded-3xl overflow-hidden h-full min-h-[400px] transition-all shadow hover:shadow-2xl duration-300 cursor-pointer'
        onClick={handleOpenDialog}
      >
        <div className='p-6 h-full grid text-white'>
          <h3 className='text-4xl leading-none tracking-tighter break-words'>{direction.name}</h3>
          <div className='mt-auto'>
            <p className='text-lg text-white/90 leading-none tracking-tighter font-light'>
              {direction.shortDescription}
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center lg:opacity-0'></div>
        <div className='absolute inset-0 -z-10'>
          <Image
            className='object-cover w-full h-full transition-[filter]'
            src={direction.coverImage}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            alt={direction.name}
          />
          <div className='absolute inset-0 bg-black/40 transition-colors' aria-hidden='true' />
        </div>
      </article>
      <DialogContent className={cn('max-w-3xl max-h-screen max-lg:h-screen max-lg:rounded-none  lg:max-h-[90vh] overflow-visible p-4 sm:p-10',
        direction.gallery && direction.gallery.length > 0 ? 'max-w-5xl' : 'max-w-3xl'
      )}>
        <DialogClose className='absolute right-4 top-4 lg:-right-0 lg:-top-10 xl:-right-8  lg:text-white' />
        <div className={cn(
          'grid gap-10 overflow-y-auto',
          direction.gallery && direction.gallery.length > 0 ? 'lg:grid-cols-2' : ''
        )}>
          <div>
            <div className='flex flex-col h-full items-start'>
              <Tag variant={'outline'} size={'sm'}>Направление</Tag>
              <h2 className='text-4xl leading-none tracking-tighter mt-6'>{direction.name}</h2>
              <p className='text-lg leading-none tracking-tighter mt-6 text-black/80'>{direction.fullDescription}</p>
              <ul className='mt-6 space-y-4'>
                <li className='flex items-center gap-2'>
                  <span className='text-lg font-medium leading-none tracking-tighter'>Сложность&nbsp;:</span>
                  <span
                    className='flex items-center gap-1 border-none outline-none'
                    aria-label={`Сложность: ${direction.difficulty}`}
                    tabIndex={0}
                  >
                    {Array.from({ length: 3 }).map((_, idx) => (
                      <span
                        key={idx}
                        className={
                          idx < direction.difficulty
                            ? 'inline-block w-4 h-4 rounded-full bg-muted-foreground'
                            : 'inline-block w-4 h-4 rounded-full bg-whites border border-muted-foreground'
                        }
                        aria-hidden='true'
                      />
                    ))}
                    <span className='sr-only'>{direction.difficulty} из 3</span>
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-lg font-medium leading-none tracking-tighter'>Длительность&nbsp;:</span>
                  <span className='leading-none tracking-tighter'>
                    {direction.duration}
                  </span>
                </li>

                <li className='flex items-center gap-2'>
                  <span className='text-lg font-medium leading-none tracking-tighter inline-flex'> 🔥&nbsp;:</span>
                  <span className='leading-none tracking-tighter'>
                    {direction.calories} ккал
                  </span>
                </li>
              </ul>

              <div className='mt-auto pt-10'>

                <Button size={'lg'}>Записаться</Button>
              </div>
            </div>
          </div>
          {direction.gallery && direction.gallery.length > 0 && (
            <div>
              <Carousel className='w-full'>
                <CarouselContent className='rounded-3xl overflow-hidden'>
                  {direction.gallery.map((image, index) => (
                    <CarouselItem key={index} className='basis-full sm:basis-1/2 lg:basis-full'>
                      <div className='relative aspect-square rounded-3xl overflow-hidden'>
                        <Image
                          src={image}
                          alt={`${direction.name} галерея ${index + 1}`}
                          fill
                          className='pointer-events-none object-cover hover:scale-110 transition-transform duration-300'
                          sizes='400px'
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNavigationWithDots className='mt-4' />
              </Carousel>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
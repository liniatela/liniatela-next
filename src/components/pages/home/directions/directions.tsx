'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselNavigationWithDots,
} from '@/components/shared/carousel'
import Tag from '@/components/shared/tag'
import Image from 'next/image'
import { Direction, MOCK_DIRECTIONS } from './constants'
import { Button } from '@/components/shared/button'
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/shared/sheet'

import { cn } from '@/lib/utils'

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
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleOpenSheet = () => {
    setIsSheetOpen(true)
  }

  const haveGallery = direction.gallery && direction.gallery.length > 0

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <article
        className='group/card relative rounded-3xl overflow-hidden h-full min-h-[400px] transition-all shadow hover:shadow-2xl duration-300 cursor-pointer'
      >
        <div className='p-6 h-full grid  text-white'>
          <h3 className='text-4xl leading-none tracking-tighter break-words'>{direction.name}</h3>
          <div className='mt-auto'>

            <p className='text-lg text-white/90 leading-none tracking-tighter font-light'>
              {direction.shortDescription}
            </p>
            <div className='grid md:grid-cols-2 mt-6 gap-2'>
              <Button variant={'secondary'} className='shadow-2xl' type='button'>
                Записаться
              </Button>
              <SheetTrigger asChild>
                <Button variant={'ghost'} className='shadow-2xl' onClick={handleOpenSheet}>
                  Подробнее
                </Button>
              </SheetTrigger>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center lg:opacity-0'>

        </div>
        <div className="absolute inset-0 -z-10">
          <Image
            className="object-cover w-full h-full transition-[filter]"
            src={direction.coverImage}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={direction.name}
          />
          <div className="absolute inset-0 bg-black/40  transition-colors" aria-hidden="true" />
        </div>
      </article>

      <SheetContent
        side="right"
        className={cn(
          'py-4 px-6 lg:px-6 lg:py-6 overflow-y-auto overflow-x-hidden'
        )}
      >
        <div className='h-full flex flex-col'>
          <SheetHeader className='p-0'>
            <div className='flex flex-wrap items-center gap-3'>
              <SheetTitle className='text-4xl text-left'>{direction.name}</SheetTitle>
            </div>
          </SheetHeader>

          <div className='flex-1 overflow-y-auto overflow-x-hidden pr-2'>
            <div
              className={cn(
                'grid gap-8',

              )}
            >
              <div className='space-y-6 mt-2  '>
                {/* Основная информация */}
                <SheetDescription className='text-left leading-tight tracking-tighter max-w-[320px]'>
                  {direction.shortDescription}
                </SheetDescription>

                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className='text-sm leading-none tracking-tighter'>Длительность:</span>
                    <span className="text-muted-foreground text-sm leading-none tracking-tighter">{direction.duration}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className='text-sm leading-none tracking-tighter'>Калории:</span>
                    <span className="text-muted-foreground text-sm leading-none tracking-tighter">-{direction.calories} ккал</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className='text-sm leading-none tracking-tighter'>Категория:</span>
                    <span className="text-muted-foreground text-sm leading-none tracking-tighter">{direction.category}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className='text-sm leading-none tracking-tighter'>Сложность:</span>
                    <span className="flex items-center gap-1" aria-label={`Сложность: ${direction.difficulty}`} tabIndex={0}>
                      {Array.from({ length: 3 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={
                            idx < direction.difficulty
                              ? "inline-block w-2 h-2 rounded-full bg-primary"
                              : "inline-block w-2 h-2 rounded-full bg-muted-foreground/20"
                          }
                          aria-hidden="true"
                        />
                      ))}
                      <span className="sr-only">
                        {direction.difficulty} из 3
                      </span>
                    </span>
                  </li>
                </ul>

                {/* Полное описание */}
                <div>
                  <p className='leading-tight tracking-tighter'>{direction.fullDescription}</p>
                </div>
              </div>

              {/* Галерея */}
              {direction.gallery && direction.gallery.length > 0 && (
                <div className=''>
                  <Carousel className='w-full'>
                    <CarouselContent className='rounded-3xl'>
                      {direction.gallery.map((image, index) => (
                        <CarouselItem key={index} className='basis-1/2'>
                          <div className='relative aspect-square rounded-3xl overflow-hidden'>
                            <Image
                              src={image}
                              alt={`${direction.name} галерея ${index + 1}`}
                              fill
                              className='object-cover hover:scale-110 transition-transform duration-300'
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
          </div>

          {/* CTA кнопки в подвале */}
          <div className='flex items-center gap-4 mt-8 pt-6 border-t border-input'>
            <Button className='flex-1'>Записаться</Button>

          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
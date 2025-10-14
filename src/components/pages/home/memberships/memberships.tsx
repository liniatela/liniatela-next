'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation
} from '@/components/shared/carousel'
import Tag from '@/components/shared/tag'
import Image from 'next/image'
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/shared/accordion'
import { CreditCardIcon } from 'lucide-react'
import { getAllMemberships, Membership } from './constance'
import { ComparisonDialog } from './comparison/comparison-dialog'

function Memberships() {
  const [isComparisonOpen, setIsComparisonOpen] = useState(false)

  const memberships = getAllMemberships()

  return (
    <section className='memberships -mt-7 pt-30 sm:pt-50 overflow-hidden select-none' id='memberships'>
      <div className='container flex flex-col gap-5 sm:gap-10'>
        <header className='flex flex-col items-start sm:flex-row sm:items-center sm:gap-8 gap-4'>
          <Tag>Абонементы</Tag>
          <h2 className='text-3xl [&_span]:text-muted-foreground leading-none tracking-tighter'>
            <span>Твоя свобода</span> — в выборе формата
          </h2>

          <Button size={'lg'} variant={'white'} className='sm:ml-auto' onClick={() => setIsComparisonOpen(true)}>
            Сравнить абонементы
          </Button>
        </header>

        <div className='relative'>
          <Carousel
            className='w-full'
            opts={{
              align: 'start'
            }}
          >
            <CarouselContent>
              {memberships.map(membership => (
                <CarouselItem
                  key={membership.id}
                  className='pl-4 basis-[90%] xs:basis-[80%] sm:basis-1/2 lg:basis-1/3'
                >
                  <MembershipCard membership={membership} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <footer className='mt-5 sm:mt-10 flex flex-wrap-reverse justify-between items-center gap-5 empty:hidden'>
              <CarouselNavigation />
              <p className='text-end text-muted-foreground leading-none tracking-tighter hidden sm:block ml-auto'>
                Выбери свой путь к гармонии <br /> тела и души
              </p>
            </footer>
          </Carousel>
        </div>
      </div>
      <ComparisonDialog
        open={isComparisonOpen}
        onOpenChange={setIsComparisonOpen}
      />
    </section>

  )
}

export default Memberships

const MembershipCard = ({ membership }: { membership: Membership }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleOpenSheet = () => {
    setIsSheetOpen(true)
  }

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <article
        className='group/card relative rounded-3xl overflow-hidden h-full min-h-[400px] transition-all shadow hover:shadow-2xl duration-300 cursor-pointer'
      >
        <div className='p-6 h-full grid text-white'>
          <div>
            <h3 className='text-4xl leading-none tracking-tighter mb-4 break-words'>{membership.title}</h3>

            <Tag variant={'white'} size={'lg'}>
              {membership.price.toLocaleString()} ₽
            </Tag>

          </div>

          <div className='mt-auto'>



            <p className='mt-4 text-white/90 font-light text-lg leading-none tracking-tighter mb-4 line-clamp-3'>
              {membership.shortDescription}
            </p>
            <div className='grid md:grid-cols-2 mt-6 gap-2'>
              <Button variant={'secondary'} className='shadow-2xl' type='button'>
                Приобрести
              </Button>
              <SheetTrigger asChild>
                <Button variant={'ghost'} className='shadow-2xl' onClick={handleOpenSheet}>
                  Подробнее
                </Button>
              </SheetTrigger>
            </div>

          </div>
        </div>


        <div className="absolute inset-0 -z-10">
          <Image
            className="object-cover w-full h-full transition-[filter]"
            src={membership.coverImage}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={membership.title}
          />
          <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/40 transition-colors" aria-hidden="true" />
        </div>
      </article>

      <SheetContent
        side="right"
        className='py-4 px-6 lg:px-8 lg:py-6 overflow-visible'
      >
        <div className='h-full flex flex-col'>
          <div className="mb-6 relative max-h-[266px] rounded-3xl overflow-hidden">
            <Image
              className="object-cover w-full h-full max-sm:max-h-[180px]"
              src={membership.coverImage}
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
              alt={membership.title}
            />
            <div
              className="absolute inset-0 bg-black/40 pointer-events-none rounded-3xl"
              aria-hidden="true"
            />
            <SheetHeader className='absolute left-4 top-4 right-4 p-0 mb-6'>
              <div className='flex flex-wrap items-center gap-3 mb-2 w-full'>
                <SheetTitle className='text-2xl text-left text-white'>{membership.title}</SheetTitle>
                <Tag variant={'white'} size={'md'} className='ml-auto'>
                  {membership.price.toLocaleString()} ₽ / {membership.duration}
                </Tag>

              </div>
              <SheetDescription className='text-base text-left leading-relaxed text-white'>
                {membership.shortDescription}
              </SheetDescription>
            </SheetHeader>
          </div>

          <div className='flex-1 overflow-y-auto overflow-x-hidden pr-2 space-y-10'>
            <div className='space-y-10'>
              <div>
                <p>{membership.longDescription}</p>
              </div>

              <div className='p-4 bg-muted rounded-xl space-y-6'>
                <div className='flex items-start gap-3'>

                  <div>
                    <p className='text-sm font-medium'>Срок действия</p>
                    <p className='text-muted-foreground'>{membership.validityPeriod}</p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>

                  <div>
                    <p className='text-sm font-medium'>Количество занятий</p>
                    <p className='text-muted-foreground'>
                      Неограниченное посещение
                    </p>
                  </div>
                </div>

                {membership.freeze.available && (
                  <div className='flex items-start gap-3'>
                    <div>
                      <p className='text-sm font-medium'>Заморозка</p>
                      <p className='text-muted-foreground'>
                        {membership.freeze.duration}
                        {membership.freeze.conditions && ` — ${membership.freeze.conditions}`}
                      </p>
                    </div>
                  </div>
                )}

                {membership.pricePerSession && (
                  <div className='flex items-start gap-3'>

                    <div>
                      <p className='font-medium text-sm'>Стоимость одного занятия</p>
                      <p className='text-sm text-muted-foreground'>{membership.pricePerSession} ₽</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Направления */}
            {/* <div className='space-y-3'>
              <h3 className='text-sm'>Включенные направления</h3>
              <div className='flex flex-wrap gap-2'>
                {membership.includedDirections.map((direction, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium'
                  >
                    {direction}
                  </span>
                ))}
              </div>
              {membership.excludedDirections && membership.excludedDirections.length > 0 && (
                <p className='text-sm text-muted-foreground'>
                  Не включено: {membership.excludedDirections.join(', ')}
                </p>
              )}
            </div> */}


            {/* Для кого подходит */}
            <div className='space-y-3'>
              <h3 className='text-sm'>Подходит для</h3>
              <div className='flex flex-wrap gap-2'>
                {membership.suitableFor.map((level, index) => (
                  <span key={index} className='px-3 py-1 bg-white  text-primary  rounded-full text-sm border border-primary'>
                    {level}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ Аккордион */}
            <div className='overflow-hidden'>
              <Accordion type="single" className='w-full' defaultValue='0'>
                {membership.faq.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className='px-4 hover:no-underline'>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className='px-4'>
                      <div className='leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_p]:mb-2 last:[&_p]:mb-0 [&_strong]:font-medium [&_a]:text-primary [&_a]:underline'>
                        {typeof item.answer === 'string' ? item.answer : item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>

          {/* CTA кнопки в подвале */}
          <div className='flex flex-col gap-3 mt-8 pt-6 border-t border-input'>
            <Button className='w-full' size='lg'>
              <CreditCardIcon className='size-4 mr-2' />
              Приобрести абонемент
            </Button>


          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
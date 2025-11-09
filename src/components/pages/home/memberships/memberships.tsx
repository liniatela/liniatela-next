'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation
} from '@/components/shared/ui/carousel'
import Tag from '@/components/shared/ui/tag'
import Image from 'next/image'
import { Button } from '@/components/shared/ui/button'
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/shared/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/shared/ui/accordion'
import { Salad, Snowflake, Sparkles, User2 } from 'lucide-react'
import { getAllMemberships, Membership } from './constance'
import { ComparisonDialog } from './comparison/comparison-dialog'
import { cn } from '@/lib/utils'

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

          {/* <Button size={'lg'} variant={'secondary'} className='sm:ml-auto max-lg:hidden' onClick={() => setIsComparisonOpen(true)}>
            Сравнить абонементы
          </Button> */}
        </header>

        <div className='relative'>
          <Carousel
            className='w-full'
            opts={{
              align: 'start',
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
          <div className='mt-5 flex justify-center'>
            <Button size={'lg'} variant={'default'} onClick={() => setIsComparisonOpen(true)}>
              Сравнить абонементы
            </Button>
          </div>
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

  const showProTrainerPrice = membership.id === '5' || membership.id === '6'

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <article
        className='group/card relative rounded-3xl overflow-hidden h-full min-h-[400px] transition-all shadow hover:shadow-2xl duration-300 cursor-pointer' onClick={handleOpenSheet}
      >
        <div className='p-6 h-full grid text-white'>
          <div>
            <h3 className='text-4xl leading-none tracking-tighter mb-4 break-words'>{membership.title}</h3>
            <Tag variant={'white'} size={'lg'}>
              {membership.price.toLocaleString()}&nbsp;₽
              {membership.duration && (
                <>
                  /&nbsp;<span className=' text-white/90'>{membership.duration}</span>
                </>
              )}
            </Tag>



          </div>

          <div className='mt-auto'>
            <p className='mt-4 text-white/90 font-light text-lg leading-none tracking-tighter mb-4 line-clamp-3'>
              {membership.shortDescription}
            </p>
            <div className='grid md:grid-cols-2 mt-6 gap-2'>
              <Button variant={'ghost'} className='shadow-2xl' type='button' onClick={(e) => e.stopPropagation()}>
                Приобрести
              </Button>
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
        className={cn(
          'py-4 px-6 lg:px-6 lg:py-6 overflow-y-auto overflow-x-hidden text-black'
        )}
      >
        <div className='h-full flex flex-col'>
          <SheetHeader className='p-0'>
            <div className='flex flex-wrap items-center gap-3 mb-4'>
              <SheetTitle className='text-4xl text-left font-normal'>{membership.title}</SheetTitle>

            </div>
          </SheetHeader>


          <div className='flex-1 overflow-y-auto overflow-x-hidden pr-2 space-y-10'>
            <div className='space-y-4'>
              <SheetDescription>{membership.shortDescription}</SheetDescription>


              {showProTrainerPrice && membership.pricePerSessionPro ? (
                <div className='space-y-2 text-black'>
                  <Tag variant={'outline'} size={'lg'}>
                    {membership.pricePerSession?.toLocaleString()}&nbsp;₽
                    <span className='text-white/90'></span>
                  </Tag>
                  <p className='text-sm font-light tracking-tight'>
                    с PRO тренером:
                  </p>
                  <Tag variant={'blue'} size={'lg'}>
                    {membership.pricePerSessionPro.toLocaleString()}&nbsp;₽
                    <span className='text-white/90'></span>
                  </Tag>
                </div>
              ) :
                <Tag variant={'blue'} size={'lg'} className='ml-auto'>
                  {membership.price.toLocaleString()} ₽ {membership.duration && (
                    <>
                      / &nbsp;<span className=' text-white/90'>{membership.duration}</span>
                    </>
                  )}
                </Tag>
              }

            </div>
            <div className='space-y-10'>
              <div>
                <p className='text-lg leading-tight tracking-tighter'>{membership.longDescription}</p>
              </div>

              <div className='p-4 bg-primary/5 max-w-max rounded-xl space-y-6 grid'>
                <div className='flex items-start gap-3'>
                  <div>
                    <p className='font-medium leading-normal tracking-tighter'>Срок действия</p>
                    <p className='text-muted-foreground leading-normal tracking-tighter'>{membership.validityPeriod}</p>
                  </div>
                </div>

                {membership.sessionsCount && (
                  <div className='flex items-start gap-3'>
                    <div>
                      <p className='font-medium leading-normal tracking-tighter'>Количество занятий</p>
                      <p className='text-muted-foreground leading-normal tracking-tighter'>
                        {membership.sessionsCount === 'unlimited'
                          ? 'Неограниченное посещение'
                          : `${membership.sessionsCount} занятий${membership.sessionsPerWeek ? ` (${membership.sessionsPerWeek})` : ''}`
                        }
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Блок с тарифами на 3 и 6 месяцев */}
            {membership.pricing && (membership.pricing['3'] || membership.pricing['6']) && (
              <div className='space-y-4'>
                <h3 className='text-xl font-medium leading-none tracking-tighter'>Специальные предложения</h3>

                <div className='grid gap-4'>
                  {/* 3 месяца */}
                  {membership.pricing['3'] && (
                    <div className='p-4 border border-input rounded-xl space-y-3 '>
                      <div className='flex items-start justify-between'>
                        <h4 className='text-lg font-medium leading-none tracking-tighter'>3 месяца</h4>
                        <div className='text-right'>
                          <p className='text-2xl font-semibold leading-none tracking-tighter'>
                            {membership.pricing['3'].price.toLocaleString()} ₽
                          </p>
                          {membership.pricing['3'].savings && (
                            <p className='text-sm text-primary mt-1'>
                              Выгода {membership.pricing['3'].savings.toLocaleString()} ₽
                            </p>
                          )}
                        </div>
                      </div>

                      <div className='space-y-2'>
                        {membership.pricing['3'].freeze && (
                          <div className='flex items-center gap-2 text-sm'>
                            <Snowflake className='w-4 h-4 text-primary' />
                            <span>Заморозка {membership.pricing['3'].freeze}</span>
                          </div>
                        )}
                        {membership.pricing['3'].personalTraining && membership.pricing['3'].personalTraining > 0 && (
                          <div className='flex items-center gap-2 text-sm'>
                            <User2 className='w-4 h-4 text-primary' />
                            <span>{membership.pricing['3'].personalTraining} {membership.pricing['3'].personalTraining === 1 ? 'индивидуальная тренировка' : 'индивидуальные тренировки'}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* 6 месяцев */}
                  {membership.pricing['6'] && (
                    <div className='p-4 border-2 border-primary/40 rounded-xl space-y-3 relative'>

                      <div className='flex items-start justify-between'>
                        <h4 className='text-lg font-medium leading-none tracking-tighter'>6 месяцев</h4>
                        <div className='text-right'>
                          <p className='text-2xl font-semibold leading-none tracking-tighter'>
                            {membership.pricing['6'].price.toLocaleString()} ₽
                          </p>
                          {membership.pricing['6'].savings && (
                            <p className='text-sm text-primary mt-1'>
                              Выгода {membership.pricing['6'].savings.toLocaleString()} ₽
                            </p>
                          )}
                        </div>
                      </div>

                      <div className='space-y-2'>
                        {membership.pricing['6'].freeze && (
                          <div className='flex items-center gap-2 text-sm'>
                            <Snowflake className='w-4 h-4 text-primary' />
                            <span>Заморозка {membership.pricing['6'].freeze}</span>
                          </div>
                        )}
                        {membership.pricing['6'].personalTraining && membership.pricing['6'].personalTraining > 0 && (
                          <div className='flex items-center gap-2 text-sm'>
                            <User2 className='w-4 h-4 text-primary' />
                            <span>{membership.pricing['6'].personalTraining} {membership.pricing['6'].personalTraining === 1 ? 'индивидуальная тренировка' : 'индивидуальные тренировки'} с PRO-тренером</span>
                          </div>
                        )}
                        {membership.pricing['6'].massage && (
                          <div className='flex items-center gap-2 text-sm'>
                            <Sparkles className='w-4 h-4 text-primary' />
                            <span>Массаж в подарок</span>
                          </div>
                        )}
                        {membership.pricing['6'].nutritionist && (
                          <div className='flex items-center gap-2 text-sm'>
                            <Salad className='w-4 h-4 text-primary' />
                            <span>Консультация нутрициолога</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Для кого подходит */}
            <div className='space-y-3'>
              <h3 className=''>Подходит для</h3>
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
              <Accordion type="single" className='w-full' collapsible defaultValue='0'>
                {membership.faq.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className='px-4 hover:no-underline'>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className='px-4'>
                      <div className='leading-tight [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_p]:mb-2 last:[&_p]:mb-0 [&_strong]:font-medium [&_a]:text-primary [&_a]:underline'>
                        {typeof item.answer === 'string' ? item.answer : item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>

          {/* CTA кнопки в подвале */}
          <div className='flex flex-col gap-3 mt-6'>
            <Button className='w-full' size='lg'>
              Приобрести
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
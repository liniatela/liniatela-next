'use client'

import Tag from '@/components/shared/ui/tag'
import { Button } from '@/components/shared/ui/button'
import Image from 'next/image'
import { Gift, Heart, Calendar, Sparkles } from 'lucide-react'
import { useState } from 'react'
import CertificateFormDialog from './form-dialog/certificate-form-dialog'

const Certificate = () => {
  const [openForm, setOpenForm] = useState(false)

  const handleOpenForm = () => {
    setOpenForm(true)
  }

  return (
    <>
      <section className='certificate my-20 overflow-hidden' id='certificate'>
        <div className=''>
          <div className='container  rounded-4xl py-10 sm:py-20'>
            <header className='flex flex-col items-start sm:flex-row sm:items-center sm:gap-8 gap-4 mb-10'>
              <Tag>Подарочные сертификаты</Tag>
              <h2 className='text-3xl [&_span]:text-muted-foreground leading-none tracking-tighter'>
                <span>Подари</span> заботу о теле и душе
              </h2>
            </header>

            <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
              {/* Левая часть - визуальная карточка */}
              <div className='relative group'>
                <div className='relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg'>
                  <div className='absolute inset-0 bg-gradient-to-br from-primary to-primary/70 p-8 sm:p-12 flex flex-col justify-between'>
                    <div>
                      <Gift className='size-8 sm:size-12 lg:size-16 text-white mb-4' strokeWidth={1} />
                      <h3 className='text-white text-3xl lg:text-4xl leading-none tracking-tighter'>
                        Подарочный<br />сертификат
                      </h3>
                    </div>
                    <div className='flex items-end justify-between'>
                      <div className='text-white/90'>
                        <p className='text-sm sm:text-base leading-none tracking-tighter'>от</p>
                        <p className='text-4xl sm:text-5xl leading-none tracking-tighter '>3&nbsp;000&nbsp;₽</p>
                      </div>
                      <Sparkles className='size-8 sm:size-12 lg:size-16 text-white/80' strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Правая часть - информация */}
              <div className='flex flex-col gap-10'>
                <p className='text-lg sm:text-xl text-black/70 leading-tight tracking-tighter'>
                  Подарочный сертификат — это возможность подарить близким заботу о здоровье,
                  гармонию тела и разума, а также незабываемый опыт практик йоги и пилатеса.
                </p>

                <ul className='space-y-4'>
                  <li className='flex items-start gap-3'>
                    <div className='rounded-full bg-white/40 p-2 mt-1'>
                      <Gift className='w-5 h-5  text-primary' />
                    </div>
                    <div>
                      <h4 className='font-medium text-lg leading-none tracking-tighter mb-2'>
                        Любой номинал
                      </h4>
                      <p className='text-muted-foreground leading-snug tracking-tighter'>
                        Выберите сумму от 3 000₽ или количество занятий
                      </p>
                    </div>
                  </li>

                  <li className='flex items-start gap-3'>
                    <div className='rounded-full bg-white/40 p-2 mt-1'>
                      <Calendar className='w-5 h-5 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-medium text-lg leading-none tracking-tighter mb-2'>
                        Срок действия 6 месяцев
                      </h4>
                      <p className='text-muted-foreground leading-snug tracking-tighter'>
                        Достаточно времени, чтобы воспользоваться подарком
                      </p>
                    </div>
                  </li>

                  <li className='flex items-start gap-3'>
                    <div className='rounded-full bg-white/40 p-2 mt-1'>
                      <Heart className='w-5 h-5 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-medium text-lg leading-none tracking-tighter mb-2'>
                        Все направления
                      </h4>
                      <p className='text-muted-foreground leading-snug tracking-tighter'>
                        Можно использовать на любые практики и занятия
                      </p>
                    </div>
                  </li>
                </ul>

                <div className='flex flex-wrap gap-4 mt-4'>
                  <Button size='lg' className='min-w-[200px]'>
                    Оформить
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CertificateFormDialog open={openForm} onOpenChange={setOpenForm} />
    </>
  )
}

export default Certificate
'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from '@/components/shared/ui/dialog'
import { InfinityIcon, MinusIcon, PlusCircleIcon, SaladIcon, SnowflakeIcon, SparklesIcon, User2Icon, UserPlus2Icon } from 'lucide-react'
import { COMPARISON_MEMBERSHIPS } from './constants'
import { cn } from '@/lib/utils'
import React from 'react'



export const ComparisonDialog = ({
  open,
  onOpenChange
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) => {
  const iconMap = {
    PlusCircle: PlusCircleIcon,
    Infinity: InfinityIcon,
    User2: User2Icon,
    Snowflake: SnowflakeIcon,
    Sparkles: SparklesIcon,
    UserPlus2: UserPlus2Icon,
    Salad: SaladIcon,
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-md:max-w-screen max-md:w-screen max-md:h-screen max-md:max-h-screen max-md:rounded-none md:max-h-[90vh] p-0 lg:max-w-7xl'>
        <DialogHeader className='sticky top-0 z-10 bg-white p-4 md:p-8 !pb-2'>
          <DialogTitle className='text-2xl lg:text-3xl'>Сравнить абонементы</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <div className='overflow-x-auto overflow-y-auto px-4 pb-6 md:px-8 '>

          <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {COMPARISON_MEMBERSHIPS.map((membership) => {
              return (
                <li key={membership.id}>
                  <article className='p-4 border rounded-3xl border-input/50 shadow-lg'>
                    <h3 className='leading-none font-medium tracking-tighter text-2xl xl:text-3xl mb-4'>{membership.name}</h3>
                    <div>
                      {membership.plans.map((plan, planIndex) => (
                        <React.Fragment key={planIndex}>
                          <div key={plan.duration} className='grid gap-1 xl:grid-cols-[80px_1fr_1fr] text-sm p-2 px-4 items-center justify-center border rounded-2xl border-input'>
                            <p className='leading-none tracking-tighter text-center xl:text-start'>{plan.duration}</p>
                            {plan.savings ? <div className=' ml-auto whitespace-nowrap py-1 px-2 rounded-full text-[12px] bg-primary text-primary-foreground max-w-max'>экономия {plan.savings}&nbsp;₽</div> : <div></div>}
                            <div className='ml-auto  text-2xl font-semibold text-primary tracking-tighter'>{plan.price}&nbsp;₽</div>
                          </div>

                          <ul className="flex flex-col gap-2 mt-2 pl-4 my-4">
                            {plan.benefits.map((benefit, index) => (
                              <li
                                key={benefit.text}
                                className={cn(
                                  'inline-flex gap-2 items-center',
                                  'marker:text-primary text-primary text-sm',
                                  'tracking-tighter',
                                  !benefit.highlighted && 'text-black',
                                  planIndex === 0 && 'text-black'

                                )}
                              >
                                {planIndex === 0 &&
                                  <MinusIcon size={14} />
                                }
                                {!benefit.highlighted &&
                                  <MinusIcon size={14} />
                                }
                                {planIndex !== 0 && benefit.highlighted && (
                                  <PlusCircleIcon size={14} />
                                )}
                                <span>{benefit.text}</span>
                              </li>
                            ))}
                          </ul>
                        </React.Fragment>
                      ))}
                    </div>

                  </article>
                </li>
              )
            })}
          </ul>


        </div>
      </DialogContent>
    </Dialog>
  )
}
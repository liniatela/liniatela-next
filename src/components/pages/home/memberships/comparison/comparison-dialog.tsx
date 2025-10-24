'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from '@/components/shared/dialog'
import { InfinityIcon, PlusCircleIcon, SaladIcon, SnowflakeIcon, SparklesIcon, User2Icon, UserPlus2Icon } from 'lucide-react'
import { COMPARISON_MEMBERSHIPS } from './constants'
import Tag from '@/components/shared/tag'
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
      <DialogContent className='max-md:max-w-screen max-md:w-screen max-md:h-screen max-md:max-h-screen max-md:rounded-none md:max-h-[90vh]  p-0'>
        <DialogHeader className='sticky top-0 z-10 bg-white p-4 md:p-8 !pb-2'>
          <DialogTitle className='text-2xl lg:text-3xl'>Сравнить абонементы</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <div className='overflow-x-auto overflow-y-auto px-4 pb-6 md:px-8 '>

          <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {COMPARISON_MEMBERSHIPS.map((membership) => {
              return (
                <li key={membership.id}>
                  <article className='p-4 border rounded-3xl border-input'>
                    <h3 className='leading-none tracking-tighter text-2xl xl:text-3xl text-center mb-7'>{membership.name}</h3>
                    <div>
                      {membership.plans.map((plan, planIndex) => (
                        <React.Fragment key={planIndex}>
                          <div key={plan.duration} className='grid gap-1   xl:grid-cols-3 text-sm p-3 bg-primary/5 rounded-xl items-center justify-center'>
                            <p className='leading-none tracking-tighter text-center text-[12px] xl:text-start'>{plan.duration}</p>
                            <div className='text-2xl font-semibold text-primary mx-auto tracking-tighter'>{plan.price}&nbsp;₽</div>
                            {plan.savings && <div className=' ml-auto whitespace-nowrap py-1 px-2 rounded-full text-[12px] bg-primary text-primary-foreground max-w-max'>выгода {plan.savings}&nbsp;₽</div>}
                          </div>

                          <ul className="flex flex-col gap-2 mt-2 pl-6 my-4 list-disc">
                            {plan.benefits.map((benefit, index) => (
                              <li
                                key={benefit.text}
                                className={cn(
                                  'marker:text-primary text-primary text-sm',
                                  'tracking-tighter',
                                  !benefit.highlighted && 'font-light text-muted-foreground marker:text-muted-foreground',
                                  planIndex === 0 && 'text-black'

                                )}
                              >
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
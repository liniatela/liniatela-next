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
      <DialogContent className='max-md:max-w-screen max-md:w-screen max-md:h-screen max-md:max-h-screen max-md:rounded-none max-w-2xl p-0'>
        <DialogHeader className='sticky top-0 z-10 bg-white p-4 md:p-8 !pb-2'>
          <DialogTitle className='text-2xl lg:text-3xl'>Сравнить абонементы</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <div className='overflow-x-auto overflow-y-auto max-h-[calc(90vh-80px)] px-4 pb-6 md:px-8 '>

          <ul className='grid grid-cols-1 gap-10'>
            {COMPARISON_MEMBERSHIPS.map((membership) => {
              return (
                <li key={membership.id} className={membership.isPopular ? 'relative' : ''}>
                  {membership.isPopular && (
                    <span
                      className="absolute top-0 right-4 z-20 -translate-y-1/2 bg-white border border-primary text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-sm select-none"
                      tabIndex={0}
                      aria-label="Популярно"
                      role="status"
                    >
                      Популярно
                    </span>
                  )}

                  <article
                    className={
                      membership.isPopular
                        ? 'border-2 border-primary/60 ring-3 ring-primary/20 rounded-xl overflow-hidden'
                        : 'border border-input rounded-xl overflow-hidden'
                    }
                  >
                    <div className='overflow-x-auto'>
                      <table className='w-full text-sm'>
                        <thead>
                          <tr className='border-b border-input'>
                            <th className='text-left p-4 font-normal w-[150px] lg:w-[150px]'>
                              <h3 className='text-2xl tracking-tighter leading-none'>
                                {membership.name}
                              </h3>
                            </th>
                            <th className='text-left p-4 font-light text-muted-foreground text-sm tracking-tighter leading-none'>
                              Преимущества
                            </th>
                            <th className='text-right p-4 font-light text-muted-foreground text-sm tracking-tighter leading-none'>
                              Стоимость
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {membership.plans.map((plan, planIndex) => (
                            <tr key={planIndex} className='border-t border-input'>
                              <td className='p-4 font-light  whitespace-nowrap align-top tracking-tighter leading-none'>
                                {plan.duration}
                              </td>
                              <td className='p-4 align-top'>
                                <ul className='flex flex-col space-y-2'>
                                  {plan.benefits.map((benefit, benefitIndex) => {
                                    const BenefitIcon = iconMap[benefit.icon as keyof typeof iconMap];

                                    return (
                                      <li
                                        key={benefitIndex}
                                        className={`max-md:whitespace-nowrap inline-flex items-start gap-2 tracking-tighter  ${benefit.highlighted
                                          ? ''
                                          : 'font-light text-muted-foreground'
                                          }`}
                                      >
                                        <BenefitIcon
                                          className={`flex-shrink-0 mt-0.5 ${benefit.highlighted
                                            ? 'text-primary'
                                            : 'text-muted-foreground'
                                            }`}
                                          size={14}
                                        />
                                        <span>{benefit.text}</span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </td>
                              <td className='p-4 text-right whitespace-nowrap align-top'>
                                <p className='text-xl font-medium text-primary lining-nums tracking-tighter leading-none'>
                                  {plan.price}&nbsp;₽
                                </p>
                                {plan.savings && (
                                  <p className='text-xs text-secondary-foreground bg-secondary px-2 py-1 rounded-full mt-1 inline-block'>
                                    выгода {plan.savings}&nbsp;₽
                                  </p>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
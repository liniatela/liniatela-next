'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from '@/components/shared/ui/dialog'
import { CircleQuestionMark, InfinityIcon, MinusIcon, PlusCircleIcon, SaladIcon, SnowflakeIcon, SparklesIcon, User2Icon, UserPlus2Icon } from 'lucide-react'
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

  // Функция для получения цены за месяц (базовый план)
  const getMonthlyPrice = (membership: typeof COMPARISON_MEMBERSHIPS[0]) => {
    return membership.plans[0]?.price || '0';
  };

  // Получаем основные характеристики из первого плана
  const getMainFeatures = (membership: typeof COMPARISON_MEMBERSHIPS[0]) => {
    return membership.plans[0]?.benefits || [];
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-md:max-w-screen max-md:w-screen max-md:h-screen max-md:max-h-screen max-md:rounded-none md:max-h-[90vh] p-0 lg:max-w-7xl'>
        <DialogHeader className='sticky top-0 z-10 bg-white p-4 md:p-8 !pb-2'>
          <DialogTitle className='text-2xl lg:text-3xl'>Сравнить абонементы</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <div className='overflow-x-auto overflow-y-auto px-4 pb-6 md:px-8'>
          <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 h-full'>
            {COMPARISON_MEMBERSHIPS.map((membership) => {
              const monthlyPrice = getMonthlyPrice(membership);
              const mainFeatures = getMainFeatures(membership);

              return (
                <li key={membership.id}>
                  <article className='p-5 border rounded-3xl border-input/50 shadow-lg h-full'>
                    {/* Заголовок с ценой */}
                    <div className='mb-4'>
                      <h3 className='leading-none font-medium tracking-tighter text-2xl xl:text-3xl mb-3'>
                        {membership.name}
                      </h3>
                      <p className='text-2xl font-bold text-primary tracking-tighter'>
                        {monthlyPrice}&nbsp;₽ / мес.
                      </p>
                    </div>

                    {/* Основные характеристики в виде бейджей */}
                    <div className='flex flex-wrap gap-2 mb-6'>
                      {mainFeatures.map((feature, index) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap];
                        return (
                          <div
                            key={index}
                            className='inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium tracking-tight'
                          >
                            {Icon && <Icon size={16} />}
                            <span>{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Планы с периодами */}
                    <div className='space-y-4'>
                      {membership.plans.map((plan, planIndex) => {
                        // Пропускаем первый план, так как он уже показан вверху
                        if (planIndex === 0 && membership.plans.length > 1) return null;

                        // Рассчитываем цену за платеж для многомесячных планов
                        const durationMonths = plan.duration.includes('3') ? 3 : plan.duration.includes('6') ? 6 : 1;
                        const totalPrice = parseInt(plan.price.replace(/\s/g, ''));
                        const monthlyPayment = durationMonths > 1 ? Math.round(totalPrice / 4) : totalPrice;
                        const paymentsCount = durationMonths > 1 ? 4 : 1;

                        // Получаем только дополнительные бонусы (highlighted)
                        const bonuses = plan.benefits.filter(b => b.highlighted);

                        return (
                          <div key={planIndex} className='border rounded-2xl border-input p-4'>
                            {/* Заголовок плана */}
                            <div className='mb-3'>
                              <div className='flex items-center justify-between mb-2'>
                                <p className='font-semibold text-lg tracking-tight'>
                                  {plan.duration}
                                </p>
                                {/* {plan.savings && (
                                  <div className='whitespace-nowrap py-1 px-2.5 rounded-full text-xs bg-secondary text-secondary-foreground font-medium'>
                                    экономия {plan.savings}&nbsp;₽
                                  </div>
                                )} */}
                              </div>

                              {/* Цена и количество платежей */}
                              {durationMonths > 1 ? (
                                <p className='text-2xl font-bold text-primary tracking-tighter inline-flex items-center'>
                                  {monthlyPayment.toLocaleString('ru-RU')}&nbsp;₽ × {paymentsCount} плат.&nbsp;<CircleQuestionMark size={16} className='text-muted-foreground' />
                                </p>
                              ) : (
                                <p className='text-2xl font-bold text-primary tracking-tighter'>
                                  {totalPrice.toLocaleString('ru-RU')}&nbsp;₽
                                </p>
                              )}
                            </div>

                            {/* Бонусы */}
                            {bonuses.length > 0 && (
                              <div>
                                <p className='text-sm font-medium text-muted-foreground mb-2'>
                                  Бонусы:
                                </p>
                                <ul className='space-y-2'>
                                  {bonuses.map((bonus, index) => {
                                    const Icon = iconMap[bonus.icon as keyof typeof iconMap];
                                    return (
                                      <li
                                        key={index}
                                        className='flex items-start gap-2 text-sm tracking-tight'
                                      >
                                        <Icon size={16} className='mt-0.5 flex-shrink-0 text-primary' />
                                        <span>{bonus.text}</span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};
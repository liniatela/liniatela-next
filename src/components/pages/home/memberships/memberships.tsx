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
import {
	CheckIcon,
	ClockIcon,
	GiftIcon,
	MapPinIcon,
	PhoneIcon,
	CreditCardIcon,
	CalendarIcon,
	UserCheckIcon,
	ShieldCheckIcon,
	TrendingUpIcon
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { getAllMemberships, Membership } from './constance'

function Memberships() {
	const memberships = getAllMemberships()

	return (
		<section className='memberships -mt-7 pt-32 lg:pt-52 overflow-hidden select-none' id='memberships'>
			<div className='container flex flex-col gap-5 sm:gap-10'>
				<header className='flex flex-col items-start sm:flex-row sm:items-center sm:gap-8 gap-4'>
					<Tag>Абонементы</Tag>
					<h2 className='text-3xl [&_span]:text-muted-foreground leading-none tracking-tighter'>
						<span>Твоя свобода</span> — в выборе формата
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
				className='group/card relative rounded-3xl overflow-hidden h-full min-h-[400px] hover:scale-105 transition-all shadow hover:shadow-2xl duration-300 cursor-pointer'
				onClick={handleOpenSheet}
			>
				<div className='p-6 h-full flex flex-col'>
					<div className='flex items-center justify-between mb-4'>
						<Tag size={'md'} variant={'white'}>
							{membership.title}
						</Tag>
						<div className='bg-white/90 backdrop-blur-sm rounded-full px-3 py-1'>
							<span className='text-lg font-medium'>{membership.price.toLocaleString()} ₽</span>
							<span className='text-sm text-muted-foreground ml-1'>мес.</span>
						</div>
					</div>

					<p className='mt-4 text-white text-lg leading-tight mb-4 line-clamp-3'>
						{membership.shortDescription}
					</p>
				</div>

				<div className='flex items-center justify-center lg:opacity-0 group-hover/card:opacity-100 absolute h-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-opacity lg:bg-black/20 w-full'>
					<SheetTrigger asChild>
						<Button variant={'secondary'} className='shadow-2xl' onClick={handleOpenSheet}>
							Подробнее
						</Button>
					</SheetTrigger>
				</div>

				<Image
					className='object-cover -z-10 brightness-[70%] group-hover/card:brightness-[65%] transition-[filter]'
					src={membership.coverImage}
					fill
					sizes='(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw'
					alt={membership.title}
				/>
			</article>

			<SheetContent
				side="right"
				className='py-4 px-6 lg:px-6 lg:py-6 overflow-y-auto overflow-x-hidden'
			>
				<div className='h-full flex flex-col'>
					<SheetHeader className='p-0 mb-6'>
						<div className='flex flex-wrap items-center gap-3 mb-2'>
							<SheetTitle className='text-2xl text-left'>{membership.title}</SheetTitle>
							<div className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium'>
								{membership.price.toLocaleString()} ₽ / {membership.duration}
							</div>
						</div>
						<SheetDescription className='text-base text-left leading-relaxed'>
							{membership.shortDescription}
						</SheetDescription>
					</SheetHeader>

					<div className='flex-1 overflow-y-auto overflow-x-hidden pr-2 space-y-6'>

    

						{/* Аккордион с дополнительной информацией */}
						<div className='border rounded-xl overflow-hidden hidden'>
							<Accordion type="multiple" className='w-full'>
								{/* Правила посещения студии */}
								<AccordionItem value="rules">
									<AccordionTrigger className='px-4 hover:no-underline'>
										<span className='font-semibold'>Правила посещения студии</span>
									</AccordionTrigger>
									<AccordionContent className='px-4'>
										<ul className='space-y-3 text-sm text-muted-foreground'>
											<li className='flex items-start gap-2'>
												<UserCheckIcon className='size-4 mt-0.5 flex-shrink-0 text-primary' />
												<span>При себе иметь подтверждение оплаты, скриншот, чеки, паспорт</span>
											</li>
											<li className='flex items-start gap-2'>
												<ClockIcon className='size-4 mt-0.5 flex-shrink-0 text-primary' />
												<span>Бесплатная отмена возможна не позднее 8 часов до занятия</span>
											</li>
											<li className='flex items-start gap-2'>
												<CheckIcon className='size-4 mt-0.5 flex-shrink-0 text-primary' />
												<span>Взять на занятие удобную спортивную форму, обувь</span>
											</li>
											<li className='flex items-start gap-2'>
												<ShieldCheckIcon className='size-4 mt-0.5 flex-shrink-0 text-primary' />
												<span>Студия оставляет за собой право на замену инструктора при необходимости</span>
											</li>
										</ul>
									</AccordionContent>
								</AccordionItem>

								{/* Как приобрести */}
								<AccordionItem value="purchase">
									<AccordionTrigger className='px-4 hover:no-underline'>
										<span className='font-semibold'>Как приобрести</span>
									</AccordionTrigger>
									<AccordionContent className='px-4'>
										<div className='space-y-4 text-sm'>
											<div className='flex items-start gap-3'>
												<div className='flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex-shrink-0'>
													1
												</div>
												<div>
													<p className='font-medium mb-1'>Выберите абонемент</p>
													<p className='text-muted-foreground'>Определитесь с форматом, который вам подходит</p>
												</div>
											</div>
											<div className='flex items-start gap-3'>
												<div className='flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex-shrink-0'>
													2
												</div>
												<div>
													<p className='font-medium mb-1'>Свяжитесь с нами</p>
													<p className='text-muted-foreground'>Позвоните или напишите администратору для оформления</p>
												</div>
											</div>
											<div className='flex items-start gap-3'>
												<div className='flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex-shrink-0'>
													3
												</div>
												<div>
													<p className='font-medium mb-1'>Оплатите удобным способом</p>
													<p className='text-muted-foreground'>Наличные, карта, перевод — выбирайте, как удобно</p>
												</div>
											</div>
											<div className='flex items-start gap-3'>
												<div className='flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex-shrink-0'>
													4
												</div>
												<div>
													<p className='font-medium mb-1'>Начните заниматься</p>
													<p className='text-muted-foreground'>Записывайтесь на занятия и приходите в студию</p>
												</div>
											</div>
										</div>
									</AccordionContent>
								</AccordionItem>

								{/* Преимущества разового посещения */}
								<AccordionItem value="benefits">
									<AccordionTrigger className='px-4 hover:no-underline'>
										<span className='font-semibold'>Преимущества разового посещения</span>
									</AccordionTrigger>
									<AccordionContent className='px-4'>
										<div className='space-y-3 text-sm'>
											<div className='flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg'>
												<TrendingUpIcon className='size-5 text-green-600 flex-shrink-0 mt-0.5' />
												<div>
													<p className='font-medium text-green-900 dark:text-green-100 mb-1'>
														Экономия до 40%
													</p>
													<p className='text-green-700 dark:text-green-300'>
														Стоимость одного занятия по абонементу значительно ниже разовой цены
													</p>
												</div>
											</div>
											<div className='flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg'>
												<CalendarIcon className='size-5 text-blue-600 flex-shrink-0 mt-0.5' />
												<div>
													<p className='font-medium text-blue-900 dark:text-blue-100 mb-1'>
														Гибкость расписания
													</p>
													<p className='text-blue-700 dark:text-blue-300'>
														Занимайтесь когда удобно в течение всего срока действия
													</p>
												</div>
											</div>
											<div className='flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg'>
												<GiftIcon className='size-5 text-purple-600 flex-shrink-0 mt-0.5' />
												<div>
													<p className='font-medium text-purple-900 dark:text-purple-100 mb-1'>
														Бонусы и подарки
													</p>
													<p className='text-purple-700 dark:text-purple-300'>
														При покупке длительных абонементов получайте дополнительные преимущества
													</p>
												</div>
											</div>
										</div>
									</AccordionContent>
								</AccordionItem>

								{/* Контактная информация */}
								<AccordionItem value="contacts">
									<AccordionTrigger className='px-4 hover:no-underline'>
										<span className='font-semibold'>Контактная информация</span>
									</AccordionTrigger>
									<AccordionContent className='px-4'>
										<div className='space-y-4'>
											<a
												href='tel:+79001234567'
												className='flex items-center gap-3 p-3 bg-muted rounded-xl hover:bg-muted/80 transition-colors'
											>
												<PhoneIcon className='size-5 text-primary flex-shrink-0' />
												<div>
													<p className='font-medium'>Телефон</p>
													<p className='text-sm text-muted-foreground'>+7 (900) 123-45-67</p>
												</div>
											</a>
											<div className='flex items-start gap-3 p-3 bg-muted rounded-xl'>
												<MapPinIcon className='size-5 text-primary flex-shrink-0 mt-0.5' />
												<div>
													<p className='font-medium mb-1'>Адрес студии</p>
													<p className='text-sm text-muted-foreground'>
														г. Москва, ул. Примерная, д. 1
													</p>
												</div>
											</div>
											<div className='flex items-start gap-3 p-3 bg-muted rounded-xl'>
												<ClockIcon className='size-5 text-primary flex-shrink-0 mt-0.5' />
												<div>
													<p className='font-medium mb-1'>Режим работы</p>
													<p className='text-sm text-muted-foreground'>
														Пн-Пт: 08:00 - 22:00<br />
														Сб-Вс: 09:00 - 20:00
													</p>
												</div>
											</div>
										</div>
									</AccordionContent>
								</AccordionItem>

								{/* Как добраться */}
								<AccordionItem value="location">
									<AccordionTrigger className='px-4 hover:no-underline'>
										<span className='font-semibold'>Как добраться</span>
									</AccordionTrigger>
									<AccordionContent className='px-4'>
										<div className='space-y-3 text-sm'>
											<div className='flex items-start gap-3'>
												<MapPinIcon className='size-4 text-primary flex-shrink-0 mt-0.5' />
												<div>
													<p className='font-medium mb-1'>На метро</p>
													<p className='text-muted-foreground'>
														Станция "Примерная" (5 минут пешком)
													</p>
												</div>
											</div>
											<div className='flex items-start gap-3'>
												<MapPinIcon className='size-4 text-primary flex-shrink-0 mt-0.5' />
												<div>
													<p className='font-medium mb-1'>На автомобиле</p>
													<p className='text-muted-foreground'>
														Бесплатная парковка для клиентов студии
													</p>
												</div>
											</div>
											<Button variant='outline' className='w-full mt-4'>
												Открыть на карте
											</Button>
										</div>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>


					</div>

					{/* CTA кнопки в подвале */}
					<div className='flex flex-col gap-3 mt-8 pt-6 border-t border-input'>
						<Button className='w-full' size='lg'>
							<CreditCardIcon className='size-4 mr-2' />
							Приобрести абонемент
						</Button>
						<div className='grid grid-cols-2 gap-3'>
							<Button variant='outline'>
								Задать вопрос
							</Button>
							<Button variant='outline'>
								Сравнить
							</Button>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
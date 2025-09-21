'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
	CarouselNext,
	CarouselPrevious
} from '@/components/shared/carousel'
import Tag from '@/components/shared/tag'
import Image from 'next/image'
import { Button } from '@/components/shared/button'
import { useState } from 'react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/shared/dialog'
import { CheckIcon, ClockIcon, GiftIcon } from 'lucide-react'
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
						{/* Навигация сверху */}

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
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const handleOpenDialog = () => {
		setIsDialogOpen(true)
	}

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<article
				className='group/card relative rounded-3xl overflow-hidden h-full min-h-[400px] hover:scale-105 transition-all shadow hover:shadow-2xl duration-300 cursor-pointer'
				onClick={handleOpenDialog}
			>
				<div className='p-6 h-full flex flex-col'>
					<div className='flex items-center justify-between mb-4'>
						<Tag size={'sm'} variant={'white'}>
							{membership.title}
						</Tag>
						<div className='bg-white/90 backdrop-blur-sm rounded-full px-3 py-1'>
							<span className='text-lg font-medium'>{membership.price.toLocaleString()} ₽</span>
							<span className='text-sm text-muted-foreground ml-1'>мес.</span>
						</div>
					</div>

					<p className='text-white text-lg leading-tight mb-4 line-clamp-3'>
						{membership.shortDescription}
					</p>

					<div className='mt-auto space-y-2'>
						{membership.features.slice(0, 2).map((feature, index) => (
							<div key={index} className='flex items-start gap-2 text-white/90 text-sm'>
								<CheckIcon className='size-4 mt-0.5 flex-shrink-0' />
								<span className='line-clamp-2'>{feature}</span>
							</div>
						))}
						{membership.features.length > 2 && (
							<p className='text-white/70 text-sm'>
								+{membership.features.length - 2} дополнительных преимуществ
							</p>
						)}
					</div>
				</div>

				<div className='flex items-center justify-center lg:opacity-0 group-hover/card:opacity-100 absolute h-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-opacity lg:bg-black/20 w-full'>
					<DialogTrigger asChild>
						<Button variant={'secondary'} className='shadow-2xl' onClick={handleOpenDialog}>
							Подробнее
						</Button>
					</DialogTrigger>
				</div>

				<Image
					className='object-cover -z-10 brightness-[70%] group-hover/card:brightness-[65%] transition-[filter]'
					src={membership.coverImage}
					fill
					sizes='(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw'
					alt={membership.title}
				/>
			</article>

			<DialogContent className='max-sm:h-full max-sm:rounded-none sm:max-h-[90vh] max-w-4xl'>
				<div className='flex items-start gap-1'>
					<DialogHeader>
						<div className='flex flex-wrap items-center gap-3 mb-2'>
							<DialogTitle className='text-2xl text-left'>{membership.title}</DialogTitle>
							<div className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium'>
								{membership.price.toLocaleString()} ₽ / {membership.duration}
							</div>
						</div>
					</DialogHeader>
					<DialogClose className='ml-auto' />
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8'>
					<div className='space-y-6'>
						{/* Описание */}
						<DialogDescription className='text-base text-left leading-relaxed'>
							{membership.shortDescription}
						</DialogDescription>

						{/* Особенности */}
						<div>
							<h3 className='font-semibold text-lg mb-4'>Что включено:</h3>
							<div className='grid gap-3'>
								{membership.features.map((feature, index) => (
									<div key={index} className='flex items-start gap-3 p-3 bg-muted rounded-xl'>
										<CheckIcon className='size-5 text-green-600 flex-shrink-0 mt-0.5' />
										<span className='text-sm'>{feature}</span>
									</div>
								))}
							</div>
						</div>

						{/* FAQ */}
						{membership.faq.length > 0 && (
							<div>
								<h3 className='font-semibold text-lg mb-4'>Часто задаваемые вопросы:</h3>
								<div className='space-y-4'>
									{membership.faq.map((faqItem, index) => (
										<div key={index} className='border rounded-xl p-4'>
											<h4 className='font-medium mb-2'>{faqItem.question}</h4>
											<div
												className='text-sm text-muted-foreground'
												dangerouslySetInnerHTML={{ __html: faqItem.answer }}
											/>
										</div>
									))}
								</div>
							</div>
						)}

						{/* CTA */}
						<div className='flex items-center gap-4 pt-4'>
							<Button className='flex-1'>Купить абонемент</Button>
							<Button variant='outline' className='flex-1'>
								Задать вопрос
							</Button>
						</div>
					</div>

					{/* Боковая панель */}
					<div className='space-y-4'>
						<div className='bg-muted rounded-xl p-4'>
							<div className='flex items-center gap-3 mb-3'>
								<ClockIcon className='size-5 text-primary' />
								<span className='font-medium'>Срок действия</span>
							</div>
							<p className='text-sm text-muted-foreground'>{membership.duration}</p>
						</div>

						<div className='bg-muted rounded-xl p-4'>
							<div className='flex items-center gap-3 mb-3'>
								<GiftIcon className='size-5 text-orange-500' />
								<span className='font-medium'>Бонусы</span>
							</div>
							<p className='text-sm text-muted-foreground'>{membership.supportText}</p>
						</div>

						<div className='bg-primary/5 border border-primary/20 rounded-xl p-4'>
							<h4 className='font-medium text-primary mb-2'>Специальное предложение</h4>
							<p className='text-sm text-muted-foreground'>
								При покупке абонемента на 3+ месяца действуют дополнительные бонусы
							</p>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

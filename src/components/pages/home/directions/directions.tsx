'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
	CarouselNavigationWithDots,
	CarouselNext,
	CarouselPrevious
} from '@/components/shared/carousel'
import Tag from '@/components/shared/tag'
import Image from 'next/image'
import { Direction, getDifficultyLabel, MOCK_DIRECTIONS } from './constants'
import { Button } from '@/components/shared/button'
import { useState } from 'react'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/shared/sheet'
import { ClockIcon, FlameIcon, StarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function Directions() {
	return (
		<section className='directions -mt-7 overflow-hidden select-none' id='directions'>
			<div className='bg-white rounded-4xl py-10 sm:py-20'>
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
				className='group/card relative rounded-3xl overflow-hidden h-full min-h-[400px] hover:scale-105 transition-all shadow hover:shadow-2xl duration-300 cursor-pointer'
				onClick={handleOpenSheet}
			>
				<div className='p-4 h-full flex flex-col items-end'>
					<Tag size={'md'} variant={'white'}>
						{direction.name}
					</Tag>
					<p className='mt-auto text-xl text-white leading-none tracking-tighter '>
						{direction.shortDescription}
					</p>
				</div>
				<div className='flex flex-col items-center justify-center lg:opacity-0 group-hover/card:opacity-100 absolute h-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-opacity'>
					<SheetTrigger asChild>
						<Button variant={'secondary'} className='shadow-2xl' onClick={handleOpenSheet}>
							Подробнее
						</Button>
					</SheetTrigger>
				</div>
				<Image
					className='object-cover -z-10 brightness-95 group-hover/card:brightness-75 transition-[filter]'
					src={direction.coverImage}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
					alt={direction.name}
				/>
			</article>

			<SheetContent
				side="right"
				className={cn(
					'py-4 px-6 lg:px-6 lg:py-6 overflow-y-auto overflow-x-hidden'
				)}
			>
				<div className='h-full flex flex-col'>
					<SheetHeader className='p-0 mb-6'>
						<div className='flex flex-wrap items-center gap-3 mb-2'>
							<SheetTitle className='text-2xl text-left'>{direction.name}</SheetTitle>
							<div className='flex items-center gap-2'>
								{Array.from({ length: direction.difficulty }).map((_, index) => (
									<StarIcon key={index} className='size-4 fill-yellow-400 text-yellow-400' />
								))}
								<span className='text-sm text-muted-foreground'>
									{getDifficultyLabel(direction.difficulty)}
								</span>
							</div>
						</div>
					</SheetHeader>

					<div className='flex-1 overflow-y-auto overflow-x-hidden pr-2'>
						<div
							className={cn(
								'grid gap-8',

							)}
						>
							<div className='space-y-6'>
								{/* Основная информация */}
								<SheetDescription className='text-base text-left'>
									{direction.shortDescription}
								</SheetDescription>

								<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
									<div className='flex items-center gap-3 p-4 bg-muted rounded-xl'>
										<ClockIcon className='size-5 text-primary' />
										<div>
											<p className='font-medium'>Длительность</p>
											<p className='text-sm text-muted-foreground'>{direction.duration}</p>
										</div>
									</div>
									<div className='flex items-center gap-3 p-4 bg-muted rounded-xl'>
										<FlameIcon className='size-5 text-orange-500' />
										<div>
											<p className='font-medium'>Калории</p>
											<p className='text-sm text-muted-foreground'>{direction.calories} ккал</p>
										</div>
									</div>
								</div>

								{/* Полное описание */}
								<div>
									<p className='text-muted-foreground leading-relaxed'>{direction.fullDescription}</p>
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
						<Button variant='outline' className='flex-1'>
							Узнать расписание
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
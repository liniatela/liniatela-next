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
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/shared/dialog'
import { ClockIcon, FlameIcon, StarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function Directions() {
	return (
		<section className='directions -mt-7 overflow-hidden select-none' id='directions'>
			<div className='bg-white rounded-4xl py-10 sm:py-20'>
				<div className='container flex flex-col gap-5 sm:gap-10'>
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

							<footer className='mt-5 sm:mt-10 flex flex-wrap-reverse justify-between gap-5 sm:gap-10 empty:hidden'>
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
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const handleOpenDialog = () => {
		setIsDialogOpen(true)
	}

	const haveGallery = direction.gallery && direction.gallery.length > 0

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<article
				className='group/card relative rounded-3xl overflow-hidden h-full min-h-[400px] hover:scale-105 transition-all shadow hover:shadow-2xl duration-300 cursor-pointer'
				onClick={handleOpenDialog}
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
					<DialogTrigger asChild>
						<Button variant={'secondary'} className='shadow-2xl' onClick={handleOpenDialog}>
							Подробнее
						</Button>
					</DialogTrigger>
				</div>
				<Image
					className='object-cover -z-10 brightness-95 group-hover/card:brightness-75 transition-[filter]'
					src={direction.coverImage}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
					alt={direction.name}
				/>
			</article>

			<DialogContent
				className={cn(
					'max-sm:h-full max-sm:rounded-none sm:max-h-[90vh]',
					haveGallery ? 'max-w-xl lg:max-w-5xl' : 'max-w-3xl'
				)}
			>
				<div className='flex items-start gap-1'>
					<DialogHeader>
						<div className='flex  flex-wrap items-center gap-3 mb-2'>
							<DialogTitle className='text-2xl text-left'>{direction.name}</DialogTitle>
							<div className='flex items-center gap-2'>
								{Array.from({ length: direction.difficulty }).map((_, index) => (
									<StarIcon key={index} className='size-4 fill-yellow-400 text-yellow-400' />
								))}
								<span className='text-sm text-muted-foreground'>
									{getDifficultyLabel(direction.difficulty)}
								</span>
							</div>
						</div>
					</DialogHeader>
					<DialogClose className='ml-auto' />
				</div>
				<div
					className={cn(
						'grid',
						haveGallery ? 'grid-cols-1fr lg:grid-cols-[1fr_minmax(120px,360px)] gap-10' : ''
					)}
				>
					<div className='space-y-4'>
						{/* Основная информация */}
						<DialogDescription className='text-base text-left'>
							{direction.shortDescription}
						</DialogDescription>
						<div className='grid grid-cols-1 2xs:grid-cols-2 gap-4'>
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

						{/* CTA */}
						<div className='flex items-center gap-8 mt-8'>
							<Button className='flex-1'>Записаться</Button>
							<Button variant='outline' className='flex-1'>
								Узнать расписание
							</Button>
						</div>
					</div>

					{/* Галерея */}
					{direction.gallery && direction.gallery.length > 0 && (
						<Carousel className='w-full'>
							<CarouselContent className='overflow-visible lg:overflow-hidden rounded-3xl'>
								{direction.gallery.map((image, index) => (
									<CarouselItem key={index} className='basis-[60%] lg:basis-full'>
										<div className='relative aspect-square rounded-3xl overflow-hidden'>
											<Image
												src={image}
												alt={`${direction.name} галерея ${index + 1}`}
												fill
												className='object-cover hover:scale-110 transition-transform duration-300'
												sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
											/>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselNavigationWithDots className='mt-5' />
						</Carousel>
					)}
				</div>
			</DialogContent>
		</Dialog>
	)
}

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
import { QuoteIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getAllTrainers, Trainer } from './constance'

function Trainers() {
	const trainers = getAllTrainers()

	return (
		<section className='trainers -mt-7 pt-32 lg:pt-52 overflow-hidden select-none' id='trainers'>
			<div className='container grid gap-5 sm:gap-10'>
				<header className='flex flex-col flex-wrap items-start sm:flex-row sm:items-center sm:gap-8 gap-4'>
					<Tag>Тренеры</Tag>
					<h2 className='text-3xl leading-none tracking-tighter text-balance'>
						Те, кто рядом с тобой на коврике и в пути к себе
					</h2>
				</header>

				<div className='relative'>
					<Carousel
						className='w-full'
						opts={{
							align: 'start'
						}}
					>
						<CarouselContent className='max-sm:max-w-[90vw]'>
							{trainers.map(trainer => (
								<CarouselItem key={trainer.id} className='pl-4 basis-[95%] lg:basis-[60%]'>
									<TrainerCard trainer={trainer} />
								</CarouselItem>
							))}
						</CarouselContent>
						<footer className='mt-5 sm:mt-10 flex flex-wrap-reverse justify-between items-center gap-5 empty:hidden'>
							<CarouselNavigation />
							<p className='text-end text-balance text-muted-foreground leading-none tracking-tighter hidden sm:block ml-auto'>
								Они знают, как создать атмосферу, где легко расслабиться, раскрыться и просто быть.
							</p>
						</footer>
					</Carousel>
				</div>
			</div>
		</section>
	)
}

export default Trainers

const TrainerCard = ({ trainer }: { trainer: Trainer }) => {
	return (
		<article className='h-full group/trainer'>
			<div className='p-3 rounded-4xl bg-white max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-2 sm:gap-2 h-full md:min-h-[350px] '>
				{/* Изображение */}
				<div className='relative overflow-hidden rounded-3xl p-4 flex flex-col max-sm:h-[300px]'>
					<div className='flex flex-col text-white gap-2 z-10 relative'>
						<span className='text-2xl leading-none tracking-tighter'>{trainer.name}</span>
						<span className='leading-none tracking-tighter'>{trainer.position}</span>
					</div>
					<blockquote className='text-white leading-none tracking-tighter text-2xl sm:text-3xl relative z-10 mt-auto'>
						«{trainer.quote}»
					</blockquote>
					<Image
						className='object-cover'
						src={trainer.photo}
						alt=''
						fill
						sizes='(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw'
					/>
				</div>
				{/* Информация */}
				<div className='p-4 flex flex-col gap-6 flex-1'>
					<div className='mt-2 sm:mt-4'>
						<h3 className='text-[#7C7C7C] leading-none tracking-tighter'>Ведёт направления</h3>
						<ul className='flex flex-wrap gap-1 mt-2'>
							{trainer.directions.map(direction => (
								<li key={direction}>
									<Tag variant={'brown'} size={'md'}>
										{direction}
									</Tag>
								</li>
							))}
						</ul>
					</div>

					<p>{trainer.description}</p>

					<div className='mt-auto flex flex-col gap-2'>
						<Button className=' xl:group-hover/trainer:opacity-100 xl:opacity-0 max-xl:opacity-100'>
							Записаться
						</Button>
						<Button variant={'outline'}>Подробнее о тренере</Button>
					</div>
				</div>
			</div>
		</article>
	)
}

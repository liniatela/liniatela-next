'use client'

import Tag from '@/components/shared/tag'
import Image from 'next/image'
import { Button } from '@/components/shared/button'
import { STUDIO_INFO, HALLS, Hall } from './constanse'
import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/shared/carousel'
import Link from 'next/link'

function Space() {
	return (
		<section className='space -mt-7 pt-30 sm:pt-50 overflow-hidden select-none' id='space'>
			<div className='container flex flex-col gap-10'>
				<header className='flex flex-col items-start sm:flex-row sm:items-center sm:gap-8 gap-4'>
					<Tag>О студии</Tag>
					<h2 className='text-3xl [&_span]:text-muted-foreground leading-none tracking-tighter'>
						<span>Тёплое, светлое</span> и камерное пространство
					</h2>
				</header>

				{/* Бенто */}
				<div className='flex flex-col-reverse sm:grid sm:grid-cols-[40%_1fr] gap-1 min-h-[600px]'>
					<div className='grid sm:grid-rows-[1fr_240px] gap-1'>
						<div className='relative overflow-hidden rounded-3xl p-6 text-white'>
							<h3 className='text-lg lg:text-2xl leading-none tracking-tighter'>
								Тёплое, светлое и камерное пространство, где ты можешь замедлиться, переключиться и
								почувствовать себя.
							</h3>
							<p className='mt-6 leading-none tracking-tighter text-border max-w-[252px]'>
								Где место напоминает не о тренировке, а о встрече с собой.
							</p>
							<div className="absolute inset-0 w-full h-full -z-10">
								<Image
									className="object-cover -z-10"
									src={STUDIO_INFO.generalImages[0]}
									fill
									alt=""
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
								<div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />
							</div>
						</div>
						<div className='relative overflow-hidden rounded-3xl max-sm:hidden min-h-[180px]'>
							<div className="absolute inset-0 w-full h-full -z-10">
								<Image
									className="object-cover -z-10"
									src={STUDIO_INFO.generalImages[1]}
									fill
									alt=""
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
								<div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />
							</div>
						</div>
					</div>
					<div className='relative overflow-hidden rounded-3xl'>
						<div className='p-10 flex flex-col  sm:items-end h-full justify-between gap-10'>

							<ul className='grid  sm:items-end gap-5 sm:gap-10'>
								{STUDIO_INFO.features.map(item => (
									<li className='' key={item.value}>
										<div className='text-white flex flex-col gap-1'>
											<span className='text-3xl sm:text-4xl leading-none tracking-tighter text-center sm:text-end'>
												{item.label}
											</span>
											<p className='text-[#CDCDCD] leading-none tracking-tighter text-center sm:text-end'>
												{item.value}
											</p>
										</div>
									</li>
								))}
							</ul>
							<div className='flex flex-col gap-2'>
								<Button asChild variant={'white'}>
									<Link href={''}>Открыть на карте</Link>
								</Button>

								<p className='text-sm text-muted leading-none tracking-tighter sm:max-w-[150px] text-center sm:text-end'>
									{STUDIO_INFO.address}
								</p>
							</div>
						</div>
						<div className="absolute inset-0 w-full h-full -z-10">
							<Image
								className="object-cover -z-10"
								src={STUDIO_INFO.generalImages[2]}
								fill
								alt=""
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />
						</div>
					</div>
				</div>

				{/* Слайдер */}
				<div className='sm:mt-10'>
					<Carousel
						className='w-full relative'
						opts={{
							align: 'center'
						}}
					>
						<CarouselContent>
							{HALLS.map(hall => (
								<CarouselItem key={hall.id} className='basis-[95%] sm:basis-[75%]'>
									<HallCard hall={hall} />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className='absolute left-0'  variant={'white'}/>
						<CarouselNext className='absolute right-0' variant={'white'} />
						<CarouselDots className='mt-6 mb-1' />
					</Carousel>
				</div>
			</div>
		</section>
	)
}

export default Space

const HallCard = ({ hall }: { hall: Hall }) => {
	return (
		<article className='group relative rounded-3xl overflow-hidden aspect-video shadow-lg'>
			<div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent z-10' />

			<div className='relative z-20 p-6 h-full flex flex-col'>
				<div className='space-y-4'>
					<div>
						<h4 className='text-white text-2xl sm:text-3xl mb-2 leading-none tracking-tighter'>
							{hall.name}
						</h4>
						<p className='max-sm:hidden text-border text-sm leading-none tracking-tighter'>
							{hall.description}
						</p>
					</div>
				</div>
			</div>

			<Image
				className='object-cover -z-10 group-hover:scale-105 transition-transform duration-500'
				src={hall.image}
				fill
				sizes='(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 40vw'
				alt={hall.name}
			/>
		</article>
	)
}

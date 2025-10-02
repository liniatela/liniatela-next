'use client'

import * as React from 'react'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '../button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
	opts?: CarouselOptions
	plugins?: CarouselPlugin
	orientation?: 'horizontal' | 'vertical'
	setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0]
	api: ReturnType<typeof useEmblaCarousel>[1]
	scrollPrev: () => void
	scrollNext: () => void
	canScrollPrev: boolean
	canScrollNext: boolean
	selectedIndex: number
	scrollSnaps: number[]
	scrollTo: (index: number) => void
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
	const context = React.useContext(CarouselContext)

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />')
	}

	return context
}

function Carousel({
	orientation = 'horizontal',
	opts,
	setApi,
	plugins,
	className,
	children,
	...props
}: React.ComponentProps<'div'> & CarouselProps) {
	const [carouselRef, api] = useEmblaCarousel(
		{
			...opts,
			axis: orientation === 'horizontal' ? 'x' : 'y'
		},
		plugins
	)
	const [canScrollPrev, setCanScrollPrev] = React.useState(false)
	const [canScrollNext, setCanScrollNext] = React.useState(false)
	const [selectedIndex, setSelectedIndex] = React.useState(0)
	const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

	const onSelect = React.useCallback((api: CarouselApi) => {
		if (!api) return
		setCanScrollPrev(api.canScrollPrev())
		setCanScrollNext(api.canScrollNext())
		setSelectedIndex(api.selectedScrollSnap())
	}, [])

	const onInit = React.useCallback((api: CarouselApi) => {
		if (!api) return
		setScrollSnaps(api.scrollSnapList())
	}, [])
	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev()
	}, [api])

	const scrollNext = React.useCallback(() => {
		api?.scrollNext()
	}, [api])

	const scrollTo = React.useCallback(
		(index: number) => {
			api?.scrollTo(index)
		},
		[api]
	)

	const handleKeyDown = React.useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key === 'ArrowLeft') {
				event.preventDefault()
				scrollPrev()
			} else if (event.key === 'ArrowRight') {
				event.preventDefault()
				scrollNext()
			}
		},
		[scrollPrev, scrollNext]
	)

	React.useEffect(() => {
		if (!api || !setApi) return
		setApi(api)
	}, [api, setApi])

	React.useEffect(() => {
		if (!api) return
		onInit(api)
		onSelect(api)
		api.on('reInit', onSelect)
		api.on('select', onSelect)

		return () => {
			api?.off('select', onSelect)
		}
	}, [api, onInit, onSelect])

	return (
		<CarouselContext.Provider
			value={{
				carouselRef,
				api: api,
				opts,
				orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
				scrollPrev,
				scrollNext,
				canScrollPrev,
				canScrollNext,
				selectedIndex,
				scrollSnaps,
				scrollTo
			}}
		>
			<div
				onKeyDownCapture={handleKeyDown}
				className={cn('relative', className)}
				role='region'
				aria-roledescription='carousel'
				data-slot='carousel'
				{...props}
			>
				{children}
			</div>
		</CarouselContext.Provider>
	)
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
	const { carouselRef, orientation } = useCarousel()

	return (
		<div ref={carouselRef} className={className} data-slot='carousel-content'>
			<div
				className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col')}
				{...props}
			/>
		</div>
	)
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
	const { orientation } = useCarousel()

	return (
		<div
			role='group'
			aria-roledescription='slide'
			data-slot='carousel-item'
			className={cn(
				'min-w-0 shrink-0 grow-0 basis-full',
				orientation === 'horizontal' ? 'pl-4' : 'pt-4',
				className
			)}
			{...props}
		/>
	)
}

function CarouselPrevious({
	className,
	variant = 'outline',
	size = 'icon',
	...props
}: React.ComponentProps<typeof Button>) {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel()

	return (
		<Button
			data-slot='carousel-previous'
			variant={variant}
			size={size}
			className={cn(
				'absolute size-10 rounded-full',
				orientation === 'horizontal'
					? 'top-1/2 -left-12 -translate-y-1/2'
					: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
				className
			)}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...props}
		>
			<ArrowLeft strokeWidth={1.5} className='size-5' />
			<span className='sr-only'>Previous slide</span>
		</Button>
	)
}

function CarouselNext({
	className,
	variant = 'outline',
	size = 'icon',
	...props
}: React.ComponentProps<typeof Button>) {
	const { orientation, scrollNext, canScrollNext } = useCarousel()

	return (
		<Button
			data-slot='carousel-next'
			variant={'outline'}
			size={size}
			className={cn(
				'absolute size-10 rounded-full',
				orientation === 'horizontal'
					? 'top-1/2 -right-12 -translate-y-1/2'
					: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
				className
			)}
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...props}
		>
			<ArrowRight strokeWidth={1.5} className='size-5' />
			<span className='sr-only'>Next slide</span>
		</Button>
	)
}

function CarouselDots({ className }: { className?: string }) {
	const { scrollSnaps, selectedIndex, scrollTo } = useCarousel()

	if (scrollSnaps.length <= 1) return null
	
	return (
		<div
			className={cn('flex items-center justify-center gap-2', className)}
			data-slot='carousel-dots'
		>
			{scrollSnaps.map((_, index) => (
				<button
					key={index}
					type='button'
					className={cn(
						'size-2 rounded-full transition-all duration-200',
						index === selectedIndex
							? 'bg-primary scale-125'
							: 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
					)}
					onClick={() => scrollTo(index)}
					aria-label={`Перейти к слайду ${index + 1}`}
				/>
			))}
		</div>
	)
}
function CarouselNavigationWithDots({ className }: { className?: string }) {
	const {
		scrollPrev,
		scrollNext,
		canScrollPrev,
		canScrollNext,
		scrollSnaps,
		selectedIndex,
		scrollTo
	} = useCarousel()

	if (scrollSnaps.length <= 1) return null

	return (
		<div
			className={cn('flex items-center justify-between gap-4 w-full', className)}
			data-slot='carousel-navigation-with-dots'
		>
			{/* Кнопка назад */}
			<Button
				variant='outline'
				size='icon'
				className='size-10 rounded-full shrink-0'
				disabled={!canScrollPrev}
				onClick={scrollPrev}
				aria-label='Предыдущее направление'
			>
				<ArrowLeft strokeWidth={1.5} className='size-5' />
			</Button>

			{/* Точки по центру */}
			<div className='flex items-center justify-center gap-2 flex-1'>
				{scrollSnaps.map((_, index) => (
					<button
						key={index}
						type='button'
						className={cn(
							'size-2 rounded-full transition-all duration-200',
							index === selectedIndex
								? 'bg-primary scale-125'
								: 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
						)}
						onClick={() => scrollTo(index)}
						aria-label={`Перейти к слайду ${index + 1}`}
					/>
				))}
			</div>

			{/* Кнопка вперед */}
			<Button
				variant='outline'
				size='icon'
				className='size-10 rounded-full shrink-0'
				disabled={!canScrollNext}
				onClick={scrollNext}
				aria-label='Следующее направление'
			>
				<ArrowRight strokeWidth={1.5} className='size-5' />
			</Button>
		</div>
	)
}

function CarouselNavigation({ className }: { className?: string }) {
	const { scrollPrev, scrollNext, canScrollPrev, scrollSnaps, canScrollNext } = useCarousel()

	if (scrollSnaps.length <= 1) return null

	return (
		<div
			className={cn(
				'flex items-center gap-4 max-xl:hidden',
				!canScrollNext && !canScrollPrev && 'hidden',
				className
			)}
		>
			<Button
				variant='outline'
				size='icon'
				className='size-10 rounded-full text-muted border-muted-foreground'
				disabled={!canScrollPrev}
				onClick={scrollPrev}
				aria-label='Предыдущее направление'
			>
				<ArrowLeft strokeWidth={1.5} className='size-5' />
			</Button>
			<Button
				variant='outline'
				size='icon'
				className='size-10 rounded-full text-muted border-muted-foreground'
				disabled={!canScrollNext}
				onClick={scrollNext}
				aria-label='Следующее направление'
			>
				<ArrowRight strokeWidth={1.5} className='size-5' />
			</Button>
		</div>
	)
}

export {
	type CarouselApi,
	CarouselNavigation,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
	CarouselDots,
	CarouselNavigationWithDots
}

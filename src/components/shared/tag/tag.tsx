import { type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const tagVariants = cva(
	'inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 tracking-tighter whitespace-nowrap',
	{
		variants: {
			variant: {
				outline: 'border border-muted-foreground text-muted-foreground bg-transparent',
				white: 'border border-white bg-transparent text-white',
				blue: 'border border-primary bg-primary text-white',
				brown: 'border border-secondary bg-secondary text-secondary-foreground'
			},
			size: {
				sm: 'px-2 py-1 text-sm',
				md: 'px-3 py-1.5 text-sm',
				lg: 'px-4 py-2 text-base'
			}
		},
		defaultVariants: {
			variant: 'outline',
			size: 'md'
		}
	}
)

interface TagProps extends VariantProps<typeof tagVariants> {
	children: ReactNode
	className?: string
	onClick?: () => void
	onKeyDown?: (event: React.KeyboardEvent) => void
	tabIndex?: number
	'aria-label'?: string
}

const Tag = ({
	children,
	variant,
	size,
	className,
	onClick,
	onKeyDown,
	tabIndex = onClick ? 0 : undefined,
	'aria-label': ariaLabel,
	...props
}: TagProps) => {
	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault()
			onClick?.()
		}
		onKeyDown?.(event)
	}

	const isInteractive = Boolean(onClick)

	return (
		<span
			className={cn(tagVariants({ variant, size }), isInteractive && 'cursor-pointer', className)}
			onClick={onClick}
			onKeyDown={isInteractive ? handleKeyDown : onKeyDown}
			tabIndex={tabIndex}
			aria-label={ariaLabel}
			role={isInteractive ? 'button' : undefined}
			{...props}
		>
			{children}
		</span>
	)
}

export { Tag, tagVariants, type TagProps }

export interface FooterLink {
	title: string
	href: string
}

export interface FooterSection {
	title: string
	links: FooterLink[]
}

export interface SocialLink {
	name: string
	href: string
	icon: string
}

// Карта сайта
export const FOOTER_SECTIONS: FooterSection[] = [
	{
		title: 'Карта сайта',
		links: [
			{ title: 'Направления', href: '#directions' },
			{ title: 'Абонементы', href: '#memberships' },
			{ title: 'Пространство', href: '#space' },
			{ title: 'Тренеры', href: '#trainers' },
			{ title: 'Контакты', href: '#contacts' }
		]
	}
]

// Социальные сети
export const SOCIAL_LINKS: SocialLink[] = [
	{
		name: 'Instagram*',
		href: 'https://instagram.com/liniatela',
		icon: 'instagram'
	},
	{
		name: 'Telegram',
		href: 'https://t.me/liniatela',
		icon: 'telegram'
	},
	{
		name: 'WhatsApp',
		href: 'https://wa.me/79991234567',
		icon: 'whatsapp'
	}
]

export const COMPANY_INFO = {
	name: 'Линия тела',
	description:
		'Они знают, как создать атмосферу, где легко расслабиться, раскрыться и просто быть.',
	slogan: 'Создай свои линии - создай свое тело',
	year: '2025',
	metaDisclaimer:
		'* Принадлежит компании Meta, признанной экстремистской и запрещённой на территории РФ'
}

import InstagramIcon from '@/icons/InstagramIcon'
import TelegramIcon from '@/icons/TelegrarmIcon'
import WhatsappIcon from '@/icons/WhatsappIcon'

export interface ContactInfo {
	title: string
	value: string
	href?: string
}

export interface SocialLink {
	name: string
	href: string
	icon: string
}

export interface BusinessInfo {
	name: string
	inn: string
	ogrn: string
}

// Основная информация о студии
export const STUDIO_INFO = {
	title: 'Точный адрес студии',
	address: 'г. Абакан ул. Генерала Тихонова 2'
}

// Контакты для связи
export const CONTACT_METHODS = {
	title: 'Для связи с нами',
	telegram: {
		title: 'Telegram',
		value: '@liniatela_studio',
		href: 'https://t.me/liniatela_studio',
		icon: TelegramIcon
	},
	whatsapp: {
		title: 'WhatsApp',
		value: '+7 (999) 999-99-99',
		href: 'https://wa.me/79999999999',
		icon: WhatsappIcon
	}
}

// Социальные сети
export const SOCIAL_NETWORKS = {
	title: 'Наши соц сети',
	instagram: {
		name: 'Instagram*',
		href: 'https://www.instagram.com/linia__tela?igsh=Z3hmbWw2Y2htaWZx',
		icon: InstagramIcon
	},
	telegram: {
		name: 'Telegram',
		href: 'https://t.me/+kctFnxaDhFcxYjAy',
		icon: TelegramIcon
	}
}

// Информация об ИП
export const  BUSINESS_INFO: BusinessInfo = {
	name: 'ИП Иванов Иван Иванович',
	inn: 'ИНН 999999999999',
	ogrn: 'ОГРН 999999999999999'
}

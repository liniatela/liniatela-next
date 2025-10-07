import { StaticImageData } from 'next/image'

import mockImage1 from './images/membership-1.jpg'
import mockImage2 from './images/membership-2.jpg'
import mockImage3 from './images/membership-3.jpg'
import { COMMON_FAQ } from '@/lib/constanse/faq'
// import mockImage4 from './images/membership-4.jpg'

export interface Membership {
	id: string
	title: string
	slug: string
	coverImage: string | StaticImageData
	price: number
	shortDescription: string
	longDescription: string
	features: string[]
	duration: string
	supportText: string
	faq: {
		question: string
		answer: string
	}[]
	// Новые поля для продажи
	validityPeriod: string // "30 дней с момента покупки", "3 месяца"
	sessionsCount: number | 'unlimited' // 8, 12, 'unlimited'
	sessionsPerWeek?: string // "до 2 раз", "до 3 раз", "без ограничений"
	freeze: {
		available: boolean
		duration?: string // "1 неделя", "2 недели"
		conditions?: string // "При покупке на 3+ месяца"
	}
	includedDirections: string[] // ["Пилатес", "Йога", "Растяжка"]
	excludedDirections?: string[] // ["Индивидуальные занятия"]
	rescheduling: {
		available: boolean
		conditions?: string // "Не менее чем за 8 часов"
	}
	transferable: boolean // Можно ли передать другому человеку
	suitableFor: string[] // ["Новичков", "Продолжающих", "Всех уровней"]
	tags?: {
		isPopular?: boolean
		isBestseller?: boolean
		isRecommended?: boolean
		discount?: number // Процент скидки
		label?: string // "Выгодно", "Хит продаж"
	}
	renewalBenefit?: string // "Скидка 10% при продлении"
	restrictions?: string[] // ["Действует только в будние дни до 16:00"]
	included: string[] // ["Коврик", "Полотенце", "Вода"]
	cancellationPolicy: string // "Возврат 100% в течение 14 дней"
	pricePerSession?: number // Расчетная стоимость одного занятия
	pricing?: {
		'1': { price: number; originalPrice?: number; freeze?: string; personalTraining?: number }
		'3': { price: number; originalPrice?: number; freeze?: string; personalTraining?: number }
		'6': { price: number; originalPrice?: number; freeze?: string; personalTraining?: number }
		'12': { price: number; originalPrice?: number; freeze?: string; personalTraining?: number }
	}
}

export const MEMBERSHIPS: Membership[] = [
	{
		id: '1',
		title: 'Фокус',
		slug: 'focus-membership',
		coverImage: mockImage1,
		price: 4900,
		shortDescription: 'Выбор для тех, кто ценит стабильность и глубокое погружение.',
		longDescription: 'Начните свой путь к здоровому телу с абонемента «Фокус». Идеальный выбор для тех, кто хочет освоить одно направление и довести технику до совершенства. Вы получите персональное внимание инструктора, который адаптирует нагрузку под ваш уровень и поможет избежать травм. Занимайтесь в комфортном темпе, без спешки и перегрузок. Уже через месяц вы почувствуете прилив энергии, улучшение осанки и гибкости. Это не просто тренировки — это инвестиция в ваше здоровье и уверенность в себе.',
		features: [
			'Глубокое погружение в одно направление',
			'Отличный выбор для новичков',
			'Мягкая нагрузка, адаптированная для разного уровня подготовки'
		],
		duration: '1 месяц',
		supportText: 'Стабильный выбор для целенаправленных тренировок',
		// Новые поля
		validityPeriod: '30 дней с момента активации',
		sessionsCount: 8,
		sessionsPerWeek: 'до 2 раз в неделю',
		freeze: {
			available: false
		},

		includedDirections: ['Пилатес'],
		rescheduling: {
			available: true,
			conditions: 'Бесплатно не позднее 8 часов до занятия'
		},
		transferable: false,
		suitableFor: ['Новичков', 'Продолжающих'],
		tags: {
			isRecommended: true,
			label: 'Для новичков'
		},
		renewalBenefit: 'Скидка 5% при продлении',
		included: ['Коврик', 'Вода', 'Раздевалка'],
		cancellationPolicy: 'Возврат 100% в течение 14 дней, если не посещали занятия',
		faq: COMMON_FAQ as { question: string; answer: string; }[],
		pricing: {
			'1': {
				price: 4900
			},
			'3': {
				price: 12900,
				originalPrice: 14700 // 4900 * 3
			},
			'6': {
				price: 23500,
				originalPrice: 29400, // 4900 * 6
				freeze: '1 неделя',
				personalTraining: 1
			},
			'12': {
				price: 42000,
				originalPrice: 58800, // 4900 * 12
				freeze: '2 недели',
				personalTraining: 2
			}
		},

	},
	{
		id: '2',
		title: 'Баланс',
		slug: 'balance-membership',
		coverImage: mockImage2,
		price: 6900,
		shortDescription: 'Доступ к 3 видам тренировок для гармоничного развития.',
		longDescription: 'Абонемент «Баланс» — это свобода выбора и максимум возможностей для вашего тела. Три направления в одном абонементе позволяют гармонично развивать силу, гибкость и выносливость. Сегодня укрепляйте мышцы на пилатесе, завтра расслабьтесь на йоге, а послезавтра улучшите растяжку. Такое разнообразие не даст заскучать и поможет найти идеальный формат для себя. Экономьте до 40% по сравнению с разовыми занятиями и получайте комплексную заботу о теле. С «Балансом» вы не просто тренируетесь — вы создаете новый образ жизни.',
		features: [
			'Баланс нагрузок - укрепляйте тело, улучшайте осанку и находите время для отдыха',
			'Возможность пробовать новое и найти любимый формат занятий',
			'Выгоднее, чем покупка отдельных направлений'
		],
		duration: '1 месяц',
		supportText: 'Свобода выбора и больше возможностей для комплексного развития',
		validityPeriod: '30 дней с момента активации',
		sessionsCount: 12,
		sessionsPerWeek: 'до 3 раз в неделю',
		freeze: {
			available: true,
			duration: '1 неделя',
			conditions: 'Включена в абонемент на 3+ месяца'
		},
		includedDirections: ['Пилатес', 'Йога', 'Растяжка'],
		rescheduling: {
			available: true,
			conditions: 'Бесплатно не позднее 8 часов до занятия'
		},
		transferable: false,
		suitableFor: ['Новичков', 'Продолжающих', 'Опытных'],
		tags: {
			isPopular: true,
			label: 'Популярный'
		},
		renewalBenefit: 'Скидка 10% при продлении',
		included: ['Коврик', 'Вода', 'Полотенце', 'Раздевалка', 'Душ'],
		cancellationPolicy: 'Возврат 100% в течение 14 дней, если не посещали занятия',
		faq: COMMON_FAQ as { question: string; answer: string; }[],
		pricing: {
			'1': { price: 6900 },
			'3': { price: 18900, originalPrice: 20700 },
			'6': { price: 35500, originalPrice: 41400, freeze: '1 неделя', personalTraining: 1 },
			'12': { price: 66000, originalPrice: 82800, freeze: '2 недели', personalTraining: 2 }
		},
	},
	{
		id: '3',
		title: 'Гармония',
		slug: 'harmony-membership',
		coverImage: mockImage3,
		price: 7900,
		shortDescription: 'Полный доступ ко всем направлениям без ограничений.',
		longDescription: 'Почувствуйте полную свободу с абонементом «Гармония». Безлимитный доступ ко всем направлениям студии — это ваш ключ к совершенному телу и внутреннему спокойствию. Занимайтесь каждый день или несколько раз в неделю, выбирайте любые классы и инструкторов. Чем чаще вы приходите, тем выгоднее каждое занятие. Премиум-сервис, индивидуальный подход и щедрые бонусы при покупке на длительный срок делают «Гармонию» лучшим вложением в себя. Это не просто абонемент — это стиль жизни успешных людей, которые ценят качество и результат.',
		features: [
			'Полное погружение во все направления, свобода выбора для максимального результата',
			'Гармония тела и души - укрепляйте тело, снижаете стресс и наполняетесь энергией',
			'Максимальная выгода - чем чаще приходите, тем дешевле обходится каждое занятие'
		],
		duration: '1 месяц',
		supportText: 'Полная свобода выбора и максимальные возможности для развития',
		validityPeriod: '30 дней с момента активации',
		sessionsCount: 'unlimited',
		sessionsPerWeek: 'без ограничений',
		freeze: {
			available: true,
			duration: '2 недели',
			conditions: 'Включена в абонемент на 3+ месяца'
		},
		includedDirections: ['Пилатес', 'Йога', 'Растяжка', 'Функциональный тренинг', 'Медитация'],
		rescheduling: {
			available: true,
			conditions: 'Бесплатная отмена в любое время'
		},
		transferable: true,
		suitableFor: ['Всех уровней подготовки'],
		tags: {
			isBestseller: true,
			isRecommended: true,
			discount: 15,
			label: 'Хит продаж'
		},
		renewalBenefit: 'Скидка 15% при продлении + подарок',
		included: ['Все удобства студии', 'Коврик', 'Вода', 'Полотенце', 'Раздевалка', 'Душ', 'Сауна'],
		cancellationPolicy: 'Возврат 100% в течение 30 дней, если не посещали занятия',
		pricePerSession: undefined, // безлимит
		faq: COMMON_FAQ as { question: string; answer: string; }[],
		pricing: {
			'1': { price: 7900 },
			'3': { price: 21900, originalPrice: 23700 },
			'6': { price: 42400, originalPrice: 47400, freeze: '2 недели', personalTraining: 1 },
			'12': { price: 78000, originalPrice: 94800, freeze: '3 недели', personalTraining: 3 }
		},
	}
]

// Функция для получения абонемента по slug
export const getMembershipBySlug = (slug: string): Membership | undefined => {
	return MEMBERSHIPS.find(membership => membership.slug === slug)
}

// Функция для получения всех абонементов
export const getAllMemberships = (): Membership[] => {
	return MEMBERSHIPS
}



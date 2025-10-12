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
				price: 14700,
				freeze: '2 недели',
				personalTraining: 1
			},
			'6': {
				price: 29400,
				freeze: '1 месяц',
				personalTraining: 1 // ТОП тренер
			},
			'12': {
				price: 42000,
				originalPrice: 58800,
				freeze: '2 месяца',
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
			'3': { price: 20700, freeze: '2 недели', personalTraining: 2 },
			'6': { price: 41400, freeze: '1 месяц', personalTraining: 2 }, // ТОП тренер
			'12': { price: 66000, originalPrice: 82800, freeze: '2 месяца', personalTraining: 3 }
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
			'3': { price: 23700, freeze: '2 недели', personalTraining: 3 },
			'6': { price: 47400, freeze: '1 месяц', personalTraining: 3 }, // ТОП тренер + массаж + нутрициолог
			'12': { price: 78000, originalPrice: 94800, freeze: '2 месяца', personalTraining: 4 }
		},
	},
	{
		id: '4',
		title: 'Разовое посещение',
		slug: 'single-visit',
		coverImage: mockImage1, // Используйте подходящее изображение
		price: 890,
		shortDescription: 'Попробуйте любое направление без обязательств.',
		longDescription: 'Хотите познакомиться со студией или у вас нет времени на регулярные занятия? Разовое посещение — это ваш шанс попробовать любое направление без долгосрочных обязательств. Выберите удобное время, приходите и наслаждайтесь полноценной тренировкой под руководством профессионального инструктора. Это идеальный вариант для тех, кто впервые знакомится с пилатесом, йогой или растяжкой, или просто хочет разнообразить свой фитнес-график. Никаких абонементов, никаких обязательств — только качественная тренировка здесь и сейчас.',
		features: [
			'Возможность попробовать любое направление',
			'Без долгосрочных обязательств',
			'Идеально для первого знакомства со студией'
		],
		duration: '1 занятие',
		supportText: 'Попробуйте перед покупкой абонемента',
		validityPeriod: 'Действует в день покупки',
		sessionsCount: 1,
		freeze: {
			available: false
		},
		includedDirections: ['Пилатес', 'Йога', 'Растяжка'],
		rescheduling: {
			available: true,
			conditions: 'Бесплатно не позднее 8 часов до занятия'
		},
		transferable: false,
		suitableFor: ['Новичков', 'Всех уровней'],
		tags: {
			label: 'Без обязательств'
		},
		included: ['Коврик', 'Вода', 'Раздевалка'],
		cancellationPolicy: 'Возврат 100% не позднее 8 часов до занятия',
		pricePerSession: 890,
		faq: COMMON_FAQ as { question: string; answer: string; }[]
	},
	{
		id: '5',
		title: 'Индивидуальная тренировка',
		slug: 'personal-training',
		coverImage: mockImage2, // Используйте подходящее изображение
		price: 1900,
		shortDescription: 'Персональный подход и максимум внимания от инструктора.',
		longDescription: 'Индивидуальная тренировка — это персональный подход к вашим целям и особенностям тела. Опытный инструктор разработает программу специально для вас, учитывая ваш уровень подготовки, здоровье и пожелания. Вы получите максимум внимания, детальную отработку техники и быстрый прогресс. Это идеальный выбор для тех, кто хочет быстрых результатов, работает над специфическими проблемами или просто предпочитает заниматься без посторонних глаз. Час качественной работы над собой в комфортной обстановке.',
		features: [
			'Программа, созданная специально под вас',
			'100% внимания инструктора',
			'Быстрый прогресс и видимые результаты'
		],
		duration: '1 занятие',
		supportText: 'Максимальный результат за минимальное время',
		validityPeriod: 'По согласованию с тренером',
		sessionsCount: 1,
		freeze: {
			available: false
		},
		includedDirections: ['Пилатес', 'Йога', 'Растяжка', 'Функциональный тренинг'],
		rescheduling: {
			available: true,
			conditions: 'Бесплатно не позднее 24 часов до занятия'
		},
		transferable: false,
		suitableFor: ['Всех уровней подготовки'],
		tags: {
			isRecommended: true,
			label: 'Персональный подход'
		},
		included: ['Все оборудование студии', 'Коврик', 'Вода', 'Полотенце', 'Индивидуальная программа'],
		cancellationPolicy: 'Возврат 100% не позднее 24 часов до занятия',
		pricePerSession: 1900,
		faq: COMMON_FAQ as { question: string; answer: string; }[]
	},
	{
		id: '6',
		title: 'Индивидуальная тренировка PRO',
		slug: 'personal-training-pro',
		coverImage: mockImage3, // Используйте подходящее изображение
		price: 2500,
		shortDescription: 'Занятие с топовым инструктором студии.',
		longDescription: 'Индивидуальная тренировка с ТОП-инструктором — это премиум-уровень заботы о вашем теле. Наши лучшие тренеры с многолетним опытом и международными сертификатами создадут для вас уникальную программу, которая учитывает малейшие нюансы вашей физиологии и целей. Углубленная работа с телом, использование авторских методик и профессиональные рекомендации по питанию и образу жизни. Это не просто тренировка — это инвестиция в долгосрочное здоровье и красоту с гарантией результата.',
		features: [
			'Работа с самыми опытными инструкторами студии',
			'Авторские методики и индивидуальный подход',
			'Комплексные рекомендации по образу жизни'
		],
		duration: '1 занятие (60 минут)',
		supportText: 'Премиум-качество от лучших инструкторов',
		validityPeriod: 'По согласованию с тренером',
		sessionsCount: 1,
		freeze: {
			available: false
		},
		includedDirections: ['Пилатес', 'Йога', 'Растяжка', 'Функциональный тренинг', 'Реабилитация'],
		rescheduling: {
			available: true,
			conditions: 'Бесплатно не позднее 24 часов до занятия'
		},
		transferable: false,
		suitableFor: ['Всех уровней подготовки'],
		tags: {
			isBestseller: true,
			isRecommended: true,
			label: 'Премиум'
		},
		renewalBenefit: 'Скидка 10% при покупке 5+ тренировок',
		included: ['Все оборудование студии', 'Коврик', 'Вода', 'Полотенце', 'Индивидуальная программа', 'План питания'],
		cancellationPolicy: 'Возврат 100% не позднее 24 часов до занятия',
		pricePerSession: 2500,
		faq: COMMON_FAQ as { question: string; answer: string; }[]
	},
	{
		id: '7',
		title: 'Сплит тренировка',
		slug: 'split-training',
		coverImage: mockImage1, // Используйте подходящее изображение
		price: 2900,
		shortDescription: 'Тренировка на двоих с персональным вниманием инструктора.',
		longDescription: 'Сплит-тренировка — это уникальная возможность заниматься вдвоем с персональным инструктором. Приводите друга, партнера или члена семьи и наслаждайтесь индивидуальным подходом по доступной цене. Инструктор адаптирует программу под обоих участников, учитывая разный уровень подготовки. Вы получите все преимущества персональной тренировки — внимание к технике, индивидуальные корректировки и мотивацию, но при этом разделите стоимость на двоих. Это не только выгодно, но и веселее тренироваться вместе!',
		features: [
			'Персональный инструктор на двоих',
			'Программа адаптируется под каждого участника',
			'Выгоднее, чем две индивидуальные тренировки'
		],
		duration: '1 занятие (60 минут)',
		supportText: 'Тренируйтесь вместе и экономьте',
		validityPeriod: 'По согласованию с тренером',
		sessionsCount: 1,
		freeze: {
			available: false
		},
		includedDirections: ['Пилатес', 'Йога', 'Растяжка', 'Функциональный тренинг'],
		rescheduling: {
			available: true,
			conditions: 'Бесплатно не позднее 24 часов до занятия'
		},
		transferable: true,
		suitableFor: ['Новичков', 'Продолжающих'],
		tags: {
			label: 'Для двоих'
		},
		renewalBenefit: 'Скидка 10% при покупке 5+ тренировок',
		included: ['Все оборудование студии', 'Коврики', 'Вода', 'Полотенца'],
		cancellationPolicy: 'Возврат 100% не позднее 24 часов до занятия',
		pricePerSession: 1450, // На человека
		faq: COMMON_FAQ as { question: string; answer: string; }[]
	},
	{
		id: '8',
		title: 'Сплит тренировка PRO',
		slug: 'split-training-pro',
		coverImage: mockImage2, // Используйте подходящее изображение
		price: 3500,
		shortDescription: 'Занятие на двоих с топовым инструктором студии.',
		longDescription: 'Сплит-тренировка PRO — это премиум-формат занятий для тех, кто хочет тренироваться вдвоем с лучшими инструкторами студии. ТОП-тренер создаст индивидуальную программу для каждого участника, используя авторские методики и профессиональный опыт. Вы получите максимум внимания, глубокую работу с телом и комплексные рекомендации. Это отличный выбор для пар, друзей или родственников, которые хотят достичь серьезных результатов, поддерживая друг друга. Премиум-качество по разумной цене при разделении на двоих.',
		features: [
			'Работа с топовым инструктором студии',
			'Индивидуальный подход к каждому участнику',
			'Авторские методики и профессиональные рекомендации'
		],
		duration: '1 занятие (60 минут)',
		supportText: 'Премиум-тренировки для двоих',
		validityPeriod: 'По согласованию с тренером',
		sessionsCount: 1,
		freeze: {
			available: false
		},
		includedDirections: ['Пилатес', 'Йога', 'Растяжка', 'Функциональный тренинг', 'Реабилитация'],
		rescheduling: {
			available: true,
			conditions: 'Бесплатно не позднее 24 часов до занятия'
		},
		transferable: true,
		suitableFor: ['Всех уровней подготовки'],
		tags: {
			isRecommended: true,
			label: 'Премиум для двоих'
		},
		renewalBenefit: 'Скидка 15% при покупке 5+ тренировок',
		included: ['Все оборудование студии', 'Коврики', 'Вода', 'Полотенца', 'Индивидуальные программы', 'Рекомендации по питанию'],
		cancellationPolicy: 'Возврат 100% не позднее 24 часов до занятия',
		pricePerSession: 1750, // На человека
		faq: COMMON_FAQ as { question: string; answer: string; }[]
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



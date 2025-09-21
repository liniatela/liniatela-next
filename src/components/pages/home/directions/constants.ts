import { StaticImageData } from 'next/image'
import mockImage1 from './images/direction-1.jpg'
import mockImage2 from './images/direction-2.jpg'
import mockImage3 from './images/direction-3.jpg'
import mockImage4 from './images/direction-4.jpg'

export interface Direction {
	id: string
	shortDescription: string
	name: string
	slug: string
	fullDescription: string
	difficulty: 1 | 2 | 3
	duration: string
	calories: number
	coverImage: string | StaticImageData
	gallery?: string[] | StaticImageData[]
}

export const MOCK_DIRECTIONS: Direction[] = [
	{
		id: '1',
		shortDescription: 'Перезагрузи тело и нервную систему через глубокое расслабление.',
		name: 'МФР',
		slug: 'mfr',
		fullDescription:
			'Хатха йога — это классическая форма йоги, которая фокусируется на физических позах (асанах) и дыхательных техниках (пранаяме). Эта практика идеально подходит для начинающих и тех, кто хочет углубить свое понимание йоги. Занятия проходят в спокойном темпе, позволяя телу адаптироваться к позам и развивать гибкость постепенно. Хатха йога — это классическая форма йоги, которая фокусируется на физических позах (асанах) и дыхательных техниках (пранаяме). Эта практика идеально подходит для начинающих и тех, кто хочет углубить свое понимание йоги. Занятия проходят в спокойном темпе, позволяя телу адаптироваться к позам и развивать гибкость постепенно.',
		difficulty: 1,
		duration: '90 минут',
		calories: 180,
		coverImage: mockImage1,
		gallery: [mockImage1, mockImage2, mockImage3, mockImage4]
	},
	{
		id: '2',
		shortDescription: 'Находи тишину, силу и устойчивость в движении и дыхании.',
		name: 'Йога',
		slug: 'yoga',
		fullDescription:
			'Виньяса флоу — это динамичная форма йоги, где движения плавно переходят одно в другое в ритме дыхания. Каждое занятие представляет собой творческую последовательность поз, которая развивает силу, гибкость и концентрацию. Подходит для практикующих с базовым уровнем подготовки.',
		difficulty: 2,
		duration: '75 минут',
		calories: 350,
		coverImage: mockImage2,
		gallery: [mockImage1, mockImage2, mockImage3, mockImage4]
	},
	{
		id: '3',
		shortDescription: 'Укрепляй мышцы в глубине и строй баланс изнутри наружу.',
		name: 'Пилатес',
		slug: 'pilates',
		fullDescription:
			'Аштанга йога — это традиционная и интенсивная форма йоги, которая следует строгой последовательности поз. Эта динамичная практика развивает силу, гибкость и выносливость, требуя высокого уровня концентрации и физической подготовки. Рекомендуется для опытных практикующих.',
		difficulty: 3,
		duration: '90 минут',
		calories: 450,
		coverImage: mockImage3,
		gallery: [mockImage1]
	},
	{
		id: '4',
		shortDescription: 'Мягко раскрывай тело и находи больше свободы в каждом движении.',
		name: 'Растяжка',
		slug: 'rastyashka',
		fullDescription:
			'Инь йога — это медитативная практика, где позы удерживаются длительное время (3-7 минут) для глубокого расслабления соединительных тканей. Эта пассивная форма йоги помогает снять стресс, улучшить гибкость и найти внутренний покой. Подходит для всех уровней подготовки.',
		difficulty: 1,
		duration: '75 минут',
		calories: 120,
		coverImage: mockImage4
	},
	{
		id: '5',
		shortDescription: 'Силовая йога для укрепления всего тела',
		name: 'Пауэр Йога',
		slug: 'power-yoga',
		fullDescription:
			'Пауэр йога — это энергичная и силовая форма йоги, которая сочетает традиционные асаны с кардио-нагрузкой. Эта практика направлена на развитие силы, выносливости и сжигание калорий. Идеально подходит для тех, кто хочет получить интенсивную тренировку и духовную практику одновременно.',
		difficulty: 2,
		duration: '60 минут',
		calories: 400,
		coverImage: mockImage1,
		gallery: [mockImage1, mockImage2, mockImage3, mockImage4]
	},
	{
		id: '6',
		shortDescription: 'Медитативная практика с мантрами и мудрами',
		name: 'Кундалини Йога',
		slug: 'kundalini-yoga',
		fullDescription:
			'Кундалини йога — это духовная практика, которая сочетает физические упражнения, дыхательные техники, медитацию и пение мантр. Цель практики — пробуждение внутренней энергии и достижение высших состояний сознания. Подходит для тех, кто ищет глубокую духовную трансформацию.',
		difficulty: 2,
		duration: '90 минут',
		calories: 250,
		coverImage: mockImage2
	}
]

export const DIFFICULTY_LABELS = {
	1: 'Начинающий',
	2: 'Средний',
	3: 'Продвинутый'
} as const

export const getDifficultyLabel = (difficulty: 1 | 2 | 3): string => {
	return DIFFICULTY_LABELS[difficulty]
}

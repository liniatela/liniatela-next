import { StaticImageData } from 'next/image'

import mockImage1 from './images/mock-image-1.jpg'
import mockImage2 from './images/hall-image-1.jpg'
import mockImage3 from './images/hall-image-2.jpg'
import mockImage4 from './images/hall-image-3.jpg'

export interface StudioInfo {
	address: string
	area: string
	reviewsPercent: string
	hallsCount: string
	directionsCount: string
	description: string
	features: {
		label: string
		value: string
		description: string
	}[]
	generalImages: (string | StaticImageData)[]
}

export interface Hall {
	id: string
	name: string
	description: string
	image: string | StaticImageData
	video?: string
	features: string[]
}

export const STUDIO_INFO: StudioInfo = {
	address: 'ул. Дмитровская 5А, корп. 5 этаж',
	area: '120 кв м.',
	reviewsPercent: '98 %',
	hallsCount: '3 зала',
	directionsCount: '12 лучших',
	description:
		'Тёплое, светлое и камерное пространство, где ты можешь замедлиться, переключиться и почувствовать себя.',
	features: [
		{
			label: '120 кв м.',
			value: 'Просторной студии',
			description: 'Просторные залы для комфортных тренировок'
		},
		{
			label: '98 %',
			value: 'Хороших отзывов',
			description: 'Высокий рейтинг от наших учеников'
		},
		{
			label: '3 зала',
			value: 'С необходимым оборудованием',
			description: 'Современное оборудование для всех направлений'
		},
		{
			label: '12 лучших',    
			value: 'Направлений на выбор',
			description: 'Разнообразие практик для каждого'
		}
	],
	generalImages: [mockImage1, mockImage2, mockImage3]
}

export const HALLS: Hall[] = [
	{
		id: '1',
		name: 'Зал растяжки',
		description: 'Для групповых тренировок по йоге и растяжке',
		image: mockImage2,
		features: [
			'Мягкое освещение',
			'Коврики и блоки для йоги',
			'Зеркальные стены',
			'Система вентиляции'
		]
	},
	{
		id: '2',
		name: 'Зал пилатеса',
		description: 'Специализированный зал для занятий пилатесом',
		image: mockImage3,
		features: [
			'Реформеры для пилатеса',
			'Мячи и резинки',
			'Профессиональные маты',
			'Зеркальное покрытие'
		]
	},
	{
		id: '3',
		name: 'Танцевальный зал',
		description: 'Просторный зал для танцевальных направлений',
		image: mockImage4,
		features: [
			'Паркетный пол',
			'Профессиональные зеркала',
			'Звуковая система',
			'Хореографические станки'
		]
	},
	{
		id: '4',
		name: 'Зал для МФР',
		description: 'Уютное пространство для восстановительных практик',
		image: mockImage2,
		features: ['Массажные роллы', 'Теннисные мячи', 'Мягкое покрытие', 'Расслабляющая атмосфера']
	},
	{
		id: '5',
		name: 'Аэро-зал',
		description: 'Зал с гамаками для воздушных практик',
		image: mockImage3,
		features: [
			'Специальные гамаки',
			'Высокие потолки',
			'Надежные крепления',
			'Мягкие маты под гамаками'
		]
	}
]

import { StaticImageData } from 'next/image'

import trainerImage1 from './images/trainer-1.jpg'
import trainerImage2 from './images/trainer-2.jpg'

export interface Trainer {
	id: string
	name: string
	slug: string
	position: string
	photo: string | StaticImageData
	quote: string
	directions: string[]
	description: string
	experience?: string
	certifications?: string[]
}

export const TRAINERS: Trainer[] = [
	{
		id: '1',
		name: 'Светлана С.',
		slug: 'svetlana-s',
		position: 'Тренер',
		photo: trainerImage1,
		quote: 'Тело — это не проект, а дом',
		directions: ['Растяжка', 'Пилатес', 'Йога', 'МФР'],
		description:
			'Тренер по антигравити и гамакам, сертифицированная по системе AntiGravity®. Обожает работать с новичками, даёт поддержку и уверенность на высоте. Ведёт с мягкой строгостью, выравнивает технику и помогает преодолеть страх. После её занятий — ощущение лёгкости и полёта.',
		experience: '5+ лет',
		certifications: [
			'AntiGravity® Level 1-2',
			'Сертификат по йоге Хатха',
			'Курс анатомии для йоги'
		]
	},
	{
		id: '2',
		name: 'Инна А.',
		slug: 'inna-a',
		position: 'Инструктор',
		photo: trainerImage2,
		quote: 'Тело — это не проект, а дом',
		directions: ['Танец свободы', 'Энергия тела', 'Аэро-йога'],
		description:
			'Мастер танцевальных направлений и энергетических практик. Помогает раскрыть женственность через движение, работает с внутренней уверенностью и самовыражением. Её занятия — это микс силы, грации и эмоциональной свободы.',
		experience: '7+ лет',
		certifications: [
			'Сертификат Contemporary Dance',
			'Курс по танцевально-двигательной терапии',
			'Тренинг по женской энергетике'
		]
	},
	{
		id: '3',
		name: 'Елена К.',
		slug: 'elena-k',
		position: 'Мастер-тренер',
		photo: trainerImage1,
		quote: 'Движение — это жизнь, а жизнь — это движение',
		directions: ['Пилатес', 'МФР', 'Невесомая растяжка'],
		description:
			'Специалист по восстановительным практикам и пилатесу. Работает с реабилитацией после травм, знает анатомию как никто другой. Её подход — мягкий, но эффективный. Помогает построить здоровые отношения с телом.',
		experience: '8+ лет',
		certifications: [
			'Сертификат Pilates Comprehensive',
			'Курс МФР терапии',
			'Анатомия и биомеханика движений'
		]
	},
	{
		id: '4',
		name: 'Мария Т.',
		slug: 'maria-t',
		position: 'Тренер',
		photo: trainerImage2,
		quote: 'В каждом движении — частичка души',
		directions: ['Йога', 'Растяжка', 'Аэро-йога'],
		description:
			'Йога-терапевт и специалист по работе с дыханием. Создаёт атмосферу доверия и принятия на занятиях. Помогает найти баланс между телом и разумом, работает с энергетическими блоками через асаны.',
		experience: '6+ лет',
		certifications: ['200h Yoga Alliance', 'Курс по пранаяме', 'Сертификат йога-терапии']
	}
]

// Функция для получения тренера по slug
export const getTrainerBySlug = (slug: string): Trainer | undefined => {
	return TRAINERS.find(trainer => trainer.slug === slug)
}

// Функция для получения всех тренеров
export const getAllTrainers = (): Trainer[] => {
	return TRAINERS
}

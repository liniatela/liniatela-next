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
    id: '2',
    name: 'Лиля Кондакова',
    slug: 'lilya-k',
    position: 'PRO Тренер',
    photo: trainerImage2,
    quote: 'Человек молод и здоров, пока у него гибкий позвоночник',
    directions: ['Растяжка', 'Пилатес', 'МФР', 'Невесомая растяжка'],
    description:
      'Лиля Кондакова — сертифицированный фитнес-тренер, специалист по работе с женским телом и осознанному движению. Главный принцип Лили — постоянное развитие. Она регулярно проходит обучение, посещает фитнес-конвенции и внедряет современные методики в свои тренировки. Её миссия — помочь каждой женщине почувствовать уверенность, полюбить своё тело и сделать спорт частью жизни. Тренировки с Лилей — это баланс результата и удовольствия, где каждая участница получает заряд энергии и отличного настроения.',
    experience: '7+ лет',
    certifications: [
      'Сертификат Contemporary Dance',
      'Курс по танцевально-двигательной терапии',
      'Тренинг по женской энергетике'
    ]
  },
  {
    id: '1',
    name: 'Юля Дригота',
    slug: 'julia-d',
    position: 'Тренер',
    photo: trainerImage1,
    quote: 'Плохая тренировка - та, которой не было',
    directions: ['Растяжка', 'МФР', 'Энергия тела'],
    description:
      'Специалист по динамичной растяжке и функциональному тренингу. Тренировки с Юлей — это путь к сильному, гибкому и гармоничному телу. Более 7 лет в спорте научили её видеть, как движение меняет не только тело, но и отношение к себе. Юля поможет вам улучшить гибкость, осанку, подвижность суставов и вернуть лёгкость каждому движению.'
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

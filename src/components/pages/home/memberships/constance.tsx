import { StaticImageData } from 'next/image'

import mockImage1 from './images/membership-1.jpg'
import mockImage2 from './images/membership-2.jpg'
import mockImage3 from './images/membership-3.jpg'
import mockImage4 from './images/membership-4.jpg'
import mockImage5 from './images/membership-5.jpg'
import mockImage6 from './images/membership-6.jpg'

import { COMMON_FAQ } from '@/lib/constanse/faq'
// import mockImage4 from './images/membership-4.jpg'

export interface PricingPeriod {
  price: number
  originalPrice?: number
  freeze?: string
  personalTraining?: number
  savings?: number
  massage?: boolean
  nutritionist?: boolean
}

export type SubscriptionPeriod = '1' | '3' | '6' | '12'


export interface Membership {
  id: string
  title: string
  slug: string
  coverImage: string | StaticImageData
  price: number | string
  shortDescription: string
  longDescription: string
  duration: string
  faq: {
    question: string
    answer: string
  }[]
  validityPeriod: string
  sessionsCount?: number | 'unlimited' // Сделали опциональным
  sessionsPerWeek?: string
  freeze: {
    available: boolean
    duration?: string
    conditions?: string
  }
  suitableFor: string[]
  pricePerSession?: number
  pricePerSessionPro?: number
  pricing?: Partial<Record<SubscriptionPeriod, PricingPeriod>>
}

export const MEMBERSHIPS: Membership[] = [
  {
    id: '1',
    title: 'Фокус',
    slug: 'focus-membership',
    coverImage: mockImage1,
    price: 4900,
    shortDescription: 'Полное погружение в одно направление',
    longDescription: 'Начните свой путь к здоровому телу с абонемента «Фокус». Идеальный выбор для тех, кто хочет освоить одно направление и довести технику до совершенства. Вы получите персональное внимание инструктора, который адаптирует нагрузку под ваш уровень и поможет избежать травм. Занимайтесь в комфортном темпе, без спешки и перегрузок. Уже через месяц вы почувствуете прилив энергии, улучшение осанки и гибкости. Это не просто тренировки — это инвестиция в ваше здоровье и уверенность в себе.',
    duration: '1 мес.',
    validityPeriod: '30 дней с момента активации',
    sessionsCount: 'unlimited',
    freeze: {
      available: false
    },
    suitableFor: ['Новичков', 'Продолжающих'],
    faq: COMMON_FAQ as { question: string; answer: string; }[],
    pricing: {
      '1': {
        price: 4900
      },
      '3': {
        price: 14700,
        savings: 1900,
        freeze: '14 дней',
        personalTraining: 1
      },
      '6': {
        price: 29400,
        savings: 4500,
        freeze: '30 дней',
        personalTraining: 1, // PRO тренер
        massage: true
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
    shortDescription: 'Доступ к 3 видам тренировок для гармоничного развития',
    longDescription: 'Абонемент «Баланс» — это свобода выбора и максимум возможностей для вашего тела. Три направления в одном абонементе позволяют гармонично развивать силу, гибкость и выносливость. Сегодня укрепляйте мышцы на пилатесе, завтра расслабьтесь на йоге, а послезавтра улучшите растяжку. Такое разнообразие не даст заскучать и поможет найти идеальный формат для себя. Экономьте до 40% по сравнению с разовыми занятиями и получайте комплексную заботу о теле. С «Балансом» вы не просто тренируетесь — вы создаете новый образ жизни.',
    duration: '1 мес.',
    validityPeriod: '30 дней с момента активации',
    sessionsCount: 'unlimited',
    freeze: {
      available: true,
      duration: '14 дней',
      conditions: 'Включена в абонемент на 3+ месяца'
    },
    suitableFor: ['Новичков', 'Продолжающих', 'Опытных'],
    faq: COMMON_FAQ as { question: string; answer: string; }[],
    pricing: {
      '1': { price: 6900 },
      '3': {
        price: 20700,
        savings: 3800,
        freeze: '14 дней',
        personalTraining: 2
      },
      '6': {
        price: 41400,
        savings: 7000,
        freeze: '30 дней',
        personalTraining: 2, // PRO тренер
        massage: true
      },
      '12': {
        price: 66000,
        originalPrice: 82800,
        freeze: '2 месяца',
        personalTraining: 3
      }
    },
  },
  {
    id: '3',
    title: 'Гармония',
    slug: 'harmony-membership',
    coverImage: mockImage3,
    price: 7900,
    shortDescription: 'Полный доступ ко всем направлениям без ограничений',
    longDescription: 'Почувствуйте полную свободу с абонементом «Гармония». Безлимитный доступ ко всем направлениям студии — это ваш ключ к совершенному телу и внутреннему спокойствию. Занимайтесь каждый день или несколько раз в неделю, выбирайте любые классы и инструкторов. Чем чаще вы приходите, тем выгоднее каждое занятие. Премиум-сервис, индивидуальный подход и щедрые бонусы при покупке на длительный срок делают «Гармонию» лучшим вложением в себя. Это не просто абонемент — это стиль жизни успешных людей, которые ценят качество и результат.',
    duration: '1 мес.',
    validityPeriod: '30 дней с момента активации',
    sessionsCount: 'unlimited',
    sessionsPerWeek: 'без ограничений',
    freeze: {
      available: true,
      duration: '14 дней',
      conditions: 'Включена в абонемент на 3+ месяца'
    },
    suitableFor: ['Всех уровней подготовки'],
    pricePerSession: undefined,
    faq: COMMON_FAQ as { question: string; answer: string; }[],
    pricing: {
      '1': { price: 7900 },
      '3': {
        price: 23700,
        savings: 5700,
        freeze: '14 дней',
        personalTraining: 3
      },
      '6': {
        price: 47400,
        savings: 12000,
        freeze: '30 дней',
        personalTraining: 3, // PRO тренер
        massage: true,
        nutritionist: true
      },
      '12': {
        price: 78000,
        originalPrice: 94800,
        freeze: '2 месяца',
        personalTraining: 4
      }
    },
  },
  {
    id: '4',
    title: 'Разовое посещение',
    slug: 'single-visit',
    coverImage: mockImage4,
    price: 890,
    shortDescription: 'Попробуйте любое направление без обязательств',
    longDescription: 'Хотите познакомиться со студией или у вас нет времени на регулярные занятия? Разовое посещение — это ваш шанс попробовать любое направление без долгосрочных обязательств. Выберите удобное время, приходите и наслаждайтесь полноценной тренировкой под руководством профессионального инструктора. Это идеальный вариант для тех, кто впервые знакомится с пилатесом, йогой или растяжкой, или просто хочет разнообразить свой фитнес-график. Никаких абонементов, никаких обязательств — только качественная тренировка здесь и сейчас.',
    duration: '',
    validityPeriod: 'Действует в день покупки',
    freeze: {
      available: false
    },
    suitableFor: ['Новичков', 'Всех уровней'],
    pricePerSession: 890,
    faq: COMMON_FAQ as { question: string; answer: string; }[]
  },
  {
    id: '5',
    title: 'Индивидуальная тренировка',
    slug: 'personal-training',
    coverImage: mockImage6,
    price: 'от 1900',
    shortDescription: 'Персональный подход и максимум внимания от инструктора',
    longDescription: 'Индивидуальная тренировка — это персональный подход к вашим целям и особенностям тела. Опытный инструктор разработает программу специально для вас, учитывая ваш уровень подготовки, здоровье и пожелания. Вы получите максимум внимания, детальную отработку техники и быстрый прогресс. Это идеальный выбор для тех, кто хочет быстрых результатов, работает над специфическими проблемами или просто предпочитает заниматься без посторонних глаз. Час качественной работы над собой в комфортной обстановке.',
    duration: '',
    validityPeriod: 'По согласованию с тренером',
    freeze: {
      available: false
    },
    suitableFor: ['Всех уровней подготовки'],
    pricePerSession: 1900,
    pricePerSessionPro: 2500,
    faq: COMMON_FAQ as { question: string; answer: string; }[]
  },
  {
    id: '6',
    title: 'Сплит тренировка',
    slug: 'split-training',
    coverImage: mockImage5,
    price: 'от 2 900',
    shortDescription: 'Тренировка на двоих с персональным вниманием инструктора',
    longDescription: 'Сплит-тренировка — это уникальная возможность заниматься вдвоем с персональным инструктором. Приводите друга, партнера или члена семьи и наслаждайтесь индивидуальным подходом по доступной цене. Инструктор адаптирует программу под обоих участников, учитывая разный уровень подготовки. Вы получите все преимущества персональной тренировки — внимание к технике, индивидуальные корректировки и мотивацию, но при этом разделите стоимость на двоих. Это не только выгодно, но и веселее тренироваться вместе!',
    duration: '',
    validityPeriod: 'По согласованию с тренером',
    freeze: {
      available: false
    },
    suitableFor: ['Новичков', 'Продолжающих'],
    pricePerSession: 2900,
    pricePerSessionPro: 3500,
    faq: COMMON_FAQ as { question: string; answer: string; }[]
  },
]

// Функция для получения абонемента по slug
export const getMembershipBySlug = (slug: string): Membership | undefined => {
  return MEMBERSHIPS.find(membership => membership.slug === slug)
}

// Функция для получения всех абонементов
export const getAllMemberships = (): Membership[] => {
  return MEMBERSHIPS
}



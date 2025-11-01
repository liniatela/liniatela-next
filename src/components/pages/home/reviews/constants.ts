import backgroundCard from './images/background-card.jpg'

const review1 = '/videos/reviews/review-1.mp4'
const review2 = '/videos/reviews/review-2.mp4'
const review3 = '/videos/reviews/review-3.mp4'
const review4 = '/videos/reviews/review-4.mp4'

export type ReviewType = 'text' | 'image' | 'video'

export type Review = {
  id: number
  type: ReviewType
  name?: string
  description?: string
  image: string
  videoUrl?: string
  text?: string
  badge?: string
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    type: 'text',
    text: 'Они уже нашли свою линию тела',
    description:
      'Мы можем долго рассказывать про атмосферу, но лучше нам успешать от тех, кто это уже полуществовал.',
    badge: 'Отзывы',
    image: backgroundCard.src
  },
  {
    id: 2,
    type: 'video',
    name: 'Наташа П.',
    description: 'Ходит на йогу',
    image: backgroundCard.src,
    videoUrl: review1
  },
  {
    id: 3,
    type: 'video',
    name: 'Алёна С.',
    description: 'Ходит на МФР',
    image: backgroundCard.src,
    videoUrl: review2
  },
  {
    id: 4,
    type: 'video',
    name: 'Аня К.',
    description: 'Ходит на растяжку',
    image: backgroundCard.src,
    videoUrl: review3
  },
  {
    id: 5,
    type: 'video',
    name: 'Оля К.',
    description: 'Ходит на пилатес',
    image: backgroundCard.src,
    videoUrl: review4
  }
]

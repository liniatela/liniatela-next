import { StaticImageData } from 'next/image'
import image from './images/problems-image.jpg'
import { ReactNode } from 'react'

export interface IProblem {
  id: string
  title: string
  description: string
}

export interface IProblemsData {
  title: string | ReactNode
  image: string | StaticImageData
  problems: IProblem[]
}

export const MOCK_PROBLEMS_DATA: IProblemsData = {
  title: 'Какие проблемы <span>решает мягкий фитнес?</span>',
  image: image,
  problems: [
    {
      id: '0',
      title: 'Эмоциональное состояние',
      description:
        'Мягкий фитнес помогает расслабиться, нормализует сон, улучшает общий эмоциональный фон'
    },
    {
      id: '1',
      title: 'Лишний вес',
      description:
        'Мягкий фитнес помогает уменьшить объёмы тела в щадящем режиме, избавляет от отёков и добавляет лёгкость вашим движениям'
    },
    {
      id: '2',
      title: 'Осанка',
      description:
        'Мягкий фитнес корректирует нарушения позвоночника, избавляет от болей в спине и шее, предотвращает развитие остеохондроза'
    },
    {
      id: '3',
      title: 'Рельеф',
      description:
        'Мягкий фитнес укрепляет как поверхностные так и глубокие группы мышц, улучшает координацию движений'
    },
    {
      id: '4',
      title: 'Гибкость',
      description: 'Мягкий фитнес развивает эластичность мышц и связок, улучшает подвижность тела'
    }
  ]
}

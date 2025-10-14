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
  category: string
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
    shortDescription:
      'Техника самомассажа, которая освобождает мышцы от зажимов и улучшает кровообращение и лимфоток.',
    name: 'МФР',
    category: 'Восстановление',
    slug: 'mfr',
    fullDescription:
      'МФР - это техника глубокой работы с мышцами и фасциями с помощью специальных роллов и мячей. МФР помогает мягко снимать мышечные зажимы, улучшать кровообращение и запускать лимфу. Это бережный способ позаботиться о здоровье мышц и вернуть телу свободу.',
    difficulty: 1,
    duration: '1 час',
    calories: 120,
    coverImage: mockImage1,
    gallery: [mockImage1, mockImage2, mockImage3, mockImage4]
  },
  {
    id: '2',
    shortDescription: 'Мягкая практика для тела и ума. Сила, расслабление и энергия.',
    name: 'Йога',
    category: 'Йога',
    slug: 'yoga',
    fullDescription:
      'Йога - это гармоничное соединение дыхательных практик, мягких физических упражнений и осознанного расслабления. Занятия помогают укрепить тело, улучшить осанку и научиться управлять своим состоянием через дыхание и концентрацию.',
    difficulty: 2,
    duration: '1 час',
    calories: 300,
    coverImage: mockImage2,
    gallery: [mockImage1, mockImage2, mockImage3, mockImage4]
  },
  {
    id: '3',
    shortDescription:
      'Путь к балансу и сила изнутри. Тренировки по пилатесу делают тело более выносливым, гибким и здоровым.',
    name: 'Пилатес',
    category: 'Пилатес',
    slug: 'pilates',
    fullDescription:
      'Пилатес - это тренировка, направленная на укрепление центра тела и восстановление внутреннего баланса. Особое внимание уделяется мышцам кора, которые поддерживают позвоночник, формируют осанку и дарят устойчивость в движениях.',
    difficulty: 2,
    duration: '1 час',
    calories: 300,
    coverImage: mockImage3,
    gallery: [mockImage1]
  },
  {
    id: '4',
    shortDescription: 'Лёгкость движений, расслабление и координация тела',
    name: 'Растяжка',
    slug: 'rastyashka',
    category: 'Классическая растяжка',
    fullDescription:
      'Растяжка - это комплекс мягких упражнений, направленных на развитие гибкости, снятие мышечного напряжения и улучшения подвижности суставов. Все упражнения выполняются плавно с акцентом на дыхание и осознанность движений.',
    difficulty: 2,
    duration: '1.5 часа',
    calories: 250,
    coverImage: mockImage4
  },
  {
    id: '5',
    shortDescription: 'Парящая практика, которая снимает напряжение и дарит невесомость',
    name: 'Аэро-йога',
    category: 'Йога на гамаках',
    slug: 'aero-yoga',
    fullDescription:
      'Fly yoga - это практика в специальных гамаках, где каждое движение становится лёгким и невесомым. Парящие упражнения помогают улучшить гибкость, разгрузить позвоночник и подарить ощущение свободы.',
    difficulty: 3,
    duration: '1 час',
    calories: 300,
    coverImage: mockImage1,
    gallery: [mockImage1, mockImage2, mockImage3, mockImage4]
  },
  {
    id: '6',
    shortDescription: 'Динамика, гибкость и ощущение полёта',
    name: 'Невесомая растяжка',
    category: 'Растяжка на гамаках',
    slug: 'nevesomaya-rastyashka',
    fullDescription:
      'Флай стретчинг - это динамичная растяжка в гамаках, которая сочетает мягкую работу на гибкость с активными элементами движения. Используя гамаки, тело получает дополнительную свободу, мышцы глубже прорабатываются, а суставы становятся более подвижными.',
    difficulty: 3,
    duration: '1 час',
    calories: 350,
    coverImage: mockImage2
  },
  {
    id: '7',
    shortDescription:
      'Танец, где женственность встречается с энергией. Пластика, сила и свобода в каждом движении',
    name: 'Танец свободы',
    category: 'Танцы',
    slug: 'tanec-svobody',
    fullDescription:
      'Это направление создано для девушек, которые хотят соединить в себе силу и нежность, энергию и грацию. Freedom Motion дарит уверенность, делает походку выразительной, движения - соблазнительными, а энергетику - по-настоящему магнетической.',
    difficulty: 3,
    duration: '1 час',
    calories: 350,
    coverImage: mockImage3,
    gallery: [mockImage1, mockImage2, mockImage3, mockImage4]
  },
  {
    id: '8',
    shortDescription: 'Путь к подтянутому телу, энергии и уверенности в себе.',
    name: 'Энергия тела',
    category: 'Силовая',
    slug: 'energia-tela',
    fullDescription:
      'Комплексные тренировки, направленные на развитие силы, выносливости и баланса. В основе Fit Energy упражнения с собственным весом и дополнительным оборудованием. Развиваем силу, сохраняя женственные формы.',
    difficulty: 3,
    duration: '1 час',
    calories: 450,
    coverImage: mockImage4
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

export type CTATagType = {
  id: string
  label: string
}

export type CTADataType = {
  title: string
  description: string
  tags: CTATagType[]
  button: {
    label: string
    link: string
    ariaLabel: string
  }
  sideNote: string
}

export const MOCK_CTA_DATA: CTADataType = {
  title: 'Попробуй занятие, после которого не захочется уходить',
  description:
    'Твое первое занятие — как знакомство с собой. В тёплой атмосфере, без ожиданий и давления. Просто почувствуй, как твоё тело начинает слушать и помогать тебе.',
  tags: [
    { id: 'pilates', label: 'Пилатес' },
    { id: 'stretch', label: 'Стретчинг' },
    { id: 'hiit', label: 'HIIT' }
  ],
  button: {
    label: 'Записаться →',
    link: '/',
    ariaLabel: 'Записаться на первое занятие уже сейчас'
  },
  sideNote: 'Запишись на первое занятие уже сейчас'
}

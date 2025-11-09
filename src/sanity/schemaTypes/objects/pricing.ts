import { defineType } from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Ценообразование',
  type: 'object',
  fields: [
    {
      name: 'period',
      title: 'Период',
      type: 'string',
      options: {
        list: [
          { title: '1 месяц', value: '1' },
          { title: '3 месяца', value: '3' },
          { title: '6 месяцев', value: '6' },
          { title: '12 месяцев', value: '12' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Цена',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'originalPrice',
      title: 'Оригинальная цена (перечёркнутая)',
      type: 'number',
      description: 'Для отображения скидки',
    },
    {
      name: 'savings',
      title: 'Экономия',
      type: 'number',
      description: 'Сумма экономии в рублях',
    },
    {
      name: 'freeze',
      title: 'Заморозка',
      type: 'string',
      description: 'Например: "14 дней" или "2 месяца"',
    },
    {
      name: 'personalTraining',
      title: 'Персональные тренировки',
      type: 'number',
      description: 'Количество включенных персональных тренировок',
    },
    {
      name: 'massage',
      title: 'Массаж включён',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'nutritionist',
      title: 'Консультация нутрициолога',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      period: 'period',
      price: 'price',
    },
    prepare({ period, price }) {
      const periods = {
        '1': '1 месяц',
        '3': '3 месяца',
        '6': '6 месяцев',
        '12': '12 месяцев',
      }
      return {
        title: `${periods[period as keyof typeof periods]} - ${price} ₽`,
      }
    },
  },
})


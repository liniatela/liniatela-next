import { defineType } from 'sanity'

export default defineType({
  name: 'certificate',
  title: 'Блок "Сертификаты"',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
    },
    {
      name: 'amountOptions',
      title: 'Варианты по номиналу',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'amount',
              title: 'Сумма',
              type: 'number',
              validation: (Rule) => Rule.required().positive(),
            },
            {
              name: 'description',
              title: 'Описание',
              type: 'string',
              description: 'Например: "примерно 1 занятие"',
            },
          ],
          preview: {
            select: {
              amount: 'amount',
              description: 'description',
            },
            prepare({ amount, description }) {
              return {
                title: `${amount} ₽`,
                subtitle: description,
              }
            },
          },
        },
      ],
    },
    {
      name: 'sessionsOptions',
      title: 'Варианты по занятиям',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sessions',
              title: 'Количество занятий',
              type: 'number',
              validation: (Rule) => Rule.required().positive().integer(),
            },
            {
              name: 'estimatedPrice',
              title: 'Примерная стоимость',
              type: 'string',
              description: 'Например: "~3 000 ₽"',
            },
          ],
          preview: {
            select: {
              sessions: 'sessions',
              price: 'estimatedPrice',
            },
            prepare({ sessions, price }) {
              return {
                title: `${sessions} ${sessions === 1 ? 'занятие' : 'занятий'}`,
                subtitle: price,
              }
            },
          },
        },
      ],
    },
  ],
})


import { defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  fields: [
    {
      name: 'question',
      title: 'Вопрос',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Ответ',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer',
    },
  },
})


import { defineType } from 'sanity'

export default defineType({
  name: 'headerMenu',
  title: 'Меню хедера',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Пункты меню',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Название',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Ссылка',
              type: 'string',
              description: 'Например: #directions или /about',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'href',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
})


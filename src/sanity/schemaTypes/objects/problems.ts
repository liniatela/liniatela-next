import { defineType } from 'sanity'

export default defineType({
  name: 'problems',
  title: 'Блок "Проблемы"',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'text',
      rows: 2,
      description: 'Используйте <span></span> для выделения текста',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'problemsList',
      title: 'Список проблем',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Название проблемы',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Описание',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
})


import { defineType } from 'sanity'

export default defineType({
  name: 'cta',
  title: 'CTA блок',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Теги',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Название',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
            },
          },
        },
      ],
    },
    {
      name: 'buttonLabel',
      title: 'Текст кнопки',
      type: 'string',
      initialValue: 'Записаться →',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonLink',
      title: 'Ссылка кнопки',
      type: 'string',
      initialValue: '/',
    },
    {
      name: 'sideNote',
      title: 'Примечание',
      type: 'string',
      description: 'Текст под кнопкой',
    },
    {
      name: 'backgroundImage',
      title: 'Фоновое изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})


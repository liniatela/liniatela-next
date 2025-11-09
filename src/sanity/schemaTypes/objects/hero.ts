import { defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero блок',
  type: 'object',
  fields: [
    {
      name: 'subtitle',
      title: 'Подзаголовок',
      type: 'text',
      rows: 2,
      description: 'Верхний текст над заголовком',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description: 'Основной заголовок',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backgroundMedia',
      title: 'Фоновое медиа',
      type: 'mediaField',
      description: 'Видео или изображение на фоне',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Hero блок',
        subtitle: subtitle,
      }
    },
  },
})


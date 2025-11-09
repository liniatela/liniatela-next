import { defineType } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Отзыв',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Имя',
      type: 'string',
      description: 'Имя автора отзыва',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Тип отзыва',
      type: 'string',
      options: {
        list: [
          { title: 'Текст', value: 'text' },
          { title: 'Изображение', value: 'image' },
          { title: 'Видео', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'video',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'string',
      description: 'Краткое описание или на какие занятия ходит',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Текст',
      type: 'text',
      rows: 4,
      description: 'Текст отзыва (для типа "Текст")',
      hidden: ({ parent }) => parent?.type !== 'text',
    },
    {
      name: 'badge',
      title: 'Бейдж',
      type: 'string',
      description: 'Бейдж для текстового отзыва',
      hidden: ({ parent }) => parent?.type !== 'text',
    },
    {
      name: 'media',
      title: 'Медиа',
      type: 'mediaField',
      description: 'Видео или изображение',
      validation: (Rule) =>
        Rule.custom((media, context) => {
          const parent = context.parent as { type?: string }
          if (parent?.type === 'video' || parent?.type === 'image') {
            return media ? true : 'Медиа обязательно для видео и изображений'
          }
          return true
        }),
    },
    {
      name: 'rating',
      title: 'Рейтинг',
      type: 'number',
      description: 'Оценка от 1 до 5',
      validation: (Rule) => Rule.min(1).max(5).integer(),
      options: {
        list: [
          { title: '⭐ 1', value: 1 },
          { title: '⭐⭐ 2', value: 2 },
          { title: '⭐⭐⭐ 3', value: 3 },
          { title: '⭐⭐⭐⭐ 4', value: 4 },
          { title: '⭐⭐⭐⭐⭐ 5', value: 5 },
        ],
      },
    },
    {
      name: 'isPublished',
      title: 'Опубликован',
      type: 'boolean',
      initialValue: true,
      description: 'Отображать ли отзыв на сайте',
    },
    {
      name: 'order',
      title: 'Порядок сортировки',
      type: 'number',
      description: 'Используется для упорядочивания отзывов',
      initialValue: 0,
    },
    {
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  orderings: [
    {
      title: 'Дата публикации, новые',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Порядок сортировки',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'media.image',
      type: 'type',
      isPublished: 'isPublished',
    },
    prepare({ title, subtitle, media, type, isPublished }) {
      const typeLabel: Record<string, string> = {
        text: '📝',
        image: '🖼️',
        video: '🎥',
      }
      
      return {
        title: `${typeLabel[type] || ''} ${title}${!isPublished ? ' (не опубликован)' : ''}`,
        subtitle,
        media,
      }
    },
  },
})


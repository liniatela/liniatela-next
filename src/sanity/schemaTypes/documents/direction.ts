import { defineType } from 'sanity'

export default defineType({
  name: 'direction',
  title: 'Направление',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Категория',
      type: 'string',
      description: 'Например: Восстановление, Йога, Пилатес',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Краткое описание',
      type: 'text',
      rows: 3,
      description: 'Отображается в карточке',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fullDescription',
      title: 'Полное описание',
      type: 'text',
      rows: 5,
      description: 'Детальное описание направления',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'difficulty',
      title: 'Сложность',
      type: 'number',
      options: {
        list: [
          { title: 'Начинающий', value: 1 },
          { title: 'Средний', value: 2 },
          { title: 'Продвинутый', value: 3 },
        ],
      },
      validation: (Rule) => Rule.required().min(1).max(3),
    },
    {
      name: 'duration',
      title: 'Продолжительность',
      type: 'string',
      description: 'Например: "1 час" или "1.5 часа"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'calories',
      title: 'Калории',
      type: 'number',
      description: 'Примерное количество сжигаемых калорий',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'coverImage',
      title: 'Обложка',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Галерея',
      type: 'array',
      of: [
        {
          type: 'mediaField',
        },
      ],
      description: 'Изображения и видео для галереи направления',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Настройки SEO для страницы направления',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
})


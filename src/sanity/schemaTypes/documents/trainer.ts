import { defineType } from 'sanity'

export default defineType({
  name: 'trainer',
  title: 'Тренер',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Имя',
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
      name: 'position',
      title: 'Должность',
      type: 'string',
      options: {
        list: [
          { title: 'Тренер', value: 'Тренер' },
          { title: 'PRO Тренер', value: 'PRO Тренер' },
          { title: 'Старший тренер', value: 'Старший тренер' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Фото',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quote',
      title: 'Цитата',
      type: 'text',
      rows: 2,
      description: 'Девиз или короткая цитата тренера',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'directions',
      title: 'Направления',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Список направлений, по которым ведет тренер',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 8,
      description: 'Полное описание тренера, его опыт и подход',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'experience',
      title: 'Опыт работы',
      type: 'string',
      description: 'Например: "7+ лет"',
    },
    {
      name: 'certifications',
      title: 'Сертификаты',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Список сертификатов и достижений',
    },
    {
      name: 'videoPresentation',
      title: 'Видео-презентация',
      type: 'mediaField',
      description: 'Видео или изображение для представления тренера',
    },
    {
      name: 'isActive',
      title: 'Активен',
      type: 'boolean',
      initialValue: true,
      description: 'Отображать ли тренера на сайте',
    },
    {
      name: 'order',
      title: 'Порядок сортировки',
      type: 'number',
      description: 'Используется для упорядочивания тренеров',
      initialValue: 0,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Настройки SEO для страницы тренера',
    },
  ],
  orderings: [
    {
      title: 'Порядок сортировки, по возрастанию',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Имя, A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'photo',
      isActive: 'isActive',
    },
    prepare({ title, subtitle, media, isActive }) {
      return {
        title: `${title}${!isActive ? ' (неактивен)' : ''}`,
        subtitle,
        media,
      }
    },
  },
})


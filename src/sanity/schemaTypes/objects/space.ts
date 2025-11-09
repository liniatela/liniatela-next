import { defineType } from 'sanity'

export default defineType({
  name: 'space',
  title: 'Блок "О месте"',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Адрес',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'area',
      title: 'Площадь',
      type: 'string',
      description: 'Например: "260 кв м."',
    },
    {
      name: 'reviewsPercent',
      title: 'Процент положительных отзывов',
      type: 'string',
      description: 'Например: "98 %"',
    },
    {
      name: 'hallsCount',
      title: 'Количество залов',
      type: 'string',
      description: 'Например: "3 зала"',
    },
    {
      name: 'directionsCount',
      title: 'Количество направлений',
      type: 'string',
      description: 'Например: "8 лучших"',
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Преимущества',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Метка',
              type: 'string',
              description: 'Например: "260 кв м."',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Значение',
              type: 'string',
              description: 'Например: "Просторной студии"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Описание',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
          },
        },
      ],
    },
    {
      name: 'generalImages',
      title: 'Общие изображения',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'halls',
      title: 'Залы',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Название',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Описание',
              type: 'text',
              rows: 2,
            },
            {
              name: 'media',
              title: 'Медиа',
              type: 'mediaField',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'features',
              title: 'Особенности',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Список особенностей зала',
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
              media: 'media.image',
            },
          },
        },
      ],
    },
  ],
})


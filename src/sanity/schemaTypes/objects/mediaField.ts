import { defineType } from 'sanity'

export default defineType({
  name: 'mediaField',
  title: 'Медиа (Видео или Изображение)',
  type: 'object',
  fields: [
    {
      name: 'mediaType',
      title: 'Тип медиа',
      type: 'string',
      options: {
        list: [
          { title: 'Видео', value: 'video' },
          { title: 'Изображение', value: 'image' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'video',
      title: 'Видео',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      hidden: ({ parent }) => parent?.mediaType !== 'video',
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.mediaType !== 'image',
    },
    {
      name: 'poster',
      title: 'Постер для видео (изображение предпросмотра)',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.mediaType !== 'video',
    },
    {
      name: 'alt',
      title: 'Альтернативный текст',
      type: 'string',
      description: 'Описание изображения для доступности',
    },
  ],
  preview: {
    select: {
      mediaType: 'mediaType',
      image: 'image',
      poster: 'poster',
    },
    prepare({ mediaType, image, poster }) {
      return {
        title: mediaType === 'video' ? 'Видео' : 'Изображение',
        media: image || poster,
      }
    },
  },
})


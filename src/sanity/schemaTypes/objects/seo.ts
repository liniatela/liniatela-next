import { defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Заголовок страницы для поисковых систем (рекомендуется до 60 символов)',
      validation: (Rule) => Rule.max(60).warning('Рекомендуется не более 60 символов'),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Описание страницы для поисковых систем (рекомендуется до 160 символов)',
      validation: (Rule) => Rule.max(160).warning('Рекомендуется не более 160 символов'),
    },
    {
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ключевые слова для страницы',
    },
    {
      name: 'ogImage',
      title: 'Open Graph изображение',
      type: 'image',
      description: 'Изображение для соцсетей (рекомендуется 1200x630px)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ogTitle',
      title: 'Open Graph заголовок',
      type: 'string',
      description: 'Заголовок для соцсетей (если отличается от Meta Title)',
    },
    {
      name: 'ogDescription',
      title: 'Open Graph описание',
      type: 'text',
      rows: 2,
      description: 'Описание для соцсетей (если отличается от Meta Description)',
    },
  ],
})


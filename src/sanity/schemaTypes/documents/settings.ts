import { defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
      initialValue: 'Настройки сайта',
      readOnly: true,
    },
    {
      name: 'siteName',
      title: 'Название сайта',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'siteUrl',
      title: 'URL сайта',
      type: 'url',
      description: 'Полный URL сайта, например: https://liniatela.ru',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Логотип',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'headerMenu',
      title: 'Меню хедера',
      type: 'headerMenu',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'footer',
      title: 'Футер',
      type: 'footerMenu',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'defaultSeo',
      title: 'SEO по умолчанию',
      type: 'seo',
      description: 'Настройки SEO по умолчанию для всех страниц',
    },
    {
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'Например: G-XXXXXXXXXX',
    },
    {
      name: 'yandexMetrikaId',
      title: 'Яндекс.Метрика ID',
      type: 'string',
      description: 'Номер счетчика Яндекс.Метрики',
    },
    {
      name: 'phone',
      title: 'Телефон',
      type: 'string',
      description: 'Основной телефон для связи',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Основной email для связи',
    },
    {
      name: 'workingHours',
      title: 'Часы работы',
      type: 'text',
      rows: 3,
      description: 'График работы студии',
    },
  ],
  preview: {
    select: {
      title: 'siteName',
    },
  },
})


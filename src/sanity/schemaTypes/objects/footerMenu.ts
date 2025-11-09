import { defineType } from 'sanity'

export default defineType({
  name: 'footerMenu',
  title: 'Футер',
  type: 'object',
  fields: [
    {
      name: 'companyName',
      title: 'Название компании',
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
      name: 'slogan',
      title: 'Слоган',
      type: 'string',
    },
    {
      name: 'metaDisclaimer',
      title: 'Disclaimer Meta',
      type: 'string',
      initialValue: '* Принадлежит компании Meta, признанной экстремистской и запрещённой на территории РФ',
    },
    {
      name: 'sitemapTitle',
      title: 'Заголовок карты сайта',
      type: 'string',
      initialValue: 'Карта сайта',
    },
    {
      name: 'sitemapLinks',
      title: 'Ссылки карты сайта',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Название',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Ссылка',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'href',
            },
          },
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Ссылки на соцсети',
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
              name: 'url',
              title: 'Ссылка',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Иконка',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Telegram', value: 'telegram' },
                  { title: 'WhatsApp', value: 'whatsapp' },
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'url',
            },
          },
        },
      ],
    },
  ],
})


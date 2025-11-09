import { defineType } from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Контакты',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Заголовок блока',
      type: 'string',
      initialValue: 'Контакты',
    },
    {
      name: 'studioTitle',
      title: 'Заголовок адреса',
      type: 'string',
      initialValue: 'Точный адрес студии',
    },
    {
      name: 'address',
      title: 'Адрес',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contactMethodsTitle',
      title: 'Заголовок контактов',
      type: 'string',
      initialValue: 'Для связи с нами',
    },
    {
      name: 'telegram',
      title: 'Telegram',
      type: 'object',
      fields: [
        {
          name: 'username',
          title: 'Имя пользователя',
          type: 'string',
          description: 'Например: @liniatela_studio',
        },
        {
          name: 'url',
          title: 'Ссылка',
          type: 'url',
        },
      ],
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Телефон',
          type: 'string',
          description: 'В формате: +7 (999) 999-99-99',
        },
        {
          name: 'url',
          title: 'Ссылка',
          type: 'url',
          description: 'Например: https://wa.me/79999999999',
        },
      ],
    },
    {
      name: 'socialNetworksTitle',
      title: 'Заголовок соцсетей',
      type: 'string',
      initialValue: 'Наши соц сети',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Название',
          type: 'string',
          initialValue: 'Instagram*',
        },
        {
          name: 'url',
          title: 'Ссылка',
          type: 'url',
        },
      ],
    },
    {
      name: 'telegramChannel',
      title: 'Telegram канал',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Название',
          type: 'string',
          initialValue: 'Telegram',
        },
        {
          name: 'url',
          title: 'Ссылка',
          type: 'url',
        },
      ],
    },
    {
      name: 'businessInfo',
      title: 'Информация об ИП',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Название ИП',
          type: 'string',
        },
        {
          name: 'inn',
          title: 'ИНН',
          type: 'string',
        },
        {
          name: 'ogrn',
          title: 'ОГРН',
          type: 'string',
        },
      ],
    },
  ],
})


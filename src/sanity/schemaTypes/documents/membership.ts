import { defineType } from 'sanity'

export default defineType({
  name: 'membership',
  title: 'Абонемент',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
      name: 'price',
      title: 'Базовая цена',
      type: 'string',
      description: 'Число или текст, например "4900" или "от 1900"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Краткое описание',
      type: 'text',
      rows: 2,
      description: 'Отображается в карточке',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'longDescription',
      title: 'Полное описание',
      type: 'text',
      rows: 6,
      description: 'Детальное описание абонемента',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Длительность',
      type: 'string',
      description: 'Например: "1 мес." или оставить пустым для разовых',
    },
    {
      name: 'validityPeriod',
      title: 'Срок действия',
      type: 'string',
      description: 'Например: "30 дней с момента активации"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sessionsCount',
      title: 'Количество занятий',
      type: 'string',
      description: 'Число или "unlimited"',
    },
    {
      name: 'sessionsPerWeek',
      title: 'Занятий в неделю',
      type: 'string',
      description: 'Например: "без ограничений" или "3 раза в неделю"',
    },
    {
      name: 'freeze',
      title: 'Заморозка',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Доступна',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'duration',
          title: 'Длительность',
          type: 'string',
          description: 'Например: "14 дней"',
          hidden: ({ parent }) => !parent?.available,
        },
        {
          name: 'conditions',
          title: 'Условия',
          type: 'string',
          description: 'Например: "Включена в абонемент на 3+ месяца"',
          hidden: ({ parent }) => !parent?.available,
        },
      ],
    },
    {
      name: 'suitableFor',
      title: 'Подходит для',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Например: ["Новичков", "Продолжающих"]',
    },
    {
      name: 'pricePerSession',
      title: 'Цена за занятие',
      type: 'number',
      description: 'Для разовых посещений и индивидуальных тренировок',
    },
    {
      name: 'pricePerSessionPro',
      title: 'Цена за занятие с PRO тренером',
      type: 'number',
      description: 'Для индивидуальных тренировок с PRO тренером',
    },
    {
      name: 'pricing',
      title: 'Ценообразование по периодам',
      type: 'array',
      of: [{ type: 'pricing' }],
      description: 'Цены для разных периодов подписки',
    },
    {
      name: 'faq',
      title: 'Часто задаваемые вопросы',
      type: 'array',
      of: [{ type: 'faq' }],
    },
    {
      name: 'isPopular',
      title: 'Популярный',
      type: 'boolean',
      initialValue: false,
      description: 'Отметить как популярный абонемент',
    },
    {
      name: 'order',
      title: 'Порядок сортировки',
      type: 'number',
      description: 'Используется для упорядочивания абонементов',
      initialValue: 0,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Настройки SEO для страницы абонемента',
    },
  ],
  orderings: [
    {
      title: 'Порядок сортировки, по возрастанию',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Цена, по возрастанию',
      name: 'priceAsc',
      by: [{ field: 'price', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'coverImage',
      isPopular: 'isPopular',
    },
    prepare({ title, subtitle, media, isPopular }) {
      return {
        title: `${title}${isPopular ? ' ⭐' : ''}`,
        subtitle: `${subtitle} ₽`,
        media,
      }
    },
  },
})


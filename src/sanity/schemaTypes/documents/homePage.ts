import { defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Главная страница',
  type: 'document',
  // 🆕 Группы полей (fieldsets)
  fieldsets: [
    {
      name: 'seo',
      title: '🔍 SEO и метаданные',
      options: { collapsible: true, collapsed: false }
    },
    {
      name: 'heroSection',
      title: '🎬 Hero блок',
      options: { collapsible: true, collapsed: false }
    },
    {
      name: 'directionsSection',
      title: '🧘 Блок "Направления"',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'ctaSection',
      title: '📢 CTA блок',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'problemsSection',
      title: '⚡ Блок "Проблемы"',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'membershipsSection',
      title: '💳 Блок "Абонементы"',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'spaceSection',
      title: '🏢 Блок "О месте"',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'trainersSection',
      title: '👥 Блок "Тренеры"',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'certificateSection',
      title: '🎁 Блок "Сертификаты"',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'reviewsSection',
      title: '⭐ Блок "Отзывы"',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'contactsSection',
      title: '📞 Блок "Контакты"',
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    // ===== ОСНОВНЫЕ =====
    {
      name: 'title',
      title: 'Название страницы',
      type: 'string',
      initialValue: 'Главная страница',
      validation: Rule => Rule.required(),
      description: 'Служебное название (не отображается на сайте)'
    },

    // ===== SEO =====
    {
      name: 'seo',
      title: 'SEO настройки',
      type: 'seo',
      description: 'Настройки SEO для главной страницы',
      fieldset: 'seo'
    },

    // ===== HERO БЛОК =====
    {
      name: 'hero',
      title: 'Содержимое Hero блока',
      type: 'hero',
      validation: Rule => Rule.required(),
      fieldset: 'heroSection'
    },

    // ===== НАПРАВЛЕНИЯ =====
    {
      name: 'directionsTitle',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'Направления',
      fieldset: 'directionsSection'
    },
    {
      name: 'directionsSubtitle',
      title: 'Подзаголовок',
      type: 'text',
      rows: 2,
      fieldset: 'directionsSection'
    },

    // ===== CTA =====
    {
      name: 'cta',
      title: 'Содержимое CTA блока',
      type: 'cta',
      description: 'Призыв к действию',
      fieldset: 'ctaSection'
    },

    // ===== ПРОБЛЕМЫ =====
    {
      name: 'problems',
      title: 'Содержимое блока',
      type: 'problems',
      description: 'Какие проблемы решает мягкий фитнес',
      fieldset: 'problemsSection'
    },

    // ===== АБОНЕМЕНТЫ =====
    {
      name: 'membershipsTitle',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'Абонементы',
      fieldset: 'membershipsSection'
    },
    {
      name: 'membershipsSubtitle',
      title: 'Подзаголовок',
      type: 'text',
      rows: 2,
      fieldset: 'membershipsSection',
      description: 'Дополнительное описание раздела'
    },

    // ===== О МЕСТЕ =====
    {
      name: 'space',
      title: 'Содержимое блока',
      type: 'space',
      description: 'Информация о студии и залах',
      fieldset: 'spaceSection'
    },

    // ===== ТРЕНЕРЫ =====
    {
      name: 'trainersTitle',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'Наши тренеры',
      fieldset: 'trainersSection'
    },
    {
      name: 'trainersSubtitle',
      title: 'Подзаголовок',
      type: 'text',
      rows: 2,
      fieldset: 'trainersSection'
    },

    // ===== СЕРТИФИКАТЫ =====
    {
      name: 'certificate',
      title: 'Содержимое блока',
      type: 'certificate',
      description: 'Настройки подарочных сертификатов',
      fieldset: 'certificateSection'
    },

    // ===== ОТЗЫВЫ =====
    {
      name: 'reviewsTitle',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'Отзывы',
      fieldset: 'reviewsSection'
    },
    {
      name: 'reviewsSubtitle',
      title: 'Подзаголовок',
      type: 'text',
      rows: 2,
      fieldset: 'reviewsSection'
    },
    {
      name: 'reviewsBadge',
      title: 'Бейдж',
      type: 'string',
      initialValue: 'Отзывы',
      description: 'Небольшая метка над заголовком',
      fieldset: 'reviewsSection'
    },
    {
      name: 'reviewsDescription',
      title: 'Описание',
      type: 'text',
      rows: 3,
      fieldset: 'reviewsSection'
    },
    {
      name: 'reviewsBackgroundImage',
      title: 'Фоновое изображение',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Изображение для фона секции отзывов',
      fieldset: 'reviewsSection'
    },

    // ===== КОНТАКТЫ =====
    {
      name: 'contacts',
      title: 'Содержимое блока',
      type: 'contacts',
      description: 'Контактная информация студии',
      fieldset: 'contactsSection'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})

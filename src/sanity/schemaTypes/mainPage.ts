import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'mainPage',
	title: 'Главная страница',
	type: 'document',
	fields: [
		defineField({
			name: 'header',
			title: 'Хедер',
			type: 'object',
			fields: [
				{ name: 'title', title: 'Название блока', type: 'string' },
				{ name: 'logo', title: 'Логотип', type: 'image' },
				{ name: 'navigation', title: 'Навигация', type: 'array', of: [{ type: 'string' }] },
				{ name: 'ctaButton', title: 'Текст кнопки "Записаться"', type: 'string' },
				{ name: 'abonementsButton', title: 'Текст кнопки "Абонементы"', type: 'string' }
			]
		}),
		defineField({
			name: 'hero',
			title: 'Hero блок',
			type: 'object',
			fields: [
				{ name: 'title', title: 'Заголовок', type: 'string' },
				{ name: 'subtitle', title: 'Подзаголовок', type: 'text', rows: 3 },
				{
					name: 'backgroundMedia',
					title: 'Фоновое видео или изображение',
					type: 'object',
					fields: [
						{
							name: 'video',
							title: 'Видео',
							type: 'file',
							options: { accept: 'video/*' }
						},
						{
							name: 'image',
							title: 'Изображение',
							type: 'image'
						}
					]
				}
			]
		}),
		defineField({
			name: 'sportsBlock',
			title: 'Блок с направлениями',
			type: 'object',
			fields: [
				{ name: 'title', title: 'Название блока', type: 'string' },
				{ name: 'heading', title: 'Заголовок блока', type: 'string' },
				{ name: 'auxiliaryText', title: 'Вспомогательный текст', type: 'text', rows: 3 }
			]
		}),
		defineField({
			name: 'problemsBlock',
			title: 'Блок с проблемами',
			type: 'object',
			fields: [
				{ name: 'title', title: 'Название блока', type: 'string' },
				{ name: 'heading', title: 'Заголовок', type: 'string' },
				{ name: 'subtitle', title: 'Подзаголовок', type: 'text', rows: 3 },
				{ name: 'description', title: 'Описание', type: 'text', rows: 4 }
			]
		}),
		defineField({
			name: 'ctaBlock',
			title: 'CTA блок',
			type: 'object',
			fields: [
				{ name: 'title', title: 'Название блока', type: 'string' },
				{ name: 'heading', title: 'Заголовок', type: 'string' },
				{ name: 'description', title: 'Описание', type: 'text', rows: 4 },
				{
					name: 'sportsList',
					title: 'Список направлений',
					type: 'array',
					of: [{ type: 'string' }]
				},
				{ name: 'ctaText', title: 'CTA надпись', type: 'string' }
			]
		}),
		defineField({
			name: 'abonementsBlock',
			title: 'Блок с абонементами',
			type: 'object',
			fields: [
				{ name: 'title', title: 'Название блока', type: 'string' },
				{ name: 'heading', title: 'Заголовок', type: 'string' }
			]
		}),
		defineField({
			name: 'trainersBlock',
			title: 'Блок с тренерами',
			type: 'object',
			fields: [
				{ name: 'title', title: 'Название блока', type: 'string' },
				{ name: 'heading', title: 'Заголовок', type: 'string' },
				{ name: 'description', title: 'Описание', type: 'text', rows: 4 }
			]
		}),
		defineField({
			name: 'reviewsBlock',
			title: 'Блок с отзывами',
			type: 'object',
			fields: [
				{ name: 'title', title: 'Название блока', type: 'string' },
				{ name: 'heading', title: 'Заголовок', type: 'string' },
				{ name: 'description', title: 'Описание', type: 'text', rows: 4 }
			]
		}),
		defineField({
			name: 'footer',
			title: 'Подвал',
			type: 'object',
			fields: [
				{ name: 'heading', title: 'Заголовок', type: 'string' },
				{ name: 'description', title: 'Описание', type: 'text', rows: 4 },
				{ name: 'tagText', title: 'Текст тега', type: 'string' }
			]
		})
	]
})

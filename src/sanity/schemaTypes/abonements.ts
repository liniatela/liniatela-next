import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'abonements',
	title: 'Абонементы',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Название абонемента',
			type: 'string',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			},
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'coverImage',
			title: 'Обложка',
			type: 'image',
			options: {
				hotspot: true
			}
		}),
		defineField({
			name: 'price',
			title: 'Стоимость',
			type: 'number',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'shortDescription',
			title: 'Короткое описание',
			type: 'text',
			rows: 3
		}),
		defineField({
			name: 'features',
			title: 'Особенности',
			type: 'array',
			of: [{ type: 'string' }]
		}),
		defineField({
			name: 'duration',
			title: 'Срок действия',
			type: 'string',
			description: 'Например: 1 месяц, 3 месяца'
		}),
		defineField({
			name: 'auxiliaryText',
			title: 'Вспомогательный текст',
			type: 'text'
		}),
		defineField({
			name: 'faq',
			title: 'FAQ',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{ name: 'question', title: 'Вопрос', type: 'string' },
						{ name: 'answer', title: 'Ответ', type: 'text', rows: 4 }
					]
				}
			]
		})
	],
	preview: {
		select: {
			title: 'title',
			media: 'coverImage',
			price: 'price'
		},
		prepare({ title, media, price }) {
			return {
				title,
				subtitle: `${price} ₽`,
				media
			}
		}
	}
})

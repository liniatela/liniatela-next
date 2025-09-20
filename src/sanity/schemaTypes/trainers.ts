import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'trainers',
	title: 'Тренеры',
	type: 'document',
	fields: [
		defineField({
			name: 'firstName',
			title: 'Имя',
			type: 'string',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'lastName',
			title: 'Фамилия',
			type: 'string',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'doc => `${doc.firstName}-${doc.lastName}`',
				maxLength: 96
			},
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'position',
			title: 'Должность',
			type: 'string'
		}),
		defineField({
			name: 'photo',
			title: 'Фото',
			type: 'image',
			options: {
				hotspot: true
			}
		}),
		defineField({
			name: 'quote',
			title: 'Цитата',
			type: 'text',
			rows: 3
		}),
		defineField({
			name: 'sports',
			title: 'Направления',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'sports' }] }]
		}),
		defineField({
			name: 'description',
			title: 'Описание тренера',
			type: 'array',
			of: [{ type: 'block' }]
		})
	],
	preview: {
		select: {
			title: 'firstName',
			subtitle: 'lastName',
			media: 'photo'
		},
		prepare({ title, subtitle, media }) {
			return {
				title: `${title} ${subtitle}`,
				media
			}
		}
	}
})

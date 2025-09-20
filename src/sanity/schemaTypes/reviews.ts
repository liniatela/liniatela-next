import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'reviews',
	title: 'Отзывы',
	type: 'document',
	fields: [
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'doc => `${doc.firstName}-${doc.lastName}`',
				maxLength: 96
			}
		}),
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
			name: 'text',
			title: 'Текст отзыва',
			type: 'text',
			rows: 4,
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'media',
			title: 'Изображение или видео',
			type: 'file',
			options: {
				accept: 'image/*,video/*'
			}
		})
	],
	preview: {
		select: {
			title: 'firstName',
			subtitle: 'lastName',
			media: 'media'
		},
		prepare({ title, subtitle, media }) {
			return {
				title: `${title} ${subtitle}`,
				media
			}
		}
	}
})

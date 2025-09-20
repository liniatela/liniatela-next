import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'sports',
	title: 'Направления',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Название направления',
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
			name: 'shortDescription',
			title: 'Короткое описание',
			type: 'text',
			rows: 3,
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'fullDescription',
			title: 'Полное описание',
			type: 'array',
			of: [{ type: 'block' }]
		}),
		defineField({
			name: 'difficulty',
			title: 'Сложность',
			type: 'number',
			options: {
				list: [
					{ title: 'Начинающий', value: 1 },
					{ title: 'Средний', value: 2 },
					{ title: 'Продвинутый', value: 3 }
				]
			},
			validation: Rule => Rule.required().min(1).max(3)
		}),
		defineField({
			name: 'duration',
			title: 'Время занятия',
			type: 'string',
			description: 'Например: 60 минут'
		}),
		defineField({
			name: 'calories',
			title: 'Калории',
			type: 'string',
			description: 'Например: 300-400 ккал'
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
			name: 'gallery',
			title: 'Галерея изображений',
			type: 'array',
			of: [{ type: 'image' }]
		})
	],
	preview: {
		select: {
			title: 'title',
			media: 'coverImage'
		}
	}
})

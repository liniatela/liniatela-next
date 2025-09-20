import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'studios',
	title: 'Студия',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Название блока',
			type: 'string'
		}),
		defineField({
			name: 'heading',
			title: 'Заголовок блока',
			type: 'string'
		}),
		defineField({
			name: 'description',
			title: 'Описание блока',
			type: 'text',
			rows: 4
		}),
		defineField({
			name: 'advantages',
			title: 'Преимущества студии',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{ name: 'title', title: 'Заголовок', type: 'string' },
						{ name: 'description', title: 'Описание', type: 'text', rows: 3 }
					]
				}
			]
		}),
		defineField({
			name: 'images',
			title: 'Список изображений',
			type: 'array',
			of: [{ type: 'image' }]
		}),
		defineField({
			name: 'halls',
			title: 'Галерея залов',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{ name: 'name', title: 'Название зала', type: 'string' },
						{ name: 'description', title: 'Описание зала', type: 'text', rows: 3 },
						{
							name: 'media',
							title: 'Изображение или видео',
							type: 'file',
							options: { accept: 'image/*,video/*' }
						}
					]
				}
			]
		})
	]
})

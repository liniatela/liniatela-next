import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'problems',
	title: 'Проблемы',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Заголовок карточки',
			type: 'string',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'description',
			title: 'Описание карточки',
			type: 'text',
			rows: 4,
			validation: Rule => Rule.required()
		})
	]
})

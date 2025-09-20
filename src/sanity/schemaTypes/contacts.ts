import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'contacts',
	title: 'Контакты',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Название блока',
			type: 'string'
		}),
		defineField({
			name: 'address',
			title: 'Адрес студии',
			type: 'string'
		}),
		defineField({
			name: 'contactList',
			title: 'Список для связи',
			type: 'array',
			of: [{ type: 'string' }]
		}),
		defineField({
			name: 'socialNetworks',
			title: 'Социальные сети',
			type: 'array',
			of: [{ type: 'string' }]
		}),
		defineField({
			name: 'legalInfo',
			title: 'Юридическая информация',
			type: 'array',
			of: [{ type: 'block' }],
			description: 'ИП, ИНН, ОГРН'
		})
	]
})

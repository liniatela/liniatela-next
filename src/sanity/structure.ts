// https://www.sanity.io/docs/structure-builder-cheat-sheet
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = S =>
	S.list()
		.title('Контент')
		.items([
			S.listItem()
				.title('Главная страница')
				.child(S.document().schemaType('mainPage').documentId('mainPage')),
			S.divider(),
			S.listItem()
				.title('Направления')
				.child(
					S.list()
						.title('Направления')
						.items([
							S.listItem()
								.title('Все направления')
								.child(
									S.documentList()
										.title('Все направления')
										.schemaType('sports')
										.filter('_type == "sports"')
								),
							S.listItem().title('Создать направление').child(S.document().schemaType('sports'))
						])
				),
			S.listItem()
				.title('Абонементы')
				.child(
					S.list()
						.title('Абонементы')
						.items([
							S.listItem()
								.title('Все абонементы')
								.child(
									S.documentList()
										.title('Все абонементы')
										.schemaType('abonements')
										.filter('_type == "abonements"')
								),
							S.listItem().title('Создать абонемент').child(S.document().schemaType('abonements'))
						])
				),
			S.listItem()
				.title('Тренеры')
				.child(
					S.list()
						.title('Тренеры')
						.items([
							S.listItem()
								.title('Все тренеры')
								.child(
									S.documentList()
										.title('Все тренеры')
										.schemaType('trainers')
										.filter('_type == "trainers"')
								),
							S.listItem().title('Создать тренера').child(S.document().schemaType('trainers'))
						])
				),
			S.listItem()
				.title('Отзывы')
				.child(
					S.list()
						.title('Отзывы')
						.items([
							S.listItem()
								.title('Все отзывы')
								.child(
									S.documentList()
										.title('Все отзывы')
										.schemaType('reviews')
										.filter('_type == "reviews"')
								),
							S.listItem().title('Создать отзыв').child(S.document().schemaType('reviews'))
						])
				),
			S.divider(),
			S.listItem().title('Студия').child(S.document().schemaType('studios').documentId('studios')),
			S.listItem()
				.title('Проблемы')
				.child(
					S.list()
						.title('Проблемы')
						.items([
							S.listItem()
								.title('Все проблемы')
								.child(
									S.documentList()
										.title('Все проблемы')
										.schemaType('problems')
										.filter('_type == "problems"')
								),
							S.listItem().title('Создать проблему').child(S.document().schemaType('problems'))
						])
				),
			S.listItem()
				.title('Контакты')
				.child(S.document().schemaType('contacts').documentId('contacts'))
		])

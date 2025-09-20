import { client, previewClient } from './client'
import {
	mainPageQuery,
	sportsQuery,
	abonementsQuery,
	trainersQuery,
	reviewsQuery,
	studioQuery,
	problemsQuery,
	contactsQuery
} from './queries'

// Главная страница
export const getMainPage = async (preview = false) => {
	const sanityClient = preview ? previewClient : client

	try {
		return await sanityClient.fetch(mainPageQuery)
	} catch (error) {
		console.error('Error fetching main page:', error)
		return null
	}
}

// Направления
export const getSports = async (preview = false) => {
	const sanityClient = preview ? previewClient : client

	try {
		return await sanityClient.fetch(sportsQuery)
	} catch (error) {
		console.error('Error fetching sports:', error)
		return []
	}
}

// Абонементы
export const getAbonements = async (preview = false) => {
	const sanityClient = preview ? previewClient : client

	try {
		return await sanityClient.fetch(abonementsQuery)
	} catch (error) {
		console.error('Error fetching abonements:', error)
		return []
	}
}

// Тренеры
export const getTrainers = async (preview = false) => {
	const sanityClient = preview ? previewClient : client

	try {
		return await sanityClient.fetch(trainersQuery)
	} catch (error) {
		console.error('Error fetching trainers:', error)
		return []
	}
}

// Отзывы
export const getReviews = async (preview = false) => {
	const sanityClient = preview ? previewClient : client

	try {
		return await sanityClient.fetch(reviewsQuery)
	} catch (error) {
		console.error('Error fetching reviews:', error)
		return []
	}
}

// Студия
export const getStudio = async (preview = false) => {
	const sanityClient = preview ? previewClient : client

	try {
		return await sanityClient.fetch(studioQuery)
	} catch (error) {
		console.error('Error fetching studio:', error)
		return null
	}
}

// Проблемы
export const getProblems = async (preview = false) => {
	const sanityClient = preview ? previewClient : client

	try {
		return await sanityClient.fetch(problemsQuery)
	} catch (error) {
		console.error('Error fetching problems:', error)
		return []
	}
}

// Контакты
export const getContacts = async (preview = false) => {
	const sanityClient = preview ? previewClient : client

	try {
		return await sanityClient.fetch(contactsQuery)
	} catch (error) {
		console.error('Error fetching contacts:', error)
		return null
	}
}

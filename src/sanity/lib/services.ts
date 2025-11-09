import { client, previewClient } from './client'
import {
  settingsQuery,
  homePageQuery,
  directionsQuery,
  directionBySlugQuery,
  membershipsQuery,
  membershipBySlugQuery,
  trainersQuery,
  trainerBySlugQuery,
  reviewsQuery,
  directionSlugsQuery,
  membershipSlugsQuery,
  trainerSlugsQuery,
  reviewsCountQuery,
  popularMembershipsQuery,
} from './queries'

// Получить клиент в зависимости от режима
const getClient = (preview = false) => (preview ? previewClient : client)

// ===== НАСТРОЙКИ САЙТА =====
export const getSettings = async (preview = false) => {
  const sanityClient = getClient(preview)

  try {
    return await sanityClient.fetch(settingsQuery)
  } catch (error) {
    console.error('Error fetching settings:', error)
    return null
  }
}

// ===== ГЛАВНАЯ СТРАНИЦА =====
export const getHomePage = async (preview = false) => {
  const sanityClient = getClient(preview)

  try {
    return await sanityClient.fetch(homePageQuery)
  } catch (error) {
    console.error('Error fetching home page:', error)
    return null
  }
}

// ===== НАПРАВЛЕНИЯ =====
export const getDirections = async (preview = false) => {
  const sanityClient = getClient(preview)

  try {
    return await sanityClient.fetch(directionsQuery)
  } catch (error) {
    console.error('Error fetching directions:', error)
    return []
  }
}

export const getDirectionBySlug = async (slug: string, preview = false) => {
  const sanityClient = getClient(preview)

  try {
    return await sanityClient.fetch(directionBySlugQuery, { slug })
  } catch (error) {
    console.error(`Error fetching direction with slug "${slug}":`, error)
    return null
  }
}

export const getDirectionSlugs = async () => {
  try {
    return await client.fetch(directionSlugsQuery)
  } catch (error) {
    console.error('Error fetching direction slugs:', error)
    return []
  }
}

// ===== АБОНЕМЕНТЫ =====
export const getMemberships = async (preview = false) => {
  const sanityClient = getClient(preview)

  try {
    return await sanityClient.fetch(membershipsQuery)
  } catch (error) {
    console.error('Error fetching memberships:', error)
    return []
  }
}

export const getMembershipBySlug = async (slug: string, preview = false) => {
  const sanityClient = getClient(preview)

  try {
    return await sanityClient.fetch(membershipBySlugQuery, { slug })
  } catch (error) {
    console.error(`Error fetching membership with slug "${slug}":`, error)
    return null
  }
}

export const getMembershipSlugs = async () => {
  try {
    return await client.fetch(membershipSlugsQuery)
  } catch (error) {
    console.error('Error fetching membership slugs:', error)
    return []
  }
}

export const getPopularMemberships = async (preview = false) => {
  const sanityClient = getClient(preview)

  try {
    return await sanityClient.fetch(popularMembershipsQuery)
  } catch (error) {
    console.error('Error fetching popular memberships:', error)
    return []
  }
}

// ===== ТРЕНЕРЫ =====
export const getTrainers = async (preview = false) => {
  const sanityClient = getClient(preview)

  try {
    return await sanityClient.fetch(trainersQuery)
  } catch (error) {
    console.error('Error fetching trainers:', error)
    return []
  }
}

export const getTrainerBySlug = async (slug: string, preview = false) => {
  const sanityClient = getClient(preview)

  try {
    return await sanityClient.fetch(trainerBySlugQuery, { slug })
  } catch (error) {
    console.error(`Error fetching trainer with slug "${slug}":`, error)
    return null
  }
}

export const getTrainerSlugs = async () => {
  try {
    return await client.fetch(trainerSlugsQuery)
  } catch (error) {
    console.error('Error fetching trainer slugs:', error)
    return []
  }
}

// ===== ОТЗЫВЫ =====
export const getReviews = async (preview = false) => {
  const sanityClient = getClient(preview)

  try {
    return await sanityClient.fetch(reviewsQuery)
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return []
  }
}

export const getReviewsCount = async (preview = false) => {
  const sanityClient = getClient(preview)

  try {
    return await sanityClient.fetch(reviewsCountQuery)
  } catch (error) {
    console.error('Error fetching reviews count:', error)
    return 0
  }
}

// ===== LEGACY (для обратной совместимости) =====
// Эти функции можно удалить после миграции всех компонентов

/**
 * @deprecated Используйте getHomePage вместо getMainPage
 */
export const getMainPage = getHomePage

/**
 * @deprecated Используйте getDirections вместо getSports
 */
export const getSports = getDirections

/**
 * @deprecated Используйте getMemberships вместо getAbonements
 */
export const getAbonements = getMemberships

/**
 * @deprecated Используйте getHomePage вместо getStudio (данные теперь в homePage.space)
 */
export const getStudio = async (preview = false) => {
  const homePage = await getHomePage(preview)
  return homePage?.space || null
}

/**
 * @deprecated Используйте getHomePage вместо getProblems (данные теперь в homePage.problems)
 */
export const getProblems = async (preview = false) => {
  const homePage = await getHomePage(preview)
  return homePage?.problems?.problemsList || []
}

/**
 * @deprecated Используйте getHomePage вместо getContacts (данные теперь в homePage.contacts)
 */
export const getContacts = async (preview = false) => {
  const homePage = await getHomePage(preview)
  return homePage?.contacts || null
}

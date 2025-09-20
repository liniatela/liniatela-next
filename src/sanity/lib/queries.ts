import { groq } from 'next-sanity'

// Главная страница
export const mainPageQuery = groq`*[_type == "mainPage"][0] {
  header {
    title,
    logo,
    navigation,
    ctaButton,
    abonementsButton
  },
  hero {
    title,
    subtitle,
    backgroundMedia {
      mediaType,
      video,
      image
    }
  },
  sportsBlock {
    title,
    heading,
    auxiliaryText
  },
  problemsBlock {
    title,
    heading,
    subtitle,
    description
  },
  ctaBlock {
    title,
    heading,
    description,
    sportsList,
    ctaText
  },
  abonementsBlock {
    title,
    heading
  },
  trainersBlock {
    title,
    heading,
    description
  },
  reviewsBlock {
    title,
    heading,
    description
  },
  footer {
    heading,
    description,
    tagText,
    sitemap,
    sportsList,
    socialNetworks
  }
}`

// Направления
export const sportsQuery = groq`*[_type == "sports"] | order(title asc) {
  _id,
  title,
  slug,
  shortDescription,
  fullDescription,
  difficulty,
  duration,
  calories,
  coverImage,
  gallery
}`

// Абонементы
export const abonementsQuery = groq`*[_type == "abonements"] | order(price asc) {
  _id,
  title,
  slug,
  coverImage,
  price,
  shortDescription,
  features,
  duration,
  auxiliaryText,
  faq
}`

// Тренеры
export const trainersQuery = groq`*[_type == "trainers"] | order(firstName asc) {
  _id,
  firstName,
  lastName,
  slug,
  position,
  photo,
  quote,
  sports[]->{ title, slug },
  description
}`

// Отзывы
export const reviewsQuery = groq`*[_type == "reviews"] | order(_createdAt desc) {
  _id,
  slug,
  firstName,
  lastName,
  text,
  media
}`

// Студия
export const studioQuery = groq`*[_type == "studios"][0] {
  title,
  heading,
  description,
  advantages,
  images,
  halls
}`

// Проблемы
export const problemsQuery = groq`*[_type == "problems"] | order(title asc) {
  _id,
  title,
  description
}`

// Контакты
export const contactsQuery = groq`*[_type == "contacts"][0] {
  title,
  address,
  contactList,
  socialNetworks,
  legalInfo
}`

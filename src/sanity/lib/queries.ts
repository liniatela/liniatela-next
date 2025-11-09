import { groq } from 'next-sanity'

// Фрагмент для SEO
const seoFragment = groq`
  seo {
    metaTitle,
    metaDescription,
    metaKeywords,
    ogImage,
    ogTitle,
    ogDescription
  }
`

// Фрагмент для mediaField
const mediaFieldFragment = groq`
  mediaType,
  video {
    asset-> {
      _id,
      url,
      originalFilename,
      mimeType,
      size,
      duration
    }
  },
  image {
    asset-> {
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    }
  },
  poster {
    asset-> {
      _id,
      url
    }
  },
  alt
`

// Фрагмент для FAQ
const faqFragment = groq`
  faq[] {
    question,
    answer
  }
`

// Фрагмент для pricing
const pricingFragment = groq`
  pricing[] {
    period,
    price,
    originalPrice,
    savings,
    freeze,
    personalTraining,
    massage,
    nutritionist
  }
`

// ===== НАСТРОЙКИ САЙТА =====
export const settingsQuery = groq`*[_type == "settings"][0] {
  _id,
  siteName,
  siteUrl,
  logo {
    asset-> {
      _id,
      url
    }
  },
  headerMenu {
    items[] {
      title,
      href
    }
  },
  footer {
    companyName,
    description,
    slogan,
    metaDisclaimer,
    sitemapTitle,
    sitemapLinks[] {
      title,
      href
    },
    socialLinks[] {
      name,
      url,
      icon
    }
  },
  ${seoFragment},
  googleAnalyticsId,
  yandexMetrikaId,
  phone,
  email,
  workingHours
}`

// ===== ГЛАВНАЯ СТРАНИЦА =====
export const homePageQuery = groq`*[_type == "homePage"][0] {
  _id,
  title,
  ${seoFragment},
  hero {
    subtitle,
    title,
    backgroundMedia {
      ${mediaFieldFragment}
    }
  },
  directionsTitle,
  directionsSubtitle,
  cta {
    title,
    description,
    tags[] {
      label
    },
    buttonLabel,
    buttonLink,
    sideNote,
    backgroundImage {
      asset-> {
        _id,
        url
      }
    }
  },
  problems {
    title,
    image {
      asset-> {
        _id,
        url
      }
    },
    problemsList[] {
      title,
      description
    }
  },
  membershipsTitle,
  membershipsSubtitle,
  space {
    title,
    address,
    area,
    reviewsPercent,
    hallsCount,
    directionsCount,
    description,
    features[] {
      label,
      value,
      description
    },
    generalImages[] {
      asset-> {
        _id,
        url
      }
    },
    halls[] {
      name,
      description,
      media {
        ${mediaFieldFragment}
      },
      features
    }
  },
  trainersTitle,
  trainersSubtitle,
  certificate {
    title,
    description,
    amountOptions[] {
      amount,
      description
    },
    sessionsOptions[] {
      sessions,
      estimatedPrice
    }
  },
  reviewsTitle,
  reviewsSubtitle,
  reviewsBadge,
  reviewsDescription,
  reviewsBackgroundImage {
    asset-> {
      _id,
      url
    }
  },
  contacts {
    title,
    studioTitle,
    address,
    contactMethodsTitle,
    telegram {
      username,
      url
    },
    whatsapp {
      phone,
      url
    },
    socialNetworksTitle,
    instagram {
      name,
      url
    },
    telegramChannel {
      name,
      url
    },
    businessInfo {
      name,
      inn,
      ogrn
    }
  }
}`

// ===== НАПРАВЛЕНИЯ =====
export const directionsQuery = groq`*[_type == "direction"] | order(name asc) {
  _id,
  name,
  slug,
  category,
  shortDescription,
  fullDescription,
  difficulty,
  duration,
  calories,
  coverImage {
    asset-> {
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    }
  },
  gallery[] {
    ${mediaFieldFragment}
  },
  ${seoFragment}
}`

// Получение одного направления по slug
export const directionBySlugQuery = groq`*[_type == "direction" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  category,
  shortDescription,
  fullDescription,
  difficulty,
  duration,
  calories,
  coverImage {
    asset-> {
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    }
  },
  gallery[] {
    ${mediaFieldFragment}
  },
  ${seoFragment}
}`

// ===== АБОНЕМЕНТЫ =====
export const membershipsQuery = groq`*[_type == "membership"] | order(order asc) {
  _id,
  title,
  slug,
  coverImage {
    asset-> {
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    }
  },
  price,
  shortDescription,
  longDescription,
  duration,
  validityPeriod,
  sessionsCount,
  sessionsPerWeek,
  freeze {
    available,
    duration,
    conditions
  },
  suitableFor,
  pricePerSession,
  pricePerSessionPro,
  ${pricingFragment},
  ${faqFragment},
  isPopular,
  order,
  ${seoFragment}
}`

// Получение одного абонемента по slug
export const membershipBySlugQuery = groq`*[_type == "membership" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  coverImage {
    asset-> {
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    }
  },
  price,
  shortDescription,
  longDescription,
  duration,
  validityPeriod,
  sessionsCount,
  sessionsPerWeek,
  freeze {
    available,
    duration,
    conditions
  },
  suitableFor,
  pricePerSession,
  pricePerSessionPro,
  ${pricingFragment},
  ${faqFragment},
  isPopular,
  ${seoFragment}
}`

// ===== ТРЕНЕРЫ =====
export const trainersQuery = groq`*[_type == "trainer" && isActive == true] | order(order asc) {
  _id,
  name,
  slug,
  position,
  photo {
    asset-> {
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    }
  },
  quote,
  directions,
  description,
  experience,
  certifications,
  videoPresentation {
    ${mediaFieldFragment}
  },
  isActive,
  order,
  ${seoFragment}
}`

// Получение одного тренера по slug
export const trainerBySlugQuery = groq`*[_type == "trainer" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  position,
  photo {
    asset-> {
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    }
  },
  quote,
  directions,
  description,
  experience,
  certifications,
  videoPresentation {
    ${mediaFieldFragment}
  },
  isActive,
  ${seoFragment}
}`

// ===== ОТЗЫВЫ =====
export const reviewsQuery = groq`*[_type == "review" && isPublished == true] | order(order asc, publishedAt desc) {
  _id,
  name,
  type,
  description,
  text,
  badge,
  media {
    ${mediaFieldFragment}
  },
  rating,
  isPublished,
  order,
  publishedAt
}`

// ===== ВСПОМОГАТЕЛЬНЫЕ ЗАПРОСЫ =====

// Получение всех slug направлений (для статической генерации)
export const directionSlugsQuery = groq`*[_type == "direction"] {
  "slug": slug.current
}`

// Получение всех slug абонементов (для статической генерации)
export const membershipSlugsQuery = groq`*[_type == "membership"] {
  "slug": slug.current
}`

// Получение всех slug тренеров (для статической генерации)
export const trainerSlugsQuery = groq`*[_type == "trainer"] {
  "slug": slug.current
}`

// Получение количества отзывов
export const reviewsCountQuery = groq`count(*[_type == "review" && isPublished == true])`

// Получение популярных абонементов
export const popularMembershipsQuery = groq`*[_type == "membership" && isPopular == true] | order(order asc) {
  _id,
  title,
  slug,
  coverImage {
    asset-> {
      _id,
      url
    }
  },
  price,
  shortDescription
}`

// ===== БАЗОВЫЕ ТИПЫ =====

export interface SanityImage {
  asset: {
    _id: string
    url: string
    metadata?: {
      dimensions: {
        width: number
        height: number
        aspectRatio: number
      }
      lqip?: string
    }
  }
}

export interface SanityVideoAsset {
  _id: string
  url: string
  originalFilename?: string
  mimeType?: string
  size?: number
  duration?: number
}

export interface SanityMediaField {
  mediaType: 'video' | 'image'
  video?: {
    asset: SanityVideoAsset
  }
  image?: SanityImage
  poster?: SanityImage
  alt?: string
}

export interface SanitySEO {
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string[]
  ogImage?: SanityImage
  ogTitle?: string
  ogDescription?: string
}

// ===== НАСТРОЙКИ САЙТА =====

export interface SanitySettings {
  _id: string
  siteName: string
  siteUrl: string
  logo?: SanityImage
  favicon?: SanityImage
  headerMenu: {
    items: {
      title: string
      href: string
    }[]
  }
  footer: {
    companyName: string
    description?: string
    slogan?: string
    metaDisclaimer?: string
    sitemapTitle?: string
    sitemapLinks?: {
      title: string
      href: string
    }[]
    socialLinks?: {
      name: string
      url: string
      icon?: string
    }[]
  }
  seo?: SanitySEO
  googleAnalyticsId?: string
  yandexMetrikaId?: string
  phone?: string
  email?: string
  workingHours?: string
}

// ===== ГЛАВНАЯ СТРАНИЦА =====

export interface SanityHero {
  subtitle: string
  title: string
  backgroundMedia: SanityMediaField
}

export interface SanityCTA {
  title: string
  description: string
  tags?: {
    label: string
  }[]
  buttonLabel: string
  buttonLink: string
  sideNote?: string
  backgroundImage?: SanityImage
}

export interface SanityProblems {
  title: string
  image: SanityImage
  problemsList: {
    title: string
    description: string
  }[]
}

export interface SanitySpace {
  title?: string
  address: string
  area?: string
  reviewsPercent?: string
  hallsCount?: string
  directionsCount?: string
  description: string
  features?: {
    label: string
    value: string
    description: string
  }[]
  generalImages?: SanityImage[]
  halls?: {
    name: string
    description?: string
    media: SanityMediaField
    features?: string[]
  }[]
}

export interface SanityCertificate {
  title?: string
  description?: string
  amountOptions?: {
    amount: number
    description?: string
  }[]
  sessionsOptions?: {
    sessions: number
    estimatedPrice?: string
  }[]
}

export interface SanityContacts {
  title?: string
  studioTitle?: string
  address: string
  contactMethodsTitle?: string
  telegram?: {
    username?: string
    url?: string
  }
  whatsapp?: {
    phone?: string
    url?: string
  }
  socialNetworksTitle?: string
  instagram?: {
    name?: string
    url?: string
  }
  telegramChannel?: {
    name?: string
    url?: string
  }
  businessInfo?: {
    name?: string
    inn?: string
    ogrn?: string
  }
}

export interface SanityHomePage {
  _id: string
  title: string
  seo?: SanitySEO
  hero: SanityHero
  directionsTitle?: string
  directionsSubtitle?: string
  cta?: SanityCTA
  problems?: SanityProblems
  membershipsTitle?: string
  membershipsSubtitle?: string
  space?: SanitySpace
  trainersTitle?: string
  trainersSubtitle?: string
  certificate?: SanityCertificate
  reviewsTitle?: string
  reviewsSubtitle?: string
  reviewsBadge?: string
  reviewsDescription?: string
  reviewsBackgroundImage?: SanityImage
  contacts?: SanityContacts
}

// ===== НАПРАВЛЕНИЯ =====

export interface SanityDirection {
  _id: string
  name: string
  slug: {
    current: string
  }
  category: string
  shortDescription: string
  fullDescription: string
  difficulty: 1 | 2 | 3
  duration: string
  calories: number
  coverImage: SanityImage
  gallery?: SanityMediaField[]
  seo?: SanitySEO
}

// ===== АБОНЕМЕНТЫ =====

export interface SanityPricing {
  period: '1' | '3' | '6' | '12'
  price: number
  originalPrice?: number
  savings?: number
  freeze?: string
  personalTraining?: number
  massage?: boolean
  nutritionist?: boolean
}

export interface SanityFAQ {
  question: string
  answer: string
}

export interface SanityMembership {
  _id: string
  title: string
  slug: {
    current: string
  }
  coverImage: SanityImage
  price: string | number
  shortDescription: string
  longDescription: string
  duration?: string
  validityPeriod: string
  sessionsCount?: string
  sessionsPerWeek?: string
  freeze?: {
    available: boolean
    duration?: string
    conditions?: string
  }
  suitableFor?: string[]
  pricePerSession?: number
  pricePerSessionPro?: number
  pricing?: SanityPricing[]
  faq?: SanityFAQ[]
  isPopular?: boolean
  order?: number
  seo?: SanitySEO
}

// ===== ТРЕНЕРЫ =====

export interface SanityTrainer {
  _id: string
  name: string
  slug: {
    current: string
  }
  position: string
  photo: SanityImage
  quote: string
  directions: string[]
  description: string
  experience?: string
  certifications?: string[]
  videoPresentation?: SanityMediaField
  isActive: boolean
  order?: number
  seo?: SanitySEO
}

// ===== ОТЗЫВЫ =====

export type ReviewType = 'text' | 'image' | 'video'

export interface SanityReview {
  _id: string
  name: string
  type: ReviewType
  description: string
  text?: string
  badge?: string
  media?: SanityMediaField
  rating?: number
  isPublished: boolean
  order?: number
  publishedAt: string
}

// ===== ВСПОМОГАТЕЛЬНЫЕ ТИПЫ =====

export interface SlugResult {
  slug: string
}


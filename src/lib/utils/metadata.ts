import { Metadata } from 'next'

const OG_IMAGE = '/og-image.jpg'
const SITE_URL = 'https://li-te.ru'

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Линия Тела — Студия мягкого фитнеса в Абакане',
    template: '%s | Линия Тела'
  },
  description:
    'Студия мягкого фитнеса в Абакане. Йога, пилатес, растяжка, аэро-йога, МФР. Твоя гибкость — это свобода быть собой. Запишись на первую тренировку!',
  icons: {
    icon: [
      { url: 'favicon/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: 'favicon/favicon.svg', type: 'image/svg+xml' },
      { url: 'favicon/favicon.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  manifest: '/favicon/manifest.json',
  keywords: [
    'мягкий фитнес Абакан',
    'йога Абакан',
    'пилатес Абакан',
    'растяжка Абакан',
    'аэро-йога',
    'fly yoga',
    'студия фитнеса',
    'женский фитнес',
    'гибкость',
    'МФР',
    'стретчинг',
    'Линия Тела'
  ],
  authors: [{ name: 'Линия Тела' }],
  creator: 'Линия Тела',
  publisher: 'Линия Тела',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Линия Тела',
    title: 'Линия Тела — Студия мягкого фитнеса в Абакане',
    description:
      'Твоя гибкость — это свобода быть собой. Йога, пилатес, растяжка, аэро-йога и другие направления в нашей студии. Запишись на пробное занятие!',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Линия Тела — Студия мягкого фитнеса в Абакане',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Линия Тела — Студия мягкого фитнеса в Абакане',
    description:
      'Твоя гибкость — это свобода быть собой. Йога, пилатес, растяжка, аэро-йога и другие направления.',
    images: [OG_IMAGE]
  },
  alternates: {
    canonical: SITE_URL
  }
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code'
  // }
}

import { Thing, WithContext } from 'schema-dts'

export const siteJsonLd: WithContext<Thing> = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Линия Тела',
  description: 'Студия мягкого фитнеса в Абакане',
  url: SITE_URL,
  telephone: '+89830577878',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Генерала Тихонова 2',
    addressLocality: 'Абакан',
    addressCountry: 'RU'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '53.7216',
    longitude: '91.4425'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00'
    }
  ],
  sameAs: ['https://www.instagram.com/linia__tela', 'https://t.me/liniatela_studio'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Направления фитнеса',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Йога'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Пилатес'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Растяжка'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Аэро-йога'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'МФР'
        }
      }
    ]
  }
}

import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/shared/header'

import { ReactLenis } from '@/lib/utils/lenis'

import { siteMetadata } from '@/lib/utils/metadata'
import { siteJsonLd } from '@/lib/utils/metadata'

const onestSans = Onest({
  variable: '--font-onest',
  subsets: ['latin']
})

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className={`${onestSans.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className='flex-1'>
          {children}
        </main>
      </body>
    </html>
  )
}

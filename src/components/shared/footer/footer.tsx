import { CopyrightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/icons/short-logo.svg'
import { SanitySettings } from '@/sanity/lib'

interface FooterProps {
  settings: SanitySettings | null
}

function Footer({ settings }: FooterProps) {

  const footer = settings?.footer
  const sitemapLinks = footer?.sitemapLinks || []
  const socialLinks = footer?.socialLinks || []
  const description = footer?.description || 'Они знают, как создать атмосферу, где легко расслабиться, раскрыться и просто быть.'
  const slogan = footer?.slogan || 'Создай свои линии - создай свое тело'
  const metaDisclaimer = footer?.metaDisclaimer || '* Принадлежит компании Meta, признанной экстремистской и запрещённой на территории РФ'


  return (
    <footer id='contacts'>
      <div className='bg-primary text-white rounded-[40px] p-10'>
        <div className='grid lg:grid-cols-[minmax(0,365px)_minmax(0,550px)] justify-between'>
          <header className='flex flex-col gap-6 mb-10'>
            <Image src={logo} width={45} height={45} alt='' />
            <h2 className='text-3xl leading-none tracking-tighter text-pretty'>
              {slogan}
            </h2>
            <p className='leading-none tracking-tighter text-balance'>
              {description}
            </p>
          </header>
          <nav className='grid sm:grid-cols-2 gap-10'>
            {/* Карта сайта */}
            <div>
              <h3 className='text-2xl mb-6 leading-none tracking-tighter'>
                {footer?.sitemapTitle || 'Карта сайта'}
              </h3>
              <ul className='space-y-4'>
                {sitemapLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className='text-white hover:text-white/70 transition-colors leading-none tracking-tighter'
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Социальные сети */}
            <div>
              <h3 className='text-2xl mb-6 leading-none tracking-tighter'>
                Социальные сети
              </h3>
              <ul className='space-y-4'>
                {socialLinks.map(social => (
                  <li key={social.name}>
                    <Link
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-end text-white hover:text-white/70 transition-colors leading-none tracking-tighter'
                    >
                      {social.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className='text-xs my-6 text-white/50 mt-4 leading-none tracking-tighter sm:col-span-2'>
              {metaDisclaimer}
            </p>
          </nav>
        </div>
        <footer className='flex items-center justify-between gap-10 flex-wrap border-t pt-5 border-white/10'>
          <Link className='text-white hover:text-white/70 transition-colors' href={'/'}>Политика конфиденциальности</Link>
          <p className='inline-flex items-center gap-1 leading-none tracking-tighter'>
            <CopyrightIcon strokeWidth={1.5} size={20} />
            Все права защищены
          </p>
        </footer>
      </div>
    </footer>
  )
}

export default Footer

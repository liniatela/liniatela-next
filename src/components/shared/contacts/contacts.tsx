import Image from 'next/image'
import backgroundImage from './images/bg.jpg'
import Tag from '../tag'
import { BUSINESS_INFO, CONTACT_METHODS, SOCIAL_NETWORKS, STUDIO_INFO } from './constants'
import Link from 'next/link'

function Contacts() {

    return (
        <section id="contacts">
            <div className="container">
                <div className="relative sm:rounded-[40px] sm:p-10 overflow-hidden">
                    <div className='bg-border sm:bg-white relative z-10 rounded-[40px] p-10 flex flex-col items-start gap-6 w-full sm:w-max'>
                        <Tag>Контакты</Tag>
                        <div className='space-y-3'>
                            <span className='text-sm font-medium leading-none tracking-tighter'>Адрес студии</span>
                            <address className='not-italic text-muted-foreground leading-none tracking-tighter'>{STUDIO_INFO.address}</address>
                        </div>

                        <Link href={'tel:+7 (999) 999 99-99'}>
                            <span className='font-medium text-xl leading-none tracking-tighter'>+7 (999) 999 99-99</span>
                        </Link>

                        <div className='grid grid-cols-2 gap-10'>
                            <div>
                                <span className='text-sm font-medium leading-none tracking-tighter' >Для связи с нами</span>
                                <ul className='flex items-center gap-2 mt-2'>
                                    <li>
                                        <Link href={CONTACT_METHODS.telegram.href}>
                                            <CONTACT_METHODS.telegram.icon />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={CONTACT_METHODS.whatsapp.href}>
                                            <CONTACT_METHODS.whatsapp.icon />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <span className='text-sm font-medium leading-none tracking-tighter' >Наши соц. сети</span>
                                <ul className='flex items-center gap-2 mt-2'>
                                    <li>
                                        <Link href={SOCIAL_NETWORKS.instagram.href}>
                                            <SOCIAL_NETWORKS.instagram.icon />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={SOCIAL_NETWORKS.telegram.href}>
                                            <SOCIAL_NETWORKS.telegram.icon />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <ul className=''>
                            <li className='text-sm text-muted-foreground leading-none tracking-tighter'>{BUSINESS_INFO.name}</li>
                            <li className='text-sm text-muted-foreground leading-none tracking-tighter'>{BUSINESS_INFO.inn}</li>
                            <li className='text-sm text-muted-foreground leading-none tracking-tighter'>{BUSINESS_INFO.ogrn}</li>
                        </ul>
                    </div>
                    <Image className='object-cover max-sm:hidden' src={backgroundImage} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" alt="" />
                </div>
            </div>
        </section >
    )
}

export default Contacts
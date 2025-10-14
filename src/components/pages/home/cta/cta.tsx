import Image from "next/image"

import backgroundImage from './images/background.jpg'
import { MOCK_CTA_DATA } from "./constants"
import Tag from "@/components/shared/tag"
import { Button } from "@/components/shared/button"

const CTA = () => {
  return (
    <section className="cta pt-30 sm:pt-50">
      <div className="relative min-h-[400px] md:min-h-[600px] max-w-[1440px] mx-auto rounded-4xl overflow-hidden 
      p-6 md:p-10">


        <div className="">
          <div className="border border-white/15 rounded-3xl bg-black/10 backdrop-blur-sm text-white max-w-[600px] p-4 md:p-7">
            <h2 className="text-3xl md:text-4xl font-normal leading-none tracking-tighter">{MOCK_CTA_DATA.title}</h2>
            <p className="leading-none tracking-tighter mt-6 max-w-[450px]">{MOCK_CTA_DATA.description}</p>
            <ul className="mt-6 flex flex-wrap">
              {MOCK_CTA_DATA.tags.map((tag) => (
                <li key={tag.id}><Tag variant={'white'} size={'sm'}>{tag.label}</Tag></li>
              ))}
            </ul>
          </div>
          <div className="bg-primary rounded-3xl p-4 md:p-6 text-white max-w-[300px] mt-20  md:mt-32 
           max-md:mx-auto md:ml-auto max-md:text-center">
            <p className="text-2xl leading-none tracking-tighter ">Запишись на первое занятие уже сейчас</p>
            <Button className="mt-4" variant={'white'}>Записаться</Button>
          </div>
        </div>

        <Image
          src={backgroundImage}
          fill
          sizes="100vw"
          alt=""
          className="object-cover pointer-events-none -z-10"
          priority
        />
        <div
          className="absolute inset-0 bg-black/20 pointer-events-none -z-10"
          aria-hidden="true"
        />

      </div>
    </section>
  )
}

export default CTA
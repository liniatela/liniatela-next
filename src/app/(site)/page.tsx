import Directions from '@/components/pages/home/directions'
import Hero from '@/components/pages/home/hero'
import Problems from '@/components/pages/home/problems/problems'
import Contacts from '@/components/shared/contacts'
import Footer from '@/components/shared/footer'
import dynamic from 'next/dynamic'

const Memberships = dynamic(() => import('@/components/pages/home/memberships'), {
  loading: () => <div className="min-h-[400px]" /> // placeholder
})

const Space = dynamic(() => import('@/components/pages/home/space'), {
  loading: () => <div className="min-h-[600px]" />
})

const Trainers = dynamic(() => import('@/components/pages/home/trainers'), {
  loading: () => <div className="min-h-[400px]" />
})

const Certificate = dynamic(() => import('@/components/pages/home/certificate/certificate'), {
  loading: () => <div className="min-h-[400px]" />
})

const Reviews = dynamic(() => import('@/components/pages/home/reviews/reviews'), {
  loading: () => <div className="min-h-[500px]" />
})

const CTA = dynamic(() => import('@/components/pages/home/cta/cta'), {
  loading: () => <div className="min-h-[300px]" />
})

export default async function Home() {
  return (
    <>
      <Hero />
      <Directions />
      <Problems />
      <CTA />
      <Memberships />
      <Space />
      <Trainers />
      <Certificate />
      <div className='overflow-hidden '>
        <div className='bg-white rounded-[42px] py-10 sm:py-20'>
          <Reviews />
          <div className='container pt-30'>
            <Contacts />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

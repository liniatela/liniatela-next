import Hero from '@/components/pages/home/hero'
import Directions from '@/components/pages/home/directions'
import Memberships from '@/components/pages/home/memberships'
import Space from '@/components/pages/home/space'
import Trainers from '@/components/pages/home/trainers'
import Footer from '@/components/shared/footer'
import Contacts from '@/components/shared/contacts'
import Problems from '@/components/pages/home/problems/problems'
import CTA from '@/components/pages/home/cta/cta'

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
      <div className=' overflow-hidden'>
        <div className='bg-white rounded-[40px] md:rounded-t-[70px] py-10 sm:pt-20'>
          <div className='container'>

            <Contacts />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

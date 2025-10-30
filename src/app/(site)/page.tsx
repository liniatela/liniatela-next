import Hero from '@/components/pages/home/hero'
import Directions from '@/components/pages/home/directions'
import Memberships from '@/components/pages/home/memberships'
import Space from '@/components/pages/home/space'
import Trainers from '@/components/pages/home/trainers'
import Footer from '@/components/shared/footer'
import Contacts from '@/components/shared/contacts'
import Problems from '@/components/pages/home/problems/problems'
import CTA from '@/components/pages/home/cta/cta'
import Certificate from '@/components/pages/home/certificate/certificate'

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
      <div className='overflow-hidden'>
          <div className='container'>
            <Contacts />
            <Footer />
          </div>
        </div>
    </>
  )
}

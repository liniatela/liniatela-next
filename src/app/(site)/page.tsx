import Hero from '@/components/pages/home/hero'
import Directions from '@/components/pages/home/directions'
import Memberships from '@/components/pages/home/memberships'
import Space from '@/components/pages/home/space'
import Trainers from '@/components/pages/home/trainers'
import Footer from '@/components/shared/footer'

export default async function Home() {
	return (
		<>
			<Hero />
			<Directions />
			<Memberships />
			<Space />
			<Trainers />
			<div className='pt-32 lg:pt-52 overflow-hidden'>
				<div className='bg-white rounded-t-[70px] py-10 sm:py-20'>
					<Footer />
				</div>
			</div>
		</>
	)
}

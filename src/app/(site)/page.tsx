import Hero from '@/components/pages/home/hero'
import Directions from '@/components/pages/home/directions'
import Memberships from '@/components/pages/home/memberships'
import Space from '@/components/pages/home/space'
import Trainers from '@/components/pages/home/trainers'

export default async function Home() {
	return (
		<>
			<Hero />
			{/* <Directions />
			<Memberships />
			<Space /> */}
			<Trainers />
		</>
	)
}

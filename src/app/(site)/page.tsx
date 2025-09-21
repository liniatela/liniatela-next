import Hero from '@/components/pages/home/hero'
import Directions from '@/components/pages/home/directions'
import Memberships from '@/components/pages/home/memberships'

export default async function Home() {
	return (
		<>
			<Hero />
			<Directions />
			<Memberships />
		</>
	)
}

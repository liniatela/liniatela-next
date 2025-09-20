export interface MenuItem {
	id: string
	title: string
	href: string
}

export const MENU_ITEMS: MenuItem[] = [
	{
		id: 'directions',
		title: 'Направления',
		href: '#directions'
	},
	{
		id: 'memberships',
		title: 'Абонементы',
		href: '#memberships'
	},
	{
		id: 'space',
		title: 'Пространство',
		href: '#space'
	},
	{
		id: 'trainers',
		title: 'Тренеры',
		href: '#trainers'
	},
	{
		id: 'contacts',
		title: 'Контакты',
		href: '#contacts'
	}
]

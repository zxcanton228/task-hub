import {
	AlignEndHorizontal,
	CalendarDays,
	LayoutPanelLeft,
	type LucideIcon,
	MessageCircle,
	Notebook,
	Settings,
	UsersRound
} from 'lucide-react'

import { DASHBOARD_PAGES } from 'src/config/dashboard-pages-config'

type TLink = {
	href: string
	label: string
	icon: LucideIcon
	isHome?: boolean
}

export const MAIN_LINKS: TLink[] = [
	{
		href: DASHBOARD_PAGES.DASHBOARD,
		label: 'Dashboard',
		icon: LayoutPanelLeft,
		isHome: true
	},
	{
		href: DASHBOARD_PAGES.DASHBOARD,
		label: 'Messages',
		icon: MessageCircle
	},
	{
		href: DASHBOARD_PAGES.DASHBOARD,
		label: 'Insight',
		icon: AlignEndHorizontal
	},
	{
		href: DASHBOARD_PAGES.DASHBOARD,
		label: 'Team',
		icon: UsersRound
	},
	{
		href: DASHBOARD_PAGES.DASHBOARD,
		label: 'Schedule',
		icon: CalendarDays
	},
	{
		href: DASHBOARD_PAGES.DASHBOARD,
		label: 'Report',
		icon: Notebook
	},
	{
		href: DASHBOARD_PAGES.DASHBOARD,
		label: 'Settings',
		icon: Settings
	}
]
export const PROJECTS = [
	{
		name: 'Project 1',
		icon: 'purple'
	},
	{
		name: 'Project 2',
		icon: 'pink'
	},
	{
		name: 'Project 3',
		icon: 'yellow'
	},
	{
		name: 'Project 4',
		icon: 'orange'
	}
]

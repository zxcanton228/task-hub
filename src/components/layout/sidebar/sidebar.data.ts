import {
	AlignEndHorizontal,
	CalendarDays,
	LayoutPanelLeft,
	MessageCircle,
	Notebook,
	Settings,
	UsersRound,
	type LucideIcon
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
		href: DASHBOARD_PAGES.MESSAGES,
		label: 'Messages',
		icon: MessageCircle
	},
	{
		href: DASHBOARD_PAGES.INSIGHT,
		label: 'Insight',
		icon: AlignEndHorizontal
	},
	{
		href: DASHBOARD_PAGES.TEAM,
		label: 'Team',
		icon: UsersRound
	},
	{
		href: DASHBOARD_PAGES.SCHEDULE,
		label: 'Schedule',
		icon: CalendarDays
	},
	{
		href: DASHBOARD_PAGES.REPORT,
		label: 'Report',
		icon: Notebook
	},
	{
		href: DASHBOARD_PAGES.SETTINGS,
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

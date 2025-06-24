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
import { PAGES } from 'src/config/pages-config'

type TLink = {
	href: string
	label: string
	icon: LucideIcon
	isHome?: boolean
}

export const MAIN_LINKS: TLink[] = [
	{
		href: PAGES.DASHBOARD,
		label: 'Dashboard',
		icon: LayoutPanelLeft,
		isHome: true
	},
	{
		href: PAGES.MESSAGES,
		label: 'Messages',
		icon: MessageCircle
	},
	{
		href: PAGES.INSIGHT,
		label: 'Insight',
		icon: AlignEndHorizontal
	},
	{
		href: PAGES.TEAM,
		label: 'Team',
		icon: UsersRound
	},
	{
		href: PAGES.SCHEDULE,
		label: 'Schedule',
		icon: CalendarDays
	},
	{
		href: PAGES.REPORT,
		label: 'Report',
		icon: Notebook
	},
	{
		href: PAGES.SETTINGS,
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

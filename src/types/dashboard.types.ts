import type { LucideIcon } from 'lucide-react'

export type TTask = {
	title: string
	status: number
	messages: number
	dueDate: number
	images: number
	links: number
	color: string
	icon?: LucideIcon
}

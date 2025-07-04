import type { LucideIcon } from 'lucide-react'
import type { IIcon } from 'src/app/(private)/dashboard/last-tasks/edit-task/PickIcon'

export interface ITask {
	id: number
	title: string
	status: number
	messages: number
	dueDate: Date
	images: number
	links: number
	color: string
	icon?: LucideIcon
}
export interface ITaskForm extends Pick<ITask, 'title' | 'status' | 'dueDate' | 'color'> {
	icon?: IIcon
}

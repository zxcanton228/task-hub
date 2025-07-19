import { Calendar, List, Plane } from 'lucide-react'
import type { IIcon } from 'src/app/(private)/dashboard/last-tasks/edit-task/PickIcon'

import type { EnumActivitySort, EnumDueDateSort } from './enums'
import type { IPaginationParams } from './types'

export interface ITask {
	id: string
	title: string
	status: number
	messages: number
	dueDate: Date
	images: number
	links: number
	color: string
	icon?: keyof typeof EnumIcons
}
export interface ITaskData extends Pick<ITask, 'title' | 'status' | 'color'> {
	icon?: string
	dueDate: Date
}
export interface ITaskForm extends Omit<ITaskData, 'dueDate' | 'icon'> {
	dueDate: string
	icon?: IIcon
}

export const EnumIcons = {
	PLANE: Plane,
	CALENDAR: Calendar,
	CHECKLIST: List
} as const
export type EnumIcons = (typeof EnumIcons)[keyof typeof EnumIcons]

export interface IGetAllTasks {
	tasks: ITask[]
	length: number
}
export interface IGetAllTasksDto extends IPaginationParams {
	sort?: EnumActivitySort
	searchTerm?: string
	dueDate?: EnumDueDateSort
}

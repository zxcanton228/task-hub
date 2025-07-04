import type { ITask, ITaskForm } from 'src/types/dashboard.types'
import type { EnumDeadlineSort, EnumLastTasksFilters } from 'src/types/enums'

export interface ITabsStore {
	tabsActive: EnumLastTasksFilters
	setTab: (num: EnumLastTasksFilters) => void
}
export interface ITasksStore {
	tasks: ITask[]
	sortTerm: EnumDeadlineSort
	editTask: (id: number, data: ITaskForm) => void
	sortByStatus: (status: EnumLastTasksFilters) => void
	sortByDeadline: (sort: EnumDeadlineSort) => void
	setSortTerm: (sortTerm: EnumDeadlineSort) => void
}

import { LASTS_TASKS } from 'src/app/(private)/dashboard/data/dashboard.data'
import { EnumDeadlineSort, EnumLastTasksFilters } from 'src/types/enums'
import type { ITabsStore, ITasksStore } from './store.types'

export const initialTabsStore: Pick<ITabsStore, 'tabsActive'> = {
	tabsActive: EnumLastTasksFilters.ALL
}
export const initialTasksStore: Pick<ITasksStore, 'tasks' | 'sortTerm'> = {
	tasks: LASTS_TASKS,
	sortTerm: EnumDeadlineSort.NONE
}

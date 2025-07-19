import type { EnumActivitySort } from 'src/types/enums'
import type { IGetAllTasksDto } from 'src/types/task.types'

export interface IStore {
	queryParams: IGetAllTasksDto
	isFilterUpdated: boolean
	updateQueryParam: (data: { key: keyof IGetAllTasksDto; value: string }) => void
	reset: () => void
}

export interface ITabsStore {
	tabsActive: EnumActivitySort
	setTab: (num: EnumActivitySort) => void
}

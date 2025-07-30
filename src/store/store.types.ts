import type { IChartValueParams } from 'src/types/chart.types'
import type { EnumActivitySort } from 'src/types/enums'
import type { IGetAllTasksDto } from 'src/types/task.types'

export interface IStore<TParams> {
	isFilterUpdated: boolean
	updateQueryParam: (data: { key: keyof TParams; value: string }) => void
	reset: () => void
}
export interface IGetAllTasksStore extends IStore<IGetAllTasksDto> {
	queryParams: IGetAllTasksDto
}
export interface IChartTypeStore {
	updateQueryParam: (value: string) => void
	queryParams: IChartValueParams
	isFilterUpdated: boolean
	reset: () => void
}

export interface ITabsStore {
	tabsActive: EnumActivitySort
	setTab: (num: EnumActivitySort) => void
}

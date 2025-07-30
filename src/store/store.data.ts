import { EnumActivitySort, EnumDueDateSort } from 'src/types/enums'

import type { IChartTypeStore, IGetAllTasksStore, ITabsStore } from './store.types'

export const initialTabsStore: Pick<ITabsStore, 'tabsActive'> = {
	tabsActive: EnumActivitySort.ALL
}

export const initialGetAllTasksQueryParams: Pick<IGetAllTasksStore, 'queryParams'> = {
	queryParams: {
		dueDate: EnumDueDateSort.NEWEST,
		sort: EnumActivitySort.ALL,
		searchTerm: '',
		chartType: 'yearly'
	}
}
export const initialChartTypeQueryParams: Pick<IChartTypeStore, 'queryParams'> = {
	queryParams: {
		chartType: 'yearly'
	}
}

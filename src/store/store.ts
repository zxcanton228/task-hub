import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { TChartValue } from 'src/types/chart.types'

import {
	initialChartTypeQueryParams,
	initialGetAllTasksQueryParams,
	initialTabsStore
} from './store.data'
import type { IChartTypeStore, IGetAllTasksStore, ITabsStore } from './store.types'

export const useTabsStore = create<ITabsStore>()(
	persist(
		set => ({
			tabsActive: initialTabsStore.tabsActive,
			setTab: num =>
				set(state => ({
					...state,
					tabsActive: num
				}))
		}),
		{ name: 'tabs' }
	)
)
export const useFiltersStore = create<IGetAllTasksStore>(set => ({
	...initialGetAllTasksQueryParams,
	isFilterUpdated: false,

	updateQueryParam: ({ key, value }) =>
		set(state => ({
			queryParams: { ...state.queryParams, [key]: value },
			isFilterUpdated: true
		})),

	reset: () => set(() => ({ ...initialGetAllTasksQueryParams, isFilterUpdated: true }))
}))
export const useChatTypeStore = create<IChartTypeStore>(set => ({
	...initialChartTypeQueryParams,
	isFilterUpdated: false,

	updateQueryParam: value =>
		set(() => ({
			queryParams: { chartType: value as TChartValue },
			isFilterUpdated: true
		})),

	reset: () => set(() => ({ ...initialChartTypeQueryParams, isFilterUpdated: true }))
}))

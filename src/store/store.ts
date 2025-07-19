import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { initialQueryParams, initialTabsStore } from './store.data'
import type { IStore, ITabsStore } from './store.types'

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
export const useFiltersStore = create<IStore>(set => ({
	...initialQueryParams,
	isFilterUpdated: false,

	updateQueryParam: ({ key, value }) =>
		set(state => ({
			queryParams: { ...state.queryParams, [key]: value },
			isFilterUpdated: true
		})),

	reset: () => set(() => ({ ...initialQueryParams, isFilterUpdated: true }))
}))

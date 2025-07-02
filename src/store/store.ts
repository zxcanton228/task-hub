import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { initialTabsStore } from './store.data'
import type { TTabsStore } from './store.types'

export const useTabsStore = create<TTabsStore>()(
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

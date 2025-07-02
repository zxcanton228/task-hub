import type { EnumLastTasksFilters } from 'src/types/enums'

export type TTabs = {
	setTab: (num: number) => void
	tabActive: number
}
export type TTabsStore = {
	tabsActive: EnumLastTasksFilters
	setTab: (num: EnumLastTasksFilters) => void
}

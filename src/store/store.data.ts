import { EnumLastTasksFilters } from 'src/types/enums'
import type { TTabsStore } from './store.types'

export const initialTabsStore: Pick<TTabsStore, 'tabsActive'> = {
	tabsActive: EnumLastTasksFilters.ALL
}

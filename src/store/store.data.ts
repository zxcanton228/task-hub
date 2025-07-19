import { EnumActivitySort, EnumDueDateSort } from 'src/types/enums'

import type { IStore, ITabsStore } from './store.types'

export const initialTabsStore: Pick<ITabsStore, 'tabsActive'> = {
	tabsActive: EnumActivitySort.ALL
}

export const initialQueryParams: Pick<IStore, 'queryParams'> = {
	queryParams: {
		sort: EnumActivitySort.ALL,
		searchTerm: '',
		dueDate: EnumDueDateSort.NEWEST
	}
}

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import taskService from 'src/services/task.service'

import { useTabsStore } from 'src/store/store'

import { useFilters } from 'src/hooks/useFilters'

import { EnumActivitySort, EnumDueDateSort } from 'src/types/enums'
import type { IGetAllTasks, ITask } from 'src/types/task.types'

export function useTasks(setIsShow: (v: boolean) => void, initialTasks: IGetAllTasks) {
	const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()

	const { data: tasks, refetch } = useQuery({
		queryKey: ['tasks', queryParams],
		queryFn: () => taskService.getAll(queryParams),
		enabled: isFilterUpdated,
		initialData: initialTasks
	})

	const [pickedTask, setPickedTask] = useState<ITask | null>(null)

	const handlePickTask = (task: ITask) => {
		setPickedTask(task)
		setIsShow(true)
	}

	const tabActive = useTabsStore(s => s.tabsActive)
	const setTab = useTabsStore(s => s.setTab)

	const handleSortByStatus = (tabActive: EnumActivitySort) => {
		updateQueryParams('sort', tabActive)
	}

	const handleSwitchSort = () => {
		updateQueryParams(
			'dueDate',
			queryParams.dueDate === EnumDueDateSort.NEWEST
				? EnumDueDateSort.OLDEST
				: EnumDueDateSort.NEWEST
		)
	}
	return {
		dueDate: queryParams.dueDate,
		handleSortByStatus,
		tasksData: tasks,
		handleSwitchSort,
		handlePickTask,
		pickedTask,
		tabActive,
		refetch,
		setTab
	}
}

import { useState } from 'react'
import { useOutside } from 'src/hooks/useOutside'
import { useTabsStore, useTasksStore } from 'src/store/store'
import type { ITask } from 'src/types/dashboard.types'
import { EnumDeadlineSort } from 'src/types/enums'

export function useLastTasks() {
	const { isShow, ref, setIsShow } = useOutside()
	const [pickedTask, setPickedTask] = useState<ITask | null>(null)

	const sortByDeadline = useTasksStore(s => s.sortByDeadline)
	const handlePickTask = (task: ITask) => {
		setPickedTask(task)
		setIsShow(true)
	}
	const sortByStatus = useTasksStore(s => s.sortByStatus)
	const tabActive = useTabsStore(s => s.tabsActive)
	const setTab = useTabsStore(s => s.setTab)

	const sortTerm = useTasksStore(s => s.sortTerm)
	const setSortTerm = useTasksStore(s => s.setSortTerm)

	const handleSwitchSort = () => {
		sortTerm === EnumDeadlineSort.NONE ? EnumDeadlineSort.UPPER : EnumDeadlineSort.LOWER
		setSortTerm(
			sortTerm === EnumDeadlineSort.LOWER
				? EnumDeadlineSort.NONE
				: sortTerm === EnumDeadlineSort.NONE
					? EnumDeadlineSort.UPPER
					: EnumDeadlineSort.LOWER
		)
		sortByDeadline(sortTerm)
	}
	return {
		sortByStatus,
		tabActive,
		setTab,
		sortTerm,
		handleSwitchSort,
		isShow,
		ref,
		pickedTask,
		handlePickTask
	}
}

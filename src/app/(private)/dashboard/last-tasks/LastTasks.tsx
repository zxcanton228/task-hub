'use client'
import { ArrowDown10, ArrowDownUp, ArrowUp10 } from 'lucide-react'
import { useEffect, useState, type FC } from 'react'
import { useTabsStore } from 'src/store/store'
import type { TTask } from 'src/types/dashboard.types'
import { EnumDeadlineSort, EnumLastTasksFilters } from 'src/types/enums'
import { Heading } from 'ui/Heading'
import Tabs from 'ui/tabs/Tabs'
import { LASTS_TASKS } from '../data/dashboard.data'
import { LastTask } from './LastTask'

type Props = {}

export const LastTasks: FC<Props> = () => {
	const [tasks, setTasks] = useState<TTask[]>(LASTS_TASKS)
	const [sortTerm, setSortTerm] = useState<EnumDeadlineSort>()

	const tabActive = useTabsStore(s => s.tabsActive)
	const setTab = useTabsStore(s => s.setTab)

	const handleSwitchSort = () => {
		setSortTerm(prev =>
			prev === EnumDeadlineSort.LOWER ? EnumDeadlineSort.UPPER : EnumDeadlineSort.LOWER
		)
	}

	useEffect(() => {
		switch (sortTerm) {
			case EnumDeadlineSort.UPPER:
				setTasks(prev => prev.sort((a, b) => a.dueDate - b.dueDate))
				break
			case EnumDeadlineSort.LOWER:
				setTasks(prev => prev.sort((a, b) => b.dueDate - a.dueDate))
				break
			default:
				break
		}
	}, [sortTerm])

	useEffect(() => {
		switch (tabActive) {
			case EnumLastTasksFilters.ALL:
				setTasks(LASTS_TASKS)
				break
			case EnumLastTasksFilters.ACTIVE:
				setTasks(LASTS_TASKS.filter(task => task.status !== 100))
				break
			case EnumLastTasksFilters.COMPLETED:
				setTasks(LASTS_TASKS.filter(task => task.status === 100))
				break
		}
	}, [tabActive])

	return (
		<div className='mt-3'>
			<div className='flex flex-col gap-2'>
				<div className='flex items-center gap-3'>
					<Heading>
						Last Tasks <span>({tasks.length})</span>
					</Heading>
					<button
						onClick={handleSwitchSort}
						className='px-3 py-1 text-sm text-text'
					>
						{sortTerm === EnumDeadlineSort.UPPER ? (
							<ArrowDown10 />
						) : sortTerm === EnumDeadlineSort.LOWER ? (
							<ArrowUp10 />
						) : (
							<ArrowDownUp />
						)}
					</button>
				</div>
				<Tabs
					tabs={[
						{ value: EnumLastTasksFilters.ALL, label: 'All' },
						{ value: EnumLastTasksFilters.ACTIVE, label: 'Active' },
						{ value: EnumLastTasksFilters.COMPLETED, label: 'Completed' }
					]}
					tabActive={tabActive}
					switchTab={setTab}
				/>
			</div>

			<div className='columns-3 flex gap-3'>
				{tasks.map((task, i) => (
					<LastTask
						task={task}
						key={i}
						i={i}
					/>
				))}
			</div>
		</div>
	)
}

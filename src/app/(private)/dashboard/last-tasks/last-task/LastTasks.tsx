'use client'

import { AnimatePresence } from 'framer-motion'
import { ArrowDown10, ArrowDownUp, ArrowUp10 } from 'lucide-react'
import dynamic from 'next/dynamic'
import type { FC } from 'react'
import { useTasksStore } from 'src/store/store'
import { EnumDeadlineSort, EnumLastTasksFilters } from 'src/types/enums'
import { Heading } from 'ui/Heading'
import Tabs from 'ui/tabs/Tabs'
import { LastTask } from '../LastTask'
import { useLastTasks } from '../useLastTasks'

const DynamicEditModal = dynamic(() => import('../edit-task/Edit.modal').then(mod => mod.EditModal))

export const LastTasks: FC = () => {
	const {
		handleSwitchSort,
		handlePickTask,
		sortByStatus,
		pickedTask,
		tabActive,
		sortTerm,
		isShow,
		setTab,
		ref
	} = useLastTasks()
	const tasks = useTasksStore(s => s.tasks)

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
					onChange={sortByStatus}
					tabActive={tabActive}
					switchTab={setTab}
				/>
			</div>

			<div className='columns-3 flex gap-3'>
				{tasks.map((task, i) => (
					<LastTask
						openEditModal={handlePickTask}
						task={task}
						key={i}
						i={i}
					/>
				))}
			</div>

			<AnimatePresence initial={false}>
				{isShow && !!pickedTask && (
					<DynamicEditModal
						task={pickedTask}
						ref={ref}
					/>
				)}
			</AnimatePresence>
		</div>
	)
}

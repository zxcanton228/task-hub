'use client'

import { AnimatePresence } from 'framer-motion'
import { ArrowDown10, ArrowDownUp, ArrowUp10 } from 'lucide-react'
import dynamic from 'next/dynamic'
import type { FC } from 'react'

import { useOutside } from 'src/hooks/useOutside'

import { EnumActivitySort, EnumDueDateSort } from 'src/types/enums'
import type { IGetAllTasks } from 'src/types/task.types'

import { Heading } from 'ui/Heading'
import { Tabs } from 'ui/tabs/Tabs'

import { Task } from './last-task/Task'
import { useTasks } from './useTasks'

const DynamicEditModal = dynamic(() => import('./edit-task/Edit.modal').then(mod => mod.EditModal))

type Props = { initialTasks: IGetAllTasks }

export const Tasks: FC<Props> = ({ initialTasks }) => {
	const { isShow, ref, setIsShow } = useOutside()

	const {
		handleSortByStatus,
		handleSwitchSort,
		handlePickTask,
		pickedTask,
		tabActive,
		tasksData,
		refetch,
		dueDate,
		setTab
	} = useTasks(setIsShow, initialTasks)

	return (
		<div className='mt-7'>
			<div className='flex flex-col gap-4 mb-7'>
				<div className='flex items-center gap-4'>
					<Heading>
						Tasks <span>({tasksData?.tasks ? tasksData?.length : 0})</span>
					</Heading>
					<button
						onClick={handleSwitchSort}
						className='px-3 py-1 text-sm text-text'
					>
						{dueDate === EnumDueDateSort.NEWEST ? (
							<ArrowDown10 />
						) : dueDate === EnumDueDateSort.OLDEST ? (
							<ArrowUp10 />
						) : (
							<ArrowDownUp />
						)}
					</button>
				</div>
				<Tabs
					tabs={[
						{ value: EnumActivitySort.ALL, label: 'All' },
						{ value: EnumActivitySort.ACTIVE, label: 'Active' },
						{ value: EnumActivitySort.COMPLETED, label: 'Completed' }
					]}
					onChange={handleSortByStatus}
					tabActive={tabActive}
					switchTab={setTab}
				/>
			</div>

			<div className='grid-cols-3 grid gap-7'>
				{tasksData?.tasks && !!tasksData?.length ? (
					tasksData?.tasks.map((task, i) => (
						<Task
							openEditModal={handlePickTask}
							task={task}
							key={i}
							i={i}
						/>
					))
				) : (
					<div className='text-3xl font-bold'>No tasks</div>
				)}
			</div>

			<AnimatePresence initial={false}>
				{isShow && !!pickedTask && (
					<DynamicEditModal
						setIsShow={setIsShow}
						refetchTasks={refetch}
						task={pickedTask}
						ref={ref}
					/>
				)}
			</AnimatePresence>
		</div>
	)
}

'use client'

import type { FC } from 'react'

import { Header } from 'src/components/layout/header/Header'

import type { IGetAllTasks } from 'src/types/task.types'

import { ProjectsStats } from './ProjectsStats'
import { ProjectChart } from './chart/ProjectsChart'
import { Tasks } from './tasks/Tasks'
import { TodayTasks } from './today-tasks/TodayTasks'

type Props = { initialTasks: IGetAllTasks }

export const Dashboard: FC<Props> = ({ initialTasks }) => {
	return (
		<div>
			<Header title='Dashboard' />
			<div className='px-8 flex flex-col gap-3'>
				<div className='flex gap-8'>
					<ProjectsStats />
					<ProjectChart />
				</div>

				<Tasks initialTasks={initialTasks} />
				<TodayTasks />
			</div>
		</div>
	)
}

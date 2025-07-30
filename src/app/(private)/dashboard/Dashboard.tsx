'use client'

import type { FC } from 'react'

import { Header } from 'src/components/layout/header/Header'

import type { IChartDataPoint } from 'src/types/chart.types'
import type { IGetAllTasks } from 'src/types/task.types'

import { ProjectsStats } from './ProjectsStats'
import { ProjectChart } from './chart/ProjectsChart'
import { Tasks } from './tasks/Tasks'

type Props = { initialTasks: IGetAllTasks; initialChartData: IChartDataPoint[] }

export const Dashboard: FC<Props> = ({ initialTasks, initialChartData }) => {
	return (
		<div>
			<Header title='Dashboard' />
			<div className='px-8 flex flex-col gap-3'>
				<div className='flex gap-8'>
					<ProjectsStats />
					<ProjectChart initialChartData={initialChartData} />
				</div>

				<Tasks initialTasks={initialTasks} />
			</div>
		</div>
	)
}

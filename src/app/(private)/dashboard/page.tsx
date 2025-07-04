import type { Metadata } from 'next'
import { Header } from 'src/components/layout/header/Header'

import { SEO } from 'src/constants/seo.constants'
import { ProjectChart } from './chart/ProjectsChart'
import { LastTasks } from './last-tasks/last-task/LastTasks'
import { ProjectsStats } from './ProjectsStats'

export const metadata: Metadata = {
	title: 'Dashboard',
	...SEO.NO_INDEX_PAGE
}

export default async function DashboardPage() {
	return (
		<div>
			<Header title='Dashboard' />
			<div className='px-8'>
				<div className=' flex gap-8'>
					<ProjectsStats />
					<ProjectChart />
				</div>
				<LastTasks />
			</div>
		</div>
	)
}

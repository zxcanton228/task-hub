import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import taskService from 'src/services/task.service'

import { SEO } from 'src/constants/seo.constants'

import { Dashboard } from './Dashboard'

export const metadata: Metadata = {
	title: 'Dashboard',
	...SEO.NO_INDEX_PAGE
}

export default async function DashboardPage() {
	const cookiesStorage = await cookies()

	const tasks = await taskService.getAllServer({}, cookiesStorage)

	return <Dashboard initialTasks={tasks} />
}

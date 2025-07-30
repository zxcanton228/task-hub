import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import statisticsService from 'src/services/statistics.service'
import taskService from 'src/services/task.service'

import { CLIENT_URL } from 'src/constants/constants'
import { SEO } from 'src/constants/seo.constants'

import { DASHBOARD_PAGES } from 'src/config/dashboard-pages-config'

import type { TChartValue } from 'src/types/chart.types'
import type { IPageSearchParamsProps } from 'src/types/page.types'

import { Dashboard } from './Dashboard'

export const metadata: Metadata = {
	title: 'Dashboard',
	alternates: {
		canonical: CLIENT_URL + DASHBOARD_PAGES.DASHBOARD
	},
	...SEO.NO_INDEX_PAGE
}

export default async function DashboardPage({
	searchParams
}: IPageSearchParamsProps<{ chartType: TChartValue }>) {
	const [cookiesStorage, { chartType }] = await Promise.all([cookies(), searchParams])

	const [tasks, chartData] = await Promise.all([
		taskService.getAllServer({}, cookiesStorage),
		statisticsService.getChartServer(chartType || 'yearly', cookiesStorage)
	])

	return (
		<Dashboard
			initialChartData={chartData}
			initialTasks={tasks}
		/>
	)
}

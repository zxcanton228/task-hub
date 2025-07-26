import type { Metadata } from 'next'

import { SEO } from 'src/constants/seo.constants'

import { Dashboard } from './Dashboard'

export const metadata: Metadata = {
	title: 'Dashboard',
	...SEO.NO_INDEX_PAGE
}

export default async function DashboardPage() {
	// try {
	// 	const cookiesStorage = await cookies()

	// 	const { accessToken, refreshToken } = await authTokenService.getServerTokens(cookiesStorage)
	// 	const tasks = await taskService.getAllServer({}, accessToken, refreshToken)

	// 	console.log(tasks)
	// } catch (error) {
	// 	console.error(error)
	// }
	return <Dashboard />
}

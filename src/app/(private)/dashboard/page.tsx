import type { Metadata } from 'next'

import { SEO } from 'src/constants/seo.constants'

import { Dashboard } from './Dashboard'

export const metadata: Metadata = {
	title: 'Dashboard',
	...SEO.NO_INDEX_PAGE
}

export default async function DashboardPage() {
	return <Dashboard />
}

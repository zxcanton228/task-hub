import type { Metadata } from 'next'
import { Header } from 'src/components/layout/header/Header'

import { SEO } from 'src/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Dashboard',
	...SEO.NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div>
			<Header title='Dashboard' />
		</div>
	)
}

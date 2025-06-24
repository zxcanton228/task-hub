import type { Metadata } from 'next'

import { SEO } from 'src/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Insight',
	...SEO.NO_INDEX_PAGE
}

export default function InsightPage() {
	return <div>Insight</div>
}

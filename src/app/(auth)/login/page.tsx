import type { Metadata } from 'next'

import { SEO } from 'src/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...SEO.NO_INDEX_PAGE
}

export default function Page() {
	return (
		<div>
			<form action=''>
				<h1 className='text-4xl'>Login</h1>
			</form>
		</div>
	)
}

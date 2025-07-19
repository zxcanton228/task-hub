import type { Metadata } from 'next'

import { SEO } from 'src/constants/seo.constants'

import { AuthForm } from '../auth-form/AuthForm'

export const metadata: Metadata = {
	title: 'Sign in',
	...SEO.NO_INDEX_PAGE
}

export default function Page() {
	return (
		<div>
			<AuthForm isLogin />
		</div>
	)
}

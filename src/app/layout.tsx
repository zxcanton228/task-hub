import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SEO } from 'src/constants/seo.constants'
import Providers from 'src/providers/Providers'
import type { TWithChildren } from 'src/types/types'
import './globals.css'

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
	title: {
		default: SEO.SITE_NAME,
		template: `%s | ${SEO.SITE_NAME}`
	},
	description: SEO.DESCRIPTION,
	alternates: {
		canonical: process.env.NEXT_PUBLIC_CLIENT_URL
	}
}

export default function RootLayout({ children }: TWithChildren) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${poppins.variable} antialiased scroll-smooth`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}

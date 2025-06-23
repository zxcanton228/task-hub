import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header } from 'src/components/layout/header/Header'
import { Sidebar } from 'src/components/layout/sidebar/Sidebar'
import { SEO } from 'src/constants/seo.constants'
import Providers from 'src/providers/Providers'
import type { TWithChildren } from 'src/types/types'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		default: SEO.SITE_NAME,
		template: `%s | ${SEO.SITE_NAME}`
	},
	description: SEO.DESCRIPTION
}

export default function RootLayout({ children }: TWithChildren) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>
					<Sidebar />
					<div className='wrapper'>
						<Header />
						<main>{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	)
}

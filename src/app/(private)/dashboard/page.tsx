import type { Metadata } from 'next'
import { Header } from 'src/components/layout/header/Header'

import Image from 'next/image'
import { SEO } from 'src/constants/seo.constants'
import { STATS_DATA } from './dashboard.data'

export const metadata: Metadata = {
	title: 'Dashboard',
	...SEO.NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div>
			<Header title='Dashboard' />
			<div className='px-8'>
				<section className='flex flex-col gap-4 w-80'>
					{STATS_DATA.map(({ color, count, icon, title }, i) => (
						<article
							key={i}
							className={`p-5 rounded-2xl flex gap-3 items-center justify-between hover:scale-[0.98] transition-transform`}
							style={{ backgroundColor: `var(--${color})` }}
						>
							<div className='dark:text-black'>
								<h3 className='text-5xl '>{count}</h3>
								<div>{title}</div>
							</div>
							<Image
								src={`/icons/${icon}.svg`}
								alt={icon}
								width={100}
								height={100}
							/>
						</article>
					))}
				</section>
			</div>
		</div>
	)
}

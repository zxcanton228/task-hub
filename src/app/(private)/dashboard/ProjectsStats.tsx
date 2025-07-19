import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import type { FC } from 'react'
import userService from 'src/services/user.service'

import { STATS_DATA } from './data/dashboard.data'

export const ProjectsStats: FC = () => {
	const { data: cardStatistic } = useQuery({
		queryKey: ['card statistic'],
		queryFn: () => userService.getCardStatistic()
	})
	return (
		!!cardStatistic && (
			<section className='flex shrink-0 flex-col gap-4 w-80'>
				{STATS_DATA(cardStatistic).map(({ color, count, icon, title }, i) => (
					<article
						className={`p-5 rounded-2xl flex gap-3 items-center justify-between hover:scale-[0.98] transition-transform`}
						style={{ backgroundColor: `var(--${color})` }}
						key={i}
					>
						<div className='dark:text-black'>
							<h3 className={icon === 'working-hours' ? 'text-4xl' : 'text-5xl'}>{count}</h3>
							<div>{title}</div>
						</div>
						<Image
							src={`/icons/${icon}.svg`}
							height={100}
							width={100}
							alt={icon}
						/>
					</article>
				))}
			</section>
		)
	)
}

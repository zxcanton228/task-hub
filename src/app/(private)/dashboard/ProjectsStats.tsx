import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { memo } from 'react'
import userService from 'src/services/user.service'

import { STATS_DATA } from './data/dashboard.data'

export const ProjectsStats = memo(() => {
	const { data: cardStatistic } = useQuery({
		queryKey: ['card statistic'],
		queryFn: () => userService.getCardStatistic()
	})
	console.log('RERENDER')

	return (
		!!cardStatistic && (
			<div className='grid grid-cols-1 grid-rows-3 shrink-0 flex-col gap-4 w-90 h-[550px]'>
				{STATS_DATA(cardStatistic).map(({ color, count, icon, title }, i) => (
					<div
						className={`p-5 rounded-2xl flex gap-3 items-center justify-between hover:scale-[0.98] transition-transform h-full`}
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
					</div>
				))}
			</div>
		)
	)
})

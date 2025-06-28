'use client'

import { useState, type FC } from 'react'
import type { ITimeRange } from 'src/types/chart.types'
import { MONTHLY_DATA, TIME_RANGES_DATA, YEARLY_DATA } from '../data/dashboard.data'
import { Chart } from './Chart'
import { ChartHeader } from './ChartHeader'

type Props = {}
export const ProjectChart: FC<Props> = () => {
	const state = useState<ITimeRange>(TIME_RANGES_DATA[1])

	const chartData = state[0].value === 'yearly' ? YEARLY_DATA : MONTHLY_DATA

	return (
		<div className='bg-foreground w-full p-4 rounded-xl'>
			<ChartHeader state={state} />
			<Chart data={chartData} />
		</div>
	)
}

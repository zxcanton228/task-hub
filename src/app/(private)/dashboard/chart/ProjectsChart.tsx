'use client'

import { type FC, memo, useState } from 'react'

import type { ITimeRange } from 'src/types/chart.types'

import { MONTHLY_DATA, TIME_RANGES_DATA, YEARLY_DATA } from '../data/dashboard.data'

import { Chart } from './Chart'
import { ChartHeader } from './ChartHeader'

type Props = {}

// RERENDER постоянно появляется без memo
export const ProjectChart: FC<Props> = memo(() => {
	const state = useState<ITimeRange>(TIME_RANGES_DATA[1])

	const chartData = state[0].value === 'yearly' ? YEARLY_DATA : MONTHLY_DATA

	console.log('RERENDEr')

	return (
		<div className='bg-foreground w-full  p-4 rounded-xl'>
			<ChartHeader state={state} />
			<div className='flex items-center mt-10 h-[450px]'>
				<Chart data={chartData()} />
			</div>
		</div>
	)
})

'use client'

import { useQuery } from '@tanstack/react-query'
import { type FC, memo } from 'react'
import statisticsService from 'src/services/statistics.service'

import type { IChartDataPoint } from 'src/types/chart.types'

import { Chart } from './Chart'
import { ChartHeader } from './ChartHeader'
import { useChangeChartType } from './useChangeChartType'

type Props = { initialChartData: IChartDataPoint[] }

export const ProjectChart: FC<Props> = memo(({ initialChartData }) => {
	const { queryParams, isFilterUpdated, updateQueryParams } = useChangeChartType()

	const { data } = useQuery({
		queryFn: () => statisticsService.getChart(queryParams.chartType),
		queryKey: ['get chart data', queryParams],
		initialData: initialChartData,
		enabled: isFilterUpdated
	})

	return (
		<div className='bg-foreground w-full  p-4 rounded-xl'>
			<ChartHeader
				selectedRange={queryParams.chartType || 'yearly'}
				setChartType={val => updateQueryParams(val)}
			/>
			<div className='flex items-center mt-10 h-[450px]'>{data && <Chart data={data} />}</div>
		</div>
	)
})

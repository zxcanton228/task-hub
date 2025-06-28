import { useMemo, type FC } from 'react'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis /*LineChart, Line, , YAxis, Tooltip*/,
	YAxis
} from 'recharts'
import type { IChartDataPoint } from 'src/types/chart.types'
import { ChartTooltip } from './ChartTooltip'

type Props = { data: IChartDataPoint[] }

export const Chart: FC<Props> = ({ data }) => {
	if (!data || data.length === 0) return null

	const maxData = useMemo(() => {
		let maxVal = 0
		let maxPeriod = ''

		data.forEach(({ period: month, value }) => {
			if (value > maxVal) {
				maxVal = value
				maxPeriod = month
			}
		})

		return { value: maxVal, period: maxPeriod }
	}, [data])

	return (
		<ResponsiveContainer
			width='100%'
			height={300}
		>
			<AreaChart
				data={data}
				margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
			>
				<defs>
					<linearGradient
						id='colorGradient'
						x1='0'
						y1='0'
						x2='0'
						y2='1'
					>
						<stop
							stopColor='#725BF2'
							stopOpacity={0.3}
							offset='5%'
						/>
						<stop
							stopColor='#725BF2'
							stopOpacity={0}
							offset='95%'
						/>
					</linearGradient>
				</defs>
				<CartesianGrid
					strokeDasharray='0'
					stroke='#F3F4F6'
					vertical={false}
				/>
				<XAxis
					tick={{ fontSize: 12, fill: '#9CA3AF' }}
					dataKey='period'
					axisLine={false}
					tickLine={false}
				/>
				<YAxis
					tick={{ fontSize: 12, fill: '#9CA3AF' }}
					domain={[0, 'dataMax + 10']}
					dataKey='period'
					axisLine={false}
					tickLine={false}
				/>
				<Tooltip
					content={<ChartTooltip />}
					cursor={false}
				/>
				{maxData && (
					<ReferenceLine
						strokeDasharray='5 5'
						x={maxData.period}
						stroke='#6366F1'
						strokeWidth={1.5}
					/>
				)}
				<Area
					fill='url(#colorGradient)'
					stroke='#6366F1'
					type='monotone'
					dataKey='value'
					strokeWidth={2}
					fillOpacity={1}
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}

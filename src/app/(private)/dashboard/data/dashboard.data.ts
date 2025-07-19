import type { IChartDataPoint, ITimeRange } from 'src/types/chart.types'
import type { ICardStatistic } from 'src/types/statistic.types'

export const STATS_DATA = ({ activeProjects, onGoingProjects, workingHours }: ICardStatistic) => [
	{
		count: activeProjects.toString(),
		title: 'Active projects',
		icon: 'active-projects',
		color: 'purple'
	},
	{
		count: onGoingProjects.toString(),
		title: 'On Going Project',
		icon: 'ongoing-projects',
		color: 'yellow'
	},
	{
		count: workingHours,
		title: 'Working hours',
		icon: 'working-hours',
		color: 'pink'
	}
]

export const getRandomNum = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min

const MOUNTS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']

export const YEARLY_DATA = (): IChartDataPoint[] => {
	const data = []
	for (let i: number = 0; i < 12; i++) {
		data.push({
			period: MOUNTS[i],
			value: getRandomNum(0, 400)
		})
	}
	return data
}

export const MONTHLY_DATA = (): IChartDataPoint[] => {
	const data = []

	for (let i: number = 0; i < 25; i++) {
		data.push({
			period: `Week ${i}`,
			value: getRandomNum(0, 400)
		})
	}

	return data
}
export const TIME_RANGES_DATA: ITimeRange[] = [
	{
		label: 'Yearly',
		value: 'yearly'
	},
	{
		label: 'Monthly',
		value: 'monthly'
	}
]

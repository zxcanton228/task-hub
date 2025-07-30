import type { ITimeRange } from 'src/types/chart.types'
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

export const TIME_RANGES_DATA: ITimeRange[] = [
	{
		label: 'Yearly',
		value: 'yearly'
	},
	{
		label: 'Weekly',
		value: 'weekly'
	}
]

import { Plane } from 'lucide-react'
import type { IChartDataPoint, ITimeRange } from 'src/types/chart.types'
import type { TTask } from 'src/types/dashboard.types'

export const STATS_DATA = [
	{
		count: '92',
		title: 'Active projects',
		icon: 'active-projects',
		color: 'purple'
	},
	{
		count: '35',
		title: 'On Going Project',
		icon: 'ongoing-projects',
		color: 'yellow'
	},
	{
		count: '19h 9m',
		title: 'Working hours',
		icon: 'working-hours',
		color: 'pink'
	}
]
export const YEARLY_DATA: IChartDataPoint[] = [
	{
		period: 'Week 1',
		value: 19
	},
	{
		period: 'Week 2',
		value: 12
	},
	{
		period: 'Week 3',
		value: 34
	},
	{
		period: 'Week 4',
		value: 40
	},
	{
		period: 'May',
		value: 43
	},
	{
		period: 'Jun',
		value: 38
	},
	{
		period: 'Jul',
		value: 0
	}
]
export const MONTHLY_DATA: IChartDataPoint[] = [
	{
		period: 'Jan',
		value: 100
	},
	{
		period: 'Feb',
		value: 200
	},
	{
		period: 'Mar',
		value: 300
	},
	{
		period: 'Apr',
		value: 400
	}
]
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

/*
repeating-linear-gradient(
    -45deg,
    red,
    red 5px,
    blue 5px,
    blue 10px
  );
*/
export const LASTS_TASKS: TTask[] = [
	{
		date: 'Due : 5days',
		title: 'Travel up',
		color: ['#6f5de7', '#836df6'],
		status: 52,
		messages: 3,
		images: 6,
		links: 2,
		icon: Plane
	},
	{
		date: 'Due : 1days',
		title: 'Travel up',
		color: ['#19c4ac', '#2ac6b4'],
		status: 100,
		messages: 17,
		images: 8,
		links: 16,
		icon: Plane
	},
	{
		date: 'Due :3days',
		title: 'Travel up',
		color: ['#f7c121', '#fec430'],
		messages: 1,
		status: 78,
		images: 3,
		links: 0,
		icon: Plane
	}
]

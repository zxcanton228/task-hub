import type { FC } from 'react'

type Props = {
	active?: boolean
	payload?: Array<{ value: number }>
}

export const ChartTooltip: FC<Props> = ({ active, payload }) => {
	if (!active || !payload || payload.length === 0) return null

	return (
		<div className='bg-primary text-white px-2 py-0.5 rounded-full'>
			<b>{payload[0].value}</b> Projects
		</div>
	)
}

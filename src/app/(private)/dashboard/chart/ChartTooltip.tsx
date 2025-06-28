import type { FC } from 'react'
type Props = {
	active?: boolean
	payload?: Array<{ value: number }>
}
export const ChartTooltip: FC<Props> = ({ active, payload }) => {
	if (!active || !payload || payload.length === 0) return null

	return <div className='bg-primary px-1 py-0.5 rounded-xl'>{payload[0].value} Projects</div>
}

import { CheckCircle } from 'lucide-react'
import { type FC, useMemo } from 'react'

import type { LastTaskProps } from '../last-tasks.types'

export const TaskProgress: FC<LastTaskProps> = ({ task: { status, color } }) => {
	const clamped = Math.min(Math.max(status, 0), 100)

	const progressTxt = useMemo(() => {
		if (clamped === 100)
			return (
				<div className='flex items-center gap-1.5'>
					<CheckCircle size={17} /> Done
				</div>
			)
		return `${clamped}%`
	}, [clamped])

	return (
		<div className='progress border border-gray-300 dark:border-none overflow-hidden w-full rounded-full relative bg-gray-100 dark:bg-gray-700'>
			<div
				className='rounded-full py-3 text-white font-bold flex items-center justify-center gap-1.5'
				style={{
					background: `linear-gradient(to right, ${color}, rgb(from ${color} r g b / 0.7))`,
					width: `${status}%`
				}}
			>
				<span className={clamped < 10 ? 'ml-10' : ''}>{progressTxt}</span>
			</div>
		</div>
	)
}

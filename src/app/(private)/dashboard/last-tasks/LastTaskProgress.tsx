import { CheckCircle } from 'lucide-react'
import { useMemo, type FC } from 'react'
import type { LastTaskProps } from './LastTask'

export const LastTaskProgress: FC<LastTaskProps> = ({ task: { status, color } }) => {
	const clamped = Math.min(Math.max(status, 0), 100)

	const progressTxt = useMemo(() => {
		if (clamped === 100)
			return (
				<>
					<CheckCircle size={17} /> Done
				</>
			)
		return `${clamped}%`
	}, [clamped])

	return (
		<div className='progress w-full rounded-full relative bg-gray-100 dark:bg-gray-700'>
			<div
				className='rounded-full py-3 text-white font-bold flex items-center justify-center gap-1.5'
				style={{
					background: `linear-gradient(to right, ${color}, rgb(from ${color} r g b / 0.7))`,
					width: `${status}%`
				}}
			>
				{progressTxt}
			</div>
		</div>
	)
}

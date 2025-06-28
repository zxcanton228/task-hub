import type { FC } from 'react'
import type { TTask } from 'src/types/dashboard.types'
import './LastTask.scss'
import { LastTaskFooter } from './LastTaskFooter'

export type LastTaskProps = { task: TTask }

export const LastTask: FC<LastTaskProps> = ({ task }) => {
	const Icon = task.icon
	return (
		<article className='task rounded-lg flex flex-col gap-3 bg-foreground p-4'>
			<div className='flex items-center gap-2'>
				<div className='bg-gray-100 dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center'>
					{Icon && (
						<Icon
							size={20}
							color={task.color[0]}
						/>
					)}
				</div>
				<h3 className='font-bold'>{task.title}</h3>
			</div>
			<div className={`progress w-full rounded-full relative bg-gray-100 dark:bg-gray-700`}>
				<div
					className={`rounded-full py-3 text-white font-bold text-center`}
					style={{
						background: `repeating-linear-gradient(
    -45deg,
    ${task.color[0]},
    ${task.color[0]}, 5px,
    ${task.color[1]} 5px,
    ${task.color[1]} 10px
  )`,
						width: `${task.status}%`
					}}
				>
					{task.status !== 100 ? `${task.status}%` : 'Done'}
				</div>
			</div>
			<LastTaskFooter task={task} />
		</article>
	)
}

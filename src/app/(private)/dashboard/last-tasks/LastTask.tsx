import * as m from 'framer-motion/m'
import type { FC } from 'react'
import type { TTask } from 'src/types/dashboard.types'
import './LastTask.scss'
import { LastTaskFooter } from './LastTaskFooter'
import { LastTaskProgress } from './LastTaskProgress'

export type LastTaskProps = { task: TTask }

export const LastTask: FC<{ i: number } & LastTaskProps> = ({ task, i }) => {
	const Icon = task.icon
	return (
		<m.article
			className='task relative rounded-lg flex flex-col gap-3 dark:bg-linear-to-br dark:from-foreground dark:to-text/10 p-4 w-1/3 shrink-0 border border-gray-400 shadow-md dark:border-gray-600'
			initial='hidden'
			whileInView='visible'
			variants={{
				hidden: {
					y: -50,
					opacity: 0
				},
				visible: (custom: number) => ({
					y: 0,
					opacity: 1,
					transition: { delay: custom * 0.05 }
				})
			}}
			custom={i}
		>
			<div className='flex items-center gap-2'>
				<div className='bg-gray-100 dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center'>
					{Icon && (
						<Icon
							size={20}
							color={task.color}
						/>
					)}
				</div>
				<h3 className='font-bold'>{task.title}</h3>
				<span>Due: {task.dueDate}</span>
			</div>
			<LastTaskProgress task={task} />
			<LastTaskFooter task={task} />
		</m.article>
	)
}

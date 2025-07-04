import * as m from 'framer-motion/m'
import type { FC } from 'react'
import type { ITask } from 'src/types/dashboard.types'
import { LastTaskFooter } from './last-task/LastTaskFooter'
import { LastTaskProgress } from './last-task/LastTaskProgress'

export type LastTaskProps = { task: ITask }
type Props = { i: number; openEditModal: (task: ITask) => void } & LastTaskProps

export const LastTask: FC<Props> = ({ task, i, openEditModal }) => {
	const Icon = task.icon
	const date = Math.round((new Date(task.dueDate).getTime() - Date.now()) / 60 / 60 / 24)
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
				<span>Due: {date}</span>
			</div>
			<LastTaskProgress task={task} />
			<LastTaskFooter
				task={task}
				openEditModal={openEditModal}
			/>
		</m.article>
	)
}

import * as m from 'framer-motion/m'
import { type FC, useMemo } from 'react'

import { EnumIcons, type ITask } from 'src/types/task.types'

import type { LastTaskProps } from '../last-tasks.types'

import { TaskFooter } from './TaskFooter'
import { TaskProgress } from './TaskProgress'

type Props = { i: number; openEditModal: (task: ITask) => void } & LastTaskProps

export const Task: FC<Props> = ({ task, i, openEditModal }) => {
	const Icon = EnumIcons[task.icon as keyof typeof EnumIcons]
	const date = useMemo(
		() => Math.round((new Date(task.dueDate).getTime() - Date.now()) / 60 / 60 / 60 / 60 / 24),
		[task.dueDate, new Date().getDate()]
	)

	return (
		<m.article
			className='task relative rounded-lg flex flex-col gap-3 dark:bg-linear-to-br dark:from-foreground dark:to-text/10 p-4 w-full shrink-0 border border-gray-400 shadow-md dark:border-gray-600 hover:border-primary transition-colors'
			whileInView='visible'
			initial='hidden'
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
			viewport={{ once: true }}
			custom={i}
		>
			<div className='flex items-center gap-2'>
				<div className='bg-gray-100 dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center'>
					{Icon && (
						<Icon
							color={task.color}
							size={20}
						/>
					)}
				</div>
				<h3 className='font-bold'>{task.title}</h3>
				<span>Due: {date > 0 ? date : 0}d</span>
			</div>
			<TaskProgress task={task} />
			<TaskFooter
				openEditModal={openEditModal}
				task={task}
			/>
		</m.article>
	)
}

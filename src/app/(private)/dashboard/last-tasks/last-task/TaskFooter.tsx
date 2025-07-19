import { Image, Link, MessageSquareDot, Pencil, Plus } from 'lucide-react'
import type { FC } from 'react'

import type { ITask } from 'src/types/task.types'

import type { LastTaskProps } from '../last-tasks.types'

type Props = { openEditModal: (task: ITask) => void } & LastTaskProps

export const TaskFooter: FC<Props> = ({ task, openEditModal }) => {
	return (
		<div className='flex gap-2 justify-between'>
			<div className='flex items-center gap-5'>
				<span className='flex items-center gap-1 text-lg'>
					<MessageSquareDot size={15} /> {task.messages}
				</span>
				<span className='flex items-center gap-1 text-lg'>
					<Image size={15} /> {task.images}
				</span>
				<span className='flex items-center gap-1 text-lg'>
					<Link size={15} /> {task.links}
				</span>
			</div>
			<div className='flex gap-2'>
				<button className='border border-primary bg-primary p-2 rounded-full shrink-0 cursor-pointer'>
					<Plus
						color='white'
						size={18}
					/>
				</button>
				<button
					className='border border-primary p-2 rounded-full shrink-0 cursor-pointer'
					onClick={() => openEditModal(task)}
				>
					<Pencil
						color='var(--primary)'
						size={18}
					/>
				</button>
			</div>
		</div>
	)
}

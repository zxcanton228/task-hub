import type { FC } from 'react'
import { Heading } from 'ui/Heading'
import { LASTS_TASKS } from '../data/dashboard.data'
import { LastTask } from './LastTask'
type Props = {}
export const LastTasks: FC<Props> = () => {
	return (
		<div>
			<Heading>
				Last Tasks <span>({LASTS_TASKS.length})</span>
			</Heading>
			<div className='columns-3 gap gap-3'>
				{LASTS_TASKS.map((task, i) => (
					<LastTask
						task={task}
						key={i}
					/>
				))}
			</div>
		</div>
	)
}

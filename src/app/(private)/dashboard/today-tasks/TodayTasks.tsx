import type { FC } from 'react'

type Props = {}

export const TodayTasks: FC<Props> = () => {
	return (
		<div className='bg-foreground w-full p-5 rounded-lg'>
			<h2 className='text-2xl font-bold'>Today tasks</h2>
			<div className=''></div>
		</div>
	)
}

import cn from 'clsx'
import Image from 'next/image'
import type { FC } from 'react'

import type { IMessage } from './chat.types'

type Props = { isMy?: boolean; message: IMessage }

const convertDate = (date: string = '') => new Date(date).toTimeString().slice(0, 5)

export const Message: FC<Props> = ({ isMy = false, message: { text, updatedAt, user } }) => {
	const date = convertDate(updatedAt)

	return (
		<li className={cn('flex gap-3', { 'flex-row-reverse': isMy })}>
			{!!user.avatarPath ? (
				<Image
					className='w-12 h-12 rounded-full'
					alt={'Avatar by ' + user.name}
					src={user.avatarPath}
					height={48}
					width={48}
				/>
			) : (
				<div className='bg-primary w-12 h-12 rounded-full' />
			)}
			<div className='flex flex-col'>
				{
					<div className={cn('flex items-center gap-2', { 'flex-row-reverse': isMy })}>
						<h4 className={'font-bold'}>{user.name || 'Test user'}</h4>
						<time
							className='text-sm text-gray-300'
							dateTime={date}
						>
							{date}
						</time>
					</div>
				}
				<p
					className={`${isMy ? 'bg-[#604aec] rounded-tr-none' : 'bg-[#5a51b0] rounded-tl-none'} rounded-2xl p-3`}
				>
					{text}
				</p>
			</div>
		</li>
	)
}

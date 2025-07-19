'use client'

import type { FC } from 'react'

import { useProfile } from 'src/hooks/useProfile'

import { SidebarHeading } from './SidebarHeading'

type Props = {}

export const Account: FC<Props> = () => {
	const { isLoading, user } = useProfile()

	return isLoading ? (
		<></>
	) : (
		user && (
			<div>
				<SidebarHeading>Account</SidebarHeading>
				<div className='px-3'>
					<div className='bg-background p-3 rounded-xl flex items-center gap-3'>
						{!user.avatarPath && <div className='bg-purple-500 w-12 h-12 rounded-full shrink-0' />}
						<div>
							<h3 className='font-bold'>{user.name || 'No name'}</h3>
							<p className='text-grey text-sm'>{user.email}</p>
						</div>
					</div>
				</div>
			</div>
		)
	)
}

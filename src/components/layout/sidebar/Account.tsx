'use client'

import type { FC } from 'react'

import { useProfile } from 'src/hooks/useProfile'

import { Avatar } from 'ui/Avatar'

import { SidebarHeading } from './SidebarHeading'

type Props = {}

export const Account: FC<Props> = () => {
	const { isLoading, user } = useProfile()

	return (
		<div>
			<SidebarHeading>Account</SidebarHeading>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				user && (
					<div className='px-3'>
						<div className='bg-background p-3 rounded-xl flex items-center gap-3'>
							<Avatar
								avatarPath={user.avatarPath}
								name={user.name}
								size={13}
							/>
							<div>
								<h3 className='font-bold'>{user.name || 'No name'}</h3>
								<p className='text-grey text-sm'>{user.email}</p>
							</div>
						</div>
					</div>
				)
			)}
		</div>
	)
}

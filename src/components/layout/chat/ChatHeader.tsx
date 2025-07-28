import { ArrowLeft } from 'lucide-react'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import type { IUser } from 'src/types/user.types'

import { Avatar } from 'ui/Avatar'

type Props = {
	user: Omit<IUser, 'rights' | 'verificationToken' | 'password'>
	className?: string
	closeChat?: () => void
}

export const ChatHeader: FC<Props> = ({
	user: { email, avatarPath, name },
	className,
	closeChat
}) => (
	<div className={twMerge('w-full bg-[#453c9c] px-6 py-3 gap-5 flex items-center', className)}>
		{!!closeChat && (
			<ArrowLeft
				className='cursor-pointer'
				onClick={closeChat}
				size={25}
			/>
		)}
		<div className='flex gap-3'>
			<Avatar
				avatarPath={avatarPath}
				name={name}
			/>
			<div className='flex flex-col justify-center'>
				<h4 className='text-lg font-bold'>{name}</h4>
				<span className='text-sm'>{email}</span>
			</div>
		</div>
	</div>
)

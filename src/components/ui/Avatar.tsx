import Image from 'next/image'
import type { FC } from 'react'

type Props = { name?: string; avatarPath?: string; size?: number }

export const Avatar: FC<Props> = ({ avatarPath, name, size = 15 }) =>
	!!avatarPath ? (
		<Image
			className={`w-${size} h-${size} rounded-full shrink-0`}
			alt={'Avatar by ' + name}
			height={size * 4}
			width={size * 4}
			src={avatarPath}
			quality={50}
		/>
	) : (
		<div className='bg-primary w-15 h-15 rounded-full flex items-center justify-center font-bold text-2xl shrink-0'>
			{name ? name[0] : ''}
		</div>
	)

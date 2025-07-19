import cn from 'clsx'
import type { FC } from 'react'

type Props = { isMy?: boolean }

export const Message: FC<Props> = ({ isMy = false }) => {
	return (
		<article className={cn('flex gap-3', { 'flex-row-reverse': isMy })}>
			<div className='bg-white w-12 h-12 rounded-full' />
			<div className='flex flex-col'>
				<div className={cn('flex items-center gap-2', { 'flex-row-reverse': isMy })}>
					<h4 className={'font-bold'}>Sheila Dara</h4>
					<time
						className='text-sm text-gray-300'
						dateTime=''
					>
						09:47
					</time>
				</div>
				<p
					className={`${isMy ? 'bg-[#604aec] rounded-tr-none' : 'bg-[#5a51b0] rounded-tl-none'} rounded-2xl p-3`}
				>
					Good morning! I've been working on the design element
				</p>
			</div>
		</article>
	)
}

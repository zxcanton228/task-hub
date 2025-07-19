'use client'

import { Paperclip } from 'lucide-react'
import Image from 'next/image'

import { Message } from './Message'

export const Chat = () => {
	return (
		<div className='chat w-160 text-white h-screen bg-purple-400 max-h-screen fixed right-0 top-0 z-50'>
			<div className={`relative z-0 h-3/7`}>
				<Image
					className='object-cover z-0'
					src='/chat-img.jpg'
					alt='chat'
					fill
				/>
			</div>
			<div className='h-2/3 bg-[#3c3492]'>
				<div className='w-full bg-[#453c9c] px-6 py-3'>
					<div className='flex gap-3'>
						<div className='bg-white rounded-full w-15 h-15' />
						<div className='flex flex-col justify-center'>
							<h4 className='text-lg font-bold'>Sheila Dara</h4>
							<span className='text-sm'>Project name</span>
						</div>
					</div>
				</div>
				<div className='flex p-6 flex-col gap-3 w-full'>
					<Message />
					<Message isMy />
					<Message />
				</div>
				<div className='absolute bottom-0 h-15 flex gap-1 bg-[#453c9c] p-0 w-full'>
					<Paperclip className='m-5' />
					<input
						className='h-full w-full outline-none !text-white'
						placeholder='Type here...'
						type='text'
						name=''
						id=''
					/>
				</div>
			</div>
		</div>
	)
}

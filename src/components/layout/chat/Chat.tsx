'use client'

import { Paperclip } from 'lucide-react'
import Image from 'next/image'

import { useProfile } from 'src/hooks/useProfile'

import { Message } from './Message'
import { useChat } from './useChat'

export const Chat = ({ chatId = 'cmdjekac10000148gxelxmonn' }: { chatId?: string }) => {
	const { user } = useProfile()
	const { message, messages, handleSendMessage, setMessage, companion } = useChat(
		chatId,
		user.id || ''
	)

	return (
		<div className='chat w-160 text-white h-screen bg-[#3c3492] max-h-screen fixed right-0 top-0 z-50 flex flex-col'>
			<div className='max-h-[calc(100%-70px)] overflow-y-scroll'>
				{!!companion && (
					<div className='w-full bg-[#453c9c] px-6 py-3'>
						<div className='flex gap-3'>
							{!!companion.avatarPath ? (
								<Image
									src={companion.avatarPath + '.jpg'}
									className='w-15 h-15 rounded-full'
									alt={companion.name + ' avatar'}
									height={60}
									width={60}
								/>
							) : (
								<div className='bg-white w-12 h-12 rounded-full' />
							)}
							<div className='flex flex-col justify-center'>
								<h4 className='text-lg font-bold'>{companion.name}</h4>
								<span className='text-sm'>{companion.email}</span>
							</div>
						</div>
					</div>
				)}
				<ul className='flex p-6 flex-col gap-3 w-full max-h-full'>
					{messages.map(msg => (
						<Message
							isMy={msg.userId === user.id}
							message={msg}
							key={msg.id}
						/>
					))}
				</ul>
			</div>
			<form
				className='fixed bottom-0 flex gap-1 bg-[#453c9c] p-0 w-full h-15'
				onSubmit={handleSendMessage}
			>
				<Paperclip className='m-5' />
				<input
					className='h-full w-full outline-none !text-white'
					onChange={e => setMessage(e.target.value)}
					placeholder='Type here...'
					value={message}
					type='text'
				/>
			</form>
		</div>
	)
}

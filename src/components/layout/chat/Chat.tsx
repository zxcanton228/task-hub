'use client'

import { Paperclip } from 'lucide-react'
import type { FC } from 'react'

import { ChatHeader } from './ChatHeader'
import { Message } from './Message'
import { useChat } from './useChat'

type Props = {
	closeChat: () => void
	userId: string
	chatId: string
}

export const Chat: FC<Props> = ({ chatId, userId, closeChat }) => {
	const { message, messages, handleSendMessage, setMessage, companion } = useChat(chatId, userId)

	return (
		<>
			<div className='max-h-[calc(100%-70px)] overflow-y-scroll absolute top-0 left-0 z-100 w-full'>
				{!!companion && (
					<ChatHeader
						closeChat={closeChat}
						user={companion}
					/>
				)}
				<ul className='flex p-6 flex-col gap-3 w-full max-h-full'>
					{messages.map(msg => (
						<Message
							isMy={msg.userId === userId}
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
		</>
	)
}

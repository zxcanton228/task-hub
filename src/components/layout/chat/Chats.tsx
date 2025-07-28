'use client'

import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import chatService from 'src/services/chat.service'

import { useProfile } from 'src/hooks/useProfile'

import { ChatHeader } from './ChatHeader'

const DynamicChat = dynamic(() => import('./Chat').then(mod => mod.Chat))

export const Chats = () => {
	const { user } = useProfile()
	const [chatId, setChatId] = useState<string | null>(null)

	const { data: chats } = useQuery({
		queryKey: ['chats'],
		queryFn: () => chatService.getAll()
	})

	return (
		<div className='chat w-160 text-white h-screen bg-[#3c3492] max-h-screen fixed right-0 top-0 flex flex-col'>
			{!!user && !!chatId ? (
				<DynamicChat
					closeChat={() => setChatId(null)}
					userId={user.id}
					chatId={chatId}
				/>
			) : (
				<ul className='overflow-y-scroll no-scrollbar relative z-99'>
					{chats?.map(({ chatId, ...user }) => (
						<li
							onClick={() => setChatId(chatId)}
							key={chatId}
						>
							<ChatHeader
								className='hover:bg-transparent transition-colors cursor-pointer'
								user={user}
							/>
							<hr className='text-primary' />
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

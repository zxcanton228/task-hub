'use client'

import { useQuery } from '@tanstack/react-query'
import { type FormEvent, useLayoutEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import chatService from 'src/services/chat.service'

import { API_URL } from 'src/constants/constants'

import type { IMessage } from './chat.types'

export const useChat = (chatId: string, userId: string) => {
	const [messages, setMessages] = useState<IMessage[]>([])
	const [message, setMessage] = useState<string>('')
	const [socket, setSocket] = useState<Socket>()

	const { data, isSuccess } = useQuery({
		queryFn: () => chatService.getOne(chatId),
		queryKey: ['get chat', chatId]
	})

	useLayoutEffect(() => {
		if (!!data && isSuccess) setMessages(data.messages)
	}, [data, isSuccess, chatId])

	useLayoutEffect(() => {
		const newSocket = io(API_URL, { transports: ['websocket', 'polling'], withCredentials: true })
		setSocket(newSocket)

		newSocket.emit('joinChat', chatId).on('receiveMessage', newChat => {
			setMessages(newChat.messages)
		})

		return () => {
			newSocket.close()
		}
	}, [chatId])

	const sendMessage = (userId: string, text: string) => {
		if (!socket || message === '') return
		socket.emit('sendMessage', { chatId, userId, text })
		setMessage('')
	}
	const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!userId) return
		sendMessage(userId, message)
	}

	const companion = data?.users.find(u => u.id !== userId)

	return {
		handleSendMessage,
		setMessage,
		companion,
		messages,
		message
	}
}

import type { IChat } from 'src/components/layout/chat/chat.types'

import { axiosAuth } from 'src/api/axios'

import type { TPublicUser } from 'src/types/user.types'

class ChatService {
	private readonly _BASE_URL = '/chats'

	public async getAll() {
		const { data } = await axiosAuth.get<({ chatId: string } & TPublicUser)[]>(this._BASE_URL)

		return data
	}
	public async getOne(chatId: string) {
		const { data } = await axiosAuth.get<IChat>(`${this._BASE_URL}/${chatId}`)
		return data
	}
}
const chatService = new ChatService()
export default chatService

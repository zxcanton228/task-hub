import type { IUser } from 'src/types/user.types'

export interface IMessage {
	id: string
	text: string

	createdAt: string
	updatedAt: string

	userId: string

	user: Pick<IUser, 'avatarPath' | 'name'>
}

export interface IChat {
	id: string
	createdAt: string
	messages: IMessage[]
	users: Omit<IUser, 'rights' | 'verificationToken' | 'password'>[]
}

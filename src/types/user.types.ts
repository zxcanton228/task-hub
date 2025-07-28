import { UserRole } from './auth.types'

export interface IUser {
	verificationToken?: string
	avatarPath?: string
	rights: UserRole[]
	password: string
	name?: string
	email: string
	id: string
}
export type TPublicUser = Omit<IUser, 'rights' | 'verificationToken' | 'password'>

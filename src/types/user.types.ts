import { UserRole } from './auth.types'

export interface IUser {
	verificationToken?: string
	avatarPath?: string
	rights: UserRole[]
	name?: string
	email: string
	id: string
}

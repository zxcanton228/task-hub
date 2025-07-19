import type { IUser } from './user.types'

export const AuthToken = {
	ACCESS_TOKEN: 'accessToken',
	REFRESH_TOKEN: 'refreshToken'
} as const
export type AuthToken = (typeof AuthToken)[keyof typeof AuthToken]

export const UserRole = {
	USER: 'USER',
	ADMIN: 'ADMIN'
} as const
export type UserRole = (typeof UserRole)[keyof typeof UserRole]

export interface ITokenInside {
	rights: UserRole[]
	iat: number
	exp: number
	id: string
}

export type TProtectUserData = Omit<ITokenInside, 'iat' | 'exp'>

export interface IFormData extends Pick<IUser, 'email'> {
	password: string
}

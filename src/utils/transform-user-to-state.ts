import { type TProtectUserData, UserRole } from 'src/types/auth.types'

export type TUserDataState = {
	id: string
	rights: UserRole[]
	isLoggedIn: boolean
	isAdmin: boolean
}

export const transformUserToState = (user: TProtectUserData): TUserDataState | null => {
	return {
		...user,
		isLoggedIn: true,
		isAdmin: user.rights.includes(UserRole.ADMIN)
	}
}

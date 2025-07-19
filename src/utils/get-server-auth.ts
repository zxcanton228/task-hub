'use server'

import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import authService from 'src/services/auth/auth.service'
import { AuthToken } from 'src/types/auth.types'
import type { IUser } from 'src/types/user.types'

type TOutGetServerAuth = {
	profile?: IUser
	isLoggedIn: boolean
} | null

export async function getServerAuth(): Promise<TOutGetServerAuth> {
	const JWT_SECRET = process.env.JWT_SECRET
	const cookie = await cookies()

	let accessToken = cookie.get(AuthToken.ACCESS_TOKEN)?.value
	const refreshToken = cookie.get(AuthToken.REFRESH_TOKEN)?.value
	// const csrfToken = cookie.get(AuthToken.CSFR_TOKEN)?.value

	if (!refreshToken) return null

	if (!accessToken) {
		try {
			const data = await authService.getNewTokens()
			accessToken = data.accessToken
		} catch {
			return null
		}
	}

	try {
		const { payload }: { payload: ITokenInside } = await jwtVerify(
			accessToken,
			new TextEncoder().encode(JWT_SECRET)
		)

		if (!payload) return null

		const profile = await profileService.getMyProfileServerSide(accessToken, refreshToken)
		const isLoggedIn: boolean = !!accessToken && !!refreshToken && !!profile

		return { isLoggedIn, profile }
	} catch {
		return null
	}
}

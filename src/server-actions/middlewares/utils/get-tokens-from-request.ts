import { NextRequest } from 'next/server'
import { AuthToken } from 'src/types/auth.types'
import { getNewTokensByRefresh } from './get-new-tokens-by-refresh'

export async function getTokensFromRequest(request: NextRequest) {
	const refreshToken = request.cookies.get(AuthToken.REFRESH_TOKEN)?.value
	let accessToken = request.cookies.get(AuthToken.ACCESS_TOKEN)?.value

	if (!refreshToken) {
		request.cookies.delete(AuthToken.ACCESS_TOKEN)
		return null
	}

	if (!accessToken) {
		try {
			const data = await getNewTokensByRefresh(refreshToken)
			accessToken = data.accessToken
		} catch (error) {
			if (error instanceof Error) {
				if (error.message === 'invalid token') {
					console.log('не валидный токен')
					request.cookies.delete(AuthToken.ACCESS_TOKEN)
					return null
				}
			}
			return null
		}
	}

	return { accessToken, refreshToken }
}

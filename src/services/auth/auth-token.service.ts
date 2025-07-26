import Cookies from 'js-cookie'
import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

import { AuthToken } from 'src/types/auth.types'

class AuthTokenService {
	public getAccessToken = (): string | null => {
		return Cookies.get(AuthToken.ACCESS_TOKEN) || null
	}

	public saveAccessToken(accessToken: string) {
		Cookies.set(AuthToken.ACCESS_TOKEN, accessToken, {
			domain: process.env.NEXT_PUBLIC_DOMAIN,
			sameSite: 'strict',
			expires: 1
		})
	}
	public getServerTokens(cookiesStorage: ReadonlyRequestCookies) {
		const accessToken = cookiesStorage.get(AuthToken.ACCESS_TOKEN)?.value || ''
		const refreshToken = cookiesStorage.get(AuthToken.REFRESH_TOKEN)?.value || ''
		return { accessToken, refreshToken }
	}

	public removeAccessToken = () => {
		Cookies.remove(AuthToken.ACCESS_TOKEN)
	}
}

export default new AuthTokenService()

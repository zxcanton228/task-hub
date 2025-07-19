import Cookies from 'js-cookie'
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

	public removeAccessToken = () => {
		Cookies.remove(AuthToken.ACCESS_TOKEN)
	}
}

export default new AuthTokenService()

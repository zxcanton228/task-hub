import { axiosClassic } from 'src/api/axios'
import type { IFormData } from 'src/types/auth.types'
import type { IUser } from 'src/types/user.types'
import authTokenService from './auth-token.service'

interface IAuthResponse {
	user: IUser
	accessToken: string
}

class AuthService {
	public async main(type: 'login' | 'register', data: IFormData, recaptchaToken?: string | null) {
		const response = await axiosClassic.post<IAuthResponse>(`/auth/${type}`, data, {
			headers: {
				recaptcha: recaptchaToken
			}
		})

		if (response.data.accessToken) authTokenService.saveAccessToken(response.data.accessToken)

		return response
	}

	public async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>('/auth/access-token')

		if (response.data.accessToken) authTokenService.saveAccessToken(response.data.accessToken)

		return response
	}

	public async logout() {
		const response = await axiosClassic.post<boolean>('/auth/logout')

		if (response.data) authTokenService.removeAccessToken()

		return response
	}
}

export default new AuthService()

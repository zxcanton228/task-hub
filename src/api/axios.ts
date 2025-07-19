import axios, { type CreateAxiosDefaults } from 'axios'

import { API_URL } from 'src/constants/constants'
import authTokenService from 'src/services/auth/auth-token.service'
import authService from 'src/services/auth/auth.service'
import { errorCatch } from './api.helper'

const axiosOptions: CreateAxiosDefaults = {
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
	baseURL: API_URL,
	maxRedirects: 5
}

export const axiosClassic = axios.create(axiosOptions)
export const axiosAuth = axios.create(axiosOptions)

axiosAuth.interceptors.request.use(config => {
	const accessToken = authTokenService.getAccessToken()

	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

axiosAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await authService.getNewTokens()
				return axiosAuth.request(originalRequest)
			} catch (error) {
				if (
					errorCatch(error) === 'jwt expired' ||
					errorCatch(error) === 'Refresh token not passed'
				) {
					authTokenService.removeAccessToken()
				}
			}
		}

		throw error
	}
)

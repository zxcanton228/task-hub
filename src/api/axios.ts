import axios, { type CreateAxiosDefaults } from 'axios'

import { API_URL } from 'src/constants/constants'

const axiosOptions: CreateAxiosDefaults = {
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
	baseURL: API_URL,
	maxRedirects: 5
}

export const axiosClassic = axios.create(axiosOptions)

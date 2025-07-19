'use server'

import * as jose from 'jose'
import type { ITokenInside } from 'src/types/auth.types'
import { transformUserToState } from 'src/utils/transform-user-to-state'

export async function jwtVerifyServer(accessToken: string) {
	try {
		const { payload }: { payload: ITokenInside } = await jose.jwtVerify(
			accessToken,
			new TextEncoder().encode(`${process.env.JWT_SECRET}`)
		)

		if (!payload) return null

		return transformUserToState(payload)
	} catch (error) {
		// Обработка ошибок, связанных с верификацией JWT
		if (error instanceof Error && error.message.includes('exp claim timestamp check failed')) {
			// Токен истек
			console.error('Токен истек')
			return null
		}

		console.error('Ошибка при верификации токена: ', error)
		return null
	}
}

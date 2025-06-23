export const API_URL = process.env.NEXT_PUBLIC_API_URL,
	SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL,
	IS_DEV: boolean = process.env.NODE_ENV === 'development',
	CLIENT_URL: string = `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
	IS_CLIENT = typeof window !== 'undefined'

'use client'

import { usePathname } from 'next/navigation'
import { PAGES } from 'src/config/pages-config'

export const AuthTitle = () => {
	const isLogin = usePathname() === PAGES.LOGIN
	return <h1 className='font-bold text-4xl text-center'>{isLogin ? 'Sign in' : 'Sign up'}</h1>
}

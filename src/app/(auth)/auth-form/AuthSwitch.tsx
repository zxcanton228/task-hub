import Link from 'next/link'
import type { FC } from 'react'

import { PAGES } from 'src/config/pages-config'

import './AuthForm.scss'

type Props = { isLogin: boolean }

export const AuthSwitch: FC<Props> = ({ isLogin }) => {
	return (
		<div className='flex justify-between mt-5'>
			<p className='text-grey'>
				{isLogin ? 'No account yet?' : 'Do you already have an account?'}{' '}
			</p>
			<Link
				className='font-bold'
				href={PAGES[isLogin ? 'REGISTER' : 'LOGIN']}
			>
				{isLogin ? 'Sign up' : 'Sign in'}
			</Link>
		</div>
	)
}

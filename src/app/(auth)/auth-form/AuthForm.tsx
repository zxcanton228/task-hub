'use client'

import useTheme from 'next-theme'
import type { FC } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { Field } from 'ui/field/Field'

import { AuthSwitch } from './AuthSwitch'
import { useAuth } from './useAuth'

type Props = { isLogin?: boolean }

export const AuthForm: FC<Props> = ({ isLogin = false }) => {
	const { recaptchaRef, handleSubmit, isLoading, onSubmit, register, errors } = useAuth(isLogin)
	const { theme } = useTheme()

	return (
		<div className=''>
			<hr className='my-3 text-gray-500' />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-3'
			>
				<Field
					error={errors.email?.message}
					registration={register('email', { required: 'Enter email' })}
					placeholder='Enter email'
					className='bg-background'
					label='Email'
				/>
				<Field
					registration={register('password', {
						minLength: { value: 6, message: `Min length password is 6` },
						required: 'Enter password'
					})}
					error={errors.password?.message}
					placeholder='Enter password'
					className='bg-background'
					label='Password'
				/>

				<ReCAPTCHA
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
					className='m-[0_auto]'
					ref={recaptchaRef}
					size='normal'
					theme={theme as 'light' | 'dark'}
				/>

				<button
					className='bg-primary rounded-lg text-xl py-2 font-bold border border-primary cursor-pointer hover:bg-transparent text-white transition-colors'
					disabled={isLoading}
					type='submit'
				>
					Submit
				</button>
			</form>
			<AuthSwitch isLogin={isLogin} />
		</div>
	)
}

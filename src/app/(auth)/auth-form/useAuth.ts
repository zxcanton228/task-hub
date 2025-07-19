'use client'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { DASHBOARD_PAGES } from 'src/config/dashboard-pages-config'
import authService from 'src/services/auth/auth.service'
import type { IFormData } from 'src/types/auth.types'

export function useAuth(isLogin: boolean) {
	const {
		formState: { errors },
		handleSubmit,
		register,
		reset
	} = useForm<IFormData>({ mode: 'onChange' })

	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const recaptchaRef = useRef<ReCAPTCHA>(null)

	const { mutateAsync: mutateLogin, isPending: isLoginPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IFormData) =>
			authService.main('login', data, recaptchaRef.current?.getValue()),
		retry: false
	})

	const { mutateAsync: mutateRegister, isPending: isRegisterPending } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IFormData) =>
			authService.main('register', data, recaptchaRef.current?.getValue()),
		retry: false
	})

	const onSubmit: SubmitHandler<IFormData> = data => {
		const token = recaptchaRef.current?.getValue()

		if (!token) {
			toast.error('Please complete the captcha')
			return
		}

		const callback = isLogin ? mutateLogin : mutateRegister

		toast.promise(callback(data), {
			loading: 'Loading...',
			success: () => {
				startTransition(() => {
					reset()
					recaptchaRef.current?.reset()
					router.push(DASHBOARD_PAGES.DASHBOARD)
				})
				return 'Successfully logged in!'
			},
			error: err => {
				if (axios.isAxiosError(err)) {
					return (err.response?.data?.message as Array<string>).join('\n')
				}
				return 'Something went wrong'
			}
		})
		mutateLogin(data)
	}

	const isLoading = isPending || isLoginPending || isRegisterPending

	return {
		recaptchaRef,
		handleSubmit,
		isLoading,
		register,
		onSubmit,
		errors
	}
}

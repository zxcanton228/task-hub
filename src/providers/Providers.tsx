'use client'
import { ThemeProvider } from 'next-theme'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

import { IS_DEV } from 'src/constants/constants'
import type { TWithChildren } from 'src/types/types'

export default function Providers({ children }: TWithChildren) {
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: 1
			},
			mutations: {
				retry: 1
			}
		}
	})

	return (
		<ThemeProvider
			defaultTheme='system'
			attribute='class'
			mediaQuery
		>
			<QueryClientProvider client={client}>
				<LazyMotion features={domAnimation}>
					{children}
					<Toaster />
				</LazyMotion>

				{IS_DEV && <ReactQueryDevtools initialIsOpen={false} />}
			</QueryClientProvider>
		</ThemeProvider>
	)
}

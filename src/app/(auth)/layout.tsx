import type { PropsWithChildren } from 'react'

import Providers from 'src/providers/Providers'

import { AuthTitle } from './auth-form/AuthTitle'

export default function AuthLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html suppressHydrationWarning>
			<body>
				<Providers>
					<main className='flex items-center justify-center w-full'>
						<section
							className='bg-foreground border-1 border-gray-500 p-5 rounded-xl drop-shadow-1xl min-w-90'
							style={{ boxShadow: '0 0 25px rgb(from var(--primary) r g b / 0.3)' }}
						>
							<AuthTitle />
							{children}
						</section>
					</main>
				</Providers>
			</body>
		</html>
	)
}

import type { PropsWithChildren } from 'react'
import Providers from 'src/providers/Providers'

export default function AuthLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}

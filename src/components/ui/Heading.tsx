import type { FC } from 'react'
import type { TWithChildren } from 'src/types/types'

export const Heading: FC<TWithChildren> = ({ children }) => (
	<h2 className='font-bold text-2xl'>{children}</h2>
)

import type { FC } from 'react'
import type { TWithChildren } from 'src/types/types'

export const SidebarHeading: FC<TWithChildren> = ({ children }) => (
	<h2 className='text-grey text-lg mb-3'>{children}</h2>
)

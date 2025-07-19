import type { ReactNode } from 'react'

export type TWithChildren = Readonly<{ children: ReactNode }>
export interface IPaginationParams {
	page?: number
	perPage?: number
}

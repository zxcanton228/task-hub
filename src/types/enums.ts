export const EnumActivitySort = {
	COMPLETED: 'COMPLETED',
	ACTIVE: 'ACTIVE',
	ALL: 'ALL'
} as const
export type EnumActivitySort = (typeof EnumActivitySort)[keyof typeof EnumActivitySort]

export const EnumDueDateSort = {
	OLDEST: 'OLDEST',
	NEWEST: 'NEWEST'
} as const
export type EnumDueDateSort = (typeof EnumDueDateSort)[keyof typeof EnumDueDateSort]

export const EnumLastTasksFilters = {
	ALL: 0,
	ACTIVE: 1,
	COMPLETED: 2
} as const
export type EnumLastTasksFilters = (typeof EnumLastTasksFilters)[keyof typeof EnumLastTasksFilters]

export const EnumDeadlineSort = {
	UPPER: 0,
	LOWER: 1
} as const
export type EnumDeadlineSort = (typeof EnumDeadlineSort)[keyof typeof EnumDeadlineSort]

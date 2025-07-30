import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { useChatTypeStore } from 'src/store/store'

export function useChangeChartType() {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { replace } = useRouter()

	const { queryParams, isFilterUpdated, updateQueryParam } = useChatTypeStore()

	useEffect(() => {
		updateQueryParam(searchParams.get('chartType') || 'yearly')
	}, [])

	const updateQueryParams = (value: string) => {
		const newParams = new URLSearchParams(searchParams.toString())

		if (value) {
			newParams.set('chartType', String(value))
		} else newParams.delete('chartType')

		replace(pathname + `?${newParams.toString()}`)
		updateQueryParam(value)
	}

	return {
		updateQueryParams,
		queryParams,
		isFilterUpdated
	}
}

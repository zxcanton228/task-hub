import cn from 'clsx'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { type FC } from 'react'

import { useOutside } from 'src/hooks/useOutside'

import type { ITimeRange, TChartValue } from 'src/types/chart.types'

import { TIME_RANGES_DATA } from '../data/dashboard.data'
import { Heading } from 'ui/Heading'

type Props = {
	setChartType: (chartType: TChartValue) => void
	selectedRange: TChartValue
}

export const ChartHeader: FC<Props> = ({ selectedRange, setChartType }) => {
	const { isShow, ref, setIsShow } = useOutside(false)

	const handleChange = (range: ITimeRange) => {
		setChartType(range.value)
		setIsShow(false)
	}

	const Icon = isShow ? ChevronUp : ChevronDown

	return (
		<div className='w-full flex justify-between h-10'>
			<Heading>Project statistic</Heading>

			<div className='relative'>
				<button
					className='px-4 flex items-center gap-1 py-1 border border-grey rounded-full'
					onClick={() => setIsShow(prev => !prev)}
				>
					{selectedRange.charAt(0).toUpperCase() + String(selectedRange).slice(1)}
					<Icon size={16} />
				</button>
				{isShow && (
					<div
						className='absolute border border-gray-300 top-[calc(100%+0.5rem)] right-0 w-full bg-foreground rounded-xl shadow-xl z-100'
						aria-hidden={!isShow}
						ref={ref}
					>
						{TIME_RANGES_DATA.map((range, i) => {
							const isActive = selectedRange === range.value
							return (
								<button
									className={cn(`w-full text-left p-2`, {
										'border-b border-b-gray-300 rounded-t-lg': i === 0,
										'rounded-b-lg': i === TIME_RANGES_DATA.length - 1,
										'border-b border-b-gray-300': i !== 0 && i !== TIME_RANGES_DATA.length - 1,
										'bg-gray-300 text-black': isActive,
										'transition-colors hover:bg-gray-300 hover:text-black cursor-pointer': !isActive
									})}
									disabled={isActive}
									onClick={() => handleChange(range)}
									key={i}
								>
									{range.label}
								</button>
							)
						})}
					</div>
				)}
			</div>
		</div>
	)
}

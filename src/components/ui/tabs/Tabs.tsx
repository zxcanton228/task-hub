'use client'
import cn from 'clsx'
import * as m from 'framer-motion/m'
import { useRef, type FC } from 'react'
import type { TTabsStore } from 'src/store/store.types'
import type { EnumLastTasksFilters } from 'src/types/enums'

type Props = {
	switchTab: TTabsStore['setTab']
	tabs: { value: EnumLastTasksFilters; label: string }[]
	tabActive: number
}

const Tabs: FC<Props> = ({ switchTab, tabActive, tabs }) => {
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

	return (
		<section className='mb-3 relative'>
			<div className='flex gap-8 mb-2'>
				{tabs.map(({ label, value }, id) => {
					const isActive = tabActive === id
					return (
						<button
							className={cn('transition-colors select-none text-lg relative px-4', {
								'text-color font-bold': isActive,
								'text-grey-for-text cursor-pointer ': !isActive
							})}
							onClick={() => switchTab(value)}
							aria-controls={`panel-${value}`}
							aria-selected={isActive}
							ref={el => {
								tabRefs.current[id] = el
							}}
							disabled={isActive}
							role='tab'
							key={id}
						>
							{label}
						</button>
					)
				})}
				{tabActive !== null && (
					<m.div
						className='absolute bottom-0 h-1 w-2/3 rounded-none bg-primary'
						transition={{ type: 'spring', stiffness: 400, damping: 30 }}
						animate={{
							width: tabRefs.current[tabActive]?.offsetWidth || 0,
							x: tabRefs.current[tabActive]?.offsetLeft || 0
						}}
						initial={false}
					/>
				)}
			</div>
			<hr className='color-gray-400' />
		</section>
	)
}

export default Tabs

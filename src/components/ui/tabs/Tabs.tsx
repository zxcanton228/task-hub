'use client'

import cn from 'clsx'
import * as m from 'framer-motion/m'
import { type FC, useRef } from 'react'

import type { ITabsStore } from 'src/store/store.types'

import type { EnumActivitySort } from 'src/types/enums'

type Props = {
	switchTab: ITabsStore['setTab']
	tabs: { value: EnumActivitySort; label: string }[]
	tabActive: EnumActivitySort
	onChange?: (tabActive: EnumActivitySort) => void
}

export const Tabs: FC<Props> = ({ switchTab, tabActive, onChange, tabs }) => {
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
	const i = tabs.findIndex(t => t.value === tabActive)

	return (
		<div className='mb-3 relative'>
			<div className='flex gap-8 mb-2'>
				{tabs.map(({ label, value }, id) => {
					const isActive = tabActive === value
					return (
						<button
							className={cn('transition-colors select-none text-lg relative px-4', {
								'text-color font-bold': isActive,
								'text-grey-for-text cursor-pointer ': !isActive
							})}
							onClick={() => {
								switchTab(value)
								if (onChange) onChange(value)
							}}
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
				{tabActive !== null && tabRefs.current[i] && (
					<m.div
						className='absolute bottom-0 h-1 w-2/3 rounded-none bg-primary'
						transition={{ type: 'spring', stiffness: 400, damping: 30 }}
						animate={{
							width: tabRefs.current[i].offsetWidth || 0,
							x: tabRefs.current[i].offsetLeft || 0
						}}
						initial={true}
					/>
				)}
			</div>
			<hr className='color-gray-400' />
		</div>
	)
}

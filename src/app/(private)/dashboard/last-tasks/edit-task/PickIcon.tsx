import cn from 'clsx'
import { Calendar, List, Plane } from 'lucide-react'
import { type FC } from 'react'

import { EnumIcons } from 'src/types/task.types'

export interface IIcon {
	icon?: EnumIcons
	value: keyof typeof EnumIcons
	id: number
}
type Props = { onChange: (prop: IIcon) => void; value?: IIcon }

export const ICONS: IIcon[] = [
	{
		value: 'CALENDAR',
		icon: Calendar,
		id: 0
	},
	{
		value: 'CHECKLIST',
		icon: List,
		id: 1
	},
	{
		value: 'PLANE',
		icon: Plane,
		id: 2
	}
]

export const PickIcon: FC<Props> = ({ onChange, value }) => {
	return (
		<div className='flex gap-3'>
			{ICONS.map((icons, i) => {
				const isActive = value?.id === i
				const Icon = icons.icon

				return (
					<button
						key={i}
						onClick={e => {
							onChange(icons)
							e.preventDefault()
						}}
						disabled={isActive}
						className={cn('rounded-md border p-2 transition-colors', {
							'border-gray-500 cursor-pointer ': !isActive,
							'border-primary bg-primary text-white': isActive
						})}
					>
						{Icon && <Icon />}
					</button>
				)
			})}
		</div>
	)
}

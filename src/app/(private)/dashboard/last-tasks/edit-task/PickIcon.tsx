import cn from 'clsx'
import {
	BookOpen,
	BriefcaseBusiness,
	Hammer,
	MonitorSmartphone,
	Plane,
	ShoppingBasket,
	type LucideIcon
} from 'lucide-react'
import { type FC } from 'react'

export interface IIcon {
	icon?: LucideIcon
	id: number
}
type Props = { onChange: (prop: IIcon) => void; value?: IIcon }

const icons: LucideIcon[] = [
	Plane,
	ShoppingBasket,
	BriefcaseBusiness,
	MonitorSmartphone,
	Hammer,
	BookOpen
]

export const PickIcon: FC<Props> = ({ onChange, value }) => {
	return (
		<div className='flex gap-3'>
			{icons.map((Icon, i) => {
				const isActive = value?.id === i

				return (
					<button
						key={i}
						onClick={e => {
							onChange({ icon: Icon, id: i })
							e.preventDefault()
						}}
						disabled={isActive}
						className={cn('rounded-md border p-2 transition-colors', {
							'border-gray-500 cursor-pointer ': !isActive,
							'border-primary bg-primary text-white': isActive
						})}
					>
						<Icon />
					</button>
				)
			})}
		</div>
	)
}

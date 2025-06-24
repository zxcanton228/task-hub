import type { FC } from 'react'
import { SidebarHeading } from './SidebarHeading'
type Props = {}
export const Account: FC<Props> = () => {
	return (
		<div>
			<SidebarHeading>Account</SidebarHeading>
			<div className='px-3'>
				<div className='bg-background p-3 rounded-xl flex items-center gap-3'>
					<div className='bg-purple-500 w-12 h-12 rounded-full shrink-0' />
					<div>
						<h3 className='font-bold'>John Doe</h3>
						<p className='text-grey text-sm'>qwerty@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	)
}

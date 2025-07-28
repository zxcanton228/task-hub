import { Chats } from 'src/components/layout/chat/Chats'
import { Sidebar } from 'src/components/layout/sidebar/Sidebar'

import type { TWithChildren } from 'src/types/types'

export default function DashboardLayout({ children }: TWithChildren) {
	return (
		<>
			<Sidebar />
			<div className='wrapper mr-160'>
				<main className='pb-5'>{children}</main>
			</div>
			<Chats />
		</>
	)
}

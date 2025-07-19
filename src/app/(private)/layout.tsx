import { Chat } from 'src/components/layout/chat/Chat'
import { Sidebar } from 'src/components/layout/sidebar/Sidebar'

import type { TWithChildren } from 'src/types/types'

export default function PagesLayout({ children }: TWithChildren) {
	return (
		<>
			<Sidebar />
			<div className='wrapper mr-160'>
				<main className='pb-5'>{children}</main>
			</div>
			<Chat />
		</>
	)
}

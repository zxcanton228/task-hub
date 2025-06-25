import { Chat } from 'src/components/layout/chat/Chat'
import { Sidebar } from 'src/components/layout/sidebar/Sidebar'
import type { TWithChildren } from 'src/types/types'

export default function PagesLayout({ children }: TWithChildren) {
	return (
		<>
			<Sidebar />
			<div className='wrapper'>
				<main>{children}</main>
			</div>
			<Chat />
		</>
	)
}

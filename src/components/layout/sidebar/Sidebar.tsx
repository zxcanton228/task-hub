import { Account } from './Account'
import { Projects } from './Projects'
import { MainSidebar } from './SidebarMain'

export const Sidebar = () => {
	return (
		<aside className='p-5 h-full w-72 bg-foreground flex flex-col gap-8'>
			<Account />
			<MainSidebar />
			<Projects />
		</aside>
	)
}

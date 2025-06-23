'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PAGES } from 'src/config/pages-config'
import { MAIN_LINKS } from './sidebar.data'

export const Sidebar = () => {
	const path = usePathname()
	return (
		<aside className='px-5 py-2 h-full w-68 bg-foreground'>
			<h2 className='text-grey text-lg mb-3'>Main Menu</h2>
			<div className='flex flex-col gap-7 text-xl'>
				{MAIN_LINKS.map(({ href, label, icon: Icon, isHome }) => {
					const isActive: boolean =
						path === PAGES.DASHBOARD ? !!isHome : !isHome && path.startsWith(href)

					return (
						<Link
							className={`flex gap-2 transition-colors items-center ${isActive ? 'text-white  bg-primary p-3 rounded-full' : 'text-grey hover:text-black'}`}
							aria-disabled={isActive}
							href={href}
							key={href}
						>
							<Icon />
							{label}
						</Link>
					)
				})}
			</div>
		</aside>
	)
}

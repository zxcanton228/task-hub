'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import { PAGES } from 'src/config/pages-config'
import { MAIN_LINKS } from './sidebar.data'
import { SidebarHeading } from './SidebarHeading'

export const MainSidebar: FC = () => {
	const path = usePathname()

	return (
		<div>
			<SidebarHeading>Main Menu</SidebarHeading>
			<nav className='flex flex-col text-xl px-5'>
				{MAIN_LINKS.map(({ href, label, icon: Icon, isHome }) => {
					const isActive: boolean =
						path === PAGES.DASHBOARD ? !!isHome : !isHome && path.startsWith(href)

					return (
						<Link
							className={`flex gap-2 items-center ${isActive ? 'text-white relative -left-3 bg-primary p-3 rounded-full' : 'my-5 text-grey hover:text-text transition-colors ease-in'}`}
							aria-disabled={isActive}
							href={href}
							key={href}
						>
							<Icon />
							{label}
						</Link>
					)
				})}
			</nav>
		</div>
	)
}

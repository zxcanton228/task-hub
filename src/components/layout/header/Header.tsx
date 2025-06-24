'use client'
import type { FC } from 'react'
import { Notifications } from './Notifications'
import { SearchField } from './Search'
import { ToggleTheme } from './ToggleTheme'
type Props = {
	title: string
}
export const Header: FC<Props> = ({ title }) => {
	return (
		<header className='p-7 flex justify-between items-center'>
			<h1 className='text-4xl font-bold'>{title}</h1>
			<div className='flex gap-5 items-center'>
				<SearchField />
				{/* У меня почему-то не появляется ошибка гидрации */}
				<ToggleTheme />
				<Notifications />
			</div>
		</header>
	)
}

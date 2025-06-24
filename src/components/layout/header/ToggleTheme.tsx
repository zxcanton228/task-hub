'use client'

import { Moon, Sun } from 'lucide-react'
import useTheme from 'next-theme'
import type { FC } from 'react'

export const ToggleTheme: FC = () => {
	const { theme, setTheme } = useTheme()

	return (
		<div>
			<button
				className='rounded-full bg-foreground p-3 text-text'
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			>
				{theme === 'light' ? <Sun size={25} /> : <Moon size={25} />}
			</button>
		</div>
	)
}

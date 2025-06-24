import { Search } from 'lucide-react'
import type { FC } from 'react'
type Props = {}
export const SearchField: FC<Props> = () => {
	return (
		<search className='relative'>
			<input
				placeholder='Search something'
				className='bg-foreground py-4 border border-transparent px-6 rounded-full w-80 text-text outline-0 transition-colors focus:border-primary'
				type='text'
			/>
			<Search className='absolute right-5 top-1/2 -translate-y-1/2' />
		</search>
	)
}

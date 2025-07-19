import type { FC, InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import './Field.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
	registration?: UseFormRegisterReturn
	classNameOfWrapper?: string
}

export const Field: FC<Props> = ({
	label,
	error,
	className,
	registration,
	classNameOfWrapper,
	...props
}) => (
	<div className={`field ${classNameOfWrapper}`}>
		<label>
			<div className='flex items-center justify-between'>
				<span className='text-lg font-bold'>{label ?? ''}</span>
				{!!error && <p className='text-red text-sm '>{error}</p>}
			</div>

			<input
				className={twMerge(
					`border border-gray-400 rounded-lg ${!!error ? 'field__error' : ''}`,
					className
				)}
				{...props}
				{...registration}
			/>
		</label>
	</div>
)

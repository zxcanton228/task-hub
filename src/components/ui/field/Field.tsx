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
			<span className='text-lg font-bold'>{label ?? ''}</span>
			{!!error && (
				<div className='text-white bg-red text-sm w-44 p-1 text-center rounded-t-md'>{error}</div>
			)}

			<input
				className={twMerge(
					`border border-gray-400 rounded-lg ${error ? 'field__error' : ''}`,
					className
				)}
				{...props}
				{...registration}
			/>
		</label>
	</div>
)

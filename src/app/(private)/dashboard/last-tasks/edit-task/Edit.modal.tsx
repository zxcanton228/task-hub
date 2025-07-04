import * as m from 'framer-motion/m'
import { useLayoutEffect, type FC } from 'react'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'
import { useTasksStore } from 'src/store/store'
import type { ITaskForm } from 'src/types/dashboard.types'
import { Field } from 'ui/field/Field'
import type { LastTaskProps } from '../LastTask'
import { PickIcon } from './PickIcon'

type Props = { ref: any } & LastTaskProps

export const EditModal: FC<Props> = ({ ref, task }) => {
	const { handleSubmit, register, reset, watch, control } = useForm<ITaskForm>()
	const editTask = useTasksStore(s => s.editTask)

	useLayoutEffect(() => {
		reset({ title: task.title, status: task.status, color: task.color })
	}, [task])

	const onChange: SubmitHandler<ITaskForm> = ({ dueDate, icon, ...data }) => {
		editTask(task.id, { ...data, dueDate: new Date(dueDate), icon })
	}

	const color = watch('color')

	return (
		<m.div
			className='fixed inset-0 z-50 justify-center flex items-center bg-[rgba(0,0,0,0.5)]'
			transition={{ duration: 0.3 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<m.div
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 0.3 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				className='w-1/5'
				ref={ref}
			>
				<div className='bg-foreground rounded-lg p-6 border border-gray-500'>
					<h1 className='text-2xl font-bold text-center'>Edit "{task.title}"</h1>
					<hr className='my-3 text-gray-500' />
					<form
						onChange={handleSubmit(onChange)}
						className='flex flex-col gap-3'
					>
						<Field
							registration={register('title')}
							placeholder='Enter a title'
							label='Title'
							type='text'
						/>
						<Field
							registration={register('dueDate')}
							defaultValue={new Date().toLocaleString()}
							placeholder='Enter a due date'
							label='Due date'
							type='date'
						/>
						<Field
							style={{ backgroundColor: color, border: color }}
							registration={register('color')}
							placeholder='Pick a color'
							className='w-full'
							label='Color'
							type='color'
						/>
						<Controller
							name='icon'
							control={control}
							defaultValue={{ id: 0, icon: task.icon }}
							render={({ field: { value, onChange } }) => (
								<PickIcon
									onChange={onChange}
									value={value}
								/>
							)}
						/>

						<button className='bg-primary rounded-md py-2 text-lg font-bold border border-primary transition-colors hover:bg-transparent hover:text-primary cursor-pointer text-white'>
							Submit
						</button>
					</form>
				</div>
			</m.div>
		</m.div>
	)
}

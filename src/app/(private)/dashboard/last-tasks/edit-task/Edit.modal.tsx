import { useMutation } from '@tanstack/react-query'
import * as m from 'framer-motion/m'
import { type Dispatch, type FC, type SetStateAction, useState, useTransition } from 'react'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import taskService from 'src/services/task.service'

import { ROTATE_ANIM } from 'src/constants/animation.constants'

import type { ITaskData, ITaskForm } from 'src/types/task.types'

import type { LastTaskProps } from '../last-tasks.types'
import { Field } from 'ui/field/Field'

import { ICONS, PickIcon } from './PickIcon'

type Props = {
	ref: any
	refetchTasks: () => void
	setIsShow: Dispatch<SetStateAction<boolean>>
} & LastTaskProps

const importToast = async () => {
	const toast = await import('react-hot-toast')
	return toast.default
}

export const EditModal: FC<Props> = ({ ref, task, refetchTasks, setIsShow }) => {
	const { handleSubmit, register, reset, watch, control } = useForm<ITaskForm>({
		mode: 'onChange',
		defaultValues: {
			title: task.title,
			status: task.status,
			color: task.color,
			dueDate: new Date(task.dueDate).toISOString().split('T')[0]
		}
	})
	const { mutateAsync } = useMutation({
		mutationKey: ['edit task', task.id],
		mutationFn: (body: ITaskData) => taskService.edit(body, task.id)
	})
	const [isPending, startTransition] = useTransition()

	const onSubmit: SubmitHandler<ITaskForm> = async ({ dueDate, icon, ...data }) => {
		const toast = await importToast()
		toast.promise(mutateAsync({ ...data, dueDate: new Date(dueDate), icon: icon?.value }), {
			loading: 'Loading...',
			success: data => {
				startTransition(() => {
					reset({ title: data.title, status: data.status, color: data.color })
					setTitle(data.title)
					refetchTasks()
					setIsShow(false)
				})
				return 'Successfully edited'
			},
			error: 'Something went wrong'
		})
	}

	const color = watch('color')
	const [title, setTitle] = useState<string>(task.title)

	return (
		<m.div
			className='fixed inset-0 z-50 justify-center flex items-center bg-[rgba(0,0,0,0.5)]'
			transition={{ duration: 0.3 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<m.div
				{...ROTATE_ANIM}
				className='w-1/5 '
				ref={ref}
			>
				<div className='bg-foreground rounded-lg p-6 border border-gray-500'>
					<h1 className='text-2xl font-bold text-center'>Edit "{title}"</h1>
					<hr className='my-3 text-gray-500' />
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col gap-3'
					>
						<Field
							registration={register('title')}
							onChange={e => {
								e.preventDefault()
							}}
							placeholder='Enter a title'
							label='Title'
							type='text'
						/>
						<Field
							registration={register('dueDate')}
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
							defaultValue={ICONS.find(i => i.value === task.icon)}
							render={({ field: { value, onChange } }) => (
								<PickIcon
									onChange={onChange}
									value={value}
								/>
							)}
						/>

						<button
							className='bg-primary rounded-md py-2 text-lg font-bold border border-primary transition-colors hover:bg-transparent hover:text-primary cursor-pointer text-white'
							type='submit'
							disabled={isPending}
						>
							{isPending ? 'Pending...' : 'Submit'}
						</button>
					</form>
				</div>
			</m.div>
		</m.div>
	)
}

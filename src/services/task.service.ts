import { axiosAuth } from 'src/api/axios'

import type { IGetAllTasks, IGetAllTasksDto, ITask, ITaskData } from 'src/types/task.types'

class TaskService {
	private readonly _BASE_URL = '/tasks'

	public async getAll(params: IGetAllTasksDto = {}) {
		const { data } = await axiosAuth.get<IGetAllTasks>(this._BASE_URL, { params })
		return data
	}
	public async edit(body: ITaskData, id: string) {
		const { data } = await axiosAuth.put<ITask>(`${this._BASE_URL}/edit/${id}`, body)
		return data
	}
}
const taskService = new TaskService()
export default taskService

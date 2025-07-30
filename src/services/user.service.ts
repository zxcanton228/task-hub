import { axiosAuth } from 'src/api/axios'

import type { IUser } from 'src/types/user.types'

class UserService {
	private readonly _BASE_URL = '/users'

	public async getProfile() {
		const { data } = await axiosAuth.get<IUser>(`${this._BASE_URL}/profile`)

		return data
	}
}
const userService = new UserService()
export default userService

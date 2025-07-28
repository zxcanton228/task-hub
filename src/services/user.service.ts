import { axiosAuth } from 'src/api/axios'

import type { ICardStatistic } from 'src/types/statistic.types'
import type { IUser } from 'src/types/user.types'

class UserService {
	private readonly _BASE_URL = '/users'

	public async getCardStatistic() {
		const { data } = await axiosAuth.get<ICardStatistic>(`${this._BASE_URL}/statistic-card`)
		return data
	}
	public async getProfile() {
		const { data } = await axiosAuth.get<IUser>(`${this._BASE_URL}/profile`)

		return data
	}
}
const userService = new UserService()
export default userService

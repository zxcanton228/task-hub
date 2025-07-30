import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

import { axiosAuth } from 'src/api/axios'

import type { IChartDataPoint, TChartValue } from 'src/types/chart.types'
import type { ICardStatistic } from 'src/types/statistic.types'

import authTokenService from './auth/auth-token.service'

class StatisticsService {
	private readonly _BASE_URL = '/statistics'

	public async getStatistic(): Promise<ICardStatistic> {
		const { data } = await axiosAuth.get<ICardStatistic>(this._BASE_URL)
		return data
	}
	public async getChart(chartType: TChartValue = 'yearly'): Promise<IChartDataPoint[]> {
		const { data } = await axiosAuth.get<IChartDataPoint[]>(this._BASE_URL + '/chart', {
			params: {
				type: chartType
			}
		})

		return data
	}
	public async getChartServer(
		chartType: TChartValue = 'yearly',
		cookiesStorage: ReadonlyRequestCookies
	): Promise<IChartDataPoint[]> {
		const { accessToken } = await authTokenService.getServerTokens(cookiesStorage)
		const { data } = await axiosAuth.get<IChartDataPoint[]>(this._BASE_URL + '/chart', {
			params: {
				type: chartType
			},
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		})

		return data
	}
}
const statisticsService = new StatisticsService()
export default statisticsService

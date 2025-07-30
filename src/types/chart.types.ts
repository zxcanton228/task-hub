export interface ITimeRange {
	label: string
	value: TChartValue
}
export interface IChartDataPoint {
	period: string
	value: number
}
export type TChartValue = 'yearly' | 'weekly'
export interface IChartValueParams {
	chartType: TChartValue
}

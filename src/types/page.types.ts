export interface IPageProps<T> {
	params: Promise<T>
}

export type TPageIdProp = IPageProps<{ id: string }>

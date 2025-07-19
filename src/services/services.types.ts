// /**
//  * Generic service class for handling CRUD operations with a base URL
//  * @template GroupResponse Type for retrieving all items
//  * @template SingleResponse Type for retrieving a single item (defaults to GroupResponse)
//  * @template CreateForm Type for creating/submitting data (defaults to GroupResponse)
//  * @param baseUrl Base URL for the requests
//  */
// export class Service<GroupResponse, SingleResponse = GroupResponse, CreateForm = GroupResponse> {
// 	public readonly BASE_URL: string

// 	constructor(baseUrl: string) {
// 		this.BASE_URL = baseUrl
// 	}

// 	public async getAll(
// 		params: IResWithFilters = initialQueryParams,
// 		lang: Locale = LOCALE.DEFAULT
// 	): Promise<IResponse<GroupResponse>> {
// 		const { data } = await axiosClassic.get<IResponse<GroupResponse>>(this.BASE_URL + '/', {
// 			params,
// 			headers: { 'Accept-Language': lang }
// 		})

// 		return data
// 	}

// 	public async getOne(id: TId, lang: Locale = LOCALE.DEFAULT): Promise<SingleResponse | undefined> {
// 		try {
// 			const { data, status } = await axiosClassic.get<SingleResponse>(`${this.BASE_URL}/${id}`, {
// 				headers: { 'Accept-Language': lang }
// 			})
// 			if (status === EnumStatuses.NOT_FOUND || !data) throw new Error('Not found')
// 			return data
// 		} catch (error) {
// 			errorInService(error)
// 			const { redirect } = await import('next/navigation')
// 			redirect(PAGES.NOT_FOUND)
// 		}
// 	}

// 	public async create(body: CreateForm): Promise<SingleResponse> {
// 		const { data } = await axiosWithAuth.post<SingleResponse>(
// 			`${this.BASE_URL}/author/create/`,
// 			body
// 		)
// 		return data
// 	}
// 	public async update(body: CreateForm, id: TId): Promise<SingleResponse> {
// 		const { data } = await axiosWithAuth.patch<SingleResponse>(
// 			`${this.BASE_URL}/author/${id}/update/`,
// 			body
// 		)
// 		return data
// 	}
// 	public async delete(id: TId): Promise<SingleResponse> {
// 		const { data } = await axiosWithAuth.delete<SingleResponse>(
// 			`${this.BASE_URL}/author/${id}/delete/`
// 		)
// 		return data
// 	}
// }

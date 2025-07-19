import { NextRequest } from 'next/server'
import { PAGES } from 'src/config/pages-config'
import { nextRedirect } from './next-redirect'

export const redirectToLoginOrNotFound = (request: NextRequest) => {
	return nextRedirect(PAGES.LOGIN, request.url)
}

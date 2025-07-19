import { NextRequest, NextResponse } from 'next/server'

import { DASHBOARD_PAGES } from './config/dashboard-pages-config'
import { PAGES } from './config/pages-config'
import { protectDashboardPages } from './server-actions/middlewares/protect-dashboard.middleware'
import { protectLoginPages } from './server-actions/middlewares/protect-login.middleware'

export async function middleware(request: NextRequest): Promise<NextResponse> {
	const pathname = request.nextUrl.pathname

	if (pathname.startsWith(PAGES.LOGIN) || pathname.startsWith(PAGES.REGISTER)) {
		return protectLoginPages(request)
	}

	if (pathname.startsWith(DASHBOARD_PAGES.DASHBOARD)) {
		return protectDashboardPages(request)
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/dashboard/:path*', '/login/:path*', '/register/:path*']
}

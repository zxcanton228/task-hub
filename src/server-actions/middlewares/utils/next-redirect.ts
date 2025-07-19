import { NextResponse } from 'next/server'

export function nextRedirect(toUrl: string | URL, currentUrl: string | URL) {
	return NextResponse.redirect(new URL(toUrl, currentUrl))
}

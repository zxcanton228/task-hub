import { redirect } from 'next/navigation'

import { DASHBOARD_PAGES } from 'src/config/dashboard-pages-config'

export default function Home() {
	redirect(DASHBOARD_PAGES.DASHBOARD)
}

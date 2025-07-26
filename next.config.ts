import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	poweredByHeader: false,
	reactStrictMode: true,
	images: {
		domains: [process.env.NEXT_PUBLIC_DOMAIN || ''],
		remotePatterns: [new URL(process.env.NEXT_PUBLIC_SERVER_URL || '')]
	},
	rewrites: async () => [
		{
			source: '/uploads/:path*',
			destination: `${process.env.NEXT_PUBLIC_SERVER_URL || ''}/uploads/:path*`
		}
	]
}

export default nextConfig

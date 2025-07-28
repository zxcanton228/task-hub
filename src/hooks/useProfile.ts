import { useQuery } from '@tanstack/react-query'
import authService from 'src/services/auth/auth.service'
import userService from 'src/services/user.service'

import { transformUserToState } from 'src/utils/transform-user-to-state'

export function useProfile() {
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		refetchInterval: 1800000 // 30 minutes
	})

	const { refetch } = useQuery({
		queryKey: ['new tokens'],
		queryFn: () => authService.getNewTokens(),
		enabled: !data
	})

	const userState = data ? transformUserToState(data) : null

	const user = data && userState ? { ...data, ...userState } : null

	return {
		isLoading,
		refetch,
		user
	}
}

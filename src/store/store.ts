import { LASTS_TASKS } from 'src/app/(private)/dashboard/data/dashboard.data'
import { EnumDeadlineSort, EnumLastTasksFilters } from 'src/types/enums'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { initialTabsStore, initialTasksStore } from './store.data'
import type { ITabsStore, ITasksStore } from './store.types'

export const useTabsStore = create<ITabsStore>()(
	persist(
		set => ({
			tabsActive: initialTabsStore.tabsActive,
			setTab: num =>
				set(state => ({
					...state,
					tabsActive: num
				}))
		}),
		{ name: 'tabs' }
	)
)
export const useTasksStore = create<ITasksStore>()(
	persist(
		set => ({
			...initialTasksStore,
			editTask: (id, data) => {
				set(state => ({
					...state,
					tasks: state.tasks.map(task => (task.id === id ? { ...task, ...data } : task))
				}))
			},
			sortByStatus: status => {
				set(({ tasks, ...state }) => {
					state.setSortTerm(EnumDeadlineSort.NONE)
					switch (status) {
						case EnumLastTasksFilters.ALL:
							return {
								tasks: LASTS_TASKS,
								...state
							}
						case EnumLastTasksFilters.ACTIVE:
							return {
								tasks: LASTS_TASKS.filter(task => task.status < 100),
								...state
							}
						case EnumLastTasksFilters.COMPLETED:
							return {
								tasks: LASTS_TASKS.filter(task => task.status === 100),
								...state
							}
					}
				})
			},
			setSortTerm: sort => set(({ sortTerm, ...state }) => ({ sortTerm: sort, ...state })),
			sortByDeadline(sort) {
				set(({ tasks, ...state }) => {
					switch (sort) {
						case EnumDeadlineSort.UPPER:
							return {
								tasks: tasks.sort(
									(a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
								),
								...state
							}
						case EnumDeadlineSort.LOWER:
							return {
								tasks: tasks.sort(
									(a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
								),
								...state
							}
						default:
							return {
								tasks: tasks,
								...state
							}
					}
				})
			}
		}),
		{ name: 'tasks' }
	)
)

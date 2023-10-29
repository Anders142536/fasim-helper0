import { get, writable, type Writable } from 'svelte/store'
import { localStorageStore } from '@skeletonlabs/skeleton'
import type { MonthData, Pack, TodoList } from '../types.d'
import { Month } from '$lib/enums/Month'

// to prevent typos
const CURR_SAVE_ID = 'current-save-id'
const NEXT_SAVE_ID = 'next-save-id'
const SAVES_METADATA = 'saves-metadata'
const strWithId = (str: string): string => `${str}-${get(currentSaveId)}`
const calendarStr = (): string => strWithId('calendar')
const todosStr = (): string => strWithId('todos')
const packsStr = (): string => strWithId('packs')
const nextTodoIdStr = (): string => strWithId('next-todo-list-id')
const nextPackIdStr = (): string => strWithId('next-pack-id')

// global ids
let currentSaveId = localStorageStore(CURR_SAVE_ID, 0)
let nextSaveId = localStorageStore(NEXT_SAVE_ID, 1)
let nextTodoId = localStorageStore(nextTodoIdStr(), 1)
let nextPackId = localStorageStore(nextPackIdStr(), 1)
let savesMeta = localStorageStore(SAVES_METADATA, {})

// page stores
export const calendar = createCalendarStore()
export const todos = createTodosStore()
export const packs = createPacksStore()

// store creation

function createCalendarStore() {
	const { subscribe, set, update } = localStorageStore(
		calendarStr(),
		createCalendarDefault()
	)

	return {
		subscribe
	}
}

function createCalendarDefault() {
	let def = new Map<Month, MonthData>()

	for (const [key, value] of Object.entries(Month)) {
		def.set(value, {})
	}
}

function createTodosStore() {
	const { subscribe, set, update } = localStorageStore<TodoList[]>(
		todosStr(),
		[]
	)

	return {
		subscribe,
		addList: () =>
			update((quo) => {
				quo.push({
					id: get(nextTodoId),
					title: `Unnamed Todo list #${get(nextTodoId)}`,
					todos: []
				})
				nextTodoId.update((n) => n + 1)
				return quo
			}),
		deleteList: (id: number) =>
			update((quo) => {
				let found = quo.find((e) => e.id === id)
				if (found) quo.splice(quo.indexOf(found), 1)
				return quo
			}),
		save: (list: TodoList) => {
			update((quo) => {
				console.log(
					`attempting to save todo list with values: ${JSON.stringify(list)}`
				)
				let found = quo.find((e) => e.id === list.id)
				if (found) quo[quo.indexOf(found)] = list
				return quo
			})
		}
	}
}

function createPacksStore() {
	const { subscribe, set, update } = localStorageStore<Pack[]>(packsStr(), [])

	return {
		subscribe,
		addPack: () =>
			update((quo) => {
				quo.push({
					id: get(nextPackId),
					title: `Unnamed Pack #${get(nextPackId)}`,
					buys: [],
					sells: [],
					isArchived: false
				})
				nextPackId.update((n) => n + 1)
				return quo
			}),
		toggleArchived: (id: number) =>
			update((quo) => {
				let found = quo.find((e) => e.id === id)
				if (found) found.isArchived = !found.isArchived
				return quo
			}),
		delete: (id: number) =>
			update((quo) => {
				let found = quo.find((e) => e.id === id)
				if (found) quo.splice(quo.indexOf(found), 1)
				return quo
			}),
		save: (pack: Pack) =>
			update((quo) => {
				console.log(
					`attempting to save pack with values: ${JSON.stringify(pack)}`
				)
				let found = quo.find((e) => e.id === pack.id)
				if (found) quo[quo.indexOf(found)] = pack
				return quo
			})
	}
}

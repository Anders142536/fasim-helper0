import { get, writable, type Writable } from 'svelte/store'
import { localStorageStore } from '@skeletonlabs/skeleton'
import type { Pack } from '../types.d'

// to prevent typos
const CURR_SAVE_ID = 'current-save-id'
const NEXT_SAVE_ID = 'next-save-id'
const SAVES_METADATA = 'saves-metadata'
const strWithId = (str: string): string => `${str}-${get(currentSaveId)}`
const calendarStr = (): string => strWithId('calendar')
const todosStr = (): string => strWithId('todos')
const packsStr = (): string => strWithId('packs')
const nextPackIdStr = (): string => strWithId('next-pack-id')

// global ids
let currentSaveId = localStorageStore(CURR_SAVE_ID, 0)
let nextSaveId = localStorageStore(NEXT_SAVE_ID, 1)
let nextPackId = localStorageStore(nextPackIdStr(), 1)
let savesMeta = localStorageStore(SAVES_METADATA, {})

// page stores

export const packs = createPacksStore()

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
				return quo
			})
	}
}

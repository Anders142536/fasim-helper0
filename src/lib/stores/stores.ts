import { get, writable, type Writable } from 'svelte/store'
import { localStorageStore } from '@skeletonlabs/skeleton'
import type { Pack, PackWritable, Todo } from '../types.d'
import { browser } from '$app/environment'

// to prevent typos
const CURR_SAVE_ID = 'current-save-id'
const NEXT_SAVE_ID = 'next-save-id'
const strWithId = (str: string): string => `${str}-${currentSaveId}`
const calendarStr = (): string => strWithId('calendar')
const todosStr = (): string => strWithId('todos')
const packsStr = (): string => strWithId('packs')
const nextPackIdStr = (): string => strWithId('next-pack-id')

// stores & helpers
let currentSaveId = getKeyAsNumberOrDefault(CURR_SAVE_ID, 0)
let nextSaveId = getKeyAsNumberOrDefault(NEXT_SAVE_ID, 1)
let nextPackId = localStorageStore(nextPackIdStr(), 1)
let savesMeta = getSavesMetaOrDefault()
export const packs = createPacksStore()

const saveCurrentSaveId = () =>
	localStorage.setItem(CURR_SAVE_ID, currentSaveId.toString())
const saveNextSaveId = () =>
	localStorage.setItem(NEXT_SAVE_ID, nextSaveId.toString())

packs.subscribe((value) => {
	console.debug(
		`storing packs to local storage with currentSaveId ${currentSaveId}`
	)
	if (browser) {
		localStorage.setItem(packsStr(), JSON.stringify(value))
	}
})

function createPacksStore() {
	console.log('creating packs store')
	const { subscribe, set, update } = writable(getPacksOrDefault(currentSaveId))

	return {
		subscribe,
		addPack: () =>
			update((quo) => {
				quo.push({
					id: get(nextPackId),
					title: `Unnamed Pack #${get(nextPackId)}`,
					buys: [],
					sells: [],
					isPurchased: false,
					isArchived: false
				})
				nextPackId.update((n) => n + 1)
				return quo
			})
	}
}

// local storage fetching with defaults
function getKeyAsNumberOrDefault(key: string, def: number): number {
	if (browser) {
		let value = localStorage.getItem(key)
		if (value) return parseInt(value)
	}
	return def
}

function getSavesMetaOrDefault(): Map<number, string> {
	if (browser) {
		let value = localStorage.getItem('savesMeta')
		if (value) return JSON.parse(value)
	}
	let map = new Map<number, string>()
	map.set(0, 'Unnamed #0')
	return map
}

function getPacksOrDefault(id: number): Pack[] {
	if (browser) {
		console.log('trying to load from localStorage')
		let packs = localStorage.getItem(packsStr())
		if (packs) return JSON.parse(packs) as Pack[]
	}

	console.log('loading empty array for packs')
	return []
}

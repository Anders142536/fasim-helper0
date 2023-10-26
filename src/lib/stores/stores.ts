import { writable, type Writable } from 'svelte/store'
import type { Pack, PackWritable, Todo } from '../types.d'
import { browser } from '$app/environment'

// to prevent typos
const calendarString = (): string => {
	return `calendar-${currentSaveId}`
}
const todosString = (): string => {
	return `todos-${currentSaveId}`
}
const packsString = (): string => {
	return `packs-${currentSaveId}`
}

let currentSaveId = getKeyAsNumberOrDefault('currentSaveId', 0)
let nextSaveId = getKeyAsNumberOrDefault('nextSaveId', 1)
let nextPackId = getKeyAsNumberOrDefault('nextPackId', 1)
let savesMeta = getSavesMetaOrDefault()

// stores
export const packs = createPacksStore()

packs.subscribe(value => {
	console.debug(`storing packs to local storage with currentSaveId ${currentSaveId}`)
	if (browser) {
		localStorage.setItem(packsString(), JSON.stringify(value))
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
					id: nextPackId,
					title: `Unnamed Pack #${nextPackId}`,
					buys: [],
					sells: [],
					isPurchased: false,
					isArchived: false
				})
				nextPackId++
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
		let packs = localStorage.getItem(packsString())
		if (packs) return JSON.parse(packs) as Pack[]
	}

	console.log('loading empty array for packs')
	return []
}


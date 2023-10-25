import { writable, type Writable } from 'svelte/store'
import type { Pack, PackWritable, Todo } from '../types.d'

// to prevent typos
const calendarString = (id: number): string => {
	return `calendar-${id}`
}
const todosString = (id: number): string => {
	return `todos-${id}`
}
const packsString = (id: number): string => {
	return `packs-${id}`
}

let currentSaveId = getKeyAsNumberOrDefault('currentSaveId', 0)
let nextSaveId = getKeyAsNumberOrDefault('nextSaveId', 1)
let nextPackId = getKeyAsNumberOrDefault('nextPackId', 1)
let savesMeta = getSavesMetaOrDefault()

// stores
export const packs = createPacksStore()

function createPacksStore() {
	const { subscribe, set, update } = writable(getPacksOrDefault(currentSaveId))

	const save = () => {
		
	}

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
				return quo
			})
	}
}

// local storage fetching with defaults
function getKeyAsNumberOrDefault(key: string, def: number): number {
	if (typeof localStorage !== 'undefined') {
		let value = localStorage.getItem(key)
		if (value) return parseInt(value)
	}
	return def
}

function getSavesMetaOrDefault(): Map<number, string> {
	if (typeof localStorage !== 'undefined') {
		let value = localStorage.getItem('savesMeta')
		if (value) return JSON.parse(value)
	}
	let map = new Map<number, string>()
	map.set(0, 'Unnamed #0')
	return map
}

function getPacksOrDefault(id: number): Pack[] {
	if (typeof localStorage !== 'undefined') {
		console.log('trying to load from localStorage')
		let packs = localStorage.getItem(packsString(id))
		if (packs) return JSON.parse(packs) as Pack[]
	}

	console.log('loading empty array for packs')
	return []
}

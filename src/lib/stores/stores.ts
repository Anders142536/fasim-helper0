import { writable, type Writable } from 'svelte/store'
import type { Pack, PackWritable, Todo } from '../types.d'
import { browser } from '$app/environment'

// to prevent typos
const strWithId = (str: string): string => {
	return `${str}-${currentSaveId}`
}
const calendarStr = (): string => {
	return strWithId('calendar')
}
const todosStr = (): string => {
	return strWithId('todos')
}
const packsStr = (): string => {
	return strWithId('packs')
}
const nextPackIdStr = (): string => {
	return strWithId('nextPackId')
}

// stores & helpers
let currentSaveId = getKeyAsNumberOrDefault('currentSaveId', 0)
let nextSaveId = getKeyAsNumberOrDefault('nextSaveId', 1)
let nextPackId = getKeyAsNumberOrDefault(nextPackIdStr(), 1)
let savesMeta = getSavesMetaOrDefault()
export const packs = createPacksStore()

const saveNextPackId = () => localStorage.setItem(nextPackIdStr(), nextPackId.toString())



packs.subscribe(value => {
	console.debug(`storing packs to local storage with currentSaveId ${currentSaveId}`)
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
					id: nextPackId,
					title: `Unnamed Pack #${nextPackId}`,
					buys: [],
					sells: [],
					isPurchased: false,
					isArchived: false
				})
				nextPackId++
				saveNextPackId()
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


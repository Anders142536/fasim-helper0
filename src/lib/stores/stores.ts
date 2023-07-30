import { writable, type Writable } from 'svelte/store'
import type { Pack, PackWritable, Todo } from '../types.d'

// to prevent typos
const calendarString = (id: number) : string => { return `calendar-${id}` }
const todosString = (id: number) : string => { return `todos-${id}` }
const packsString = (id: number) : string => { return `packs-${id}` }

let currentSaveId = getKeyAsNumberOrDefault('currentSaveId', 0)
let nextSaveId = getKeyAsNumberOrDefault('nextSaveId', 1)
let savesMeta = getSavesMetaOrDefault()


// stores
export const packs = constructPacksStore()

packs.addPack()

// local storage fetching with defaults
function getKeyAsNumberOrDefault(key: string, def: number) : number {
	let value = localStorage.getItem(key)
	if (value)
		return parseInt(value)
	return def
}

function getSavesMetaOrDefault() : Map<number, string> {
	let value = localStorage.getItem('savesMeta')
	if (value)
		return JSON.parse(value)
	let map = new Map<number, string>()
	map.set(0, 'Unnamed #0')
	return map
}

function getPacksOrDefault(id: number) : Pack[] {
	let packs = localStorage.getItem(packsString(id))
	if (packs)
		return JSON.parse(packs) as Pack[]
	return []
}



function constructPacksStore() : PackWritable {
	const {subscribe, set, update } = writable(getPacksOrDefault(currentSaveId))

	let packsStore = {
		subscribe,
		set,
		update,
		addPack: () => update(quo => { return quo })
	}
	// TODO: fix this
	return packsStore as PackWritable
}

function foo() : Todo {

	return {
		foo: 'bar'
	}
}

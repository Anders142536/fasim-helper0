type Calendar = {}

type Todo = {}

type Pack = {
	id: number
	title: string
	buys: PackEntry[]
	sells: PackEntry[]
	isArchived: boolean
}

type PackEntry = {
	id: number
	name: string
	type: PackEntryType
	price: number
}

export { Calendar, Todo, Pack, PackEntry }

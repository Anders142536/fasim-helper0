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
	name: string
	type: PackEntryType
	price: number
}

type MonthData = {}

export { Calendar, Todo, Pack, PackEntry, MonthData }

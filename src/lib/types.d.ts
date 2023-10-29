export type Calendar = {}

export type TodoList = {
	id: number
	title: string
	description?: string
	todos: Todo[]
}

export type Todo = {
	done: boolean
	text: string
}

export type Pack = {
	id: number
	title: string
	buys: PackEntry[]
	sells: PackEntry[]
	isArchived: boolean
}

export type PackEntry = {
	name: string
	type: PackEntryType
	price: number
}

export type MonthData = {}

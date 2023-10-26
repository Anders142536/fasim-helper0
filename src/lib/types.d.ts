type Calendar = {}

type Todo = {}

type Pack = {
	id: number
	title: string
	buys: PackEntry[]
	sells: PackEntry[]
	isPurchased: boolean
	isArchived: boolean
}

type PackEntry = {
	id: number
	name: string
	type: PackEntryType
	price: number
}

enum PackEntryType {
	TRACTOR = 'Tractor',
	HARVESTER = 'Harvester',
	SEEDER = 'Seeder'
	// TODO: add others
}

export { Calendar, Todo, Pack, PackEntry, PackEntryType, PackWritable }

import { writable, derived } from 'svelte/store'

writable('foo')

// TODO add stores anchored in local storage with key "type-saveid"
// when switching save the stores should be reloaded from local storage based
// on this naming pattern

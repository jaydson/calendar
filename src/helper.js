// Necessary function for validation
export function layOutDay(events) {
	console.log(events);
}

// Create all necessary slots
export function createSlots() {
	let slots = [];
	for (let i = 0; i < 720; i += 1) {
		slots[i] = [];
	}
	return slots;
}

// generate event id's
export function generateIds(events) {
	for (let i = 0; i < events.length; i += 1) {
		events[i].id = i + 1;
	}
}
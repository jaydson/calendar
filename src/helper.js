export function layOutDay(events) {
	console.log(events);
}

export function populateSlots() {
	let slots = [];
	for (let i = 0; i < 720; i += 1) {
		slots[i] = [];
	}
	return slots;
}
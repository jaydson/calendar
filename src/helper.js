export { layOutDay, createSlots, generateIds, cleanCalendar };

// Necessary function for validation
function layOutDay(events) {
	window.globalCalendar.update(events);
}

// Create all necessary slots
function createSlots() {
	let slots = [];
	for (let i = 0; i < 720; i += 1) {
		slots[i] = [];
	}
	return slots;
}

// generate event id's
function generateIds(events) {
	if (!window.globalLastId) {
		window.globalLastId = 0;
	}
	for (let i = 0; i < events.length; i += 1) {
		globalLastId++;
		events[i].id = globalLastId;
	}
}

// Clean the calendar
function cleanCalendar() {

	// Reset last id
	window.globalLastId = 0;
	try {
		let mainElem = document.querySelector('#event_container');
		mainElem.innerHTML = '';
	} catch (e) {
		console.log('No main element found');
	}
}
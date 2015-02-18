import * as helper from './helper';
import Event from './event';

export default class Calendar {
	constructor() {
		this.slots = helper.createSlots();
	}

	//middleware
	prepareEvents(events) {
		// Generate dinamically id's
		helper.generateIds(events);

		// Just keep events sorted by id
		this.events = this.events.sort(function(a, b) {
			return a.id - b.id;
		});
	}

	// Store the event id in each slot minute
	populateSlots() {
		let eventsLength = this.events.length;

		// Loop events
		for (let i = 0; i < eventsLength; i += 1) {
			// get current event
			let event = this.events[i];

			// check if time make sense
			if (event.start > event.end) {
				throw new Error('Invalid time');
			}

			// Store the event id in each slot minute.
			// For example: 09am to 10am (0 to 60), each minute from 0 to 60 will be
			// stored with the current event id
			for (let j = event.start; j < event.end; j += 1) {
				this.slots[j].push(event.id);
			}
		}
	}

	// Check event collision
	adjustConflicts() {

		// Loop through slots looking for conflicts
		for (let i = 0; i < this.slots.length; i += 1) {
			let next_hindex = 0;
			let slotLen = this.slots[i].length;

			// Slot have one or more events id stored
			if (slotLen > 0) {

				// Loop through events stored in the given slot
				for (let j = 0; j < slotLen; j += 1) {

					// Get the event info
					let event = this.events[this.slots[i][j]-1];

					// Set the collides attribute with the number of events stored in the slot
					if (!event.collides || event.collides < slotLen) {
						event.collides = slotLen;

						// Control the horizontal position (columns)
						if (!event.hindex) {
							event.hindex = next_hindex;
							next_hindex++;
						}
					}
				}
			}
		}
	}

	// Add events to the calendar
	addEvents(events) {

		// Store events in the Calendar instance
		this.events = events;

		this.prepareEvents(events);

		this.populateSlots();

		this.adjustConflicts();

		for (let i = 0; i < this.events.length; i += 1) {
			let event = this.events[i];
			event.height = event.end - event.start;
			event.top = event.start;
			event.width = 600 / event.collides;
			event.left = event.hindex * event.width;

			// Creat a new event and render it
			let ev = new Event(event);
			ev.render();
		}
	};

	// Update the calendar with new and old events
	update(events) {
		helper.cleanCalendar();
		this.slots = helper.createSlots();

		// Clean events data
		for (let i = 0; i < this.events.length; i += 1) {
			this.events[i].width = null;
			this.events[i].height = null;
			this.events[i].top = null;
			this.events[i].left = null;
			this.events[i].hindex = 0;
			this.events[i].collides = 0;
		}

		// Populate the array of events with new ones
		for (let i = 0; i < events.length; i += 1) {
			this.events.push(events[i]);
		}

		// Call addEvents for a new fresh calendar
		this.addEvents(this.events);
	}
};


import * as helper from './helper';
import Event from './event';

export default class Calendar {
	constructor() {
		this.slots = helper.createSlots();
	}

	//middleware
	checkEvents(events) {
		
	}

	addEvents(events) {

		// Sort events
		this.events = events.sort(function(a, b) {
			return a.start - b.start;
		});


		// Loop events and populate slots
		for (let i = 0; i < this.events.length; i++) {
			let event = this.events[i];
			event.id = i;
			for (let j = event.start; j < event.end; j++) {
				this.slots[j].push(event);
			}
		}
	}
}

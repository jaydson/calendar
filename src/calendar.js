import * as helper from './helper';
import Event from './event';

export default class Calendar {
	constructor() {
		this.slots = helper.populateSlots();
	}

	//middleware
	checkEvents(events) {
		
	}

	addEvents(events) {
		for (let i = 0; i < events.length; i++) {
			let event = events[i];
			for (let j = event.start; j < event.end; j++) {
				this.slots[j].push(event);
			}
		}
		console.log(this.slots);
	}
}

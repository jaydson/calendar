import * as helper from './helper';
import Event from './event';

export default class Calendar {
	constructor() {
	}

	//middleware
	checkEvents(events) {
		
	}

	// first load of events
	addEvents(events) {
		events.forEach(function(event){
			let evt = new Event(event);
			evt.render();
		});
	}
}

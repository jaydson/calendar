// __tests__/calendar-test.js
jest.dontMock('../calendar');
jest.dontMock('../helper');
jest.dontMock('../data');

import Calendar from '../calendar';
import { events } from '../data';

let cal = new Calendar();
cal.addEvents(events);

describe('calendar', function() {

	it('must have slots created properly in the constructor', function() {
		expect(typeof cal).toBe('object');
		expect(typeof cal.slots).toBe('object');
		expect(cal.slots.length).toBeGreaterThan(0);
		expect(cal.slots.length).toBe(720);
	});

	it('must add 4 events from data module', function() {
		expect(typeof cal.events).toBe('object');
		expect(cal.events.length).toBeGreaterThan(0);
		expect(cal.events.length).toBe(4);
	});

	it('must generate event ids', function() {
		let events = cal.events;
		let eventsLen = events.length;
		for (let i = 0; i < eventsLen; i += 1) {
			expect(typeof events[i].id).toBe('number');
		}
	});

	it('must place event starting at 9am until 11:30am ({start:30, end:150}) in the properly slots', function() {
		let slots = cal.slots;
		for (let i = 30; i < 150; i += 1) {
			expect(typeof slots[i]).toBe('object');
			expect(slots[i].length).toBe(1);
		}
	});

	it('must place event starting at 6pm until 7pm ({start:540, end:600}) in the properly slots', function() {
		let slots = cal.slots;
		for (let i = 540; i < 559; i += 1) {
			expect(typeof slots[i]).toBe('object');
			expect(slots[i].length).toBe(1);
		}

		// Checking conflicts with event from 6:20pm until 7:20pm ({start:560, end:620})
		for (let i = 560; i < 599; i += 1) {
			expect(typeof slots[i]).toBe('object');
			expect(slots[i].length).toBe(2);
		}
	});

	it('must place event starting at 6:20pm until 7:20pm ({start:560, end:620}) in the properly slots', function() {
		let slots = cal.slots;

		// Ignoring last already tested conflicts
		for (let i = 600; i < 609; i += 1) {
			expect(typeof slots[i]).toBe('object');
			expect(slots[i].length).toBe(1);
		}

		// Checking conflicts with event from 7:10pm until 8:10pm ({start:610, end:670})
		for (let i = 610; i < 619; i += 1) {
			expect(typeof slots[i]).toBe('object');
			expect(slots[i].length).toBe(2);
		}
	});

	it('must place event starting at 7:10pm until 8:10pm ({start:610, end:670}) in the properly slots', function() {
		let slots = cal.slots;

		// Ignoring last already tested conflicts
		for (let i = 620; i < 670; i += 1) {
			expect(typeof slots[i]).toBe('object');
			expect(slots[i].length).toBe(1);
		}
	});

	// dynamically added
	it('must place event starting at 9am until 11:30am ({start:30, end:150}) in the properly slots', function() {
		let slots = cal.slots;
		for (let i = 30; i < 150; i += 1) {
			expect(typeof slots[i]).toBe('object');
			expect(slots[i].length).toBe(1);
		}
	});


});
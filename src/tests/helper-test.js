// __tests__/helper-test.js
jest.dontMock('../helper');

import * as helper from '../helper';

describe('helper', function() {
	it('it must create the the slots properly', function() {
		let slots = helper.createSlots();
		expect(typeof slots).toBe('object');
		expect(slots.length).toBe(720);
	});

	it('it must generate event ids', function() {
		let events = [
			{ start: 30, end: 150 },
			{ start: 540, end: 600 },
			{ start: 560, end: 620 },
			{ start: 610, end: 670}
		];

		helper.generateIds(events);
		expect(events[0].id).toBe(1);
		expect(events[1].id).toBe(2);
		expect(events[2].id).toBe(3);
		expect(events[3].id).toBe(4);
	});
});
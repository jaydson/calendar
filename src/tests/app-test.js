// __tests__/app-test.js
jest.dontMock('../app');

let app = require('../app');

describe('calendar', function() {
	it('must have layOutDay function in the global scope', function() {
		expect(typeof window.layOutDay).toBe('function');
	});

	it('must have the pseudo-singleton Calendar globalCalendar in the global scope', function() {
		expect(typeof window.globalCalendar).toBe('object');
	});
});
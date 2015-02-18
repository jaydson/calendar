import Calendar from './calendar';
import { layOutDay } from './helper';
import { events } from './data';

// Global layOutDay
window.layOutDay = layOutDay;

// New Calendar instance
let cal = new Calendar();
cal.addEvents(events);

// Store the Calendar instance (pseudo-singleton)
window.globalCalendar = cal;
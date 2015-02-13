import Calendar from './calendar';
import { layOutDay } from './helper';
import { events } from './data';
window.layOutDay = layOutDay;

let cal = new Calendar();
cal.addEvents(events);
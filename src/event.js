// Main DOM event element container
const mainElem = document.querySelector('#event_container');

// Class event
export default class Event {

	// Constructor takes the event details
	constructor(details) {
		this.details = details;
	}


	// Render event DOM element
	render() {
		let width = this.details.width - 30;
		let top = this.details.top;
		let height = this.details.height;
		let left = this.details.left;
		let elem = document.createElement('div');
		elem.setAttribute('class','event');
		elem.innerHTML = `Event ID: ${this.details.id}`;
		elem.style.top = `${top}px`;
		elem.style.width = `${width}px`;
		elem.style.height = `${height}px`;
		elem.style.left = `${left}px`;
		mainElem.appendChild(elem);
	}
}
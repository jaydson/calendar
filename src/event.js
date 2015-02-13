const mainElem = document.querySelector('#event_container');

export default class Event {

	constructor(details) {
		this.details = details;
		console.log('new event');
	}

	render() {
		console.log(this.details);
		let width = '600px';
		let top = this.details.start;
		let height = this.details.end - top;
		let elem = document.createElement('div');
		elem.setAttribute('class','event');
		elem.innerHTML = 'Sample event > ' + new Date();
		elem.style.top = `${top}px`;
		elem.style.width = width;
		elem.style.height = `${height}px`;
		mainElem.appendChild(elem);
	}
}
const mainElem = document.querySelector('#event_container');

export default class Event {

	constructor(details) {
		this.details = details;
		console.log('new event');
	}

	render() {
		console.log(this.details);
		let width = this.details.width - 30;
		let top = this.details.start;
		let height = this.details.height;
		let left = this.details.left;
		let elem = document.createElement('div');
		elem.setAttribute('class','event');
		elem.innerHTML = 'Sample event > ' + new Date();
		elem.style.top = `${top}px`;
		elem.style.width = `${width}px`;
		elem.style.height = `${height}px`;
		elem.style.left = `${left}px`;
		mainElem.appendChild(elem);
	}
}
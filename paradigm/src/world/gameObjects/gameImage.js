export default class GameImage {
	constructor(id, path) {
		this.path = path;
		this.id = id;
	}

	load() {
		this.image = new Image();
		this.image.src = this.path;
	}
}
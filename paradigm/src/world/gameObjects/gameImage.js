export default class GameImage extends Image {
	constructor(id, path) {
		this.image = new Image();
		this.image.src = path;
		this.id = id;
	}
}
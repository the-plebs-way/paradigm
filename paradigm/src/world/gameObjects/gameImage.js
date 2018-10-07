export default class GameImage extends Image {
	constructor(id, path) {
		super();
		this.src = path;
		this.id = id;
	}
}
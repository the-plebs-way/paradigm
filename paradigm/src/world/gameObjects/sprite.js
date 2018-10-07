export default class Sprite {
	constructor(id, imgId) {
		this.id = id;
		this.x = 0;
		this.y = 0;
		this.id = imgId;
	}

	draw(imageManager, context) {
		context.drawImage(imageManager.get(this.id), this.x, this.y);
	}
}
export default class Sprite {
	constructor(x, y, imgId) {
		this.x = x;
		this.y = y;
		this.id = imgId;
	}

	Draw(imageManager, context) {
		context.drawImage(imageManager.GetImage(this.id), this.x, this.y);
	}
}
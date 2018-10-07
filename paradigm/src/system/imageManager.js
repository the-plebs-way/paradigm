export default class ImageManager {
	constructor() {
		this.images = {};
	}

	AddImage(id, image) {
		images[id] = image;
	}

	GetImage(id) {
		return images[id];
	}
} 
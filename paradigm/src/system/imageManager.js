import GameImage from "../world/gameObjects/gameImage.js";

export default class ImageManager {
	constructor() {
		this.images = {};
	}

	//Only accepts GameImages
	add(image) {
		if(image instanceof GameImage) {
			this.images[image.id] = image;
		} else console.log("Tried to add something to Image Manager that was not a GameImage");
	}

	get(id) {
		return this.images[id];
	}
} 
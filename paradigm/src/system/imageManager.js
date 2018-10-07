import GameImage from "../world/gameObjects/gameImage.js";

export default class ImageManager {
	constructor() {
		this.images = {};
	}

	//Only accepts GameImages
	add(image) {
		if(typeof image === GameImage) {
			images[image.id] = image;
		} else console.log("Tried to add something to Image Manager that was not a GameImage");
	}

	get(id) {
		return images[id];
	}
} 
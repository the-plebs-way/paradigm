import Sprite from "./gameObjects/sprite";
import GameImage from "./gameObjects/gameImage";

export default class Scene {
	constructor(game) {
		this.gameObjects = {};
		this.game = game;
	}

	//Create a sprite and add it or an extension of sprite should work to? Or create a gameimage and pass it
	add(gameobject) {
		if(typeof gameObject == Sprite) {
			gameObjects[gameObject.id] = gameobject;
		}
		else if(typeof gameObject == GameImage) {
			this.game.imageManager.add(gameobject);
		}
	}

	create() {

	}

	update() {
		//Update stuff here
		
	}
}
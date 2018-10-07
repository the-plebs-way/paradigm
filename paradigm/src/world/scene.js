"use strict";

import Sprite from "./gameObjects/sprite.js";
import GameImage from "./gameObjects/gameImage.js";

export default class Scene {
	constructor(game) {
		this.gameObjects = {};
		this.game = game;
	}

	//Create a sprite and add it or an extension of sprite should work to? Or create a gameimage and pass it
	add(gameobject) {
		if(gameobject instanceof Sprite) {
			this.gameObjects[gameobject.id] = gameobject;
			return this.gameObjects[gameobject.id];
		}
		else if(gameobject instanceof GameImage) {
			this.game.imageManager.add(gameobject);
			return this.game.imageManager.get(gameobject.id);
		}
		else {
			console.log("Tried to add unsupported type to scene with id " + gameobject.id);
			return null;
		}
	}

	//Do not override this, this should not ever be called when extending this class
	_handleEvents(delta) {
		//Todo
	}

	create() {

	}

	update() {
		//Update stuff here
		
	}
}
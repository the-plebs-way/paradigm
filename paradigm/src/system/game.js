"use strict";
import Renderer from "./renderer.js";
import ImageManager from "./imageManager.js";
import Input from "./input.js";

export default class Game {
	constructor(config = {}) {
		this.lastUpdate = 0;
		this.fps = 60;
		this.fpsArray = [];
		this.fpsArrayCounter = 0;
		this.updates = 0;
		this.lastCycle = Date.now();
		this.cycleTimer = 0;
		this.config = config;
		this.imageManager = new ImageManager();
		this.renderer = new Renderer(config, this);
		this.input = new Input();
		this.scene = new config.bootScene(this);
		this.init();
	}

	init() {
		this.renderer.init();
		for(var i = 0; i < 30; i++) {
			this.fpsArray[i] = 60;
		}
		this.scene.create();
		this.run();
	}

	handleEvents(delta) {
		this.scene._handleEvents(delta);
	}

	update(delta) {
		this.scene.update(delta);
	}

	render(delta) {
		this.renderer.render(delta, this.scene, this.getFPS());
	}

	run() {
		var game = this; //need to get self for the callback below
		let now = Date.now();
		var delta = (now - this.lastUpdate) / 1000;
		this.lastUpdate = now;

		if(Math.floor(Date.now() - this.lastCycle) >= 1000) {
			this.fpsArray[this.fpsArrayCounter] = this.updates;
			this.fpsArrayCounter += 1;
			if(this.fpsArrayCounter > this.fpsArray.length) this.fpsArrayCounter = 0;
			this.updates = 0;
			this.lastCycle = Date.now();
		}
		if(this.updates < this.fps) {
			this.updates += 1;
			this.handleEvents(delta);
			this.update(delta);
			this.render(delta, this.updates);
		}
		

		window.requestAnimationFrame(function() {
			//Wouldn't play nicely with all browsers unless I did it like this
			game.run();
		});
	}
	getFPS() {
		var total = 0;
		for(var i = 0; i < this.fpsArray.length; i++) {
			total += this.fpsArray[i];
		}
		return total / 100;
	}

}
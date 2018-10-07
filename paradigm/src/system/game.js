import Renderer from "./renderer.js";
import ImageManager from "./imageManager.js";
import Input from "./input.js";

export default class Game {
	constructor(config = {}) {
		this.lastCycle = 0;
		this.fps = 60;
		this.cycles = 0;
		this.cycleTimer = 0;
		this.config = config;
		this.scene = new config.bootScene(this);
		this.imageManager = new ImageManager();
		this.renderer = new Renderer(config, this);
		this.input = new Input();
		this.init();
	}

	init() {
		this.renderer.init();
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
		this.renderer.render(delta, this.scene);
	}

	run() {
		var game = this; //need to get self for the callback below
		let now = Date.now();
		let delta = now - this.lastCycle;
		this.cycleTimer += delta;
		if(this.cycleTimer >= 1000) {
			this.cycles = 0;
			this.cycleTimer = 0;
		}
		if(this.cycles < this.fps) {
			this.cycles += 1;
			
			this.handleEvents(delta);
			this.update(delta);
			this.render(delta);
		}
		this.lastCycle = Date.now();

		window.requestAnimationFrame(function() {
			//Wouldn't play nicely with all browsers unless I did it like this
			game.run();
		});
	}

}
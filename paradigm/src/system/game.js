import Renderer from "./renderer.js";
import ImageManager from "./imageManager.js";
import Input from "./input.js";

export default class Game {
	constructor(config = {}) {
		this.lastCycle = 0;
		this.config = config;
		this.scenes = config.scenes;
		this.imageManager = new ImageManager();
		this.renderer = new Renderer(config);
		this.input = new Input();
		this.init();
	}

	init() {
		this.scene = this.scenes[0];
		this.renderer.init();
		this.run();
	}

	handleEvents(delta) {
		
	}

	update(delta) {
		this.scene.update(delta);
	}

	render(delta) {
		this.renderer.render(delta, this.scene);
	}

	run() {
		let now = Date.now();
		let delta = now - this.lastCycle;

		this.handleEvents(delta);
		this.update(delta);
		this.render(delta);

		this.lastCycle = Date.now();

		window.requestAnimationFrame(this.run);
	}

}
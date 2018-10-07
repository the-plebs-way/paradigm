import Renderer from "./renderer.js";
import ImageManager from "./imageManager.js";

export default class Game {
	constructor(config = {}) {
		this.lastCycle = 0;
		this.config = config;
		this.imageManager = new ImageManager();
		this.renderer = new Renderer(config);
		this.init();
	}

	init() {
		this.renderer.init();
		this.run();
	}

	handleEvents(delta) {
		
	}

	update(delta) {

	}

	render(delta) {
		this.renderer.render();
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
export default class Renderer {
	constructor(config = {}, game) {
		this.game = game;
		this.config = config;
	}

	init() {
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");
		this.canvas.width = this.config.width;
		this.canvas.height = this.config.height;
		document.body.appendChild(this.canvas);
	}

	render(delta, scene) {
		this.context.fillStyle = "red";
		this.context.fillRect(0, 0, this.config.width, this.config.height);
		for(let key of Object.keys(scene.gameObjects)) {
			console.log("looping");
			scene.gameObjects[key].draw(this.game.imageManager, this.context);
		}
	}
}
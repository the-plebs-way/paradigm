export default class Renderer {
	constructor(config = {}) {
		this.config = config;
	}

	init() {
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");
		this.canvas.width = this.config.width;
		this.canvas.height = this.config.height;
		document.body.appendChild(this.canvas);
	}

	render(delta) {
		this.context.fillStyle = "red";
		this.context.fillRect(0, 0, this.config.width, this.config.height);
	}
}
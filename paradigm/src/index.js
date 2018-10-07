import Game from "./game.js";

const config = {
		width : 256,
		height : 256,
	};

window.onload = () => {
	new Game(config);
}
import Game from "./core/game.js";

const config = {
		width : 256,
		height : 256,
	};
	
window.onload = () => {
	new Game(config);
}
import Game from "./system/game.js";

const config = {
		width : 256,
		height : 256,
		bootScene : 
	};

window.onload = () => {
	new Game(config);
}
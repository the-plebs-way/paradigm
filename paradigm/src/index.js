import Game from "./system/game.js";
import BootScene from "../testScripts/boot.js";

const config = {
		width : 256,
		height : 256,
		bootScene : BootScene
	};

window.onload = () => {
	new Game(config);
}
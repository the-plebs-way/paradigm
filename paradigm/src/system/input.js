export default class Input {
	constructor() {
		this.keysDown = {};
		this.initkeyCodes();

		addEventListener("keydown", function(e) {
			keysDown[e.keyCode] = true;
		}, false);

		addEventListener("keyup", function(e) {
			keysDown[e.keyCode] = false;
		}, false);
	}

	initkeyCodes() {
		this.keyCodes = {
			Left : 37,
			Right : 39,
			Up : 38,
			Down : 40,
			W : 87,
			A : 65,
			S : 83,
			D : 63,
			Space : 32
		};
	}
	//Use keyCode from keyCodes enum object
	IsKeyDown(keyCode) {
		return keysDown[keyCode];
	}
}
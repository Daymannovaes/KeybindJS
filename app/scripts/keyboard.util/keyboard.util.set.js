'use strict';

keyboard.util.set = {
	keyDown: function(which) {
		keyboard.util.set.keyState(which, true);
	},
	keyUp: function(which) {
		keyboard.util.set.keyState(which, false);
	},
	keyState: function(which, booleanState) {
		var key = keyboard.util.getKeyByValue(which);

		keyboard.keypressed[key] = booleanState;
	},
};
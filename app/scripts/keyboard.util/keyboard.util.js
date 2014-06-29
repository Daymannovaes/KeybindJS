'use strict';

keyboard.util = {
	getKeyByValue: function(value) {
		var key;

		for(key in keyboard.keys) {
			if(keyboard.keys[key] == value)
				return key;
		}
		throw("Key not found for value: " + value);
	},
	matchSequence: function(keySequence) {
		var objectKey, key;

		for(key in keySequence) {
			objectKey = {key:key, value:keySequence[key]};

			if(!keyboard.util.matchKey(objectKey))
				return false;
		}
		return true;
	},
	matchKey: function(objectKey) {
		return keyboard.keypressed[objectKey.key] == objectKey.value;
	},
	isNotKey: function(stringKey) {
		return (typeof stringKey == "string" && stringKey[0] == "!");
	}
};
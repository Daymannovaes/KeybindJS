keyboard.util.prepare = {
	keySequence: function(keySequence) {
		if(keySequence instanceof Object)
			return keySequence;

		if(keySequence instanceof Array)
			return keyboard.util.prepare.keySequenceAsArray(keySequence);

		if(typeof keySequence == "string") {
			return keyboard.util.prepare.keySequenceAsString(keySequence);
		}

		throw("Uknow type \"" + typeof keySequence + "\" for key sequence: " + keySequence);
	},
	keySequenceAsString: function(keySequence) {
		keys = keySequence.split("+");

		keys = keys.map(function(key) {
			return key.trim();
		});

		return keyboard.util.prepare.keySequenceAsArray(keys);
	},
	keySequenceAsArray: function(keySequence) {
		objectKeySequence = {};

		for(i=0; i<keySequence.length; i++) {
			key = keySequence[i];
			value = true;

			if(keyboard.util.isNotKey(keySequence[i])) {
				key = keyboard.util.prepare.notKey(key);
				value = false;
			}

			objectKeySequence[key] = value;
		}

		return objectKeySequence;
	},
	notKey: function(stringKey) {
		return stringKey.slice(1);
	},
};


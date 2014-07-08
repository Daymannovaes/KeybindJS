'use strict';

Keybind.throw = (function() {
	//publid
	var $throw = {};

	//private
	var $private = {};

	$private.defaultMessage = function(Param) {
		var message = '';

		message += "Invalid type of " + Param.param + " parameter."
		message += " Expect " + Param.expectedType;
		message += " instead of " + typeof Param.param;

		return message;
	};

	$throw.by = {};
	$throw.all = {};
	$throw.all.by = {};
	$throw.all.by.type = function(params, expectedTypes) {
		for(var index in params) {
			var param = params[index];
			if(typeof param != expectedTypes[index])
				throw new Error("Invalid type of " + param + ", index: " + index +
								". Expect " + expectedTypes[index] +
								" instead of " + typeof param);
		}
	};

	$throw.by.type = function(Param) {

		Param.shouldBeDefined = Param.shouldBeDefined != undefined
								   ? Param.shouldBeDefined : true; //true by default

		if(Param.shouldBeDefined && Param.param == undefined)
			throw new Error(Param.message || "Param undefined must be defined");

		if(Param.param && typeof Param.param != Param.expectedType)
			throw new Error(Param.message || $private.defaultMessage(Param));

	};

	return $throw;
})();
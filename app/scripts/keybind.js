'use strict';

var Keybind = (function() {
	//public
	var $Keybind = {};
	
	//private
	var $private = {};

	$private.executes = [];
	$private.elements = [];

	//fake private
	/*
	 * Classes
	 */
	$Keybind.Execute = function(namespace, fn) {

	};
	$Keybind.Element = function(namespace, fn) {

	};

// ---- GET AND SET(define) FUNCTIONS
	$Keybind.define = {};
	$Keybind.get = {};


	$Keybind.define.execute = function(namespace, fn) {
		Keybind.throw.all.by.type([namespace, fn], ["string", "function"]);

		var execute = new $Keybind.Execute(namespace, fn);

		$private.executes.push(execute);

		return execute;
	};
	$Keybind.define.element = function(selector) {
		var element = new $Keybind.Element(selector);

		$private.elements.push(element);

		return element;
	};


	$Keybind.get.execute = function(namespace) {

	};

	$Keybind.get.executes = function() {
		return $private.executes;
	};

	$Keybind.get.element = function(namespace) {

	};

	$Keybind.get.elements = function() {
		return $private.elements;
	};
// ---- END get and set(define) functions


// ---- RESET FUNCTIONS
	var $copy = clone($Keybind);
	var $$copy = clone($private);

	$Keybind.reset = {};

	$Keybind.reset.all = function() {
		Keybind = clone($Keybind);
		$private = clone($$copy);
	}
// ---- END reset functions

	return $Keybind;
})();
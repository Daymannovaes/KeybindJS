'use strict';

var Keybind = (function() {
	//public
	var $Keybind = {};
	
	//private
	var $private = {};

	$private.functions = {
		$template: {
			$functions: []
		},
		$functions: [],
	};
	$private.elements = {
		$template: {
			$elements: []
		},
		$elements: []
	};

	//fake private
	/*
	 * Classes
	 */
	$Keybind.$Function = function(namespace, fn) {

	};
	$Keybind.$Element = function(namespace, fn) {

	};

// ---- GET AND SET(define) FUNCTIONS
	$Keybind.define = {};
	$Keybind.get = {};


	$Keybind.define.function = function(namespace, fn) {
		Keybind.throw.all.by.type([namespace, fn], ["string", "function"]);

		

		var fn = new $Keybind.$Function(namespace, fn);

		$private.functions.push(fn);

		return fn; 
	};
	$Keybind.define.element = function(selector) {
		var element = new $Keybind.$Element(selector);

		$private.elements.push(element);

		return element;
	};


	$Keybind.get.function = function(namespace) {

	};

	$Keybind.get.functions = function() {
		return $private.functions;
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
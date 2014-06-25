KeybindJS
=========

A mini Javascript Framework to configure what you want to execute when determined key sequence occurs. 


## How can I use?

```javascript
//Define the element you want to bind your keys with jquery sintax
var myInput = Keybind.define.element("form input[type='text']");

//Here you can define some configurations that will be applied in all functions binded in myInput
myInput.config({propagation: false});

//Defining a function separately, you can define default configs and bind it to various elements
var myFunction = Keybind.define.function(function(param1) {
	console.log(param1);
});

//When you bind this function in myInput, the default "bubble: false" will be overwritten for this function
myFunction.config({propagation: true});

//Here, the magic happens
myInput.execute(myFunction, "Hey, you pressed ALT + C.").when("ALT+KEY_C");
```

## Do whatever you want with complex shortcuts

* Parentesis example
```javascript
//alt+1, alt+2 and alt+3 will trigger
...when("ALT & (KEY_1 | KEY_2 | KEY_3)");

//control+z, control+y, shift+z and shift+y will trigger
...when("(CONTROL | SHIFT) & (KEY_Z | KEY_X)");
```

* Not and Xor operator
```javascript
//alt+1 will trigger, but only if you aren't pressing A and B
...when("ALT & KEY_1 & !(KEY_A & KEY_B)");

//xor operator returns true if both are equals, that is, 0 and 0 or 1 and 1.

//alt and alt+control+shift will trigger
...when("ALT & (CONTROL ^ SHIFT)"); 
```



## Do whatever you want with advanced configs

* Define defaults for the whole document
* Define defaults for an especific element
* Define defaults for an especific function
* Define defaults for a keyboard (then you can share it)

```javascript
Keybind.config({
	propagation: true,

	this: Window,

	computeKeyUp: true,

	executeOnKeyUp: false,
	executeOnKeyDown: true,

	resetComputeAfterExecute: true,

	notOverride: ['propagation'],
	/*keyboard: yourKeyboard,*/

	logLevel: 'none'
});
```

###### More config explanations will appear soon


## Do you want to suggest another syntax?

For now, KeybindJS is opened to various changes and is opened to suggestions.
Will be great if you can contribute to. Thanks!
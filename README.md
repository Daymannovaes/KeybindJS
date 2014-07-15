KeybindJS
=========

A simple JavaScript framework to capture key sequence events and trigger determined functions.

## Usage

```javascript
//Define the element you want to bind your keys to
var myInput = Keybind.define.$element("form input[type='text']");

//Set up configurations that will be applied to all functions binded to myInput
myInput.config({propagation: false});

//By defining a function separately, you can define default configs and bind it to various elements
var myFunction = Keybind.define.$function(function(param1) {
	console.log(param1);
});

//When you bind this function in myInput, the default "propagation: false" will be overwritten by this function
myFunction.config({propagation: true});

//Here, the magic happens
myInput.when("ALT+KEY_C").execute(myFunction, "Hey, you pressed ALT + C.");
```

## Do whatever you want with complex shortcuts

* Parentesis example
```javascript
//alt+1, alt+2 and alt+3 will trigger
.when("ALT & (KEY_1 | KEY_2 | KEY_3)")...

//control+z, control+y, shift+z and shift+y will trigger
.when("(CONTROL | SHIFT) & (KEY_Z | KEY_X)")...
```

* Not and xor operator
```javascript
//alt+1 will trigger, but only if you aren't pressing A and B
.when("ALT & KEY_1 & !(KEY_A & KEY_B)")...

//xor operator returns true if both are different, that is, 0 and 1 or 1 and 0.

//alt+control and alt+shift will trigger
.when("ALT & (CONTROL ^ SHIFT)")...
```

## Do whatever you want with advanced configs

* Define defaults for the whole document
* Define defaults for an especific element
* Define defaults for an especific function
* Define defaults for a keyboard (then you can share it)

```javascript
Keybind.config({
	propagation: true, /* do you want that the keydown propagates to the children? */

	this: Window, /* what is the context? */

	executeOnKeyUp: false, /* do you want the event occurs in keyup? */
	executeOnKeyDown: true, /* do you want the event occurs in keydown? */

	computeKeyUp: true, /* Maybe you want to store the pressed keys, by setting this to false */
	resetComputeAfterExecute: true, /* if you choose to maintain key pressed, probably you want to reset after execute the function */

	notOverride: ['propagation'], /* Those properties doesn't be overwritten by functions or elements */
	keyboard: yourKeyboard, /* Defining a keyboard is util for diferent layouts, and to share keys between elements and functions */

	logLevel: 'none' /* none, error, warning, info, debug */
});
```

##### More about the "define" function and the "when|execute" functions soon 


## Do you want to suggest another syntax?

For now, KeybindJS is opened to various changes and is opened to suggestions.
Will be great if you can contribute to. Thanks!


###### One of first developing

![](http://i.imgur.com/4izKCM2.png)

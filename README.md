KeybindJS
=========

A mini Javascript Framework to configure what you want to execute when determined key sequence occurs. 


## How can I use?

```javascript
//Define the element you want to bind your keys with jquery sintax
var myInput = Keybind.define.element("form input[type='text']");

//Here you can define some configurations that will be applied in all functions binded in myInput
myInput.config({bubble: false});

//Defining a function separately you can define default configs and bind it to various elements
var myFunction = Keybind.define.execute(function(param1) {
	console.log(param1);
});

//When you bind this function in myInput, the default "bubble: false" will be overwritten for this function
myFunction.config({bubble: true});

//Binding all together
myInput.execute(myFunction).when("ALT+KEY_C");

```

## Do you want to suggest another syntax?

For now, KeybindJS is opened to various changes and is opened to suggestions.
Will be great if you can contribute to. Thanks!
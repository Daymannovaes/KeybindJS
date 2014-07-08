Keybind.namespace = (function() {
	var $namespace = {};
	var $private = {};

	$private.getFirstNamespace = function(namespace) {
		//Keybind.throw.all.by.type()

		var namespaces = namespace.split('.');

		return namespaces[0];
	}
	$private.removeFirstNamespace = function(namespace) {
		var indexOf = namespace.indexOf('.');

		return (indexOf == -1) ? "" : namespace.slice(indexOf+1);
	}

	$namespace.getInstanceByString = function(namespace, context) {
		var	first = $private.getFirstNamespace(namespace);
		
		context = context || Keybind;
		
		if(!namespace || !context[first])
			return context;

		
		namespace = $private.removeFirstNamespace(namespace);

		return $namespace.getInstanceByString(namespace, context[first]);
	};

	$namespace.defineInstanceByString = function(namespace, context, template) {
		//throw by type
		if(!namespace)
			return context;

		var	first = $private.getFirstNamespace(namespace);

		if(!context[first]) 
			context[first] = clone(template);
		
		

		
		namespace = $private.removeFirstNamespace(namespace);

		return $namespace.getInstanceByString(namespace, context[first], template);
	};

	return $namespace;
})();
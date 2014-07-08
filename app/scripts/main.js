console.log('\'Allo \'Allo!');

require(['../libs/clone'], function() {
	require(['keybind'], function() {
		require(['keybind.throw', 'keybind.namespace']);
	});
});
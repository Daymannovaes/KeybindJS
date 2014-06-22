keyboard = {};


//use as execute(function() {window.close}).when(['ALT', 'F4']).match() or
//to change the this context use as: execute(function(){this.update()}).in(this).when(...
/*
	['ALT', 'EQUALS', '!DASH'] or
	"ALT + EQUALS - DASH" or "ALT + EQUALS + !DASH"
	{ALT:true, EQUALS:true, MINUS:false}
	"(ALT & F4 || (ALT & F3 & F2))"
*/

keyboard.execute = function(callback, params) {
	var context;	

	when = function(keySequence) {

		keySequence = keyboard.util.prepare.keySequence(keySequence);

		return {
			match: function() {
				if(keyboard.util.matchSequence(keySequence))
					callback.call(context || this, params);
			},
			notMatch: function() {
				if(!keyboard.util.matchSequence(keySequence))
                    callback.call(context || this, params);
			}
		}
	};

	return {
        in: function(temporary_context) {
            context = temporary_context;

            return {
                when: when
            }
        },
		when: when;
	}
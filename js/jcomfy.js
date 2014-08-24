var _comfy_keymap = {};

_comfy_keymap[107] = "red";
_comfy_keymap[103] = "yellow";
_comfy_keymap[115] = "blue";
_comfy_keymap[39] = "green";

jQuery.fn.comfy = function(handler_or_key, handler) {
    this.keyup(function(evt) {
	var comfy_key_name = _comfy_keymap[evt.which];
	if (typeof comfy_key_name != 'undefined') {
	    evt.comfy_key = comfy_key_name
	    if (typeof handler == 'undefined') {
		handler_or_key.apply(this, [evt]);
	    } else {
		if( Object.prototype.toString.call( handler_or_key ) === '[object Array]' ) {
		    var matches = (handler_or_key.indexOf(comfy_key_name) != -1);
		} else {
		    var matches = (handler_or_key == comfy_key_name);
		}
		if (matches) {
		    handler.apply(this, [evt]);
		}
	    }
	}
	return this;
    });
};


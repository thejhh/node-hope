var util = require('util'),
    events = require('events');

/* Constructor */
function HopeMessage() {
	events.EventEmitter.call(this);
}
util.inherits(HopeMessage, events.EventEmitter);

/* Close this message */
HopeMessage.prototype.close = function() {
	var msg = this;
	msg.emit('close');
}

/* Hilight this message */
HopeMessage.prototype.hilight = function() {
	var msg = this;
	msg.emit('hilight');
}

/* Interface */
module.exports = HopeMessage;

/* EOF */

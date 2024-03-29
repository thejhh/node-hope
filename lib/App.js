var util = require('util'),
    events = require('events');

/* Constructor */
function HopeApp() {
	events.EventEmitter.call(this);
}
util.inherits(HopeApp, events.EventEmitter);

/* Methods */
HopeApp.prototype.add = function(thing) {
	var self = this;
	self.emit('add', thing);
}

/* Interface */
module.exports = HopeApp;

/* EOF */

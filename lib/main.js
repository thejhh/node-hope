var app = module.exports = {},
    util = require('util'),
    events = require('events');

/* Constructor */
function HopeApp() {
	events.EventEmitter.call(this);
}
util.inherits(HopeApp, events.EventEmitter);

/* Methods */
HopeApp.prototype.add = function(thing) {
	
}

/* Interface */
app.App = HopeApp;

/** Create new application */
app.createApp = function() {
	return new HopeApp();
}

/* EOF */

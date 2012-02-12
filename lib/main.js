var main = module.exports = {};

/* Constructors */
main.App = require('./App.js');
main.Message = require('./Message.js');

/** Create new application */
main.createApp = function(args) { return new (main.App)(args); }

/** Create new message */
main.createMessage = function(args) { return new (main.Message)(args); }

/* EOF */

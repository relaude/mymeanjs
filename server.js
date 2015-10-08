'use strict';
/**
 * Module dependencies.
 */
 var config = require('./config/config');

// Init the express application
var app = require('./config/express')();

// Start the app by listening on <port>
app.listen(config.port);
console.log('Listening at port...' + config.port);
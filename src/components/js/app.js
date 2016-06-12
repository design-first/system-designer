global.require = require;
var runtime = require('system-runtime');

// import the system
var systemId = runtime.require('db').system({{system}});
// set the level of log
runtime.require('logger').level('debug');
// run the system
runtime.require(systemId).main();
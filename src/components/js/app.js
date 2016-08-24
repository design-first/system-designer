global.require = require;
var runtime = require('system-runtime');

// install the system
var systemId = runtime.install({{system}});
// set the level of log
runtime.require('logger').level('debug');
// start the system
runtime.start(systemId);
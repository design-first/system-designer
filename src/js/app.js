var runtime = require('system-runtime');

// import the system
var systemId = runtime.require('db').system({{system}});
// run the system
runtime.require(systemId).main();
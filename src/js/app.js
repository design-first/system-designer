var syrup = require('system-runtime');

// import the system
var systemId = syrup.require('db').system({{system}});
// run the system
syrup.require(systemId).main();
/* 
 * @description {{description}}
 * @module {{name}}
 * @version {{version}}
 * @requires system-runtime
 */

// install System Runtime
var runtime = require('system-runtime');

// set the level of log
runtime.require('logger').level('{{logLevel}}');

// install and start the system
runtime.install('{{name}}.json', true);

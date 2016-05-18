/* 
 * System Designer
 * https://system-designer.github.io
 * @ecarriou
 *
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

runtime.on('ready', function () {

    runtime.on('ready', function () {
        var system = runtime.system('app');
        system.on('main', function () {
            var channel = null,
                sysid = '',
                system = '',
                messages = [];

            // get system
            sysid = document.location.href.split('#')[1];
            system = this.require('storage').get(sysid);
            delete system.classInfo;

            // start admin    
            this.require('admin').start();

            // get channel              
            channel = this.require('channel-admin');

            this.require('logger').on('warn', function (message) {
                var date = new Date(),
                    time = date.toLocaleTimeString();

                this.require('channel-admin').logWarn('[' + time + '] ' + message);
            });

            this.require('logger').on('error', function (message) {
                var date = new Date(),
                    time = date.toLocaleTimeString();

                this.require('channel-admin').logError('[' + time + '] ' + message);
            });

            this.require('logger').info('loading the system...');
            var systemID = this.require('db').system(system);
            this.require('logger').info('the system is loaded');

            document.title = system.name;

            this.require('logger').on('debug', function (message) {
                var date = new Date(),
                    time = date.toLocaleTimeString();

                this.require('channel-admin').logDebug('[' + time + '] ' + message);
            });

            this.require('logger').on('info', function (message) {
                var date = new Date(),
                    time = date.toLocaleTimeString();

                this.require('channel-admin').logInfo('[' + time + '] ' + message);
            });

            this.require('logger').level('debug');
            this.require(systemID).main();

        }, true);

        system.main();
    });

});
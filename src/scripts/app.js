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

if (typeof global !== 'undefined') {
    global.require = require;
}

var messages = []; // TODO find better way

runtime.on('ready', function () {
    var system = runtime.system('app-designer-testing');

    system.on('main', function () {
        var RuntimeChannel = null,
            channel = null,
            sysid = '',
            system = '',
            params = '';

        // case of cordova    
        if (typeof cordova !== 'undefined') {
            params = window.location.href.split('?system=');
            system = null;

            if (params[1]) {
                system = JSON.parse(decodeURIComponent(params[1].split('&')[0]));
                this.require('storage').set(system._id, system);
            }
        }

        // get system
        sysid = document.location.href.split('#')[1].split('?')[0];
        system = this.require('storage').get(sysid);
        delete system.classInfo;

        // create channel              
        RuntimeChannel = this.require('RuntimeChannel');
        channel = new RuntimeChannel({
            '_id': 'channel',
            '_core': true
        });

        channel.on('send', function send(message) {
            var designer = this.require('designer');

            if (typeof cordova !== 'undefined') {
                messages.push(message);
            }
            this.require('storage').set('system-designer-message', message);
        }, true, true);

        // schema change events
        channel.on('createSchema', function createSchema(id, schema) {
            this.require('logger').level('warn');
            this.require('metamodel').schema(schema);
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('updateSchema', function updateSchema(id, schema) {
            this.require('logger').level('warn');
            this.require('metamodel').schema(schema);
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('deleteSchema', function deleteSchema(id) {
            this.require('logger').level('warn');
            var search = $db.RuntimeSchema.find({ '_id': id }),
                modelName = '',
                modelId = '';

            if (search.length) {
                modelName = search[0]._name;
                $db.RuntimeSchema.remove({ '_id': id });

                search = $db.RuntimeModel.find({ '_name': modelName });
                if (search.length) {
                    modelId = search[0]._id;
                    $db.RuntimeModel.remove({ '_id': modelId });
                    $component.removeFromMemory(modelName);
                }

                search = $db.RuntimeGeneratedModel.find({ '_name': modelName });
                if (search.length) {
                    modelId = search[0]._id;
                    $db.RuntimeGeneratedModel.remove({ '_id': modelId });
                    $component.removeFromMemory(modelName);
                }
                this.require('metamodel').create();
            }
            this.require('logger').level('debug');
        }, true, true);

        // model change events
        channel.on('createModel', function createModel(id, model) {
            this.require('logger').level('warn');
            this.require('metamodel').model(model);
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('updateModel', function updateModel(id, model) {
            this.require('logger').level('warn');
            this.require('metamodel').model(model);
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('deleteModel', function deleteModel(id) {
            this.require('logger').level('warn');
            var search = $db.RuntimeModel.find({ '_id': id }),
                modelName = '',
                modelId = '';

            if (search.length) {
                modelName = search[0]._name;
                $db.RuntimeModel.remove({ '_id': id });
                $component.removeFromMemory(modelName);
            }

            search = $db.RuntimeGeneratedModel.find({ '_name': modelName });
            if (search.length) {
                modelId = search[0]._id;
                $db.RuntimeGeneratedModel.remove({ '_id': modelId });
                $component.removeFromMemory(modelName);
            }
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        // type change events
        channel.on('createType', function createType(id, type) {
            this.require('logger').level('warn');
            this.require('metamodel').type(type);
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('updateType', function updateType(id, type) {
            this.require('logger').level('warn');
            this.require('metamodel').type(type);
            this.require('metamodel').create();
            this.require('logger').level('debug');

        }, true, true);

        channel.on('deleteType', function deleteType(id) {
            this.require('logger').level('warn');
            $db.RuntimeType.remove({ 'name': id });
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        // component change events
        channel.on('createComponent', function createComponent(model, component) {
            $db[model].insert(component);
        }, true, true);

        channel.on('updateComponent', function updateComponent(id, collection, component) {
            $db[collection].update({ '_id': id }, component, { 'upsert': true });
        }, true, true);

        channel.on('deleteComponent', function deleteComponent(id, collection) {
            $db[collection].remove({ '_id': id });
        }, true, true);

        // behavior change events
        channel.on('createBehavior', function createBehavior(component) {
            $db.RuntimeBehavior.insert(component);
        }, true, true);

        channel.on('updateBehavior', function updateBehavior(id, behavior) {
            if (this.require(id)) {
                this.require(id).action(behavior.action);
                if (behavior.state === 'main') {
                    this.require(behavior.component).main();
                }
            }
        }, true, true);

        channel.on('deleteBehavior', function deleteBehavior(id) {
            $db.RuntimeBehavior.remove({ '_id': id });
        }, true, true);

        // System Designer event
        channel.on('sync', function sync() {
            this.loadSystem(JSON.parse(this.require('db').system()));
        }, true, true);

        this.require('storage').on('changed', function (obj) {
            if (typeof obj['system-designer-message'] !== 'undefined') {
                $db.RuntimeMessage.insert(obj['system-designer-message'].newValue);
            }
        }, true, true);

        // logger events
        this.require('logger').on('warn', function (message) {
            if (this.level() === 'info' || this.level() === 'warn' || this.level() === 'debug') {
                var date = new Date(),
                    time = date.toTimeString();
                time = time.split(' ')[0].trim();

                this.require('channel').logWarn('[' + time + '] ' + message);
            }
        }, true, true);

        this.require('logger').on('error', function (message) {
            var date = new Date(),
                time = date.toTimeString();
            time = time.split(' ')[0].trim();

            this.require('channel').logError('[' + time + '] ' + message);
        }, true, true);

        this.require('logger').info('loading the system...');
        var systemID = this.require('db').system(system);
        this.require('logger').info('the system is loaded');

        document.title = system.name;

        // logger events
        this.require('logger').on('debug', function (message) {
            if (this.level() === 'debug') {
                var date = new Date(),
                    time = date.toTimeString();
                time = time.split(' ')[0].trim();

                this.require('channel').logDebug('[' + time + '] ' + message);
            }
        }, true, true);

        this.require('logger').on('info', function (message) {
            if (this.level() === 'info' || this.level() === 'debug') {
                var date = new Date(),
                    time = date.toTimeString();
                time = time.split(' ')[0].trim();

                this.require('channel').logInfo('[' + time + '] ' + message);
            }
        }, true, true);

        this.require('logger').level('debug');
        this.require(systemID).main();

    }, true, true);

    system.main();
}, true, true);
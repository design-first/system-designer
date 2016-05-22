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
            var RuntimeChannel = null,
                channel = null,
                sysid = '',
                system = '',
                messages = [];

            // get system
            sysid = document.location.href.split('#')[1];
            system = this.require('storage').get(sysid);
            delete system.classInfo;

            // create channel              
            RuntimeChannel = this.require('RuntimeChannel');
            channel = new RuntimeChannel({
                '_id': 'channel',
                '_core': true
            });

            channel.on('send', function send(message) {
                this.require('storage').set('system-designer-message', message);
            });

            // schema change events
            channel.on('createSchema', function createSchema(id, schema) {
                this.require('metamodel').schema(schema);
                this.require('metamodel').create();
            }, true);

            channel.on('updateSchema', function updateSchema(id, schema) {
                this.require('metamodel').schema(schema);
                this.require('metamodel').create();
            }, true);

            channel.on('deleteSchema', function deleteSchema(id) {
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
            }, true);

            // model change events
            channel.on('createModel', function createModel(id, model) {
                this.require('metamodel').model(model);
                this.require('metamodel').create();
            }, true);

            channel.on('updateModel', function updateModel(id, model) {
                this.require('metamodel').model(model);
                this.require('metamodel').create();
            }, true);

            channel.on('deleteModel', function deleteModel(id) {
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
            }, true);

            // type change events
            channel.on('createType', function createType(id, type) {
                this.require('metamodel').type(type);
                this.require('metamodel').create();
            }, true);

            channel.on('updateType', function updateType(id, type) {
                this.require('metamodel').type(type);
                this.require('metamodel').create();
            }, true);

            channel.on('deleteType', function deleteType(id) {
                $db.RuntimeType.remove({ 'name': id });
                this.require('metamodel').create();
            }, true);

            // component change events
            channel.on('createComponent', function createComponent(model, component) {
                $db[model].insert(component);
            }, true);

            channel.on('updateComponent', function updateComponent(id, collection, component) {
                $db[collection].update({ '_id': id }, component);
            }, true);

            channel.on('deleteComponent', function deleteComponent(id, collection) {
                $db[collection].remove({ '_id': id });
            }, true);

            // behavior change events
            channel.on('createBehavior', function createBehavior(component) {
                $db.RuntimeBehavior.insert(component);
            }, true);
            channel.on('updateBehavior', function updateBehavior(id, behavior) {
                this.require(id).action(behavior.action);
            });
            channel.on('deleteBehavior', function deleteBehavior(id) {
                $db.RuntimeBehavior.remove({ '_id': id });
            }, true);

            // System Designer event
            channel.on('sync', function sync() {
                this.loadSystem(JSON.parse(this.require('db').system()));
            });

            this.require('storage').on('changed', function (obj) {
                if (typeof obj['system-designer-message'] !== 'undefined') {
                    $db.RuntimeMessage.insert(obj['system-designer-message'].newValue);
                }
            }, true);

            // logger events
            this.require('logger').on('warn', function (message) {
                var date = new Date(),
                    time = date.toLocaleTimeString();

                this.require('channel').logWarn('[' + time + '] ' + message);
            });

            this.require('logger').on('error', function (message) {
                var date = new Date(),
                    time = date.toLocaleTimeString();

                this.require('channel').logError('[' + time + '] ' + message);
            });

            this.require('logger').info('loading the system...');
            var systemID = this.require('db').system(system);
            this.require('logger').info('the system is loaded');

            document.title = system.name;

            // logger events
            this.require('logger').on('debug', function (message) {
                var date = new Date(),
                    time = date.toLocaleTimeString();

                this.require('channel').logDebug('[' + time + '] ' + message);
            });

            this.require('logger').on('info', function (message) {
                var date = new Date(),
                    time = date.toLocaleTimeString();

                this.require('channel').logInfo('[' + time + '] ' + message);
            });

            this.require('logger').level('debug');
            this.require(systemID).main();

        }, true);

        system.main();
    });

});
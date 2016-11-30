/* 
 * System Designer
 * 
 * https://system-designer.github.io
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

if (typeof global !== 'undefined' && typeof window === 'undefined') {
    global.require = require;
}

var messages = []; // TODO find better way
var lastPage = 'index.html'; // TODO find better way

runtime.on('ready', function () {
    var system = runtime.system('app-designer-testing');

    system.on('start', function () {
        var RuntimeChannel = null,
            channel = null,
            sysid = '',
            system = '',
            params = '';

        function _getParams() {
            var result = {},
                urlParams = [],
                system = null;

            urlParams = document.location.href.split('?');

            if (urlParams.length > 1) {
                urlParams = urlParams[1].split('&');
                urlParams.forEach(function (urlParam) {
                    var name = '',
                        value = '';

                    name = urlParam.split('=')[0].trim();
                    value = urlParam.split('=')[1].trim();

                    result[name] = decodeURIComponent(value);
                });
            }
            return result;
        }

        // case of cordova    
        if (typeof cordova !== 'undefined') {

            params = _getParams();
            system = null;

            if (Object.keys(params).length) {
                system = JSON.parse(params.system);
                this.require('storage').set(system._id, system);

                lastPage = params.ref;
            }

            // add back button
            setTimeout(function () {
                if (!document.getElementById('system-designer-back')) {
                    var docFragment = null,
                        div = null,
                        a = null,
                        span = null;

                    docFragment = document.createDocumentFragment();
                    div = document.createElement('div');
                    div.setAttribute('id', 'system-designer-back');
                    div.setAttribute('style', 'top:5px;left:10px;position:absolute;');

                    a = document.createElement('a');
                    /* jshint -W107 */
                    a.setAttribute('href', 'javascript:systemDesignerBack()');
                    /* jshint +W107 */
                    a.setAttribute('style', 'text-decoration:none; color:#337AB7;');

                    span = document.createElement('span');
                    span.setAttribute('style', "font-family: 'Helvetica Neue';");
                    span.textContent = ' < System Designer';

                    a.appendChild(span);
                    div.appendChild(a);
                    docFragment.appendChild(div);

                    document.body.appendChild(docFragment);
                }
            }, 2000);
        }

        // case of electron
        if (typeof global !== 'undefined' && typeof window !== 'undefined') {
            /*jshint -W051 */
            delete module; // for jquery compatibility
            /*jshint +W051 */
        }

        // get system
        sysid = document.location.href.split('#')[1].split('?')[0].split('/')[0];
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
        channel.on('$designerCreateSchema', function $designerCreateSchema(id, schema) {
            this.require('logger').level('warn');
            this.require('metamodel').schema(schema);
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('$editorUpdateSchema', function $editorUpdateSchema(id, schema) {
            this.require('logger').level('warn');
            this.require('metamodel').schema(schema);
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('$designerDeleteSchema', function $designerDeleteSchema(id) {
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
        channel.on('$designerCreateModel', function $designerCreateModel(id, model) {
            this.require('logger').level('warn');
            this.require('metamodel').model(model);
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('$editorUpdateModel', function $editorUpdateModel(id, model) {
            this.require('logger').level('warn');
            this.require('metamodel').model(model);
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('$designerUpdateModel', function $designerUpdateModel(id, model) {
            this.require('logger').level('warn');
            this.require('metamodel').model(model);
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('$designerDeleteModel', function $designerDeleteModel(id) {
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
        channel.on('$designerCreateType', function $designerCreateType(id, type) {
            this.require('logger').level('warn');
            this.require('metamodel').type(type);
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('$editorUpdateType', function $editorUpdateType(id, type) {
            this.require('logger').level('warn');
            this.require('metamodel').type(type);
            this.require('metamodel').create();
            this.require('logger').level('debug');

        }, true, true);

        channel.on('$editorDeleteType', function $editorDeleteType(id) {
            this.require('logger').level('warn');
            $db.RuntimeType.remove({ 'name': id });
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        channel.on('$designerDeleteType', function $designerDeleteType(id) {
            this.require('logger').level('warn');
            $db.RuntimeType.remove({ 'name': id });
            this.require('metamodel').create();
            this.require('logger').level('debug');
        }, true, true);

        // component change events
        channel.on('$designerCreateComponent', function $designerCreateComponent(model, component) {
            $db[model].insert(component);
        }, true, true);

        channel.on('$editorUpdateComponent', function $editorUpdateComponent(id, collection, component) {
            $db[collection].update({ '_id': id }, component, { 'upsert': true });
        }, true, true);

        channel.on('$designerUpdateComponent', function $editorUpdateComponent(id, collection, component) {
            $db[collection].update({ '_id': id }, component, { 'upsert': true });
        }, true, true);

        channel.on('$editorDeleteComponent', function $editorDeleteComponent(id, collection) {
            $db[collection].remove({ '_id': id });
        }, true, true);

        channel.on('$designerDeleteComponent', function $designerDeleteComponent(id, collection) {
            $db[collection].remove({ '_id': id });
        }, true, true);

        // behavior change events
        channel.on('$designerCreateBehavior', function createBehavior(component) {
            $db.RuntimeBehavior.insert(component);
        }, true, true);

        channel.on('$editorUpdateBehavior', function $editorUpdateBehavior(id, behavior) {
            if (this.require(id)) {
                this.require(id).action(behavior.action);
                if (behavior.state === 'main') {
                    this.require(behavior.component).main();
                }
                if (behavior.state === 'start') {
                    this.require(behavior.component).start();
                }
            }
        }, true, true);

        channel.on('$designerUpdateBehavior', function $designerUpdateBehavior(id, behavior) {
            if (this.require(id)) {
                this.require(id).action(behavior.action);
                if (behavior.state === 'main') {
                    this.require(behavior.component).main();
                }
                if (behavior.state === 'start') {
                    this.require(behavior.component).start();
                }
            }
        }, true, true);

        channel.on('$editorDeleteBehavior', function $editorDeleteBehavior(id) {
            $db.RuntimeBehavior.remove({ '_id': id });
        }, true, true);

        channel.on('$designerDeleteBehavior', function $editorDeleteBehavior(id) {
            $db.RuntimeBehavior.remove({ '_id': id });
        }, true, true);

        // System Designer event
        channel.on('$designerSync', function $designerSync() {
            this.$appLoadSystem(JSON.parse(this.require('db').system()));
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
                    time = date.toTimeString(),
                    ms = date.getMilliseconds();

                time = time.split(' ')[0].trim();
                time = time.replace(':', 'h');
                time = time.replace(':', 'm');
                time = time.split('m')[0].trim();
                time = time + ':' + ms;

                this.require('channel').$appLogWarn('[' + time + '] ' + message);
            }
        }, true, true);

        this.require('logger').on('error', function (message) {
            var date = new Date(),
                time = date.toTimeString(),
                ms = date.getMilliseconds();

            time = time.split(' ')[0].trim();
            time = time.replace(':', 'h');
            time = time.replace(':', 'm');
            time = time.split('m')[0].trim();
            time = time + ':' + ms;

            this.require('channel').$appLogError('[' + time + '] ' + message);
        }, true, true);

        this.require('logger').info('loading the system...');
        var systemID = this.require('db').system(system);
        this.require('logger').info('the system is loaded');

        document.title = system.name;

        // logger events
        this.require('logger').on('debug', function (message) {
            if (this.level() === 'debug') {
                var date = new Date(),
                    time = date.toTimeString(),
                    ms = date.getMilliseconds();

                time = time.split(' ')[0].trim();
                time = time.replace(':', 'h');
                time = time.replace(':', 'm');
                time = time.split('m')[0].trim();
                time = time + ':' + ms;

                this.require('channel').$appLogDebug('[' + time + '] ' + message);
            }
        }, true, true);

        this.require('logger').on('info', function (message) {
            if (this.level() === 'info' || this.level() === 'debug') {
                var date = new Date(),
                    time = date.toTimeString(),
                    ms = date.getMilliseconds();

                time = time.split(' ')[0].trim();
                time = time.replace(':', 'h');
                time = time.replace(':', 'm');
                time = time.split('m')[0].trim();
                time = time + ':' + ms;

                this.require('channel').$appLogInfo('[' + time + '] ' + message);
            }
        }, true, true);

        this.require('logger').level('debug');
        if (this.require(systemID).main) {
            this.require(systemID).main();
        }
        if (this.require(systemID).start) {
            this.require(systemID).start();
        }

    }, true, true);

    system.start();
}, true, true);
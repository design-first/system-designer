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
    var system = this.system('design');

    // DIALOG COPYRIGHT
    var DialogCopyright = this.require('DialogCopyright');
    DialogCopyright.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-copyright').empty();

        html = this.require('dialog-modal-copyright.html');
        document.querySelector('#designer-dialog-copyright').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{message}}/gi, this.message())
        );

        //events
        dom = document.getElementById('designer-dialog-copyright-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    DialogCopyright.on('show', function () {
        $('#designer-dialog-copyright-modal').modal('show');
    });

    DialogCopyright.on('hide', function () {
        $('#designer-dialog-copyright-modal').modal('hide');
    });

    // MenuBar
    var MenuBar = this.require('MenuBar');
    MenuBar.on('init', function (conf) {
        var menuHeader = [],
            menuItems = [],
            menuActions = [],
            menuSearch = [],
            self = this;

        // menu header
        menuHeader = this.require('db').collections().MenuHeader.find({
            "type": this.designer().type()
        });
        this.header(this.require(menuHeader[0]._id));

        // menu items
        menuItems = this.require('db').collections().MenuItem.find({
            "type": this.designer().type()
        });

        menuItems.sort(function (itemA, itemB) {
            if (itemA.position > itemB.position) {
                return 1;
            }
            if (itemA.position < itemB.position) {
                return -1;
            }
            return 0;
        });

        menuItems.forEach(function (menuItem) {
            var id = menuItem._id;
            self.items().push(self.require(id));
        });

        // menu actions
        menuActions = this.require('db').collections().MenuAction.find({
            "type": this.designer().type()
        });

        menuSearch = this.require('db').collections().MenuSearch.find({
            "type": this.designer().type()
        });

        menuActions = menuActions.concat(menuSearch);

        menuActions.sort(function (itemA, itemB) {
            if (itemA.position > itemB.position) {
                return 1;
            }
            if (itemA.position < itemB.position) {
                return -1;
            }
            return 0;
        });

        menuActions.forEach(function (menuAction) {
            var id = menuAction._id;
            self.actions().push(self.require(id));
        });

    });

    // MenuItem
    var MenuItem = this.require('MenuItem');
    MenuItem.on('click', function () {
        this.require('designer').context(this.name());
    });

    MenuBar.on('render', function () {
        var length = 0,
            i = 0,
            item = null,
            domHeader = document.getElementById('designer-menubar-header'),
            domItems = document.getElementById('designer-menubar-items'),
            domAction = document.getElementById('designer-menubar-actions'),
            self = this;

        function _removeActive() {
            var length = 0,
                i = 0,
                item = null;

            length = domItems.children.length;
            for (i = 0; i < length; i++) {
                item = domItems.children[i];
                $(item).removeClass('active');
            }
        }

        // header
        domHeader.insertAdjacentHTML('afterbegin', this.header().html().source());

        // items
        this.items().forEach(function (item) {
            domItems.insertAdjacentHTML('beforeend', '<li>' + item.html().source() + '</>');
        });

        // events
        var callback = function () {
            _removeActive();
            $(this).addClass('active');
        };

        length = domItems.children.length;
        for (i = 0; i < length; i++) {
            item = domItems.children[i];
            item.addEventListener('click', callback);
            item.addEventListener('click', function () {
                this.click();
            }.bind(self.items(i)));
        }

        // actions
        this.actions().forEach(function (action) {
            domAction.insertAdjacentHTML('afterbegin', '<li>' + action.html().source() + '</>');
        });

        // focus on first element
        if (length > 0) {
            this.designer().context(this.items(0).name());
            item = domItems.children[0];
            $(item).addClass('active');
        }
    });

    // ToolBar
    var ToolBar = this.require('ToolBar');
    ToolBar.on('init', function (conf) {
        var toolBarItems = [],
            self = this;

        // items
        toolBarItems = this.require('db').collections().ToolBarItem.find({
            "type": this.designer().type()
        });

        // sort items
        toolBarItems.sort(function (itemA, itemB) {
            if (itemA.position > itemB.position) {
                return 1;
            }
            if (itemA.position < itemB.position) {
                return -1;
            }
            return 0;
        });

        toolBarItems.forEach(function (toolBarItem) {
            var id = toolBarItem._id;
            self.items().push(self.require(id));
        });
    });

    ToolBar.on('render', function () {
        var domItems = document.getElementById('designer-toolbar-items'),
            i = 0,
            length = 0,
            item = null,
            self = this;

        // items
        this.items().forEach(function (item) {
            domItems.insertAdjacentHTML('beforeend', '<li>' + item.html().source() + '</>');
        });

        // events
        length = domItems.children.length;
        for (i = 0; i < length; i++) {
            item = domItems.children[i];
            item.addEventListener('click', function () {
                this.click();
            }.bind(self.items(i)));
        }
    });

    // Workspace
    var Workspace = this.require('Workspace');
    Workspace.on('init', function (conf) {
        var Editor = null,
            editor = null;

        Editor = this.require('Editor');
        editor = new Editor({
            '_id': 'editor',
            'editor': ace.edit('designer-editor')
        });
    });

    Workspace.on('render', function () {
        this.require('editor').render();
    });

    // Server
    var Server = this.require('Server');
    Server.on('start', function () {
        var RuntimeChannel = null,
            channel = null,
            id = '',
            designer = this.require('designer'),
            editor = this.require('editor').editor(),
            Range = null,
            endLine = null;

        this.require('storage').on('changed', function (obj) {
            if (typeof obj['system-designer-message'] !== 'undefined') {
                $db.RuntimeMessage.insert(obj['system-designer-message'].newValue);
            }
        }, true);

        RuntimeChannel = this.require('RuntimeChannel');
        channel = new RuntimeChannel({
            '_id': 'channel'
        });

        channel.on('send', function (message) {
            var config = this.require('storage').get('system-designer-config'),
                designer = this.require('designer'),
                messages = [];

            if (designer.isCordova()) {
                messages = designer.messages();
                messages.push(message);
                designer.messages(messages);
            }

            this.require('storage').set('system-designer-message', message);

            // message for server debug
            if (typeof config.debugType !== 'undefined' && config.debugType === 'server' && config.urlServer) {
                $.post(config.urlServer + ':8888/' + message.event, encodeURIComponent(JSON.stringify(message.data)));
            }
        });

        id = document.location.href.split('#')[1].split('?')[0];
        systemId = document.location.href.split('#')[2].split('?')[0];

        behavior = this.require('storage').get(systemId).behaviors[id];

        designer.store().uuid(id);
        designer.store().data(behavior);

        document.title = behavior.state + ' | system designer';

        editor.setValue(behavior.action);

        editor.gotoLine(2);
        editor.getSession().$undoManager.reset();
        editor.getSession().setUndoManager(new ace.UndoManager());

        Range = ace.require("ace/range").Range;
        endLine = behavior.action.indexOf('{') + 1;

        editor.session.addMarker(new Range(0, 0, 0, endLine), "readonly");

        // readonly
        editor.keyBinding.addKeyboardHandler({
            handleKeyboard: function (data, hash, keyString, keyCode, event) {
                var result = null;
                switch (true) {
                    case (hash === -1 || (keyCode <= 40 && keyCode >= 37)):
                        result = false;
                        break;
                    case intersects(new Range(0, 0, 0, endLine)):
                        result = {
                            command: 'null',
                            passEvent: false
                        };
                        runtime.require('message').warning('you can not modify the header of the behavior.');
                        break;
                    default:
                        break;
                }

                if (result) {
                    return result;
                }
            }
        });

        function intersects(range) {
            var result = false,
                selection = editor.getSelectionRange();

            result = (selection.end.row === 0 && selection.end.column < endLine + 1) && selection.intersects(range);
            return result;
        }

    }, true);

    // Editor
    var Editor = this.require('Editor');
    Editor.on('render', function () {
        this.editor().getSession().setMode('ace/mode/javascript');
        this.editor().getSession().setTabSize(2);
        var completer = {
            getCompletions: function (editor, session, pos, prefix, callback) {
                var systemId = '',
                    result = [],
                    behavior = {},
                    schemaName = '',
                    schemas = {},
                    schema = {},
                    parents = {},
                    i = 0;


                function _searchApis(parents) {
                    var length = 0,
                        i = 0;

                    if (parents) {
                        length = parents.length;
                        for (i = 0; i < length; i++) {
                            if (parents[i].indexOf('RuntimeComponent') !== -1) {
                                result.push({ name: 'classInfo()', value: 'classInfo()', meta: 'property (inherited)' });
                                result.push({ name: 'id()', value: 'id()', meta: 'property (inherited)' });
                                result.push({ name: 'on()', value: 'on()', meta: 'method (inherited)' });
                                result.push({ name: 'off()', value: 'off()', meta: 'method (inherited)' });
                                result.push({ name: 'require()', value: 'require()', meta: 'method (inherited)' });
                                result.push({ name: 'destroy()', value: 'destroy()', meta: 'method (inherited)' });
                                result.push({ name: 'init()', value: 'init()', meta: 'method (inherited)' });
                                result.push({ name: 'error()', value: 'error()', meta: 'event (inherited)' });
                            } else {
                                schema = _getSchema(schemas, parents[i]);

                                for (var prop in schema) {
                                    if (prop.indexOf('_') !== 0) {
                                        result.push({ name: prop + '()', value: prop + '()', meta: schema[prop] + ' (inherited)' });
                                    }
                                }

                                if (typeof schema._inherit !== 'undefined') {
                                    _searchApis(schema._inherit);
                                }
                            }
                        }
                    }
                }

                function _getSchema(schemas, name) {
                    var result = '',
                        id = '';

                    for (id in schemas) {
                        if (schemas[id]._name === name) {
                            result = schemas[id];
                            break;
                        }
                    }
                    return result;
                }

                id = document.location.href.split('#')[1];
                systemId = document.location.href.split('#')[2];

                system = this.require('storage').get(systemId);
                if (system) {
                    schemaName = system.behaviors[id].component;
                    schemas = system.schemas;

                    schema = _getSchema(schemas, schemaName);

                    for (var name in schema) {
                        if (name.indexOf('_') !== 0) {
                            result.push({ name: name + '()', value: name + '()', meta: schema[name] });
                        }
                    }

                    // case of system
                    if (system.behaviors[id].component === systemId) {
                        result.push({ name: 'classInfo()', value: 'classInfo()', meta: 'property' });
                        result.push({ name: 'id()', value: 'id()', meta: 'property' });
                        result.push({ name: 'on()', value: 'on()', meta: 'method' });
                        result.push({ name: 'off()', value: 'off()', meta: 'method' });
                        result.push({ name: 'require()', value: 'require()', meta: 'method' });
                        result.push({ name: 'destroy()', value: 'destroy()', meta: 'method' });
                        result.push({ name: 'init()', value: 'init()', meta: 'method' });
                        result.push({ name: 'error()', value: 'error()', meta: 'event' });
                    }

                    // inherited
                    parents = schema._inherit;
                    if (parents) {
                        length = parents.length;

                        for (i = 0; i < length; i++) {
                            if (parents[i].indexOf('RuntimeComponent') !== -1) {
                                result.push({ name: 'classInfo()', value: 'classInfo()', meta: 'property (inherited)' });
                                result.push({ name: 'id()', value: 'id()', meta: 'property (inherited)' });
                                result.push({ name: 'on()', value: 'on()', meta: 'method (inherited)' });
                                result.push({ name: 'off()', value: 'off()', meta: 'method (inherited)' });
                                result.push({ name: 'require()', value: 'require()', meta: 'method (inherited)' });
                                result.push({ name: 'destroy()', value: 'destroy()', meta: 'method (inherited)' });
                                result.push({ name: 'init()', value: 'init()', meta: 'method (inherited)' });
                                result.push({ name: 'error()', value: 'error()', meta: 'event (inherited)' });
                            } else {
                                schema = _getSchema(schemas, parents[i]);

                                for (var prop in schema) {
                                    if (prop.indexOf('_') !== 0) {
                                        result.push({ name: prop + '()', value: prop + '()', meta: schema[prop] + ' (inherited)' });
                                    }
                                }
                                if (typeof schema._inherit !== 'undefined') {
                                    _searchApis(schema._inherit);
                                }
                            }
                        }
                    }
                }

                callback(null, result);
            }.bind(this)
        };

        this.editor().setOptions({
            enableBasicAutocompletion: [completer]
        });
        this.editor().setShowPrintMargin(false);
        this.editor().setReadOnly(false);
        this.editor().$blockScrolling = Infinity;
        this.editor().setValue('');
        this.editor().commands.addCommand({
            name: 'myCommand',
            bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
            exec: function (editor) {
                runtime.require('designer').save();
            }
        });
        this.editor().focus();
    });

    // Menu items 
    this.require('1f1781882618110').on('click', function () {
        var editor = this.require('editor').editor(),
            designer = this.require('designer');

        try {
            designer.store().data(JSON.parse(editor.getValue()));
        } catch (e) {
            // TODO message ?
        }

        editor.getSession().setMode('ace/mode/javascript');
        editor.getSession().setTabSize(2);

        var completer = {
            getCompletions: function (editor, session, pos, prefix, callback) {
                var systemId = '',
                    result = [],
                    behavior = {},
                    schemaName = '',
                    schemas = {},
                    schema = {},
                    parents = {},
                    i = 0;

                function _getSchema(schemas, name) {
                    var result = '',
                        id = '';

                    for (id in schemas) {
                        if (schemas[id]._name === name) {
                            result = schemas[id];
                            break;
                        }
                    }
                    return result;
                }

                id = document.location.href.split('#')[1];
                systemId = document.location.href.split('#')[2];

                system = this.require('storage').get(systemId);
                if (system) {
                    schemaName = system.behaviors[id].component;
                    schemas = system.schemas;

                    schema = _getSchema(schemas, schemaName);

                    for (var name in schema) {
                        if (name.indexOf('_') !== 0) {
                            result.push({ name: name + '()', value: name + '()', meta: schema[name] });
                        }
                    }

                    // case of system
                    if (system.behaviors[id].component === systemId) {
                        result.push({ name: 'classInfo()', value: 'classInfo()', meta: 'property' });
                        result.push({ name: 'id()', value: 'id()', meta: 'property' });
                        result.push({ name: 'on()', value: 'on()', meta: 'method' });
                        result.push({ name: 'off()', value: 'off()', meta: 'method' });
                        result.push({ name: 'require()', value: 'require()', meta: 'method' });
                        result.push({ name: 'destroy()', value: 'destroy()', meta: 'method' });
                        result.push({ name: 'init()', value: 'init()', meta: 'method' });
                        result.push({ name: 'error()', value: 'error()', meta: 'event' });
                    }

                    // inherited
                    parents = schema._inherit;
                    if (parents) {
                        length = parents.length;

                        for (i = 0; i < length; i++) {
                            if (parents[i].indexOf('RuntimeComponent') !== -1) {
                                result.push({ name: 'classInfo()', value: 'classInfo()', meta: 'property (inherited)' });
                                result.push({ name: 'id()', value: 'id()', meta: 'property (inherited)' });
                                result.push({ name: 'on()', value: 'on()', meta: 'method (inherited)' });
                                result.push({ name: 'off()', value: 'off()', meta: 'method (inherited)' });
                                result.push({ name: 'require()', value: 'require()', meta: 'method (inherited)' });
                                result.push({ name: 'destroy()', value: 'destroy()', meta: 'method (inherited)' });
                                result.push({ name: 'init()', value: 'init()', meta: 'method (inherited)' });
                                result.push({ name: 'error()', value: 'error()', meta: 'event (inherited)' });
                            } else {
                                schema = _getSchema(schemas, parents[i]);

                                for (var prop in schema) {
                                    if (prop.indexOf('_') !== 0) {
                                        result.push({ name: prop + '()', value: prop + '()', meta: schema[prop] + ' (inherited)' });
                                    }
                                }
                            }
                        }
                    }
                }

                callback(null, result);
            }.bind(this)
        };

        editor.setOptions({
            enableBasicAutocompletion: [completer]
        });
        editor.setValue(designer.store().data().action);

        editor.gotoLine(2);

        editor.getSession().$undoManager.reset();
        editor.getSession().setUndoManager(new ace.UndoManager());
        editor.focus();
    });

    this.require('1f1781882618111').on('click', function () {
        var editor = this.require('editor').editor(),
            designer = this.require('designer');

        if (editor.getValue().indexOf('{') !== 0) {
            designer.store().data().action = editor.getValue();
        }
        editor.getSession().setMode('ace/mode/json');
        editor.setValue(JSON.stringify(designer.store().data(), null, '\t'));

        editor.gotoLine(2);

        editor.getSession().$undoManager.reset();
        editor.getSession().setUndoManager(new ace.UndoManager());
        editor.focus();
    });

    // Designer
    var Designer = this.require('Designer');
    Designer.on('init', function (conf) {
        var Store = null,
            store = null,
            MenuBar = null,
            menubar = null,
            ToolBar = null,
            toolbar = null,
            Workspace = null,
            workspace = null,
            Server = null,
            server = null;

        // type
        this.type(window.location.href.split('.html')[0].split('/')[window.location.href.split('.html')[0].split('/').length - 1]);

        // store
        Store = this.require('Store');
        store = new Store();

        // menu
        MenuBar = this.require('MenuBar');
        menubar = new MenuBar({
            designer: this
        });
        ToolBar = this.require('ToolBar');
        toolbar = new ToolBar({
            designer: this
        });

        // workspace
        Workspace = this.require('Workspace');
        workspace = new Workspace({
            designer: this
        });

        // server
        Server = this.require('Server');
        server = new Server({
            'designer': this
        });

        this.store(store);
        this.menubar(menubar);
        this.toolbar(toolbar);
        this.workspace(workspace);
        this.server(server);
    });

    Designer.on('render', function () {
        if (this.isCordova()) {
            this.updateCordovaContext();
        }
        this.menubar().render();
        this.toolbar().render();
        this.workspace().render();
        this.server().start();
        this.updateRouter();

        // TODO create a function
        $(function () {
            $('[data-toggle="tooltip"]').tooltip({ 'container': 'body', delay: { "show": 1000, "hide": 100 } });
        });
    });

    Designer.on('updateRouter', function () {
        var menubar = [],
            i = 0,
            length = 0,
            id = '',
            systemId = '',
            href = '';

        id = document.location.href.split('#')[1];
        systemId = document.location.href.split('#')[2];

        // update menubar
        menubar = $('#designer-menubar-items > li > a');
        length = menubar.length;
        for (i = 0; i < length; i++) {
            href = menubar[i].href;
            context = href.split('#')[href.split('#').length - 1];
            menubar[i].href = '#' + id + '#' + systemId + '#' + context;
        }
    });

    Designer.on('clear', function () {
        this.refresh();
    });

    Designer.on('context', function (val) {
        this.workspace().clear();
        this.workspace().refresh();
    });

    Designer.on('save', function () {
        var val = this.require('editor').editor().getValue(),
            designer = this.require('designer'),
            store = designer.store().data();

        if (designer.context() === 'action') {
            store.action = val;
        } else {
            store = JSON.parse(val);
        }
        designer.store().data(store);

        // check if ID change
        if (designer.store().uuid() !== designer.store().data()._id) {
            this.require('channel').$editorDeleteBehavior(designer.store().uuid());
            designer.store().uuid(designer.store().data()._id);
        }

        document.title = designer.store().data().state + ' | system designer';

        this.require('channel').$editorUpdateBehavior(designer.store().uuid(), designer.store().data());
        this.require('message').success('behavior saved.');
    });

    // main
    system.on('main', function () {
        var Designer = null,
            designer = null;

        Designer = this.require('Designer');
        designer = new Designer({
            '_id': 'designer'
        });
        designer.render();
    });

    system.main();
});
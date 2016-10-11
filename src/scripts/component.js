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

    // MenuItem
    var MenuItem = this.require('MenuItem');
    MenuItem.on('click', function () {
        this.require('designer').oldContext(this.require('designer').context());
        this.require('designer').context(this.name());
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

    // Menu items
    this.require('1f1781882618113').on('click', function () {
        var editor = this.require('editor').editor(),
            designer = this.require('designer'),
            oldContext = designer.oldContext();

        editor.getSession().setMode('ace/mode/json');

        // old context
        if (oldContext && oldContext !== 'component') {
            designer.store().data()[oldContext] = editor.getValue();
        }

        editor.setValue(JSON.stringify(designer.store().data(), null, '\t'));

        editor.gotoLine(2);

        editor.getSession().$undoManager.reset();
        editor.getSession().setUndoManager(new ace.UndoManager());
        editor.focus();
    });

    // Server
    var Server = this.require('Server');
    Server.on('start', function () {
        var RuntimeChannel = null,
            channel = null,
            id = '',
            title = '',
            collection = '',
            self = this,
            designer = this.require('designer'),
            result = {},
            property = '',
            propName = '',
            editor = null;

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
            if (message.event.indexOf('$system') !== 0) {
                var storage = this.require('storage'),
                    config = storage.get('system-designer-config'),
                    designer = this.require('designer'),
                    messages = [];

                storage.set('system-designer-message', message);

                if (designer.isCordova()) {
                    messages = designer.messages();
                    messages.push(message);
                    designer.messages(messages);
                }

                // message for server debug
                if (typeof config.debugType !== 'undefined' && config.debugType === 'server' && config.urlServer) {
                    $.post(config.urlServer + ':8888/' + message.event, encodeURIComponent(JSON.stringify(message.data)));
                }
            }
        });

        id = decodeURIComponent(document.location.href.split('#')[1].split('?')[0]);
        collection = document.location.href.split('#')[2].split('?')[0];
        systemId = document.location.href.split('#')[3].split('?')[0];

        component = this.require('storage').get(systemId).components[collection][id];
        model = _findModel(collection, this.require('storage').get(systemId));

        function _findModel(name, system) {
            var result = {},
                modelId = '';

            for (modelId in system.models) {
                if (system.models[modelId]._name === name) {
                    result = system.models[modelId];
                }
            }
            return result;
        }

        function _init(props) {
            var propName = '',
                position = 0,
                menuitem = null,
                arrId = [];

            if (Object.keys(props)) {
                // add menuitems
                for (propName in props) {
                    self.require('db').collections().HTML.insert({
                        "_id": "menu-item-property-" + propName + ".html",
                        "source": '<a id="designer-menu-item-property-' + propName + '" href="#' + propName + '">' + propName + '</a>'
                    });
                    arrId = self.require('db').collections().MenuItem.insert({
                        "name": propName,
                        "html": "menu-item-property-" + propName + ".html",
                        "position": position + 10,
                        "type": "component"
                    });
                    self.require('designer').menubar().items().push(self.require(arrId[0]));
                }

                // items
                var toto = self.require('designer').menubar().items().sort(function (itemA, itemB) {
                    var compA = runtime.require(itemA),
                        compB = runtime.require(itemB);

                    if (compA.position() > compB.position()) {
                        return 1;
                    }
                    if (compA.position() < compB.position()) {
                        return -1;
                    }
                    return 0;
                });
                // render
                self.require('designer').menubar().render();

                // add events
                var callback = function (event) {
                    var editor = null,
                        component = null;

                    editor = self.require('editor').editor();
                    editor.getSession().setMode('ace/mode/' + props[propName]);

                    if (props[propName] === 'javascript') {
                        editor.getSession().setTabSize(2);
                    }

                    editor.setOptions({
                        enableBasicAutocompletion: true,
                    });

                    try {
                        designer.store().data()[propName] = JSON.parse(editor.getValue())[propName];
                    } catch (e) {

                    }

                    component = self.require('designer').store().data();

                    editor.setValue(component[propName]);
                    editor.gotoLine(1);

                    editor.getSession().$undoManager.reset();
                    editor.getSession().setUndoManager(new ace.UndoManager());
                };
                for (propName in props) {
                    menuitem = document.getElementById('designer-menu-item-property-' + propName);
                    menuitem.addEventListener('click', callback);
                }
            }
        }

        designer.store().uuid(id);
        designer.store().collection(collection);
        designer.store().data(component);

        for (property in component) {
            if (model[property] && model[property].type) {
                switch (model[property].type) {
                    case 'html':
                        result[property] = 'html';
                        break;
                    case 'javascript':
                        result[property] = 'javascript';
                        break;
                    case 'css':
                        result[property] = 'css';
                        break;
                    default:
                        break;
                }
            }
        }

        designer.store().extra(result);
        _init(result);

        document.title = id + ' | system designer';

        editor = this.require('editor').editor();
        if (Object.keys(result).length === 0) {
            editor.getSession().setMode('ace/mode/json');
            editor.setValue(JSON.stringify(component, null, '\t'));
            editor.gotoLine(2);
        } else {
            propName = Object.keys(result)[0];
            editor.getSession().setMode('ace/mode/' + result[propName]);

            if (result[propName] === 'javascript') {
                editor.getSession().setTabSize(2);
            }

            editor.setOptions({
                enableBasicAutocompletion: true,
            });
            editor.setValue(component[propName]);
            editor.gotoLine(1);
        }

        editor.getSession().$undoManager.reset();
        editor.getSession().setUndoManager(new ace.UndoManager());
        editor.focus();
    }, true);

    // Editor
    var Editor = this.require('Editor');
    Editor.on('render', function () {
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
        this.toolbar().render();
        this.workspace().render();
        this.server().start();
        this.updateRouter();

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

        id = decodeURIComponent(document.location.href.split('#')[1]);
        collection = document.location.href.split('#')[2];
        systemId = document.location.href.split('#')[3];

        // update menubar
        menubar = $('#designer-menubar-items > li > a');
        length = menubar.length;
        for (i = 0; i < length; i++) {
            href = menubar[i].href;
            context = href.split('#')[href.split('#').length - 1];
            menubar[i].href = '#' + id + '#' + collection + '#' + systemId + '#' + context;
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

        if (designer.context() === 'component') {
            store = JSON.parse(val);
        } else {
            store[designer.context()] = val;
        }
        designer.store().data(store);

        // check if ID change
        if (designer.store().uuid() !== designer.store().data()._id) {
            this.require('channel').$editorDeleteComponent(designer.store().uuid(), designer.store().collection());
            designer.store().uuid(designer.store().data()._id);

            // update title
            document.title = designer.store().uuid() + ' | system designer';
        }

        this.require('channel').$editorUpdateComponent(designer.store().uuid(), designer.store().collection(), designer.store().data());
        this.require('message').success('component saved.');
    });

    // start
    system.on('start', function start() {
        var Designer = null,
            designer = null;

        Designer = this.require('Designer');
        designer = new Designer({
            '_id': 'designer'
        });
        designer.render();
    });

    system.start();
});
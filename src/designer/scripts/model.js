/* 
 * System Designer
 * https://system-designer.github.io
 * @ecarriou
 *
 * Copyright (C) 2016 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

runtime.on('ready', function() {
    var system = this.system('design');

    // DIALOG COPYRIGHT
    var DialogCopyright = this.require('DialogCopyright');
    DialogCopyright.on('init', function(config) {
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
        dom.addEventListener('click', function(event) {
            this.ok();
        }.bind(this));

    });

    DialogCopyright.on('show', function() {
        $('#designer-dialog-copyright-modal').modal('show');
    });

    DialogCopyright.on('hide', function() {
        $('#designer-dialog-copyright-modal').modal('hide');
    });

    // MenuBar
    var MenuBar = this.require('MenuBar');
    MenuBar.on('init', function(conf) {
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

        menuItems.sort(function(itemA, itemB) {
            if (itemA.position > itemB.position) {
                return 1;
            }
            if (itemA.position < itemB.position) {
                return -1;
            }
            return 0;
        });

        menuItems.forEach(function(menuItem) {
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

        menuActions.sort(function(itemA, itemB) {
            if (itemA.position > itemB.position) {
                return 1;
            }
            if (itemA.position < itemB.position) {
                return -1;
            }
            return 0;
        });

        menuActions.forEach(function(menuAction) {
            var id = menuAction._id;
            self.actions().push(self.require(id));
        });

    });

    MenuBar.on('render', function() {
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
        this.items().forEach(function(item) {
            domItems.insertAdjacentHTML('beforeend', '<li>' + item.html().source() + '</>');
        });

        // events
        var callback = function() {
            _removeActive();
            $(this).addClass('active');
        };
        length = domItems.children.length;
        for (i = 0; i < length; i++) {
            item = domItems.children[i];
            item.addEventListener('click', callback);
            item.addEventListener('click', function() {
                this.click();
            }.bind(self.items(i)));
        }

        // actions
        this.actions().forEach(function(action) {
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
    ToolBar.on('init', function(conf) {
        var toolBarItems = [],
            self = this;

        // items
        toolBarItems = this.require('db').collections().ToolBarItem.find({
            "type": this.designer().type()
        });

        // sort items
        toolBarItems.sort(function(itemA, itemB) {
            if (itemA.position > itemB.position) {
                return 1;
            }
            if (itemA.position < itemB.position) {
                return -1;
            }
            return 0;
        });

        toolBarItems.forEach(function(toolBarItem) {
            var id = toolBarItem._id;
            self.items().push(self.require(id));
        });
    });

    ToolBar.on('render', function() {
        var domItems = document.getElementById('designer-toolbar-items'),
            i = 0,
            length = 0,
            item = null,
            self = this;

        // items
        this.items().forEach(function(item) {
            domItems.insertAdjacentHTML('beforeend', '<li>' + item.html().source() + '</>');
        });

        // events
        length = domItems.children.length;
        for (i = 0; i < length; i++) {
            item = domItems.children[i];
            item.addEventListener('click', function() {
                this.click();
            }.bind(self.items(i)));
        }
    });

    // Workspace
    var Workspace = this.require('Workspace');
    Workspace.on('init', function(conf) {
        var Editor = null,
            editor = null;

        Editor = this.require('Editor');
        editor = new Editor({
            '_id': 'editor',
            'editor': ace.edit('designer-editor')
        });
    });

    Workspace.on('render', function() {
        this.require('editor').render();
    });

    // Server
    var Server = this.require('Server');
    Server.on('start', function() {
        var Worker = null,
            worker = null,
            RuntimeChannel = null,
            channel = null,
            id = '';

        Worker = this.require('Worker');
        worker = new Worker({
            "_id": "worker",
            "worker": new SharedWorker('./scripts/worker.js'),
        });
        worker.worker().port.onmessage = function(e) {
            $db.RuntimeMessage.insert(e.data);
        };

        RuntimeChannel = this.require('RuntimeChannel');
        channel = new RuntimeChannel({
            '_id': 'channel'
        });

        channel.on('send', function(message) {
            this.require('worker').worker().port.postMessage(message);
        });

        id = document.location.search.split('?')[1].split('id=')[1];
        channel.getModel(id);

        channel.on('setModel', function(id, model) {
            var editor = this.require('editor').editor(),
                designer = this.require('designer');

            designer.store().uuid(id);
            designer.store().data(model);

            document.title = model._name + ' | system designer';

            editor.setValue(JSON.stringify(model, null, '\t'));
            editor.gotoLine(1);
            editor.getSession().$undoManager.reset();
            editor.getSession().setUndoManager(new ace.UndoManager());

            this.off('setModel');
        });
    }, true);

    // Editor
    var Editor = this.require('Editor');
    Editor.on('render', function() {
        this.editor().getSession().setMode('ace/mode/json');
        this.editor().setShowPrintMargin(false);
        this.editor().setReadOnly(false);
        this.editor().$blockScrolling = Infinity;
        this.editor().setValue('');
        this.editor().commands.addCommand({
            name: 'myCommand',
            bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
            exec: function(editor) {
                runtime.require('designer').save();
            }
        });

        $(function() {
            $('[data-toggle="tooltip"]').tooltip({ 'container': 'body', delay: { "show": 1000, "hide": 100 } });
        });
    });

    // Designer
    var Designer = this.require('Designer');
    Designer.on('init', function(conf) {
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

    Designer.on('render', function() {
        this.menubar().render();
        this.toolbar().render();
        this.workspace().render();
        this.server().start();
    });

    Designer.on('clear', function() {
        this.refresh();
    });

    Designer.on('context', function(val) {
        this.workspace().clear();
        this.workspace().refresh();
    });

    Designer.on('save', function() {
        var val = this.require('editor').editor().getValue(),
            designer = this.require('designer'),
            message = this.require('message'),
            model = JSON.parse(val);

        if (designer.store().data()._name === model._name) {
            designer.store().data(model);

            // check if ID change
            if (designer.store().uuid() !== designer.store().data()._id) {
                this.require('channel').updateModelId(designer.store().uuid(), designer.store().data()._id);
                designer.store().uuid(designer.store().data()._id);
            }

            this.require('channel').updateModel(designer.store().uuid(), designer.store().data());
            message.success('model saved.');
        } else {
            message.danger('you can not modify the name of a model.');
        }
    });

    // main
    system.on('main', function() {
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
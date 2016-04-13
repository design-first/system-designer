/* 
 * System Designer
 * https://system-designer.github.io
 * @ecarriou
 *
 * Copyright 2015-2016 Erwan Carriou
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
            arr = window.location.href.split('#'),
            context = 'overview',
            designer = this.require('designer'),
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

        if (arr.length > 1) {
            context = arr[1].trim();
        }

        for (i = 0; i < length; i++) {
            if (this.items(i).name() === context) {
                item = domItems.children[i];
                $(item).addClass('active');
            }
        }

        designer.context(context);
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

    Workspace.on('clear', function() {
        $('#designer-documentation').empty();
    });

    Workspace.on('render', function() {
        var html = '',
            context = this.require('designer').context();
            
        if (context) {
            this.clear();
            html = this.require('documentation-' + context + '.html');
            document.querySelector('#designer-documentation').insertAdjacentHTML('afterbegin',
                html.source()
            );
            Prism.highlightAll();
        }
    });

    // Server
    var Server = this.require('Server');
    Server.on('start', function() {
        var Worker = null,
            worker = null,
            RuntimeChannel = null,
            channel = null;

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

    }, true);

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

        // add event when history change
        var that = this;
        window.onhashchange = function(e) {
            var arr = window.location.href.split('#'),
                context = 'overview',
                domItems = null,
                item = null,
                i = 0;

            if (arr.length > 1) {
                context = arr[1];
            }

            that.context(context);

            // focus
            domItems = document.getElementById('designer-menubar-items');
            length = that.menubar().items().length;
            for (i = 0; i < length; i++) {
                item = domItems.children[i];
                $(item).removeClass('active');
            }
            for (i = 0; i < length; i++) {
                if (that.menubar().items(i).name() === context) {
                    item = domItems.children[i];
                    $(item).addClass('active');
                }
            }
        };
    });

    Designer.on('render', function() {
        this.menubar().render();
        this.toolbar().render();
        this.server().start();
    });

    Designer.on('clear', function() {
        this.refresh();
    });

    Designer.on('context', function(val) {
        this.workspace().render();
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
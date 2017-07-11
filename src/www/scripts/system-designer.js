/* 
 * System Designer
 * 
 * https://designfirst.io/systemdesigner/
 *
 * Copyright 2017 Erwan Carriou
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

runtime.on('ready', function ready() {

    var system = this.system('design');

    // MenuBar
    var MenuBar = this.require('MenuBar');
    MenuBar.on('init', function init(conf) {
        var menuHeader = [],
            menuItems = [],
            menuActions = [],
            menuSearch = [],
            self = this;

        // menu header
        menuHeader = this.require('db').collections().MenuHeader.find({
            "type": "designer"
        });
        this.header(this.require(menuHeader[0]._id));

        // menu items
        menuItems = this.require('db').collections().MenuItem.find({
            "type": "designer"
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
            "type": "designer"
        });
        /*
                menuSearch = this.require('db').collections().MenuSearch.find({
                    "type": "designer"
                })
                menuActions = menuActions.concat(menuSearch);
        */

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

    MenuBar.on('render', function render() {
        var length = 0,
            i = 0,
            item = null,
            domHeader = document.getElementById('designer-menubar-header'),
            domItems = document.getElementById('designer-menubar-items'),
            domAction = document.getElementById('designer-menubar-actions'),
            self = this,
            arr = window.location.href.split('#'),
            params = window.location.href.split('?messages='),
            messages = [],
            context = 'system',
            space = '',
            designer = this.require('designer');

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
            item.addEventListener('click', function click() {
                this.click();
            }.bind(self.items(i)));
        }

        // actions
        this.actions().forEach(function (action) {
            domAction.insertAdjacentHTML('afterbegin', '<li>' + action.html().source() + '</>');
        });

        // focus on first element
        // or restore the context
        if (arr.length > 2 && arr[2].length !== 0) {
            context = arr[2];
            context = context.split('?')[0];
        }
        if (arr.length > 3) {
            space = arr[3];
            space = space.split('?')[0];
        }
        if (arr.length > 4) {
            designer.state().component(arr[4].split('?')[0]);
        }

        for (i = 0; i < length; i++) {
            if (this.items(i).name() === context) {
                item = domItems.children[i];
                $(item).addClass('active');
            }
        }
        if (space) {
            designer.space(space);
        }
        designer.context(context);

        var that = this;
        $('#designer-menu-action-search').on('keyup', function keyup(event) {
            var value = $('#designer-menu-action-search').val();
            that.designer().filter(value);
        });

        designer.updateRouter();

        // run messages
        if (params[1]) {
            messages = JSON.parse(decodeURIComponent(params[1]));
            designer.messages(messages);
        }
    });

    // ToolBar
    var ToolBar = this.require('ToolBar');
    ToolBar.on('init', function init(conf) {
        var toolBarItems = [],
            self = this;

        // items
        toolBarItems = this.require('db').collections().ToolBarItem.find({
            "type": "designer"
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

    ToolBar.on('render', function render() {
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
            item.addEventListener('click', function (e) {
                if (e.detail !== 2) {
                    this.click();
                }
            }.bind(self.items(i)));
        }
    });

    // Spaces
    var Spaces = this.require('Spaces');
    Spaces.on('init', function init(conf) {
    });

    Spaces.on('clear', function clear() {
        this.require('designer').space('');
        $('#designer-spaces-items').empty();
    });

    Spaces.on('render', function render() {
        var item = null,
            system = this.designer().system(),
            SpaceItem = this.require('SpaceItem'),
            spaceItem = null,
            space = '',
            id = '',
            domItems = document.getElementById('designer-spaces-items'),
            systemdomItems = document.getElementById('designer-spaces-system-items'),
            componentdomItems = document.getElementById('designer-spaces-components-items'),
            self = this,
            name = '',
            callback = null,
            modelsName = [],
            showComponents = false,
            modelName = '',
            componentId = '';

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

        function _findModel(compId, components) {
            var result = '',
                modelName = '';

            for (modelName in components) {
                if (typeof components[modelName][compId] !== 'undefined') {
                    result = modelName;
                    break;
                }
            }
            return result;
        }

        $('#designer-spaces-help').empty();

        // update header and help
        switch (this.designer().context()) {
            case 'system':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Systems';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-system.html').source());
                break;
            case 'schemas':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Schemas';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-schemas.html').source());
                break;
            case 'models':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Models';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-models.html').source());
                break;
            case 'types':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Types';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-types.html').source());
                break;
            case 'behaviors':
                $('#designer-spaces-spaces-system').show();
                $('#designer-spaces-spaces-components').show();
                document.getElementById('designer-spaces-type').innerHTML = 'Models';
                document.getElementById('designer-spaces-system-header').innerHTML = 'System';
                document.getElementById('designer-spaces-components-header').innerHTML = 'Components';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-behaviors.html').source());
                break;
            case 'components':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Models';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-components.html').source());
                break;
            case 'logs':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Logs';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-logs.html').source());
                break;
            default:
                break;
        }

        // update spaces
        // clear
        $('#designer-spaces-items').empty();
        $('#designer-spaces-system-items').empty();
        $('#designer-spaces-components-items').empty();
        if (system) {
            switch (this.designer().context()) {

                case 'system':
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items                   
                    var systems = this.require('storage').get('system-designer-systems'),
                        systemIds = [],
                        length = 0,
                        i = 0;

                    if (systems) {
                        systemIds = systems.systems;
                    }
                    length = systemIds.length;

                    for (i = 0; i < length; i++) {
                        system = this.require('storage').get(systemIds[i]);

                        spaceItem = new SpaceItem({
                            'name': system.name,
                            'uuid': system._id
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() > b.name()) {
                            result = 1;
                        }
                        if (a.name() < b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#' + item.uuid() + '#system#' + item.name() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
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

                    this.items().forEach(function (item) {
                        item.on('click', function () {
                            var designer = this.require('designer'),
                                system = this.require('storage').get(this.uuid()),
                                System = this.require('System');
                            if (system) {
                                designer.system(new System(system));
                            }
                            // empty log
                            designer.logs().forEach(function (item) {
                                this.logs().pop();
                            }.bind(designer));
                        });
                    });

                    // focus
                    if (length > 0) {
                        if ($('#designer-space-' + this.require('designer').space()).length) {
                            $('#designer-space-' + this.require('designer').space()).addClass('active');
                        } else {
                            if (this.require('designer').system()) {
                                if ($('#designer-space-' + this.require('designer').system().name()).length) {
                                    $('#designer-space-' + this.require('designer').system().name()).addClass('active');
                                    this.require('designer').space(this.require('designer').system().name());
                                }
                            } else {
                                item = domItems.children[0];
                                $(item).addClass('active');
                                this.require('designer').space(this.items(0).name());
                            }
                        }
                    }

                    break;

                case 'schemas':
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items    
                    for (name in system.schemas()) {
                        spaceItem = new SpaceItem({
                            'name': system.schemas()[name]._name,
                            'uuid': name
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() > b.name()) {
                            result = 1;
                        }
                        if (a.name() < b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.uuid() + '" class=""><a href="#' + system.id() + '#schemas#' + item.uuid() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
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
                    // focus
                    if (length > 0) {
                        if ($('#designer-space-' + this.require('designer').space()).length) {
                            $('#designer-space-' + this.require('designer').space()).addClass('active');
                        } else {
                            item = domItems.children[0];
                            $(item).addClass('active');
                            this.require('designer').space(this.items(0).uuid());
                        }
                    } else {
                        this.require('designer').space('');
                    }
                    break;

                case 'models':
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items    
                    for (name in system.models()) {
                        spaceItem = new SpaceItem({
                            'name': system.models()[name]._name,
                            'uuid': name
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() > b.name()) {
                            result = 1;
                        }
                        if (a.name() < b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.uuid() + '" class=""><a href="#' + system.id() + '#models#' + item.uuid() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
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
                    // focus
                    if (length > 0) {
                        if ($('#designer-space-' + this.require('designer').space()).length) {
                            $('#designer-space-' + this.require('designer').space()).addClass('active');
                        } else {
                            item = domItems.children[0];
                            $(item).addClass('active');
                            this.require('designer').space(this.items(0).uuid());
                        }
                    } else {
                        this.require('designer').space('');
                    }
                    break;
                case 'types':
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items
                    for (name in system.types()) {
                        spaceItem = new SpaceItem({
                            'name': name
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() > b.name()) {
                            result = 1;
                        }
                        if (a.name() < b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#' + system.id() + '#types#' + item.name() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
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
                    // focus
                    if (length > 0) {
                        if ($('#designer-space-' + this.require('designer').space()).length) {
                            $('#designer-space-' + this.require('designer').space()).addClass('active');
                        } else {
                            item = domItems.children[0];
                            $(item).addClass('active');
                            this.require('designer').space(this.items(0).name());
                        }
                    }
                    break;

                case 'behaviors':
                    // models

                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items
                    for (name in system.models()) {
                        spaceItem = new SpaceItem({
                            'name': system.models()[name]._name,
                            'uuid': name
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() < b.name()) {
                            result = 1;
                        }
                        if (a.name() > b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().reverse();

                    this.items().forEach(function (item) {
                        modelsName.push(item.name());
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#' + system.id() + '#behaviors#' + item.name() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
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

                    // systems

                    this.systems().forEach(function (item) {
                        this.systems().pop();
                    }.bind(this));

                    // sort
                    this.systems().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() < b.name()) {
                            result = 1;
                        }
                        if (a.name() > b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    if (this.require('storage').get('system-designer-systems') && this.require('storage').get('system-designer-systems').systems.length) {
                        spaceItem = new SpaceItem({
                            'name': this.require('designer').system().name(),
                            'uuid': this.require('designer').system().id()
                        });
                        this.systems().push(spaceItem);
                    }

                    this.systems().reverse();

                    this.systems().forEach(function (item) {
                        systemdomItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#' + system.id() + '#behaviors#' + item.name() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
                        _removeActive();
                        $(this).addClass('active');
                    };
                    length = systemdomItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = systemdomItems.children[i];
                        item.addEventListener('click', callback);
                        item.addEventListener('click', function () {
                            this.click();
                        }.bind(self.systems(i)));
                    }

                    space = this.designer().space();
                    if (modelsName.indexOf(space) !== -1) {
                        showComponents = true;
                        modelName = space;
                    } else {
                        modelName = _findModel(space, this.designer().system().components());
                        if (modelName) {
                            showComponents = true;
                        }
                    }

                    if (showComponents) {

                        // components
                        this.components().forEach(function (item) {
                            this.components().pop();
                        }.bind(this));

                        // components
                        for (id in system.components()[modelName]) {
                            spaceItem = new SpaceItem({
                                'name': id,
                                'uuid': id
                            });
                            this.components().push(spaceItem);
                        }

                        // sort
                        this.components().sort(function (idA, idB) {
                            var a = runtime.require(idA),
                                b = runtime.require(idB);

                            var result = 0;
                            if (a.name() < b.name()) {
                                result = 1;
                            }
                            if (a.name() > b.name()) {
                                result = -1;
                            }
                            return result;
                        });

                        this.components().reverse();

                        this.components().forEach(function (item) {
                            modelsName.push(item.name());
                            componentdomItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name().replace(/\./g, '-') + '" class=""><a href="#' + system.id() + '#behaviors#' + item.name() + '">' + item.name() + '</a></li>');
                        });

                        // events
                        callback = function () {
                            _removeActive();
                            $(this).addClass('active');
                        };
                        length = componentdomItems.children.length;
                        for (i = 0; i < length; i++) {
                            item = componentdomItems.children[i];
                            item.addEventListener('click', callback);
                            item.addEventListener('click', function () {
                                this.click();
                            }.bind(self.components(i)));
                        }
                    }

                    // focus
                    if (this.items().length > 0) {
                        if ($('#designer-space-' + this.require('designer').space().replace(/\./g, '-')).length) {
                            $('#designer-space-' + this.require('designer').space().replace(/\./g, '-')).addClass('active');
                        } else {
                            item = systemdomItems.children[0];
                            $(item).addClass('active');
                            this.require('designer').space(this.systems(0).name());
                        }
                    } else {
                        item = systemdomItems.children[0];
                        $(item).addClass('active');
                        this.require('designer').space(this.systems(0).name());
                    }

                    break;

                case 'components':
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items
                    for (name in system.models()) {
                        spaceItem = new SpaceItem({
                            'name': system.models()[name]._name,
                            'uuid': name
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() > b.name()) {
                            result = 1;
                        }
                        if (a.name() < b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#' + system.id() + '#components#' + item.name() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
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
                    // focus
                    if (length > 0) {
                        if ($('#designer-space-' + this.require('designer').space()).length) {
                            $('#designer-space-' + this.require('designer').space()).addClass('active');
                        } else {
                            item = domItems.children[0];
                            $(item).addClass('active');
                            this.require('designer').space(this.items(0).name());
                        }
                    }

                    break;

                case 'logs':
                    domItems.insertAdjacentHTML('beforeend', '<li class="active"><a href="#' + system.id() + '#logs">Console output</a></li>');
                    break;
                default:
                    break;
            }
        }
    });

    // Workspace
    var Workspace = this.require('Workspace');
    Workspace.on('init', function init(conf) {
        var that = this;

        $('html')
            .on('dragenter dragover', false)
            .on('drop', function (e) {

                e.stopPropagation();
                e.preventDefault();
                var files = e.originalEvent.dataTransfer.files;
                var reader = new FileReader();
                var json = '';
                reader.onload = function (event) {
                    json += event.target.result;
                };
                reader.onloadend = function () {
                    var sys = JSON.parse(json);

                    var DialogDropFile = that.require('DialogDropFile');

                    if (!that.require('designer').system()) {
                        DialogDropFile = new DialogDropFile({
                            'title': 'A system has been found',
                            'message': 'You can import the system.'
                        });
                    } else {
                        DialogDropFile = new DialogDropFile({
                            'title': 'A system has been found',
                            'message': 'You can import the system or compose it with the current system.'
                        });
                    }

                    DialogDropFile.data(sys);
                    DialogDropFile.show();
                };
                if (files[0]) {
                    reader.readAsText(files[0], "UTF-8");
                }

            });
    });

    Workspace.on('create', function create() {
        var id = '',
            Dialog = null,
            dialog = null,
            system = this.require('designer').system();

        function _getModelId(name) {
            var result = '',
                id = '';

            for (id in designer.system().models()) {
                if (designer.system().models()[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        function _getSchemaDef(name) {
            var result = '',
                id = '';

            for (id in designer.system().schemas()) {
                if (designer.system().schemas()[id]._name === name) {
                    result = designer.system().schemas()[id];
                    break;
                }
            }
            return result;
        }

        switch (this.designer().context()) {
            case 'system':
                Dialog = this.require('DialogSystemCreation');
                dialog = new Dialog({
                    'title': 'Create a new system',
                });
                dialog.show();
                dialog.on('ok', function () {
                    var designer = this.require('designer'),
                        name = null,
                        uuid = '',
                        mainUuid = '',
                        system = {},
                        System = this.require('System'),
                        ModelSystem = null,
                        modelSystem = null;

                    function canCreate(name) {
                        var systems = runtime.require('storage').get('system-designer-systems'),
                            systemIds = [],
                            regExp = /[\#\&\(\)\[\]\'\"\*\,\;\:\%]/i,
                            i = 0,
                            result = true;

                        if (systems) {
                            systemIds = systems.systems;
                        }
                        length = systemIds.length;

                        for (i = 0; i < length; i++) {
                            system = runtime.require('storage').get(systemIds[i]);
                            if (system.name === name) {
                                result = false;
                                break;
                            }
                        }

                        result = result && (name.match(regExp) === null);

                        return result;
                    }

                    // get value
                    name = $('#designer-dialog-system-creation-name').val();

                    // clean
                    name = name.trim();
                    name = name.replace(/ /gi, '-');

                    if (name && canCreate(name)) {

                        uuid = designer.generateId();
                        mainUuid = designer.generateId();

                        // set system
                        system = {
                            "name": name,
                            "master": true,
                            "subsystem": false,
                            "version": "0.0.1",
                            "description": "",
                            "schemas": {},
                            "models": {},
                            "behaviors": {},
                            "types": {},
                            "components": {},
                            "_id": uuid
                        };

                        // add main method
                        system.behaviors[mainUuid] = {
                            "_id": mainUuid,
                            "component": uuid,
                            "state": "start",
                            "action": "function start() { \n\t\n}",
                            "useCoreAPI": false,
                            "core": false
                        };

                        // add (TODO improve)
                        if (designer.system()) {
                            designer.system().destroy();
                        }

                        designer.system(new System(system));

                        ModelSystem = this.require('ModelSystem');
                        modelSystem = new ModelSystem({
                            'title': name
                        });
                        modelSystem.uuid = uuid;
                        modelSystem.document(JSON.parse(JSON.stringify(system)));
                        modelSystem.content(JSON.stringify(system));

                        designer.save();

                        this.hide();

                        designer.space(name);
                        designer.spaces().render();
                        designer.workspace().refresh();

                        this.require('message').success('System created. You can now begin to create schemas.');
                    }
                });
                break;
            case 'schemas':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogSchemaCreation');
                    dialog = new Dialog({
                        'title': 'Create a new schema',
                    });
                    dialog.show();
                    dialog.on('ok', function () {
                        var designer = this.require('designer'),
                            name = null,
                            schema = {},
                            schemas = {},
                            ModelSchema = null,
                            modelSchema = null;

                        function canCreate(name) {
                            var result = true,
                                regExp = /[\#\&\(\)\[\]\'\"\*\,\;\:\%]/i,
                                id = '';

                            for (id in runtime.require('designer').system().schemas()) {
                                if (runtime.require('designer').system().schemas()[id]._name === name) {
                                    result = false;
                                    break;
                                }
                            }

                            if (runtime.require('designer').system().name() === name) {
                                result = false;
                            }

                            result = result && (name.match(regExp) === null);

                            return result;
                        }

                        // get value
                        name = $('#designer-dialog-schema-creation-name').val();

                        // clean
                        name = name.trim();
                        name = name.replace(/ /gi, '_');

                        if (name && canCreate(name)) {

                            id = designer.generateId().toString();

                            // set schema
                            schema = {
                                "_id": id,
                                "_name": name,
                                "_inherit": ["RuntimeComponent"]
                            };

                            schemas = designer.system().schemas();
                            schemas[id] = schema;
                            designer.system().schemas(schemas);

                            ModelSchema = this.require('ModelSchema');
                            modelSchema = new ModelSchema({
                                'title': name
                            });

                            modelSchema.document(JSON.parse(JSON.stringify(schema)));
                            modelSchema.content(JSON.stringify(schema));
                            modelSchema.uuid(id);

                            designer.save();

                            designer.createModel(schema);

                            this.require('channel').$designerCreateSchema(name, schema);

                            this.hide();

                            designer.space(id);
                            designer.spaces().render();
                            designer.workspace().refresh();

                            designer.updateRouter();

                            this.require('message').success('Schema created. A model has been also generated.');
                        }
                    });
                }
                break;
            case 'models':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogModelCreation');
                    dialog = new Dialog({
                        'title': 'Create a new model',
                    });
                    dialog.show();
                    dialog.on('ok', function () {
                        this.hide();
                    });
                }
                break;
            case 'types':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogTypeCreation');
                    dialog = new Dialog({
                        'title': 'Create a new type',
                    });
                    dialog.show();
                    dialog.on('ok', function () {
                        var designer = this.require('designer'),
                            name = null,
                            isEnum = false,
                            type = {},
                            types = designer.system().types(),
                            ModelType = null,
                            modelType = null,
                            id = '';

                        // get value
                        name = $('#designer-dialog-type-creation-name').val();
                        isEnum = $('#designer-dialog-type-creation-isEnum')[0].checked;

                        // clean
                        name = name.trim();
                        name = name.replace(/ /gi, '_');

                        if (name) {

                            id = designer.generateId().toString();

                            // set system
                            if (isEnum) {
                                type = {
                                    "_id": id,
                                    "name": name,
                                    "type": "any",
                                    "value": ["value1", "value2"]
                                };
                            } else {
                                type = {
                                    "_id": id,
                                    "name": name,
                                    "type": "object",
                                    "schema": {
                                        "property1": {
                                            "type": "any",
                                            "mandatory": false,
                                            "default": ""
                                        },
                                        "property2": {
                                            "type": "any",
                                            "mandatory": false,
                                            "default": ""
                                        }
                                    }
                                };
                            }

                            types[name] = type;
                            designer.system().types(types);

                            ModelType = this.require('ModelType');
                            modelType = new ModelType({
                                'title': name
                            });
                            modelType.uuid = name;
                            modelType.document(JSON.parse(JSON.stringify(type)));
                            modelType.content(JSON.stringify(type));

                            designer.save();

                            this.require('channel').$designerCreateType(name, type);

                            this.hide();

                            designer.space(name);
                            designer.spaces().render();
                            designer.workspace().refresh();

                            this.require('message').success('Type created. You can use it in your model.');
                        }
                    });
                }
                break;
            case 'components':
                if (system && Object.keys(system).length) {
                    var designer = this.require('designer'),
                        schemas = designer.system().schemas(),
                        models = designer.system().models(),
                        components = designer.system().components(),
                        component = {},
                        ModelComponent = null,
                        modelComponent = null,
                        modelId = '',
                        modelName = '',
                        schemaName = '',
                        uuid = '',
                        modelDef = null,
                        schemaDef = null;

                    // get value
                    modelId = _getModelId(designer.space());
                    modelName = designer.space();
                    schemaDef = designer.getGeneratedSchema(modelName);

                    if (typeof models[modelName] === 'undefined') {

                        uuid = designer.generateId();

                        // set component
                        component = {
                            "_id": uuid,
                        };

                        // set properties default values
                        var propertyNames = [];
                        for (var att in schemaDef) {
                            if (schemaDef[att] === 'property') {
                                propertyNames.push(att);
                            }
                            if (schemaDef[att] === 'link') {
                                propertyNames.push(att);
                            }
                            if (schemaDef[att] === 'collection') {
                                propertyNames.push(att);
                            }
                        }
                        propertyNames.sort();
                        modelDef = designer.getGeneratedModel(modelName);

                        length = propertyNames.length;
                        for (var i = 0; i < length; i++) {
                            if (modelDef && modelDef[propertyNames[i]]) {
                                component[propertyNames[i]] = modelDef[propertyNames[i]].default;
                            }
                        }

                        if (!components[modelName]) {
                            components[modelName] = {};
                        }
                        components[modelName][uuid] = component;

                        designer.system().components(components);

                        ModelComponent = this.require('ModelComponent');

                        modelComponent = new ModelComponent({
                            title: uuid
                        });
                        modelComponent.model(modelName);
                        modelComponent.uuid(uuid.toString());
                        modelComponent.document(JSON.parse(JSON.stringify(component)));
                        modelComponent.content(JSON.stringify(component));

                        modelComponent.render();

                        // little effect
                        $('#designer-component-' + uuid.toString()).hide();
                        $('#designer-component-' + uuid.toString()).fadeIn(1000);

                        designer.save();

                        this.require('channel').$designerCreateComponent(modelName, component);
                    } else {
                        this.require('message').warning('There is no schema. Create a schema before creating a component.');
                    }
                }
                break;
            case 'behaviors':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogBehaviorCreation');
                    dialog = new Dialog({
                        'title': 'Create a new behavior',
                    });
                    dialog.show();
                    dialog.on('ok', function ok() {
                        var designer = this.require('designer'),
                            schemas = designer.system().schemas(),
                            models = designer.system().models(),
                            modelDef = null,
                            behaviors = designer.system().behaviors(),
                            message = this.require('message'),
                            schemaId = '',
                            modelId = '',
                            methodDef = null,
                            behavior = {},
                            result = '',
                            body = '\t\n',
                            ModelBehavior = null,
                            modelBehavior = null,
                            model = '',
                            state = '',
                            uuid = '',
                            params = '',
                            canCreate = true,
                            i = 0,
                            length = 0,
                            componentId = '';

                        function _getSchemaId(name) {
                            var result = '',
                                id = '';

                            for (id in designer.system().schemas()) {
                                if (designer.system().schemas()[id]._name === name) {
                                    result = id;
                                    break;
                                }
                            }
                            return result;
                        }

                        function _getModelId(name) {
                            var result = '',
                                id = '';

                            for (id in designer.system().models()) {
                                if (designer.system().models()[id]._name === name) {
                                    result = id;
                                    break;
                                }
                            }
                            return result;
                        }

                        function _existBehavior(state, space, model) {
                            var result = false;

                            if (_isModel(space)) {
                                for (id in designer.system().behaviors()) {
                                    if (designer.system().behaviors()[id].state === state && designer.system().behaviors()[id].component === model) {
                                        result = true;
                                        break;
                                    }
                                }
                            } else {
                                for (id in designer.system().behaviors()) {
                                    if (designer.system().behaviors()[id].state === state && designer.system().behaviors()[id].component === space) {
                                        result = true;
                                        break;
                                    }
                                }
                            }
                            return result;
                        }

                        function _findSchemaId(compId) {
                            var result = compId,
                                modelName = '';

                            for (modelName in designer.system().components()) {
                                if (typeof designer.system().components()[modelName][compId] !== 'undefined') {
                                    result = modelName;
                                    break;
                                }
                            }
                            return result;
                        }

                        function _isModel(name) {
                            var result = false;

                            if (Object.keys(designer.system().components()).indexOf(name) !== -1) {
                                result = true;
                            }

                            return result;
                        }

                        // get value
                        model = _findSchemaId(designer.space());
                        state = $('#designer-dialog-behavior-creation-state').val();
                        componentId = designer.space();

                        if (model && state) {

                            uuid = designer.generateId();

                            if (model !== designer.system().name()) {

                                schemaId = _getSchemaId(model);
                                modelId = _getModelId(model);
                                modelDef = designer.getGeneratedModel(model);

                                // params
                                if (modelDef[state]) {
                                    methodDef = modelDef[state].params;
                                }
                                if (methodDef && methodDef.length) {
                                    length = methodDef.length;
                                    for (i = 0; i < length; i++) {
                                        if (i === 0) {
                                            params = methodDef[i].name;
                                        } else {
                                            params = params + ', ' + methodDef[i].name;
                                        }
                                    }
                                }

                                if (schemas[schemaId][state] === 'property' || schemas[schemaId][state] === 'link') {
                                    params = 'value';
                                }

                                if (schemas[schemaId][state] === 'collection') {
                                    params = 'value, type';
                                }

                                if (schemas[schemaId][state] === 'method') {
                                    if (_existBehavior(state, designer.space(), model)) {
                                        canCreate = false;
                                    }
                                }

                                if (state === 'init') {
                                    params = 'conf';
                                    if (_existBehavior(state, designer.space(), model)) {
                                        canCreate = false;
                                    }
                                }

                                if (state === 'destroy') {
                                    if (_existBehavior(state, designer.space(), model)) {
                                        canCreate = false;
                                    }
                                }

                                if (state === 'error') {
                                    params = 'data';
                                    if (_existBehavior(state, designer.space(), model)) {
                                        canCreate = false;
                                    }
                                }

                                // body
                                if (modelDef[state]) {
                                    result = modelDef[state].result;
                                }
                                if (result) {
                                    switch (result) {
                                        case 'string':
                                            body = "\tvar result = '';\n\treturn result;\n";
                                            break;
                                        case 'array':
                                            body = "\tvar result = [];\n\treturn result;\n";
                                            break;
                                        case 'number':
                                            body = "\tvar result = 0;\n\treturn result;\n";
                                            break;
                                        case 'object':
                                            body = "\tvar result = {};\n\treturn result;\n";
                                            break;
                                        default:
                                            body = "\tvar result = {};\n\treturn result;\n";
                                            break;
                                    }
                                }
                            } else {
                                componentId = designer.system().id();
                                if (_existBehavior(state, componentId, model)) {
                                    canCreate = false;
                                }
                            }

                            if (canCreate) {
                                // set model
                                if (state !== 'destroy') {
                                    behavior = {
                                        "_id": uuid,
                                        "component": componentId,
                                        "state": state,
                                        "action": "function " + state + "(" + params + ") { \n" + body + "}",
                                        "useCoreAPI": false,
                                        "core": false
                                    };
                                } else {
                                    behavior = {
                                        "_id": uuid,
                                        "component": componentId,
                                        "state": "destroy",
                                        "action": "function destroy() { \n\n  // destroy the component\n  $component.destroy(this.id());\n}",
                                        "useCoreAPI": true,
                                        "core": false
                                    };
                                }

                                behaviors[uuid] = behavior;
                                designer.system().behaviors(behaviors);

                                ModelBehavior = this.require('ModelBehavior');

                                modelBehavior = new ModelBehavior({
                                    'uuid': uuid
                                });

                                modelBehavior.title(state);
                                modelBehavior.document(behavior);
                                modelBehavior.content(JSON.parse(JSON.stringify(behavior.action)));

                                this.hide();
                                modelBehavior.render();

                                Prism.highlightAll();

                                // little effect
                                $('#designer-behavior-' + uuid.toString()).hide();
                                $('#designer-behavior-' + uuid.toString()).fadeIn(1000);

                                designer.save();

                                this.require('channel').$designerCreateBehavior(behavior);
                            } else {
                                this.hide();
                                message.warning('Can not create two behaviors for a method.');
                            }
                        }
                    });
                }
                break;
            default:
                break;
        }
    });

    Workspace.on('refresh', function refresh() {
        var ModelSystem = null,
            ModelSchema = null,
            ModelClass = null,
            modelSchema = null,
            ModelLog = null,
            sys = null,
            name = '',
            id = '',
            schemaId = '',
            modelclass = null,
            modellog = null,
            ModelType = null,
            type = null,
            ModelComponent = null,
            component = null,
            ModelBehavior = null,
            behavior = null,
            system = this.designer().system(),
            space = this.designer().space(),
            parentId = '',
            parentsId = [],
            parents = null,
            systems = null,
            systemIds = [],
            i = 0,
            length = 0,
            title = 0;

        function _getSchemaId(name) {
            var result = '',
                id = '';

            for (id in system.schemas()) {
                if (system.schemas()[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        function _getModelId(name) {
            var result = '',
                id = '';

            for (id in system.models()) {
                if (system.models()[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        if (system) {
            this.clear();

            window.scrollTo(0, 0);

            title = 'system ' + system.name();
            if (title !== document.title) {
                document.title = title;
            }

            switch (this.designer().context()) {
                case 'system':
                    systems = this.require('storage').get('system-designer-systems');

                    if (systems) {
                        systemIds = systems.systems;
                    }
                    length = systemIds.length;

                    for (i = 0; i < length; i++) {
                        system = this.require('storage').get(systemIds[i]);
                        if (system.name === space) {
                            ModelSystem = this.require('ModelSystem');
                            sys = new ModelSystem({
                                'title': system.name
                            });
                            sys.uuid(system._id);
                            sys.document(JSON.parse(JSON.stringify(system)));
                            sys.content(JSON.stringify(system));
                            sys.render();
                        }
                    }

                    if (space === '' && length > 0) {
                        this.require('message').warning('System not found.');
                    }

                    break;
                case 'schemas':
                    if (space) {
                        for (id in system.schemas()) {
                            if (system.schemas()[id]._id === space) {
                                ModelSchema = this.require('ModelSchema');

                                // create parent if any
                                parentsId = [];
                                if (system.schemas()[id]._inherit) {
                                    parents = system.schemas()[id]._inherit.slice();
                                    parents.reverse();
                                }
                                length = 0;
                                if (parents) {
                                    length = parents.length;
                                }

                                for (i = 0; i < length; i++) {

                                    parentId = _getSchemaId(parents[i]);

                                    modelSchema = new ModelSchema({
                                        'title': parents[i]
                                    });

                                    if (parents[i] === 'RuntimeComponent') {
                                        parentId = "111df11e2b19fde";

                                        var schemaRuntime = {
                                            "_id": "RuntimeComponent",
                                            "_name": "RuntimeComponent",
                                            "_core": true,
                                            "classInfo": "property",
                                            "id": "property",
                                            "destroy": "method",
                                            "error": "event",
                                            "init": "method",
                                            "off": "method",
                                            "on": "method",
                                            "require": "method"
                                        };

                                        modelSchema.document(schemaRuntime);
                                        modelSchema.content(JSON.stringify(schemaRuntime));
                                        parentsId.push(parentId);
                                        modelSchema.uuid(parentId);
                                    } else {
                                        if (system.schemas()[_getSchemaId(parents[i])]) {
                                            modelSchema.document(JSON.parse(JSON.stringify(system.schemas()[_getSchemaId(parents[i])])));
                                            modelSchema.content(JSON.stringify(system.schemas()[_getSchemaId(parents[i])]));
                                            parentsId.push(_getSchemaId(parents[i]));
                                            modelSchema.uuid(_getSchemaId(parents[i]));
                                        } else {
                                            parentsId.push(parents[i]);
                                            modelSchema.uuid(parents[i]);
                                        }
                                    }
                                    modelSchema.render();
                                }

                                modelSchema = new ModelSchema({
                                    'title': system.schemas()[id]._name
                                });
                                modelSchema.uuid(id);
                                modelSchema.document(JSON.parse(JSON.stringify(system.schemas()[id])));
                                modelSchema.content(JSON.stringify(system.schemas()[id]));
                                modelSchema.editable(true);
                                modelSchema.render();

                                length = parentsId.length;
                                for (i = 0; i < length; i++) {
                                    this.designer().linkModel(id, parentsId[i]);
                                }
                            }
                        }
                    }
                    break;
                case 'models':
                    if (space) {
                        for (id in system.models()) {
                            if (system.models()[id]._id === space) {
                                ModelClass = this.require('ModelClass');

                                // create parent if any
                                // parents are search from the schema
                                schemaId = _getSchemaId(system.models()[id]._name);
                                parentsId = [];
                                if (schemaId && system.schemas()[schemaId]._inherit) {
                                    parents = system.schemas()[schemaId]._inherit.slice();
                                    parents.reverse();
                                }
                                length = 0;
                                if (parents) {
                                    length = parents.length;
                                }

                                for (i = 0; i < length; i++) {

                                    parentId = _getSchemaId(parents[i]);

                                    modelclass = new ModelClass({
                                        'title': parents[i]
                                    });

                                    if (parents[i] === 'RuntimeComponent') {
                                        parentId = '123751cb591de26';

                                        var modelRuntime = {
                                            "_name": "RuntimeComponent",
                                            "_core": true,
                                            "classInfo": {
                                                "type": "@RuntimeClassInfo",
                                                "readOnly": false,
                                                "mandatory": false,
                                                "default": {}
                                            },
                                            "id": {
                                                "type": "string",
                                                "readOnly": true,
                                                "mandatory": false,
                                                "default": ""
                                            },
                                            "destroy": {
                                                "params": []
                                            },
                                            "error": {
                                                "params": [{
                                                    "name": "data",
                                                    "type": "errorParam"
                                                }
                                                ]
                                            },
                                            "init": {
                                                "params": [{
                                                    "name": "conf",
                                                    "type": "object"
                                                }
                                                ]
                                            },
                                            "off": {
                                                "params": [{
                                                    "name": "state",
                                                    "type": "string"
                                                },
                                                {
                                                    "name": "behaviorId",
                                                    "type": "string",
                                                    "mandatory": false
                                                }
                                                ]
                                            },
                                            "on": {
                                                "params": [{
                                                    "name": "state",
                                                    "type": "string"
                                                },
                                                {
                                                    "name": "handler",
                                                    "type": "function"
                                                },
                                                {
                                                    "name": "useCoreAPI",
                                                    "type": "boolean",
                                                    "mandatory": false
                                                },
                                                {
                                                    "name": "isCore",
                                                    "type": "boolean",
                                                    "mandatory": false
                                                }
                                                ],
                                                "result": "string"
                                            },
                                            "require": {
                                                "params": [{
                                                    "name": "id",
                                                    "type": "string"
                                                }],
                                                "result": "RuntimeComponent"
                                            }
                                        };

                                        modelclass.document(modelRuntime);
                                        modelclass.content(JSON.stringify(modelRuntime));
                                        parentsId.push(parentId);
                                        modelclass.uuid(parentId);
                                    } else {
                                        if (system.models()[_getModelId(parents[i])]) {
                                            modelclass.document(JSON.parse(JSON.stringify(system.models()[_getModelId(parents[i])])));
                                            modelclass.content(JSON.stringify(system.models()[_getModelId(parents[i])]));
                                            parentsId.push(_getModelId(parents[i]));
                                            modelclass.uuid(_getModelId(parents[i]));
                                        } else {
                                            parentsId.push(parents[i]);
                                            modelclass.uuid(parentId);
                                        }
                                    }
                                    modelclass.render();
                                }

                                modelclass = new ModelClass({
                                    'title': system.models()[id]._name
                                });
                                modelclass.uuid(id);
                                modelclass.document(JSON.parse(JSON.stringify(system.models()[id])));
                                modelclass.content(JSON.stringify(system.models()[id]));
                                modelclass.editable(true);
                                modelclass.render();

                                length = parentsId.length;
                                for (i = 0; i < length; i++) {
                                    this.designer().linkModel(id, parentsId[i]);
                                }
                            }
                        }
                    }
                    break;
                case 'types':
                    if (space) {
                        for (name in system.types())
                            if (system.types()[name].name === space) {
                                ModelType = this.require('ModelType');
                                type = new ModelType({
                                    'title': name
                                });
                                type.uuid(name);
                                type.document(JSON.parse(JSON.stringify(system.types()[space])));
                                type.content(JSON.stringify(system.types()[space]));
                                type.render();
                            }
                    }
                    break;
                case 'components':
                    if (space) {
                        if (this.require('designer').state().component()) {
                            name = this.require('designer').state().component();
                            if (system.components()[space][name]) {
                                ModelComponent = this.require('ModelComponent');
                                component = new ModelComponent({
                                    'title': name
                                });
                                component.uuid(name);
                                component.model(space);
                                component.document(JSON.parse(JSON.stringify(system.components()[space][name])));
                                component.content(JSON.stringify(system.components()[space][name]));
                                component.render();
                            }
                        } else {
                            for (name in system.components()[space]) {
                                ModelComponent = this.require('ModelComponent');
                                component = new ModelComponent({
                                    'title': name
                                });
                                component.uuid(name);
                                component.model(space);
                                component.document(JSON.parse(JSON.stringify(system.components()[space][name])));
                                component.content(JSON.stringify(system.components()[space][name]));
                                component.render();
                            }
                        }
                    }
                    break;
                case 'behaviors':
                    if (space) {
                        name = this.require('designer').state().component();
                        for (id in system.behaviors()) {
                            if (system.behaviors()[id].component === space) {
                                if ((name && system.behaviors()[id].state === name) || name === '') {
                                    ModelBehavior = this.require('ModelBehavior');

                                    behavior = new ModelBehavior({
                                        'uuid': system.behaviors()[id]._id
                                    });
                                    behavior.title(system.behaviors()[id].state);
                                    behavior.document(system.behaviors()[id]);
                                    behavior.content(JSON.parse(JSON.stringify(system.behaviors()[id].action)));
                                    behavior.render();
                                }
                            }

                            // system
                            if (space === this.require('designer').system().name()) {
                                if (system.behaviors()[id].component === this.require('designer').system().id()) {
                                    ModelBehavior = this.require('ModelBehavior');

                                    behavior = new ModelBehavior({
                                        'uuid': system.behaviors()[id]._id
                                    });
                                    behavior.title(system.behaviors()[id].state);
                                    behavior.document(system.behaviors()[id]);
                                    behavior.content(JSON.parse(JSON.stringify(system.behaviors()[id].action)));
                                    behavior.render();
                                }
                            }
                        }

                        Prism.highlightAll();
                    }
                    break;
                case 'logs':
                    ModelLog = this.require('ModelLog');

                    modelLog = new ModelLog();
                    modelLog.render();

                    break;
                default:
                    break;
            }
            // TODO IMPROVE REFRESH
            if (this.designer().filter()) {
                this.designer().filter(this.designer().filter());
            }
        } else {

            document.title = 'System Designer';

            systems = this.require('storage').get('system-designer-systems');
            if (systems && systems.systems && systems.systems.length) {
                this.require('message').warning('System not found.');
            }
        }
    });

    Workspace.on('clear', function clear() {
        $('#designer-workspace').empty();
        jsPlumb.ready(function () {
            jsPlumb.deleteEveryEndpoint();
        });
    });

    // Server
    var Server = this.require('Server');
    Server.on('start', function start() {
        var RuntimeChannel = null,
            channel = null;

        RuntimeChannel = this.require('RuntimeChannel');
        channel = new RuntimeChannel({
            '_id': 'channel'
        });

        channel.on('send', function send(message) {
            if (message.event.indexOf('$system') !== 0) {
                var config = this.require('storage').get('system-designer-config');
                // message for other windows
                this.require('storage').set('system-designer-message', message);

                // message for client uggug
                if (this.require('designer').debugWindow()) {
                    this.require('designer').debugWindow().postMessage(JSON.stringify(message), '*');
                }

                // message for server debug
                if (typeof config !== 'undefined' && typeof config.debugType !== 'undefined' && config.debugType === 'server' && config.urlServer) {
                    $.post(config.urlServer + ':8888/' + message.event, encodeURIComponent(JSON.stringify(message.data)));
                }
            }
        });

        channel.on('$appLogDebug', function $appLogDebug(message) {
            var log = '',
                Log = null;

            Log = this.require('Log');
            log = new Log({
                'type': 'debug',
                'log': message.replace('runtime:', '').replace(/\[[^\]]+\]/, '<strong>debug:</strong> ')
            });

            this.require('designer').logs().push(log);
            this.require('message').info(message.replace(/\[[^\]]+\]/, '<strong>runtime:</strong> '));
        });

        channel.on('$appLogInfo', function $appLogInfo(message) {
            var log = '',
                Log = null;

            Log = this.require('Log');
            log = new Log({
                'type': 'info',
                'log': message.replace('runtime:', '').replace(/\[[^\]]+\]/, '<strong>info:</strong> ')
            });

            this.require('designer').logs().push(log);
            this.require('message').info(message.replace(/\[[^\]]+\]/, '<strong>runtime:</strong> '));
        });

        channel.on('$appLogWarn', function $appLogWarn(message) {
            var log = '',
                Log = null;

            Log = this.require('Log');
            log = new Log({
                'type': 'warn',
                'log': message.replace('runtime:', '').replace(/\[[^\]]+\]/, '<strong>warning:</strong> ')
            });

            this.require('designer').logs().push(log);
            this.require('message').warning(message.replace(/\[[^\]]+\]/, '<strong>runtime:</strong> '));
        });

        channel.on('$appLogError', function $appLogError(message) {
            var log = '',
                Log = null;

            Log = this.require('Log');
            log = new Log({
                'type': 'error',
                'log': message.replace('runtime:', '').replace(/\[[^\]]+\]/, '<strong>error:</strong> ')
            });

            this.require('designer').logs().push(log);
            this.require('message').danger(message.replace(/\[[^\]]+\]/, '<strong>runtime:</strong> '));
        });

        channel.on('$editorUpdateType', function $editorUpdateType(id, type) {
            var designer = this.require('designer'),
                types = designer.system().types();

            types[id] = type;
            designer.system().types(types);

            designer.save();

            designer.space(type.name);
            designer.spaces().render();
            designer.workspace().refresh();
        });

        channel.on('$editorDeleteType', function $editorDeleteType(id) {
            var designer = this.require('designer'),
                types = designer.system().types(),
                dbTypes = [],
                type = null;

            dbTypes = this.require('db').collections().ModelType.find({
                'uuid': id
            });
            if (dbTypes.length) {
                type = this.require(dbTypes[0]._id);
                if (type) {
                    type.hide();
                    type.destroy();
                }
            }

            delete types[id];
            designer.system().types(types);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateSchemaName', function $editorUpdateSchemaName(name, id) {
            var designer = this.require('designer'),
                oldName = designer.system().schemas()[id]._name,
                models = designer.system().models(),
                behaviors = designer.system().behaviors(),
                components = designer.system().components(),
                modelId = '',
                behaviorId = '',
                behavior = null;

            function _getModelId(name, models) {
                var result = '',
                    id = '';

                for (id in models) {
                    if (models[id]._name === name) {
                        result = id;
                        break;
                    }
                }
                return result;
            }

            modelId = _getModelId(oldName, designer.system().models());

            // update model
            models[modelId]._name = name;
            designer.system().models(models);

            // update behaviors
            for (behaviorId in behaviors) {
                if (behaviors[behaviorId].component === oldName) {
                    behaviors[behaviorId].component = name;

                    designer.system().behaviors(behaviors);
                }
            }

            // components
            if (components[oldName]) {
                components[name] = JSON.parse(JSON.stringify(components[oldName]));
                delete components[oldName];

                designer.system().components(components);
            }

            designer.save();
        });

        channel.on('$editorUpdateSchema', function $editorUpdateSchema(id, schema) {
            var designer = this.require('designer'),
                schemas = designer.system().schemas(),
                models = null,
                model = null,
                modelId = '';

            jsPlumb.deleteEveryEndpoint();

            designer.syncModel(schema);
            schemas[id] = schema;
            designer.system().schemas(schemas);
            designer.save();

            // sync other components
            models = designer.system().models();
            for (modelId in models) {
                if (models[modelId]._name !== schema._name) {
                    model = models[modelId];
                    designer.syncComponent(model, true);
                }
            }

            designer.space(id);
            designer.spaces().render();
            designer.workspace().refresh();
        });

        channel.on('$designerDeleteSchema', function $designerDeleteSchema(id) {
            var designer = this.require('designer'),
                schemas = designer.system().schemas(),
                dbSchemas = [],
                schema = null;

            dbSchemas = this.require('db').collections().ModelSchema.find({
                'uuid': id
            });
            if (dbSchemas.length) {
                schema = this.require(dbSchemas[0]._id);
                if (schema) {
                    schema.hide();
                    schema.destroy();
                }
            }

            delete schemas[id];
            designer.system().schemas(schemas);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateSchemaId', function $editorUpdateSchemaId(oldId, newId) {
            var designer = this.require('designer'),
                schemas = designer.system().schemas(),
                dbSchemas = [],
                schema = null;

            schema = JSON.parse(JSON.stringify(schemas[oldId]));

            delete schemas[oldId];

            schema._id = newId;
            schemas[newId] = schema;
            designer.system().schemas(schemas);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateModel', function $editorUpdateModel(id, model) {
            var designer = this.require('designer'),
                models = designer.system().models();

            jsPlumb.deleteEveryEndpoint();

            models[id] = model;
            designer.system().models(models);

            designer.save();

            designer.syncBehavior(model);

            designer.space(id);
            designer.spaces().render();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateModelId', function $editorUpdateModelId(oldId, newId) {
            var designer = this.require('designer'),
                models = designer.system().models(),
                model = null;

            model = JSON.parse(JSON.stringify(models[oldId]));

            delete models[oldId];

            model._id = newId;
            models[newId] = model;

            designer.system().models(models);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateBehavior', function $editorUpdateBehavior(id, behavior) {
            var designer = this.require('designer'),
                behaviors = designer.system().behaviors();

            behaviors[id] = behavior;
            designer.system().behaviors(behaviors);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorDeleteBehavior', function $editorDeleteBehavior(id) {
            var designer = this.require('designer'),
                behaviors = designer.system().behaviors(),
                dbBehaviors = [],
                behavior = null;

            dbBehaviors = this.require('db').collections().ModelBehavior.find({
                'uuid': id
            });
            if (dbBehaviors.length) {
                behavior = this.require(dbBehaviors[0]._id);
                if (behavior) {
                    behavior.hide();
                    behavior.destroy();
                }
            }

            delete behaviors[id];
            designer.system().behaviors(behaviors);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateComponent', function $editorUpdateComponent(id, collection, component) {
            var designer = this.require('designer'),
                components = designer.system().components();

            components[collection][id] = component;
            designer.system().components(components);

            designer.save();

            designer.workspace().refresh();
        });

        channel.on('$editorDeleteComponent', function $editorDeleteComponent(id, collection) {
            var designer = this.require('designer'),
                components = designer.system().components(),
                models = [],
                model = null;

            models = this.require('db').collections().ModelComponent.find({
                'uuid': id
            });
            if (models.length) {
                model = this.require(models[0]._id);
                if (model) {
                    model.hide();
                    model.destroy();
                }
            }

            delete components[collection][id];
            designer.system().components(components);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateSystem', function $editorUpdateSystem(id, system) {
            var System = this.require('System'),
                sys = null,
                designer = this.require('designer');

            if (designer.system()) {
                designer.system().destroy();
            }
            sys = new System(system);
            designer.system(sys);
            designer.save();

            designer.space(system.name);
            designer.spaces().render();
            designer.workspace().refresh();
        });

        channel.on('$appLoadSystem', function $appLoadSystem(system) {
            var Dialog = null,
                dialog = null;

            if (system.name !== 'app-designer-testing') {

                Dialog = this.require('DialogImport');
                dialog = new Dialog({
                    'title': 'A system has been found',
                    'message': 'Do you want to import the system ?',
                    'data': system
                });
                dialog.show();

                dialog.on('ok', function () {
                    var System = this.require('System'),
                        sys = null,
                        designer = this.require('designer'),
                        message = this.require('message');

                    if (designer.system()) {
                        designer.system().destroy();
                    }
                    sys = new System(this.data());
                    designer.system(sys);

                    // empty log
                    designer.logs().forEach(function (item) {
                        this.logs().pop();
                    }.bind(designer));

                    designer.save();

                    designer.space(sys.name());
                    designer.spaces().render();
                    designer.workspace().refresh();

                    designer.updateRouter();

                    this.hide();
                    designer.save();

                    message.success('Importation of the system is done.');
                });
            }
        });

        channel.on('$runtimeCreateComponent', function $runtimeCreateComponent(collection, document) {
            var designer = this.require('designer'),
                components = designer.system().components();

            if (typeof components[collection] === 'undefined') {
                components[collection] = {};
            }

            delete document.classInfo;

            components[collection][document._id] = document;
            designer.system().components(components);

            designer.save();

            if (designer.context() === 'components') {
                designer.workspace().refresh();
            }
        });

        channel.on('$runtimeDeleteComponent', function $runtimeDeleteComponent(id, collection) {
            var designer = this.require('designer'),
                components = designer.system().components();

            if (typeof components[collection] !== 'undefined') {
                delete components[collection][id];
                designer.system().components(components);

                designer.save();

                if (designer.context() === 'components') {
                    designer.workspace().refresh();
                }
            }
        });

        channel.on('$runtimeUpdateComponent', function $runtimeUpdateComponent(id, collection, field, value) {
            var designer = this.require('designer'),
                components = designer.system().components();

            if (typeof components[collection] !== 'undefined' && components[collection][id] !== 'undefined') {
                components[collection][id][field] = value;
                designer.system().components(components);

                designer.save();

                if (designer.context() === 'components') {
                    designer.workspace().refresh();
                }
            }
        });

        window.addEventListener('message', function message(event) {
            var data = null,
                config = this.require('storage').get('system-designer-config');

            if (!config) {
                config = {};
            }
            data = JSON.parse(event.data);
            if (data &&
                typeof data.event !== 'undefined' &&
                typeof data.from !== 'undefined' &&
                typeof data.data !== 'undefined') {
                $db.RuntimeMessage.insert(data);
            }
        }.bind(channel), false);

        this.require('storage').on('changed', function changed(obj) {
            if (typeof obj['system-designer-message'] !== 'undefined') {
                if (this.require('designer').debugWindow()) {
                    this.require('designer').debugWindow().postMessage(JSON.stringify(obj['system-designer-message'].newValue), '*');
                }
                $db.RuntimeMessage.insert(obj['system-designer-message'].newValue);
            }
        }, true);

    }, true);

    // Designer
    var Designer = this.require('Designer');

    Designer.on('check', function check() {
        var Dialog = null,
            dialog = null;

        if (typeof SharedWorker === 'undefined') {
            Dialog = this.require('DialogCheck');
            dialog = new Dialog({
                'title': 'Hem... You will laugh',
                'message': 'Your browser has not all the features to use correctly System Designer.<br><br>Please use:<br><br>- Mozilla Firefox (recommended) or <br>- Google Chrome (desktop only).<br><br>'
            });
            dialog.show();
        }
    });

    Designer.on('logs', function logs(log, action) {
        var html = '';

        if (action === 'add' && this.context() === 'logs') {
            switch (log.type()) {
                case 'debug':
                    html = html + '<p class="text-muted">' + log.log() + '</p>';
                    break;
                case 'info':
                    html = html + '<p class="text-info">' + log.log() + '</p>';
                    break;
                case 'warn':
                    html = html + '<p class="text-warning">' + log.log() + '</p>';
                    break;
                case 'error':
                    html = html + '<p class="text-danger">' + log.log() + '</p>';
                    break;
                default:
                    break;
            }

            document.querySelector('#designer-loug-output').insertAdjacentHTML('afterbegin',
                html
            );
        }
    });

    Designer.on('welcome', function welcome() {
        var Dialog = null,
            dialog = null,
            config = null;

        config = this.require('storage').get('system-designer-config');
        if (!config) {
            config = {};
        }

        if (typeof config.welcomeScreen === 'undefined') {
            Dialog = this.require('DialogWelcome');
            dialog = new Dialog({
                'title': 'Welcome to System Designer'
            });
            dialog.show();
            dialog.on('ok', function ok() {
                var config = this.require('storage').get('system-designer-config');
                if (!config) {
                    config = {};
                }
                config.welcomeScreen = false;
                this.require('storage').set('system-designer-config', config);
                this.hide();
            });
        }
    });

    Designer.on('render', function render() {
        var MenuBar = null,
            menubar = null,
            ToolBar = null,
            toolbar = null,
            Workspace = null,
            workspace = null,
            DesignerState = null,
            designerState = null,
            Spaces = null,
            spaces = null,
            System = null,
            systemId = '',
            Server = null,
            server = null;

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

        // spaces
        Spaces = this.require('Spaces');
        spaces = new Spaces({
            designer: this
        });

        // server
        Server = this.require('Server');
        server = new Server({
            'designer': this
        });

        this.menubar(menubar);
        this.toolbar(toolbar);
        this.workspace(workspace);
        this.spaces(spaces);
        this.server(server);

        // message
        this.require('logger').on('warn', function warn(message) {
            this.require('message').warning(message);
        });
        this.require('logger').on('error', function error(message) {
            this.require('message').danger(message);
        });

        // state
        DesignerState = this.require('DesignerState');
        designerState = new DesignerState();

        this.state(designerState);

        // system
        System = this.require('System');
        var systems = this.require('storage').get('system-designer-systems');

        // case of url
        switch (true) {

            /* TODO check if need to remove
            case typeof document.location.search.split('?')[1] === 'string':
                var systemParam = JSON.parse(decodeURIComponent(document.location.search.split('?')[1].split('system=')[1]));
                var sys = null;
     
                sys = new System(systemParam);
                this.system(sys);
                this.save();
                this.refresh();
                this.require('message').success('the system \'' + systemParam.name + '\' was imported');
                break;
            */

            case window.location.href.split('#').length > 1 && window.location.href.split('#')[1].length > 0:
                systemId = window.location.href.split('#')[1];
                if (this.require('storage').get(systemId)) {
                    this.system(new System(this.require('storage').get(systemId)));
                    this.refresh();
                }
                break;

            default:
                if (systems && systems.systems && systems.systems.length && systems.systems[0].length) {
                    systems.systems.sort(function (sysA, sysB) {
                        var a = this.require('storage').get(sysA),
                            b = this.require('storage').get(sysB),
                            result = 0;

                        if (a.name > b.name) {
                            result = 1;
                        }
                        if (a.name < b.name) {
                            result = -1;
                        }
                        return result;
                    }.bind(this));

                    this.system(new System(this.require('storage').get(systems.systems[0])));
                }
                this.refresh();
                break;
        }
        //this.check();
        this.welcome();

        // add event when history change
        var that = this;
        window.onhashchange = function (e) {
            var arr = window.location.href.split('#'),
                system = '',
                collection = 'system',
                component = '',
                i = 0,
                length = 0,
                item = null,
                domItems = null;

            if (arr.length > 1) {
                system = arr[1];
                system = system.split('?')[0];
            }

            if (arr.length > 2) {
                collection = arr[2];
                collection = collection.split('?')[0];
            }

            if (arr.length > 3) {
                component = arr[3];
                component = component.split('?')[0];
            }

            if (arr.length > 4) {
                that.state().component(arr[4].split('?')[0]);
            } else {
                that.state().component('');
            }

            if (arr.length > 1 && system) {
                that.system(new System(that.require('storage').get(system)));
            } else {
                if (systems && systems.systems && systems.systems.length) {
                    that.system(new System(that.require('storage').get(systems.systems[0])));
                }
            }
            //if (component) {
            that.space(component);
            //}
            that.context(collection);

            // focus
            domItems = document.getElementById('designer-menubar-items');
            length = that.menubar().items().length;
            for (i = 0; i < length; i++) {
                item = domItems.children[i];
                $(item).removeClass('active');
            }
            for (i = 0; i < length; i++) {
                if (that.menubar().items(i).name() === collection) {
                    item = domItems.children[i];
                    $(item).addClass('active');
                }
            }

            that.updateRouter();
        };
        // resize event
        $(window).resize(function () {
            jsPlumb.repaintEverything();
        });

        this.menubar().render();
        this.toolbar().render();
        this.spaces().render();

        $(function () {
            $('[data-toggle="tooltip"]').tooltip({ 'container': 'body', delay: { 'show': 2000, 'hide': 100 }, trigger: 'hover' });
        });

        this.server().start();

        // run messages if any
        this.runMessages(this.messages());
        this.messages([]);
    });

    Designer.on('filter', function filter(val) {
        var result = [],
            collectionName = '';

        switch (this.context()) {
            case 'behaviors':
                collectionName = 'ModelBehavior';
                break;
            case 'schemas':
                collectionName = 'ModelSchema';
                break;
            case 'types':
                collectionName = 'ModelType';
                break;
            case 'models':
                collectionName = 'ModelClass';
                break;
            case 'components':
                collectionName = 'ModelComponent';
                break;
            case 'system':
                collectionName = 'ModelSystem';
                break;
            default:
                break;
        }

        var resultTemp = this.require('db').collections()[collectionName].find({});
        for (var index = 0; index < resultTemp.length; index++) {
            result.push(this.require(resultTemp[index]._id));
        }
        if (val.length > 0) {
            result.forEach(function (model) {
                if (model.content().toLowerCase().indexOf(val.toLowerCase()) === -1) {
                    model.hide();
                } else {
                    model.show();
                }
            });
        } else {
            result.forEach(function (model) {
                model.show();
            });
        }

        switch (this.context()) {
            case 'schemas':
            case 'models':
                jsPlumb.repaintEverything();
                break;
            default:
                break;
        }
    });

    Designer.on('context', function context(val) {
        jsPlumb.ready(function () {
            jsPlumb.deleteEveryEndpoint();
        });
        this.spaces().render();
        this.workspace().clear();
        this.workspace().refresh();
    });

    Designer.on('space', function space(val) {
        //jsPlumb.deleteEveryEndpoint();
        //this.workspace().refresh();
        if (this.context() === 'system') {
            this.updateRouter();
        }
    });

    Designer.on('updateRouter', function updateRouter() {
        var menubar = [],
            i = 0,
            length = 0,
            collection = '',
            href = '',
            context = '',
            space = '',
            schemaName = '',
            schemaId = '',
            modelName = '',
            modelId = '';

        function _getModelId(name, models) {
            var result = '',
                id = '';

            for (id in models) {
                if (models[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        function _getSchemaId(name, schemas) {
            var result = '',
                id = '';

            for (id in schemas) {
                if (schemas[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        function _getModelName(id, models) {
            var result = '',
                modelId = '';

            for (modelId in models) {
                if (modelId === id) {
                    result = models[id]._name;
                    break;
                }
            }
            return result;
        }

        function _getSchemaName(id, schemas) {
            var result = '',
                schemaId = '';

            for (schemaId in schemas) {
                if (schemaId === id) {
                    result = schemas[id]._name;
                    break;
                }
            }
            return result;
        }

        function _getCollection(href) {
            var result = '';

            if (href.split('#').length === 2) {
                result = href.split('#')[1];
            }
            if (href.split('#').length > 2) {
                result = href.split('#')[2];
            }

            result = result.split('#')[0];
            result = result.trim();

            return result;
        }

        context = this.require('designer').context();
        space = this.require('designer').space();

        switch (context) {
            case 'schemas':
                if (this.require('designer').system()) {
                    if (space) {
                        schemaName = _getSchemaName(space, this.require('designer').system().schemas());
                        modelId = _getModelId(schemaName, this.require('designer').system().models());
                    }

                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '#' + this.require('designer').system().id() + '#' + collection;

                        if (collection === 'models' && modelId) {
                            menubar[i].href = menubar[i].href + '#' + modelId;
                        }
                        if (collection === 'components' && schemaName) {
                            menubar[i].href = menubar[i].href + '#' + schemaName;
                        }
                        if (collection === 'behaviors' && schemaName) {
                            menubar[i].href = menubar[i].href + '#' + schemaName;
                        }
                    }
                } else {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '##' + collection;
                    }
                }
                break;
            case 'models':
                if (this.require('designer').system()) {
                    if (space) {
                        modelName = _getModelName(space, this.require('designer').system().models());
                        schemaId = _getSchemaId(modelName, this.require('designer').system().schemas());
                    }

                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '#' + this.require('designer').system().id() + '#' + collection;

                        if (collection === 'schemas' && schemaId) {
                            menubar[i].href = menubar[i].href + '#' + schemaId;
                        }
                        if (collection === 'components' && modelName) {
                            menubar[i].href = menubar[i].href + '#' + modelName;
                        }
                        if (collection === 'behaviors' && modelName) {
                            menubar[i].href = menubar[i].href + '#' + modelName;
                        }
                    }
                } else {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '##' + collection;
                    }
                }
                break;
            case 'behaviors':
                if (this.require('designer').system()) {
                    if (space) {
                        modelId = _getModelId(space, this.require('designer').system().models());
                        schemaId = _getSchemaId(space, this.require('designer').system().schemas());
                        schemaName = _getSchemaName(schemaId, this.require('designer').system().schemas());
                    }

                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '#' + this.require('designer').system().id() + '#' + collection;

                        if (collection === 'schemas' && schemaId) {
                            menubar[i].href = menubar[i].href + '#' + schemaId;
                        }
                        if (collection === 'models' && modelId) {
                            menubar[i].href = menubar[i].href + '#' + modelId;
                        }
                        if (collection === 'components' && modelId) {
                            menubar[i].href = menubar[i].href + '#' + schemaName;
                        }
                    }
                } else {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '##' + collection;
                    }
                }
                break;
            case 'components':
                if (this.require('designer').system()) {
                    if (space) {
                        modelId = _getModelId(space, this.require('designer').system().models());
                        schemaId = _getSchemaId(space, this.require('designer').system().schemas());
                        schemaName = _getSchemaName(schemaId, this.require('designer').system().schemas());
                    }

                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '#' + this.require('designer').system().id() + '#' + collection;

                        if (collection === 'schemas' && schemaId) {
                            menubar[i].href = menubar[i].href + '#' + schemaId;
                        }
                        if (collection === 'models' && modelId) {
                            menubar[i].href = menubar[i].href + '#' + modelId;
                        }
                        if (collection === 'behaviors' && modelId) {
                            menubar[i].href = menubar[i].href + '#' + schemaName;
                        }
                    }
                } else {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '##' + collection;
                    }
                }
                break;
            default:
                if (this.require('designer').system()) {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '#' + this.require('designer').system().id() + '#' + collection;
                    }
                } else {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '##' + collection;
                    }
                }
                break;
        }

        // update spaces
        /*
        spaces = $('#designer-spaces-items > li > a');
        length = spaces.length;
        for (i = 0; i < length; i++) {
            href = spaces[i].href;
            collection = href.split('#')[href.split('#').length - 2];
            component = href.split('#')[href.split('#').length - 1];
            spaces[i].href = '#' + this.require('designer').system().id() + '#' + collection + '#' + component;
        }
        */
    });

    Designer.on('createBehavior', function createBehavior(type, model, state, def) {
        var body = '\t\n',
            behaviors = this.system().behaviors();

        function _canCreate(type, component, state, behaviors) {
            var behavior = {},
                id = '',
                exist = false,
                result = true;

            for (id in behaviors) {
                behavior = behaviors[id];
                if (behavior.component === component && behavior.state === state) {
                    exist = true;
                    break;
                }
            }
            if (exist) {
                result = false;
            }

            return result;
        }

        if (_canCreate(type, model, state, behaviors)) {
            uuid = this.generateId();

            // params
            methodDef = def.params;
            if (methodDef && methodDef.length) {
                length = methodDef.length;
                for (i = 0; i < length; i++) {
                    if (i === 0) {
                        params = methodDef[i].name;
                    } else {
                        params = params + ', ' + methodDef[i].name;
                    }
                }
            }

            // body
            result = def.result;
            if (result) {
                switch (result) {
                    case 'string':
                        body = "\tvar result = '';\n\treturn result;\n";
                        break;
                    case 'array':
                        body = "\tvar result = [];\n\treturn result;\n";
                        break;
                    case 'number':
                        body = "\tvar result = 0;\n\treturn result;\n";
                        break;
                    case 'object':
                        body = "\tvar result = {};\n\treturn result;\n";
                        break;
                    default:
                        body = "\tvar result = {};\n\treturn result;\n";
                        break;
                }
            }

            // set behavior
            behavior = {
                "_id": uuid,
                "component": model,
                "state": state,
                "action": "function " + state + "(" + params + ") { \n" + body + "}",
                "useCoreAPI": false,
                "core": false
            };

            behaviors[uuid] = behavior;

            this.system().behaviors(behaviors);
            this.save();

            this.require('channel').$designerCreateBehavior(behavior);
        }
    });

    Designer.on('deleteSchema', function deleteSchema(id) {
        var behaviorId = '',
            modelId = '',
            behavior = null,
            schemas = this.system().schemas(),
            models = this.system().models(),
            behaviors = this.system().behaviors(),
            components = this.system().components(),
            schemaName = schemas[id]._name;

        function _getModelId(name, models) {
            var result = '',
                id = '';

            for (id in models) {
                if (models[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        // components
        delete components[schemaName];
        this.system().components(components);

        // behaviors
        for (behaviorId in behaviors) {
            behavior = behaviors[behaviorId];
            if (behavior.component === schemaName) {
                delete behaviors[behaviorId];
                this.system().behaviors(behaviors);
            }
        }

        // model
        modelId = _getModelId(schemas[id]._name, models);
        if (modelId) {
            delete models[modelId];
            this.system().models(models);
        }

        // schema
        delete schemas[id];
        this.system().schemas(schemas);
    });

    Designer.on('createModel', function createModel(schema) {
        var schemas = this.system().schemas(),
            models = this.system().models(),
            components = this.system().components(),
            name = '',
            id = '',
            propName = '',
            component = null,
            behavior = null,
            model = null,
            oldSchema = null;

        id = this.generateId();

        model = {
            "_id": id,
            "_name": schema._name,
        };

        for (propName in schema) {
            if (propName.indexOf('_') !== 0) {
                switch (true) {
                    case schema[propName] === 'property':
                        model[propName] = {
                            "type": "any",
                            "readOnly": false,
                            "mandatory": false,
                            "default": ""
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                        }

                        break;
                    case schema[propName] === 'link':
                        model[propName] = {
                            "type": "@RuntimeComponent",
                            "readOnly": false,
                            "mandatory": false,
                            "default": ""
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                        }

                        break;
                    case schema[propName] === 'method':
                        model[propName] = {
                            "params": [
                                {
                                    "name": "param",
                                    "type": "any",
                                    "mandatory": false,
                                    "default": null
                                }
                            ],
                            "result": "any"
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                        }

                        break;
                    case schema[propName] === 'event':
                        model[propName] = {
                            "params": [
                                {
                                    "name": "param",
                                    "type": "any",
                                    "mandatory": false,
                                    "default": null
                                }
                            ]
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                        }

                        break;
                    case schema[propName] === 'collection':
                        model[propName] = {
                            "type": ["any"],
                            "readOnly": false,
                            "mandatory": false,
                            "default": []
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                        }

                        break;
                    default:
                        break;
                }
            }
        }

        models[id] = model;

        this.system().models(models);
        this.require('channel').$designerCreateModel(model._id, model);
        this.system().components(components);
        this.save();
    });

    Designer.on('syncComponent', function syncComponent(model, forceDelete) {
        var components = this.system().components(),
            name = '',
            componentId = '',
            propName = '',
            modelDef = null,
            component = null,
            createModel = false;

        name = model._name;

        schema = this.getGeneratedSchema(name);
        modelDef = this.getGeneratedModel(name);

        for (propName in schema) {
            switch (true) {
                case schema[propName] === 'property':
                    for (component in components[name]) {
                        if (typeof components[name][component][propName] === 'undefined') {
                            components[name][component][propName] = modelDef[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }
                    }
                    break;
                case schema[propName] === 'link':
                    for (component in components[name]) {
                        if (typeof components[name][component][propName] === 'undefined') {
                            components[name][component][propName] = modelDef[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }
                    }
                    break;
                case schema[propName] === 'collection':
                    for (component in components[name]) {
                        if (typeof components[name][component][propName] === 'undefined') {
                            components[name][component][propName] = modelDef[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }
                    }
                    break;
                default:
                    break;
            }
        }

        if (forceDelete) {
            for (componentId in components[name]) {
                for (propName in components[name][componentId]) {
                    if (typeof modelDef[propName] === 'undefined' && propName.indexOf('_') !== 0) {
                        delete components[name][componentId][propName];
                        this.require('channel').$designerDeleteComponent(componentId, name);
                        this.system().components(components);
                    }
                }
            }
        }

        this.save();
    });

    Designer.on('syncModel', function syncModel(schema) {
        var schemas = this.system().schemas(),
            models = this.system().models(),
            components = this.system().components(),
            behaviors = this.system().behaviors(),
            name = '',
            id = '',
            propName = '',
            component = null,
            behavior = null,
            model = null,
            oldSchema = null,
            createModel = false;

        name = schema._name;

        // search
        for (id in models) {
            if (models[id]._name === schema._name) {
                model = models[id];
            }
        }

        // case of no model
        if (!model) {
            createModel = true;
            model = {
                "_id": this.generateId(),
                "_name": name
            };
        }

        // previous schema
        oldSchema = schemas[schema._id];
        for (propName in schema) {
            if ((schema.hasOwnProperty(propName) &&
                oldSchema &&
                (typeof oldSchema[propName] === 'undefined' ||
                    oldSchema[propName] !== schema[propName])) ||
                createModel
            ) {
                switch (true) {
                    case schema[propName] === 'property':
                        model[propName] = {
                            "type": "any",
                            "readOnly": false,
                            "mandatory": false,
                            "default": ""
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }

                        break;
                    case schema[propName] === 'link':
                        model[propName] = {
                            "type": "@RuntimeComponent",
                            "readOnly": false,
                            "mandatory": false,
                            "default": ""
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }

                        break;
                    case schema[propName] === 'method':
                        if (typeof model[propName] === 'undefined' || (typeof model[propName] !== 'undefined' && typeof model[propName].type !== 'undefined')) {
                            model[propName] = {
                                "params": [
                                    {
                                        "name": "param",
                                        "type": "any",
                                        "mandatory": false,
                                        "default": null
                                    }
                                ],
                                "result": "any"
                            };

                            // create behavior
                            this.createBehavior('method', model._name, propName, model[propName]);
                        }

                        break;
                    case schema[propName] === 'event':
                        if (typeof model[propName] === 'undefined' || (typeof model[propName] !== 'undefined' && typeof model[propName].type !== 'undefined')) {
                            model[propName] = {
                                "params": [
                                    {
                                        "name": "param",
                                        "type": "any",
                                        "mandatory": false,
                                        "default": null
                                    }
                                ]
                            };

                            // create behavior
                            this.createBehavior('event', model._name, propName, model[propName]);
                        } else {
                            if (typeof model[propName].result !== 'undefined') {
                                delete model[propName].result;
                            }
                        }

                        break;
                    case schema[propName] === 'collection':
                        model[propName] = {
                            "type": ["@RuntimeComponent"],
                            "readOnly": false,
                            "mandatory": false,
                            "default": []
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }

                        break;
                    case propName.indexOf('_') !== 1:
                        if (propName !== '_id' && propName !== '_inherit') {
                            model[propName] = schema[propName];
                        }
                        break;
                    default:
                        break;
                }
            }
        }

        if (oldSchema) {
            for (propName in oldSchema) {
                if (propName.indexOf('_') !== 0 && typeof schema[propName] === 'undefined') {
                    delete model[propName];

                    for (component in components[name]) {
                        delete components[name][component][propName];
                        this.require('channel').$designerDeleteComponent(component, name);
                        this.system().components(components);
                    }
                    for (behavior in behaviors) {
                        if (model && behaviors[behavior].component === model._name && behaviors[behavior].state === propName) {
                            delete behaviors[behavior];
                            this.require('channel').$designerDeleteBehavior(behavior);
                            this.system().behaviors(behaviors);
                        }
                    }
                }
            }
        }

        models[model._id] = model;
        this.system().models(models);
        this.require('channel').$designerUpdateModel(model._id, model);
        this.save();
    });

    Designer.on('syncBehavior', function syncBehavior(model) {
        var behaviors = this.system().behaviors(),
            schema = null,
            propName = '',
            params = '',
            header = '',
            def = null,
            methodDef = null,
            length = 0,
            i = 0,
            behaviorId = '',
            action = '',
            behavior = null,
            that = this;

        function _getSchema(name) {
            var result = '',
                id = '';

            for (id in that.system().schemas()) {
                if (that.system().schemas()[id]._name === name) {
                    result = that.system().schemas()[id];
                    break;
                }
            }
            return result;
        }

        schema = _getSchema(model._name);

        for (propName in schema) {
            switch (true) {
                case schema[propName] === 'method':
                case schema[propName] === 'event':
                    // params
                    def = model[propName];

                    if (typeof model[propName] !== 'object') {
                        if (schema[propName] === 'method') {
                            def = {
                                "params": [
                                    {
                                        "name": "param",
                                        "type": "string",
                                        "mandatory": false,
                                        "default": ""
                                    }
                                ],
                                "result": "string"
                            };
                        } else {
                            def = {
                                "params": [
                                    {
                                        "name": "param",
                                        "type": "string",
                                        "mandatory": false,
                                        "default": ""
                                    }
                                ]
                            };
                        }
                    }
                    methodDef = def.params;
                    params = '';
                    if (methodDef && methodDef.length) {
                        length = methodDef.length;
                        for (i = 0; i < length; i++) {
                            if (i === 0) {
                                params = methodDef[i].name;
                            } else {
                                params = params + ', ' + methodDef[i].name;
                            }
                        }
                    }

                    header = 'function ' + propName + '(' + params + ') ';

                    for (behaviorId in behaviors) {
                        behavior = behaviors[behaviorId];
                        if (behavior.component === model._name && behavior.state === propName) {
                            action = behavior.action.split('{');
                            action[0] = header;
                            behaviors[behaviorId].action = action.join('{');
                            this.system().behaviors(behaviors);
                            this.require('channel').$designerUpdateBehavior(behavior._id, behavior);
                            this.save();
                        }
                    }

                    break;
                default:
                    break;
            }
        }
    });

    Designer.on('linkModel', function linkModel(source, target) {
        jsPlumb.ready(function () {
            jsPlumb.setContainer('body');

            jsPlumb.connect({
                paintStyle: { 
                    stroke: '#7F949D', 
                    strokeWidth: 3 
                },
                source: 'designer-model-panel-' + source,
                target: 'designer-model-panel-' + target,
                overlays: [
                    ['Arrow', {
                        location: 1
                    }]
                ]
            }, {
                    connector: ['Flowchart'],
                    anchor: ['Left', 'Right'],
                    endpoint: 'Blank'
                });
        });
    });

    Designer.on('save', function save() {
        var systems = this.require('storage').get('system-designer-systems'),
            designer = this.require('designer'),
            system = this.require('db').collections().System.find({
                '_id': designer.system().id()
            })[0],
            systemId = system._id;

        // delete classInfo
        system = JSON.parse(JSON.stringify(system));
        delete system.classInfo;

        // save system
        this.require('storage').set(systemId, system);

        // save index
        if (!systems) {
            systems = { 'systems': [systemId] };
        } else {
            if (systems.systems.indexOf(systemId) === -1) {
                systems.systems.push(systemId);
            }
        }
        this.require('storage').set('system-designer-systems', systems);
    });

    Designer.on('runMessages', function runMessages(messages) {
        messages.forEach(function (message) {
            console.log(message);
            $db.RuntimeMessage.insert(message);
        });
    }, true);

    // start
    system.on('start', function start() {
        var designer = null;

        designer = this.require('designer');
        designer.render();
    });

    system.start();
});
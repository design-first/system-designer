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

syrup.on('ready', function () {
    var system = this.system('design');

    // DIALOG IMPORT
    var DialogImport = this.require('DialogImport');
    DialogImport.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-import').empty();

        html = this.require('dialog-modal-import.html');
        document.querySelector('#designer-dialog-import').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{message}}/gi, this.message())
            );
                
        //events
        dom = document.getElementById('designer-dialog-import-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-import-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    DialogImport.on('show', function () {
        $('#designer-dialog-import-modal').modal('show');
    });

    DialogImport.on('hide', function () {
        $('#designer-dialog-import-modal').modal('hide');
    });
    
    // DIALOG CHECK
    var DialogCheck = this.require('DialogCheck');
    DialogCheck.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-check').empty();

        html = this.require('dialog-modal-check.html');
        document.querySelector('#designer-dialog-check').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{message}}/gi, this.message())
            );

        dom = document.getElementById('designer-dialog-check-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    DialogCheck.on('show', function () {
        $('#designer-dialog-check-modal').modal('show');
    });

    DialogCheck.on('hide', function () {
        $('#designer-dialog-check-modal').modal('hide');
    });

    DialogCheck.on('ok', function () {
        this.hide();
    });
    
    // DIALOG CHECK
    var DialogWelcome = this.require('DialogWelcome');
    DialogWelcome.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-welcome').empty();

        html = this.require('dialog-modal-welcome.html');
        document.querySelector('#designer-dialog-welcome').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
            );
            
        // events
        dom = document.getElementById('designer-dialog-welcome-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    DialogWelcome.on('show', function () {
        $('#designer-dialog-welcome-modal').modal('show');
    });

    DialogWelcome.on('hide', function () {
        $('#designer-dialog-welcome-modal').modal('hide');
    });
    
    // DIALOG SHARE
    var DialogShare = this.require('DialogShare');
    DialogShare.on('init', function (config) {
        var html = null,
            dom = null,
            sys = '';

        $('#designer-dialog-share').empty();

        sys = this.require('db').collections().System.find({
            '_id': this.require('designer').system().id()
        })[0];

        html = this.require('dialog-modal-share.html');
        document.querySelector('#designer-dialog-share').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{message}}/gi, window.location.toString().split('#')[0] + '?system=' + encodeURI(JSON.stringify(sys)))
            );
                
        //events
        dom = document.getElementById('designer-dialog-share-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-share-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    DialogShare.on('show', function () {
        $('#designer-dialog-share-modal').modal('show');
    });

    DialogShare.on('hide', function () {
        $('#designer-dialog-share-modal').modal('hide');
    });
    
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
    
    // DIALOG CONFIG
    var DialogConfig = this.require('DialogConfig');
    DialogConfig.on('init', function (config) {
        var html = '',
            dom = null,
            that = this,
            designer = that.require('designer');

        $('#designer-dialog-config').empty();

        html = this.require('dialog-modal-config.html');
        document.querySelector('#designer-dialog-config').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
            );
         
        // default value
        $('#designer-dialog-type-config-isdebug')[0].checked = designer.debug();       
                
        //events
        dom = document.getElementById('designer-dialog-config-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-config-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

        dom = document.getElementById('designer-dialog-type-config-reset');
        dom.addEventListener('click', function (event) {
            var System = this.require('System');

            window.localStorage.clear();
            this.require('designer').system().destroy();

            this.require('designer').spaces().clear();
            this.require('designer').workspace().clear();
            this.require('message').success('system designer has been reseted.');
        }.bind(this));

        dom = document.getElementById('designer-dialog-type-config-isdebug');
        dom.addEventListener('click', function (obj) {
            var designer = that.require('designer'),
                isEnum = false;

            isEnum = $('#designer-dialog-type-config-isdebug')[0].checked;
            if (isEnum) {
                designer.debug(true);
            } else {
                designer.debug(false);
            }
        });
    });

    DialogConfig.on('show', function () {
        $('#designer-dialog-config-modal').modal('show');
    });

    DialogConfig.on('hide', function () {
        $('#designer-dialog-config-modal').modal('hide');
    });
    
    // DIALOG IMPORT FILE
    var DialogImportFile = this.require('DialogImportFile');
    DialogImportFile.on('init', function (config) {
        var html = '',
            dom = null,
            that = this,
            designer = that.require('designer');

        $('#designer-dialog-import-file').empty();

        html = this.require('dialog-modal-import-file.html');
        document.querySelector('#designer-dialog-import-file').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
            );
               
        //events
        dom = document.getElementById('designer-dialog-import-file-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-import-file-modal-merge');
        dom.addEventListener('click', function (event) {
            this.mergeSystem();
        }.bind(this));

        dom = document.getElementById('designer-dialog-import-file-modal-import');
        dom.addEventListener('click', function (event) {
            this.importSystem();
        }.bind(this));

        dom = document.getElementById('designer-dialog-import-file-modal-file');
        dom.addEventListener('change', function (e) {
            e.stopPropagation();
            e.preventDefault();

            var files = e.target.files,
                reader = new FileReader(),
                json = '',
                that = this;

            reader.onload = function (event) {
                json = json + event.target.result;
            };
            reader.onloadend = function () {
                try {
                    that.data(JSON.parse(json));
                } catch (e) {
                    that.data({});
                }
            };
            reader.readAsText(files[0], 'UTF-8');
        }.bind(this));
    });

    DialogImportFile.on('show', function () {
        $('#designer-dialog-import-file-modal').modal('show');
    });

    DialogImportFile.on('hide', function () {
        $('#designer-dialog-import-file-modal').modal('hide');
    });
    
    // DIALOG DROP FILE
    var DialogDropFile = this.require('DialogDropFile');
    DialogDropFile.on('init', function (config) {
        var html = null,
            dom = null;

        $('#designer-dialog-drop-file').empty();

        html = this.require('dialog-modal-drop-file.html');
        document.querySelector('#designer-dialog-drop-file').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{message}}/gi, this.message())
            );
               
        //events
        dom = document.getElementById('designer-dialog-drop-file-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-drop-file-modal-merge');
        dom.addEventListener('click', function (event) {
            this.mergeSystem();
        }.bind(this));

        dom = document.getElementById('designer-dialog-drop-file-modal-import');
        dom.addEventListener('click', function (event) {
            this.importSystem();
        }.bind(this));
    });

    DialogDropFile.on('mergeSystem', function () {
        var sys = null,
            name = '',
            modelName = '',
            designer = this.require('designer'),
            system = designer.system(),
            message = this.require('message');

        sys = this.data();

        for (name in sys.schemas) {
            system.schemas()[name] = sys.schemas[name];
        }

        for (name in sys.types) {
            system.types()[name] = sys.types[name];
        }

        for (name in sys.behaviors) {
            system.behaviors()[name] = sys.behaviors[name];
        }

        for (name in sys.components) {
            if (!system.components()[name]) {
                system.components()[name] = {};
            }
            for (modelName in sys.components[name]) {
                system.components()[name][modelName] = sys.components[name][modelName];
            }
        }

        designer.save();
        designer.workspace().refresh();

        this.hide();
        designer.save();
        message.success('merge of the system is done.');
    });

    DialogDropFile.on('importSystem', function () {
        var System = this.require('System'),
            sys = null,
            designer = this.require('designer'),
            message = this.require('message');

        if (designer.system()) {
            designer.system().destroy();
        }
        sys = new System(this.data());
        designer.system(sys);
        designer.save();

        designer.space(sys.name());
        designer.spaces().render();
        designer.workspace().refresh();

        this.hide();
        designer.save();

        message.success('importation of the system is done.');
    });

    DialogDropFile.on('show', function () {
        $('#designer-dialog-drop-file-modal').modal('show');
    });

    DialogDropFile.on('hide', function () {
        $('#designer-dialog-drop-file-modal').modal('hide');
    });
    
    // DIALOG TYPE CREATION
    var dialogTypeCreation = this.require('DialogTypeCreation');
    dialogTypeCreation.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-type-creation').empty();

        html = this.require('dialog-modal-type-creation.html');
        document.querySelector('#designer-dialog-type-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
            );
                
        //events
        dom = document.getElementById('designer-dialog-type-creation-name');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-type-creation-name').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-type-creation-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-type-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    dialogTypeCreation.on('show', function () {
        $('#designer-dialog-type-creation-modal').modal('show');
    });

    dialogTypeCreation.on('hide', function () {
        $('#designer-dialog-type-creation-modal').modal('hide');
    });
    
    // DIALOG EXPORT
    var DialogExport = this.require('DialogExport');
    DialogExport.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-export').empty();

        html = this.require('dialog-modal-export.html');
        document.querySelector('#designer-dialog-export').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
            );
                
        //events
        dom = document.getElementById('designer-dialog-export-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-export-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    DialogExport.on('show', function () {
        $('#designer-dialog-export-modal').modal('show');
    });

    DialogExport.on('hide', function () {
        $('#designer-dialog-export-modal').modal('hide');
    });
    
    // DIALOG SCHEMA CREATION
    var dialogSchemaCreation = this.require('DialogSchemaCreation');
    dialogSchemaCreation.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-schema-creation').empty();

        html = this.require('dialog-modal-schema-creation.html');
        document.querySelector('#designer-dialog-schema-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
            );
                
        //events
        dom = document.getElementById('designer-dialog-schema-creation-name');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-schema-creation-name').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-schema-creation-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-schema-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    dialogSchemaCreation.on('show', function () {
        $('#designer-dialog-schema-creation-modal').modal('show');
    });

    dialogSchemaCreation.on('hide', function () {
        $('#designer-dialog-schema-creation-modal').modal('hide');
    });  
    
    // DIALOG SYSTEM CREATION
    var dialogSystemCreation = this.require('DialogSystemCreation');
    dialogSystemCreation.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-system-creation').empty();

        html = this.require('dialog-modal-system-creation.html');
        document.querySelector('#designer-dialog-system-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
            );
                
        //events
        dom = document.getElementById('designer-dialog-system-creation-name');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-system-creation-name').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-system-creation-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-system-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    dialogSystemCreation.on('show', function () {
        $('#designer-dialog-system-creation-modal').modal('show');
    });

    dialogSystemCreation.on('hide', function () {
        $('#designer-dialog-system-creation-modal').modal('hide');
    });
      
    // DIALOG MODEL CREATION
    var dialogModelCreation = this.require('DialogModelCreation');
    dialogModelCreation.on('init', function (config) {
        var html = '',
            dom = null,
            selectSchemas = '',
            designer = this.require('designer'),
            schemas = designer.system().schemas();

        $('#designer-dialog-model-creation').empty();

        for (name in schemas) {
            if (!schemas[name]._schema) {
                selectSchemas = selectSchemas + '<option value="' + name + '">' + name + '</option>';
            }
        }

        html = this.require('dialog-modal-model-creation.html');
        document.querySelector('#designer-dialog-model-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{schemas}}/gi, selectSchemas)
            );
                
        //events
        dom = document.getElementById('designer-dialog-model-creation-name');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-model-creation-name').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-model-creation-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-model-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    dialogModelCreation.on('show', function () {
        $('#designer-dialog-model-creation-modal').modal('show');
    });

    dialogModelCreation.on('hide', function () {
        $('#designer-dialog-model-creation-modal').modal('hide');
    });  
    
    // DIALOG BEHAVIOR CREATION
    var dialogBehaviorCreation = this.require('DialogBehaviorCreation');
    dialogBehaviorCreation.on('init', function (config) {
        var html = '',
            dom = null,
            selectStates = '',
            states = [],
            designer = this.require('designer'),
            space = this.require('designer').space(),
            schemas = designer.system().schemas(),
            schema = '';

        $('#designer-dialog-behavior-creation').empty();

        schema = schemas[space]._schema;

        states.push('init'); // TODO check if inherit from SyrupComponent
        for (name in designer.system().schemas()[schema]) {
            switch (designer.system().schemas()[schema][name]) {
                case 'property':
                case 'collection':
                case 'event':
                case 'method':
                    states.push(name);
                    break;
                default:
                    break;
            }
        };

        states.sort();
        states.forEach(
            function (name) {
                selectStates = selectStates + '<option value="' + name + '">' + name + '</option>';
            });

        html = this.require('dialog-modal-behavior-creation.html');
        document.querySelector('#designer-dialog-behavior-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{states}}/gi, selectStates)
            );
                
        //events
        dom = document.getElementById('designer-dialog-behavior-creation-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-behavior-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));
    });

    dialogBehaviorCreation.on('show', function () {
        $('#designer-dialog-behavior-creation-modal').modal('show');
    });

    dialogBehaviorCreation.on('hide', function () {
        $('#designer-dialog-behavior-creation-modal').modal('hide');
    }); 
    
    // DIALOG COMPONENT CREATION
    var dialogComponentCreation = this.require('DialogComponentCreation');
    dialogComponentCreation.on('init', function (config) {
        var html = '',
            dom = null,
            selectSchemas = '',
            designer = this.require('designer'),
            schemas = designer.system().schemas();

        $('#designer-dialog-component-creation').empty();

        for (name in schemas) {
            if (schemas[name]._schema) {
                selectSchemas = selectSchemas + '<option value="' + name + '">' + name + '</option>';
            }
        }

        html = this.require('dialog-modal-component-creation.html');
        document.querySelector('#designer-dialog-component-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{models}}/gi, selectSchemas)
            );
                
        //events
        dom = document.getElementById('designer-dialog-component-creation-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-component-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));
    });

    dialogComponentCreation.on('show', function () {
        $('#designer-dialog-component-creation-modal').modal('show');
    });

    dialogComponentCreation.on('hide', function () {
        $('#designer-dialog-component-creation-modal').modal('hide');
    }); 
      
    // MODELSYSTEM
    var ModelSystem = this.require('ModelSystem');
    ModelSystem.on('render', function () {
        var html = null,
            that = this,
            doc = '',
            propName = '',
            propVal = '';
        
        // html 
        html = this.require('model-system.html');

        for (propName in this.document()) {
            if (['name', 'master', 'subsystem', 'description', 'version'].indexOf(propName) !== -1) {
                propVal = this.document()[propName];
                doc = doc + '<tr><td>' + propName + '</td><td>' + propVal + '</td></tr>'
            }
        }

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{_id}}/gi, this.uuid())
                .replace(/{{content}}/gi, doc)
            );

        //events
        html = document.getElementById('designer-system-' + this.uuid()).children[0].children[1];

        html.addEventListener('click', function (event) {
            window.open('system.html?_id=' + that.uuid());
        });

        html = document.getElementById('designer-system-' + this.uuid() + '-edit');

        html.addEventListener('click', function (event) {
            window.open('system.html?_id=' + that.uuid());
        })

        html = document.getElementById('designer-system-' + this.uuid() + '-delete');

        html.addEventListener('click', function (event) {
            var systems = JSON.parse(window.localStorage.getItem('systems')),
                designer = this.require('designer'),
                System = this.require('System'),
                systemId = this.uuid();
            
            // remove from localstorage
            window.localStorage.removeItem(systemId);
            systems.systems.splice(systems.systems.indexOf(systemId), 1);
            window.localStorage.setItem('systems', JSON.stringify(systems));

            designer.system().destroy();
             
            // set default system
            if (systems.systems.length) {
                designer.system(new System(JSON.parse(window.localStorage.getItem(systems.systems[0]))));
            }

            $('#designer-system-' + this.uuid()).remove();
            this.destroy();

            //designer.save();

            designer.space('');
            designer.spaces().render();
            designer.workspace().refresh();
        }.bind(this));
    });

    ModelSystem.on('hide', function () {
        $('#designer-system-' + this.uuid()).hide();
    });

    ModelSystem.on('show', function () {
        $('#designer-system-' + this.uuid()).show();
    });
    
    // MODELTYPE
    var ModelType = this.require('ModelType');
    ModelType.on('render', function () {
        var html = null,
            that = this,
            doc = '',
            propName = '',
            propVal = '';
        
        // html 
        html = this.require('model-type.html');

        if (this.document().schema) {
            for (propName in this.document().schema) {
                if (this.document().schema.hasOwnProperty(propName)) {
                    propVal = this.document().schema[propName].type;
                    doc = doc + '<a href="#" class="list-group-item" style="text-align: left">' + propName + ' : ' + propVal + '</a>';
                }
            }
        }

        if (this.document().value) {
            this.document().value.forEach(function (val) {
                doc = doc + '<a href="#" class="list-group-item" style="text-align: left">' + val + '</a>';
            });
        }


        if (!this.document().schema && !this.document().value) {
            propVal = this.document().type;
            doc = doc + '<a href="#" class="list-group-item" style="text-align: left"><i>alias</i> : ' + propVal + '</a>';
        }

        if (doc === '') {
            doc = doc + '<a class="list-group-item" style="text-align: left"></a>';
        }

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{id}}/gi, this.uuid())
                .replace(/{{content}}/gi, doc)
            );

        //events
        html = document.getElementById('designer-type-' + this.uuid()).children[0].children[1];

        html.addEventListener('click', function (event) {
            window.open('type.html?_id=' + that.uuid());
        });

        html = document.getElementById('designer-type-' + this.uuid() + '-edit');

        html.addEventListener('click', function (event) {
            window.open('type.html?_id=' + that.uuid());
        })

        html = document.getElementById('designer-type-' + this.uuid() + '-delete');

        html.addEventListener('click', function (event) {
            var designer = this.require('designer');
            delete designer.system().types()[this.title()];
            $('#designer-type-' + this.title()).remove();
            this.destroy();
            designer.save();

            designer.space('');
            designer.spaces().render();
            designer.workspace().refresh();
        }.bind(this));
    });

    ModelType.on('hide', function () {
        $('#designer-type-' + this.title()).hide();
    });

    ModelType.on('show', function () {
        $('#designer-type-' + this.title()).show();
    });
   
    // MODELSCHEMA
    var ModelSchema = this.require('ModelSchema');
    ModelSchema.on('render', function () {
        var html = null,
            doc = '',
            that = this,
            propName = '',
            propVal = '';
        
        // html 
        html = this.require('model-schema.html');

        for (propName in this.document()) {
            if (this.document().hasOwnProperty(propName) && propName.indexOf('_') !== 0) {
                propVal = this.document()[propName];
                doc = doc + '<tr><td>' + propName + '</td><td>' + propVal + '</td></tr>'
            }
        }

        if (doc === '') {
            doc = doc + '<tr><td></td><td></td></tr>';
        }

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{id}}/gi, this.title())
                .replace(/{{content}}/gi, doc)
            );

        //events
        html = document.getElementById('designer-schema-' + this.uuid()).children[0].children[1];

        html.addEventListener('click', function (event) {
            window.open('schema.html?_id=' + that.uuid());
        });

        html = document.getElementById('designer-schema-' + this.uuid() + '-edit');

        html.addEventListener('click', function (event) {
            window.open('schema.html?_id=' + that.uuid());
        })

        html = document.getElementById('designer-schema-' + this.uuid() + '-delete');

        html.addEventListener('click', function (event) {
            var designer = this.require('designer');
            delete designer.system().schemas()[this.title()];
            $('#designer-schema-' + this.title()).remove();
            this.destroy();
            designer.save();

            designer.space('');
            designer.spaces().render();
            designer.workspace().refresh();
        }.bind(this));
    });

    ModelSchema.on('hide', function () {
        $('#designer-schema-' + this.title()).hide();
    });

    ModelSchema.on('show', function () {
        $('#designer-schema-' + this.title()).show();
    });
    
    // MODELCLASS
    var ModelClass = this.require('ModelClass');
    ModelClass.on('render', function () {
        var html = null,
            that = this,
            propName = '',
            attributes = '',
            collections = '',
            methods = '',
            events = '',
            propVal = '',
            htmlComp = null;

        for (propName in this.document()) {
            if (this.document().hasOwnProperty(propName)) {
                propVal = this.document()[propName];

                switch (true) {
                    case typeof propVal.type !== 'undefined':
                        if (!Array.isArray(propVal.type)) {
                            attributes = attributes + '<a href="#" class="list-group-item" style="text-align: left">+' + propName + ' : ' + propVal.type.replace('@', '') + '</a>';
                        } else {
                            attributes = attributes + '<a href="#" class="list-group-item" style="text-align: left">+' + propName + ' : ' + JSON.stringify(propVal.type) + '</a>';
                        }
                        break;
                    case typeof propVal.params !== 'undefined':
                        var result = 'undefined';
                        var params = '(';
                        propVal.params.forEach(function (param) {
                            params = params + param.name + ' : ' + param.type + ', ';
                        });
                        params = params + ')';
                        params = params.replace(', )', ')');

                        if (typeof propVal.result !== 'undefined') {
                            result = propVal.result;
                        }

                        methods = methods + '<a href="#" class="list-group-item" style="text-align: left">+' + propName + params + ': ' + result + '</a>';
                        break;
                    case propName.indexOf('_') !== -1:
                        if (propName !== '_id' && propName !== '_name' && propName !== '_schema') {
                            // doc = doc + '<a href="#" class="list-group-item" style="text-align: left">' + propName.replace('_', '') + ' ' + propVal + '</a>';
                        }
                        break;
                    default:
                        var result = 'undefined';
                        if (typeof propVal.result !== 'undefined') {
                            result = propVal.result;
                        }
                        methods = methods + '<a href="#" class="list-group-item" style="text-align: left">+' + propName + '(): ' + result + '</a>';
                        break;
                }
            }
        }

        if (attributes === '') {
            attributes = attributes + '<a class="list-group-item" style="text-align: left"></a>';
        }
        if (methods === '') {
            methods = methods + '<a class="list-group-item" style="text-align: left"></a>';
        }
        
        // html 
        htmlComp = this.require('model-class.html');

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            htmlComp.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{_id}}/gi, this.uuid())
                .replace(/{{attributes}}/gi, attributes)
                .replace(/{{collections}}/gi, collections)
                .replace(/{{methods}}/gi, methods)
                .replace(/{{events}}/gi, events)
            );

        //events
        html = document.getElementById('designer-model-' + this.uuid()).children[0].children[1];

        html.addEventListener('click', function (event) {
            window.open('model.html?_id=' + that.uuid());
        });

        html = document.getElementById('designer-model-' + this.uuid() + '-edit');

        html.addEventListener('click', function (event) {
            window.open('schema.html?_id=' + that.uuid());
        })

        html = document.getElementById('designer-model-' + this.uuid() + '-delete');

        html.addEventListener('click', function (event) {
            var designer = this.require('designer');
            delete designer.system().schemas()[this.title()];
            $('#designer-model-' + this.title()).remove();
            this.destroy();
            designer.save();

            designer.space('');
            designer.spaces().render();
            designer.workspace().refresh();
        }.bind(this));
    });

    ModelClass.on('hide', function () {
        $('#designer-class-' + this.title()).hide();
    });

    ModelClass.on('show', function () {
        $('#designer-class-' + this.title()).show();
    });
    
    // MODELBEHAVIOR
    var ModelBehavior = this.require('ModelBehavior');
    ModelBehavior.on('render', function () {
        var template = '',
            html = null,
            that = this;
        
        // html 
        template = this.require('model-behavior.html');

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            template.source()
                .replace(/{{_id}}/gi, this.uuid())
                .replace(/{{title}}/gi, this.title())
                .replace(/{{content}}/gi, this.content())
            );    
            
        //events
        html = document.getElementById('designer-behavior-' + this.uuid()).children[0].children[1];

        html.addEventListener('click', function (event) {
            window.open('behavior.html?_id=' + that.uuid());
        });

        html = document.getElementById('designer-behavior-' + this.uuid() + '-edit');

        html.addEventListener('click', function (event) {
            window.open('behavior.html?_id=' + that.uuid());
        })

        html = document.getElementById('designer-behavior-' + this.uuid() + '-delete');

        html.addEventListener('click', function (event) {
            var designer = this.require('designer');
            delete designer.system().behaviors()[this.uuid()];
            $('#designer-behavior-' + this.uuid()).remove();
            this.destroy();
            designer.save();

            designer.space('');
            designer.spaces().render();
            designer.workspace().refresh();
        }.bind(this));
    });

    ModelBehavior.on('hide', function () {
        $('#designer-behavior-' + this.uuid()).hide();
    });

    ModelBehavior.on('show', function () {
        $('#designer-behavior-' + this.uuid()).show();
    });
    
    // MODELCOMPONENT
    var ModelComponent = this.require('ModelComponent');
    ModelComponent.on('render', function () {
        var htmlComp = null,
            html = null,
            doc = '',
            that = this,
            propName = '',
            propVal = '';

        for (propName in this.document()) {
            if (this.document().hasOwnProperty(propName) && propName !== '_id') {
                propVal = this.document()[propName];
                doc = doc + '<tr><td>' + propName + '</td><td>' + JSON.stringify(propVal) + '</td></tr>'
            }
        }
        
        // html 
        htmlComp = this.require('model-component.html');

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            htmlComp.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{_id}}/gi, this.uuid())
                .replace(/{{content}}/gi, doc)
            );
        
        //events
        html = document.getElementById('designer-component-' + this.uuid()).children[0].children[1];

        html.addEventListener('click', function (event) {
            window.open('component.html?_id=' + encodeURI(that.title()) + '&model=' + encodeURI(that.model()));
        });

        html = document.getElementById('designer-component-' + this.uuid() + '-edit');

        html.addEventListener('click', function (event) {
            window.open('component.html?_id=' + encodeURI(that.title()) + '&model=' + encodeURI(that.model()));
        })

        html = document.getElementById('designer-component-' + this.uuid() + '-delete');

        html.addEventListener('click', function (event) {
            var designer = this.require('designer');

            delete designer.system().components()[this.model()][this.uuid()];
            // if (Object.keys(designer.system().components()[this.model()])) {
            //     delete designer.system().components()[this.model()];
            //}
            $('#designer-component-' + this.uuid()).fadeOut(500, function () {
                $(this).remove();
            });
            this.destroy();
            designer.save();
        }.bind(this));
    });

    ModelComponent.on('hide', function () {
        $('#designer-component-' + this.uuid()).hide();
    });

    ModelComponent.on('show', function () {
        $('#designer-component-' + this.uuid()).show();
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
            "type": "designer"
        })
        this.header(this.require(menuHeader[0]._id));
        
        // menu items
        menuItems = this.require('db').collections().MenuItem.find({
            "type": "designer"
        })

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
        })

        menuSearch = this.require('db').collections().MenuSearch.find({
            "type": "designer"
        })

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
    
        // items
        this.items().forEach(function (item) {
            domItems.insertAdjacentHTML('beforeend', '<li>' + item.html().source() + '</>')
        });

        // events
        length = domItems.children.length;
        for (i = 0; i < length; i++) {
            item = domItems.children[i];
            item.addEventListener('click', function () {
                _removeActive();
                $(this).addClass('active');
            });
            item.addEventListener('click', function () {
                this.click();
            }.bind(self.items(i)));
        }

        // actions
        this.actions().forEach(function (action) {
            domAction.insertAdjacentHTML('afterbegin', '<li>' + action.html().source() + '</>')
        });
        
        // focus on first element
        if (length > 0) {
            this.designer().context(this.items(0).name());
            item = domItems.children[0];
            $(item).addClass('active');
        }

        var that = this;
        $('#designer-menu-action-search').on('keyup', function (event) {
            var value = $('#designer-menu-action-search').val();
            that.designer().filter(value);
        });
    });
    
    // ToolBar
    var ToolBar = this.require('ToolBar');
    ToolBar.on('init', function (conf) {
        var toolBarItems = [],
            self = this;
        
        // items
        toolBarItems = this.require('db').collections().ToolBarItem.find({
            "type": "designer"
        })

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
            domItems.insertAdjacentHTML('beforeend', '<li>' + item.html().source() + '</>')
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
    
    // Spaces
    var Spaces = this.require('Spaces');
    Spaces.on('init', function (conf) {
    });

    Spaces.on('clear', function () {
        $('#designer-spaces').empty();
    });

    Spaces.on('render', function () {
        var items = '',
            item = null,
            system = this.designer().system(),
            collections = {},
            SpaceItem = this.require('SpaceItem'),
            spaceItem = null,
            domItems = document.getElementById('designer-spaces-items'),
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
        
        // clear
        $('#designer-spaces-items').empty();

        if (system) {
            switch (this.designer().context()) {
                case 'system':
                    

                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items                   
                    var systems = JSON.parse(window.localStorage.getItem('systems')),
                        systemIds = [],
                        length = 0,
                        i = 0;

                    if (systems) {
                        systemIds = systems.systems;
                    }
                    length = systemIds.length;

                    for (i = 0; i < length; i++) {
                        system = JSON.parse(window.localStorage.getItem(systemIds[i]));
                        spaceItem = new SpaceItem({
                            'name': system.name,
                            'uuid': system._id
                        });
                        this.items().push(spaceItem);
                    }

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#systems#' + item.name() + '">' + item.name() + '</a></li>')
                    });
                    
                    // events
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', function () {
                            _removeActive();
                            $(this).addClass('active');
                        });
                        item.addEventListener('click', function () {
                            this.click();
                        }.bind(self.items(i)));
                    }

                    this.items().forEach(function (item) {
                        item.on('click', function () {
                            var designer = this.require('designer'),
                                system = JSON.parse(window.localStorage.getItem(this.uuid())),
                                System = this.require('System');
                            if (system) {
                                designer.system(new System(system));
                            }
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
                    // clear
                    $('#designer-spaces-items').empty();

                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items    
                    for (name in system.schemas()) {
                        if (typeof system.schemas()[name]._schema === 'undefined') {
                            spaceItem = new SpaceItem({
                                'name': name
                            });
                            this.items().push(spaceItem);
                        }
                    }

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#schemas#' + item.name() + '">' + item.name() + '</a></li>')
                    });
                    
                    // events
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', function () {
                            _removeActive();
                            $(this).addClass('active');
                        });
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
                    } else {
                        this.require('designer').space('');
                    }
                    break;

                case 'models':
                    // clear
                    $('#designer-spaces-items').empty();
                    
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items    
                    for (name in system.schemas()) {
                        if (typeof system.schemas()[name]._schema !== 'undefined') {
                            spaceItem = new SpaceItem({
                                'name': name
                            });
                            this.items().push(spaceItem);
                        }
                    }

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#models#' + item.name() + '">' + item.name() + '</a></li>')
                    });
                    
                    // events
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', function () {
                            _removeActive();
                            $(this).addClass('active');
                        });
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
                    } else {
                        this.require('designer').space('');
                    }
                    break;
                case 'types':
                    // clear
                    $('#designer-spaces-items').empty();
                    
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items
                    for (name in system.types()) {
                        spaceItem = new SpaceItem({
                            'name': name
                        })
                        this.items().push(spaceItem);
                    }

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#types#' + item.name() + '">' + item.name() + '</a></li>')
                    });
                    
                    // events
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', function () {
                            _removeActive();
                            $(this).addClass('active');
                        });
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
                    // clear
                    $('#designer-spaces-items').empty();
                    
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    spaceItem = new SpaceItem({
                        'name': this.require('designer').system().name(),
                        'uuid': this.require('designer').system().id()
                    })
                    this.items().push(spaceItem);
                    
                    // items
                    for (name in system.schemas()) {
                        if (typeof system.schemas()[name]._schema !== 'undefined') {
                            spaceItem = new SpaceItem({
                                'name': name
                            })
                            this.items().push(spaceItem);
                        }
                    }

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#behaviors#' + item.name() + '">' + item.name() + '</a></li>')
                    });
                    
                    // events
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', function () {
                            _removeActive();
                            $(this).addClass('active');
                        });
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

                case 'components':
                    // clear
                    $('#designer-spaces-items').empty();
                    
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items
                    /*
                    for (name in system.components()) {
                        spaceItem = new SpaceItem({
                            'name': name
                        })
                        this.items().push(spaceItem);
                    }*/
                    for (name in system.schemas()) {
                        if (typeof system.schemas()[name]._schema !== 'undefined') {
                            spaceItem = new SpaceItem({
                                'name': name
                            });
                            this.items().push(spaceItem);
                        }
                    }

                    this.items().forEach(function (item) {
                        /*  var nbElements = 0,
                              model = item.require('designer').system().components()[item.name()];
  
                          if (model) {
                              nbElements = Object.keys(model).length;
                          }*/

                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#components#' + item.name() + '">' + item.name() + '</a></li>')
                    });
                    
                    // events
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', function () {
                            _removeActive();
                            $(this).addClass('active');
                        });
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
                default:
                    break;
            }
        }
    });
    
    // Workspace
    var Workspace = this.require('Workspace');
    Workspace.on('init', function (conf) {
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

                    DialogDropFile = new DialogDropFile({
                        'title': 'A system has been found',
                        'message': 'What do you want to do ?'
                    });
                    DialogDropFile.data(sys);
                    DialogDropFile.show();
                };
                reader.readAsText(files[0], "UTF-8");

            });
    });

    Workspace.on('create', function () {
        var Dialog = null,
            dialog = null,
            system = this.require('designer').system();

        switch (this.designer().context()) {
            case 'system':
                Dialog = this.require('DialogSystemCreation');
                dialog = new Dialog({
                    'title': 'Create a new system',
                })
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
                        
                    // get value
                    name = $('#designer-dialog-system-creation-name').val();
                    
                    // clean
                    name = name.trim();
                    name = name.replace(/ /gi, '_');

                    if (name) {
                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        uuid = generateId();
                        mainUuid = generateId();
                        
                        // set system
                        system = {
                            "name": name,
                            "master": false,
                            "subsystem": false,
                            "version": "0.0.1",
                            "description": "",
                            "schemas": {},
                            "behaviors": {},
                            "types": {},
                            "components": {},
                            "_id": uuid
                        };
                    
                        // add main method
                        system.behaviors[mainUuid] = {
                            "_id": mainUuid,
                            "component": uuid,
                            "state": "main",
                            "action": "function main() { \n}",
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
                        designer.workspace.refresh();
                    }
                });
                break;
            case 'schemas':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogSchemaCreation');
                    dialog = new Dialog({
                        'title': 'Create a new schema',
                    })
                    dialog.show();
                    dialog.on('ok', function () {
                        var designer = this.require('designer'),
                            name = null,
                            schema = {},
                            ModelSchema = null,
                            modelSchema = null;
                        
                        // get value
                        name = $('#designer-dialog-schema-creation-name').val();
                        
                        // clean
                        name = name.trim();
                        name = name.replace(/ /gi, '_');

                        if (name) {
                            // set schema
                            schema = {
                                "_id": name,
                                "_name": name,
                                "_inherit": ["SyrupComponentSchema"]
                            };
                    
                            // add (TODO improve)
                            designer.system().schemas()[name] = schema;

                            ModelSchema = this.require('ModelSchema');
                            modelSchema = new ModelSchema({
                                'title': name
                            });

                            modelSchema.document(JSON.parse(JSON.stringify(schema)));
                            modelSchema.content(JSON.stringify(schema));

                            designer.save();

                            this.hide();

                            designer.space(name);
                            designer.spaces().render();
                            designer.workspace.refresh();
                        }
                    });
                }
                break;
            case 'models':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogModelCreation');
                    dialog = new Dialog({
                        'title': 'Create a new model',
                    })
                    dialog.show();
                    dialog.on('ok', function () {
                        var designer = this.require('designer'),
                            name = null,
                            schema = null,
                            model = {},
                            ModelClass = null,
                            modelClass = null;
                    
                        // get value
                        name = $('#designer-dialog-model-creation-name').val();
                        schema = $('#designer-dialog-model-creation-schema').val();
                        
                        // clean
                        name = name.trim();
                        name = name.replace(/ /gi, '_');

                        if (name && schema) {
                            // set model
                            model = {
                                "_id": name,
                                "_name": name,
                                "_schema": schema,
                                "_inherit": ["SyrupComponent"]
                            };
                    
                            // prepare model
                            for (var att in designer.system().schemas()[schema]) {
                                switch (true) {
                                    case designer.system().schemas()[schema][att] === 'property':
                                        model[att] = {
                                            "type": "string",
                                            "readOnly": false,
                                            "mandatory": false,
                                            "default": ""
                                        };
                                        break;
                                    case designer.system().schemas()[schema][att] === 'method':
                                        model[att] = {
                                            "params": [
                                                {
                                                    "name": "param",
                                                    "type": "string",
                                                    "mandatory": false
                                                }
                                            ],
                                            "result": "string"
                                        };
                                        break;
                                    case designer.system().schemas()[schema][att] === 'event':
                                        model[att] = {
                                            "params": [
                                                {
                                                    "name": "param",
                                                    "type": "string",
                                                    "mandatory": false
                                                }
                                            ]
                                        };
                                        break;
                                    case designer.system().schemas()[schema][att] === 'collection':
                                        model[att] = {
                                            "type": ["string"],
                                            "readOnly": false,
                                            "mandatory": false,
                                            "default": []
                                        };
                                        break;
                                    default:
                                        break;
                                }
                            }
                    
                            // add (TODO improve)
                            designer.system().schemas()[name] = model;

                            ModelClass = this.require('ModelClass');
                            modelClass = new ModelClass({
                                'title': name
                            });
                            modelClass.document(JSON.parse(JSON.stringify(model)));
                            modelClass.content(JSON.stringify(model));

                            designer.save();

                            this.hide();

                            designer.space(name);
                            designer.spaces().render();
                            designer.workspace.refresh();
                        }
                    });
                }
                break;
            case 'types':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogTypeCreation');
                    dialog = new Dialog({
                        'title': 'Create a new type',
                    })
                    dialog.show();
                    dialog.on('ok', function () {
                        var designer = this.require('designer'),
                            name = null,
                            isEnum = false,
                            type = {},
                            ModelType = null,
                            modelType = null;
                        
                        // get value
                        name = $('#designer-dialog-type-creation-name').val();
                        isEnum = $('#designer-dialog-type-creation-isEnum')[0].checked;
                        
                        // clean
                        name = name.trim();
                        name = name.replace(/ /gi, '_');

                        if (name) {
                            // set system
                            if (isEnum) {
                                type = {
                                    "name": name,
                                    "type": "string",
                                    "value": [""]
                                };
                            } else {
                                type = {
                                    'name': name,
                                    'type': 'object',
                                    'schema': {
                                    }
                                };
                            }
                    
                            // add (TODO improve)
                            designer.system().types()[name] = type;

                            ModelType = this.require('ModelType');
                            modelType = new ModelType({
                                'title': name
                            });
                            modelType.uuid = name;
                            modelType.document(JSON.parse(JSON.stringify(type)));
                            modelType.content(JSON.stringify(type));

                            designer.save();

                            this.hide();

                            designer.space(name);
                            designer.spaces().render();
                            designer.workspace.refresh();
                        }
                    });
                }
                break;
            case 'components':
                if (system && Object.keys(system).length) {
                    var designer = this.require('designer'),
                        schemas = designer.system().schemas(),
                        component = {},
                        ModelComponent = null,
                        modelComponent = null,
                        model = '',
                        uuid = '';
                    
                    // get value
                    model = designer.space();

                    if (model) {
                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        uuid = generateId();
                        
                        // set component
                        component = {
                            "_id": uuid,
                        };
                    
                        // set properties default values
                        var schemaName = schemas[model]._schema;
                        var schema = schemas[schemaName];
                        var propertyNames = [];

                        for (var att in schema) {
                            if (schema[att] === 'property') {
                                propertyNames.push(att);
                            }
                        }
                        propertyNames.sort();
                        length = propertyNames.length;
                        for (var i = 0; i < length; i++) {
                            component[propertyNames[i]] = schemas[model][propertyNames[i]].default;
                        } 

                        // add (TODO improve)
                        if (!designer.system().components()[model]) {
                            designer.system().components()[model] = {};
                        }
                        designer.system().components()[model][uuid] = component;

                        ModelComponent = this.require('ModelComponent');

                        modelComponent = new ModelComponent({
                            title: uuid.toString()
                        });
                        modelComponent.model(model);
                        modelComponent.uuid(uuid.toString());
                        modelComponent.document(JSON.parse(JSON.stringify(component)));
                        modelComponent.content(JSON.stringify(component));

                        modelComponent.render();
                        
                        // little effect
                        $('#designer-component-' + uuid.toString()).hide();
                        $('#designer-component-' + uuid.toString()).fadeIn(1000);

                        designer.save();
                    }
                }
                break;
            case 'behaviors':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogBehaviorCreation');
                    dialog = new Dialog({
                        'title': 'Create a new behavior',
                    })
                    dialog.show();
                    dialog.on('ok', function () {
                        var designer = this.require('designer'),
                            schemas = designer.system().schemas(),
                            schemaModel = '',
                            methodDef = null,
                            behavior = {},
                            result = '',
                            body = '',
                            ModelBehavior = null,
                            modelBehavior = null,
                            model = '',
                            state = '',
                            uuid = '',
                            params = '',
                            i = 0,
                            length = 0;
                    
                        // get value
                        model = designer.space();
                        state = $('#designer-dialog-behavior-creation-state').val();

                        if (model && state) {
                            function generateId() {
                                function gen() {
                                    return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                                }
                                return gen() + gen() + gen();
                            }

                            uuid = generateId();
                    
                            // schema
                            schemaModel = schemas[model]._schema;

                            // params
                            if (schemas[model][state]) {
                                methodDef = schemas[model][state].params;
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

                            if (schemas[schemaModel][state] === 'property') {
                                params = 'value';
                            }

                            if (schemas[schemaModel][state] === 'collection') {
                                params = 'size, value, event';
                            }

                            if (state === 'init') {
                                params = 'conf';
                            }
                    
                            // body
                            if (schemas[model][state]) {
                                result = schemas[model][state].result;
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
                        
                            // set model
                            behavior = {
                                "_id": uuid,
                                "component": model,
                                "state": state,
                                "action": "function " + state + "(" + params + ") {\n" + body + "}",
                                "useCoreAPI": false,
                                "core": false
                            };
                    
                            // add (TODO improve)
                            designer.system().behaviors()[uuid] = behavior;

                            ModelBehavior = this.require('ModelBehavior');

                            modelBehavior = new ModelBehavior({
                                'uuid': uuid
                            });

                            modelBehavior.title(state);
                            modelBehavior.content(JSON.parse(JSON.stringify(behavior.action)));

                            this.hide();
                            modelBehavior.render();

                            Prism.highlightAll();
                            
                            // little effect
                            $('#designer-behavior-' + uuid.toString()).hide();
                            $('#designer-behavior-' + uuid.toString()).fadeIn(1000);

                            designer.save();
                        }
                    });
                }
                break;
            default:
                break;
        }
    });

    Workspace.on('refresh', function () {
        var ModelSystem = null,
            ModelSchema = null,
            ModelClass = null,
            modelSchema = null,
            sys = null,
            name = '',
            id = '',
            modelclass = null,
            ModelType = null,
            type = null,
            className = '',
            ModelComponent = null,
            component = null,
            ModelBehavior = null,
            behavior = null,
            system = this.designer().system(),
            space = this.designer().space();

        if (system) {
            this.clear();
            switch (this.designer().context()) {
                case 'system':
                    var systems = JSON.parse(window.localStorage.getItem('systems')),
                        systemIds = [],
                        length = 0,
                        i = 0;

                    if (systems) {
                        systemIds = systems.systems;
                    }
                    length = systemIds.length;

                    for (i = 0; i < length; i++) {
                        system = JSON.parse(window.localStorage.getItem(systemIds[i]));
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
                    break;
                case 'schemas':
                    if (space) {
                        for (name in system.schemas()) {
                            if (system.schemas()[name]._name === space) {
                                ModelSchema = this.require('ModelSchema');
                                modelSchema = new ModelSchema({
                                    'title': name
                                });
                                modelSchema.uuid(name);
                                modelSchema.document(JSON.parse(JSON.stringify(system.schemas()[name])));
                                modelSchema.content(JSON.stringify(system.schemas()[name]));
                                modelSchema.render();
                            }
                        }
                    }
                    break;
                case 'models':
                    if (space) {
                        for (name in system.schemas()) {
                            if (system.schemas()[name]._name === space) {
                                ModelClass = this.require('ModelClass');
                                modelclass = new ModelClass({
                                    'title': name
                                });
                                modelclass.uuid(name);
                                modelclass.document(JSON.parse(JSON.stringify(system.schemas()[name])));
                                modelclass.content(JSON.stringify(system.schemas()[name]));
                                modelclass.render();
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
                    break;
                case 'behaviors':
                    if (space) {
                        for (id in system.behaviors()) {
                            if (system.behaviors()[id].component === space) {
                                ModelBehavior = this.require('ModelBehavior');

                                behavior = new ModelBehavior({
                                    'uuid': system.behaviors()[id]._id
                                });
                                behavior.title(system.behaviors()[id].state);
                                behavior.content(JSON.parse(JSON.stringify(system.behaviors()[id].action)));
                                behavior.render();
                            }
                            
                            // system
                            if (space === this.require('designer').system().name()) {
                                if (system.behaviors()[id].component === this.require('designer').system().id()) {
                                    ModelBehavior = this.require('ModelBehavior');

                                    behavior = new ModelBehavior({
                                        'uuid': system.behaviors()[id]._id
                                    });
                                    behavior.title(system.behaviors()[id].state);
                                    behavior.content(JSON.parse(JSON.stringify(system.behaviors()[id].action)));
                                    behavior.render();
                                }
                            }
                        }

                        Prism.highlightAll();
                    }
                    break;
                default:
                    break;
            }
            // TODO IMPROVE REFRESH
            if (this.designer().filter()) {
                this.designer().filter(this.designer().filter());
            }
        }
    });

    Workspace.on('clear', function () {
        $('#designer-workspace').empty();
    });
    
    // Server
    var Server = this.require('Server');
    Server.on('start', function () {
        var SyrupChannel = null,
            channel = null,
            Worker = null,
            worker = null;

        SyrupChannel = this.require('SyrupChannel');
        channel = new SyrupChannel({
            '_id': 'channel'
        });

        channel.on('send', function (message) {
            this.require('worker').worker().port.postMessage(message);
        });

        channel.on('getSystem', function (id) {
            var system = null;

            if (id === this.require('designer').system().id()) {
                system = this.require('db').collections().System.find({
                    '_id': id
                })[0];
                system = JSON.parse(JSON.stringify(system));
                delete system.classInfo;
                this.setSystem(id, system);
            } else {
                this.setSystem(id, JSON.parse(window.localStorage.getItem(id)));
            }
        });

        channel.on('getInitSystem', function (id) {
            var system = null;
            if (id === this.require('designer').system().id()) {
                system = this.require('db').collections().System.find({
                    '_id': id
                })[0];
                system = JSON.parse(JSON.stringify(system));
                delete system.classInfo;
                this.setInitSystem(id, system);
            } else {
                this.setInitSystem(id, JSON.parse(window.localStorage.getItem(id)));
            }
        });

        channel.on('getType', function (id) {
            this.setType(id, this.require('db').collections().System.find({
                '_id': this.require('designer').system().id()
            })[0].types[id]);
        });

        channel.on('getSchema', function (id) {
            this.setSchema(id, this.require('db').collections().System.find({
                '_id': this.require('designer').system().id()
            })[0].schemas[id]);
        });

        channel.on('getModel', function (id) {
            this.setModel(id, this.require('db').collections().System.find({
                '_id': this.require('designer').system().id()
            })[0].schemas[id]);
        });

        channel.on('getBehavior', function (id) {
            this.setBehavior(id, this.require('db').collections().System.find({
                '_id': this.require('designer').system().id()
            })[0].behaviors[id]);
        });

        channel.on('getComponent', function (id, collection) {
            this.setComponent(id, collection, this.require('db').collections().System.find({
                '_id': this.require('designer').system().id()
            })[0].components[collection][id], this.require('db').collections().System.find({
                '_id': this.require('designer').system().id()
            })[0].schemas[collection]);
        });

        channel.on('updateType', function (id, type) {
            var designer = this.require('designer');
            designer.system().types()[id] = type;
            designer.save();
            designer.workspace().refresh();
        });

        channel.on('deleteType', function (id) {
            var designer = this.require('designer'),
                types = [],
                type = null;

            types = this.require('db').collections().ModelType.find({
                'uuid': id
            });
            if (types.length) {
                type = this.require(types[0]._id);
                if (type) {
                    type.hide();
                    type.destroy();
                }
            }

            delete designer.system().types()[id];

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('updateSchema', function (id, schema) {
            var designer = this.require('designer');
            designer.system().schemas()[id] = schema;
            designer.save();
            designer.workspace().refresh();
        });

        channel.on('deleteSchema', function (id) {
            var designer = this.require('designer'),
                schemas = [],
                schema = null;

            schemas = this.require('db').collections().ModelSchema.find({
                'uuid': id
            });
            if (schemas.length) {
                schema = this.require(schemas[0]._id);
                if (schema) {
                    schema.hide();
                    schema.destroy();
                }
            }

            delete designer.system().schemas()[id];

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('updateModel', function (id, model) {
            var designer = this.require('designer');
            designer.system().schemas()[id] = model;
            designer.save();
            designer.workspace().refresh();
        });

        channel.on('deleteModel', function (id) {
            var designer = this.require('designer'),
                models = [],
                model = null;

            models = this.require('db').collections().ModelClass.find({
                'uuid': id
            });
            if (models.length) {
                model = this.require(models[0]._id);
                if (model) {
                    model.hide();
                    model.destroy();
                }
            }

            delete designer.system().schemas()[id];

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('updateBehavior', function (id, behavior) {
            var designer = this.require('designer');
            designer.system().behaviors()[id] = behavior;
            designer.save();
            designer.workspace().refresh();
        });

        channel.on('deleteBehavior', function (id) {
            var designer = this.require('designer'),
                behaviors = [],
                behavior = null;

            behaviors = this.require('db').collections().ModelBehavior.find({
                'uuid': id
            });
            if (behaviors.length) {
                behavior = this.require(behaviors[0]._id);
                if (behavior) {
                    behavior.hide();
                    behavior.destroy();
                }
            }

            delete designer.system().behaviors()[id];

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('updateComponent', function (id, collection, component) {
            var designer = this.require('designer');
            designer.system().components()[collection][id] = component;
            designer.save();

            designer.workspace().refresh();
        });

        channel.on('deleteComponent', function (id, collection) {
            var designer = this.require('designer'),
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

            delete designer.system().components()[collection][id];

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('updateSystem', function (id, system) {
            var System = this.require('System'),
                sys = null,
                designer = this.require('designer');

            if (designer.system()) {
                designer.system().destroy();
            }
            sys = new System(system);
            designer.system(sys);
            designer.save();
            designer.workspace().refresh();
        });

        channel.on('loadSystem', function (system) {
            var Dialog = null,
                dialog = null;

            Dialog = this.require('DialogImport');
            dialog = new Dialog({
                'title': 'A system has been found',
                'message': 'Do you want to import the system ?',
                'data': system
            })
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
                designer.save();

               	designer.space(sys.name());
                designer.spaces().render();
                designer.workspace().refresh();

                this.hide();
                designer.save();

                message.success('importation of the system is done.');
            });
        });
        
        // DEBUG
        channel.on('updateBehavior', function (id, behavior) {
            var designer = this.require('designer');
            if (designer.debug()) {
                this.require(id).action(behavior.action);
            }
        });
        channel.on('sync', function () {
            var System = null,
                system = null,
                designer = this.require('designer');

            if (designer.debug()) {
                system = this.require('db').system();
                if (designer.system()) {
                    designer.system().destroy();
                }
                System = this.require('System');
                designer.system(new System(JSON.parse(system)));
                designer.save();

                designer.space(designer.system().name());
                designer.spaces().render();
                designer.workspace().refresh();
            }
        });

        Worker = this.require('Worker');
        worker = new Worker({
            "_id": "worker",
            "worker": new SharedWorker('./scripts/worker.js'),
        });
        worker.worker().port.onmessage = function (e) {
            $db.SyrupMessage.insert(e.data);
        }

    }, true);

    // Designer
    var Designer = this.require('Designer');
    Designer.on('init', function (conf) {
        var MenuBar = null,
            menubar = null,
            ToolBar = null,
            toolbar = null,
            Workspace = null,
            workspace = null,
            Spaces = null,
            spaces = null,
            System = null,
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
        this.require('syrup').on('warning', function (message) {
            this.require('message').warning(message);
        });
        this.require('syrup').on('error', function (error) {
            this.require('message').danger(error.message);
        });
        
        // system
        System = this.require('System');
        var systems = JSON.parse(window.localStorage.getItem('systems'));
        
        // case of url
        if (document.location.search.split('?')[1]) {
            var systemParam = JSON.parse(decodeURI(document.location.search.split('?')[1].split('system=')[1]));
            var sys = null;

            sys = new System(systemParam);
            this.system(sys);
            this.save();
            this.refresh();
            this.require('message').success('the system \'' + systemParam.name + '\' was imported');
        } else {
            if (systems && systems.systems && systems.systems.length) {
                this.system(new System(JSON.parse(window.localStorage.getItem(systems.systems[0]))));
            }
            this.refresh();
        }
        this.check();
        this.welcome();
    });

    Designer.on('check', function () {
        var Dialog = null,
            dialog = null;

        if (typeof SharedWorker === 'undefined') {
            Dialog = this.require('DialogCheck');
            dialog = new Dialog({
                'title': 'Hem... You will laugh',
                'message': 'Your browser has not all the features to use correctly System Designer.<br><br>Please use:<br><br>- Mozilla Firefox (recommended) or <br>- Google Chrome (desktop only).<br><br>'
            })
            dialog.show();
        }
    });

    Designer.on('welcome', function () {
        var Dialog = null,
            dialog = null;

        if (typeof SharedWorker !== 'undefined' && document.cookie.indexOf('sysDesWelcome=true') === -1) {
            Dialog = this.require('DialogWelcome');
            dialog = new Dialog({
                'title': 'Welcome to System Designer'
            })
            dialog.show();
            dialog.on('ok', function () {
                document.cookie = 'sysDesWelcome=true';
                this.hide();
            })
        }
    });

    Designer.on('render', function () {
        this.menubar().render();
        this.toolbar().render();
        this.spaces().render();
        // TODO create a function
        $(function () {
            $('[data-toggle="tooltip"]').tooltip({ 'container': 'body', delay: { "show": 1000, "hide": 100 } })
        })
    });

    Designer.on('filter', function (val) {
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
    });

    Designer.on('context', function (val) {
        this.workspace().clear();
        this.workspace().refresh();
        this.spaces().render();
    });

    Designer.on('space', function (val) {
        this.workspace().refresh();
    });

    Designer.on('save', function () {
        var systems = JSON.parse(window.localStorage.getItem('systems')),
            designer = this.require('designer'),
            system = this.require('db').collections().System.find({
                '_id': designer.system().id()
            })[0],
            systemId = system._id;
        
        // save system
        window.localStorage.setItem(systemId, JSON.stringify(system));
        
        // save index
        if (!systems) {
            systems = { 'systems': [systemId] };
        } else {
            if (systems.systems.indexOf(systemId) === -1) {
                systems.systems.push(systemId);
            }
        }
        window.localStorage.setItem('systems', JSON.stringify(systems));
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
        designer.server().start();
    });

    system.main();
});
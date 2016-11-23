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

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            system: {
                files: [
                    'src/components/css/*.css',
                    'src/components/html/*.html',
                    'src/components/js/*.js',
                    'src/system/*/*.json',
                    'src/system/*/*/*.json',
                    'src/styles/*.css',
                    'src/scripts/*.js',
                ],
                tasks: [
                    'debug'
                ],
                options: {
                    spawn: false
                }
            },
            designer: {
                options: {
                    livereload: true
                },
                files: [
                    'dist/designer/*.html'
                ]
            }
        },
        clean: [
            'build/*.js',
            'build/*.json',
            'build/*/*.json',
            'src/components/html/dialog-modal-welcome.html',
            'src/components/html/copyright.html',
            'src/components/html/menu-action-version.html',
            'src/components/html/menu-header-behavior.html',
            'src/components/html/menu-header-component.html',
            'src/components/html/menu-header-documentation.html',
            'src/components/html/menu-header-model.html',
            'src/components/html/menu-header-schema.html',
            'src/components/html/menu-header-system.html',
            'src/components/html/menu-header-type.html',
            'src/components/html/model-log.html',
            'src/components/html/model-class.html',
            'src/components/html/model-component.html',
            'src/components/html/model-schema.html',
            'src/components/html/model-system.html',
            'src/components/html/model-type.html',
            'src/components/html/model-behavior.html',
            'src/components/json/example-node.json',
            'src/system/components/ToolBarItem/163a01b7ca1935c.json',
            'src/system/components/ToolBarItem/163a01b7ca1935e.json',
            'src/system/components/ToolBarItem/1dbc51300e11z11.json',
            'src/system/components/ToolBarItem/1dbc51300e11z12.json',
            'src/system/components/ToolBarItem/1dbc51300e11z13.json',
            'src/system/components/ToolBarItem/1dbc51300e11z14.json',
            'src/system/components/ToolBarItem/1dbc51300e11z15.json',
            'src/system/components/ToolBarItem/1dbc51300e11z16.json',
            'dist/designer/*.html',
            'dist/designer/system-designer.appcache',
            'dist/designer/lib/jquery/**',
            'dist/designer/lib/system-runtime/**',
            'dist/designer/lib/github-api/**',
            'dist/designer/lib/codemirror/**',
            'dist/designer/systems/design.json',
            'dist/designer/scripts/*.js',
            'dist/designer/styles/*.css',
            'src/styles/cordova-tablet.css',
            'dist/designer/video/*.mp4',
        ],
        jshint: {
            files: [
                'src/scripts/*.js'
            ],
            options: {
                jshintrc: true
            }
        },
        jsbeautifier: {
            files: [
                'build/*.json',
                'build/*/*.json'
            ]
        },
        concat: {
            jsComponent: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            fileName = '';

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        if (filepath.indexOf('banner') !== -1 || filepath.indexOf('footer') !== -1) {

                            if (filepath.indexOf('banner') !== -1) {

                                // ID & version
                                src = src.replace('{version}', grunt.file.readJSON('package.json').version).trim();
                                src = src.replace('{id}', generateId());

                                result = src + '\n"components" :  { "JS" : {';
                            } else {
                                result = src;
                            }

                        } else {

                            // filename
                            fileName = filepath.split('js/')[1];
                            fileName = fileName.split('/')[0];

                            src = encodeURIComponent(src);

                            result = '"' + fileName + '"' + ': { "_id": "' + fileName + '",' +
                                '"source":"' + src.trim() + '"},';
                        }

                        return result;
                    }
                },
                files: {
                    'build/js/js.json': ['src/template/banner/js.txt', 'src/components/js/*.js']
                }
            },
            jsClean: {
                options: {
                    process: function (src, filepath) {
                        var result = '';

                        if (filepath.indexOf('build') !== -1 && src.indexOf('"JS": {}') === -1) {
                            result = src.trim().substring(0, src.length - 1);
                        } else {
                            result = src;
                        }

                        return result;
                    }
                },
                files: {
                    'build/js/js.json': ['build/js/js.json', 'src/template/footer/js.txt']
                }
            },
            jsonComponent: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            fileName = '';

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        if (filepath.indexOf('banner') !== -1 || filepath.indexOf('footer') !== -1) {

                            if (filepath.indexOf('banner') !== -1) {

                                // ID & version
                                src = src.replace('{version}', grunt.file.readJSON('package.json').version).trim();
                                src = src.replace('{id}', generateId());

                                result = src + '\n"components" :  { "JSON" : {';
                            } else {
                                result = src;
                            }

                        } else {

                            // filename
                            fileName = filepath.split('json/')[1];
                            fileName = fileName.split('/')[0];

                            src = encodeURIComponent(src);

                            result = '"' + fileName + '"' + ': { "_id": "' + fileName + '",' +
                                '"source":"' + src.trim() + '"},';
                        }

                        return result;
                    }
                },
                files: {
                    'build/json/json.json': ['src/template/banner/json.txt', 'src/components/json/*.json']
                }
            },
            jsonClean: {
                options: {
                    process: function (src, filepath) {
                        var result = '';

                        if (filepath.indexOf('build') !== -1 && src.indexOf('"JSON": {}') === -1) {
                            result = src.trim().substring(0, src.length - 1);
                        } else {
                            result = src;
                        }

                        return result;
                    }
                },
                files: {
                    'build/json/json.json': ['build/json/json.json', 'src/template/footer/json.txt']
                }
            },
            htmlComponent: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            fileName = '';

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        if (filepath.indexOf('banner') !== -1 || filepath.indexOf('footer') !== -1) {

                            if (filepath.indexOf('banner') !== -1) {

                                // ID & version
                                src = src.replace('{version}', grunt.file.readJSON('package.json').version).trim();
                                src = src.replace('{id}', generateId());

                                result = src + '\n"components" :  { "HTML" : {';
                            } else {
                                result = src;
                            }

                        } else {

                            // filename
                            fileName = filepath.split('html/')[1];
                            fileName = fileName.split('/')[0];

                            // version 
                            src = src.replace('{{designer-version}}', grunt.file.readJSON('package.json').version).trim();

                            // clean
                            src = src.replace(/\n/g, '\\n');
                            src = src.replace(/\r/g, '\\r');
                            src = src.replace(/\t/g, '\\t');
                            src = src.replace(/"/g, '\\"');

                            result = '"' + fileName + '"' + ': { "_id": "' + fileName + '",' +
                                '"source":"' + src.trim() + '"},';
                        }

                        return result;
                    }
                },
                files: {
                    'build/html/html.json': ['src/template/banner/html.txt', 'src/components/html/*.html']
                }
            },
            htmlClean: {
                options: {
                    process: function (src, filepath) {
                        var result = '';

                        if (filepath.indexOf('build') !== -1 && src.indexOf('"HTML": {}') === -1) {
                            result = src.trim().substring(0, src.length - 1);
                        } else {
                            result = src;
                        }

                        return result;
                    }
                },
                files: {
                    'build/html/html.json': ['build/html/html.json', 'src/template/footer/html.txt']
                }
            },
            cssComponent: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            fileName = '';

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        if (filepath.indexOf('banner') !== -1 || filepath.indexOf('footer') !== -1) {

                            if (filepath.indexOf('banner') !== -1) {

                                // ID & version
                                src = src.replace('{version}', grunt.file.readJSON('package.json').version).trim();
                                src = src.replace('{id}', generateId());

                                result = src + '\n"components" :  { "CSS" : {';
                            } else {
                                result = src;
                            }

                        } else {

                            // filename
                            fileName = filepath.split('css/')[1];
                            fileName = fileName.split('/')[0];

                            // clean
                            src = src.replace(/\n/g, ' ');
                            src = src.replace(/\r/g, ' ');
                            src = src.replace(/\t/g, ' ');
                            src = src.replace(/"/g, '\\"');

                            result = '"' + fileName + '"' + ': { "_id": "' + fileName + '",' +
                                '"source":"' + src.trim() + '"},';
                        }

                        return result;
                    }
                },
                files: {
                    'build/css/css.json': ['src/template/banner/css.txt', 'src/components/css/*.css']
                }
            },
            cssClean: {
                options: {
                    process: function (src, filepath) {
                        var result = '';

                        if (filepath.indexOf('build') !== -1 && src.indexOf('"CSS": {}') === -1) {
                            result = src.trim().substring(0, src.length - 1);
                        } else {
                            result = src;
                        }

                        return result;
                    }
                },
                files: {
                    'build/css/css.json': ['build/css/css.json', 'src/template/footer/css.txt']
                }
            },
            systemInfos: {
                options: {
                    process: function (src, filepath) {
                        var result = '';

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        // ID & version
                        src = src.replace('{version}', grunt.file.readJSON('package.json').version).trim();
                        result = src.replace('{id}', generateId());

                        return result;
                    }
                },
                files: {
                    'build/system/design.json': ['src/template/banner/system.txt']
                }
            },
            systemBehaviors: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            uuid = '',
                            behaviors = {};

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        if (filepath.indexOf('build') !== -1) {
                            grunt.option('behaviors', {});
                            result = src + '\n"behaviors" : {},';
                        } else {
                            behaviors = grunt.option('behaviors');
                            uuid = JSON.parse(src)._id;
                            if (typeof uuid === 'undefined') {
                                uuid = generateId();
                                src = src.replace('{', '{"_id":"' + uuid + '",');
                            }
                            behaviors[uuid] = JSON.parse(src);
                        }
                        return result;
                    }
                },
                files: {
                    'build/system/design.json': ['build/system/design.json', 'src/system/behaviors/*/*.json']
                }
            },
            systemSchemas: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            uuid = '',
                            schemas = {};

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        if (filepath.indexOf('build') !== -1) {
                            grunt.option('schemas', {});
                            result = src + '\n"schemas" : {},';
                        } else {
                            uuid = JSON.parse(src)._id;
                            if (typeof uuid === 'undefined') {
                                uuid = generateId();
                            }
                            schemas = grunt.option('schemas');
                            schemas[uuid] = JSON.parse(src);
                            schemas[uuid]._id = uuid;
                        }
                        return result;
                    }
                },
                files: {
                    'build/system/design.json': ['build/system/design.json', 'src/system/schemas/*.json']
                }
            },
            systemModels: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            uuid = '',
                            models = {};

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        if (filepath.indexOf('build') !== -1) {
                            grunt.option('models', {});
                            result = src + '\n"models" : {},';
                        } else {
                            src = src.replace('{{designer-version}}', grunt.file.readJSON('package.json').version).trim();

                            uuid = JSON.parse(src)._id;
                            if (typeof uuid === 'undefined') {
                                uuid = generateId();
                            }
                            models = grunt.option('models');
                            models[uuid] = JSON.parse(src);
                            models[uuid]._id = uuid;
                        }
                        return result;
                    }
                },
                files: {
                    'build/system/design.json': ['build/system/design.json', 'src/system/models/*.json']
                }
            },
            systemTypes: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            uuid = '',
                            types = {};

                        if (filepath.indexOf('build') !== -1) {
                            grunt.option('types', {});
                            result = src + '\n"types" : {},';
                        } else {
                            uuid = JSON.parse(src).name;
                            types = grunt.option('types');
                            types[uuid] = JSON.parse(src);
                        }
                        return result;
                    }
                },
                files: {
                    'build/system/design.json': ['build/system/design.json', 'src/system/types/*.json']
                }
            },
            systemComponents: {
                options: {
                    process: function (src, filepath) {
                        var result = '',
                            uuid = '',
                            collectionName = '',
                            components = {};

                        if (filepath.indexOf('build') !== -1) {
                            result = src + '\n"components" : {}\n}';
                            grunt.option('components', {});
                        } else {
                            components = grunt.option('components');

                            uuid = JSON.parse(src)._id;

                            collectionName = filepath.split('components/')[1];
                            collectionName = collectionName.split('/')[0];

                            src = src.replace('{{designer-version}}', grunt.file.readJSON('package.json').version).trim();

                            if (typeof components[collectionName] === 'undefined') {
                                components[collectionName] = {};
                            }

                            components[collectionName][uuid] = JSON.parse(src);
                        }
                        return result;
                    }
                },
                files: {
                    'build/system/design.json': ['build/system/design.json', 'src/system/components/*/*.json']
                }
            },
            systemFill: {
                options: {
                    process: function (src, filepath) {
                        var system = {};

                        system = JSON.parse(src);
                        system.components = grunt.option('components');
                        system.schemas = grunt.option('schemas');
                        system.models = grunt.option('models');
                        system.types = grunt.option('types');
                        system.behaviors = grunt.option('behaviors');

                        grunt.option('system', system);

                        return JSON.stringify(system);
                    }
                },
                files: {
                    'build/system/design.json': ['build/system/design.json']
                }
            },
            'electron-app': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/designer/systems/app.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/app.min.js': ['dist/designer/scripts/app.min.js']
                }
            },
            'electron-behavior': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/behavior.min.js': ['dist/designer/scripts/behavior.min.js']
                }
            },
            'electron-component': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/component.min.js': ['dist/designer/scripts/component.min.js']
                }
            },
            'electron-designer': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/designer.min.js': ['dist/designer/scripts/designer.min.js']
                }
            },
            'electron-model': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/model.min.js': ['dist/designer/scripts/model.min.js']
                }
            },
            'electron-schema': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/schema.min.js': ['dist/designer/scripts/schema.min.js']
                }
            },
            'electron-system': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/system.min.js': ['dist/designer/scripts/system.min.js']
                }
            },
            'electron-type': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/type.min.js': ['dist/designer/scripts/type.min.js']
                }
            },
            'cordova-app': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/designer/systems/app.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/app.min.js': ['dist/designer/scripts/app.min.js']
                }
            },
            'cordova-behavior': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/behavior.min.js': ['dist/designer/scripts/behavior.min.js']
                }
            },
            'cordova-component': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/component.min.js': ['dist/designer/scripts/component.min.js']
                }
            },
            'cordova-designer': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/designer.min.js': ['dist/designer/scripts/designer.min.js']
                }
            },
            'cordova-model': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/model.min.js': ['dist/designer/scripts/model.min.js']
                }
            },
            'cordova-schema': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/schema.min.js': ['dist/designer/scripts/schema.min.js']
                }
            },
            'cordova-system': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/system.min.js': ['dist/designer/scripts/system.min.js']
                }
            },
            'cordova-type': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/type.min.js': ['dist/designer/scripts/type.min.js']
                }
            }
        },
        "merge-json": {
            runtime: {
                src: ["build/js/js.json", "build/json/json.json", "build/html/html.json", "build/css/css.json", "build/system/design.json"],
                dest: "build/system/design.json"
            },
            addons: {
                src: ["src/addons/*.json", "build/system/design.json"],
                dest: "build/system/design.json"
            }
        },
        uglify: {
            web: {
                options: {
                    banner:
                    '/*\n' +
                    '* System Designer\n' +
                    '*\n' +
                    '* https://system-designer.github.io\n' +
                    '*\n' +
                    '* Copyright 2016 Erwan Carriou\n' +
                    '*\n' +
                    '* Licensed under the Apache License, Version 2.0 (the "License");\n' +
                    '* you may not use this file except in compliance with the License.\n' +
                    '* You may obtain a copy of the License at\n' +
                    '*\n' +
                    '*    http://www.apache.org/licenses/LICENSE-2.0\n' +
                    '*\n' +
                    '* Unless required by applicable law or agreed to in writing, software\n' +
                    '* distributed under the License is distributed on an "AS IS" BASIS,\n' +
                    '* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n' +
                    '* See the License for the specific language governing permissions and\n' +
                    '* limitations under the License.\n' +
                    '*/\n'
                },
                files: {
                    'dist/designer/scripts/behavior.min.js': ['src/scripts/behavior.js'],
                    'dist/designer/scripts/cordova-tablet.min.js': ['src/scripts/cordova-tablet.js'],
                    'dist/designer/scripts/component.min.js': ['src/scripts/component.js'],
                    'dist/designer/scripts/designer.min.js': ['src/scripts/designer.js'],
                    'dist/designer/scripts/model.min.js': ['src/scripts/model.js'],
                    'dist/designer/scripts/schema.min.js': ['src/scripts/schema.js'],
                    'dist/designer/scripts/system.min.js': ['src/scripts/system.js'],
                    'dist/designer/scripts/type.min.js': ['src/scripts/type.js'],
                    'dist/designer/scripts/app.min.js': ['src/scripts/app.js']
                }
            },
            cordova: {
                files: {
                    'dist/designer/lib/codemirror/codemirror.min.js': ['node_modules/codemirror/lib/codemirror.js'],
                    'dist/designer/lib/codemirror/active-line.min.js': ['node_modules/codemirror/addon/selection/active-line.js'],
                    'dist/designer/lib/codemirror/javascript.min.js': ['node_modules/codemirror/mode/javascript/javascript.js'],
                    'dist/designer/lib/codemirror/textile.min.js': ['node_modules/codemirror/mode/textile/textile.js'],
                    'dist/designer/lib/codemirror/css.min.js': ['node_modules/codemirror/mode/css/css.js'],
                    'dist/designer/lib/codemirror/htmlmixed.min.js': ['node_modules/codemirror/mode/htmlmixed/htmlmixed.js'],
                    'dist/designer/lib/codemirror/xml.min.js': ['node_modules/codemirror/mode/xml/xml.js'],
                    'dist/designer/lib/codemirror/closebrackets.min.js': ['node_modules/codemirror/addon/edit/closebrackets.js']
                }
            }
        },
        copy: {
            system: {
                src: 'build/system/design.json',
                dest: 'dist/designer/systems/design.json'
            },
            video: {
                src: 'src/video/systemdesigner.mp4',
                dest: 'dist/designer/video/systemdesigner.mp4',
            },
            'video-web': {
                src: 'src/video/systemdesigner-web.mp4',
                dest: 'dist/designer/video/systemdesigner.mp4',
            },
            css: {
                files: [
                    {
                        src: 'src/styles/behavior.css',
                        dest: 'dist/designer/styles/behavior.css'
                    },
                    {
                        src: 'src/styles/component.css',
                        dest: 'dist/designer/styles/component.css'
                    },
                    {
                        src: 'src/styles/designer.css',
                        dest: 'dist/designer/styles/designer.css'
                    },
                    {
                        src: 'src/styles/model.css',
                        dest: 'dist/designer/styles/model.css'
                    },
                    {
                        src: 'src/styles/schema.css',
                        dest: 'dist/designer/styles/schema.css'
                    },
                    {
                        src: 'src/styles/system.css',
                        dest: 'dist/designer/styles/system.css'
                    },
                    {
                        src: 'src/styles/type.css',
                        dest: 'dist/designer/styles/type.css'
                    },
                    {
                        src: 'src/styles/cordova-tablet.css',
                        dest: 'dist/designer/styles/cordova-tablet.css'
                    }
                ]
            },
            'html-web': {
                files: [
                    {
                        src: 'src/target/web/html/app.html',
                        dest: 'dist/designer/app.html'
                    },
                    {
                        src: 'src/target/web/html/behavior.html',
                        dest: 'dist/designer/behavior.html'
                    },
                    {
                        src: 'src/target/web/html/component.html',
                        dest: 'dist/designer/component.html'
                    },
                    {
                        src: 'src/target/web/html/index.html',
                        dest: 'dist/designer/index.html'
                    },
                    {
                        src: 'src/target/web/html/model.html',
                        dest: 'dist/designer/model.html'
                    },
                    {
                        src: 'src/target/web/html/schema.html',
                        dest: 'dist/designer/schema.html'
                    },
                    {
                        src: 'src/target/web/html/system.html',
                        dest: 'dist/designer/system.html'
                    },
                    {
                        src: 'src/target/web/html/type.html',
                        dest: 'dist/designer/type.html'
                    }
                ]
            },
            'appcache-web': {
                files: [
                    {
                        src: 'src/target/web/manifest/system-designer.appcache',
                        dest: 'dist/designer/system-designer.appcache'
                    }
                ]
            },
            'components-web': {
                files: [
                    {
                        src: 'src/target/web/components/html/dialog-modal-welcome.html',
                        dest: 'src/components/html/dialog-modal-welcome.html'
                    },
                    {
                        src: 'src/target/web/components/html/copyright.html',
                        dest: 'src/components/html/copyright.html'
                    },
                    {
                        src: 'src/target/web/components/html/menu-action-version.html',
                        dest: 'src/components/html/menu-action-version.html'
                    },
                    {
                        src: 'src/target/web/components/html/menu-header-behavior.html',
                        dest: 'src/components/html/menu-header-behavior.html'
                    },
                    {
                        src: 'src/target/web/components/html/menu-header-component.html',
                        dest: 'src/components/html/menu-header-component.html'
                    },
                    {
                        src: 'src/target/web/components/html/menu-header-documentation.html',
                        dest: 'src/components/html/menu-header-documentation.html'
                    },
                    {
                        src: 'src/target/web/components/html/menu-header-model.html',
                        dest: 'src/components/html/menu-header-model.html'
                    },
                    {
                        src: 'src/target/web/components/html/menu-header-schema.html',
                        dest: 'src/components/html/menu-header-schema.html'
                    },
                    {
                        src: 'src/target/web/components/html/menu-header-system.html',
                        dest: 'src/components/html/menu-header-system.html'
                    },
                    {
                        src: 'src/target/web/components/html/model-log.html',
                        dest: 'src/components/html/model-log.html'
                    },
                    {
                        src: 'src/target/web/components/html/model-class.html',
                        dest: 'src/components/html/model-class.html'
                    },
                    {
                        src: 'src/target/web/components/html/model-component.html',
                        dest: 'src/components/html/model-component.html'
                    },
                    {
                        src: 'src/target/web/components/html/model-schema.html',
                        dest: 'src/components/html/model-schema.html'
                    },
                    {
                        src: 'src/target/web/components/html/model-system.html',
                        dest: 'src/components/html/model-system.html'
                    },
                    {
                        src: 'src/target/web/components/html/model-type.html',
                        dest: 'src/components/html/model-type.html'
                    },
                    {
                        src: 'src/target/web/components/html/model-behavior.html',
                        dest: 'src/components/html/model-behavior.html'
                    },
                    {
                        src: 'src/target/web/components/html/menu-header-type.html',
                        dest: 'src/components/html/menu-header-type.html'
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/163a01b7ca1935c.json',
                        dest: 'src/system/components/ToolBarItem/163a01b7ca1935c.json'
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/163a01b7ca1935e.json',
                        dest: 'src/system/components/ToolBarItem/163a01b7ca1935e.json'
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51300e11z11.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z11.json'
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51300e11z12.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z12.json'
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51300e11z13.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z13.json'
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51300e11z14.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z14.json'
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51300e11z15.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z15.json'
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51300e11z16.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z16.json'
                    }
                ]
            },
            'html-electron': {
                files: [
                    {
                        src: 'src/target/electron/html/app.html',
                        dest: 'dist/designer/app.html'
                    },
                    {
                        src: 'src/target/electron/html/behavior.html',
                        dest: 'dist/designer/behavior.html'
                    },
                    {
                        src: 'src/target/electron/html/component.html',
                        dest: 'dist/designer/component.html'
                    },
                    {
                        src: 'src/target/electron/html/index.html',
                        dest: 'dist/designer/index.html'
                    },
                    {
                        src: 'src/target/electron/html/model.html',
                        dest: 'dist/designer/model.html'
                    },
                    {
                        src: 'src/target/electron/html/schema.html',
                        dest: 'dist/designer/schema.html'
                    },
                    {
                        src: 'src/target/electron/html/system.html',
                        dest: 'dist/designer/system.html'
                    },
                    {
                        src: 'src/target/electron/html/type.html',
                        dest: 'dist/designer/type.html'
                    }
                ]
            },
            'json-electron': {
                files: [
                    {
                        src: 'src/target/electron/components/json/example-node.json',
                        dest: 'src/components/json/example-node.json'
                    }
                ]
            },
            'html-cordova': {
                files: [
                    {
                        src: 'src/target/cordova/html/app.html',
                        dest: 'dist/designer/app.html'
                    },
                    {
                        src: 'src/target/cordova/html/behavior.html',
                        dest: 'dist/designer/behavior.html'
                    },
                    {
                        src: 'src/target/cordova/html/component.html',
                        dest: 'dist/designer/component.html'
                    },
                    {
                        src: 'src/target/cordova/html/index.html',
                        dest: 'dist/designer/index.html'
                    },
                    {
                        src: 'src/target/cordova/html/model.html',
                        dest: 'dist/designer/model.html'
                    },
                    {
                        src: 'src/target/cordova/html/schema.html',
                        dest: 'dist/designer/schema.html'
                    },
                    {
                        src: 'src/target/cordova/html/system.html',
                        dest: 'dist/designer/system.html'
                    },
                    {
                        src: 'src/target/cordova/html/type.html',
                        dest: 'dist/designer/type.html'
                    }
                ]
            },
            'components-electron': {
                files: [
                    {
                        src: 'src/target/electron/components/html/dialog-modal-welcome.html',
                        dest: 'src/components/html/dialog-modal-welcome.html'
                    },
                    {
                        src: 'src/target/electron/components/html/menu-action-version.html',
                        dest: 'src/components/html/menu-action-version.html'
                    },
                    {
                        src: 'src/target/electron/components/html/copyright.html',
                        dest: 'src/components/html/copyright.html'
                    },
                    {
                        src: 'src/target/electron/components/html/menu-header-behavior.html',
                        dest: 'src/components/html/menu-header-behavior.html'
                    },
                    {
                        src: 'src/target/electron/components/html/menu-header-component.html',
                        dest: 'src/components/html/menu-header-component.html'
                    },
                    {
                        src: 'src/target/electron/components/html/menu-header-documentation.html',
                        dest: 'src/components/html/menu-header-documentation.html'
                    },
                    {
                        src: 'src/target/electron/components/html/menu-header-model.html',
                        dest: 'src/components/html/menu-header-model.html'
                    },
                    {
                        src: 'src/target/electron/components/html/menu-header-schema.html',
                        dest: 'src/components/html/menu-header-schema.html'
                    },
                    {
                        src: 'src/target/electron/components/html/menu-header-system.html',
                        dest: 'src/components/html/menu-header-system.html'
                    },
                    {
                        src: 'src/target/electron/components/html/menu-header-type.html',
                        dest: 'src/components/html/menu-header-type.html'
                    },
                    {
                        src: 'src/target/electron/components/html/model-log.html',
                        dest: 'src/components/html/model-log.html'
                    },
                    {
                        src: 'src/target/electron/components/html/model-class.html',
                        dest: 'src/components/html/model-class.html'
                    },
                    {
                        src: 'src/target/electron/components/html/model-component.html',
                        dest: 'src/components/html/model-component.html'
                    },
                    {
                        src: 'src/target/electron/components/html/model-schema.html',
                        dest: 'src/components/html/model-schema.html'
                    },
                    {
                        src: 'src/target/electron/components/html/model-system.html',
                        dest: 'src/components/html/model-system.html'
                    },
                    {
                        src: 'src/target/electron/components/html/model-type.html',
                        dest: 'src/components/html/model-type.html'
                    },
                    {
                        src: 'src/target/electron/components/html/model-behavior.html',
                        dest: 'src/components/html/model-behavior.html'
                    },
                    {
                        src: 'src/target/electron/components/ToolBarItem/163a01b7ca1935c.json',
                        dest: 'src/system/components/ToolBarItem/163a01b7ca1935c.json'
                    },
                    {
                        src: 'src/target/electron/components/ToolBarItem/163a01b7ca1935e.json',
                        dest: 'src/system/components/ToolBarItem/163a01b7ca1935e.json'
                    },
                    {
                        src: 'src/target/electron/components/ToolBarItem/1dbc51300e11z11.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z11.json'
                    },
                    {
                        src: 'src/target/electron/components/ToolBarItem/1dbc51300e11z12.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z12.json'
                    },
                    {
                        src: 'src/target/electron/components/ToolBarItem/1dbc51300e11z13.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z13.json'
                    },
                    {
                        src: 'src/target/electron/components/ToolBarItem/1dbc51300e11z14.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z14.json'
                    },
                    {
                        src: 'src/target/electron/components/ToolBarItem/1dbc51300e11z15.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z15.json'
                    },
                    {
                        src: 'src/target/electron/components/ToolBarItem/1dbc51300e11z16.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51300e11z16.json'
                    }
                ]
            },
            'components-cordova': {
                files: [
                    {
                        src: 'src/target/cordova/components/html/dialog-modal-welcome.html',
                        dest: 'src/components/html/dialog-modal-welcome.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/copyright.html',
                        dest: 'src/components/html/copyright.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/menu-action-version.html',
                        dest: 'src/components/html/menu-action-version.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/menu-header-behavior.html',
                        dest: 'src/components/html/menu-header-behavior.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/menu-header-component.html',
                        dest: 'src/components/html/menu-header-component.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/menu-header-documentation.html',
                        dest: 'src/components/html/menu-header-documentation.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/menu-header-model.html',
                        dest: 'src/components/html/menu-header-model.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/menu-header-schema.html',
                        dest: 'src/components/html/menu-header-schema.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/menu-header-system.html',
                        dest: 'src/components/html/menu-header-system.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/menu-header-type.html',
                        dest: 'src/components/html/menu-header-type.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/model-log.html',
                        dest: 'src/components/html/model-log.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/model-class.html',
                        dest: 'src/components/html/model-class.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/model-component.html',
                        dest: 'src/components/html/model-component.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/model-schema.html',
                        dest: 'src/components/html/model-schema.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/model-system.html',
                        dest: 'src/components/html/model-system.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/model-type.html',
                        dest: 'src/components/html/model-type.html'
                    },
                    {
                        src: 'src/target/cordova/components/html/model-behavior.html',
                        dest: 'src/components/html/model-behavior.html'
                    }
                ]
            },
            'scripts-cordova': {
                files: [
                    {
                        src: 'src/target/cordova/scripts/cordova-tablet.js',
                        dest: 'src/scripts/cordova-tablet.js'
                    }
                ]
            },
            'styles-cordova': {
                files: [
                    {
                        src: 'src/target/cordova/styles/cordova-tablet.css',
                        dest: 'src/styles/cordova-tablet.css'
                    }
                ]
            },
            'debug-web': {
                files: [
                    {
                        src: 'src/scripts/behavior.js',
                        dest: 'dist/designer/scripts/behavior.min.js'
                    },
                    {
                        src: 'src/scripts/component.js',
                        dest: 'dist/designer/scripts/component.min.js'
                    },
                    {
                        src: 'src/scripts/designer.js',
                        dest: 'dist/designer/scripts/designer.min.js'
                    },
                    {
                        src: 'src/scripts/model.js',
                        dest: 'dist/designer/scripts/model.min.js'
                    },
                    {
                        src: 'src/scripts/schema.js',
                        dest: 'dist/designer/scripts/schema.min.js'
                    },
                    {
                        src: 'src/scripts/system.js',
                        dest: 'dist/designer/scripts/system.min.js'
                    },
                    {
                        src: 'src/scripts/type.js',
                        dest: 'dist/designer/scripts/type.min.js'
                    },
                    {
                        src: 'src/scripts/app.js',
                        dest: 'dist/designer/scripts/app.min.js'
                    }
                ]
            },
            lib: {
                files: [
                    {
                        src: 'bower_components/jquery/dist/jquery.min.js',
                        dest: 'dist/designer/lib/jquery/jquery.min.js'
                    },
                    {
                        src: 'node_modules/github-api/dist/GitHub.bundle.min.js',
                        dest: 'dist/designer/lib/github-api/GitHub.bundle.min.js'
                    },
                    {
                        src: 'node_modules/github-api/dist/GitHub.bundle.min.js.map',
                        dest: 'dist/designer/lib/github-api/GitHub.bundle.min.js.map'
                    },
                    {
                        src: 'bower_components/system-runtime/dist/system-runtime.min.js',
                        dest: 'dist/designer/lib/system-runtime/system-runtime.min.js'
                    },
                    {
                        src: 'bower_components/system-runtime/dist/system-runtime.min.js',
                        dest: 'src/components/js/system-runtime.min.js'
                    }
                ],
                options: {
                    process: function (content, srcpath) {
                        var result = content;
                        if (srcpath.indexOf('jquery') != -1) {
                            result = content.replace('//# sourceMappingURL=jquery.min.map', '')
                        }
                        return result;
                    }
                }
            },
            'cordova-lib': {
                files: [{
                    src: 'node_modules/codemirror/lib/codemirror.css',
                    dest: 'dist/designer/lib/codemirror/codemirror.css'
                },
                {
                    src: 'node_modules/codemirror/theme/eclipse.css',
                    dest: 'dist/designer/lib/codemirror/eclipse.css'
                }]
            }
        },
        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 9001,
                    base: 'dist/designer'
                }
            },
            serverDebug: {
                options: {
                    livereload: true,
                    port: 9001,
                    base: 'dist/designer'
                }
            }
        }
    });

    // default tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-merge-json');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // system JSON task
    grunt.registerTask('system-json', [
        'concat:jsComponent',
        'concat:jsClean',
        'concat:jsonComponent',
        'concat:jsonClean',
        'concat:htmlComponent',
        'concat:htmlClean',
        'concat:cssComponent',
        'concat:cssClean',
        'concat:systemInfos',
        'concat:systemBehaviors',
        'concat:systemSchemas',
        'concat:systemModels',
        'concat:systemTypes',
        'concat:systemComponents',
        'concat:systemFill'
    ]);

    // start the server
    grunt.registerTask('start',
        'connect:server'
    );

    // start the server in debug mode
    grunt.registerTask('start-debug', [
        'connect:serverDebug',
        'watch:designer'
    ]);

    // debug for web
    grunt.registerTask('debug-web', [
        'copy:lib',
        'copy:css',
        'copy:html-web',
        'copy:components-web',
        'system-json',
        'merge-json:runtime',
        'merge-json:addons',
        'copy:system',
        'copy:video-web',
        'jsbeautifier',
        'copy:debug-web'
    ]);

    // build for web
    grunt.registerTask('build-web', [
        'copy:lib',
        'copy:css',
        'copy:html-web',
        'copy:appcache-web',
        'copy:components-web',
        'system-json',
        'merge-json:runtime',
        'merge-json:addons',
        'copy:system',
        'copy:video-web',
        'jsbeautifier',
        'jshint',
        'uglify:web'
    ]);

    // build for electron
    grunt.registerTask('build-electron', [
        'copy:lib',
        'copy:html-electron',
        'copy:json-electron',
        'copy:components-electron',
        'copy:css',
        'system-json',
        'merge-json:runtime',
        'merge-json:addons',
        'copy:system',
        'copy:video',
        'jsbeautifier',
        'jshint',
        'uglify:web',
        'concat:electron-app',
        'concat:electron-behavior',
        'concat:electron-component',
        'concat:electron-designer',
        'concat:electron-model',
        'concat:electron-schema',
        'concat:electron-system',
        'concat:electron-type'
    ]);

    // build for cordova
    grunt.registerTask('build-cordova', [
        'copy:lib',
        'copy:cordova-lib',
        'copy:html-cordova',
        'copy:components-cordova',
        'copy:scripts-cordova',
        'copy:styles-cordova',
        'copy:css',
        'system-json',
        'merge-json:runtime',
        'merge-json:addons',
        'copy:system',
        'jsbeautifier',
        'jshint',
        'uglify:web',
        'uglify:cordova',
        'concat:cordova-app',
        'concat:cordova-behavior',
        'concat:cordova-component',
        'concat:cordova-designer',
        'concat:cordova-model',
        'concat:cordova-schema',
        'concat:cordova-system',
        'concat:cordova-type'
    ]);

    // default test
    grunt.registerTask('test', [
        'build-web'
    ]);

    // default debug
    grunt.registerTask('debug', [
        'debug-web'
    ]);

    // default build
    grunt.registerTask('build', [
        'build-web'
    ]);
};
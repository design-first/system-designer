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
            'src/system/components/ToolBarItem/1dbc51200e116e6.json',
            'src/system/components/ToolBarItem/1dbc51200e116e8.json',
            'src/system/components/ToolBarItem/1dbc51200e11610.json',
            'src/system/components/ToolBarItem/1dbc51200e11612.json',
            'src/system/components/ToolBarItem/1dbc51200e11614.json',
            'src/system/components/ToolBarItem/1dbc51220e116e1.json',
            'src/system/components/ToolBarItem/13a291c27f16310.json',
            'src/system/components/ToolBarItem/13a291c27f16311.json',
            'src/system/components/ToolBarItem/163a01b7ca1935c.json',
            'src/system/behaviors/1dbc51200e11z10',
            'src/system/behaviors/1dbc51200e116e10',
            'src/system/behaviors/1dbc51200e11510',
            'src/system/behaviors/1dbc51200e11615',
            'src/system/behaviors/1dbc51200e11616',
            'src/system/behaviors/1dbc51200e11617',
            'src/system/behaviors/13a291c27f16314',
            'src/system/behaviors/13f70137b61b19b',
            'dist/designer/*.html',
            'dist/designer/lib/jquery/**',
            'dist/designer/lib/system-runtime/**',
            'dist/designer/systems/design.json',
            'dist/designer/scripts/*.js',
            'dist/designer/styles/*.css',
            'dist/background.js',
            'dist/icons',
            'dist/LICENSE',
            'dist/manifest.json',
            'dist/README.md'
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

                            src = encodeURI(src);

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

                            src = encodeURI(src);

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
            'electron-documentation': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/documentation.min.js': ['dist/designer/scripts/documentation.min.js']
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
            'webextension-behavior': {
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
            'webextension-component': {
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
            'webextension-designer': {
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
            }, 'webextension-documentation': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('build/system/design.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/designer/scripts/documentation.min.js': ['dist/designer/scripts/documentation.min.js']
                }
            },
            'webextension-model': {
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
            'webextension-schema': {
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
            'webextension-system': {
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
            'webextension-type': {
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
                src: ["build/js/js.json", "build/json/json.json", "build/html/html.json", "build/css/css.json", "src/addons/*.json", "build/system/design.json"],
                dest: "build/system/design.json"
            }
        },
        uglify: {
            options: {
                banner:
                '/*\n' +
                '* System Designer\n' +
                '* https://system-designer.github.io\n' +
                '* @ecarriou\n' +
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
            dist: {
                files: {
                    'dist/designer/scripts/behavior.min.js': ['src/scripts/behavior.js'],
                    'dist/designer/scripts/component.min.js': ['src/scripts/component.js'],
                    'dist/designer/scripts/designer.min.js': ['src/scripts/designer.js'],
                    'dist/designer/scripts/model.min.js': ['src/scripts/model.js'],
                    'dist/designer/scripts/schema.min.js': ['src/scripts/schema.js'],
                    'dist/designer/scripts/system.min.js': ['src/scripts/system.js'],
                    'dist/designer/scripts/type.min.js': ['src/scripts/type.js'],
                    'dist/designer/scripts/documentation.min.js': ['src/scripts/documentation.js']
                }
            }
        },
        copy: {
            system: {
                src: 'build/system/design.json',
                dest: 'dist/designer/systems/design.json'
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
                        src: 'src/styles/documentation.css',
                        dest: 'dist/designer/styles/documentation.css'
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
            'components-web': {
                files: [
                    {
                        src: 'src/target/web/components/html/dialog-modal-welcome.html',
                        dest: 'src/components/html/dialog-modal-welcome.html'
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51200e116e6.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51200e116e6.json',
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51200e116e8.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51200e116e8.json',
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51200e11610.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51200e11610.json',
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51200e11612.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51200e11612.json',
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51200e11614.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51200e11614.json',
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/1dbc51220e116e1.json',
                        dest: 'src/system/components/ToolBarItem/1dbc51220e116e1.json',
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/13a291c27f16310.json',
                        dest: 'src/system/components/ToolBarItem/13a291c27f16310.json',
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/13a291c27f16311.json',
                        dest: 'src/system/components/ToolBarItem/13a291c27f16311.json',
                    },
                    {
                        src: 'src/target/web/components/ToolBarItem/163a01b7ca1935c.json',
                        dest: 'src/system/components/ToolBarItem/163a01b7ca1935c.json',
                    }
                ]
            },
            'behaviors-web': {
                files: [
                    {
                        src: 'src/target/web/behaviors/1dbc51200e11z10/click.json',
                        dest: 'src/system/behaviors/1dbc51200e11z10/click.json',
                    },
                    {
                        src: 'src/target/web/behaviors/1dbc51200e116e10/click.json',
                        dest: 'src/system/behaviors/1dbc51200e116e10/click.json',
                    },
                    {
                        src: 'src/target/web/behaviors/1dbc51200e11510/click.json',
                        dest: 'src/system/behaviors/1dbc51200e11510/click.json',
                    },
                    {
                        src: 'src/target/web/behaviors/1dbc51200e11615/click.json',
                        dest: 'src/system/behaviors/1dbc51200e11615/click.json',
                    },
                    {
                        src: 'src/target/web/behaviors/1dbc51200e11616/click.json',
                        dest: 'src/system/behaviors/1dbc51200e11616/click.json',
                    },
                    {
                        src: 'src/target/web/behaviors/1dbc51200e11617/click.json',
                        dest: 'src/system/behaviors/1dbc51200e11617/click.json',
                    },
                    {
                        src: 'src/target/web/behaviors/13a291c27f16314/click.json',
                        dest: 'src/system/behaviors/13a291c27f16314/click.json',
                    },
                    {
                        src: 'src/target/web/behaviors/13f70137b61b19b/click.json',
                        dest: 'src/system/behaviors/13f70137b61b19b/click.json',
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
            'components-electron': {
                files: [
                    {
                        src: 'src/target/electron/components/html/dialog-modal-welcome.html',
                        dest: 'src/components/html/dialog-modal-welcome.html'
                    }
                ]
            },
            'html-webextension': {
                files: [
                    {
                        src: 'src/target/webextension/html/app.html',
                        dest: 'dist/designer/app.html'
                    },
                    {
                        src: 'src/target/webextension/html/behavior.html',
                        dest: 'dist/designer/behavior.html'
                    },
                    {
                        src: 'src/target/webextension/html/component.html',
                        dest: 'dist/designer/component.html'
                    },
                    {
                        src: 'src/target/webextension/html/index.html',
                        dest: 'dist/designer/index.html'
                    },
                    {
                        src: 'src/target/webextension/html/model.html',
                        dest: 'dist/designer/model.html'
                    },
                    {
                        src: 'src/target/webextension/html/schema.html',
                        dest: 'dist/designer/schema.html'
                    },
                    {
                        src: 'src/target/webextension/html/system.html',
                        dest: 'dist/designer/system.html'
                    },
                    {
                        src: 'src/target/webextension/html/type.html',
                        dest: 'dist/designer/type.html'
                    }
                ]
            },
            'components-webextension': {
                files: [
                    {
                        src: 'src/target/webextension/html/dialog-modal-welcome.html',
                        dest: 'src/components/html/dialog-modal-welcome.html'
                    }
                ]
            },
            'scripts-webextension': {
                files: [
                    {
                        src: 'src/target/webextension/scripts/background.js',
                        dest: 'dist/background.js'
                    }
                ]
            },
            'conf-webextension': {
                files: [
                    {
                        src: 'src/target/webextension/conf/LICENCE',
                        dest: 'dist/LICENCE.js'
                    },
                    {
                        src: 'src/target/webextension/conf/manifest.json',
                        dest: 'dist/manifest.json'
                    },
                    {
                        src: 'src/target/webextension/conf/README.md',
                        dest: 'dist/README.md'
                    }
                ]
            },
            'icons-webextension': {
                files: [
                    {
                        src: 'src/target/webextension/icons/page-32.png',
                        dest: 'dist/icons/page-32.png'
                    },
                    {
                        src: 'src/target/webextension/icons/page-48.png',
                        dest: 'dist/icons/page-48.png'
                    }
                ]
            },
            'behaviors-electron': {
                files: [
                    {
                        src: 'src/target/electron/behaviors/1dbc51200e11z10/click.json',
                        dest: 'src/system/behaviors/1dbc51200e11z10/click.json',
                    },
                    {
                        src: 'src/target/electron/behaviors/1dbc51200e116e10/click.json',
                        dest: 'src/system/behaviors/1dbc51200e116e10/click.json',
                    },
                    {
                        src: 'src/target/electron/behaviors/1dbc51200e11510/click.json',
                        dest: 'src/system/behaviors/1dbc51200e11510/click.json',
                    },
                    {
                        src: 'src/target/electron/behaviors/1dbc51200e11615/click.json',
                        dest: 'src/system/behaviors/1dbc51200e11615/click.json',
                    },
                    {
                        src: 'src/target/electron/behaviors/1dbc51200e11616/click.json',
                        dest: 'src/system/behaviors/1dbc51200e11616/click.json',
                    },
                    {
                        src: 'src/target/electron/behaviors/1dbc51200e11617/click.json',
                        dest: 'src/system/behaviors/1dbc51200e11617/click.json',
                    },
                    {
                        src: 'src/target/electron/behaviors/13a291c27f16314/click.json',
                        dest: 'src/system/behaviors/13a291c27f16314/click.json',
                    },
                    {
                        src: 'src/target/electron/behaviors/13f70137b61b19b/click.json',
                        dest: 'src/system/behaviors/13f70137b61b19b/click.json',
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
                        src: 'src/scripts/documentation.js',
                        dest: 'dist/designer/scripts/documentation.min.js'
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
        'copy:behaviors-web',
        'copy:components-web',
        'system-json',
        'merge-json',
        'copy:system',
        'jsbeautifier',
        'copy:debug-web'
    ]);

    // build for web
    grunt.registerTask('build-web', [
        'copy:lib',
        'copy:css',
        'copy:html-web',
        'copy:behaviors-web',
        'copy:components-web',
        'system-json',
        'merge-json',
        'copy:system',
        'jsbeautifier',
        'jshint',
        'uglify'
    ]);

    // build for electron
    grunt.registerTask('build-electron', [
        'copy:lib',
        'copy:css',
        'copy:html-electron',
        'copy:behaviors-electron',
        'copy:components-electron',
        'system-json',
        'merge-json',
        'copy:system',
        'jsbeautifier',
        'jshint',
        'uglify',
        'concat:electron-behavior',
        'concat:electron-component',
        'concat:electron-designer',
        'concat:electron-documentation',
        'concat:electron-model',
        'concat:electron-schema',
        'concat:electron-system',
        'concat:electron-type'
    ]);

    // build for webextension
    grunt.registerTask('build-webextension', [
        'copy:lib',
        'copy:css',
        'copy:html-webextension',
        'copy:behaviors-web',
        'copy:components-webextension',
        'copy:scripts-webextension',
        'copy:icons-webextension',
        'copy:conf-webextension',
        'system-json',
        'merge-json',
        'copy:system',
        'jsbeautifier',
        'jshint',
        'uglify',
        'concat:webextension-behavior',
        'concat:webextension-component',
        'concat:webextension-designer',
        'concat:webextension-documentation',
        'concat:webextension-model',
        'concat:webextension-schema',
        'concat:webextension-system',
        'concat:webextension-type'
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
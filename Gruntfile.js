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

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            system: {
                files: [
                    'src/css/*.css',
                    'src/html/*.html',
                    'src/js/*.js',
                    'src/system/*/*.json',
                    'src/system/*/*/*.json',
                    'src/designer/styles/*.css',
                    'src/designer/scripts/*.js',
                ],
                tasks: [
                    'build'
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
                    'designer/*.html'
                ]
            }
        },
        clean: [
            'build/*.js',
            'build/*.json',
            'build/*/*.json',
            'designer/lib/jquery/**',
            'designer/lib/system-runtime/**',
            'designer/systems/design.json',
            'designer/scripts/*.js',
            'designer/styles/*.css'
        ],
        jshint: {
            files: [
                'src/*.js'
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
                            //fileName = fileName.replace('\.js', '');
                            
                            // clean
                            //src = src.replace(/\n/g, ' ');
                            //src = src.replace(/\r/g, ' ');
                            //src = src.replace(/\t/g, ' ');
                            
                            src = encodeURI(src);

                            result = '"' + fileName + '"' + ': { "_id": "' + fileName + '",' +
                            '"source":"' + src.trim() + '"},';
                        }

                        return result;
                    }
                },
                files: {
                    'build/js/js.json': ['src/template/banner/js.txt', 'src/js/*.js']
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
                    'build/json/json.json': ['src/template/banner/json.txt', 'src/json/*.json']
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
                    'build/html/html.json': ['src/template/banner/html.txt', 'src/html/*.html']
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
                    'build/css/css.json': ['src/template/banner/css.txt', 'src/css/*.css']
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

                        if (filepath.indexOf('build') !== -1) {
                            grunt.option('schemas', {});
                            result = src + '\n"schemas" : {},';
                        } else {
                            uuid = JSON.parse(src)._id;
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

                            src = src.replace('{version}', grunt.file.readJSON('package.json').version).trim();

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
                        system.types = grunt.option('types');
                        system.behaviors = grunt.option('behaviors');

                        return JSON.stringify(system);
                    }
                },
                files: {
                    'build/system/design.json': ['build/system/design.json']
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
                '* Copyright (C) 2016 - Erwan Carriou\n' +
                '*\n' +
                '* This program is free software: you can redistribute it and/or modify\n' +
                '* it under the terms of the GNU General Public License as published by\n' +
                '* the Free Software Foundation, either version 3 of the License, or\n' +
                '* (at your option) any later version\n' +
                '*\n' +
                '* This program is distributed in the hope that it will be useful,\n' +
                '* but WITHOUT ANY WARRANTY; without even the implied warranty of\n' +
                '* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n' +
                '* GNU General Public License for more details.\n' +
                '*\n' +
                '* You should have received a copy of the GNU General Public License\n' +
                '* along with this program.  If not, see <http://www.gnu.org/licenses/>.\n' +
                '*/\n'
            },
            dist: {
                files: {
                    'designer/scripts/behavior.min.js': ['src/designer/scripts/behavior.js'],
                    'designer/scripts/component.min.js': ['src/designer/scripts/component.js'],
                    'designer/scripts/designer.min.js': ['src/designer/scripts/designer.js'],
                    'designer/scripts/model.min.js': ['src/designer/scripts/model.js'],
                    'designer/scripts/schema.min.js': ['src/designer/scripts/schema.js'],
                    'designer/scripts/system.min.js': ['src/designer/scripts/system.js'],
                    'designer/scripts/type.min.js': ['src/designer/scripts/type.js'],
                    'designer/scripts/documentation.min.js': ['src/designer/scripts/documentation.js']
                }
            }
        },
        copy: {
            system: {
                src: 'build/system/design.json',
                dest: 'designer/systems/design.json',
            },
            worker: {
                src: 'src/designer/scripts/worker.js',
                dest: 'designer/scripts/worker.js',
            },
            css: {
                files: [
                    {
                        src: 'src/designer/styles/behavior.css',
                        dest: 'designer/styles/behavior.css',
                    },
                    {
                        src: 'src/designer/styles/component.css',
                        dest: 'designer/styles/component.css',
                    },
                    {
                        src: 'src/designer/styles/designer.css',
                        dest: 'designer/styles/designer.css',
                    },
                    {
                        src: 'src/designer/styles/model.css',
                        dest: 'designer/styles/model.css',
                    },
                    {
                        src: 'src/designer/styles/schema.css',
                        dest: 'designer/styles/schema.css',
                    },
                    {
                        src: 'src/designer/styles/system.css',
                        dest: 'designer/styles/system.css',
                    },
                    {
                        src: 'src/designer/styles/type.css',
                        dest: 'designer/styles/type.css',
                    }
                ]
            },
            lib: {
                files: [
                    {
                        src: 'bower_components/jquery/dist/jquery.min.js',
                        dest: 'designer/lib/jquery/jquery.min.js',
                    },
                    {
                        src: 'bower_components/system-runtime/build/system-runtime.min.js',
                        dest: 'designer/lib/system-runtime/system-runtime.min.js'
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
                    base: 'designer'
                }
            },
            serverDebug: {
                options: {
                    livereload: true,
                    port: 9001,
                    base: 'designer'
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
        'concat:systemTypes',
        'concat:systemComponents',
        'concat:systemFill'
    ]);

    // build task
    grunt.registerTask('start',
        'connect:server'
        );

    grunt.registerTask('start-debug', [
        'connect:serverDebug',
        'watch:designer'
    ]);

    grunt.registerTask('build', [
        'copy:lib',
        'copy:css',
        'system-json',
        'merge-json',
        'copy:system',
        'jsbeautifier',
        'jshint',
        'copy:worker',
        'uglify'
    ]);

    grunt.registerTask('test', [
        'build'
    ]);
};
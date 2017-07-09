/* 
 * System Designer
 * https://designfirst.io/systemdesigner/
 * @ecarriou
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

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            designer: {
                files: [
                    'src/systems/*/*.json',
                    'src/www/systems/*.json',
                    'src/www/scripts/*.js',
                    'src/www/styles/*.css'
                ],
                tasks: [
                    'build'
                ],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
        clean: {
            dist: ['dist'],
            js: ['dist/scripts/*.js', '!dist/scripts/*.min.js'],
            css: ['dist/styles/*.css', '!dist/styles/*.min.css']
        },
        jshint: {
            js: [
                'src/www/scripts/*.js'
            ],
            options: {
                jshintrc: true
            }
        },
        jsbeautifier: {
            json: [
                'dist/systems/*.json'
            ]
        },
        copy: {
            core: {
                expand: true,
                cwd: 'src/www',
                src: ['**'],
                dest: 'dist'
            },
            'lib-core': {
                files: [
                    {
                        src: 'node_modules/jquery/dist/jquery.min.js',
                        dest: 'dist/lib/jquery/jquery.min.js'
                    },
                    {
                        src: 'node_modules/github-api/dist/GitHub.bundle.min.js',
                        dest: 'dist/lib/github-api/GitHub.bundle.min.js'
                    },
                    {
                        src: 'node_modules/github-api/dist/GitHub.bundle.min.js.map',
                        dest: 'dist/lib/github-api/GitHub.bundle.min.js.map'
                    },
                    {
                        src: 'node_modules/jsplumb/dist/js/jsplumb.min.js',
                        dest: 'dist/lib/jsplumb/jsplumb.min.js'
                    },
                    {
                        src: 'node_modules/system-runtime/dist/system-runtime.min.js',
                        dest: 'dist/lib/system-runtime/system-runtime.min.js'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/css',
                        src: ['*'],
                        dest: 'dist/lib/bootstrap/dist/css'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/fonts',
                        src: ['*'],
                        dest: 'dist/lib/bootstrap/dist/fonts'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/js',
                        src: ['*'],
                        dest: 'dist/lib/bootstrap/dist/js'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/fonts/',
                        src: ['*'],
                        dest: 'dist/lib/bootstrap/fonts/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/js/',
                        src: ['*'],
                        dest: 'dist/lib/bootstrap/js/'
                    },
                    {
                        src: 'node_modules/prismjs/prism.js',
                        dest: 'dist/lib/prism/prism.js'
                    },
                    {
                        src: 'node_modules/prismjs/themes/prism.css',
                        dest: 'dist/lib/prism/prism.css'
                    }
                ]
            },
            'lib-ace': {
                files: [
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/ace.js',
                        dest: 'dist/lib/ace/ace.js'
                    },
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/ext-language_tools.js',
                        dest: 'dist/lib/ace/ext-language_tools.js'
                    },
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/ext-searchbox.js',
                        dest: 'dist/lib/ace/ext-searchbox.js'
                    },
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/mode-css.js',
                        dest: 'dist/lib/ace/mode-css.js'
                    },
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/mode-html.js',
                        dest: 'dist/lib/ace/mode-html.js'
                    },
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/mode-javascript.js',
                        dest: 'dist/lib/ace/mode-javascript.js'
                    },
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/mode-json.js',
                        dest: 'dist/lib/ace/mode-json.js'
                    },
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/mode-text.js',
                        dest: 'dist/lib/ace/mode-text.js'
                    },
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/worker-css.js',
                        dest: 'dist/lib/ace/worker-css.js'
                    },
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/worker-html.js',
                        dest: 'dist/lib/ace/worker-html.js'
                    },
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/worker-javascript.js',
                        dest: 'dist/lib/ace/worker-javascript.js'
                    },
                    {
                        src: 'bower_components/ace-builds/src-min-noconflict/worker-json.js',
                        dest: 'dist/lib/ace/worker-json.js'
                    }
                ]
            },
            'lib-codemirror': {
                files: [{
                    src: 'node_modules/codemirror/lib/codemirror.css',
                    dest: 'dist/lib/codemirror/codemirror.css'
                },
                {
                    src: 'node_modules/codemirror/theme/eclipse.css',
                    dest: 'dist/lib/codemirror/theme/eclipse.css'
                },
                {
                    src: 'node_modules/codemirror/lib/codemirror.js',
                    dest: 'dist/lib/codemirror/lib/codemirror.js'
                },
                {
                    src: 'node_modules/codemirror/addon/selection/active-line.js',
                    dest: 'dist/lib/codemirror/addon/selection/active-line.js'
                },
                {
                    src: 'node_modules/codemirror/mode/javascript/javascript.js',
                    dest: 'dist/lib/codemirror/mode/javascript/javascript.js'
                },
                {
                    src: 'node_modules/codemirror/mode/textile/textile.js',
                    dest: 'dist/lib/codemirror/mode/textile/textile.js'
                },
                {
                    src: 'node_modules/codemirror/mode/css/css.js',
                    dest: 'dist/lib/codemirror/mode/css/css.js'
                },
                {
                    src: 'node_modules/codemirror/mode/htmlmixed/htmlmixed.js',
                    dest: 'dist/lib/codemirror/mode/htmlmixed/htmlmixed.js'
                },
                {
                    src: 'node_modules/codemirror/mode/xml/xml.js',
                    dest: 'dist/lib/codemirror/mode/xml/xml.js'
                },
                {
                    src: 'node_modules/codemirror/addon/edit/closebrackets.js',
                    dest: 'dist/lib/codemirror/addon/edit/closebrackets.js'
                }]
            },
            web: {
                expand: true,
                cwd: 'src/merges/web',
                src: ['**'],
                dest: 'dist'
            },
            cordova: {
                expand: true,
                cwd: 'src/merges/cordova',
                src: ['**'],
                dest: 'dist'
            },
            electron: {
                expand: true,
                cwd: 'src/merges/electron',
                src: ['**'],
                dest: 'dist'
            }
        },
        "merge-json": {
            web: {
                src: ['src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/web.json', 'src/systems/core/system-designer.json'],
                dest: 'dist/systems/system-designer.json'
            },
            cordova: {
                src: ['src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/cordova.json', 'src/systems/core/system-designer.json'],
                dest: 'dist/systems/system-designer.json'
            },
            electron: {
                src: ['src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/electron.json', 'src/systems/core/system-designer.json'],
                dest: 'dist/systems/system-designer.json'
            }
        },
        cssmin: {
            all: {
                files: [{
                    expand: true,
                    cwd: 'dist/styles',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/styles',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            js: {
                options: {
                    banner:
                    '/*\n' +
                    '* System Designer\n' +
                    '*\n' +
                    '* https://designfirst.io/systemdesigner/\n' +
                    '*\n' +
                    '* Copyright 2017 Erwan Carriou\n' +
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
                    'dist/scripts/editor-behavior.min.js': ['dist/scripts/editor-behavior.js'],
                    'dist/scripts/editor-component.min.js': ['dist/scripts/editor-component.js'],
                    'dist/scripts/editor-model.min.js': ['dist/scripts/editor-model.js'],
                    'dist/scripts/editor-schema.min.js': ['dist/scripts/editor-schema.js'],
                    'dist/scripts/editor-system.min.js': ['dist/scripts/editor-system.js'],
                    'dist/scripts/editor-type.min.js': ['dist/scripts/editor-type.js'],
                    'dist/scripts/system-designer.min.js': ['dist/scripts/system-designer.js'],
                    'dist/scripts/designer-runtime.min.js': ['dist/scripts/designer-runtime.js'],
                    'dist/scripts/cordova.min.js': ['dist/scripts/cordova.js']
                }
            }
        },
        concat: {
            'electron-app': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/designer-runtime.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/designer-runtime.min.js': ['dist/scripts/designer-runtime.min.js']
                }
            },
            'electron-behavior': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-behavior.min.js': ['dist/scripts/editor-behavior.min.js']
                }
            },
            'electron-component': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-component.min.js': ['dist/scripts/editor-component.min.js']
                }
            },
            'electron-designer': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/system-designer.min.js': ['dist/scripts/system-designer.min.js']
                }
            },
            'electron-model': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-model.min.js': ['dist/scripts/editor-model.min.js']
                }
            },
            'electron-schema': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-schema.min.js': ['dist/scripts/editor-schema.min.js']
                }
            },
            'electron-system': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-system.min.js': ['dist/scripts/editor-system.min.js']
                }
            },
            'electron-type': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-type.min.js': ['dist/scripts/editor-type.min.js']
                }
            },
            'cordova-app': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/designer-runtime.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/designer-runtime.min.js': ['dist/scripts/designer-runtime.min.js']
                }
            },
            'cordova-behavior': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-behavior.min.js': ['dist/scripts/editor-behavior.min.js']
                }
            },
            'cordova-component': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-component.min.js': ['dist/scripts/editor-component.min.js']
                }
            },
            'cordova-designer': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/system-designer.min.js': ['dist/scripts/system-designer.min.js']
                }
            },
            'cordova-model': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-model.min.js': ['dist/scripts/editor-model.min.js']
                }
            },
            'cordova-schema': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-schema.min.js': ['dist/scripts/editor-schema.min.js']
                }
            },
            'cordova-system': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-system.min.js': ['dist/scripts/editor-system.min.js']
                }
            },
            'cordova-type': {
                options: {
                    process: function (src, filepath) {
                        var result;
                        result = '// Designer core system \n\nruntime.require(\'db\').system(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');\n\n' + src;
                        return result;
                    }
                },
                files: {
                    'dist/scripts/editor-type.min.js': ['dist/scripts/editor-type.min.js']
                }
            },
            license: {
                files: {
                    'dist/styles/editor-behavior.min.css': ['src/banner/license.txt', 'dist/styles/editor-behavior.min.css'],
                    'dist/styles/editor-component.min.css': ['src/banner/license.txt', 'dist/styles/editor-component.min.css'],
                    'dist/styles/editor-model.min.css': ['src/banner/license.txt', 'dist/styles/editor-model.min.css'],
                    'dist/styles/editor-schema.min.css': ['src/banner/license.txt', 'dist/styles/editor-schema.min.css'],
                    'dist/styles/editor-system.min.css': ['src/banner/license.txt', 'dist/styles/editor-system.min.css'],
                    'dist/styles/editor-type.min.css': ['src/banner/license.txt', 'dist/styles/editor-type.min.css'],
                    'dist/styles/system-designer.min.css': ['src/banner/license.txt', 'dist/styles/system-designer.min.css']
                }
            }
        },
        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 9001,
                    base: 'dist/'
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // start the server
    grunt.registerTask('start',
        'connect'
    );

    // dist for web
    grunt.registerTask('web', [
        'copy:core',
        'copy:lib-core',
        'copy:lib-ace',
        'copy:web',
        'merge-json:web',
        'jsbeautifier',
        'jshint',
        'uglify:js',
        'cssmin',
        'clean:js',
        'clean:css',
        'concat:license'
    ]);

    // build for electron
    grunt.registerTask('electron', [
        'copy:core',
        'copy:lib-core',
        'copy:lib-ace',
        'copy:electron',
        'merge-json:electron',
        'jsbeautifier',
        'jshint',
        'uglify:js',
        'cssmin',
        'concat:electron-app',
        'concat:electron-behavior',
        'concat:electron-component',
        'concat:electron-designer',
        'concat:electron-model',
        'concat:electron-schema',
        'concat:electron-system',
        'concat:electron-type',
        'clean:js',
        'clean:css',
        'concat:license'
    ]);

    // build for cordova
    grunt.registerTask('cordova', [
        'copy:core',
        'copy:lib-core',
        'copy:lib-codemirror',
        'copy:cordova',
        'merge-json:cordova',
        'jsbeautifier',
        'jshint',
        'uglify:js',
        'cssmin',
        'concat:cordova-app',
        'concat:cordova-behavior',
        'concat:cordova-component',
        'concat:cordova-designer',
        'concat:cordova-model',
        'concat:cordova-schema',
        'concat:cordova-system',
        'concat:cordova-type',
        'clean:js',
        'clean:css',
        'concat:license'
    ]);

    // default test
    grunt.registerTask('test', [
        'web'
    ]);

    // default build
    grunt.registerTask('build', [
        'web'
    ]);
};
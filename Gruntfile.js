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
          'src/www/*.html',
          'src/www/systems/*.json',
          'src/www/styles/*.css'
        ],
        tasks: [
          'copy:core',
          'copy:web',
          'copy:web-debug',
          'merge-json:web'
        ],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },
    clean: {
      dist: ['dist']
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
      'web-debug': {
        expand: true,
        cwd: 'dist',
        src: ['*.html'],
        dest: 'dist',
        options: {
          process: function (content, srcpath) {
            return content.replace('</body>', '<script src="//localhost:35729/livereload.js"></script></body></body>');
          },
        },
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
      },
      'electron-kludge': {
        expand: true,
        cwd: 'dist',
        src: ['*.html'],
        dest: 'dist',
        options: {
          process: function (content, srcpath) {
            content = content.replace('<html manifest="system-designer.appcache">', '<html>');
            content = content.replace('<script src="lib/jquery/jquery.min.js"></script>', '<script>window.$ = window.jQuery = require("./lib/jquery/jquery.min.js");</script>');
            return content;
          },
        },
      },
    },
    "merge-json": {
      web: {
        files: {
          'dist/systems/system-designer.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/web.json', 'src/systems/editors/system-designer.json'],
          //'dist/systems/system-designer-core.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/web.json', 'src/systems/core/system-designer.json'],
          'dist/systems/editor-system.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/web.json', 'src/systems/editors/editor-system.json'],
          'dist/systems/editor-schema.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/web.json', 'src/systems/editors/editor-schema.json'],
          'dist/systems/editor-model.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/web.json', 'src/systems/editors/editor-model.json'],
          'dist/systems/editor-type.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/web.json', 'src/systems/editors/editor-type.json'],
          'dist/systems/editor-behavior.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/web.json', 'src/systems/editors/editor-behavior.json'],
          'dist/systems/editor-component.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/web.json', 'src/systems/editors/editor-component.json']
        }
      },
      cordova: {
        files: {
          'dist/systems/system-designer.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/cordova.json', 'src/systems/editors/system-designer.json'],
          //'dist/systems/system-designer-core.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/cordova.json', 'src/systems/core/system-designer.json'],
          'dist/systems/editor-system.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/cordova.json', 'src/systems/editors/editor-system.json'],
          'dist/systems/editor-schema.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/cordova.json', 'src/systems/editors/editor-schema.json'],
          'dist/systems/editor-model.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/cordova.json', 'src/systems/editors/editor-model.json'],
          'dist/systems/editor-type.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/cordova.json', 'src/systems/editors/editor-type.json'],
          'dist/systems/editor-behavior.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/cordova.json', 'src/systems/editors/editor-behavior.json'],
          'dist/systems/editor-component.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/cordova.json', 'src/systems/editors/editor-component.json']
        }
      },
      electron: {
        files: {
          'dist/systems/system-designer.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/electron.json', 'src/systems/editors/system-designer.json'],
          //'dist/systems/system-designer-core.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/electron.json', 'src/systems/core/system-designer.json'],
          'dist/systems/editor-system.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/electron.json', 'src/systems/editors/editor-system.json'],
          'dist/systems/editor-schema.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/electron.json', 'src/systems/editors/editor-schema.json'],
          'dist/systems/editor-model.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/electron.json', 'src/systems/editors/editor-model.json'],
          'dist/systems/editor-type.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/electron.json', 'src/systems/editors/editor-type.json'],
          'dist/systems/editor-behavior.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/electron.json', 'src/systems/editors/editor-behavior.json'],
          'dist/systems/editor-component.json': ['addons/*.json', 'src/systems/types/*.json', 'src/systems/classes/*.json', 'src/systems/modules/*.json', 'src/systems/platforms/v.json', 'src/systems/editors/editor-component.json']
        }
      }
    },
    concat: {
      'cordova-app': {
        options: {
          process: function (src, filepath) {
            return src + 'runtime.install(' + JSON.stringify(grunt.file.readJSON('dist/systems/designer-runtime.json')) + ');';
          }
        },
        files: {
          'dist/scripts/designer-runtime.js': ['dist/scripts/designer-runtime.js']
        }
      },
      'cordova-behavior': {
        options: {
          process: function (src, filepath) {
            return src + 'runtime.install(' + JSON.stringify(grunt.file.readJSON('dist/systems/editor-behavior.json')) + ');';
          }
        },
        files: {
          'dist/scripts/editor-behavior.js': ['dist/scripts/editor-behavior.js']
        }
      },
      'cordova-component': {
        options: {
          process: function (src, filepath) {
            return src + 'runtime.install(' + JSON.stringify(grunt.file.readJSON('dist/systems/editor-component.json')) + ');';
          }
        },
        files: {
          'dist/scripts/editor-component.js': ['dist/scripts/editor-component.js']
        }
      },
      'cordova-designer': {
        options: {
          process: function (src, filepath) {
            return src + 'runtime.install(' + JSON.stringify(grunt.file.readJSON('dist/systems/system-designer.json')) + ');';
          }
        },
        files: {
          'dist/scripts/system-designer.js': ['dist/scripts/system-designer.js']
        }
      },
      'cordova-model': {
        options: {
          process: function (src, filepath) {
            return src + 'runtime.install(' + JSON.stringify(grunt.file.readJSON('dist/systems/editor-model.json')) + ');';
          }
        },
        files: {
          'dist/scripts/editor-model.js': ['dist/scripts/editor-model.js']
        }
      },
      'cordova-schema': {
        options: {
          process: function (src, filepath) {
            return src + 'runtime.install(' + JSON.stringify(grunt.file.readJSON('dist/systems/editor-schema.json')) + ');';
          }
        },
        files: {
          'dist/scripts/editor-schema.js': ['dist/scripts/editor-schema.js']
        }
      },
      'cordova-system': {
        options: {
          process: function (src, filepath) {
            return src + 'runtime.install(' + JSON.stringify(grunt.file.readJSON('dist/systems/editor-system.json')) + ');';
          }
        },
        files: {
          'dist/scripts/editor-system.js': ['dist/scripts/editor-system.js']
        }
      },
      'cordova-type': {
        options: {
          process: function (src, filepath) {
            return src + 'runtime.install(' + JSON.stringify(grunt.file.readJSON('dist/systems/editor-type.json')) + ');';
          }
        },
        files: {
          'dist/scripts/editor-type.js': ['dist/scripts/editor-type.js']
        }
      },
    },
    connect: {
      watch: {
        options: {
          livereload: true,
          port: 9001,
          base: 'dist/'
        }
      },
      basic: {
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
  grunt.loadNpmTasks('grunt-merge-json');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');


  // start the dev mode
  grunt.registerTask('dev', [
    'clean',
    'web',
    'copy:web-debug',
    'connect:watch',
    'watch'
  ]);

  // start the server
  grunt.registerTask('start',
    'connect:basic'
  );

  // dist for web
  grunt.registerTask('web', [
    'copy:core',
    'copy:lib-core',
    'copy:lib-ace',
    'copy:web',
    'merge-json:web'
  ]);

  // dist for electron
  grunt.registerTask('electron', [
    'copy:core',
    'copy:lib-core',
    'copy:lib-ace',
    'copy:electron',
    'copy:electron-kludge',
    'merge-json:electron'
  ]);

  // dist for cordova
  grunt.registerTask('cordova', [
    'copy:core',
    'copy:lib-core',
    'copy:lib-codemirror',
    'copy:cordova',
    'merge-json:cordova',
    'concat'
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
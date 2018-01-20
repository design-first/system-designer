/*
 * System Designer
 *
 * https://designfirst.io/systemdesigner/
 *
 * Copyright 2018 Erwan Carriou
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

  // load tasks
  require('load-grunt-tasks')(grunt);

  // load configuration
  grunt.initConfig({
    watch: grunt.file.readJSON('tasks/watch.json'),
    clean: grunt.file.readJSON('tasks/clean.json'),
    copy: grunt.file.readJSON('tasks/copy.json'),
    prettier: grunt.file.readJSON('tasks/prettier.json'),
    json_merge: grunt.file.readJSON('tasks/json_merge.json'),
    connect: grunt.file.readJSON('tasks/connect.json'),
    concat: grunt.file.readJSON('tasks/concat.json'),
    mocha_istanbul: grunt.file.readJSON('tasks/mocha_istanbul.json')
  });

  // non trivial copy
  grunt.config.merge({
    'copy': {
      'electron-kludge': {
        'expand': true,
        'cwd': 'dist',
        'src': ['*.html', 'app/index.html'],
        'dest': 'dist',
        'options': {
          'process': content =>
            content.replace('<html manifest=\"system-designer.appcache\">', '<html>')
              .replace('<html manifest=\"../system-designer.appcache\">', '<html>')
              .replace('<script src=\"lib/jquery/jquery.min.js\"></script>', '<script>window.$ = window.jQuery = require(\"./lib/jquery/jquery.min.js\");</script>')
        },
      },
      'web-livereload': {
        'expand': true,
        'cwd': 'dist',
        'src': ['*.html', 'app/index.html'],
        'dest': 'dist',
        'options': {
          'process': content =>
            content.replace('<html manifest=\"system-designer.appcache\">', '<html>')
              .replace('<html manifest=\"../system-designer.appcache\">', '<html>')
              .replace('</body>', '<script src=\"//localhost:35729/livereload.js\"></script></body></body>')
        },
      }
    }
  });

  // start the dev mode
  grunt.registerTask('dev', [
    'clean',
    'copy:web-folder',
    'copy:libraries',
    'copy:ace',
    'copy:web-files',
    'json_merge:web-systems',
    'copy:web-livereload',
    'connect:watch',
    'watch'
  ]);

  // start the server
  grunt.registerTask('start',
    'connect:web-server'
  );

  // build for web
  grunt.registerTask('web', [
    'clean',
    'prettier',
    'copy:web-folder',
    'copy:libraries',
    'copy:ace',
    'copy:web-files',
    'json_merge:web-systems',
    'test'
  ]);

  // build for electron
  grunt.registerTask('electron', [
    'clean',
    'prettier',
    'copy:web-folder',
    'copy:libraries',
    'copy:ace',
    'copy:electron-files',
    'copy:electron-kludge',
    'json_merge:electron-systems'
  ]);

  // build for cordova
  grunt.registerTask('cordova', [
    'clean',
    'prettier',
    'copy:web-folder',
    'copy:libraries',
    'copy:codemirror',
    'copy:cordova-files',
    'json_merge:cordova-systems',
    'concat:cordova-specific'
  ]);

  // default build
  grunt.registerTask('build', [
    'web'
  ]);

   // default test
   grunt.registerTask('test', [
    'mocha_istanbul:smoketest'
  ]);
};
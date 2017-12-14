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

module.exports = function (grunt) {
  grunt.initConfig({
    watch: grunt.file.readJSON('tasks/watch.json'),
    clean: grunt.file.readJSON('tasks/clean.json'),
    copy: grunt.file.readJSON('tasks/copy.json'),
    jsbeautifier: grunt.file.readJSON('tasks/jsbeautifier.json'),
    json_merge: grunt.file.readJSON('tasks/json_merge.json'),
    connect: grunt.file.readJSON('tasks/connect.json'),
    concat: grunt.file.readJSON('tasks/concat.json')
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
          'process': function (content, srcpath) {
            content = content.replace('<html manifest=\"system-designer.appcache\">', '<html>');
            content = content.replace('<html manifest=\"../system-designer.appcache\">', '<html>');
            content = content.replace('<script src=\"lib/jquery/jquery.min.js\"></script>', '<script>window.$ = window.jQuery = require(\"./lib/jquery/jquery.min.js\");</script>');
            return content;
          },
        }
      },
      'web-livereload': {
        'expand': true,
        'cwd': 'dist',
        'src': ['*.html', 'app/index.html'],
        'dest': 'dist',
        'options': {
          'process': function (content, srcpath) {
            content = content.replace('<html manifest=\"system-designer.appcache\">', '<html>');
            content = content.replace('<html manifest=\"../system-designer.appcache\">', '<html>');
            content = content.replace('</body>', '<script src=\"//localhost:35729/livereload.js\"></script></body></body>');
            return content;
          },
        },
      }
    }
  })

  // default tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-json-merge');

  // start the dev mode
  grunt.registerTask('dev', [
    'web',
    'copy:web-livereload',
    'connect:watch',
    'watch'
  ]);

  // start the server
  grunt.registerTask('start',
    'connect:web-server'
  );

  // dist for web
  grunt.registerTask('web', [
    'clean',
    'jsbeautifier',
    'copy:web-folder',
    'copy:libraries',
    'copy:ace',
    'copy:web-files',
    'json_merge:web-systems'
  ]);

  // dist for electron
  grunt.registerTask('electron', [
    'clean',
    'jsbeautifier',
    'copy:web-folder',
    'copy:libraries',
    'copy:ace',
    'copy:electron-files',
    'copy:electron-kludge',
    'json_merge:electron-systems'
  ]);

  // dist for cordova
  grunt.registerTask('cordova', [
    'clean',
    'jsbeautifier',
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
};
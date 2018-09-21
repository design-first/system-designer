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
    'http-server': grunt.file.readJSON('tasks/server.json'),
    concat: grunt.file.readJSON('tasks/concat.json'),
    uglify: grunt.file.readJSON('tasks/uglify.json')
  });

  // non trivial copy
  grunt.config.merge({
    'copy': {
      'minify-json': {
        'expand': true,
        'cwd': 'dist/systems',
        'src': ['*.json'],
        'dest': 'dist/systems',
        'options': {
          'process': content => JSON.stringify(JSON.parse(content))
        }
      },
      'web-livereload': {
        'expand': true,
        'cwd': 'dist',
        'src': ['*.html', 'app/index.html'],
        'dest': 'dist',
        'options': {
          'process': content =>
            content.replace('manifest=\"system-designer.appcache\"', '')
              .replace('manifest=\"../system-designer.appcache\"', '')
              .replace('<script>if ("serviceWorker" in navigator) navigator.serviceWorker.register("./cache.js");</script>', '')
              .replace('</body>', '\t<script src=\"//localhost:35729/livereload.js\"></script>\n</body>')
        },
      }
    }
  });

  // start the dev mode
  grunt.registerTask('dev', [
    'clean:build',
    'copy:web-folder',
    'copy:libraries',
    'copy:ace',
    'concat:vendor-diagram',
    'concat:vendor-designer',
    'concat:vendor-editor',
    'copy:web-files',
    'json_merge:web-systems',
    'copy:web-livereload',
    'connect:watch',
    'watch'
  ]);

  // start the server
  grunt.registerTask('start',
    'http-server'
  );

  // build for web
  grunt.registerTask('web', [
    'clean:build',
    'prettier',
    'copy:web-folder',
    'copy:libraries',
    'copy:ace',
    'concat:vendor-diagram',
    'concat:vendor-designer',
    'concat:vendor-editor',
    'copy:web-files',
    'json_merge:web-systems',
    'copy:minify-json'
  ]);

  // build for electron
  grunt.registerTask('electron', [
    'clean:build',
    'prettier',
    'copy:web-folder',
    'copy:libraries',
    'copy:ace',
    'concat:vendor-diagram',
    'concat:vendor-designer',
    'concat:vendor-editor',
    'copy:electron-files',
    'json_merge:electron-systems',
    'copy:minify-json',
    'concat:app',
    'clean:systems'
  ]);

  // build for cordova
  grunt.registerTask('cordova', [
    'clean:build',
    'prettier',
    'copy:web-folder',
    'copy:libraries',
    'concat:vendor-designer',
    'concat:cordova-vendor-editor',
    'uglify:vendor-editor',
    'copy:codemirror',
    'copy:cordova-files',
    'json_merge:cordova-systems',
    'copy:minify-json',
    'concat:app',
    'clean:systems'
  ]);

  // default build
  grunt.registerTask('build', [
    'web'
  ]);
};
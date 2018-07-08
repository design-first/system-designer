// System Designer - Copyright 2018 Erwan Carriou
// Licensed under the Apache License, Version 2.0 (the "License")

const version = 'v2.9.2';

const clearCaches = () => {
  return caches.keys().then(keys => {
    return Promise.all(keys.filter(key => {
      return key.indexOf(version) !== 0;
    }).map(key => {
      return caches.delete(key);
    })
    );
  })
}

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(version).then(cache => {
      return cache.addAll([
        '/',
        'app/index.html',
        'behavior.html',
        'component.html',
        'index.html',
        'model.html',
        'schema.html',
        'system.html',
        'type.html',
        'diagram.html',
        'styles/editor.css',
        'styles/designer.css',
        'styles/diagram.css',
        'systems/designer-runtime.json',
        'systems/system-designer.json',
        'systems/editor-behavior.json',
        'systems/editor-component.json',
        'systems/editor-model.json',
        'systems/editor-schema.json',
        'systems/editor-system.json',
        'systems/editor-type.json',
        'systems/diagram.json',
        'img/favicon.ico',
        'img/logo.png',
        'lib/ace/ace.js',
        'lib/ace/mode-javascript.js',
        'lib/ace/mode-json.js',
        'lib/ace/mode-css.js',
        'lib/ace/mode-html.js',
        'lib/ace/worker-json.js',
        'lib/ace/worker-html.js',
        'lib/ace/worker-javascript.js',
        'lib/ace/worker-css.js',
        'lib/ace/ext-searchbox.js',
        'lib/ace/ext-language_tools.js',
        'lib/bootstrap/dist/css/bootstrap.min.css',
        'lib/bootstrap/dist/css/bootstrap.min.css.map',
        'lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
        'lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
        'lib/prism/prism.css',
        'lib/system-runtime/system-runtime.min.js',
        'lib/designer/vendor.js',
        'lib/editor/vendor.js',
        'lib/diagram/vendor.js',
        'manifest.json',
        'img/icon.png'
      ]).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    clearCaches().then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    return;
  }
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request);
    })
  );
});
// System Designer - Copyright 2019 Erwan Carriou
// Licensed under the Apache License, Version 2.0 (the "License")

const version = 'v3.6.1';

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
        'img/icon.png',
        'img/logo.png',
        'lib/bootstrap/dist/css/bootstrap.min.css',
        'lib/bootstrap/dist/css/bootstrap.min.css.map',
        'lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
        'lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
        'lib/codemirror/addon/hint/show-hint.css',
        'lib/codemirror/theme/eclipse.css',
        'lib/codemirror/codemirror.css',
        'lib/designer/vendor.js',
        'lib/editor/vendor.js',
        'lib/prism/prism.css',
        'lib/system-runtime/system-runtime.min.js',
        'scripts/designer-runtime.js',
        'scripts/diagram.js',
        'scripts/editor-behavior.js',
        'scripts/editor-component.js',
        'scripts/editor-model.js',
        'scripts/editor-schema.js',
        'scripts/editor-system.js',
        'scripts/editor-type.js',
        'scripts/mobile.js',
        'scripts/system-designer.js',
        'styles/designer.css',
        'styles/diagram.css',
        'styles/editor.css',
        'styles/mobile.css',
        'behavior.html',
        'component.html',
        'cordova.js',
        'index.html',
        'model.html',
        'schema.html',
        'system.html',
        'type.html'
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
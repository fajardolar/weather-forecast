importScripts('/js/config.js');
importScripts('/js/idb.js');
importScripts('/js/utility.js');
// importScripts('../../src/commons/config.js');
encodeURIComponent('../../src/commons/config.js');

console.log(myConfig.SERVER_URL);
// var SERVER_URL = 'http://localhost:2000';
var SERVER_URL = myConfig.SERVER_URL;
var CACHE_STATIC_NAME = 'version_static_1';
var CACHE_DYNAMIC_NAME = 'version_dynamic_1';
var STATIC_FILES = [
  'index.html',
];

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function (cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll(STATIC_FILES);
      })
  )
});


self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('[Service Worker] Removing old cache.', key);
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});

function isInArray(string, array) {
  var cachePath;
  if (string.indexOf(self.origin) === 0) { // request targets domain where we serve the page from (i.e. NOT a CDN)
    console.log('matched ', string);
    cachePath = string.substring(self.origin.length); // take the part of the URL AFTER the domain (e.g. after localhost:3000)
  } else {
    cachePath = string; // store the full request (for CDNs)
  }
  return array.indexOf(cachePath) > -1;
}

function jsonToURI(data) {
  let query = "";
  for (var key in data) {
    query += encodeURIComponent(key)+"="+encodeURIComponent(data[key])+"&";
  }
  return query;
}

self.addEventListener('fetch', function (event) {
    event.respondWith(
      fetch(event.request)
        .then(function (res) {
          return caches.open(CACHE_DYNAMIC_NAME)
            .then(function (cache) {
              // trimCache(CACHE_DYNAMIC_NAME, 3);
              if(event.request.method !== 'DELETE' && event.request.method !== 'PUT')
                cache.put(event.request.url +"-"+ event.request.method, res.clone());
              return res;
            })
        })
        .catch(function (error) {
         return caches.match(event.request.url +"-"+ event.request.method)
            .then(function (response) {
              if (response) {
                return response;
              } else {
                return fetch(event.request)
                  .then(function (res) {
                    return caches.open(CACHE_DYNAMIC_NAME)
                      .then(function (cache) {
                        // trimCache(CACHE_DYNAMIC_NAME, 3);
                        if(event.request.method !== 'DELETE' && event.request.method !== 'PUT')
                          cache.put(event.request.url +"-"+ event.request.method, res.clone());
                        return res;
                      })
                  })
                  .catch(function (err) {
                    return caches.open(CACHE_STATIC_NAME)
                      .then(function (cache) {
                        if (event.request.headers.get('accept').includes('text/html')) {
                          return 'Im offline';
                        }
                      });
                  });
              }
            })
        })
    );

});

self.addEventListener('sync', function(event) {
  console.log('[Service Worker] Background syncing', event);
  if (event.tag === 'sync-new-posts') {
    console.log('[Service Worker] Syncing new Posts');
    event.waitUntil(
      readAllData('sync-posts')
        .then(function(data) {
          for (var dt of data) {
            let myData = {};
            let _data = dt.post.data.formData;
            var query = jsonToURI(_data);
            let id = dt.id;
            fetch(SERVER_URL + dt.post.requestParams.url, {
              method: dt.post.requestParams.method,
              headers: dt.post.requestParams.headers,
              body: query
            })
              .then(function(res) {
                console.log('Sent data', res);
                if (res.ok) {
                  res.json()
                    .then(function(resData) {
                      console.log('Sent data', id);
                      deleteItemFromData('sync-posts', id);
                    });
                }
              })
              .catch(function(err) {
                console.log('Error while sending data', err);
              });
          }

        })
    );
  }
});

self.addEventListener('notificationclick', function(event) {
  var notification = event.notification;
  var action = event.action;

  console.log(notification);
  if(action === 'confirm') {
    console.log('Confirm was chosen');
    notification.close();
  }else {
    console.log(action);
  }

});

self.addEventListener('notificationclose', function(event) {
  var notification = event.notification;
  var action = event.action;

  console.log(notification);
  if(action === 'confirm') {
    console.log('Confirm was chosen');
    notification.close();
  }else {
    console.log(action);
  }

});

self.addEventListener('push', function(event) {
  var notification = event.notification;
  var action = {
      title: 'New',
      content: 'Something new happened!'
  };

  if(event.data) {
    data = JSON.parse(event.data.text());
  }

  var options = {
    body: data.content,
    icon: 'icons/icon-96x96.png',
    badge: 'icons/icon-96x96.png',
  };

  event.waitUntil (self.registration.showNotification(data.title, options));
});

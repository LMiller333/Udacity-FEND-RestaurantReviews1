const applicationShell = [
    '/',
    '/restaurant.html',
    '/css/styles.css',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
];

//Install and fetch listeners below adapted from Google Developer Web Fundamentals
//Available at: https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#using_the_cache_api_in_the_service_worker

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('main-cache').then(function(cache) {
        return cache.addAll(applicationShell);
      })
    );
  });

self.addEventListener('fetch', function(event) {
event.respondWith(
    caches.open('main-cache').then(function(cache) {
    return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
        cache.put(event.request, response.clone());
        return response;
        });
    });
    })
);
});
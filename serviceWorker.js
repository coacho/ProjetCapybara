let CACHE_NAME = "pwa-test-app";
let deferredPrompt;

const urlsToCache = [
    '/',
    '/index.html',
];

// Afficher le bouton d'installation lorsque l'utilisateur arrive sur la page
//// window.addEventListener('beforeinstallprompt', function (event) {
////     event.preventDefault();
////     deferredPrompt = event;
////     showInstallPromotion();
////     console.log(`'beforeinstallprompt' event was fired`);
//// });


self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});

self.addEventListener('fetch', function (event) {

    event.respondWith(cached.match(event.request)).then(function (response) {

        if (response) {
            return response;
        }

        return fetch(event.request);
    })
})



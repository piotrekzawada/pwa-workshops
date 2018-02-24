/**
 * Created by piotrekzawada on 24.02.2018.
 */
/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/
var CACHE = 'v1';

const { assets } = global.serviceWorkerOption;
let assetsToCache = [...assets, './'];


self.addEventListener('install', (event) => {
    console.log('event install');

    event.waitUntil(precache());
});

self.addEventListener('activate', (event) => {
    console.log('event activate');
});

self.addEventListener('fetch', (event) => {
    console.log('event activate');
});

function precache() {
    return caches.open(CACHE).then(function (cache) {
        return cache.addAll(assetsToCache);
    });
}
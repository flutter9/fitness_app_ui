'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/img/up_red.png": "7197832f168bce5a72fde8469ceab503",
"/assets/assets/img/shoe.png": "b48f28a3b8742b15cc128a2e0bbee530",
"/assets/assets/img/illustration.png": "415fb2c9a764eff0c7ed4bea683d4de6",
"/assets/assets/img/bolt.png": "84cb60f28eb5723b853ab0a803cddc10",
"/assets/assets/img/down_orange.png": "fd9feaa9454e8e4d88bd6ebfd465bca2",
"/assets/assets/img/fish.png": "0c8dc2b84635a4ae82bbc1558ea335fa",
"/assets/assets/img/sausage.png": "715e658999626727fdb1ea9ec48e2f1c",
"/assets/assets/fonts/bebas_regular.otf": "a105cda50ada8b1d3c5a401a5411f8ae",
"/assets/assets/fonts/poppins_bold.ttf": "2f55e0d4b3f9eb3ffaefdac379fa3f8b",
"/assets/assets/fonts/poppins_regular.ttf": "e212f84086965da44a6c84f3d9a683a4",
"/assets/assets/fonts/bebas_bold.otf": "524d720f3f670bd38785447ca9c4b395",
"/assets/FontManifest.json": "52919000eda06c8fc270e6e42cbd7d91",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "c76dd13741c04789757c551b32ea3493",
"/assets/LICENSE": "9edafbd28f857e4d60b3465bb4531e50",
"/main.dart.js": "1efdf816a4e46203d0c515cc1e4fb6dd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

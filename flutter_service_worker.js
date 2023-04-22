'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cec0a9e93676041967f4d7f8f57c02a6",
"assets/assets/images/android-logo.png": "2b83dff37cb6516b549247052563e734",
"assets/assets/images/avatar.png": "e72b8c87c78383bef5f73fe76a37cc70",
"assets/assets/images/background.png": "b9471bedeb095c5ec34b3a7052d00a2d",
"assets/assets/images/bb-logo.png": "2c3cfecedd14bc555838cf6d8ed34011",
"assets/assets/images/c-plus-logo.png": "64ce2a14bcef2e3b7054ed9fea990d26",
"assets/assets/images/dart-logo.png": "8e10f012c54a4ccede7af6dd8636c6dd",
"assets/assets/images/fb-logo.png": "b8f5347dfe2e0b962b7ba78e1069c7db",
"assets/assets/images/flutter-logo.png": "92d3d089655f6b1eb24b4df73aae389a",
"assets/assets/images/github-logo.png": "4964c5ad57e1710e7535b91b51fb2793",
"assets/assets/images/java-logo.png": "b2dd893d65dec033aeb3af6350a2a2e7",
"assets/assets/images/linkedin-logo.png": "5c8dd8c2c13c36437128463837299ad2",
"assets/assets/images/marchio-web.png": "af18d107a7d8885ad950f59b9ac6aa06",
"assets/assets/images/marchio.png": "b3932e6aad8845ad0a026507945afc3e",
"assets/assets/images/pattern.png": "4fc2e6da920ca8b3f65378af30d57b3c",
"assets/assets/images/php-logo.png": "1306e7c4b53f5bd207f2663094fc21a7",
"assets/assets/images/sql-logo.png": "4ea27d0d678f46d8a4a1119c3312f06a",
"assets/assets/images/twitter-logo.png": "af59d066dcd5ba588f55fe37949ca652",
"assets/assets/translations/en.json": "d925b962f955b121f83407915f5a9b1b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "424fe6a497554651cf5ef7b2d4a4a261",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "e53211a66fa977ca3c7746f4cf0580bd",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"images/android-chrome-192x192.png": "6aea972564cd8b8cbcabd670da53d8b9",
"images/android-chrome-512x512.png": "243a692e36d2e8d5bef1a76e4e1edb64",
"images/apple-touch-icon.png": "e2d8fc2faae0398baff098ed440b7c4a",
"index.html": "d7601f4e8c6a30cbbd5999e2f0e2f73c",
"/": "d7601f4e8c6a30cbbd5999e2f0e2f73c",
"main.dart.js": "325a91b79065855a81b5218f8baf2355",
"manifest.json": "64e1d90d53a8802bd375f19c19a6d671",
"splash/img/dark-1x.png": "3fd39178d72dc79d958b4416452db998",
"splash/img/dark-2x.png": "c939256a3057043241f4d9334e239cfe",
"splash/img/dark-3x.png": "e360c165d21a51e6c5a96c8e5cb6288e",
"splash/img/dark-4x.png": "9714c545894f15b286a1cc9b897da464",
"splash/img/light-1x.png": "3fd39178d72dc79d958b4416452db998",
"splash/img/light-2x.png": "c939256a3057043241f4d9334e239cfe",
"splash/img/light-3x.png": "e360c165d21a51e6c5a96c8e5cb6288e",
"splash/img/light-4x.png": "9714c545894f15b286a1cc9b897da464",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "716b0117a75a9874b43eea268658a746",
"version.json": "7f02c9b679ffa6f60c0fd3c9f90c369f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

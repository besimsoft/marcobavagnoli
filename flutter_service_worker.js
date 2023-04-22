'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ad9235abb88576f2f435d1507b1a2866",
".git/config": "761286141f1539f2dad4d7a91d7e40bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "97bb9c4342762f827c0d50b2ae01c7b0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bb1215c7be00aa7fde5be292a7fa0e44",
".git/logs/refs/heads/master": "bb1215c7be00aa7fde5be292a7fa0e44",
".git/logs/refs/remotes/github/master": "d852723b0547e502ddcdf42870674e2f",
".git/objects/01/a76043505cd6b0c008adb0ed5dd398fe82a289": "a8541585f517e36a4aed2caa47dd758b",
".git/objects/09/7e529b5dd1226f4255989886fcdeecf43b0671": "5d39f28dea3073114cb283edc4e6e620",
".git/objects/0d/ec38dec4a3f8d0b4f839999385f26c5722b491": "7cd50f26fe4eb3ba0329b4dff0e07cdf",
".git/objects/10/05d32d208cbba9b219c4aaf804dab1dc8742f7": "b4914c02c57ef5a5d22d6ba42d25fcbf",
".git/objects/10/7be245d3c26776e518b07ecf16e27fedd30bf4": "e97f26cde5bebd8c11473cf2292ed406",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/2ea0306e4de47c3f66292b76ec75039a5ba14e": "a0d8f7522c876e5a65cb8cfe18036aa0",
".git/objects/17/3c96e33c9167818d5956a3f4bf0c6d724ccd14": "567dfc7815f415aa8e6ecf50cabffc0c",
".git/objects/1b/7a7fc657d92eda5078afc1cb8803cd49c571f4": "0ad54eda99f6ba8dd131ca1a211a018a",
".git/objects/25/c8ce65fd381d813c691e97d56001c48b039197": "85a09769bed22ce8ab2959e2aac7e2ee",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/27/2b3b3b6dd62ba3c482496b1e50c0c312f4214a": "72596fb6cc5ba7689d93269d6e0559ec",
".git/objects/2a/b1611b0bd3e6e50161aab3866b6923df1c74dd": "1a68b54eec52f84bea06e4cdc8819396",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3e/695da6f420ead7c5f498649727b957294a71c7": "6fc56fea171fa2a739e0668e7612c63e",
".git/objects/3f/ee0f5d9c71ab4f581e2caa3467e191ca6a8ac4": "105ce4e0686c50f142f5c1338df5dc5f",
".git/objects/41/5aa9fece9ba5c13e7ca2397132670a45ec72d5": "58ff866199e94afc2e1e4b277eb7b121",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/aa33a52f6bdd3112c9aa38ca573c7fa5c6ceae": "c311adc8ef948126539190894fccbee0",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/df2bfd7a9c98294b405c734354f593a801d1c7": "e82ea8a208446f62cffcd98205b656bf",
".git/objects/54/71a9b4b96d2f8ace76514c30978d9af006450e": "a9fb1f200aa6cba581fab0e4678fa0dd",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/8ffc38e206aa5bb2f4265d1c7477e749098f24": "b1ed51ebf23ea48d67a19ce3d88ab994",
".git/objects/5b/1aad39cc99d4e5e5a3899f09daee48ded56150": "8036a39783de80cf9efdbd81cf299c98",
".git/objects/5b/8791c7a03ee75a8954156a66b6e91279f7fede": "f4f19499ade1d404a831d618380e1d8a",
".git/objects/5b/ae35f1f484ff76fa5a36456befba44aa499287": "d273f756374e2cb25f2fde12b3c90695",
".git/objects/5c/2572aeab0b76b5f2550e574a810b8ca903e8ad": "fb67f496b44b3691bb22ebd79b90aa38",
".git/objects/62/ec6d37685906d7b4d9e228c60602850114d3d0": "ef233b00ac600a640df5f9f6bf1bd3ef",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/337a16114726be70b2f439c62aa9793bb5b9f9": "bdce46de2c35c101f9b18d9af919aa6f",
".git/objects/6c/e9ffb2619f6b05c67770e2eea40624557bfc79": "f5e195cbccc06212443286763322eafd",
".git/objects/6d/a0879f29c534fe856ec91264b26bec510a7a61": "fd43e17a642d0174b4a48f115fa0fccd",
".git/objects/6e/86672130aac0e4918a028246f39139ae5a99c5": "813698a68796f8a6da80a0ef5df505a1",
".git/objects/71/de3fa2bd31c44d3ecac2c6ba7352b74948871f": "da2dfad1b1bb629a7fea978542b87449",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/cd7782cf972b377e16b236ead675d1bd9a8f09": "fb3a68879c7c5a8b0f18b9b2a8d44fd3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/0b3b70b300c0830c014dd9d9ba78a7ce90e458": "1be5236628ca177e65564c9fee0e9989",
".git/objects/7d/0a6edbd797913bd3d070481bc306a570c58598": "1f811a74fc2a6e8e5fe4c4c15e509da4",
".git/objects/7d/4a21da3c59de660ace8337716a9ec5065da968": "37e2411f7196cc4ac3843be136bdf9bc",
".git/objects/7e/3793c1b6c7cd355a2cb6a320377dd5846e38bc": "388204be4c4262e0cad8a6cec512dfd5",
".git/objects/87/b015401a74a7f80a4dcea2d7deae4f9a205e7e": "71dc1d5a8ba705c42bb2bb91ad17aff7",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8b/acb38fa42899645cde51d4e14737c753646104": "48968093c382c45072a789886e9b882f",
".git/objects/8b/c7ef4a6f9adb099b6690458f5ce3f35adf7a52": "824a894d551d2d4ef2f7d819bd8b0fe5",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/9a/edb8fa7586f01a3193fc08f936a4474ab5d75d": "2f6f2ab6cf1408804a0e0f837f1f42cb",
".git/objects/9c/2a8639378ebd4a9eab0d3e8aed2abbd12b10b4": "ea30211223a585e7e5a317d8c93ead6d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/21b89d550bd44cdb5d056d64297394810fd4c8": "13971efa150d4a20a66892e331d3a18e",
".git/objects/a7/28539364cbc78115237389cd3ebfcaad31c9f3": "0d1281b659d59ac8cc0a9e458438edf3",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ae/55a0579da30c31a80f39a3711d72f1262fb159": "38b73822a0f86a8d8ab8f1e6c530318a",
".git/objects/b0/8585092d37a3d8c282268c8981981abf417f7f": "b966304ce8e2dbe9346efe036858bebd",
".git/objects/b6/1b1a994ec51546bf8b466a3a304c0e1b9ce471": "2311dd5b11f38fd4de3b6ce3bb9be17a",
".git/objects/b7/7b21bfaea1e6971443d4acfbc9bd967174ae42": "42607df82c9b2910ae3139a40e670eca",
".git/objects/c2/16037015ba28a11cc393fc20f59101f22d94b6": "01424a9393a89e90c445b683f3878915",
".git/objects/c2/e4322fc1d3fa73f900fbd9d1280c127f64a6e8": "a4f7e53c91f9e59344a28a3c41d746bf",
".git/objects/c6/eb2ea4e8b71311d99e014cfee4471c8872bd8e": "c98b874da41190ae054379fb14e0c552",
".git/objects/cd/60169535366904446ff1bc4b064e1e3d4c62af": "99a660257df5ee5f303eaf4596fa2655",
".git/objects/cf/3ba03276f2c9cc2bf139edbdefa2a14c1472e2": "1012c2560275c66ecbebee1b0d7452b2",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/da/6d5faa98908fc03a99b87d29b98150a9cb411c": "6aab57080c8edd243aea114c843d72f6",
".git/objects/de/05fcbaf9dc87570e373b19638daea8851a7582": "2497a2ce14e55ea41ef269dab0aca7c2",
".git/objects/e4/82a915b37e75365581a654060df9158607c67c": "b4752956196db00620fc3e1c03c4864d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/be569f1ff8a9c8d3415f751424ba87ffd3c79b": "41bafc9785149ba193966246bd2fe743",
".git/objects/ec/c5d73e51260950e80b6540e8b842f659ca8b59": "0989eb7fd56e9729f1b94b654e9e1574",
".git/objects/ee/684a53d4803c29ad0fa986dabe69d807bfb031": "25ba348125f13690adf8873fda128dd6",
".git/objects/f1/1b135d060da4a136eab143299999632c2a09e7": "2564be5a6661ead591453680e2f1ec20",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fb/feb658d439122580e99750237912875b9a0bbe": "72e30f3196a94d752dd7ed05fe2b5406",
".git/refs/heads/master": "fc48871e212277aac6f2bd114bdf6d0b",
".git/refs/remotes/github/master": "fc48871e212277aac6f2bd114bdf6d0b",
".idea/misc.xml": "7ffe1d213cb7f189bb46f7c81ed224eb",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "83c382469140e0d5e46e357618a76f81",
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
"index.html": "a2e9130f2aadb7b8aef864123b40b0dd",
"/": "a2e9130f2aadb7b8aef864123b40b0dd",
"main.dart.js": "b5cf5b7dfe1263f39323d10d2cb7a1a6",
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

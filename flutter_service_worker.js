'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "36bdab62c3c329686768600edd67bd0d",
"assets/AssetManifest.bin.json": "1fc4c0aebf940e6fc3cadaa8827b916c",
"assets/AssetManifest.json": "09f148f0debcca495e6a2cb6a3092f48",
"assets/assets/fonts/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/Lexend-Regular.ttf": "c0dc51d28f78a1d929e777bbfdb514cb",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Rubik-Regular.ttf": "46df28800514364ef2766f74386b1bd3",
"assets/assets/images/about-pic-1.png": "2864a8c5806db4db505a04680982beb8",
"assets/assets/images/about-pic-2.png": "5c1094fd07f028aeb2a9d2a997960303",
"assets/assets/images/about-pic-3.png": "5fffa624965c911319375a1495d1b6a2",
"assets/assets/images/analysis-icon.png": "5fd7440232473bc34f1e7f431c458304",
"assets/assets/images/appBar-logo-white.png": "57a339f1a340c66bc9600b4f924b48a0",
"assets/assets/images/appBar-logo.png": "9cf3c989d5470a85843e7203666e6538",
"assets/assets/images/approved-icon.png": "cf33d6f565d72bac1eccd2e9e6743ab8",
"assets/assets/images/Avatar-Image-2.png": "ff6f8b768ae8c557501373efa4316d31",
"assets/assets/images/Avatar-Image-3.png": "0bf5f5ff0caf9720d4cc19916899cf95",
"assets/assets/images/Avatar-Image.png": "09607b1dafeb343940720f63884c68ba",
"assets/assets/images/bg-2.png": "e6f09abd783ff810608eac33c62d4879",
"assets/assets/images/bg.png": "d65e5eebf67cd30392115bbfe07995f7",
"assets/assets/images/big-logo-pic.png": "aadea4d82760408c29c92a50422ee9ed",
"assets/assets/images/big-logo.png": "69c360bf0a65d8266d3a8da0f63f96dc",
"assets/assets/images/box-icon.png": "c5003bd470f98d1e8afeb592006a6aee",
"assets/assets/images/building-icon.png": "fbb2ccd5daf1b6ca5f980dc635141724",
"assets/assets/images/chain.png": "11c133685fdfec1e3cdde987e84d4ca1",
"assets/assets/images/clock-increasing.png": "3f6a95aaa31b4dbf664da3bc2a7b8e47",
"assets/assets/images/cloud-robotics.png": "f1b7a5b425d0da4230d8ec0a1765cf9a",
"assets/assets/images/construction.png": "f8257f277dfe03251a7da8b66206ad93",
"assets/assets/images/contact-pic-1.png": "0429536b6f36bc996a290c9a0efd1718",
"assets/assets/images/contact-pic-2.png": "18ff0cf4ded31ea1d6a4ab78e1ce57f4",
"assets/assets/images/contact-pic-3.png": "5cfd8b3a9c8739f7a3fec52d613e337d",
"assets/assets/images/currencies-icon.png": "dc414be64f7ddbf9be0ff008298aa087",
"assets/assets/images/delete-icon.png": "d556b093e11cf8651a28672f73551809",
"assets/assets/images/devops.png": "6b64f0c4f556d5c0d694cd5d423cf7a0",
"assets/assets/images/document-icon.png": "4aeb8d8a5f5519db8c313e62940f0adb",
"assets/assets/images/download-icon.png": "508427e6c37a850a5f51c1ccad6830ff",
"assets/assets/images/erp-demo.png": "07b399e328ec9d8cf6a9e29b58c19450",
"assets/assets/images/erp-people.png": "d5b88793923ee1c9dd0fd196bd8bc768",
"assets/assets/images/erp-people2.png": "503118b55b23127b36fcd33b5153ad2e",
"assets/assets/images/erp-pricing.png": "f3161e6600d8550d4c6a7398185acf38",
"assets/assets/images/Group%25201.png": "72ce080f3d9e714794047ddc675a5af8",
"assets/assets/images/Group%25202.png": "5e7d6a354da2ecbfa4b78769a812a7ce",
"assets/assets/images/hand-drawn1.png": "36c03e35e788b332dda7b02f001f7ac7",
"assets/assets/images/hand-drawn2.png": "5d8ddf8c869e1a2df1c3d015105c5d70",
"assets/assets/images/home-image-1.png": "3a67b5671d5f2d6da174096bb0b7252d",
"assets/assets/images/home-image-2.png": "5642eee44cf8f34839029277077d86d6",
"assets/assets/images/home-image-3.png": "09dfd06e4ef35867efa0e8f6ef073b83",
"assets/assets/images/home-stack-image.png": "78d4459a3fd7a6aaac59e4bcfd1788d3",
"assets/assets/images/info-icon.png": "85e979b675408ae5afda30b3562208e8",
"assets/assets/images/instagram.png": "edcaff519b4bd94c0a450d8cc13651d8",
"assets/assets/images/linkedin.png": "85b77c3a2254e821d527fbdc56a66e27",
"assets/assets/images/man-with-laptop.png": "bcb2fedaee763cf6091b870e1074a20e",
"assets/assets/images/person-analyzing.png": "1cc023bdabe22fd63a8ab5f40b2591b5",
"assets/assets/images/pricing-erp.png": "06449260fa7ff55b9b99a2e3ce569f9c",
"assets/assets/images/pricing-erp2.png": "f5f531c73378b4a06499f649cc9df7b4",
"assets/assets/images/recruiters-manager.png": "eb9f584911a9dc3b4a393d1ba9a9d010",
"assets/assets/images/shopping-icon.png": "2ab38f570b8e56f8161859498422c808",
"assets/assets/images/structure.png": "fe79ba6b7dd4005424a4c85dabea8a44",
"assets/assets/images/success-icon.png": "3dcc5eb8f4581fa539ceea6b9fa27426",
"assets/assets/images/twitter.png": "3d65662357bd5a1421d54d1bb209db2f",
"assets/assets/images/youTube.png": "53907ec2e8bf907a94a5d55a0fd4a4ea",
"assets/FontManifest.json": "cb6f248791a50b41ca9f0cfc967d9e57",
"assets/fonts/MaterialIcons-Regular.otf": "5e274dfa4ce208d293d9c7c9d70272e4",
"assets/NOTICES": "b1e133cc7aff4b37acc7a57d0330f7ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "4c1c866323232617d42228ece160dc63",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "aaa619c7b33c539bf87b41ae16f7fcdf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "32efda884c6705d15b6cbce8ce5fadb8",
"/": "32efda884c6705d15b6cbce8ce5fadb8",
"main.dart.js": "ad7ee7c7431f12b68eb5f32e339b7c6b",
"manifest.json": "dbcc11528ccf332baf3c0388ea885f4f",
"version.json": "559f3e3887877122099177440222df92"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

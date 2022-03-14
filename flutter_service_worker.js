'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "72e3359166d6bebcba728c4633084341",
".git/config": "8ab7b10e7a0f23c7300f7bdbc5e97675",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "7db4eddf8c20270bbeaf884512c4907a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91456fd2318fd5c7561b1135e7df7a1d",
".git/logs/refs/heads/main": "814d58b593a393b2c163b2af802e5b8a",
".git/logs/refs/remotes/origin/main": "230daeed94cfc622843236314e74960c",
".git/objects/01/ae2165217d61dce32667a372b0294155746eea": "99ea8ffcb73396dc11504a49d4c3850b",
".git/objects/04/b5aea18e0f888d7456079ad9910f5deee703c8": "18bb806c67ff30dec982d5bc964d56df",
".git/objects/08/d17277840f3c635498234ee729f9725a60f0e8": "1f5d7daaf7ef4be32d73a1277e3073e2",
".git/objects/0f/d45a512211f341c09e8658bfad996858d6b7b4": "11a6a9db99fd13fc306930484cf45442",
".git/objects/12/7f1ee5c41ec5d55370174fa38fc6f07fe215bf": "f1892ec73cac0cbbce053b5f82ba4c9e",
".git/objects/12/efb81a047787244a2d07a1d812138de3abae67": "c2149922284e2cf97aa81df7bd439f4d",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/17/e8b94524cb72cadfcf8fec122dd83b9588b771": "5eebd5063dbf333254dd76c822f0955d",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/33a21d5d875e9801c4fe9a6ff05f3991d514a7": "0dcc5fc9dca77d8b812c522a85488007",
".git/objects/24/7c914b199419500530f3878b085f3a77d9c19e": "f3e987051dddc9a94a5998d90b8a1d65",
".git/objects/27/9bb3f2aab19e8346cfba601a5af7e4aa8351d9": "c88acf8b39503d65a6f6205921a88954",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2c/481c6761b8db9b9a73f57ed645d0780c196894": "75b5e1d95e32bbbe5f7210ac9cfe34d1",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/3b/f7e2529266c8d6aa2efebf46c0f0af9b7de9d1": "0e8ed9b6ce7f437ef06b4b3a20eafa20",
".git/objects/3e/386a23c0a58308ae76dfd49451a49b0c7fdaa9": "5b5c0a12706d02e749a2c315fac37116",
".git/objects/3f/053169a7ba1c0ea87668589e38db8d72483844": "9fea361ed17ea28ee1a38ea52c2f92a1",
".git/objects/4d/66c88c7bf5290f1048cbede2d1701a08de2f80": "d436f6bf490246b3447b6a95ad703f20",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/72/643c53cc14ce5c9c916e1383bda39903b3598f": "f38868d602dfc1050560db1c6400599f",
".git/objects/77/23640eb9894f983f6186b4dbb2214ad1170ef1": "74658a4efc440200f3f595bd1ef03d3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/7d/8da6052c16b41ba03538d60864ee2e73ab2cbd": "cb4492ac9a8076bed6e10ce65278321c",
".git/objects/82/fcda58a9127b1a5888524deabeb4937325f4ac": "bea28b2f6457fbcfb0c93ffeb2b5470a",
".git/objects/83/8cd159fd6c907fff5b08329c17f8cef097b2fd": "ddecd2f9d714046aa63c26fd795aef6b",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/85/c194831ab0e97d612ef9cc3feabd613b08fdf3": "0b3da235298aea3617d90d3a150903ff",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/0eef383a1b00be3cd791f6e0a8d0d8f24d5bc7": "2d5028a6990cf2723628d60f9e29161a",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/92/07ae55834ede1323455c17596e406588fb0703": "88eabeb1b9da238b04d798b08cdffd0e",
".git/objects/97/e118df1069c7620169b19d17c84971809b697c": "72e7f2878b80c94baab8b9a91b4aa629",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9b/950cc829e7237e7ddb882797b14e8c1e679ecb": "06bf666be0eae38ea2f1d6c24b10635f",
".git/objects/a0/6c51460039c335768415f314c5802cb9fd705e": "de5917df4120ecb3d3992a7e6f98230a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/66448f13fc9b2274efe8b19877cc3ae1bd873c": "f637064afe940ec01ad1b502bd090656",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/e5f9b2a1468c51c04ca59a533ec31d8d6a8379": "9d17f845debc9d7e29b60226ce53f0c5",
".git/objects/cd/d2f57da7ed6addab9ab447d853896a9eb6ed9a": "7701fa81d0e56e98a657efc597ade1aa",
".git/objects/d0/a8c5c8c7b10b1f3585b501797ba0c9dc4c2f88": "885d5700216bceb4c9f6b68b26d6be2b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/fa1df91c83cd2de8fc3e5be8b5cb16ecb0d3cc": "14a3e78d4c5a9000d1d4631f9b0c4c37",
".git/objects/ed/99b9c5a7235535a1b12b097e818acb9d7d03eb": "4c0cb91d443e3387b49240dbb5d2fee4",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/f5/43aa59f6f3c6852bd3d218dabdca256a8ac902": "ef7e4eafe06ea4beccf4ee3b1db08917",
".git/objects/f7/4214968ba26d1feb9f6fe0dcb899fb86a1ee19": "ea632c497c0278afa9f2a2df728b629f",
".git/refs/heads/main": "e36d22d59da2b4ed85a37d4b8720970d",
".git/refs/remotes/origin/main": "e36d22d59da2b4ed85a37d4b8720970d",
"assets/AssetManifest.json": "bbf5df480e9fb19630f49af49cbc8146",
"assets/assets/CB_App_IconText_01.png": "2213cbd8b52cd8d6cc51a025f6df868b",
"assets/assets/CB_App_Icon_01.png": "87494e1109882b25327a2cabd5fd13ce",
"assets/assets/CB_App_Text_01.png": "da4bf5d27b47b4c464f93dfba5319518",
"assets/assets/Icons-4%2520%255BConverted%255D-01.svg": "5f0cdee2281ec3f2ddf6135ddd40154c",
"assets/assets/Icons-4%2520%255BConverted%255D-02.svg": "fd4fb550ea5107c5b9610d061670cd24",
"assets/assets/Icons-4%2520%255BConverted%255D-03.svg": "171f1ac325e9464d0fe67390adb9f912",
"assets/assets/Icons-4%2520%255BConverted%255D-04.svg": "fa9f71ed01d453593a5cbf40963a9c33",
"assets/assets/Icons-4%2520%255BConverted%255D-05.svg": "251ea12b04075e47206f9af35eef4c2f",
"assets/assets/Icons-4%2520%255BConverted%255D-06.svg": "e63aba46657fabee7c7586ce30691a20",
"assets/assets/Icons-4%2520%255BConverted%255D-07.svg": "e966338e20e304f795ac7b6e1016c75d",
"assets/assets/Icons-4%2520%255BConverted%255D-08.svg": "b0597c4feebf46433f948e38a739a179",
"assets/assets/JAWsqr.jpg": "3db011cc34508628c4f60644db6f83b5",
"assets/assets/pin_1.png": "fe13f9aa18daf1261708755273bec77f",
"assets/assets/pin_2.png": "3c5da081e8d060a1ee805c51ffe8296c",
"assets/env": "fa2b1f137ce9eedb4d40e21115d89c34",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "ea66e090a7f38be4f23e530929a524ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b94befa5ac3d06898fa8036c2ff4b74d",
"/": "b94befa5ac3d06898fa8036c2ff4b74d",
"main.dart.js": "52cb5136fb8a1719d38903e40b55ac7b",
"manifest.json": "401ede53c6e54a9a1726f67f1b285f89",
"version.json": "0a01452af7eba3202f9e75c2ee989654"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

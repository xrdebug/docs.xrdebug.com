/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f0ec3e7d97afde3eef8bd18052fb054c"
  },
  {
    "url": "api/index.html",
    "revision": "ad6d5783edaf311dbe7742c195f49fea"
  },
  {
    "url": "api/spec.html",
    "revision": "197306eaaf9b2acf8cc66f3bb915ed82"
  },
  {
    "url": "assets/css/0.styles.66f80a84.css",
    "revision": "5148545ea201b83635b01e6b6ce49884"
  },
  {
    "url": "assets/img/php.44403f1e.svg",
    "revision": "44403f1eece67c892a0c6a6791da5ad4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/xrdebug-social.45e146f5.png",
    "revision": "45e146f557f0c57c438f5455da4333f8"
  },
  {
    "url": "assets/js/1.034eb7c2.js",
    "revision": "b01d48f8f0a7a09af77bf576b3a2d7d0"
  },
  {
    "url": "assets/js/10.ce4850e9.js",
    "revision": "20f5555e419fdec7d80b9a57f0d43d6a"
  },
  {
    "url": "assets/js/11.1249c3ab.js",
    "revision": "d84732ca1d34c468f30837f3dbd8ad4e"
  },
  {
    "url": "assets/js/12.1b2737ea.js",
    "revision": "d29649941b5aa4c30645e2de8b0556d1"
  },
  {
    "url": "assets/js/13.666b3ecf.js",
    "revision": "987cf0e5531e1915df5535ebcbdf5f8b"
  },
  {
    "url": "assets/js/14.2e1e6539.js",
    "revision": "2ce2ce5821652dcae07752b227cf3457"
  },
  {
    "url": "assets/js/15.27d3ce71.js",
    "revision": "a76ce03924a9d075b8f1df7915799cfc"
  },
  {
    "url": "assets/js/16.95708b39.js",
    "revision": "a7091e9f6a98952b79efd71672581f3c"
  },
  {
    "url": "assets/js/17.576307a2.js",
    "revision": "ad9907aed31efe2788fb57619ecec9cf"
  },
  {
    "url": "assets/js/18.173e2291.js",
    "revision": "4e1af6ad2beb1a486fd489dfed3c5ba6"
  },
  {
    "url": "assets/js/19.8c24cffc.js",
    "revision": "9b5faeaf5ddcf91808af7e6280b91089"
  },
  {
    "url": "assets/js/2.d639c71f.js",
    "revision": "466bfef95a245520ecfe0b6a21ab2cc4"
  },
  {
    "url": "assets/js/20.f0e1d0cf.js",
    "revision": "6b9d1f6bedaa672b205e5f2b29373672"
  },
  {
    "url": "assets/js/21.717d6af0.js",
    "revision": "65a9d2643b69546ce88d4a4d46652b8e"
  },
  {
    "url": "assets/js/22.2880a7f3.js",
    "revision": "08bd379b3150fcd189047b82968995de"
  },
  {
    "url": "assets/js/23.936af6e7.js",
    "revision": "4a1c5d07656765143a7dab7fe40c00d3"
  },
  {
    "url": "assets/js/24.a564cf61.js",
    "revision": "8ddba433fe78ed60512abb35ced2981b"
  },
  {
    "url": "assets/js/25.372bdd9b.js",
    "revision": "6936517035ff9f47f570aa269a1d2052"
  },
  {
    "url": "assets/js/26.ab559622.js",
    "revision": "54340167cc656c2500e584fa31101461"
  },
  {
    "url": "assets/js/27.10544fa3.js",
    "revision": "909258fdb675c6ad46510216848d477c"
  },
  {
    "url": "assets/js/28.d63487cc.js",
    "revision": "4edb77aa7c68452e434490001d201b92"
  },
  {
    "url": "assets/js/29.d5cdab27.js",
    "revision": "982d2d7f6d8f7e1193ed115750d779c4"
  },
  {
    "url": "assets/js/3.19354d3a.js",
    "revision": "93e54ba5ad5c826ec0baf58bf3713eb7"
  },
  {
    "url": "assets/js/4.f278b6dc.js",
    "revision": "265123f274415cfa921562ade0389054"
  },
  {
    "url": "assets/js/5.e499aac2.js",
    "revision": "77dd2c7e4da351a00782bf8cb78a0e0e"
  },
  {
    "url": "assets/js/6.77bb3513.js",
    "revision": "604787efafa95ffe1dec46b60493f414"
  },
  {
    "url": "assets/js/7.b7d154c2.js",
    "revision": "3408e43e9169cef25f9e0672a47e94d8"
  },
  {
    "url": "assets/js/app.cc45e2f8.js",
    "revision": "0d74f08de32aabca7736b0c9258f58c0"
  },
  {
    "url": "assets/js/vendors~docsearch.5e758b7f.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "developer/index.html",
    "revision": "edd41c7ee3290313b746c3dd5fc55621"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "446093aadb7cb1ac2cc0d63dfc504a2d"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "4b31c8180393ef4e7ef0268526a39802"
  },
  {
    "url": "index.html",
    "revision": "581ca454e1398af0f556c97774dd3e64"
  },
  {
    "url": "install/index.html",
    "revision": "b4a9deef92ee0f1eb504dff01ef0263d"
  },
  {
    "url": "logo.png",
    "revision": "e8d1dbf095f1ba57f2be4ff7199e4db8"
  },
  {
    "url": "logo.svg",
    "revision": "e86ba77cd18569d687c5e22b7e48bcf3"
  },
  {
    "url": "run/index.html",
    "revision": "22535f8a75c53c1a50908ff7adaf54c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

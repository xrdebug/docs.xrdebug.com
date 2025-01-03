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
    "revision": "05f9a711b317b2170bbf6e5467c4a42b"
  },
  {
    "url": "api/index.html",
    "revision": "5dcc2b82c5f6a00ec9e9a97acc1117fd"
  },
  {
    "url": "assets/css/0.styles.ee374e93.css",
    "revision": "898468193a1ab5a2843f76aba8c73b37"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.51021a91.js",
    "revision": "aea095a575caf6483f603659e0ae8a5f"
  },
  {
    "url": "assets/js/10.30e5b720.js",
    "revision": "e251b5f55d2d057bf1cec332068fb4a7"
  },
  {
    "url": "assets/js/11.1249c3ab.js",
    "revision": "d84732ca1d34c468f30837f3dbd8ad4e"
  },
  {
    "url": "assets/js/12.98d3c1a4.js",
    "revision": "e49536446110def7bcb76aff50d37a41"
  },
  {
    "url": "assets/js/13.713a7b47.js",
    "revision": "a81aa94c664339166990c5d3e625c8d1"
  },
  {
    "url": "assets/js/14.b2fda0fa.js",
    "revision": "2d90b324a9fecd81e973906a91066523"
  },
  {
    "url": "assets/js/15.27d3ce71.js",
    "revision": "a76ce03924a9d075b8f1df7915799cfc"
  },
  {
    "url": "assets/js/16.669a875f.js",
    "revision": "fe0735d273b462072afaa2b0b747a0c5"
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
    "url": "assets/js/19.4ecb4e7b.js",
    "revision": "d879562afc00b17e94fcb1b7893bb910"
  },
  {
    "url": "assets/js/2.95b1cfb3.js",
    "revision": "fde7f797137f79d567bc74a275e4a4a4"
  },
  {
    "url": "assets/js/20.06ce56d9.js",
    "revision": "3c8ae50ec09c345bc690b5c02f073352"
  },
  {
    "url": "assets/js/21.4c17ca8d.js",
    "revision": "8e4410d7645d1cb1bb6f56bd2e584f71"
  },
  {
    "url": "assets/js/22.f9631b3a.js",
    "revision": "8497172040014030983f87ba2746837d"
  },
  {
    "url": "assets/js/23.a2ba87ec.js",
    "revision": "51afd0630ebd6e57bbf0f82ea8529b95"
  },
  {
    "url": "assets/js/24.6edbb8c8.js",
    "revision": "67c90b54077e98a5e2836b7a4b474acb"
  },
  {
    "url": "assets/js/25.ca212fb7.js",
    "revision": "a1692d378ec3f834787c62695d8e216a"
  },
  {
    "url": "assets/js/26.32e8764a.js",
    "revision": "07b0ea2cfa8cb7bf95464e4eba7f61cf"
  },
  {
    "url": "assets/js/27.9a039dcd.js",
    "revision": "64cde56deaa747aa54ebb0d24ebc227e"
  },
  {
    "url": "assets/js/28.57c2695d.js",
    "revision": "dbceff764f69d5f85516a8cfd234ab1f"
  },
  {
    "url": "assets/js/3.81229147.js",
    "revision": "23b39162c7f4f8a2644bdfa45a7e9469"
  },
  {
    "url": "assets/js/4.ddb9c93b.js",
    "revision": "c71751d8808ee22e85f13e03b367c1bc"
  },
  {
    "url": "assets/js/5.e115a295.js",
    "revision": "0e2036ed9449dffbe56e0e34300bc2d3"
  },
  {
    "url": "assets/js/6.ad24b8b6.js",
    "revision": "df533ba358da83ca724e5f6dce12532d"
  },
  {
    "url": "assets/js/7.3f832db6.js",
    "revision": "cffc36ce07f2f698e399580d0a18c856"
  },
  {
    "url": "assets/js/app.16b21087.js",
    "revision": "1de0eba9ebe5608e207502dbace87d28"
  },
  {
    "url": "assets/js/vendors~docsearch.aae61d50.js",
    "revision": "3cc279e8a30776869d50affd9a611edd"
  },
  {
    "url": "developer/index.html",
    "revision": "c4b3f30581514dc9229bcbcbf553b7df"
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
    "revision": "9eb10f659f51fb8353001f694bac2a3f"
  },
  {
    "url": "install/index.html",
    "revision": "343c5c0a0ececfb740200918d365316e"
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
    "revision": "575d91e7eb5c0a3faebf858917c510f1"
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

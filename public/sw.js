if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const f=e=>c(e,i),r={module:{uri:i},exports:t,require:f};s[i]=Promise.all(a.map((e=>r[e]||f(e)))).then((e=>(n(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Aw3Cqn6WSPJH4R6wyOf4b/_buildManifest.js",revision:"ae424106cfe89000d94f91b35808a765"},{url:"/_next/static/Aw3Cqn6WSPJH4R6wyOf4b/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1088.04d87f92e05f23c7.js",revision:"04d87f92e05f23c7"},{url:"/_next/static/chunks/1391.7b46820e93cddfe7.js",revision:"7b46820e93cddfe7"},{url:"/_next/static/chunks/1608.ec04f07937386922.js",revision:"ec04f07937386922"},{url:"/_next/static/chunks/1711.ae2b84d9f5645069.js",revision:"ae2b84d9f5645069"},{url:"/_next/static/chunks/1727.af62bd633f21ee69.js",revision:"af62bd633f21ee69"},{url:"/_next/static/chunks/1748.f63b451fd93f590b.js",revision:"f63b451fd93f590b"},{url:"/_next/static/chunks/1926-066bda55b4f73741.js",revision:"066bda55b4f73741"},{url:"/_next/static/chunks/1950.c8039f3dc9bb92f5.js",revision:"c8039f3dc9bb92f5"},{url:"/_next/static/chunks/2091-8db4b9c96211f359.js",revision:"8db4b9c96211f359"},{url:"/_next/static/chunks/2435.c4b1656647b0fe53.js",revision:"c4b1656647b0fe53"},{url:"/_next/static/chunks/2441-6b2fceb62010dc15.js",revision:"6b2fceb62010dc15"},{url:"/_next/static/chunks/2592.fd820c8faf2ffcc2.js",revision:"fd820c8faf2ffcc2"},{url:"/_next/static/chunks/2604.250be1a3b8354750.js",revision:"250be1a3b8354750"},{url:"/_next/static/chunks/2746.0a838d09eabc5b43.js",revision:"0a838d09eabc5b43"},{url:"/_next/static/chunks/2898.f370a64b5af02f0b.js",revision:"f370a64b5af02f0b"},{url:"/_next/static/chunks/3068.9f3651d6d877c64c.js",revision:"9f3651d6d877c64c"},{url:"/_next/static/chunks/3200.07a96119d145f2e1.js",revision:"07a96119d145f2e1"},{url:"/_next/static/chunks/3525.53072abba3ca74b8.js",revision:"53072abba3ca74b8"},{url:"/_next/static/chunks/3697-620868fdfee99e14.js",revision:"620868fdfee99e14"},{url:"/_next/static/chunks/37-c355c5fe7f733a8a.js",revision:"c355c5fe7f733a8a"},{url:"/_next/static/chunks/3896-5f9400d7eb746abb.js",revision:"5f9400d7eb746abb"},{url:"/_next/static/chunks/422.8de6e8696d8471aa.js",revision:"8de6e8696d8471aa"},{url:"/_next/static/chunks/4253.6be69df622e36e45.js",revision:"6be69df622e36e45"},{url:"/_next/static/chunks/4419.c4f2007bfe36ec14.js",revision:"c4f2007bfe36ec14"},{url:"/_next/static/chunks/5119.33e08a0525159056.js",revision:"33e08a0525159056"},{url:"/_next/static/chunks/514.d2f047fea62adf58.js",revision:"d2f047fea62adf58"},{url:"/_next/static/chunks/5488.ea86c6ce443ba3bd.js",revision:"ea86c6ce443ba3bd"},{url:"/_next/static/chunks/5806.7abe5840ceba140e.js",revision:"7abe5840ceba140e"},{url:"/_next/static/chunks/5811.270e1339eb6edbe8.js",revision:"270e1339eb6edbe8"},{url:"/_next/static/chunks/5847-792659d1361c5439.js",revision:"792659d1361c5439"},{url:"/_next/static/chunks/5939.0a433dc6f963fc41.js",revision:"0a433dc6f963fc41"},{url:"/_next/static/chunks/6237.f7b1d24c812922e4.js",revision:"f7b1d24c812922e4"},{url:"/_next/static/chunks/6253.dcdff54f0dceda1f.js",revision:"dcdff54f0dceda1f"},{url:"/_next/static/chunks/6328.ea13afa99496d818.js",revision:"ea13afa99496d818"},{url:"/_next/static/chunks/6512.4990bb0c22c8a323.js",revision:"4990bb0c22c8a323"},{url:"/_next/static/chunks/6551.432f96462db0d036.js",revision:"432f96462db0d036"},{url:"/_next/static/chunks/6847.a575059dbc72db1a.js",revision:"a575059dbc72db1a"},{url:"/_next/static/chunks/6942.c08085427c39966c.js",revision:"c08085427c39966c"},{url:"/_next/static/chunks/704.484bcd9e0a7f5626.js",revision:"484bcd9e0a7f5626"},{url:"/_next/static/chunks/7619.82803a70712366c3.js",revision:"82803a70712366c3"},{url:"/_next/static/chunks/7682.b0a3567fac8e0052.js",revision:"b0a3567fac8e0052"},{url:"/_next/static/chunks/7710-399ac5d7c9733198.js",revision:"399ac5d7c9733198"},{url:"/_next/static/chunks/794.f18da82915d63734.js",revision:"f18da82915d63734"},{url:"/_next/static/chunks/8137.d6c500ddcf42e542.js",revision:"d6c500ddcf42e542"},{url:"/_next/static/chunks/8618.57c17810cd733b5b.js",revision:"57c17810cd733b5b"},{url:"/_next/static/chunks/8881.8c985300b37d631a.js",revision:"8c985300b37d631a"},{url:"/_next/static/chunks/9223.882cd6b61a640a13.js",revision:"882cd6b61a640a13"},{url:"/_next/static/chunks/934.405a73de74b58e27.js",revision:"405a73de74b58e27"},{url:"/_next/static/chunks/9343.c0a4f0e6fd4dd503.js",revision:"c0a4f0e6fd4dd503"},{url:"/_next/static/chunks/9657-c5e5f4de7e4dbc76.js",revision:"c5e5f4de7e4dbc76"},{url:"/_next/static/chunks/9941.44044767831d9eb0.js",revision:"44044767831d9eb0"},{url:"/_next/static/chunks/framework-ca706bf673a13738.js",revision:"ca706bf673a13738"},{url:"/_next/static/chunks/main-d00fe14f99fda5f1.js",revision:"d00fe14f99fda5f1"},{url:"/_next/static/chunks/pages/_error-2455c9d048a4b9a2.js",revision:"2455c9d048a4b9a2"},{url:"/_next/static/chunks/pages/address-book-002e7e31d8011144.js",revision:"002e7e31d8011144"},{url:"/_next/static/chunks/pages/disperse-5fc90fc69afc94e3.js",revision:"5fc90fc69afc94e3"},{url:"/_next/static/chunks/pages/index-cdd8649a91dd3e83.js",revision:"cdd8649a91dd3e83"},{url:"/_next/static/chunks/pages/migratooor-661ecbccc0b85a5f.js",revision:"661ecbccc0b85a5f"},{url:"/_next/static/chunks/pages/nftmigratooor-198c91ea59ee575b.js",revision:"198c91ea59ee575b"},{url:"/_next/static/chunks/pages/safe-1dd34bb5bc9d8e4a.js",revision:"1dd34bb5bc9d8e4a"},{url:"/_next/static/chunks/pages/tokenlistooor-d15e55b2cd715fad.js",revision:"d15e55b2cd715fad"},{url:"/_next/static/chunks/pages/tokenlistooor/%5Blist%5D-5d5ccfee64c7d75e.js",revision:"5d5ccfee64c7d75e"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-582df39c10d9d73a.js",revision:"582df39c10d9d73a"},{url:"/_next/static/css/5b2ed2256dd13e19.css",revision:"5b2ed2256dd13e19"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android-icon-192x192.ico",revision:"3522f6114029893bc7adc5421a8c6e95"},{url:"/avatar.png",revision:"b1e48274eb64a241e89ad52fb47e361f"},{url:"/cover.jpg",revision:"6a4de244968766fb41290e52f82aa5d9"},{url:"/dumpservices.svg",revision:"eeb91c3a1b9cc194f6a78ae711c990eb"},{url:"/favicons/android-icon-144x144.png",revision:"f84c22abbaf2104f0a15e5fa7ce57b00"},{url:"/favicons/android-icon-192x192.png",revision:"511bcb417298d5c1213764a36560b32f"},{url:"/favicons/android-icon-36x36.png",revision:"29c6d2e5a169c485bd3c9ff8d507d06a"},{url:"/favicons/android-icon-48x48.png",revision:"ac8a9ab09e2ad7a4a83a8242e368d955"},{url:"/favicons/android-icon-72x72.png",revision:"1558ca8274579e2ec3de8656b4fdbadc"},{url:"/favicons/android-icon-96x96.png",revision:"087c1fefc4d8c3405ed3f190fde66488"},{url:"/favicons/apple-icon-114x114.png",revision:"636830f827e5ef6a7e311ecb194724e8"},{url:"/favicons/apple-icon-120x120.png",revision:"927c6b82f4a9b24625a71f2af0d573c3"},{url:"/favicons/apple-icon-144x144.png",revision:"3e450ed21f08e365988e1b4204741414"},{url:"/favicons/apple-icon-152x152.png",revision:"9679a0904a815021bcc077c896745035"},{url:"/favicons/apple-icon-180x180.png",revision:"3c2ff5ee3103cde01363264bdfb5af30"},{url:"/favicons/apple-icon-57x57.png",revision:"e7263b5f6cffc2f8b5eaacb3d1cb923e"},{url:"/favicons/apple-icon-60x60.png",revision:"4f8dd5b7c43677ad0d0280fb2da2c717"},{url:"/favicons/apple-icon-72x72.png",revision:"553485edb24f1d2dff0475d7cfaaa179"},{url:"/favicons/apple-icon-76x76.png",revision:"1a2296d1b48a640ac2573c943afd4521"},{url:"/favicons/apple-icon-precomposed.png",revision:"a5e9655fc315dac613db287d4c8e1b76"},{url:"/favicons/apple-icon.png",revision:"a5e9655fc315dac613db287d4c8e1b76"},{url:"/favicons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicons/favicon-16x16.png",revision:"5b3a238a137b1131203647aa86566db6"},{url:"/favicons/favicon-32x32.png",revision:"23b4db369271952e5181e4821a4110d2"},{url:"/favicons/favicon-96x96.png",revision:"f28206c4fd55681bc94f5eb988754213"},{url:"/favicons/favicon.ico",revision:"4cdcbe3ad9c6ebe78cdc084448c06753"},{url:"/favicons/favicon.svg",revision:"6d222efc790057eab4b7861734a9b7c1"},{url:"/favicons/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/favicons/migratooor.png",revision:"c4b113e92e2bb184bc38d51d155fbe9a"},{url:"/favicons/ms-icon-144x144.png",revision:"3e450ed21f08e365988e1b4204741414"},{url:"/favicons/ms-icon-150x150.png",revision:"b8562b84bdb01e15ac2a9da77851f7d0"},{url:"/favicons/ms-icon-310x310.png",revision:"11d6296e7dd481a314efc70319b0bd2c"},{url:"/favicons/ms-icon-70x70.png",revision:"3f0ee0a51145090f43afd16ae01f7023"},{url:"/manifest.json",revision:"a9d80e671daa9979af521321d9b72d32"},{url:"/og.png",revision:"6db3b275535fd4ca1668a70b9695c519"},{url:"/og_address-book.png",revision:"f884a5ddc846d51ea732c7d873ded829"},{url:"/og_disperse.png",revision:"784c32d2acff860ebe51ee8120f0ffa5"},{url:"/og_migratooor.png",revision:"f1a18c476bb8dade1a82cd8bea7af5ac"},{url:"/og_multisafe.png",revision:"326c84f0a57cb17ecaef9a53f754afe9"},{url:"/og_tokenlistooor.png",revision:"4ffbb2ea6468d9045af942d00465cd9a"},{url:"/placeholder-nft.png",revision:"0a5319ce91d205bd2dbbeb5de2d1dcaa"},{url:"/placeholder.png",revision:"76e4abc63869962750bcd60694719807"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

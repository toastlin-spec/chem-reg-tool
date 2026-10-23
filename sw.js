/* 化學品法規速查表：離線快取
 * 頁面與法規資料：先用網路取得最新版，沒網路時用快取
 * 圖示、Excel 元件、字型：先用快取
 * 版本號由 build-github.sh 自動更新
 */
const VERSION = '20261023-8a52a6d5';
const CACHE = 'chem-reg-' + VERSION;
const CORE = ['./', './index.html', './chem-data.js', './manifest.webmanifest', './vendor/xlsx.full.min.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('chem-reg-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  const fresh = req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html') || url.pathname.endsWith('chem-data.js');
  if(url.origin === location.origin && fresh){
    e.respondWith(fetch(req).then(res => {
      if(res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, {ignoreSearch:true}).then(r => r || caches.match('./index.html'))));
    return;
  }
  const font = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if(url.origin === location.origin || font){
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if(res.ok || res.type === 'opaque'){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
  }
});

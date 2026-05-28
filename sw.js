const CACHE_NAME='napco-vizbuilts-360-shell-v2';
const SHELL_FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./favicon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL_FILES)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))));self.clients.claim()});
self.addEventListener('fetch',event=>{const request=event.request;const url=new URL(request.url);if(url.hostname.includes('youtube.com')||url.hostname.includes('youtu.be')||url.hostname.includes('googlevideo.com')||url.hostname.includes('gstatic.com')||url.hostname.includes('google.com'))return;if(request.mode==='navigate'){event.respondWith(fetch(request).catch(()=>caches.match('./index.html')));return}event.respondWith(caches.match(request).then(cached=>cached||fetch(request)))});

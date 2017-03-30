var cachename = 'cache-v01';
var filestocache = ['/','views/index.html'];
console.log("inside service-worker");
self.addEventListener('install', function(e) {
    console.log("service-worker install");
    e.waitUntil(caches.open(cachename).then(function(cache) {
        return cache.addAll(filestocache)
    }));

})

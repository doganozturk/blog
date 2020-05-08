importScripts('/node_modules/workbox-sw/build/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                }),
            ],
        })
    );
}

importScripts('/node_modules/workbox-sw/build/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        /\.ttf$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'fonts',
            plugins: [
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200],
                }),
                new workbox.expiration.ExpirationPlugin({
                    maxAgeSeconds: 60 * 60 * 24 * 365,
                    maxEntries: 5,
                }),
            ],
        })
    );

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

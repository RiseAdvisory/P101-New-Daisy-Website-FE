/**
 * Service Worker for The Daisy Website
 * Provides offline support and asset caching for better performance.
 *
 * Caching Strategies:
 * - Static assets (JS, CSS, images): Cache First
 * - API calls: Network First with fallback
 * - Navigation: Network First
 */

const CACHE_NAME = 'daisy-cache-v1';
const STATIC_CACHE_NAME = 'daisy-static-v1';

// Static assets to pre-cache during installation
const PRECACHE_ASSETS = [
  '/',
  '/favicon.ico',
];

// Asset types that should use cache-first strategy
const CACHEABLE_ASSET_TYPES = [
  '.js',
  '.css',
  '.woff',
  '.woff2',
  '.ttf',
  '.eot',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.svg',
  '.webp',
  '.ico',
];

// Install event - pre-cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Pre-caching static assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME && name !== STATIC_CACHE_NAME)
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Helper function to check if a request is for a static asset
function isStaticAsset(url) {
  return CACHEABLE_ASSET_TYPES.some((type) => url.pathname.endsWith(type));
}

// Helper function to check if a request is for an API call
function isApiRequest(url) {
  return url.pathname.startsWith('/api') ||
         url.hostname.includes('strapiapp.com') ||
         url.hostname.includes('trythedaisy.com');
}

// Helper function to check if a request is a navigation request
function isNavigationRequest(request) {
  return request.mode === 'navigate';
}

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Static assets: Cache First strategy
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            // Return cached version, but also fetch and update cache in background
            event.waitUntil(
              fetch(event.request)
                .then((networkResponse) => {
                  if (networkResponse && networkResponse.status === 200) {
                    caches.open(STATIC_CACHE_NAME)
                      .then((cache) => cache.put(event.request, networkResponse));
                  }
                })
                .catch(() => {})
            );
            return cachedResponse;
          }

          // Not in cache, fetch from network
          return fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                const responseClone = networkResponse.clone();
                caches.open(STATIC_CACHE_NAME)
                  .then((cache) => cache.put(event.request, responseClone));
              }
              return networkResponse;
            });
        })
    );
    return;
  }

  // API requests: Network First with timeout
  if (isApiRequest(url)) {
    event.respondWith(
      Promise.race([
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(event.request, responseClone));
            }
            return networkResponse;
          }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Network timeout')), 5000)
        ),
      ])
        .catch(() => {
          // Network failed, try cache
          return caches.match(event.request);
        })
    );
    return;
  }

  // Navigation requests: Network First
  if (isNavigationRequest(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // Network failed, try cache or return offline page
          return caches.match(event.request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // Return the cached home page as fallback
              return caches.match('/');
            });
        })
    );
    return;
  }

  // Default: Network First
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});

// Listen for messages to skip waiting
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

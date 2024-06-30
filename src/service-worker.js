const CACHE_NAME = "my-app-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/cart",
  "/product-list",
  "/product/:id",
  "/wishlist",
  "https://fakestoreapi.com/products",
  "https://fakestoreapi.com/products/1",
  "https://fakestoreapi.com/products/2",
  // Add more specific endpoints as needed
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Check if the request URL has a scheme that is unsupported
  if (request.url.startsWith("chrome-extension://")) {
    return;
  }

  // Handle requests for the base API endpoint
  if (request.url.startsWith("https://fakestoreapi.com/products")) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((fetchResponse) => {
          if (
            !fetchResponse ||
            fetchResponse.status !== 200 ||
            fetchResponse.type !== "basic"
          ) {
            return fetchResponse;
          }

          const responseToCache = fetchResponse.clone();

          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(request, responseToCache))
            .catch((error) => {
              console.error("Failed to cache response:", error);
            });

          return fetchResponse;
        });
      })
    );
    return;
  }

  // For other requests, respond with network fetch
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        const responseToCache = response.clone();

        caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(request, responseToCache))
          .catch((error) => {
            console.error("Failed to cache response:", error);
          });

        return response;
      })
      .catch(() => caches.match(request))
  );
});

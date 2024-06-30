// src/service-worker.js
import CartPage from "./pages/CartPage";
import ProductList from "./pages/ProductList";
import SingleProductPage from "./pages/SingleProductPage";
import WhishList from "./pages/WhishList";

const CACHE_NAME = "my-app-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/src/pages/CartPage",
  "/src/pages/Home",
  "/src/pages/Payment",
  "/src/pages/ProductList",
  "/src/pages/SingleProductPage",
  "/src/pages/WhishList",

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
            .then((cache) => cache.put(request, responseToCache));

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
          .then((cache) => cache.put(request, responseToCache));

        return response;
      })
      .catch(() => caches.match(request))
  );
});

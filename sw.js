// sw.js - Saved in your root directory
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Keeps the pipeline clear to allow borderless desktop display frames
});

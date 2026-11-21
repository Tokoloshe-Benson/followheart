// 隨心工作坊：讓網站可以「加到主畫面」。目前不做離線，所有內容照常從網路讀取。
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request));
});

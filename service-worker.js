const CACHE_NAME = 'hougen-app-v1.2';
const urlsToCache = [
  './',
  './index.html',
  './OMK-HOUGEN-APP.JSX',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500;700;900&display=swap'
];

// インストール時にキャッシュを作成
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('キャッシュを開きました');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('キャッシュの追加に失敗しました:', error);
      })
  );
  // 新しいService Workerをすぐにアクティブにする
  self.skipWaiting();
});

// アクティベート時に古いキャッシュを削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('古いキャッシュを削除:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // すぐにクライアントを制御する
  return self.clients.claim();
});

// フェッチイベント: ネットワーク優先、フォールバックでキャッシュ
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // レスポンスが有効な場合、クローンしてキャッシュに保存
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // ネットワークエラーの場合、キャッシュから取得
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          // キャッシュにもない場合、オフラインページを返す
          if (event.request.destination === 'document') {
            return caches.match('./index.html');
          }
        });
      })
  );
});

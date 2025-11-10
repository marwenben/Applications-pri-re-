// Service Worker pour PWA - Horaires de Prière
// Version 1.0.0

const CACHE_NAME = 'salat-times-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './fajr-bg.jpg',
  './dhuhr-bg.jpg',
  './asr-bg.jpg',
  './maghrib-bg.jpg',
  './isha-bg.jpg',
  './ramadan.gif'
];

// Installation
self.addEventListener('install', (event) => {
  console.log('🔧 SW: Installation...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activation
self.addEventListener('activate', (event) => {
  console.log('⚡ SW: Activation...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

// Notifications de prières
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SCHEDULE_PRAYER') {
    console.log('📅 Planification:', event.data.prayer);
    schedulePrayerNotification(event.data);
  }
});

function schedulePrayerNotification(data) {
  const { prayer, time, cityName } = data;
  const now = Date.now();
  const prayerTime = new Date(time).getTime();
  const delay = prayerTime - now;
  
  if (delay > 0 && delay < 24 * 60 * 60 * 1000) {
    setTimeout(() => {
      showPrayerNotification(prayer, cityName);
    }, delay);
  }
}

function showPrayerNotification(prayer, cityName) {
  const prayers = {
    'fajr': { fr: 'Fajr', ar: 'الفجر', emoji: '🌅' },
    'dhuhr': { fr: 'Dhuhr', ar: 'الظهر', emoji: '☀️' },
    'asr': { fr: 'Asr', ar: 'العصر', emoji: '🌤️' },
    'maghrib': { fr: 'Maghrib', ar: 'المغرب', emoji: '🌇' },
    'isha': { fr: 'Isha', ar: 'العشاء', emoji: '🌙' }
  };
  
  const p = prayers[prayer.toLowerCase()] || prayers['fajr'];
  
  self.registration.showNotification(
    `${p.emoji} C'est l'heure de ${p.fr}!`,
    {
      body: `Il est temps de prier ${p.fr} (${p.ar}) à ${cityName}`,
      icon: './icon-192.png',
      badge: './icon-96.png',
      vibrate: [200, 100, 200],
      tag: `prayer-${prayer}`,
      requireInteraction: true,
      data: { prayer, cityName, url: './' }
    }
  );
}

// Clic notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('./'));
});

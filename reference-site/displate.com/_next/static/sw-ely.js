(() => {
    var e = Object.defineProperty;
    self.__WB_DISABLE_DEV_LOGS = !0, importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"), workbox.setConfig({
        debug: !1
    }), self.addEventListener("install", e => {
        e.waitUntil(self.skipWaiting())
    }), self.addEventListener("message", e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    }), self.addEventListener("activate", e => {
        e.waitUntil(Promise.all([self.clients.claim(), caches.keys().then(e => Promise.all(e.map(e => "pages" === e || e.startsWith("workbox-") ? caches.delete(e) : Promise.resolve())))]))
    });
    let {
        registerRoute: t
    } = workbox.routing, {
        NetworkFirst: s,
        StaleWhileRevalidate: a,
        CacheFirst: o
    } = workbox.strategies, {
        CacheableResponsePlugin: i
    } = workbox.cacheableResponse, {
        ExpirationPlugin: n
    } = workbox.expiration, {
        BroadcastUpdatePlugin: r
    } = workbox.broadcastUpdate, l = ["www.facebook.com", "connect.facebook.net", "/mati.gif", "static.ads-twitter.com", "google.pl/ads/ga-audiences", "google.com/pagead", "googleads.g.doubleclick.net/pagead", "stats.g.doubleclick.net", "googletagmanager.com", "www.googletagmanager.com", "google-analytics.com", "www.google-analytics.com", "analytics.google.com", "gtag/js", "measure.displate.com", "exchange.mediavine.com", "criteo-partners.tremorhub.com", "c.amazon-adsystem.com", "p.teads.tv", "js.adsrvr.org", "sw-ely.js", "login.displate.com", "login.displate-dev.com", "login.displate-uat.com", "/elysium-api", "/auth/signin"], c = /\/user\/[^/]+\/auth(?:\/|$|\?|#)/, g = e(e => !c.test(e) && l.every(t => !(e.indexOf(t) > -1)), "name", {
        value: "prepareExcludeFilesAndUrls",
        configurable: !0
    });
    t(({
        request: e
    }) => "navigate" === e.mode && g(e.url), new s({
        cacheName: "pages",
        plugins: [new i({
            statuses: [200]
        }), new n({
            maxEntries: 50,
            maxAgeSeconds: 86400
        })]
    })), t(({
        request: e,
        url: t
    }) => {
        let s = t.pathname;
        return s.startsWith("/_next/static/") && (s.endsWith(".js") || s.endsWith(".css") || s.endsWith(".woff") || s.endsWith(".woff2") || s.endsWith(".ttf") || s.endsWith(".eot") || s.endsWith(".otf")) && g(e.url)
    }, new o({
        cacheName: "assets",
        plugins: [new i({
            statuses: [200]
        }), new n({
            maxEntries: 200,
            maxAgeSeconds: 31536e3
        })]
    })), t(({
        request: e
    }) => ("style" === e.destination || "script" === e.destination || "font" === e.destination || "worker" === e.destination) && g(e.url), new a({
        cacheName: "assets",
        plugins: [new i({
            statuses: [200]
        }), new r, new n({
            maxEntries: 200,
            maxAgeSeconds: 2592e3
        })]
    })), t(({
        request: e
    }) => ("image" === e.destination || "video" === e.destination) && g(e.url), new a({
        cacheName: "images",
        plugins: [new i({
            statuses: [200, 204, 206]
        }), new r, new n({
            maxEntries: 200,
            maxAgeSeconds: 2592e3
        })]
    }))
})();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3801], {
        23801: (e, i, n) => {
            n.r(i), n.d(i, {
                default: () => d
            });
            var t = n(11890),
                s = n(14825),
                r = n(44341),
                o = n(34063);
            let a = function(e) {
                let i = atob((e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/")),
                    n = new Uint8Array(i.length);
                for (let e = 0; e < i.length; ++e) n[e] = i.charCodeAt(e);
                return n
            };
            var u = n(5138),
                h = n(44917),
                c = n(29213),
                f = n(79835);
            class l {
                constructor(e, i, n, t, s, r, o, a, u, h, f) {
                    this.en = e, this.sn = i, this.on = n, this.un = s, this.an = r, this.hn = o, this.h = a, this.cn = u, this.fn = h, this.j = f, this.en = e, this.sn = i, this.on = n, this.ln = t + "/safari/" + i, this.un = s || "/service-worker.js", this.hn = o, this.h = a, this.cn = u || !1, this.fn = h || !1, this.j = f, this.dn = c.A.pn(), this.bn = c.A.yn()
                }
                mn() {
                    return this.fn
                }
                gn(e, i, n, t, s) {
                    e.unsubscribe().then(e => {
                        e ? this.vn(i, n, t, s) : (o.A.error("Failed to unsubscribe device from push."), "function" == typeof s && s(!1))
                    }).catch(e => {
                        o.A.error("Push unsubscription error: " + e), "function" == typeof s && s(!1)
                    })
                }
                wn(e, i, n) {
                    var t;
                    let s, r = (e => {
                            if ("string" == typeof e) return e;
                            if (0 !== e.endpoint.indexOf("https://android.googleapis.com/gcm/send")) return e.endpoint;
                            let i = e.endpoint;
                            return e.kn && -1 === e.endpoint.indexOf(e.kn) && (i = e.endpoint + "/" + e.kn), i
                        })(e),
                        a = null,
                        u = null;
                    if (null != e.getKey) try {
                        let i = Array.from(new Uint8Array(e.getKey("p256dh"))),
                            n = Array.from(new Uint8Array(e.getKey("auth")));
                        a = btoa(String.fromCharCode.apply(null, i)), u = btoa(String.fromCharCode.apply(null, n))
                    } catch (e) {
                        o.A.error((0, f.u)(e))
                    }
                    let h = e.options && (s = e.options.applicationServerKey) && s.byteLength && s.byteLength > 0 ? btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(s)))).replace(/\+/g, "-").replace(/\//g, "_") : null;
                    null == (t = this.en) || t.Pn(r, i, a, u, h), r && "function" == typeof n && n(r, a, u)
                }
                Dn() {
                    var e;
                    null == (e = this.en) || e.Sn(!0)
                }
                An(e, i) {
                    var n;
                    null == (n = this.en) || n.Sn(!1), o.A.info(e), "function" == typeof i && i(!1)
                }
                jn(e, i, n, t) {
                    var s;
                    if ("default" === i.permission) try {
                        window.safari.pushNotification.requestPermission(this.ln, e, {
                            api_key: this.sn,
                            device_id: (null == (s = this.on) ? void 0 : s.fe().id) || ""
                        }, i => {
                            "granted" === i.permission && this.en && this.en.setPushNotificationSubscriptionType(h.A.NotificationSubscriptionTypes.OPTED_IN), this.jn(e, i, n, t)
                        })
                    } catch (e) {
                        this.An("Could not request permission for push: " + e, t)
                    } else "denied" === i.permission ? this.An("The user has blocked notifications from this site, or Safari push is not configured in the Braze dashboard.", t) : "granted" === i.permission && (o.A.info("Device successfully subscribed to push."), this.wn(i.deviceToken, new Date, n))
                }
                requestPermission(e, i, n) {
                    let t = t => {
                            switch (t) {
                                case "granted":
                                    return void("function" == typeof e && e());
                                case "default":
                                    return void("function" == typeof i && i());
                                case "denied":
                                    return void("function" == typeof n && n());
                                default:
                                    o.A.error("Received unexpected permission result " + t)
                            }
                        },
                        s = !1;
                    if ("default" !== window.Notification.permission) t(Notification.permission);
                    else {
                        let e = window.Notification.requestPermission(e => {
                            s && t(e)
                        });
                        e ? e.then(e => {
                            t(e)
                        }) : s = !0
                    }
                }
                vn(e, i, n, t) {
                    let s = {
                        userVisibleOnly: !0
                    };
                    null != i && (s.applicationServerKey = i), e.pushManager.subscribe(s).then(e => {
                        o.A.info("Device successfully subscribed to push."), this.wn(e, new Date, n)
                    }).catch(e => {
                        c.A.isPushBlocked() ? (o.A.info("Permission for push notifications was denied."), "function" == typeof t && t(!1)) : (o.A.error("Push subscription failed: " + e), "function" == typeof t && t(!0))
                    })
                }
                xn() {
                    if (this.cn) return navigator.serviceWorker.getRegistration(this.un);
                    let e = this.an ? {
                        scope: this.an
                    } : void 0;
                    return navigator.serviceWorker.register(this.un, e).then(() => navigator.serviceWorker.ready.then(e => (e && "function" == typeof e.update && e.update().catch(e => {
                        o.A.info("ServiceWorker update failed: " + e)
                    }), e)))
                }
                Nn(e) {
                    this.cn || (e.unregister(), o.A.info("Service worker successfully unregistered."))
                }
                subscribe(e, i) {
                    if (!c.A.isPushSupported()) return o.A.info(l.Un), void("function" == typeof i && i(!1));
                    if (this.dn) {
                        if (!this.cn && null != window.location) {
                            let e = this.un; - 1 === e.indexOf(window.location.host) && (e = window.location.host + e), -1 === e.indexOf(window.location.protocol) && (e = window.location.protocol + "//" + e)
                        }
                        if (c.A.isPushBlocked()) return void this.An("Notifications from this site are blocked. This may be a temporary embargo or a permanent denial.", i);
                        if (this.h && !this.h.Wn() && 0 === this.h.Ft()) return o.A.info("Waiting for VAPID key from server config before subscribing to push."), void this.h._n(() => {
                            this.subscribe(e, i)
                        });
                        let n = c.A.isPushPermissionGranted(),
                            t = () => {
                                !n && this.en && this.en.setPushNotificationSubscriptionType(h.A.NotificationSubscriptionTypes.OPTED_IN), this.xn().then(n => {
                                    null == n ? (o.A.error("No service worker registration. Set the `manageServiceWorkerExternally` initialization option to false or ensure that your service worker is registered before calling registerPush."), "function" == typeof i && i(!0)) : n.pushManager.getSubscription().then(t => {
                                        var h;
                                        let c = null;
                                        if (null != (null == (h = this.h) ? void 0 : h.Wn()) && (c = a(this.h.Wn())), t) {
                                            let a, h = null,
                                                f = null;
                                            if (this.j && (a = this.j.lt(u.d.ct.In)), a && !(0, s.cy)(a)) {
                                                let e;
                                                try {
                                                    e = r.A.qn(a).Vn
                                                } catch (i) {
                                                    e = null
                                                }
                                                null == e || isNaN(e.getTime()) || 0 === e.getTime() || (f = new Date(h = e)).setMonth(h.getMonth() + 6)
                                            }
                                            null != c && t.options && t.options.applicationServerKey && t.options.applicationServerKey.byteLength && t.options.applicationServerKey.byteLength > 0 && !(0, s.n4)(c, new Uint8Array(t.options.applicationServerKey)) ? (t.options.applicationServerKey.byteLength > 12 ? o.A.info("Device was already subscribed to push using a different VAPID provider, creating new subscription.") : o.A.info("Attempting to upgrade a gcm_sender_id-based push registration to VAPID - depending on the browser this may or may not result in the same gcm_sender_id-based subscription."), this.gn(t, n, c, e, i)) : t.expirationTime && new Date(t.expirationTime).valueOf() <= new Date().valueOf() ? (o.A.info("Push subscription is expired, creating new subscription."), this.gn(t, n, c, e, i)) : a && (0, s.cy)(a) ? this.gn(t, n, c, e, i) : null == f ? (o.A.info("No push subscription creation date found, creating new subscription."), this.gn(t, n, c, e, i)) : f.valueOf() <= new Date().valueOf() ? (o.A.info("Push subscription older than 6 months, creating new subscription."), this.gn(t, n, c, e, i)) : (o.A.info("Device already subscribed to push, sending existing subscription to backend."), this.wn(t, h, e))
                                        } else this.vn(n, c, e, i)
                                    }).catch(e => {
                                        o.A.error("Error checking current push subscriptions: " + e)
                                    })
                                }).catch(e => {
                                    o.A.error("ServiceWorker registration failed: " + e)
                                })
                            };
                        this.requestPermission(t, () => {
                            let e = "Permission for push notifications was ignored.";
                            c.A.isPushBlocked() && (e += " The browser has automatically blocked further permission requests for a period (probably 1 week)."), o.A.info(e), "function" == typeof i && i(!0)
                        }, () => {
                            o.A.info("Permission for push notifications was denied."), "function" == typeof i && i(!1)
                        })
                    } else if (this.bn) {
                        if (null == this.hn || "" === this.hn) return o.A.error("You must supply the safariWebsitePushId initialization option in order to use registerPush on Safari"), void("function" == typeof i && i(!0));
                        let n = window.safari.pushNotification.permission(this.hn);
                        this.jn(this.hn, n, e, i)
                    }
                }
                unsubscribe(e, i) {
                    c.A.isPushSupported() ? this.dn ? navigator.serviceWorker.getRegistration(this.un).then(n => {
                        n ? n.pushManager.getSubscription().then(t => {
                            t ? (this.Dn(), t.unsubscribe().then(t => {
                                t ? (o.A.info("Device successfully unsubscribed from push."), "function" == typeof e && e()) : (o.A.error("Failed to unsubscribe device from push."), "function" == typeof i && i()), this.Nn(n)
                            }).catch(e => {
                                o.A.error("Push unsubscription error: " + e), "function" == typeof i && i()
                            })) : (o.A.info("Device already unsubscribed from push."), "function" == typeof e && e())
                        }).catch(e => {
                            o.A.error("Error unsubscribing from push: " + e), "function" == typeof i && i()
                        }) : (o.A.info("Device already unsubscribed from push."), "function" == typeof e && e())
                    }) : this.bn && (this.Dn(), o.A.info("Device unsubscribed from push."), "function" == typeof e && e()) : (o.A.info(l.Un), "function" == typeof i && i())
                }
            }
            l.Un = "Push notifications are not supported in this browser.";
            let p = {
                    i: !1,
                    aa: null,
                    ea: () => (p.t(), p.aa || (p.aa = new l(t.Ay.gr(), t.Ay.ba(), t.Ay.de(), t.Ay.V(), t.Ay.ee(t.lw.Ma), t.Ay.ee(t.lw._a), t.Ay.ee(t.lw.ka), t.Ay.l(), t.Ay.ee(t.lw.qa), t.Ay.ee(t.lw.Aa), t.Ay.p())), p.aa),
                    t: () => {
                        p.i || (t.Ay.g(p), p.i = !0)
                    },
                    destroy: () => {
                        p.aa = null, p.i = !1
                    }
                },
                d = p
        }
    }
]);
//#
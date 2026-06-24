"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1656], {
        4547: (t, e, n) => {
            n.d(e, {
                x: () => r
            });
            class r {#
                t = new Set;
                history = [];
                constructor(t, e) {
                    this.name = t, this.attrs = {}, this.roundingMethod = "function" == typeof e ? e : Math.floor
                }
                update({
                    value: t,
                    attrs: e = {}
                }) {
                    if (null == t || t < 0) return;
                    let n = {
                        value: this.roundingMethod(t),
                        name: this.name,
                        attrs: e
                    };
                    this.history.push(n), this.#t.forEach(t => {
                        try {
                            t(n)
                        } catch (t) {}
                    })
                }
                get current() {
                    return this.history[this.history.length - 1] || {
                        value: void 0,
                        name: this.name,
                        attrs: {}
                    }
                }
                get isValid() {
                    return this.current.value >= 0
                }
                subscribe(t, e = !0) {
                    if ("function" == typeof t) return this.#t.add(t), this.isValid && e && this.history.forEach(e => {
                        t(e)
                    }), () => {
                        this.#t.delete(t)
                    }
                }
            }
        },
        5863: (t, e, n) => {
            n.d(e, {
                w: () => r
            });
            let r = {
                FIRST_PAINT: "fp",
                FIRST_CONTENTFUL_PAINT: "fcp",
                FIRST_INTERACTION: "fi",
                LARGEST_CONTENTFUL_PAINT: "lcp",
                LOAD_TIME: "load",
                CUMULATIVE_LAYOUT_SHIFT: "cls",
                INTERACTION_TO_NEXT_PAINT: "inp",
                TIME_TO_FIRST_BYTE: "ttfb"
            }
        },
        16266: (t, e, n) => {
            n.d(e, {
                j: () => o
            });
            var r = n(17587),
                i = n(8068),
                a = n(5863);
            let o = new(n(4547)).x(a.w.FIRST_CONTENTFUL_PAINT);
            if (i.RI)
                if (i.sb) try {
                    i.mw || performance.getEntriesByType("paint").forEach(t => {
                        "first-contentful-paint" === t.name && o.update({
                            value: Math.floor(t.startTime)
                        })
                    })
                } catch (t) {} else(0, r.zB)(({
                    value: t,
                    attribution: e
                }) => {
                    if (i.mw || o.isValid) return;
                    let n = {
                        timeToFirstByte: e.timeToFirstByte,
                        firstByteToFCP: e.firstByteToFCP,
                        loadState: e.loadState
                    };
                    o.update({
                        value: t,
                        attrs: n
                    })
                })
        },
        17587: (t, e, n) => {
            n.d(e, {
                Ck: () => tm,
                IN: () => F,
                fK: () => tu,
                rH: () => to,
                zB: () => A
            });
            var r, i, a = function() {
                    var t = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
                    if (t && t.responseStart > 0 && t.responseStart < performance.now()) return t
                },
                o = function(t) {
                    if ("loading" === document.readyState) return "loading";
                    var e = a();
                    if (e) {
                        if (t < e.domInteractive) return "loading";
                        if (0 === e.domContentLoadedEventStart || t < e.domContentLoadedEventStart) return "dom-interactive";
                        if (0 === e.domComplete || t < e.domComplete) return "dom-content-loaded"
                    }
                    return "complete"
                },
                c = function(t) {
                    var e = t.nodeName;
                    return 1 === t.nodeType ? e.toLowerCase() : e.toUpperCase().replace(/^#/, "")
                },
                s = function(t, e) {
                    var n = "";
                    try {
                        for (; t && 9 !== t.nodeType;) {
                            var r = t,
                                i = r.id ? "#" + r.id : c(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
                            if (n.length + i.length > (e || 100) - 1) return n || i;
                            if (n = n ? i + ">" + n : i, r.id) break;
                            t = r.parentNode
                        }
                    } catch (t) {}
                    return n
                },
                u = -1,
                f = function() {
                    return u
                },
                d = function(t) {
                    addEventListener("pageshow", function(e) {
                        e.persisted && (u = e.timeStamp, t(e))
                    }, !0)
                },
                l = function() {
                    var t = a();
                    return t && t.activationStart || 0
                },
                m = function(t, e) {
                    var n = a(),
                        r = "navigate";
                    return f() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || l() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                        name: t,
                        value: void 0 === e ? -1 : e,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v4-".concat(Date.now(), "-").concat(Math.floor(0x82f79cd8fff * Math.random()) + 1e12),
                        navigationType: r
                    }
                },
                p = function(t, e, n) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                            var r = new PerformanceObserver(function(t) {
                                Promise.resolve().then(function() {
                                    e(t.getEntries())
                                })
                            });
                            return r.observe(Object.assign({
                                type: t,
                                buffered: !0
                            }, n || {})), r
                        }
                    } catch (t) {}
                },
                v = function(t, e, n, r) {
                    var i, a;
                    return function(o) {
                        var c;
                        e.value >= 0 && (o || r) && ((a = e.value - (i || 0)) || void 0 === i) && (i = e.value, e.delta = a, c = e.value, e.rating = c > n[1] ? "poor" : c > n[0] ? "needs-improvement" : "good", t(e))
                    }
                },
                h = function(t) {
                    requestAnimationFrame(function() {
                        return requestAnimationFrame(function() {
                            return t()
                        })
                    })
                },
                g = function(t) {
                    document.addEventListener("visibilitychange", function() {
                        "hidden" === document.visibilityState && t()
                    })
                },
                T = function(t) {
                    var e = !1;
                    return function() {
                        e || (t(), e = !0)
                    }
                },
                y = -1,
                E = function() {
                    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
                },
                S = function(t) {
                    "hidden" === document.visibilityState && y > -1 && (y = "visibilitychange" === t.type ? t.timeStamp : 0, w())
                },
                b = function() {
                    addEventListener("visibilitychange", S, !0), addEventListener("prerenderingchange", S, !0)
                },
                w = function() {
                    removeEventListener("visibilitychange", S, !0), removeEventListener("prerenderingchange", S, !0)
                },
                C = function() {
                    return y < 0 && (y = E(), b(), d(function() {
                        setTimeout(function() {
                            y = E(), b()
                        }, 0)
                    })), {
                        get firstHiddenTime() {
                            return y
                        }
                    }
                },
                I = function(t) {
                    document.prerendering ? addEventListener("prerenderingchange", function() {
                        return t()
                    }, !0) : t()
                },
                L = [1800, 3e3],
                _ = function(t, e) {
                    e = e || {}, I(function() {
                        var n, r = C(),
                            i = m("FCP"),
                            a = p("paint", function(t) {
                                t.forEach(function(t) {
                                    "first-contentful-paint" === t.name && (a.disconnect(), t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - l(), 0), i.entries.push(t), n(!0)))
                                })
                            });
                        a && (n = v(t, i, L, e.reportAllChanges), d(function(r) {
                            n = v(t, i = m("FCP"), L, e.reportAllChanges), h(function() {
                                i.value = performance.now() - r.timeStamp, n(!0)
                            })
                        }))
                    })
                },
                M = [.1, .25],
                F = function(t, e) {
                    var n, r;
                    n = function(e) {
                        t(function(t) {
                            var e, n = {};
                            if (t.entries.length) {
                                var r = t.entries.reduce(function(t, e) {
                                    return t && t.value > e.value ? t : e
                                });
                                if (r && r.sources && r.sources.length) {
                                    var i = (e = r.sources).find(function(t) {
                                        return t.node && 1 === t.node.nodeType
                                    }) || e[0];
                                    i && (n = {
                                        largestShiftTarget: s(i.node),
                                        largestShiftTime: r.startTime,
                                        largestShiftValue: r.value,
                                        largestShiftSource: i,
                                        largestShiftEntry: r,
                                        loadState: o(r.startTime)
                                    })
                                }
                            }
                            return Object.assign(t, {
                                attribution: n
                            })
                        }(e))
                    }, r = (r = e) || {}, _(T(function() {
                        var t, e = m("CLS", 0),
                            i = 0,
                            a = [],
                            o = function(n) {
                                n.forEach(function(t) {
                                    if (!t.hadRecentInput) {
                                        var e = a[0],
                                            n = a[a.length - 1];
                                        i && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (i += t.value, a.push(t)) : (i = t.value, a = [t])
                                    }
                                }), i > e.value && (e.value = i, e.entries = a, t())
                            },
                            c = p("layout-shift", o);
                        c && (t = v(n, e, M, r.reportAllChanges), g(function() {
                            o(c.takeRecords()), t(!0)
                        }), d(function() {
                            i = 0, t = v(n, e = m("CLS", 0), M, r.reportAllChanges), h(function() {
                                return t()
                            })
                        }), setTimeout(t, 0))
                    }))
                },
                A = function(t, e) {
                    _(function(e) {
                        t(function(t) {
                            var e = {
                                timeToFirstByte: 0,
                                firstByteToFCP: t.value,
                                loadState: o(f())
                            };
                            if (t.entries.length) {
                                var n = a(),
                                    r = t.entries[t.entries.length - 1];
                                if (n) {
                                    var i = n.activationStart || 0,
                                        c = Math.max(0, n.responseStart - i);
                                    e = {
                                        timeToFirstByte: c,
                                        firstByteToFCP: t.value - c,
                                        loadState: o(t.entries[0].startTime),
                                        navigationEntry: n,
                                        fcpEntry: r
                                    }
                                }
                            }
                            return Object.assign(t, {
                                attribution: e
                            })
                        }(e))
                    }, e)
                },
                P = 0,
                D = 1 / 0,
                N = 0,
                k = function(t) {
                    t.forEach(function(t) {
                        t.interactionId && (D = Math.min(D, t.interactionId), P = (N = Math.max(N, t.interactionId)) ? (N - D) / 7 + 1 : 0)
                    })
                },
                x = function() {
                    return r ? P : performance.interactionCount || 0
                },
                R = function() {
                    "interactionCount" in performance || r || (r = p("event", k, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                },
                B = [],
                O = new Map,
                q = 0,
                j = function() {
                    var t = Math.min(B.length - 1, Math.floor((x() - q) / 50));
                    return B[t]
                },
                U = [],
                V = function(t) {
                    if (U.forEach(function(e) {
                            return e(t)
                        }), t.interactionId || "first-input" === t.entryType) {
                        var e = B[B.length - 1],
                            n = O.get(t.interactionId);
                        if (n || B.length < 10 || t.duration > e.latency) {
                            if (n) t.duration > n.latency ? (n.entries = [t], n.latency = t.duration) : t.duration === n.latency && t.startTime === n.entries[0].startTime && n.entries.push(t);
                            else {
                                var r = {
                                    id: t.interactionId,
                                    latency: t.duration,
                                    entries: [t]
                                };
                                O.set(r.id, r), B.push(r)
                            }
                            B.sort(function(t, e) {
                                return e.latency - t.latency
                            }), B.length > 10 && B.splice(10).forEach(function(t) {
                                return O.delete(t.id)
                            })
                        }
                    }
                },
                H = function(t) {
                    var e = self.requestIdleCallback || self.setTimeout,
                        n = -1;
                    return t = T(t), "hidden" === document.visibilityState ? t() : (n = e(t), g(t)), n
                },
                z = [200, 500],
                W = function(t, e) {
                    "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (e = e || {}, I(function() {
                        R();
                        var n, r, i = m("INP"),
                            a = function(t) {
                                H(function() {
                                    t.forEach(V);
                                    var e = j();
                                    e && e.latency !== i.value && (i.value = e.latency, i.entries = e.entries, r())
                                })
                            },
                            o = p("event", a, {
                                durationThreshold: null != (n = e.durationThreshold) ? n : 40
                            });
                        r = v(t, i, z, e.reportAllChanges), o && (o.observe({
                            type: "first-input",
                            buffered: !0
                        }), g(function() {
                            a(o.takeRecords()), r(!0)
                        }), d(function() {
                            q = x(), B.length = 0, O.clear(), r = v(t, i = m("INP"), z, e.reportAllChanges)
                        }))
                    }))
                },
                Y = [],
                G = [],
                J = 0,
                K = new WeakMap,
                X = new Map,
                Q = -1,
                Z = function(t) {
                    Y = Y.concat(t), $()
                },
                $ = function() {
                    Q < 0 && (Q = H(tt))
                },
                tt = function() {
                    X.size > 10 && X.forEach(function(t, e) {
                        O.has(e) || X.delete(e)
                    });
                    var t = B.map(function(t) {
                            return K.get(t.entries[0])
                        }),
                        e = G.length - 50;
                    G = G.filter(function(n, r) {
                        return r >= e || t.includes(n)
                    });
                    for (var n = new Set, r = 0; r < G.length; r++) {
                        var i = G[r];
                        ta(i.startTime, i.processingEnd).forEach(function(t) {
                            n.add(t)
                        })
                    }
                    var a = Y.length - 1 - 50;
                    Y = Y.filter(function(t, e) {
                        return t.startTime > J && e > a || n.has(t)
                    }), Q = -1
                };
            U.push(function(t) {
                t.interactionId && t.target && !X.has(t.interactionId) && X.set(t.interactionId, t.target)
            }, function(t) {
                var e, n = t.startTime + t.duration;
                J = Math.max(J, t.processingEnd);
                for (var r = G.length - 1; r >= 0; r--) {
                    var i = G[r];
                    if (8 >= Math.abs(n - i.renderTime)) {
                        (e = i).startTime = Math.min(t.startTime, e.startTime), e.processingStart = Math.min(t.processingStart, e.processingStart), e.processingEnd = Math.max(t.processingEnd, e.processingEnd), e.entries.push(t);
                        break
                    }
                }
                e || (e = {
                    startTime: t.startTime,
                    processingStart: t.processingStart,
                    processingEnd: t.processingEnd,
                    renderTime: n,
                    entries: [t]
                }, G.push(e)), (t.interactionId || "first-input" === t.entryType) && K.set(t, e), $()
            });
            var te, tn, tr, ti, ta = function(t, e) {
                    for (var n, r = [], i = 0; n = Y[i]; i++)
                        if (!(n.startTime + n.duration < t)) {
                            if (n.startTime > e) break;
                            r.push(n)
                        }
                    return r
                },
                to = function(t, e) {
                    i || (i = p("long-animation-frame", Z)), W(function(e) {
                        var n, r, i, a, c, u, f, d, l, m;
                        t((n = e.entries[0], r = K.get(n), i = n.processingStart, a = r.processingEnd, c = r.entries.sort(function(t, e) {
                            return t.processingStart - e.processingStart
                        }), u = ta(n.startTime, a), d = (f = e.entries.find(function(t) {
                            return t.target
                        })) && f.target || X.get(n.interactionId), l = [n.startTime + n.duration, a].concat(u.map(function(t) {
                            return t.startTime + t.duration
                        })), m = Math.max.apply(Math, l), Object.assign(e, {
                            attribution: {
                                interactionTarget: s(d),
                                interactionTargetElement: d,
                                interactionType: n.name.startsWith("key") ? "keyboard" : "pointer",
                                interactionTime: n.startTime,
                                nextPaintTime: m,
                                processedEventEntries: c,
                                longAnimationFrameEntries: u,
                                inputDelay: i - n.startTime,
                                processingDuration: a - i,
                                presentationDelay: Math.max(m - a, 0),
                                loadState: o(n.startTime)
                            }
                        })))
                    }, e)
                },
                tc = [2500, 4e3],
                ts = {},
                tu = function(t, e) {
                    var n, r;
                    n = function(e) {
                        t(function(t) {
                            var e = {
                                timeToFirstByte: 0,
                                resourceLoadDelay: 0,
                                resourceLoadDuration: 0,
                                elementRenderDelay: t.value
                            };
                            if (t.entries.length) {
                                var n = a();
                                if (n) {
                                    var r = n.activationStart || 0,
                                        i = t.entries[t.entries.length - 1],
                                        o = i.url && performance.getEntriesByType("resource").filter(function(t) {
                                            return t.name === i.url
                                        })[0],
                                        c = Math.max(0, n.responseStart - r),
                                        u = Math.max(c, o ? (o.requestStart || o.startTime) - r : 0),
                                        f = Math.max(u, o ? o.responseEnd - r : 0),
                                        d = Math.max(f, i.startTime - r);
                                    e = {
                                        element: s(i.element),
                                        timeToFirstByte: c,
                                        resourceLoadDelay: u - c,
                                        resourceLoadDuration: f - u,
                                        elementRenderDelay: d - f,
                                        navigationEntry: n,
                                        lcpEntry: i
                                    }, i.url && (e.url = i.url), o && (e.lcpResourceEntry = o)
                                }
                            }
                            return Object.assign(t, {
                                attribution: e
                            })
                        }(e))
                    }, r = (r = e) || {}, I(function() {
                        var t, e = C(),
                            i = m("LCP"),
                            a = function(n) {
                                r.reportAllChanges || (n = n.slice(-1)), n.forEach(function(n) {
                                    n.startTime < e.firstHiddenTime && (i.value = Math.max(n.startTime - l(), 0), i.entries = [n], t())
                                })
                            },
                            o = p("largest-contentful-paint", a);
                        if (o) {
                            t = v(n, i, tc, r.reportAllChanges);
                            var c = T(function() {
                                ts[i.id] || (a(o.takeRecords()), o.disconnect(), ts[i.id] = !0, t(!0))
                            });
                            ["keydown", "click"].forEach(function(t) {
                                addEventListener(t, function() {
                                    return H(c)
                                }, {
                                    once: !0,
                                    capture: !0
                                })
                            }), g(c), d(function(e) {
                                t = v(n, i = m("LCP"), tc, r.reportAllChanges), h(function() {
                                    i.value = performance.now() - e.timeStamp, ts[i.id] = !0, t(!0)
                                })
                            })
                        }
                    })
                },
                tf = [800, 1800],
                td = function t(e) {
                    document.prerendering ? I(function() {
                        return t(e)
                    }) : "complete" !== document.readyState ? addEventListener("load", function() {
                        return t(e)
                    }, !0) : setTimeout(e, 0)
                },
                tl = function(t, e) {
                    e = e || {};
                    var n = m("TTFB"),
                        r = v(t, n, tf, e.reportAllChanges);
                    td(function() {
                        var i = a();
                        i && (n.value = Math.max(i.responseStart - l(), 0), n.entries = [i], r(!0), d(function() {
                            (r = v(t, n = m("TTFB", 0), tf, e.reportAllChanges))(!0)
                        }))
                    })
                },
                tm = function(t, e) {
                    tl(function(e) {
                        t(function(t) {
                            var e = {
                                waitingDuration: 0,
                                cacheDuration: 0,
                                dnsDuration: 0,
                                connectionDuration: 0,
                                requestDuration: 0
                            };
                            if (t.entries.length) {
                                var n = t.entries[0],
                                    r = n.activationStart || 0,
                                    i = Math.max((n.workerStart || n.fetchStart) - r, 0),
                                    a = Math.max(n.domainLookupStart - r, 0),
                                    o = Math.max(n.connectStart - r, 0),
                                    c = Math.max(n.connectEnd - r, 0);
                                e = {
                                    waitingDuration: i,
                                    cacheDuration: a - i,
                                    dnsDuration: o - a,
                                    connectionDuration: c - o,
                                    requestDuration: t.value - c,
                                    navigationEntry: n
                                }
                            }
                            return Object.assign(t, {
                                attribution: e
                            })
                        }(e))
                    }, e)
                },
                tp = {
                    passive: !0,
                    capture: !0
                },
                tv = new Date,
                th = function(t, e) {
                    te || (te = e, tn = t, tr = new Date, ty(removeEventListener), tg())
                },
                tg = function() {
                    if (tn >= 0 && tn < tr - tv) {
                        var t = {
                            entryType: "first-input",
                            name: te.type,
                            target: te.target,
                            cancelable: te.cancelable,
                            startTime: te.timeStamp,
                            processingStart: te.timeStamp + tn
                        };
                        ti.forEach(function(e) {
                            e(t)
                        }), ti = []
                    }
                },
                tT = function(t) {
                    if (t.cancelable) {
                        var e, n, r, i = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                        "pointerdown" == t.type ? (e = function() {
                            th(i, t), r()
                        }, n = function() {
                            r()
                        }, r = function() {
                            removeEventListener("pointerup", e, tp), removeEventListener("pointercancel", n, tp)
                        }, addEventListener("pointerup", e, tp), addEventListener("pointercancel", n, tp)) : th(i, t)
                    }
                },
                ty = function(t) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
                        return t(e, tT, tp)
                    })
                }
        },
        23073: (t, e, n) => {
            n.d(e, {
                J: () => a
            });
            var r = n(8068),
                i = n(5863);
            let a = new(n(4547)).x(i.w.FIRST_PAINT);
            if (r.RI) {
                let t;
                try {
                    PerformanceObserver.supportedEntryTypes.includes("paint") && !r.mw && (t = new PerformanceObserver(e => {
                        Promise.resolve().then(() => {
                            e.getEntries().forEach(e => {
                                "first-paint" !== e.name || a.isValid || (t.disconnect(), a.update({
                                    value: e.startTime
                                }))
                            })
                        })
                    })).observe({
                        type: "paint",
                        buffered: !0
                    })
                } catch (t) {}
            }
        },
        50655: (t, e, n) => {
            n.d(e, {
                eM: () => l,
                si: () => m,
                ss: () => d
            });
            var r = "Start",
                i = "unloadEvent",
                a = "redirect",
                o = "domainLookup",
                c = "onnect",
                s = "response",
                u = "loadEvent",
                f = "domContentLoadedEvent";
            let d = [];

            function l(t, e, n = {}, d = !1) {
                if (e) return n.of = t, p(n.of, n, "n", !0), p(e[i + r], n, "u", d), p(e[a + r], n, "r", d), p(e[i + "End"], n, "ue", d), p(e[a + "End"], n, "re", d), p(e["fetch" + r], n, "f", d), p(e[o + r], n, "dn", d), p(e[o + "End"], n, "dne", d), p(e["c" + c + r], n, "c", d), p(e["secureC" + c + "ion" + r], n, "s", d), p(e["c" + c + "End"], n, "ce", d), p(e["request" + r], n, "rq", d), p(e[s + r], n, "rp", d), p(e[s + "End"], n, "rpe", d), p(e.domLoading, n, "dl", d), p(e.domInteractive, n, "di", d), p(e[f + r], n, "ds", d), p(e[f + "End"], n, "de", d), p(e.domComplete, n, "dc", d), p(e[u + r], n, "l", d), p(e[u + "End"], n, "le", d), n
            }

            function m(t, e) {
                try {
                    var n;
                    p((n = t.type, "number" == typeof n ? n : ({
                        navigate: void 0,
                        reload: 1,
                        back_forward: 2,
                        prerender: 3
                    })[n]), e, "ty"), p(t.redirectCount, e, "rc")
                } catch (t) {
                    e.ty = 0, e.rc = 0
                }
                return e
            }

            function p(t, e, n, r) {
                "number" == typeof t && t > 0 ? (r && (t = Math.max(t - (e ? .of > 0 ? e.of : 0), 0)), t = Math.round(t), e[n] = t, d.push(t)) : d.push(void 0)
            }
        },
        53351: (t, e, n) => {
            n.d(e, {
                R: () => i
            });
            var r = n(8068);
            let i = (() => {
                try {
                    if ("u" > typeof navigator && !0 === navigator.webdriver || r.RI && (document.__webdriver_evaluate || document.__selenium_unwrapped || document.__driver_evaluate || document.__webdriver_script_function || window.callPhantom || window._phantom || window.__nightmare)) return !0;
                    return !1
                } catch (t) {
                    return !1
                }
            })()
        }
    }
]);
//#
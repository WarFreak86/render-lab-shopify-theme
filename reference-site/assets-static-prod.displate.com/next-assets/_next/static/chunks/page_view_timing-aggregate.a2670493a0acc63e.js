"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2617], {
        4547: (e, t, n) => {
            n.d(t, {
                x: () => r
            });
            class r {#
                e = new Set;
                history = [];
                constructor(e, t) {
                    this.name = e, this.attrs = {}, this.roundingMethod = "function" == typeof t ? t : Math.floor
                }
                update({
                    value: e,
                    attrs: t = {}
                }) {
                    if (null == e || e < 0) return;
                    let n = {
                        value: this.roundingMethod(e),
                        name: this.name,
                        attrs: t
                    };
                    this.history.push(n), this.#e.forEach(e => {
                        try {
                            e(n)
                        } catch (e) {}
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
                subscribe(e, t = !0) {
                    if ("function" == typeof e) return this.#e.add(e), this.isValid && t && this.history.forEach(t => {
                        e(t)
                    }), () => {
                        this.#e.delete(e)
                    }
                }
            }
        },
        5863: (e, t, n) => {
            n.d(t, {
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
        10844: (e, t, n) => {
            n.d(t, {
                Y: () => o
            });
            var r = n(8068),
                i = n(79747),
                a = n(5863);
            let o = new(n(4547)).x(a.w.LOAD_TIME);
            if (r.RI) {
                let e = r.gm.performance;
                (0, i.GG)(() => {
                    !o.isValid && e && o.update({
                        value: (0, r.eN)() ? e.getEntriesByType("navigation") ? .[0] ? .loadEventEnd : e.timing ? .loadEventEnd - r.WN
                    })
                }, !0)
            }
        },
        16266: (e, t, n) => {
            n.d(t, {
                j: () => o
            });
            var r = n(17587),
                i = n(8068),
                a = n(5863);
            let o = new(n(4547)).x(a.w.FIRST_CONTENTFUL_PAINT);
            if (i.RI)
                if (i.sb) try {
                    i.mw || performance.getEntriesByType("paint").forEach(e => {
                        "first-contentful-paint" === e.name && o.update({
                            value: Math.floor(e.startTime)
                        })
                    })
                } catch (e) {} else(0, r.zB)(({
                    value: e,
                    attribution: t
                }) => {
                    if (i.mw || o.isValid) return;
                    let n = {
                        timeToFirstByte: t.timeToFirstByte,
                        firstByteToFCP: t.firstByteToFCP,
                        loadState: t.loadState
                    };
                    o.update({
                        value: e,
                        attrs: n
                    })
                })
        },
        17587: (e, t, n) => {
            n.d(t, {
                Ck: () => em,
                IN: () => A,
                fK: () => eu,
                rH: () => eo,
                zB: () => F
            });
            var r, i, a = function() {
                    var e = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
                    if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
                },
                o = function(e) {
                    if ("loading" === document.readyState) return "loading";
                    var t = a();
                    if (t) {
                        if (e < t.domInteractive) return "loading";
                        if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive";
                        if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded"
                    }
                    return "complete"
                },
                s = function(e) {
                    var t = e.nodeName;
                    return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
                },
                c = function(e, t) {
                    var n = "";
                    try {
                        for (; e && 9 !== e.nodeType;) {
                            var r = e,
                                i = r.id ? "#" + r.id : s(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
                            if (n.length + i.length > (t || 100) - 1) return n || i;
                            if (n = n ? i + ">" + n : i, r.id) break;
                            e = r.parentNode
                        }
                    } catch (e) {}
                    return n
                },
                u = -1,
                d = function() {
                    return u
                },
                l = function(e) {
                    addEventListener("pageshow", function(t) {
                        t.persisted && (u = t.timeStamp, e(t))
                    }, !0)
                },
                f = function() {
                    var e = a();
                    return e && e.activationStart || 0
                },
                m = function(e, t) {
                    var n = a(),
                        r = "navigate";
                    return d() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || f() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                        name: e,
                        value: void 0 === t ? -1 : t,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v4-".concat(Date.now(), "-").concat(Math.floor(0x82f79cd8fff * Math.random()) + 1e12),
                        navigationType: r
                    }
                },
                p = function(e, t, n) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            var r = new PerformanceObserver(function(e) {
                                Promise.resolve().then(function() {
                                    t(e.getEntries())
                                })
                            });
                            return r.observe(Object.assign({
                                type: e,
                                buffered: !0
                            }, n || {})), r
                        }
                    } catch (e) {}
                },
                h = function(e, t, n, r) {
                    var i, a;
                    return function(o) {
                        var s;
                        t.value >= 0 && (o || r) && ((a = t.value - (i || 0)) || void 0 === i) && (i = t.value, t.delta = a, s = t.value, t.rating = s > n[1] ? "poor" : s > n[0] ? "needs-improvement" : "good", e(t))
                    }
                },
                v = function(e) {
                    requestAnimationFrame(function() {
                        return requestAnimationFrame(function() {
                            return e()
                        })
                    })
                },
                g = function(e) {
                    document.addEventListener("visibilitychange", function() {
                        "hidden" === document.visibilityState && e()
                    })
                },
                T = function(e) {
                    var t = !1;
                    return function() {
                        t || (e(), t = !0)
                    }
                },
                y = -1,
                E = function() {
                    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
                },
                b = function(e) {
                    "hidden" === document.visibilityState && y > -1 && (y = "visibilitychange" === e.type ? e.timeStamp : 0, w())
                },
                S = function() {
                    addEventListener("visibilitychange", b, !0), addEventListener("prerenderingchange", b, !0)
                },
                w = function() {
                    removeEventListener("visibilitychange", b, !0), removeEventListener("prerenderingchange", b, !0)
                },
                I = function() {
                    return y < 0 && (y = E(), S(), l(function() {
                        setTimeout(function() {
                            y = E(), S()
                        }, 0)
                    })), {
                        get firstHiddenTime() {
                            return y
                        }
                    }
                },
                L = function(e) {
                    document.prerendering ? addEventListener("prerenderingchange", function() {
                        return e()
                    }, !0) : e()
                },
                C = [1800, 3e3],
                M = function(e, t) {
                    t = t || {}, L(function() {
                        var n, r = I(),
                            i = m("FCP"),
                            a = p("paint", function(e) {
                                e.forEach(function(e) {
                                    "first-contentful-paint" === e.name && (a.disconnect(), e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - f(), 0), i.entries.push(e), n(!0)))
                                })
                            });
                        a && (n = h(e, i, C, t.reportAllChanges), l(function(r) {
                            n = h(e, i = m("FCP"), C, t.reportAllChanges), v(function() {
                                i.value = performance.now() - r.timeStamp, n(!0)
                            })
                        }))
                    })
                },
                _ = [.1, .25],
                A = function(e, t) {
                    var n, r;
                    n = function(t) {
                        e(function(e) {
                            var t, n = {};
                            if (e.entries.length) {
                                var r = e.entries.reduce(function(e, t) {
                                    return e && e.value > t.value ? e : t
                                });
                                if (r && r.sources && r.sources.length) {
                                    var i = (t = r.sources).find(function(e) {
                                        return e.node && 1 === e.node.nodeType
                                    }) || t[0];
                                    i && (n = {
                                        largestShiftTarget: c(i.node),
                                        largestShiftTime: r.startTime,
                                        largestShiftValue: r.value,
                                        largestShiftSource: i,
                                        largestShiftEntry: r,
                                        loadState: o(r.startTime)
                                    })
                                }
                            }
                            return Object.assign(e, {
                                attribution: n
                            })
                        }(t))
                    }, r = (r = t) || {}, M(T(function() {
                        var e, t = m("CLS", 0),
                            i = 0,
                            a = [],
                            o = function(n) {
                                n.forEach(function(e) {
                                    if (!e.hadRecentInput) {
                                        var t = a[0],
                                            n = a[a.length - 1];
                                        i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value, a.push(e)) : (i = e.value, a = [e])
                                    }
                                }), i > t.value && (t.value = i, t.entries = a, e())
                            },
                            s = p("layout-shift", o);
                        s && (e = h(n, t, _, r.reportAllChanges), g(function() {
                            o(s.takeRecords()), e(!0)
                        }), l(function() {
                            i = 0, e = h(n, t = m("CLS", 0), _, r.reportAllChanges), v(function() {
                                return e()
                            })
                        }), setTimeout(e, 0))
                    }))
                },
                F = function(e, t) {
                    M(function(t) {
                        e(function(e) {
                            var t = {
                                timeToFirstByte: 0,
                                firstByteToFCP: e.value,
                                loadState: o(d())
                            };
                            if (e.entries.length) {
                                var n = a(),
                                    r = e.entries[e.entries.length - 1];
                                if (n) {
                                    var i = n.activationStart || 0,
                                        s = Math.max(0, n.responseStart - i);
                                    t = {
                                        timeToFirstByte: s,
                                        firstByteToFCP: e.value - s,
                                        loadState: o(e.entries[0].startTime),
                                        navigationEntry: n,
                                        fcpEntry: r
                                    }
                                }
                            }
                            return Object.assign(e, {
                                attribution: t
                            })
                        }(t))
                    }, t)
                },
                N = 0,
                D = 1 / 0,
                R = 0,
                k = function(e) {
                    e.forEach(function(e) {
                        e.interactionId && (D = Math.min(D, e.interactionId), N = (R = Math.max(R, e.interactionId)) ? (R - D) / 7 + 1 : 0)
                    })
                },
                x = function() {
                    return r ? N : performance.interactionCount || 0
                },
                O = function() {
                    "interactionCount" in performance || r || (r = p("event", k, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                },
                P = [],
                B = new Map,
                j = 0,
                U = function() {
                    var e = Math.min(P.length - 1, Math.floor((x() - j) / 50));
                    return P[e]
                },
                V = [],
                H = function(e) {
                    if (V.forEach(function(t) {
                            return t(e)
                        }), e.interactionId || "first-input" === e.entryType) {
                        var t = P[P.length - 1],
                            n = B.get(e.interactionId);
                        if (n || P.length < 10 || e.duration > t.latency) {
                            if (n) e.duration > n.latency ? (n.entries = [e], n.latency = e.duration) : e.duration === n.latency && e.startTime === n.entries[0].startTime && n.entries.push(e);
                            else {
                                var r = {
                                    id: e.interactionId,
                                    latency: e.duration,
                                    entries: [e]
                                };
                                B.set(r.id, r), P.push(r)
                            }
                            P.sort(function(e, t) {
                                return t.latency - e.latency
                            }), P.length > 10 && P.splice(10).forEach(function(e) {
                                return B.delete(e.id)
                            })
                        }
                    }
                },
                z = function(e) {
                    var t = self.requestIdleCallback || self.setTimeout,
                        n = -1;
                    return e = T(e), "hidden" === document.visibilityState ? e() : (n = t(e), g(e)), n
                },
                q = [200, 500],
                G = function(e, t) {
                    "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (t = t || {}, L(function() {
                        O();
                        var n, r, i = m("INP"),
                            a = function(e) {
                                z(function() {
                                    e.forEach(H);
                                    var t = U();
                                    t && t.latency !== i.value && (i.value = t.latency, i.entries = t.entries, r())
                                })
                            },
                            o = p("event", a, {
                                durationThreshold: null != (n = t.durationThreshold) ? n : 40
                            });
                        r = h(e, i, q, t.reportAllChanges), o && (o.observe({
                            type: "first-input",
                            buffered: !0
                        }), g(function() {
                            a(o.takeRecords()), r(!0)
                        }), l(function() {
                            j = x(), P.length = 0, B.clear(), r = h(e, i = m("INP"), q, t.reportAllChanges)
                        }))
                    }))
                },
                Y = [],
                J = [],
                K = 0,
                W = new WeakMap,
                X = new Map,
                Q = -1,
                $ = function(e) {
                    Y = Y.concat(e), Z()
                },
                Z = function() {
                    Q < 0 && (Q = z(ee))
                },
                ee = function() {
                    X.size > 10 && X.forEach(function(e, t) {
                        B.has(t) || X.delete(t)
                    });
                    var e = P.map(function(e) {
                            return W.get(e.entries[0])
                        }),
                        t = J.length - 50;
                    J = J.filter(function(n, r) {
                        return r >= t || e.includes(n)
                    });
                    for (var n = new Set, r = 0; r < J.length; r++) {
                        var i = J[r];
                        ea(i.startTime, i.processingEnd).forEach(function(e) {
                            n.add(e)
                        })
                    }
                    var a = Y.length - 1 - 50;
                    Y = Y.filter(function(e, t) {
                        return e.startTime > K && t > a || n.has(e)
                    }), Q = -1
                };
            V.push(function(e) {
                e.interactionId && e.target && !X.has(e.interactionId) && X.set(e.interactionId, e.target)
            }, function(e) {
                var t, n = e.startTime + e.duration;
                K = Math.max(K, e.processingEnd);
                for (var r = J.length - 1; r >= 0; r--) {
                    var i = J[r];
                    if (8 >= Math.abs(n - i.renderTime)) {
                        (t = i).startTime = Math.min(e.startTime, t.startTime), t.processingStart = Math.min(e.processingStart, t.processingStart), t.processingEnd = Math.max(e.processingEnd, t.processingEnd), t.entries.push(e);
                        break
                    }
                }
                t || (t = {
                    startTime: e.startTime,
                    processingStart: e.processingStart,
                    processingEnd: e.processingEnd,
                    renderTime: n,
                    entries: [e]
                }, J.push(t)), (e.interactionId || "first-input" === e.entryType) && W.set(e, t), Z()
            });
            var et, en, er, ei, ea = function(e, t) {
                    for (var n, r = [], i = 0; n = Y[i]; i++)
                        if (!(n.startTime + n.duration < e)) {
                            if (n.startTime > t) break;
                            r.push(n)
                        }
                    return r
                },
                eo = function(e, t) {
                    i || (i = p("long-animation-frame", $)), G(function(t) {
                        var n, r, i, a, s, u, d, l, f, m;
                        e((n = t.entries[0], r = W.get(n), i = n.processingStart, a = r.processingEnd, s = r.entries.sort(function(e, t) {
                            return e.processingStart - t.processingStart
                        }), u = ea(n.startTime, a), l = (d = t.entries.find(function(e) {
                            return e.target
                        })) && d.target || X.get(n.interactionId), f = [n.startTime + n.duration, a].concat(u.map(function(e) {
                            return e.startTime + e.duration
                        })), m = Math.max.apply(Math, f), Object.assign(t, {
                            attribution: {
                                interactionTarget: c(l),
                                interactionTargetElement: l,
                                interactionType: n.name.startsWith("key") ? "keyboard" : "pointer",
                                interactionTime: n.startTime,
                                nextPaintTime: m,
                                processedEventEntries: s,
                                longAnimationFrameEntries: u,
                                inputDelay: i - n.startTime,
                                processingDuration: a - i,
                                presentationDelay: Math.max(m - a, 0),
                                loadState: o(n.startTime)
                            }
                        })))
                    }, t)
                },
                es = [2500, 4e3],
                ec = {},
                eu = function(e, t) {
                    var n, r;
                    n = function(t) {
                        e(function(e) {
                            var t = {
                                timeToFirstByte: 0,
                                resourceLoadDelay: 0,
                                resourceLoadDuration: 0,
                                elementRenderDelay: e.value
                            };
                            if (e.entries.length) {
                                var n = a();
                                if (n) {
                                    var r = n.activationStart || 0,
                                        i = e.entries[e.entries.length - 1],
                                        o = i.url && performance.getEntriesByType("resource").filter(function(e) {
                                            return e.name === i.url
                                        })[0],
                                        s = Math.max(0, n.responseStart - r),
                                        u = Math.max(s, o ? (o.requestStart || o.startTime) - r : 0),
                                        d = Math.max(u, o ? o.responseEnd - r : 0),
                                        l = Math.max(d, i.startTime - r);
                                    t = {
                                        element: c(i.element),
                                        timeToFirstByte: s,
                                        resourceLoadDelay: u - s,
                                        resourceLoadDuration: d - u,
                                        elementRenderDelay: l - d,
                                        navigationEntry: n,
                                        lcpEntry: i
                                    }, i.url && (t.url = i.url), o && (t.lcpResourceEntry = o)
                                }
                            }
                            return Object.assign(e, {
                                attribution: t
                            })
                        }(t))
                    }, r = (r = t) || {}, L(function() {
                        var e, t = I(),
                            i = m("LCP"),
                            a = function(n) {
                                r.reportAllChanges || (n = n.slice(-1)), n.forEach(function(n) {
                                    n.startTime < t.firstHiddenTime && (i.value = Math.max(n.startTime - f(), 0), i.entries = [n], e())
                                })
                            },
                            o = p("largest-contentful-paint", a);
                        if (o) {
                            e = h(n, i, es, r.reportAllChanges);
                            var s = T(function() {
                                ec[i.id] || (a(o.takeRecords()), o.disconnect(), ec[i.id] = !0, e(!0))
                            });
                            ["keydown", "click"].forEach(function(e) {
                                addEventListener(e, function() {
                                    return z(s)
                                }, {
                                    once: !0,
                                    capture: !0
                                })
                            }), g(s), l(function(t) {
                                e = h(n, i = m("LCP"), es, r.reportAllChanges), v(function() {
                                    i.value = performance.now() - t.timeStamp, ec[i.id] = !0, e(!0)
                                })
                            })
                        }
                    })
                },
                ed = [800, 1800],
                el = function e(t) {
                    document.prerendering ? L(function() {
                        return e(t)
                    }) : "complete" !== document.readyState ? addEventListener("load", function() {
                        return e(t)
                    }, !0) : setTimeout(t, 0)
                },
                ef = function(e, t) {
                    t = t || {};
                    var n = m("TTFB"),
                        r = h(e, n, ed, t.reportAllChanges);
                    el(function() {
                        var i = a();
                        i && (n.value = Math.max(i.responseStart - f(), 0), n.entries = [i], r(!0), l(function() {
                            (r = h(e, n = m("TTFB", 0), ed, t.reportAllChanges))(!0)
                        }))
                    })
                },
                em = function(e, t) {
                    ef(function(t) {
                        e(function(e) {
                            var t = {
                                waitingDuration: 0,
                                cacheDuration: 0,
                                dnsDuration: 0,
                                connectionDuration: 0,
                                requestDuration: 0
                            };
                            if (e.entries.length) {
                                var n = e.entries[0],
                                    r = n.activationStart || 0,
                                    i = Math.max((n.workerStart || n.fetchStart) - r, 0),
                                    a = Math.max(n.domainLookupStart - r, 0),
                                    o = Math.max(n.connectStart - r, 0),
                                    s = Math.max(n.connectEnd - r, 0);
                                t = {
                                    waitingDuration: i,
                                    cacheDuration: a - i,
                                    dnsDuration: o - a,
                                    connectionDuration: s - o,
                                    requestDuration: e.value - s,
                                    navigationEntry: n
                                }
                            }
                            return Object.assign(e, {
                                attribution: t
                            })
                        }(t))
                    }, t)
                },
                ep = {
                    passive: !0,
                    capture: !0
                },
                eh = new Date,
                ev = function(e, t) {
                    et || (et = t, en = e, er = new Date, ey(removeEventListener), eg())
                },
                eg = function() {
                    if (en >= 0 && en < er - eh) {
                        var e = {
                            entryType: "first-input",
                            name: et.type,
                            target: et.target,
                            cancelable: et.cancelable,
                            startTime: et.timeStamp,
                            processingStart: et.timeStamp + en
                        };
                        ei.forEach(function(t) {
                            t(e)
                        }), ei = []
                    }
                },
                eT = function(e) {
                    if (e.cancelable) {
                        var t, n, r, i = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                        "pointerdown" == e.type ? (t = function() {
                            ev(i, e), r()
                        }, n = function() {
                            r()
                        }, r = function() {
                            removeEventListener("pointerup", t, ep), removeEventListener("pointercancel", n, ep)
                        }, addEventListener("pointerup", t, ep), addEventListener("pointercancel", n, ep)) : ev(i, e)
                    }
                },
                ey = function(e) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t) {
                        return e(t, eT, ep)
                    })
                }
        },
        23073: (e, t, n) => {
            n.d(t, {
                J: () => a
            });
            var r = n(8068),
                i = n(5863);
            let a = new(n(4547)).x(i.w.FIRST_PAINT);
            if (r.RI) {
                let e;
                try {
                    PerformanceObserver.supportedEntryTypes.includes("paint") && !r.mw && (e = new PerformanceObserver(t => {
                        Promise.resolve().then(() => {
                            t.getEntries().forEach(t => {
                                "first-paint" !== t.name || a.isValid || (e.disconnect(), a.update({
                                    value: t.startTime
                                }))
                            })
                        })
                    })).observe({
                        type: "paint",
                        buffered: !0
                    })
                } catch (e) {}
            }
        },
        53351: (e, t, n) => {
            n.d(t, {
                R: () => i
            });
            var r = n(8068);
            let i = (() => {
                try {
                    if ("u" > typeof navigator && !0 === navigator.webdriver || r.RI && (document.__webdriver_evaluate || document.__selenium_unwrapped || document.__driver_evaluate || document.__webdriver_script_function || window.callPhantom || window._phantom || window.__nightmare)) return !0;
                    return !1
                } catch (e) {
                    return !1
                }
            })()
        },
        61410: (e, t, n) => {
            n.d(t, {
                t: () => r
            });

            function r(e, t, n) {
                let r = "unknown";
                if (e && e instanceof XMLHttpRequest) {
                    let t = n.context(e).params;
                    if (!t || !t.status || !t.method || !t.host || !t.pathname) return "xhrOriginMissing";
                    r = t.status + " " + t.method + ": " + t.host + t.pathname
                } else if (e && "string" == typeof e.tagName && (r = e.tagName.toLowerCase(), e.id && (r += "#" + e.id), e.className))
                    for (let t = 0; t < e.classList.length; t++) r += "." + e.classList[t];
                return "unknown" === r && ("string" == typeof t ? r = t : t === document ? r = "document" : t === window ? r = "window" : t instanceof FileReader && (r = "FileReader")), r
            }
        },
        69995: (e, t, n) => {
            n.r(t), n.d(t, {
                Aggregate: () => w
            });
            var r = n(79359),
                i = n(80326),
                a = n(48532),
                o = n(29082),
                s = n(56804),
                c = n(83307),
                u = n(17587),
                d = n(5863),
                l = n(4547),
                f = n(8068);
            let m = new l.x(d.w.CUMULATIVE_LAYOUT_SHIFT, e => e);
            f.RI && (0, u.IN)(({
                value: e,
                attribution: t,
                id: n
            }) => {
                let r = {
                    metricId: n,
                    largestShiftTarget: t.largestShiftTarget,
                    largestShiftTime: t.largestShiftTime,
                    largestShiftValue: t.largestShiftValue,
                    loadState: t.loadState
                };
                m.update({
                    value: e,
                    attrs: r
                })
            }, {
                reportAllChanges: !0
            });
            var p = n(16266),
                h = n(23073);
            let v = new l.x(d.w.INTERACTION_TO_NEXT_PAINT);
            f.RI && (0, u.rH)(({
                value: e,
                attribution: t,
                id: n
            }) => {
                let r = {
                    metricId: n,
                    eventTarget: t.interactionTarget,
                    eventTime: t.interactionTime,
                    interactionTarget: t.interactionTarget,
                    interactionTime: t.interactionTime,
                    interactionType: t.interactionType,
                    inputDelay: t.inputDelay,
                    nextPaintTime: t.nextPaintTime,
                    processingDuration: t.processingDuration,
                    presentationDelay: t.presentationDelay,
                    loadState: t.loadState
                };
                v.update({
                    value: e,
                    attrs: r
                })
            });
            var g = n(56797);
            let T = new l.x(d.w.LARGEST_CONTENTFUL_PAINT);
            f.RI && (0, u.fK)(({
                value: e,
                attribution: t
            }) => {
                if (f.mw || T.isValid) return;
                let n = {
                        timeToFirstByte: t.timeToFirstByte,
                        resourceLoadDelay: t.resourceLoadDelay,
                        resourceLoadDuration: t.resourceLoadDuration,
                        resourceLoadTime: t.resourceLoadDuration,
                        elementRenderDelay: t.elementRenderDelay
                    },
                    r = t.lcpEntry;
                r && (n.size = r.size, n.eid = r.id, r.element ? .tagName && (n.elTag = r.element.tagName)), t.element && (n.element = t.element), t.navigationEntry && (n.pageUrl = (0, g.L)(t.navigationEntry.name)), t.url && (n.elUrl = (0, g.L)(t.url)), T.update({
                    value: e,
                    attrs: n
                })
            });
            var y = n(9219),
                E = n(61410),
                b = n(10844),
                S = n(53351);
            class w extends c.r {
                static featureName = o.T;#
                t = ({
                    name: e,
                    value: t,
                    attrs: n
                }) => {
                    this.addTiming(e, t, n)
                };
                constructor(e) {
                    super(e, o.T), this.curSessEndRecorded = !1, this.firstIxnRecorded = !1, super.customAttributesAreSeparate = !0, (0, i.i)("docHidden", e => this.endCurrentSession(e), this.featureName, this.ee), (0, i.i)("winPagehide", e => this.addTiming("unload", e, null), this.featureName, this.ee), this.waitForFlags([]).then(() => {
                        h.J.subscribe(this.#t), p.j.subscribe(this.#t), T.subscribe(this.#t), v.subscribe(this.#t), b.Y.subscribe(({
                            name: e,
                            value: t
                        }) => {
                            this.addTiming(e, Math.round(t))
                        }), (0, y.u)(() => {
                            let {
                                name: e,
                                value: t,
                                attrs: n
                            } = m.current;
                            void 0 !== t && this.addTiming(e, 1e3 * t, n)
                        }, !0, !0), this.drain()
                    })
                }
                endCurrentSession(e) {
                    this.curSessEndRecorded || (this.addTiming("pageHide", e, null), this.curSessEndRecorded = !0)
                }
                addTiming(e, t, n) {
                    var r, i;
                    r = n = n || {}, (i = navigator.connection || navigator.mozConnection || navigator.webkitConnection) && (i.type && (r["net-type"] = i.type), i.effectiveType && (r["net-etype"] = i.effectiveType), i.rtt && (r["net-rtt"] = i.rtt), i.downlink && (r["net-dlink"] = i.downlink)), e !== d.w.CUMULATIVE_LAYOUT_SHIFT && m.current.value >= 0 && (n.cls = m.current.value);
                    let o = {
                        name: e,
                        value: t,
                        attrs: n
                    };
                    return this.events.add(o), (0, a.p)("pvtAdded", [e, t, n], void 0, s.K7.sessionTrace, this.ee), this.checkForFirstInteraction(), o
                }
                checkForFirstInteraction() {
                    if (this.firstIxnRecorded || f.mw || !performance) return;
                    let e = performance.getEntriesByType("first-input")[0];
                    e && (this.firstIxnRecorded = !0, this.addTiming("fi", e.startTime, {
                        type: e.name,
                        eventTarget: (0, E.t)(e.target),
                        loadState: document.readyState
                    }))
                }
                appendGlobalCustomAttributes(e) {
                    var t = e.attrs || {},
                        n = ["size", "eid", "cls", "type", "fid", "elTag", "elUrl", "net-type", "net-etype", "net-rtt", "net-dlink"];
                    Object.entries(this.agentRef.info.jsAttributes || {}).forEach(([e, r]) => {
                        0 > n.indexOf(e) && (t[e] = r)
                    }), t.webdriverDetected = S.R
                }
                preHarvestChecks() {
                    return this.checkForFirstInteraction(), super.preHarvestChecks()
                }
                serializer(e) {
                    if (!e ? .length) return "";
                    for (var t = (0, r.uJ)(this.agentRef.runtime.obfuscator), n = "bel.6;", i = 0; i < e.length; i++) {
                        var a = e[i];
                        n += "e," + t(a.name) + "," + (0, r.me)(a.value, r.sH, !1) + ",", this.appendGlobalCustomAttributes(a);
                        var o = (0, r.AQ)(a.attrs, t);
                        o && o.length > 0 && (n += (0, r.sH)(o.length) + ";" + o.join(";")), i + 1 < e.length && (n += ";")
                    }
                    return n
                }
            }
        },
        79359: (e, t, n) => {
            n.d(t, {
                AQ: () => c,
                me: () => a,
                sH: () => o,
                uJ: () => s
            });
            var r = n(29452),
                i = Object.prototype.hasOwnProperty;

            function a(e, t, n) {
                return e || 0 === e || "" === e ? t(e) + (n ? "," : "") : "!"
            }

            function o(e, t) {
                return t ? Math.floor(e).toString(36) : void 0 === e || 0 === e ? "" : Math.floor(e).toString(36)
            }

            function s(e) {
                let t = 0,
                    n = Object.prototype.hasOwnProperty.call(Object, "create") ? Object.create(null) : {};
                return function(r) {
                    return void 0 === r || "" === r ? "" : (r = e.obfuscateString(String(r)), i.call(n, r)) ? o(n[r], !0) : (n[r] = t++, "'" + r.replace(u, "\\$1"))
                }
            }

            function c(e, t) {
                var n = [];
                return Object.entries(e || {}).forEach(([e, i]) => {
                    if (!(n.length >= 64)) {
                        var a, o = 5;
                        switch (e = t(e), typeof i) {
                            case "object":
                                i ? a = t((0, r.A)(i)) : o = 9;
                                break;
                            case "number":
                                o = 6, a = i % 1 ? i : i + ".";
                                break;
                            case "boolean":
                                o = i ? 7 : 8;
                                break;
                            case "undefined":
                                o = 9;
                                break;
                            default:
                                a = t(i)
                        }
                        n.push([o, e + (a ? "," + a : "")])
                    }
                }), n
            }
            var u = /([,\\;])/g
        }
    }
]);
//#
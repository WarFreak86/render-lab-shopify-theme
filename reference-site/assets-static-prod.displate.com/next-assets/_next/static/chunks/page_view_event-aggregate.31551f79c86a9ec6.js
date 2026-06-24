"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5677], {
        46578: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => N
            });
            var r = i(8068),
                s = i(50655),
                a = i(29452),
                n = i(54821),
                o = i(50604),
                m = i(56804),
                c = i(50772),
                h = i(6677),
                u = i(87516),
                f = i(83307),
                d = i(16266),
                p = i(23073),
                l = i(5863),
                g = i(4547),
                T = i(17587);
            let y = new g.x(l.w.TIME_TO_FIRST_BYTE);
            if (r.RI && (0, r.eN)() && !r.OF && window === window.parent)(0, T.Ck)(({
                value: e,
                attribution: t
            }) => {
                y.isValid || y.update({
                    value: e,
                    attrs: {
                        navigationEntry: t.navigationEntry
                    }
                })
            });
            else if (!y.isValid) {
                let e = {};
                for (let t in r.gm ? .performance ? .timing || {}) e[t] = Math.max(r.gm ? .performance ? .timing[t] - r.WN, 0);
                y.update({
                    value: e.responseStart,
                    attrs: {
                        navigationEntry: e
                    }
                })
            }
            var v = i(40775),
                b = i(92644);
            class R {#
                e;#
                t;#
                i;#
                r = !1;
                constructor(e) {
                    this.#e = e, this.processStoredDiff(), (0, b.i)(performance.now, Date.now)
                }
                get ready() {
                    return this.#r
                }
                get correctedOriginTime() {
                    return this.#t
                }
                get localTimeDiff() {
                    return this.#i
                }
                processRumRequest(e, t, i, s) {
                    if (this.processStoredDiff(), !this.#r) {
                        if (!s) throw Error("nrServerTime not found");
                        if (this.#t = Math.floor(s - (t + (i - t) / 2)), this.#i = r.WN - this.#t, isNaN(this.#t)) throw Error("Failed to correct browser time to server time");
                        this.#e ? .write({
                            serverTimeDiff: this.#i
                        }), this.#r = !0
                    }
                }
                convertRelativeTimestamp(e) {
                    return r.WN + e
                }
                convertAbsoluteTimestamp(e) {
                    return e - r.WN
                }
                correctAbsoluteTimestamp(e) {
                    return e - this.#i
                }
                correctRelativeTimestamp(e) {
                    return this.correctAbsoluteTimestamp(this.convertRelativeTimestamp(e))
                }
                processStoredDiff() {
                    if (this.#r) return;
                    let e = this.#e ? .read() ? .serverTimeDiff;
                    "number" != typeof e || isNaN(e) || (this.#i = e, this.#t = r.WN - this.#i, this.#r = !0)
                }
            }
            var w = i(85341),
                E = i(97912),
                B = i(738),
                D = i(53351);
            class N extends f.r {
                static featureName = o.T;
                constructor(e) {
                    if (super(e, o.T), this.sentRum = !1, this.timeToFirstByte = 0, this.firstByteToWindowLoad = 0, this.firstByteToDomContent = 0, this.retries = 0, !(0, n.f)(e.info)) return this.ee.abort(), (0, u.R)(43);
                    e.runtime.timeKeeper = new R(e.runtime.session), r.RI ? (y.subscribe(({
                        value: e,
                        attrs: t
                    }) => {
                        let i = t.navigationEntry;
                        this.timeToFirstByte = Math.max(e, this.timeToFirstByte), this.firstByteToWindowLoad = Math.max(Math.round(i.loadEventEnd - this.timeToFirstByte), this.firstByteToWindowLoad), this.firstByteToDomContent = Math.max(Math.round(i.domContentLoadedEventEnd - this.timeToFirstByte), this.firstByteToDomContent)
                    }), setTimeout(this.sendRum.bind(this), 0)) : this.sendRum()
                }
                sendRum(e = this.agentRef.info.jsAttributes) {
                    let t = this.agentRef.info,
                        i = {};
                    t.queueTime && (i.qt = t.queueTime), t.applicationTime && (i.ap = t.applicationTime), i.be = this.timeToFirstByte, i.fe = this.firstByteToWindowLoad, i.dc = this.firstByteToDomContent;
                    let n = {
                        tt: t.ttGuid,
                        us: t.user,
                        ac: t.account,
                        pr: t.product,
                        af: (function(e) {
                            let t = [],
                                i = (0, c.Zm)();
                            try {
                                Object.keys(i.initializedAgents[e].features).forEach(e => {
                                    switch (e) {
                                        case m.K7.ajax:
                                            t.push("xhr");
                                            break;
                                        case m.K7.jserrors:
                                            t.push("err");
                                            break;
                                        case m.K7.genericEvents:
                                            t.push("ins");
                                            break;
                                        case m.K7.sessionTrace:
                                            t.push("stn");
                                            break;
                                        case m.K7.softNav:
                                            t.push("spa")
                                    }
                                })
                            } catch (e) {}
                            return t
                        })(this.agentIdentifier).join(","),
                        ...i,
                        xx: t.extra,
                        ua: t.userAttributes,
                        at: t.atts
                    };
                    this.agentRef.runtime.session && (n.fsh = Number(this.agentRef.runtime.session.isNew));
                    let o = (0, w.G)({
                        ja: { ...e,
                            webdriverDetected: D.R
                        }
                    }, this.obfuscator.obfuscateString.bind(this.obfuscator), "string");
                    if (r.gm.performance) {
                        if ((0, r.eN)()) {
                            let e = r.gm ? .performance ? .getEntriesByType("navigation") ? .[0],
                                t = {
                                    timing: (0, s.eM)(r.WN, e, {}),
                                    navigation: (0, s.si)(e, {})
                                };
                            n.perf = (0, a.A)(t)
                        } else if ("u" > typeof PerformanceTiming) {
                            let e = {
                                timing: (0, s.eM)(r.WN, r.gm.performance.timing, {}, !0),
                                navigation: (0, s.si)(r.gm.performance.navigation, {})
                            };
                            n.perf = (0, a.A)(e)
                        }
                    }
                    n.fp = p.J.current.value, n.fcp = d.j.current.value, this.queryStringsBuilder = () => {
                        this.rumStartTime = (0, v.t)();
                        let e = this.agentRef.runtime.timeKeeper;
                        return e ? .ready && (n.timestamp = Math.floor(e.correctRelativeTimestamp(this.rumStartTime))), n
                    }, this.events.add(o), this.agentRef.runtime.harvester.triggerHarvestFor(this, {
                        sendEmptyBody: !0
                    }).ranSend && (this.sentRum = !0)
                }
                serializer(e) {
                    return e[0]
                }
                postHarvestCleanup({
                    sent: e,
                    status: t,
                    responseText: i,
                    xhr: r,
                    retry: s
                }) {
                    let a, n, o = (0, v.t)();
                    try {
                        ({
                            app: a,
                            ...n
                        } = JSON.parse(i))
                    } catch (e) {
                        (0, u.R)(53, e)
                    }
                    if (super.postHarvestCleanup({
                            sent: e,
                            retry: s
                        }), this.isRetrying && this.retries++ < 1) return void setTimeout(() => this.agentRef.runtime.harvester.triggerHarvestFor(this, {
                        sendEmptyBody: !0
                    }), 5e3);
                    if (t >= 400 || 0 === t) {
                        (0, u.R)(18, t), this.blocked = !0;
                        let e = new TextEncoder,
                            i = Object.values(newrelic.ee.backlog).reduce((t, i) => i ? t + e.encode(i).byteLength : t, 0),
                            r = "BCS/Error/",
                            s = {
                                sm: [{
                                    params: {
                                        name: r + t
                                    },
                                    stats: {
                                        c: 1
                                    }
                                }, {
                                    params: {
                                        name: r + "Dropped/Bytes"
                                    },
                                    stats: {
                                        c: 1,
                                        t: i
                                    }
                                }, {
                                    params: {
                                        name: r + "Duration/Ms"
                                    },
                                    stats: {
                                        c: 1,
                                        t: o - this.rumStartTime
                                    }
                                }]
                            };
                        (0, E.t)(this.agentRef, {
                            endpoint: m.$J[m.K7.metrics],
                            payload: {
                                body: s
                            },
                            submitMethod: (0, B.mj)(),
                            featureName: m.K7.metrics
                        }), this.ee.abort();
                        return
                    }
                    try {
                        let e = this.agentRef.runtime.timeKeeper.ready;
                        if (this.agentRef.runtime.timeKeeper.processRumRequest(r, this.rumStartTime, o, a.nrServerTime), !this.agentRef.runtime.timeKeeper.ready) throw Error("TimeKeeper not ready");
                        let t = this.agentRef.runtime.timeKeeper.correctedOriginTime - a.nrServerTime;
                        e && t > 0 && this.reportSupportabilityMetric("Generic/TimeKeeper/InvalidTimestamp/Seen", t)
                    } catch (e) {
                        this.ee.abort(), this.blocked = !0, (0, u.R)(17, e);
                        return
                    }
                    Object.keys(this.agentRef.runtime.appMetadata).length || (this.agentRef.runtime.appMetadata = a), this.drain(), this.agentRef.runtime.harvester.startTimer(), (0, h.t)(n, this.agentRef)
                }
            }
        },
        85341: (e, t, i) => {
            i.d(t, {
                G: () => function e(t, i, r = "string", s = []) {
                    return t && "object" == typeof t && Object.keys(t).forEach(a => {
                        "object" == typeof t[a] ? e(t[a], i, r, s) : typeof t[a] !== r || s.includes(a) || (t[a] = i(t[a]))
                    }), t
                }
            })
        }
    }
]);
//#
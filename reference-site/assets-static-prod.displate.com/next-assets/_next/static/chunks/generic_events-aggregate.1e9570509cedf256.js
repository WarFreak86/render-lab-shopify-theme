"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1368], {
        72169: (e, t, r) => {
            r.d(t, {
                M: () => i
            });
            class i {
                constructor(e, t) {
                    if (!e.onEnd) throw Error("onEnd handler is required");
                    if (!t) throw Error("ms duration is required");
                    this.onEnd = e.onEnd, this.initialMs = t, this.startTimestamp = Date.now(), this.timer = this.create(this.onEnd, t)
                }
                create(e, t) {
                    return this.timer && this.clear(), setTimeout(() => e ? e() : this.onEnd(), t || this.initialMs)
                }
                clear() {
                    clearTimeout(this.timer), this.timer = null
                }
                end() {
                    this.clear(), this.onEnd()
                }
                isValid() {
                    return this.initialMs - (Date.now() - this.startTimestamp) > 0
                }
            }
        },
        73167: (e, t, r) => {
            r.r(t), r.d(t, {
                Aggregate: () => C
            });
            var i = r(29452),
                s = r(56797),
                a = r(57981),
                n = r(8068),
                o = r(83307),
                c = r(87516),
                l = r(40775),
                h = r(80326),
                u = r(85341);
            class p {
                constructor(e, t) {
                    this.event = e, this.count = 1, this.originMs = Math.floor(e.timeStamp), this.relativeMs = [0], this.selectorPath = t.path, this.rageClick = void 0, this.nearestTargetFields = t.nearestFields, this.currentUrl = (0, s.L)("" + location), this.deadClick = !1, this.errorClick = !1
                }
                aggregate(e) {
                    this.count++, this.relativeMs.push(Math.floor(e.timeStamp - this.originMs)), this.isRageClick() && (this.rageClick = !0)
                }
                isRageClick() {
                    let e = this.relativeMs.length;
                    return "click" === this.event.type && e >= a.nf && this.relativeMs[e - 1] - this.relativeMs[e - a.nf] < a.mq
                }
            }
            var d = r(72169),
                g = r(50772);
            class m {#
                e = void 0;#
                t = "";#
                r = void 0;#
                i = void 0;#
                s = void 0;
                constructor() {
                    (0, g.dV)().o.MO && (this.#i = new MutationObserver(this.isLiveClick.bind(this)))
                }
                get aggregationEvent() {
                    let e = this.#e;
                    return this.#t = "", this.#e = void 0, e
                }
                process(e, t) {
                    var r, i;
                    let s;
                    if (!e) return;
                    let n = ((e, t = []) => {
                            let r = {
                                path: void 0,
                                nearestFields: {},
                                hasButton: !1,
                                hasLink: !1
                            };
                            if (!e) return r;
                            if (e === window) return r.path = "window", r;
                            if (e === document) return r.path = "document", r;
                            let i = "",
                                s = function(e) {
                                    try {
                                        let t = 1,
                                            {
                                                tagName: r
                                            } = e;
                                        for (; e.previousElementSibling;) e.previousElementSibling.tagName === r && t++, e = e.previousElementSibling;
                                        return t
                                    } catch (e) {}
                                }(e);
                            try {
                                for (; e ? .tagName;) {
                                    let s = e.tagName.toLowerCase();
                                    r.hasLink || = "a" === s, r.hasButton || = "button" === s || "input" === s && "button" === e.type.toLowerCase(), t.forEach(t => {
                                        var i;
                                        r.nearestFields[i = t, "tagName" === i && (i = "tag"), "className" === i && (i = "class"), "nearest".concat(i.charAt(0).toUpperCase() + i.slice(1))] || = e[t] ? .baseVal || e[t]
                                    }), i = function(e, t) {
                                        let {
                                            id: r,
                                            localName: i
                                        } = e;
                                        return [i, r ? "#".concat(r) : "", t ? ">".concat(t) : ""].join("")
                                    }(e, i), e = e.parentNode
                                }
                            } catch (e) {}
                            return r.path = i ? s ? "".concat(i, ":nth-of-type(").concat(s, ")") : i : void 0, r
                        })(a.qN.includes(e.type) ? window : e.target, t),
                        o = (r = e, i = n.path, s = r.type, "scrollend" !== r.type && (s += "-" + i), s);
                    if (o && o === this.#t) this.#e.aggregate(e);
                    else {
                        let t = this.#e;
                        return this.#a(), this.#n(), this.#t = o, this.#e = new p(e, n), "click" === e.type && (n.hasButton || n.hasLink) && (this.#o(this.#e), this.#c()), t
                    }
                }
                markAsErrorClick() {
                    this.#e && this.#s && (this.#e.errorClick = !0, this.#n())
                }#
                c() {
                    this.#s = new d.M({
                        onEnd: () => {
                            this.#n()
                        }
                    }, a.Xh)
                }#
                n() {
                    this.#s ? .clear(), this.#s = void 0
                }#
                o(e) {
                    !this.#l() && this.#i && (this.#i.observe(document, {
                        attributes: !0,
                        characterData: !0,
                        childList: !0,
                        subtree: !0
                    }), this.#r = new d.M({
                        onEnd: () => {
                            e.deadClick = !0, this.#a()
                        }
                    }, a.Xh))
                }#
                a() {
                    this.#i ? .disconnect(), this.#r ? .clear(), this.#r = void 0
                }#
                l() {
                    return void 0 !== this.#r
                }
                isLiveClick() {
                    this.#l() && this.#a()
                }
            }
            var f = r(90203),
                v = r(94594),
                k = r(75275);
            class C extends o.r {
                static featureName = a.TZ;#
                h;
                constructor(e) {
                    super(e, a.TZ), this.referrerUrl = n.RI && document.referrer ? (0, s.L)(document.referrer) : void 0, this.waitForFlags(["ins"]).then(([t]) => {
                        if (!t) {
                            this.blocked = !0, this.deregisterDrain();
                            return
                        }
                        this.#u(), (0, h.i)("api-recordCustomEvent", (e, t, r, i) => {
                            if (a.kd.includes(t)) return (0, c.R)(46);
                            this.addEvent({
                                eventType: t,
                                timestamp: this.#p(e),
                                ...r
                            }, i)
                        }, this.featureName, this.ee), e.init.page_action.enabled && (0, h.i)("api-addPageAction", (e, t, r, i) => {
                            this.addEvent({ ...r,
                                eventType: "PageAction",
                                timestamp: this.#p(e),
                                timeSinceLoad: e / 1e3,
                                actionName: t,
                                referrerUrl: this.referrerUrl,
                                ...n.RI && {
                                    browserWidth: window.document.documentElement ? .clientWidth,
                                    browserHeight: window.document.documentElement ? .clientHeight
                                }
                            }, i)
                        }, this.featureName, this.ee);
                        let r = () => {};
                        n.RI && e.init.user_actions.enabled && (this.#h = new m, this.harvestOpts.beforeUnload = () => r ? .(this.#h.aggregationEvent), r = e => {
                            try {
                                if (e ? .event) {
                                    let {
                                        target: t,
                                        timeStamp: r,
                                        type: i
                                    } = e.event, s = {
                                        eventType: "UserAction",
                                        timestamp: this.#p(r),
                                        action: i,
                                        actionCount: e.count,
                                        actionDuration: e.relativeMs[e.relativeMs.length - 1],
                                        actionMs: e.relativeMs,
                                        rageClick: e.rageClick,
                                        target: e.selectorPath,
                                        currentUrl: e.currentUrl,
                                        ...(0, f.v)(window) && {
                                            iframe: !0
                                        },
                                        ...this.agentRef.init.user_actions.elementAttributes.reduce((r, i) => {
                                            var s, a;
                                            return s = i, "window" !== e.selectorPath && "document" !== e.selectorPath && t instanceof HTMLElement && t ? .[s] && (r[a = i, "tagName" === a && (a = "tag"), "className" === a && (a = "class"), "target".concat(a.charAt(0).toUpperCase() + a.slice(1))] = String(t[i]).trim().slice(0, 128)), r
                                        }, {}),
                                        ...e.nearestTargetFields,
                                        ...e.deadClick && {
                                            deadClick: !0
                                        },
                                        ...e.errorClick && {
                                            errorClick: !0
                                        }
                                    };
                                    this.addEvent(s), this.#d(s)
                                }
                            } catch (e) {}
                        }, (0, h.i)("ua", e => {
                            r(this.#h.process(e, this.agentRef.init.user_actions.elementAttributes))
                        }, this.featureName, this.ee), (0, h.i)("navChange", () => {
                            this.#h.isLiveClick()
                        }, this.featureName, this.ee), (0, h.i)("uaXhr", () => {
                            this.#h.isLiveClick()
                        }, this.featureName, this.ee), (0, h.i)("uaErr", () => this.#h.markAsErrorClick(), this.featureName, this.ee));
                        let o = [...e.init.performance.capture_marks ? ["mark"] : [], ...e.init.performance.capture_measures ? ["measure"] : []];
                        if (o.length) try {
                            o.forEach(t => {
                                PerformanceObserver.supportedEntryTypes.includes(t) && new PerformanceObserver(r => {
                                    r.getEntries().forEach(r => {
                                        try {
                                            var i;
                                            this.reportSupportabilityMetric("Generic/Performance/" + t + "/Seen");
                                            let s = e.init.performance.capture_detail ? (i = r.detail, null == i ? {} : (0, v.a)(i) ? function e(t, r = "entryDetail") {
                                                let i = {};
                                                return null == t || Object.keys(t).forEach(s => {
                                                    let a = r + "." + s;
                                                    (0, v.a)(t[s]) ? Object.assign(i, e(t[s], a)): null !== t[s] && void 0 !== t[s] && (i[a] = t[s])
                                                }), i
                                            }(i) : {
                                                entryDetail: i
                                            }) : {};
                                            this.addEvent({ ...s,
                                                eventType: "BrowserPerformance",
                                                timestamp: this.#p(r.startTime),
                                                entryName: r.name,
                                                entryDuration: r.duration,
                                                entryType: t
                                            })
                                        } catch (e) {}
                                    })
                                }).observe({
                                    buffered: !0,
                                    type: t
                                })
                            })
                        } catch (e) {}
                        n.RI && e.init.performance.resources.enabled && (0, h.i)("browserPerformance.resource", t => {
                            try {
                                let {
                                    name: r,
                                    duration: i,
                                    ...a
                                } = t.toJSON(), o = !1;
                                try {
                                    let t = new URL(r).hostname,
                                        i = t.includes("newrelic.com") || t.includes("nr-data.net") || t.includes("nr-local.net");
                                    if (this.agentRef.init.performance.resources.ignore_newrelic && i || this.agentRef.init.performance.resources.asset_types.length && !this.agentRef.init.performance.resources.asset_types.includes(a.initiatorType)) return;
                                    (o = t === n.gm ? .location.hostname || e.init.performance.resources.first_party_domains.includes(t)) && this.reportSupportabilityMetric("Generic/Performance/FirstPartyResource/Seen"), i && this.reportSupportabilityMetric("Generic/Performance/NrResource/Seen")
                                } catch (e) {}
                                this.reportSupportabilityMetric("Generic/Performance/Resource/Seen");
                                let c = { ...a,
                                    eventType: "BrowserPerformance",
                                    timestamp: this.#p(a.startTime),
                                    entryName: (0, s.L)(r),
                                    entryDuration: i,
                                    firstParty: o
                                };
                                this.addEvent(c)
                            } catch (e) {
                                this.ee.emit("internal-error", [e, "GenericEvents-Resource"])
                            }
                        }, this.featureName, this.ee), (0, h.i)("api-measure", (e, t, r) => {
                            let {
                                start: i,
                                duration: s,
                                customAttributes: a
                            } = e, n = { ...a,
                                eventType: "BrowserPerformance",
                                timestamp: this.#p(i),
                                entryName: t,
                                entryDuration: s,
                                entryType: "measure"
                            };
                            this.addEvent(n, r)
                        }, this.featureName, this.ee), e.init.feature_flags.includes("websockets") && (0, h.i)("ws-complete", e => {
                            let t = { ...e,
                                eventType: "WebSocket",
                                timestamp: this.#p(e.timestamp),
                                openedAt: this.#p(e.openedAt),
                                closedAt: this.#p(e.closedAt)
                            };
                            this.reportSupportabilityMetric("WebSocket/Completed/Seen"), this.reportSupportabilityMetric("WebSocket/Completed/Bytes", (0, i.A)(t).length), this.addEvent(t)
                        }, this.featureName, this.ee), this.drain()
                    })
                }
                addEvent(e = {}, t) {
                    if (!e || !Object.keys(e).length) return;
                    if (!e.eventType) return void(0, c.R)(44);
                    for (let t in e) {
                        let r = e[t];
                        e[t] = r && "object" == typeof r ? (0, i.A)(r) : r
                    }
                    let r = {
                            timestamp: this.#p((0, l.t)()),
                            pageUrl: (0, s.L)("" + n.m),
                            currentUrl: (0, s.L)("" + location),
                            ...(0, k.U)(t, this)
                        },
                        a = { ...this.agentRef.info.jsAttributes || {},
                            ...r,
                            ...e
                        };
                    this.events.add(a)
                }
                serializer(e) {
                    return (0, u.G)({
                        ins: e
                    }, this.obfuscator.obfuscateString.bind(this.obfuscator), "string")
                }
                queryStringsBuilder() {
                    return {
                        ua: this.agentRef.info.userAttributes,
                        at: this.agentRef.info.atts
                    }
                }#
                p(e) {
                    return Math.floor(this.agentRef.runtime.timeKeeper.correctRelativeTimestamp(e))
                }#
                u() {
                    let e = "Config/Performance/";
                    this.agentRef.init.performance.capture_marks && this.reportSupportabilityMetric(e + "CaptureMarks/Enabled"), this.agentRef.init.performance.capture_measures && this.reportSupportabilityMetric(e + "CaptureMeasures/Enabled"), this.agentRef.init.performance.resources.enabled && this.reportSupportabilityMetric(e + "Resources/Enabled"), this.agentRef.init.performance.resources.asset_types ? .length !== 0 && this.reportSupportabilityMetric(e + "Resources/AssetTypes/Changed"), this.agentRef.init.performance.resources.first_party_domains ? .length !== 0 && this.reportSupportabilityMetric(e + "Resources/FirstPartyDomains/Changed"), !1 === this.agentRef.init.performance.resources.ignore_newrelic && this.reportSupportabilityMetric(e + "Resources/IgnoreNewrelic/Changed")
                }#
                d(e) {
                    e.rageClick && this.reportSupportabilityMetric("UserAction/RageClick/Seen"), e.deadClick && this.reportSupportabilityMetric("UserAction/DeadClick/Seen"), e.errorClick && this.reportSupportabilityMetric("UserAction/ErrorClick/Seen")
                }
            }
        },
        85341: (e, t, r) => {
            r.d(t, {
                G: () => function e(t, r, i = "string", s = []) {
                    return t && "object" == typeof t && Object.keys(t).forEach(a => {
                        "object" == typeof t[a] ? e(t[a], r, i, s) : typeof t[a] !== i || s.includes(a) || (t[a] = r(t[a]))
                    }), t
                }
            })
        },
        90203: (e, t, r) => {
            r.d(t, {
                v: () => i
            });

            function i(e) {
                return !!e && e.self !== e.top
            }
        },
        94594: (e, t, r) => {
            r.d(t, {
                a: () => i
            });

            function i(e) {
                return e ? .constructor === ({}).constructor
            }
        }
    }
]);
//#
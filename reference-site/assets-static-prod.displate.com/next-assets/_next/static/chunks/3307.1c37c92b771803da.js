"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3307], {
        738: (e, t, r) => {
            r.d(t, {
                Jf: () => i,
                mj: () => a,
                nF: () => n
            });
            var s = r(8068);

            function a({
                isFinalHarvest: e = !1
            } = {}) {
                return e && s.RI ? o : "u" > typeof XMLHttpRequest ? n : i
            }

            function i({
                url: e,
                body: t = null,
                method: r = "POST",
                headers: s = [{
                    key: "content-type",
                    value: "text/plain"
                }]
            }) {
                let a = {};
                for (let e of s) a[e.key] = e.value;
                return fetch(e, {
                    headers: a,
                    method: r,
                    body: t,
                    credentials: "include"
                })
            }

            function n({
                url: e,
                body: t = null,
                sync: r,
                method: s = "POST",
                headers: a = [{
                    key: "content-type",
                    value: "text/plain"
                }]
            }) {
                let i = new XMLHttpRequest;
                i.open(s, e, !r);
                try {
                    "withCredentials" in i && (i.withCredentials = !0)
                } catch (e) {}
                return a.forEach(e => {
                    i.setRequestHeader(e.key, e.value)
                }), i.send(t), i
            }

            function o({
                url: e,
                body: t
            }) {
                try {
                    return window.navigator.sendBeacon.bind(window.navigator)(e, t)
                } catch (e) {
                    return !1
                }
            }
        },
        42200: (e, t, r) => {
            r.d(t, {
                p: () => a
            });
            var s = r(8068);

            function a() {
                return s.gm ? .location ? .protocol === "file:"
            }
        },
        42806: (e, t, r) => {
            r.d(t, {
                WL: () => u,
                uR: () => h
            });
            var s = r(29452),
                a = {
                    "%2C": ",",
                    "%3A": ":",
                    "%2F": "/",
                    "%40": "@",
                    "%24": "$",
                    "%3B": ";"
                },
                i = RegExp(Object.keys(a).join("|"), "g");

            function n(e) {
                return a[e]
            }

            function o(e) {
                return null == e ? "null" : encodeURIComponent(e).replace(i, n)
            }

            function u(e, t) {
                var r = 0,
                    a = "";
                return Object.entries(e || {}).forEach(([e, i]) => {
                    var n, u, h = [];
                    if ("string" == typeof i || !Array.isArray(i) && null != i && i.toString().length) n = "&" + e + "=" + o(i), r += n.length, a += n;
                    else if (Array.isArray(i) && i.length) {
                        for (r += 9, u = 0; u < i.length && (n = o((0, s.A)(i[u])), r += n.length, void 0 === t || !(r >= t)); u++) h.push(n);
                        a += "&" + e + "=%5B" + h.join(",") + "%5D"
                    }
                }), a
            }

            function h(e, t, r = {}) {
                return Object.keys(r).includes(e) ? "" : t && "string" == typeof t ? "&" + e + "=" + o(t) : ""
            }
        },
        83307: (e, t, r) => {
            r.d(t, {
                r: () => B
            });
            var s = r(3994),
                a = r(54821),
                i = r(63626),
                n = r(50772),
                o = r(12525),
                u = r(6677),
                h = r(42200),
                c = r(87516);
            class g {
                constructor(e) {
                    this.agentRef = e, this.warnedRegexMissing = !1, this.warnedInvalidRegex = !1, this.warnedInvalidReplacement = !1
                }
                get obfuscateConfigRules() {
                    return this.agentRef.init.obfuscate || []
                }
                obfuscateString(e) {
                    if ("string" != typeof e || 0 === e.trim().length) return e;
                    let t = this.obfuscateConfigRules.map(e => this.validateObfuscationRule(e));
                    return (0, h.p)() && t.push({
                        regex: /^file:\/\/(.*)/,
                        replacement: atob("ZmlsZTovL09CRlVTQ0FURUQ=")
                    }), t.filter(e => e.isValid).reduce((e, t) => {
                        let {
                            rule: r
                        } = t;
                        return e.replace(r.regex, r.replacement || "*")
                    }, e)
                }
                validateObfuscationRule(e) {
                    let t = void 0 === e.regex,
                        r = !(void 0 === e.regex || "string" == typeof e.regex || e.regex instanceof RegExp),
                        s = !!(e.replacement && "string" != typeof e.replacement);
                    return t && !this.warnedRegexMissing ? ((0, c.R)(12, e), this.warnedRegexMissing = !0) : r && !this.warnedInvalidRegex && ((0, c.R)(13, e), this.warnedInvalidRegex = !0), s && !this.warnedInvalidReplacement && ((0, c.R)(14, e), this.warnedInvalidReplacement = !0), {
                        rule: e,
                        isValid: !t && !r && !s,
                        errors: {
                            regexMissingDetected: t,
                            invalidRegexDetected: r,
                            invalidReplacementDetected: s
                        }
                    }
                }
            }
            var f = r(56804),
                l = r(97912),
                d = r(91907),
                p = r(48532),
                v = r(47539);
            class m {
                constructor() {
                    this.aggregatedData = {}
                }
                store(e, t, r, s, a) {
                    var i, n, o = this.#e(e, t, r, a);
                    return i = s, (n = o.metrics) || (n = {
                        count: 0
                    }), n.count += 1, Object.entries(i || {}).forEach(([e, t]) => {
                        n[e] = y(t, n[e])
                    }), o.metrics = n, o
                }
                merge(e, t, r, s, a, i = !1) {
                    var n = this.#e(e, t, s, a);
                    if (i && (n.params = s), !n.metrics) {
                        n.metrics = r;
                        return
                    }
                    var o = n.metrics;
                    o.count += r.count, Object.keys(r || {}).forEach(e => {
                        if ("count" !== e) {
                            var t, s, a = o[e],
                                i = r[e];
                            i && !i.c ? o[e] = y(i.t, a) : o[e] = (t = i, (s = o[e]) ? (s.c || (s = b(s.t)), s.min = Math.min(t.min, s.min), s.max = Math.max(t.max, s.max), s.t += t.t, s.sos += t.sos, s.c += t.c, s) : t)
                        }
                    })
                }
                storeMetric(e, t, r, s) {
                    var a = this.#e(e, t, r);
                    return a.stats = y(s, a.stats), a
                }
                take(e, t = !0) {
                    for (var r = {}, s = "", a = !1, i = 0; i < e.length; i++) r[s = e[i]] = Object.values(this.aggregatedData[s] || {}), r[s].length && (a = !0), t && delete this.aggregatedData[s];
                    return a ? r : null
                }#
                e(e, t, r, s) {
                    this.aggregatedData[e] || (this.aggregatedData[e] = {});
                    var a = this.aggregatedData[e][t];
                    return !a && (a = this.aggregatedData[e][t] = {
                        params: r || {}
                    }, s && (a.custom = s)), a
                }
            }

            function y(e, t) {
                var r;
                return null == e ? ((r = t) ? r.c++ : r = {
                    c: 1
                }, r) : t ? (t.c || (t = b(t.t)), t.c += 1, t.t += e, t.sos += e * e, e > t.max && (t.max = e), e < t.min && (t.min = e), t) : {
                    t: e
                }
            }

            function b(e) {
                return {
                    t: e,
                    min: e,
                    max: e,
                    sos: e * e,
                    c: 1
                }
            }
            class R {#
                t = new m;#
                r = {};
                byteSize() {
                    return 0
                }
                isEmpty({
                    aggregatorTypes: e
                }) {
                    return e ? e.every(e => !this.#t.aggregatedData[e]) : 0 === Object.keys(this.#t.aggregatedData).length
                }
                add([e, t, r, s, a]) {
                    return this.#t.store(e, t, r, s, a), !0
                }
                addMetric(e, t, r, s) {
                    return this.#t.storeMetric(e, t, r, s), !0
                }
                save({
                    aggregatorTypes: e
                }) {
                    let t = e.toString(),
                        r = {};
                    e.forEach(e => r[e] = this.#t.aggregatedData[e]), this.#r[t] = r
                }
                get(e) {
                    let t = Array.isArray(e) ? e : e.aggregatorTypes;
                    return this.#t.take(t, !1)
                }
                clear({
                    aggregatorTypes: e
                } = {}) {
                    if (!e) {
                        this.#t.aggregatedData = {};
                        return
                    }
                    e.forEach(e => delete this.#t.aggregatedData[e])
                }
                reloadSave({
                    aggregatorTypes: e
                }) {
                    let t = e.toString(),
                        r = this.#r[t];
                    e.forEach(e => {
                        Object.keys(r[e] || {}).forEach(t => {
                            let s = r[e][t];
                            this.#t.merge(e, t, s.metrics, s.params, s.custom, !0)
                        })
                    })
                }
                clearSave({
                    aggregatorTypes: e
                }) {
                    let t = e.toString();
                    delete this.#r[t]
                }
            }
            var k = r(11297);
            class B extends s.W {
                constructor(e, t) {
                    super(e.agentIdentifier, t), this.agentRef = e, this.checkConfiguration(e), this.doOnceForAllAggregate(e), this.customAttributesAreSeparate = !1, this.canHarvestEarly = !0, this.isRetrying = !1, this.harvestOpts = {}, this.#s(), this.waitForDrain()
                }#
                s() {
                    if (!this.events) switch (this.featureName) {
                        case f.K7.sessionReplay:
                            break;
                        case f.K7.jserrors:
                        case f.K7.metrics:
                            this.events = this.agentRef.sharedAggregator ? ? = new R;
                            break;
                        default:
                            this.events = new d.Z(k.It, this)
                    }
                }
                get supportsRegisteredEntities() {
                    return this.featureName in k.KC && (k.KC[this.featureName] || this.agentRef.init.feature_flags.includes("register." + this.featureName))
                }
                get harvestEndpointVersion() {
                    return this.supportsRegisteredEntities && this.agentRef.runtime.registeredEntities.length ? 2 : 1
                }
                waitForDrain() {
                    this.ee.on("drain-" + this.featureName, () => {
                        this.drained || setTimeout(() => this.agentRef.runtime.harvester.triggerHarvestFor(this), 1), this.drained = !0
                    })
                }
                decideEarlyHarvest() {
                    if (!this.canHarvestEarly || this.blocked || this.isRetrying) return;
                    let e = this.events.byteSize() + (this.customAttributesAreSeparate ? this.agentRef.runtime.jsAttributesMetadata.bytes : 0);
                    e > k.No && (this.agentRef.runtime.harvester.triggerHarvestFor(this), this.reportSupportabilityMetric("".concat(this.featureName, "/Harvest/Early/Seen"), e))
                }
                waitForFlags(e = []) {
                    return new Promise((t, r) => {
                        u.B[this.agentIdentifier] ? t(s(u.B[this.agentIdentifier])) : this.ee.on("rumresp", (e = {}) => {
                            t(s(e))
                        });

                        function s(t) {
                            return e.map(e => t[e] ? t[e] : 0)
                        }
                    }).catch(e => {
                        this.ee.emit("internal-error", [e]), this.blocked = !0, this.deregisterDrain()
                    })
                }
                drain() {
                    (0, o.Ze)(this.agentIdentifier, this.featureName)
                }
                preHarvestChecks(e) {
                    return !this.blocked && !this.ee.aborted
                }
                makeHarvestPayload(e = !1, t = {}) {
                    if (!this.events || this.events.isEmpty(this.harvestOpts) || this.preHarvestChecks && !this.preHarvestChecks(t)) return;
                    e && this.events.save(this.harvestOpts);
                    let r = this.events.get(this.harvestOpts);
                    if (!r) return;
                    this.events.clear(this.harvestOpts);
                    let s = {
                        body: this.serializer ? this.serializer(r) : r
                    };
                    return this.queryStringsBuilder && (s.qs = this.queryStringsBuilder(r)), s
                }
                postHarvestCleanup(e = {}) {
                    this.isRetrying = e.sent && e.retry, this.isRetrying && this.events.reloadSave(this.harvestOpts), this.events.clearSave(this.harvestOpts)
                }
                checkConfiguration(e) {
                    if (!(0, a.f)(e.info)) {
                        let t = (0, n.pV)(),
                            r = { ...t.info ? .jsAttributes
                            };
                        try {
                            r = { ...r,
                                ...e.info ? .jsAttributes
                            }
                        } catch (e) {}(0, i.j)(e, { ...t,
                            info: { ...t.info,
                                jsAttributes: r
                            },
                            runtime: e.runtime
                        }, e.runtime.loaderType)
                    }
                }
                doOnceForAllAggregate(e) {
                    e.runtime.obfuscator || (e.runtime.obfuscator = new g(e)), this.obfuscator = e.runtime.obfuscator, e.runtime.harvester || (e.runtime.harvester = new l.P(e))
                }
                reportSupportabilityMetric(e, t) {
                    (0, p.p)(v.xV, [e, t], void 0, f.K7.metrics, this.ee)
                }
            }
        },
        91907: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            var s = r(29452),
                a = r(11297);
            class i {#
                a = [];#
                i = 0;#
                n;#
                o;
                constructor(e = a.It, t) {
                    this.maxPayloadSize = e, this.featureAgg = t
                }
                get length() {
                    return this.#a.length
                }
                isEmpty() {
                    return 0 === this.#a.length
                }
                get() {
                    return this.#a
                }
                byteSize() {
                    return this.#i
                }
                wouldExceedMaxSize(e) {
                    return this.#i + e > this.maxPayloadSize
                }
                add(e, t) {
                    let r = t || (0, s.A)(e) ? .length || 0;
                    if (this.#i + r > this.maxPayloadSize) {
                        let e;
                        return this.featureAgg ? .reportSupportabilityMetric((e = this.featureAgg.featureName, "EventBuffer/".concat(e, "/Dropped/Bytes")), r), this.featureAgg ? .reportSupportabilityMetric("EventBuffer/".concat("Combined", "/Dropped/Bytes"), r), !1
                    }
                    return this.#a.push(e), this.#i += r, this.featureAgg ? .decideEarlyHarvest(), !0
                }
                merge(e, t) {
                    if (this.isEmpty() || !e) return !1;
                    let r = this.#a.findIndex(e);
                    return !(r < 0) && (this.#a[r] = { ...this.#a[r],
                        ...t
                    }, !0)
                }
                clear(e = {}) {
                    void 0 !== e.clearBeforeTime && e.timestampKey ? this.#a = this.#a.filter(t => t[e.timestampKey] >= e.clearBeforeTime) : void 0 !== e.clearBeforeIndex ? this.#a = this.#a.slice(e.clearBeforeIndex) : this.#a = [], this.#i = this.#a.length && (0, s.A)(this.#a) ? .length || 0
                }
                save() {
                    this.#n = this.#a, this.#o = this.#i
                }
                clearSave() {
                    this.#n = void 0, this.#o = void 0
                }
                reloadSave() {
                    !this.#n || this.#o + this.#i > this.maxPayloadSize || (this.#a = [...this.#n, ...this.#a], this.#i = this.#o + this.#i)
                }
            }
        },
        97912: (e, t, r) => {
            r.d(t, {
                P: () => B,
                t: () => x
            });
            var s = r(47539),
                a = r(56804),
                i = r(67216),
                n = r(8068),
                o = r(48532),
                u = r(89578),
                h = r(40775),
                c = r(9219);
            if (n.bv) {
                n.gm.cleanupTasks = [];
                let e = n.gm.close;
                n.gm.close = () => {
                    for (let e of n.gm.cleanupTasks) e();
                    e()
                }
            }
            var g = r(56797),
                f = r(42806),
                l = r(87516),
                d = r(29452),
                p = r(738),
                v = r(6677),
                m = r(3567);
            let y = "Harvester/Retry/",
                b = y + "Attempted/",
                R = y + "Failed/",
                k = y + "Succeeded/";
            class B {#
                u = !1;
                initializedAggregates = [];
                constructor(e) {
                    this.agentRef = e,
                        function(e, t) {
                            n.RI ? (0, c.u)(e, !0, t) : n.bv && n.gm.cleanupTasks.push(e)
                        }(() => {
                            this.initializedAggregates.forEach(e => {
                                "function" == typeof e.harvestOpts.beforeUnload && e.harvestOpts.beforeUnload()
                            }), this.initializedAggregates.forEach(e => this.triggerHarvestFor(e, {
                                isFinalHarvest: !0
                            }))
                        }, !1)
                }
                startTimer(e = this.agentRef.init.harvest.interval) {
                    if (this.#u) return;
                    this.#u = !0;
                    let t = () => {
                        this.initializedAggregates.forEach(e => this.triggerHarvestFor(e)), setTimeout(t, 1e3 * e)
                    };
                    setTimeout(t, 1e3 * e)
                }
                triggerHarvestFor(e, t = {}) {
                    let r = {
                        ranSend: !1,
                        payload: void 0,
                        endpointVersion: e.harvestEndpointVersion || 1
                    };
                    if (e.blocked || this.agentRef.init ? .browser_consent_mode ? .enabled && !this.agentRef.runtime.consented) return r;
                    let i = (0, p.mj)(t);
                    if (!i) return r;
                    let n = !t.isFinalHarvest && i === p.nF;
                    return r.payload = e.makeHarvestPayload(n, t), r.payload && (x(this.agentRef, {
                        endpoint: a.$J[e.featureName],
                        payload: r.payload,
                        localOpts: t,
                        submitMethod: i,
                        cbFinished: function(r) {
                            if (e.harvestOpts.prevAttemptCode) {
                                let t = t => (0, o.p)(s.xV, [t], void 0, a.K7.metrics, e.ee);
                                t(b + e.featureName), t((r.retry ? R : k) + e.harvestOpts.prevAttemptCode), delete e.harvestOpts.prevAttemptCode
                            }
                            r.retry && (e.harvestOpts.prevAttemptCode = r.status), t.forceNoRetry && (r.retry = !1), e.postHarvestCleanup(r)
                        },
                        raw: e.harvestOpts.raw,
                        featureName: e.featureName,
                        endpointVersion: r.endpointVersion
                    }), r.ranSend = !0), r
                }
            }
            let w = {};

            function x(e, {
                endpoint: t,
                payload: r,
                localOpts: s = {},
                submitMethod: c,
                cbFinished: y,
                raw: b,
                featureName: R,
                endpointVersion: k = 1
            }) {
                var B, A, S;
                let E, O, H, T, F;
                if (!e.info.errorBeacon) return !1;
                let {
                    body: j,
                    qs: C
                } = function(e = {}) {
                    let t = e => "u" > typeof Uint8Array && e instanceof Uint8Array || Array.isArray(e) || "string" == typeof e ? e : Object.entries(e || {}).reduce((e, [t, r]) => (("number" == typeof r || "string" == typeof r && r.length > 0 || "object" == typeof r && Object.keys(r || {}).length > 0) && (e[t] = r), e), {});
                    return {
                        body: t(e.body),
                        qs: t(e.qs)
                    }
                }(r);
                if (0 === Object.keys(j).length && !s.sendEmptyBody) return y && y({
                    sent: !1
                }), !1;
                let N = !1 === e.init.ssl ? "http" : "https",
                    I = e.init.proxy.beacon || e.info.errorBeacon,
                    D = b ? "".concat(N, "://").concat(I, "/").concat(t) : "".concat(N, "://").concat(I).concat(t !== a.v4 ? "/" + t : "", "/").concat(k, "/").concat(e.info.licenseKey),
                    M = b ? "" : (B = e, A = C, S = t, E = B.runtime.obfuscator.obfuscateString((0, g.L)("" + n.gm.location)), O = B.runtime.session, H = !!O ? .state.sessionReplaySentFirstChunk && O ? .state.sessionReplayMode === 1 && S !== a.XX, T = !!O ? .state.traceHarvestStarted && O ? .state.sessionTraceMode === 1 && ![a.Yy, a.df].includes(S), F = ["a=" + B.info.applicationID, (0, f.uR)("sa", B.info.sa ? "" + B.info.sa : ""), (0, f.uR)("v", i.xv), B.info.transactionName ? (0, f.uR)("to", B.info.transactionName) : (0, f.uR)("t", B.info.tNamePlain || "Unnamed Transaction"), (0, f.uR)("ct", B.runtime.customTransaction), "&rst=" + (0, h.t)(), "&ck=0", "&s=" + (O ? .state.value || "0"), (0, f.uR)("ref", E), (0, f.uR)("ptid", B.runtime.ptid ? "" + B.runtime.ptid : "")], H && F.push((0, f.uR)("hr", "1", A)), T && F.push((0, f.uR)("ht", "1", A)), F.join("")),
                    z = (0, f.WL)(C, e.runtime.maxBytes);
                "" === M && z.startsWith("&") && (z = z.substring(1));
                let K = "".concat(D, "?").concat(M).concat(z),
                    P = C ? .attributes ? .includes("gzip") || t === a.qY ? j : (0, d.A)(j);
                P && 0 !== P.length && "{}" !== P && "[]" !== P || (P = ""), t !== a.df && P.length > 75e4 && 1 === (w[t] = (w[t] || 0) + 1) && (0, l.R)(28, t);
                let V = [{
                        key: "content-type",
                        value: "text/plain"
                    }],
                    q = c({
                        url: K,
                        body: P,
                        sync: s.isFinalHarvest && n.bv,
                        headers: V
                    });
                if (!s.isFinalHarvest && y) {
                    c === p.nF ? q.addEventListener("loadend", function() {
                        y({
                            sent: 0 !== this.status,
                            status: this.status,
                            retry: L(this.status),
                            fullUrl: K,
                            xhr: this,
                            responseText: this.responseText
                        }), L(this.status) || U()
                    }, (0, u.jT)(!1)) : c === p.Jf && q.then(async function(e) {
                        let t = e.status;
                        y({
                            sent: !0,
                            status: t,
                            retry: L(t),
                            fullUrl: K,
                            fetchResponse: e,
                            responseText: await e.text()
                        }), L(t) || U()
                    });

                    function U() {
                        try {
                            if (R === a.K7.jserrors && !j ? .err) return;
                            let t = M.includes("hr=1"),
                                r = M.includes("ht=1"),
                                s = C ? .attributes ? .includes("hasError=true");
                            (0, o.p)("harvest-metadata", [{
                                [R]: { ...t && {
                                        hasReplay: t
                                    },
                                    ...r && {
                                        hasTrace: r
                                    },
                                    ...s && {
                                        hasError: s
                                    }
                                }
                            }], void 0, a.K7.metrics, e.ee)
                        } catch (e) {}
                    }
                }
                return (0, m.W)({
                    agentIdentifier: e.agentIdentifier,
                    drained: !!v.B ? .[e.agentIdentifier],
                    type: "data",
                    name: "harvest",
                    feature: R,
                    data: {
                        endpoint: t,
                        headers: V,
                        payload: r,
                        submitMethod: c === p.nF ? "xhr" : c === p.Jf ? "fetch" : "beacon",
                        raw: b,
                        synchronousXhr: !!(s.isFinalHarvest && n.bv)
                    }
                }), !0;

                function L(e) {
                    switch (e) {
                        case 408:
                        case 429:
                        case 500:
                            return !0
                    }
                    return e >= 502 && e <= 504 || e >= 512 && e <= 530
                }
            }
        }
    }
]);
//#
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4297], {
        23692: (e, r, t) => {
            t.r(r), t.d(r, {
                Aggregate: () => S
            });
            let s = /([a-z0-9]+)$/i;
            var n = /^\n+|\n+$/g,
                a = t(8068),
                i = t(56797);

            function o(e) {
                if ("string" != typeof e) return "";
                let r = (0, i.L)(e);
                return r === (0, i.L)(a.m) ? "<inline>" : r
            }
            var c = t(5060);

            function u(e) {
                var r, t, s = null;
                try {
                    if (s = function(e) {
                            if (!e.stack) return null;
                            var r = e.stack.split("\n").reduce(l, {
                                frames: [],
                                stackLines: [],
                                wrapperSeen: !1
                            });
                            return r.frames.length ? {
                                mode: "stack",
                                name: e.name || h(e),
                                message: e.message,
                                stackString: (function(e) {
                                    var r;
                                    if (e.length > 100) {
                                        var t = e.length - 100;
                                        r = e.slice(0, 50).join("\n") + ("\n< ...truncated " + t) + " lines... >\n" + e.slice(-50).join("\n")
                                    } else r = e.join("\n");
                                    return r
                                })(r.stackLines).replace(n, ""),
                                frames: r.frames
                            } : null
                        }(e)) return s
                } catch (e) {}
                try {
                    if (s = function(e) {
                            if (!("line" in e)) return null;
                            var r = e.name || h(e);
                            if (!e.sourceURL) return {
                                mode: "sourceline",
                                name: r,
                                message: e.message,
                                stackString: r + ": " + e.message + "\n    in evaluated code",
                                frames: [{
                                    func: "evaluated code"
                                }]
                            };
                            var t = o(e.sourceURL),
                                s = r + ": " + e.message + "\n    at " + t;
                            return e.line && (s += ":" + e.line, e.column && (s += ":" + e.column)), {
                                mode: "sourceline",
                                name: r,
                                message: e.message,
                                stackString: s,
                                frames: [{
                                    url: t,
                                    line: e.line,
                                    column: e.column
                                }]
                            }
                        }(e)) return s
                } catch (e) {}
                try {
                    if (s = (t = (r = e).name || h(r)) ? {
                            mode: "nameonly",
                            name: t,
                            message: r.message,
                            stackString: t + ": " + r.message,
                            frames: []
                        } : null) return s
                } catch (e) {}
                return {
                    mode: "failed",
                    stackString: "",
                    frames: []
                }
            }

            function l(e, r) {
                var t, s, n;
                let a = ((s = (t = r).match(c.cn)) || (s = t.match(c.hB)), s) ? {
                    url: s[2],
                    func: "Anonymous function" !== s[1] && "global code" !== s[1] && s[1] || null,
                    line: +s[3],
                    column: s[4] ? +s[4] : null
                } : t.match(c.fL) || t.match(c.Nc) || "anonymous" === t ? {
                    func: "evaluated code"
                } : void 0;
                if (!a) return e.stackLines.push(r), e;
                if ((n = a.func) && n.indexOf("nrWrapper") >= 0 && (e.wrapperSeen = !0), !e.wrapperSeen) {
                    let t = o(a.url);
                    t !== a.url && (r = r.replace(a.url, t), a.url = t), e.stackLines.push(r), e.frames.push(a)
                }
                return e
            }

            function h(e) {
                var r = c.h3.exec(String(e.constructor));
                return r && r.length > 1 ? r[1] : "unknown"
            }

            function f(e) {
                var r = 0;
                if (!e || !e.length) return r;
                for (var t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t) | 0;
                return r
            }
            var m = t(80326),
                g = t(29452),
                d = t(48532),
                p = t(96550),
                v = t(56804),
                k = t(83307),
                b = t(40775),
                w = t(85341);
            let y = "Rrweb",
                _ = "Security-Policy";
            var R = t(75275);
            class S extends k.r {
                static featureName = p.T;
                constructor(e) {
                    super(e, p.T), this.harvestOpts.aggregatorTypes = ["err", "ierr", "xhr"], this.stackReported = {}, this.observedAt = {}, this.pageviewReported = {}, this.errorOnPage = !1, (0, m.i)("err", (...e) => this.storeError(...e), this.featureName, this.ee), (0, m.i)("ierr", (...e) => this.storeError(...e), this.featureName, this.ee), (0, m.i)("returnJserror", (e, r) => this.#e(e, r), this.featureName, this.ee), this.waitForFlags(["err"]).then(([e]) => {
                        e ? this.drain() : (this.blocked = !0, this.deregisterDrain())
                    })
                }
                serializer(e) {
                    return (0, w.G)(e, this.obfuscator.obfuscateString.bind(this.obfuscator), "string")
                }
                queryStringsBuilder(e) {
                    let r = {},
                        t = (0, g.A)(this.agentRef.runtime.releaseIds);
                    return "{}" !== t && (r.ri = t), e ? .err ? .length && (this.errorOnPage || (r.pve = "1", this.errorOnPage = !0), this.agentRef.features ? .[v.K7.sessionReplay] ? .featAggregate ? .replayIsActive() || e.err.forEach(e => delete e.params.hasReplay)), r
                }
                buildCanonicalStackString(e) {
                    for (var r = "", t = 0; t < e.frames.length; t++) {
                        var n = e.frames[t],
                            a = function(e) {
                                if (!e) return;
                                let r = e.match(s);
                                if (r) return r[1]
                            }(n.func);
                        r && (r += "\n"), a && (r += a + "@"), "string" == typeof n.url && (r += n.url), n.line && (r += ":" + n.line)
                    }
                    return r
                }
                storeError(e, r, t, s, n, i, o) {
                    let c;
                    if (!e || (r = r || (0, b.t)(), !t && this.agentRef.runtime.onerror && (c = this.agentRef.runtime.onerror(e)) && !("string" == typeof c.group && c.group.length))) return;
                    var l, h = u(e);
                    let {
                        shouldSwallow: m,
                        reason: p
                    } = function(e, r, t) {
                        let s = {
                                shouldSwallow: r || !1,
                                reason: t || "Other"
                            },
                            n = e.frames ? .[0];
                        if (!n || "string" != typeof e ? .message) return s;
                        let a = n ? .url ? .match(/nr-(.*)-recorder.min.js/),
                            i = n ? .url ? .match(/rrweb/),
                            o = n ? .url ? .match(/recorder/),
                            c = e.message.toLowerCase().match(/an attempt was made to break through the security policy of the user agent/);
                        return a || i ? (s.shouldSwallow = !0, s.reason = y, c && (s.reason += "-" + _)) : o && c && (s.shouldSwallow = !0, s.reason = y + "-" + _), s
                    }(h, t, i);
                    if (m) return void this.reportSupportabilityMetric("Internal/Error/" + p);
                    var k = this.buildCanonicalStackString(h);
                    let w = function(e) {
                            let r = "";
                            if (!e ? .cause) return r;
                            if (e.cause instanceof Error) {
                                let t = u(e.cause);
                                r = t.stackString || e.cause.stack, t.message && !r.includes(t.message) && (r = t.message + "\n" + r), t.name && !r.includes(t.name) && (r = t.name + ": " + r)
                            } else r = "string" == typeof e.cause ? e.cause : (0, g.A)(e.cause);
                            return r || e.cause.toString()
                        }(e),
                        R = {
                            stackHash: f(k),
                            exceptionClass: h.name,
                            request_uri: a.gm ? .location.pathname,
                            ...w && {
                                cause: w
                            }
                        };
                    h.message && (R.message = "" + h.message), c ? .group && (R.errorGroup = c.group), n && !o && (R.hasReplay = n);
                    var S = f("".concat(h.name, "_").concat(h.message, "_").concat(h.stackString, "_").concat(+!!R.hasReplay, "_").concat(o ? .id || "container"));
                    this.stackReported[S] ? R.browser_stack_hash = f(h.stackString) : (this.stackReported[S] = !0, R.stack_trace = (l = h.stackString).length > 65530 ? l.substr(0, 65530) : l, this.observedAt[S] = Math.floor(this.agentRef.runtime.timeKeeper.correctRelativeTimestamp(r))), R.releaseIds = (0, g.A)(this.agentRef.runtime.releaseIds), this.pageviewReported[S] || (R.pageview = 1, this.pageviewReported[S] = !0), R.firstOccurrenceTimestamp = this.observedAt[S], R.timestamp = Math.floor(this.agentRef.runtime.timeKeeper.correctRelativeTimestamp(r));
                    let I = ["err", S, R, {
                        time: r
                    }, s];
                    o || (0, d.p)("trace-jserror", I, void 0, v.K7.sessionTrace, this.ee), !this.blocked && (e.__newrelic ? .[this.agentIdentifier] && (R._interactionId = e.__newrelic[this.agentIdentifier].interactionId, R._interactionNodeId = e.__newrelic[this.agentIdentifier].interactionNodeId), e.__newrelic ? .socketId && (s.socketId = e.__newrelic.socketId), o || (this.agentRef.features ? .[v.K7.softNav] ? (0, d.p)("jserror", [I], void 0, v.K7.softNav, this.ee) : this.#e(I, !1)), o && this.#e([...I, o], !1, R._softNavAttributes))
                }#
                e(e, r = {}) {
                    let [t, s, n, a, i, o] = e, c = { ...(0, R.U)(o, this)
                    };
                    Object.entries(this.agentRef.info.jsAttributes).forEach(([e, r]) => l(e, r)), Object.entries(r).forEach(([e, r]) => l(e, r)), n.browserInteractionId && (s += n.browserInteractionId), i && Object.entries(i).forEach(([e, r]) => l(e, r));
                    let u = s + ":" + f((0, g.A)(c));

                    function l(e, r) {
                        c[e] = r && "object" == typeof r ? (0, g.A)(r) : r
                    }
                    this.events.add([t, u, n, a, c])
                }
            }
        },
        85341: (e, r, t) => {
            t.d(r, {
                G: () => function e(r, t, s = "string", n = []) {
                    return r && "object" == typeof r && Object.keys(r).forEach(a => {
                        "object" == typeof r[a] ? e(r[a], t, s, n) : typeof r[a] !== s || n.includes(a) || (r[a] = t(r[a]))
                    }), r
                }
            })
        }
    }
]);
//#
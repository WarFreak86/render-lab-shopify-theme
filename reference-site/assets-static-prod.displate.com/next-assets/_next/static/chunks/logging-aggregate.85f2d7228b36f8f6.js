"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9100], {
        54435: (t, e, i) => {
            i.r(e), i.d(e, {
                Aggregate: () => M
            });
            var s = i(80326),
                r = i(87516),
                o = i(29452),
                n = i(83307),
                a = i(98183),
                g = i(8068),
                h = i(56797);
            class p {
                timestamp;
                message;
                attributes;
                level;
                constructor(t, e, i = {}, s = a.p_.INFO) {
                    this.timestamp = t, this.message = e, this.attributes = { ...i,
                        pageUrl: (0, h.L)("" + g.m)
                    }, this.level = s.toUpperCase()
                }
            }
            var l = i(72421),
                u = i(85341),
                d = i(26196),
                c = i(4700),
                f = i(95829),
                b = i(75275);
            let m = "Logging/Event/";
            class M extends n.r {
                static featureName = a.TZ;
                constructor(t) {
                    super(t, a.TZ);
                    const e = (t, e) => {
                        this.loggingMode = {
                            auto: t,
                            api: e
                        }, void 0 === e && (this.loggingMode.api = t)
                    };
                    this.harvestOpts.raw = !0, super.customAttributesAreSeparate = !0, this.ee.on(d.tS.RESET, () => {
                        this.abort(c.bc.RESET)
                    }), this.ee.on(d.tS.UPDATE, (t, i) => {
                        this.blocked || t !== d.iL.CROSS_TAB || (i.loggingMode !== a.A$.OFF || i.logApiMode && i.logApiMode !== a.A$.OFF ? e(i.loggingMode, i.logApiMode) : this.abort(c.bc.CROSS_TAB))
                    }), this.waitForFlags(["log", "logapi"]).then(([i, r]) => {
                        if (this.blocked) return;
                        this.loggingMode ? ? = {
                            auto: i,
                            api: r
                        };
                        let o = this.agentRef.runtime.session;
                        if ((0, f.V)(t.init) && o && (o.isNew ? this.#t() : e(o.state.loggingMode, o.state.logApiMode)), this.loggingMode.auto === a.A$.OFF && this.loggingMode.api === a.A$.OFF) {
                            this.blocked = !0, this.deregisterDrain();
                            return
                        }(0, s.i)(a.ET, this.handleLog.bind(this), this.featureName, this.ee), this.drain(), t.runtime.harvester.triggerHarvestFor(this)
                    })
                }
                handleLog(t, e, i = {}, s = a.p_.INFO, n, g) {
                    if (this.blocked) return;
                    let h = n ? this.loggingMode.auto : this.loggingMode.api;
                    if (!h) return;
                    if (i && "object" == typeof i || (i = {}), i = { ...i,
                            ...(0, b.U)(g, this)
                        }, "string" == typeof s && (s = s.toUpperCase()), !(0, l.b)(s)) return (0, r.R)(30, s);
                    if (h < (a.A$[s] || 1 / 0)) return void this.reportSupportabilityMetric(m + "Dropped/Sampling");
                    try {
                        if ("string" != typeof e) {
                            let t = (0, o.A)(e);
                            e = t && "{}" !== t ? t : String(e)
                        }
                    } catch (t) {
                        (0, r.R)(16, e), this.reportSupportabilityMetric(m + "Dropped/Casting");
                        return
                    }
                    if ("string" != typeof e || !e) return (0, r.R)(32);
                    let u = new p(Math.floor(this.agentRef.runtime.timeKeeper.correctRelativeTimestamp(t)), e, i, s);
                    this.events.add(u) && this.reportSupportabilityMetric(m + (n ? "Auto" : "API") + "/Added")
                }
                serializer(t) {
                    let e = this.agentRef.runtime.session;
                    return [{
                        common: {
                            attributes: { ...(0, u.G)(this.agentRef.info.jsAttributes, this.obfuscator.obfuscateString.bind(this.obfuscator), "string"),
                                ...1 === this.harvestEndpointVersion && {
                                    "entity.guid": this.agentRef.runtime.appMetadata.agents[0].entityGuid,
                                    appId: this.agentRef.info.applicationID
                                },
                                ...e && {
                                    session: e.state.value || "0",
                                    hasReplay: 1 === e.state.sessionReplayMode,
                                    hasTrace: 1 === e.state.sessionTraceMode
                                },
                                ptid: this.agentRef.runtime.ptid,
                                standalone: !!this.agentRef.info.sa,
                                agentVersion: this.agentRef.runtime.version,
                                "instrumentation.provider": "browser",
                                "instrumentation.version": this.agentRef.runtime.version,
                                "instrumentation.name": this.agentRef.runtime.loaderType
                            }
                        },
                        logs: (0, u.G)(t, this.obfuscator.obfuscateString.bind(this.obfuscator), "string")
                    }]
                }
                queryStringsBuilder() {
                    return {
                        browser_monitoring_key: this.agentRef.info.licenseKey
                    }
                }
                abort(t = {}) {
                    this.reportSupportabilityMetric("Logging/Abort/".concat(t.sm)), this.blocked = !0, this.events && (this.events.clear(), this.events.clearSave()), this.loggingMode = {
                        auto: a.A$.OFF,
                        api: a.A$.OFF
                    }, this.#t(), this.deregisterDrain()
                }#
                t() {
                    this.agentRef.runtime.session ? .write({
                        loggingMode: this.loggingMode.auto,
                        logApiMode: this.loggingMode.api
                    })
                }
            }
        },
        85341: (t, e, i) => {
            i.d(e, {
                G: () => function t(e, i, s = "string", r = []) {
                    return e && "object" == typeof e && Object.keys(e).forEach(o => {
                        "object" == typeof e[o] ? t(e[o], i, s, r) : typeof e[o] !== s || r.includes(o) || (e[o] = i(e[o]))
                    }), e
                }
            })
        }
    }
]);
//#
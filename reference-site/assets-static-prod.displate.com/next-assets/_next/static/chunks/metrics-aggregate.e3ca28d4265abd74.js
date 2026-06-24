"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2452], {
        44414: (e, t, r) => {
            r.r(t), r.d(t, {
                Aggregate: () => h
            });
            var i = r(80326),
                o = r(47539),
                n = r(8068),
                s = r(42200),
                a = r(79747),
                c = r(89578),
                p = r(83307),
                u = r(90203);
            class h extends p.r {
                static featureName = o.TZ;
                constructor(e) {
                    super(e, o.TZ), this.harvestOpts.aggregatorTypes = ["cm", "sm"], this.harvestMetadata = {}, this.harvestOpts.beforeUnload = () => {
                        (function(e) {
                            try {
                                let r = [];

                                function t(e, t, i, o) {
                                    let n = "audit";
                                    i ? o ? r.push(((...e) => e.join("/"))(n, e, t, "true", "positive")) : r.push(((...e) => e.join("/"))(n, e, t, "false", "positive")) : o ? r.push(((...e) => e.join("/"))(n, e, t, "false", "negative")) : r.push(((...e) => e.join("/"))(n, e, t, "true", "negative"))
                                }
                                return e.page_view_event && (t("page_view", "hasReplay", e.page_view_event.hasReplay, !!e.session_replay), t("page_view", "hasTrace", e.page_view_event.hasTrace, !!e.session_trace)), e.session_replay && t("session_replay", "hasError", e.session_replay.hasError, !!e.jserrors), r
                            } catch (e) {
                                return []
                            }
                        })(this.harvestMetadata).forEach(e => {
                            this.storeSupportabilityMetrics(e)
                        })
                    }, this.agentNonce = n.RI && document.currentScript ? .nonce, this.waitForFlags(["err"]).then(([e]) => {
                        e ? (this.singleChecks(), this.eachSessionChecks(), this.drain()) : (this.blocked = !0, this.deregisterDrain())
                    }), (0, i.i)(o.xV, this.storeSupportabilityMetrics.bind(this), this.featureName, this.ee), (0, i.i)(o.XG, this.storeEventMetrics.bind(this), this.featureName, this.ee)
                }
                preHarvestChecks(e) {
                    return this.drained && e.isFinalHarvest
                }
                storeSupportabilityMetrics(e, t) {
                    if (this.blocked) return;
                    let r = o.rs;
                    this.events.addMetric(r, e, {
                        name: e
                    }, t)
                }
                storeEventMetrics(e, t) {
                    if (this.blocked) return;
                    let r = o.z_;
                    this.events.add([r, e, {
                        name: e
                    }, t])
                }
                singleChecks() {
                    let {
                        distMethod: e,
                        loaderType: t
                    } = this.agentRef.runtime, {
                        proxy: r,
                        privacy: o
                    } = this.agentRef.init;
                    if (t && this.storeSupportabilityMetrics("Generic/LoaderType/".concat(t, "/Detected")), e && this.storeSupportabilityMetrics("Generic/DistMethod/".concat(e, "/Detected")), n.RI ? (this.storeSupportabilityMetrics("Generic/Runtime/Browser/Detected"), this.agentNonce && "" !== this.agentNonce && this.storeSupportabilityMetrics("Generic/Runtime/Nonce/Detected"), (0, a.sB)(() => {
                            (function() {
                                if (!n.RI) return [];
                                let e = [];
                                try {
                                    (function() {
                                        try {
                                            return Object.prototype.hasOwnProperty.call(window, "React") || Object.prototype.hasOwnProperty.call(window, "ReactDOM") || Object.prototype.hasOwnProperty.call(window, "ReactRedux") || document.querySelector("[data-reactroot], [data-reactid]") || (() => {
                                                let e = document.querySelectorAll("body > div");
                                                for (let t = 0; t < e.length; t++)
                                                    if (Object.prototype.hasOwnProperty.call(e[t], "_reactRootContainer")) return !0
                                            })()
                                        } catch (e) {
                                            return !1
                                        }
                                    })() && (e.push("React"), function() {
                                        try {
                                            return Object.prototype.hasOwnProperty.call(window, "next") && Object.prototype.hasOwnProperty.call(window.next, "version")
                                        } catch (e) {
                                            return !1
                                        }
                                    }() && e.push("NextJS")),
                                    function() {
                                        try {
                                            return Object.prototype.hasOwnProperty.call(window, "Vue")
                                        } catch (e) {
                                            return !1
                                        }
                                    }() && (e.push("Vue"), function() {
                                        try {
                                            return Object.prototype.hasOwnProperty.call(window, "$nuxt") && Object.prototype.hasOwnProperty.call(window.$nuxt, "nuxt")
                                        } catch (e) {
                                            return !1
                                        }
                                    }() && e.push("NuxtJS")),
                                    function() {
                                        try {
                                            return Object.prototype.hasOwnProperty.call(window, "ng") || document.querySelector("[ng-version]")
                                        } catch (e) {
                                            return !1
                                        }
                                    }() && (e.push("Angular"), function() {
                                        try {
                                            return document.querySelector("[ng-server-context]")
                                        } catch (e) {
                                            return !1
                                        }
                                    }() && e.push("AngularUniversal")),
                                    function() {
                                        try {
                                            return Object.prototype.hasOwnProperty.call(window, "__svelte")
                                        } catch (e) {
                                            return !1
                                        }
                                    }() && (e.push("Svelte"), function() {
                                        try {
                                            return !!Object.keys(window).find(e => e.startsWith("__sveltekit"))
                                        } catch (e) {
                                            return !1
                                        }
                                    }() && e.push("SvelteKit")),
                                    function() {
                                        try {
                                            return Object.prototype.hasOwnProperty.call(window, "preact")
                                        } catch (e) {
                                            return !1
                                        }
                                    }() && (e.push("Preact"), function() {
                                        try {
                                            return document.querySelector('script[type="__PREACT_CLI_DATA__"]')
                                        } catch (e) {
                                            return !1
                                        }
                                    }() && e.push("PreactSSR")),
                                    function() {
                                        try {
                                            return Object.prototype.hasOwnProperty.call(window, "angular") || document.querySelector(".ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]") || document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]')
                                        } catch (e) {
                                            return !1
                                        }
                                    }() && e.push("AngularJS"), Object.prototype.hasOwnProperty.call(window, "Backbone") && e.push("Backbone"), Object.prototype.hasOwnProperty.call(window, "Ember") && e.push("Ember"), Object.prototype.hasOwnProperty.call(window, "Meteor") && e.push("Meteor"), Object.prototype.hasOwnProperty.call(window, "Zepto") && e.push("Zepto"), Object.prototype.hasOwnProperty.call(window, "jQuery") && e.push("Jquery"), Object.prototype.hasOwnProperty.call(window, "MooTools") && e.push("MooTools"), Object.prototype.hasOwnProperty.call(window, "qwikevents") && e.push("Qwik"), Object.hasOwn(window, "_flutter") && e.push("Flutter"),
                                        function() {
                                            try {
                                                return "object" == typeof navigator && "string" == typeof navigator.userAgent && navigator.userAgent.indexOf("Electron") >= 0
                                            } catch (e) {
                                                return !1
                                            }
                                        }() && e.push("Electron")
                                } catch (e) {}
                                return e
                            })().forEach(e => {
                                this.storeSupportabilityMetrics("Framework/" + e + "/Detected")
                            })
                        }), o.cookies_enabled || this.storeSupportabilityMetrics("Config/SessionTracking/Disabled")) : n.bv ? this.storeSupportabilityMetrics("Generic/Runtime/Worker/Detected") : this.storeSupportabilityMetrics("Generic/Runtime/Unknown/Detected"), (0, s.p)() && this.storeSupportabilityMetrics("Generic/FileProtocol/Detected"), this.obfuscator.obfuscateConfigRules.length > 0 && this.storeSupportabilityMetrics("Generic/Obfuscate/Detected"), r.assets && this.storeSupportabilityMetrics("Config/AssetsUrl/Changed"), r.beacon && this.storeSupportabilityMetrics("Config/BeaconUrl/Changed"), n.RI && window.MutationObserver) {
                        (0, u.v)(window) && this.storeSupportabilityMetrics("Generic/Runtime/IFrame/Detected");
                        let e = window.document.querySelectorAll("video").length;
                        e && this.storeSupportabilityMetrics("Generic/VideoElement/Added", e);
                        let t = window.document.querySelectorAll("iframe").length;
                        t && this.storeSupportabilityMetrics("Generic/IFrame/Added", t), new MutationObserver(e => {
                            e.forEach(e => {
                                e.addedNodes.forEach(e => {
                                    e instanceof HTMLVideoElement && this.storeSupportabilityMetrics("Generic/VideoElement/Added", 1), e instanceof HTMLIFrameElement && this.storeSupportabilityMetrics("Generic/IFrame/Added", 1)
                                })
                            })
                        }).observe(window.document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                    navigator.webdriver && this.storeSupportabilityMetrics("Generic/WebDriver/Detected"), (0, i.i)("harvest-metadata", (e = {}) => {
                        try {
                            Object.keys(e).forEach(t => {
                                Object.assign(this.harvestMetadata[t] ? ? = {}, e[t])
                            })
                        } catch (e) {}
                    }, this.featureName, this.ee)
                }
                eachSessionChecks() {
                    n.RI && (0, c.sp)("pageshow", e => {
                        e ? .persisted && this.storeSupportabilityMetrics("Generic/BFCache/PageRestored")
                    })
                }
            }
        },
        90203: (e, t, r) => {
            r.d(t, {
                v: () => i
            });

            function i(e) {
                return !!e && e.self !== e.top
            }
        }
    }
]);
//#
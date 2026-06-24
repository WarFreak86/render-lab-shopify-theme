(function() {
    "use strict";
    const y = "dccm-accept-btn",
        h = "dccm-cancel-btn",
        C = "dccm-customize-btn",
        m = "dccm-allow-btn",
        E = "dccm-pp-link",
        w = "dccm-analytics-cookies",
        f = "dccm-marketing-cookies",
        A = "dccm-necessery-cookies",
        u = "dccm-cookie-consent-modal",
        d = "dccm-cookie-consent",
        M = "cookie_alert_submited",
        a = "a7d54fh8",
        I = "hideDCConsentMode",
        N = "openDisplateCookieConsentModal",
        S = "lcp-cookie",
        x = "dccmCookieConsentModeInit",
        D = "dccmCookieConsentModeAccept",
        z = "dccmCookieConsentModeReject",
        s = e => {
            (window.dataLayer || []).push(e)
        },
        B = () => {
            s({
                event: "element_impression",
                element_id: "cookie_bar",
                element_variant: a
            })
        },
        P = () => {
            s({
                event: "element_interaction",
                element_id: "cookie_bar_accept_all_button",
                element_variant: a,
                interaction_type: "click"
            })
        },
        $ = () => {
            s({
                event: "element_interaction",
                element_id: "cookie_bar_policy_button",
                element_variant: a,
                interaction_type: "click"
            })
        },
        R = () => {
            s({
                event: "element_interaction",
                element_id: "cookie_bar_deny_all_button",
                element_variant: a,
                interaction_type: "click"
            })
        },
        U = () => {
            s({
                event: "element_interaction",
                element_id: "cookie_bar_accept_selected_button",
                element_variant: a,
                interaction_type: "click"
            })
        },
        Y = () => {
            s({
                event: "element_interaction",
                element_id: "cookie_bar_customize_button",
                element_variant: a,
                interaction_type: "click"
            })
        },
        O = () => {
            const e = new CustomEvent(D);
            window.dispatchEvent(e)
        },
        T = () => {
            const e = new CustomEvent(z);
            window.dispatchEvent(e)
        },
        _ = e => {
            document.body.removeChild(e), document.body.style.overflowY = "auto"
        },
        p = () => {
            const e = new Date;
            e.setFullYear(e.getFullYear() + 1), document.cookie = M + "=1;expires=" + e.toUTCString() + ";path=/"
        },
        k = e => {
            window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                event: "cookie_consent_update",
                consent: {
                    ad_storage: e.ad_storage,
                    ad_user_data: e.ad_user_data,
                    ad_personalization: e.ad_personalization,
                    analytics_storage: e.analytics_storage
                }
            })
        },
        v = e => {
            window.dataLayer = window.dataLayer || [], window.gtag = window.gtag || function() {
                var t;
                (t = window.dataLayer) == null || t.push(arguments)
            }, window.gtag("consent", "update", {
                ad_storage: e.ad_storage,
                analytics_storage: e.analytics_storage,
                ad_personalization: e.ad_personalization,
                ad_user_data: e.ad_user_data
            })
        },
        g = (e, t) => {
            const c = JSON.parse(localStorage.getItem(d) || "false");
            if (!c) {
                try {
                    localStorage.setItem(d, JSON.stringify({
                        current: e,
                        history: [],
                        checkboxes: t
                    }))
                } catch (o) {
                    console.error(o)
                }
                return
            }
            const n = {
                current: e,
                history: [c.current, ...c.history].slice(0, 10),
                checkboxes: t
            };
            try {
                localStorage.setItem(d, JSON.stringify(n))
            } catch (o) {
                console.error(o)
            }
        },
        b = e => {
            window.uetq = window.uetq || [], window.uetq.push("consent", "update", {
                ad_storage: e.ad_storage
            })
        },
        K = () => {
            const e = document.getElementById(E);
            if (!e) return;
            const t = () => {
                $(), e.removeEventListener("click", t)
            };
            e.addEventListener("click", t)
        },
        j = e => {
            const t = document.getElementById(h);
            if (!t) return;
            const c = () => {
                const n = {
                    ad_personalization: "denied",
                    ad_user_data: "denied",
                    ad_storage: "denied",
                    analytics_storage: "denied",
                    timestamp: Date.now().toString()
                };
                g(n, {
                    marketing: !1,
                    analyics: !1
                }), v(n), b(n), k(n), p(), R(), T(), t.removeEventListener("click", c), _(e)
            };
            t.addEventListener("click", c)
        },
        q = e => {
            const t = document.getElementById(y);
            if (!t) return;
            const c = () => {
                const n = {
                    ad_personalization: "granted",
                    ad_user_data: "granted",
                    ad_storage: "granted",
                    analytics_storage: "granted",
                    timestamp: Date.now().toString()
                };
                g(n, {
                    marketing: !0,
                    analyics: !0
                }), v(n), b(n), k(n), p(), P(), O(), t.removeEventListener("click", c), _(e)
            };
            t.addEventListener("click", c)
        },
        J = e => {
            const t = document.getElementById(m);
            if (!t) return;
            const c = document.getElementById(f),
                n = document.getElementById(w),
                o = () => {
                    const i = c.checked ? "granted" : "denied",
                        r = n.checked ? "granted" : "denied",
                        l = {
                            ad_personalization: i,
                            ad_user_data: i,
                            ad_storage: i,
                            analytics_storage: r,
                            timestamp: Date.now().toString()
                        };
                    g(l, {
                        marketing: c.checked,
                        analyics: n.checked
                    }), v(l), b(l), k(l), p(), U(), c.checked ? O() : T(), t.removeEventListener("click", o), _(e)
                };
            t.addEventListener("click", o)
        },
        G = () => {
            const e = document.getElementById(C);
            if (!e) return;
            const t = () => {
                var n, o;
                (n = document.querySelector(".dccm-content-main-customize")) == null || n.classList.add("show-element"), e.classList.add("hide-element"), (o = document.getElementById(m)) == null || o.classList.add("show-element");
                const c = document.querySelector(".dccm-content-inner-main");
                c && (c.scrollTop = c.scrollHeight), Y(), e.removeEventListener("click", t)
            };
            e.addEventListener("click", t)
        },
        V = () => {
            window.addEventListener("message", e => {
                if (e.data === `${N}`) {
                    if (document.querySelector(`#${u}`)) return;
                    L()
                }
            })
        },
        W = () => {
            document.querySelectorAll(".dccm-marker").forEach(t => {
                const c = () => {
                    var o;
                    t && t.classList.toggle("marker-active");
                    const n = (o = t.closest(".dccm-checkbox-container")) == null ? void 0 : o.nextElementSibling;
                    n && n.classList.toggle("dccm-accordion-content-active")
                };
                t.addEventListener("click", c), t.addEventListener("keydown", n => {
                    const o = n;
                    (o.key === " " || o.code === "Space" || o.key === "Spacebar") && (o.preventDefault(), c())
                })
            })
        },
        H = e => {
            e && (e.classList.add("dccm-show"), document.body.style.overflowY = "hidden")
        },
        F = () => !!document.cookie.split(";").some(t => t.trim().startsWith("cookie_alert_submited=")),
        Q = () => {
            const e = window.localStorage.getItem(d);
            return e ? JSON.parse(e) : null
        },
        L = () => {
            var i, r;
            if (document.querySelector(`#${u}`)) return;
            const e = Q(),
                t = (i = e == null ? void 0 : e.checkboxes) != null && i.marketing ? "checked" : "",
                c = (r = e == null ? void 0 : e.checkboxes) != null && r.analyics ? "checked" : "",
                n = document.createElement("div");
            n.id = `${u}`, n.innerHTML = `
        <div data-testid="pasta-bar" class="dccm">
            <div id=${S} class="dccm-content" aria-modal="true" role="dialog">
                <div class="dccm-content-inner">
                <div class="dccm-content-inner-header">
                    <img class="dccm-content-inner-header-icon" src="https://assets-static-prod.displate.com/cookie-consent/cookie.svg" alt="cookie" />
                    <h2 class="dccm-content-inner-header-title">Every wall deserves a cookie</h2>
                </div>
                <div class="dccm-content-inner-main">
                    <p class="dccm-content-inner-text">We use cookies to keep enhancing your Displate experience — with tailored content, personalized ads, and smarter insights into how our site and campaigns perform.</p>
                    <p class="dccm-content-inner-text">Click <strong>Accept</strong> to consent to the processing of your personal data. You can review or adjust your choices using <strong>Customize options</strong>, and withdraw your consent anytime via the <strong>Cookie Preferences</strong> link at the bottom of the page.</p>
                    <p class="dccm-content-inner-text">You can change or withdraw your consent at any time via the 'Cookie Preferences' link located in the page footer.</p>
                    <p class="dccm-content-inner-text">Want to learn more? Read our <a class="dccm-link" id=${E} rel="noopener" target="_blank" href="https://displate.com/about-privacy?${I}">privacy policy</a> and <a class="dccm-link" rel="noopener" target="_blank" href="https://business.safety.google/privacy/">Google data processing information</a>.</p>
                    <div class="dccm-content-main-customize" id="dccm-customize">
                    <h2 class="dccm-content-title">Customize cookies preferences</h2>
                    <div class="dccm-checkbox-group">
                        <div class="dccm-checkbox-row">
                            <div class="dccm-checkbox-container">
                                <label class="dccm-checkbox-label dccm-content-inner-text" aria-label="Strictly necessary cookies">
                                    <input class="input" id=${A} name="dccm-necessery" type="checkbox" value="1" checked disabled />
                                <span class="dccm-checkbox"></span>
                                    Strictly necessary cookies
                                </label>
                                <div class="dccm-marker" tabindex="0"></div>
                            </div>
                            <p class="dccm-content-inner-text dccm-accordion-content">Enables essential functionalities such as website navigation, access to certain features, and setting your privacy preferences. These features are crucial for basic website operations and cannot be disabled without impacting how the website functions.</p>
                        </div>
                        <div class="dccm-checkbox-row">
                            <div class="dccm-checkbox-container">
                                <label class="dccm-checkbox-label dccm-content-inner-text" aria-label="Analytics cookies">
                                    <input class="input" id=${w} name="dccm-analytics" type="checkbox" value="1" ${c}/>
                                <span class="dccm-checkbox"></span>
                                    Analytics cookies
                                </label>
                                <div class="dccm-marker" tabindex="0"></div>
                            </div>
                            <p class="dccm-content-inner-text dccm-accordion-content">Enables storage (such as cookies) related to analytics e.g. visit duration.</p>
                        </div>
                        <div class="dccm-checkbox-row">
                            <div class="dccm-checkbox-container">
                                <label class="dccm-checkbox-label dccm-content-inner-text" aria-label="Marketing cookies">
                                    <input class="input" id=${f} name="dccm-marketing" type="checkbox" value="1" ${t} />
                                <span class="dccm-checkbox"></span>
                                    Marketing cookies
                                </label>
                                <div class="dccm-marker" tabindex="0"></div>
                            </div>
                            <p class="dccm-content-inner-text dccm-accordion-content">Enables storage (such as cookies) and data processing related to personalised advertising and measuring the effectiveness of advertising.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="dccm-content-inner-footer"> 
                    <button class="dccm-btn dccm-btn-reject" id=${h}>Reject</button>
                    <button class="dccm-btn dccm-btn-customize" id=${C}>Customize options</button>
                    <button class="dccm-btn dccm-btn-allow" id=${m}>Allow selection</button>
                    <button class="dccm-btn dccm-btn-accept" id=${y}>Accept</button>
                </div>
                </div>
            </div>
        </div>
    `, document.body.appendChild(n), window.DisplateConsentMode.initialized = !0;
            const o = document.getElementById(S);
            H(o), q(n), j(n), J(n), K(), G(), W(), B()
        },
        Z = () => new URLSearchParams(window.location.search).has(I),
        X = () => {
            const e = new CustomEvent(x);
            window.dispatchEvent(e)
        },
        ee = () => {
            window.DisplateConsentMode = {
                initialized: !1,
                showPopup: L
            }, V(), X()
        };
    (() => {
        ee(), !F() && !Z() && window.DisplateConsentMode.showPopup()
    })()
})();
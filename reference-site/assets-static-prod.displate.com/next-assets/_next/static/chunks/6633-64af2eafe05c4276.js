"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6633], {
        1833: (e, t, i) => {
            i.d(t, {
                o: () => n
            });
            let n = (0, i(8106).v)(e => ({
                wasOpened: !1,
                wasClosed: !1,
                isDrawerOpen: !1,
                pagesTraversedByUser: 0,
                setWasOpened: t => e({
                    wasOpened: t
                }),
                setWasClosed: t => e({
                    wasClosed: t
                }),
                setIsDrawerOpen: t => e({
                    isDrawerOpen: t
                }),
                resetPagesTraversedByUser: () => e({
                    pagesTraversedByUser: 0
                }),
                incrementPagesTraversedByUser: () => e(e => ({
                    pagesTraversedByUser: e.pagesTraversedByUser + 1
                }))
            }))
        },
        16373: (e, t, i) => {
            i.d(t, {
                z: () => l
            });
            var n = i(14232),
                a = i(50859),
                s = i(2661),
                o = i(92719),
                r = i(47765),
                c = i(35891);
            let l = () => {
                let [e, t] = (0, n.useState)([]), {
                    consumeClientStackItems: i
                } = (0, o.n)(), {
                    fetchedUserInfo: l,
                    userInfo: d,
                    error: u
                } = (0, n.useContext)(c.cy), h = (0, r.aP)(), {
                    pushEvent: g
                } = (0, s.L)(), m = (0, n.useCallback)((e = {}) => {
                    let i = { ...e,
                        pageCategory: e.pageCategory || h.analyticsGaName
                    };
                    t(e => [...e, i])
                }, [h.analyticsGaName]);
                return (0, n.useEffect)(() => {
                    e.length && (l || u) && (e.forEach(e => {
                        (({
                            pageCategory: e,
                            additionalData: t = {},
                            eventParams: n
                        }) => {
                            ["category", "collection-page", "payment", "checkout"].includes(e) || g({
                                eventType: "view",
                                eventName: e || "view",
                                ...n && {
                                    eventParams: n
                                }
                            }), (0, a.j)(e, t, d), i(["trackRegistrationComplete", "trackUserLogout", "trackUserLogin", "login", "registration"])
                        })(e)
                    }), t([]))
                }, [e.length, l, u]), {
                    track: m
                }
            }
        },
        20019: (e, t, i) => {
            i.d(t, {
                M: () => o,
                O: () => r
            });
            var n = i(37876),
                a = i(14232),
                s = i(90511);
            let o = (0, a.createContext)({
                    uvert: s.v.GeneralUser
                }),
                r = ({
                    children: e,
                    uvert: t
                }) => (0, n.jsx)(o.Provider, {
                    value: {
                        uvert: t
                    },
                    children: e
                })
        },
        50859: (e, t, i) => {
            i.d(t, {
                j: () => a
            });
            var n = i(22884);
            let a = (e, t, i) => {
                let a = new Date().toISOString(),
                    s = {
                        event: "contentLoad",
                        action: "Pageview",
                        pageCat: e,
                        timestamp: a.slice(0, a.length - 1),
                        ...t
                    };
                i ? .account.isUserLoggedIn && (s.userID = i.identity.deprecatedId, s.subscriber = i ? .account.subscriptionActive ? "active" : "inactive", s.uOrds = i ? .history.ordersCreated, s.uDis = i ? .history.platesBought), (0, n.u)(s)
            }
        },
        77518: (e, t, i) => {
            i.d(t, {
                A: () => V
            });
            var n = i(37876),
                a = i(14232),
                s = i(56413),
                o = i(67768);
            i(18847);
            var r = i(47321),
                c = i(62056),
                l = i(2443),
                d = i(9054),
                u = i(67911),
                h = i(83736),
                g = i(61817),
                m = i(38847),
                v = i(8735),
                f = i(10698);
            let y = ({
                countryCode: e
            }) => {
                let {
                    setCountryCode: t
                } = (0, f.C)();
                return (0, a.useEffect)(() => {
                    t({
                        countryCode: e,
                        shouldUpdateContext: !1
                    })
                }, []), null
            };
            var p = i(67385),
                C = i(14e3),
                _ = i(1833),
                w = i(93878),
                b = i(16903),
                x = i(62120),
                I = i(62564),
                E = i(73678),
                j = i(29454),
                S = i(22884);
            let B = ({
                userVertical: e,
                userEngagement: t
            }) => {
                (0, S.u)({
                    event: "user_data",
                    user_vertical: e,
                    user_engagement_level: t
                })
            };
            var L = i(84810);
            let T = "user-vertical";
            var O = i(74359),
                W = i(98461),
                U = i(35891),
                k = i(87050);
            let N = ["userVertical"];
            var A = i(90511);
            let P = () => {
                let e = (0, C.usePathname)(),
                    {
                        data: t,
                        isError: i,
                        error: n,
                        refetch: s
                    } = (() => {
                        let {
                            fetchedUserInfo: e
                        } = (0, a.useContext)(U.cy);
                        return (0, O.I)({
                            queryKey: N,
                            queryFn: () => k.$y.getUsersVerticalV2((0, W.R)()),
                            enabled: e,
                            staleTime: 1e3,
                            retry: !1
                        })
                    })(),
                    {
                        userInfo: o
                    } = (0, a.useContext)(U.cy),
                    r = o ? .account.engagement.type,
                    c = (0, a.useRef)(!1);
                return (0, a.useEffect)(() => {
                    c.current ? s() : c.current = !0
                }, [e]), (0, a.useEffect)(() => {
                    void 0 !== t && void 0 !== r && (t.type ? (j.A.set(T, t.type, {
                        domain: L.ConfigPublic.VerticalizationCookieDomain
                    }), B({
                        userVertical: t.type,
                        userEngagement: r
                    })) : (j.A.remove(T, {
                        domain: L.ConfigPublic.VerticalizationCookieDomain
                    }), B({
                        userVertical: A.v.GeneralUser,
                        userEngagement: r
                    })))
                }, [t, r]), (0, a.useEffect)(() => {
                    i && console.error(`Unable to update user vertical: ${n}`)
                }, [i, n]), null
            };
            var D = i(20019),
                H = i(36256);
            let z = () => null,
                V = ({
                    gitInfo: e,
                    children: t,
                    uvert: i,
                    countryCode: f,
                    featureFlags: j,
                    tpid: S,
                    abTests: B
                }) => {
                    let L, T, [O] = (0, a.useState)(() => new s.E(h.K));
                    return L = (0, C.usePathname)(), T = (0, _.o)(e => e.incrementPagesTraversedByUser), (0, a.useEffect)(() => {
                        T()
                    }, [L]), (0, b.p)(), (0, a.useEffect)(() => {
                        window.localStorage.removeItem("elyGtmUserSession"), window.localStorage.removeItem("recentlyViewed"), (0, c.s)()
                    }, []), (0, n.jsx)(d.A, {
                        children: (0, n.jsxs)(o.Ht, {
                            client: O,
                            children: [(0, n.jsxs)(p.y, {
                                countryCode: f,
                                children: [(0, n.jsx)(y, {
                                    countryCode: f
                                }), (0, n.jsx)(D.O, {
                                    uvert: i,
                                    children: (0, n.jsx)(r.td, {
                                        value: B,
                                        children: (0, n.jsx)(U.OJ, {
                                            children: (0, n.jsx)(g.J, {
                                                children: (0, n.jsxs)(m.j$, {
                                                    value: j,
                                                    children: [(0, n.jsx)(w.c, {}), (0, n.jsx)(x.H, {}), (0, n.jsx)(P, {}), (0, n.jsx)(I.A, {
                                                        countryCode: f
                                                    }), (0, n.jsxs)(H.Uc, {
                                                        children: [(0, n.jsx)(u.E, {}), (0, n.jsx)(l.s, {}), (0, n.jsx)(v.i, {
                                                            children: t
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), (0, n.jsx)(z, {
                                initialIsOpen: !1
                            }), e && (0, n.jsx)(E.DynamicGitInfo, {
                                gitInfo: e,
                                tpid: S ? ? null
                            })]
                        })
                    })
                }
        },
        93092: (e, t, i) => {
            i.d(t, {
                Xq: () => h,
                dH: () => u
            });
            var n = i(37876),
                a = i(14232),
                s = i(45105),
                o = i.n(s),
                r = i(84810),
                c = i(90413),
                l = i(35891);
            let d = () => {
                    let {
                        userInfo: e
                    } = (0, a.useContext)(l.cy), t = (0, c.A)();
                    (0, a.useEffect)(() => {
                        if (e && t) {
                            let t = (e => {
                                let {
                                    identity: t,
                                    account: i
                                } = e, n = {};
                                if (i ? .customerId && (n.distinct_id = i.customerId), t ? .email && (n.email = t.email), t ? .firstName || t ? .lastName) {
                                    let e = [t ? .firstName, t ? .lastName].filter(Boolean);
                                    e.length > 0 && (n.name = e.join(" "))
                                }
                                return Object.keys(n).length > 0 ? n : null
                            })(e);
                            t && (document.tidioIdentify = t)
                        }
                    }, [e, t]);
                    let i = r.ConfigPublic.CustomerSupportBotId;
                    return i ? r.ConfigPublic.CustomerSupportBotTidioEnabled ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(o(), {
                            id: "customer-support-bot",
                            src: "//code.tidio.co/j3lbrwz4prhgtaz2xbqocyrksycal54o.js",
                            strategy: "lazyOnload"
                        }), (0, n.jsx)(o(), {
                            id: "customer-support-bot-tidio",
                            strategy: "afterInteractive",
                            children: `// Tidio programmatic control functions
    window.startChat = function(action) {
        // Wait for Tidio to be ready
        if (typeof tidioChatApi !== 'undefined') {
            initializeTidioChat(action);
        } else {
            // Wait for tidioChat-ready event
            document.addEventListener('tidioChat-ready', function() {
                initializeTidioChat(action);
            });
        }
    };

    function initializeTidioChat(action) {
        // Open the chat widget
        tidioChatApi.open();
        
        // Send a predefined message based on the action
        const actionMessages = {
            'FAQ_SHIPPING_STATUS_Check-order-status_BUTTON': 'Hi! I need help checking my order status.',
            'FAQ_ORDER_DOCUMENTS_Did-not-receive-order-confirmation_BUTTON': "Hi! I didn't receive my order confirmation email.",
            'FAQ_ORDER_CHANGES_How-to-cancel-order_BUTTON': 'Hi! I need to cancel my order.',
            'FAQ_SHIPPING_CHANGES_Change-of-shipping-address_BUTTON': 'Hi! I need to change my shipping address.',
            'FAQ_ORDER_DOCUMENTS_Did-not-receive-invoice_BUTTON': 'Hi! I need to request an invoice for my order.',
            'WELCOME': 'Hi! I have a question.'
        };

        const message = actionMessages[action] || 'Hi! I need help.';
        
        // Send the message as if it came from the visitor
        setTimeout(() => {
            if (tidioChatApi && tidioChatApi.messageFromVisitor) {
                tidioChatApi.messageFromVisitor(message);
            }
        }, 500); // Small delay to ensure chat is fully opened
    }

    // Disable/enable buttons based on chat state (similar to LiveChat functionality)
    function changeButtonState(disabled) {
        const buttons = document.getElementsByClassName("k2botsStartButton");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = disabled;
        }
    }

    // Listen for Tidio events
    document.addEventListener('tidioChat-ready', function() {
        // Chat is ready, enable buttons
        changeButtonState(false);
    });`
                        })]
                    }) : (0, n.jsx)(o(), {
                        id: "customer-support-bot",
                        strategy: "afterInteractive",
                        children: `
    window.__lc=window.__lc || {};
    window.__lc.license=${i};
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
    function changeButtonState(t){var e,i=document.getElementsByClassName("k2botsStartButton");for(e=0;e<i.length;e++)i[e].disabled=t}function onReady(t){var e=LiveChatWidget.get("customer_data");"maximized"==t.state.visibility?(document.getElementById("chat-widget-container").style.width="482px",document.getElementById("chat-widget-container").style.height="882px",changeButtonState(!0)):"browsing"==e.status?changeButtonState(!1):changeButtonState(!0),document.getElementById("chat-widget-container").style.zIndex="99990"}function onVisibilityChanged(t){switch(t.visibility){case"maximized":document.getElementById("chat-widget-container").style.width="482px",document.getElementById("chat-widget-container").style.height="882px",changeButtonState(!0)}}function onCustomerStatusChanged(t){switch(LiveChatWidget.call("update_session_variables",{welcome_event:"WELCOME"}),t.status){case"queued":case"chatting":case"invited":changeButtonState(!0);break;case"browsing":changeButtonState(!1)}}function startChat(t){var e=LiveChatWidget.get("state");"browsing"==LiveChatWidget.get("customer_data").status&&("maximized"==e.visibility?(LiveChatWidget.call("destroy"),window.__lc=window.__lc||{},window.__lc.license=${i},function(t,e,i){function n(t){return a._h?a._h.apply(null,t):a._q.push(t)}var a={_q:[],_h:null,_v:"2.0",on:function(){n(["on",i.call(arguments)])},once:function(){n(["once",i.call(arguments)])},off:function(){n(["off",i.call(arguments)])},get:function(){if(!a._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return n(["get",i.call(arguments)])},call:function(){n(["call",i.call(arguments)])},init:function(){var t=e.createElement("script");t.async=!0,t.type="text/javascript",t.src="https://cdn.livechatinc.com/tracking.js",e.head.appendChild(t)}};!t.__lc.asyncInit&&a.init(),t.LiveChatWidget=t.LiveChatWidget||a}(window,document,[].slice),LiveChatWidget.call("update_session_variables",{welcome_event:t}),LiveChatWidget.on("ready",onReady),LiveChatWidget.on("visibility_changed",onVisibilityChanged),LiveChatWidget.on("customer_status_changed",onCustomerStatusChanged)):(LiveChatWidget.call("update_session_variables",{welcome_event:t}),LiveChatWidget.call("maximize")))}LiveChatWidget.on("ready",onReady),LiveChatWidget.on("visibility_changed",onVisibilityChanged),LiveChatWidget.on("customer_status_changed",onCustomerStatusChanged);
        `
                    }) : null
                },
                u = () => (0, n.jsx)(d, {}),
                h = () => {
                    let e = r.ConfigPublic.CustomerSupportBotId;
                    return e ? (0, n.jsx)("noscript", {
                        dangerouslySetInnerHTML: {
                            __html: `<a href="https://www.livechatinc.com/chat-with/${e}/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>`
                        }
                    }) : null
                }
        }
    }
]);
//#
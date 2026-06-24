(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3877, 5270], {
        1833: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => a
            });
            let a = (0, r(8106).v)(e => ({
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
        3320: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var a = r(37876),
                s = r(10769),
                l = r(14619),
                i = r(87050);
            let n = {
                    [i.eq.VISA]: {
                        alt: "visa icon",
                        src: "/icons/payment-providers/visa.svg"
                    },
                    [i.eq.MASTERCARD]: {
                        alt: "mastercard icon",
                        src: "/icons/payment-providers/mastercard.svg"
                    },
                    [i.eq.DISCOVER]: {
                        alt: "discover icon",
                        src: "/icons/payment-providers/discover.svg"
                    },
                    [i.eq.AMEX]: {
                        alt: "amex icon",
                        src: "/icons/payment-providers/amex.svg"
                    },
                    [i.eq.PAYPAL]: {
                        alt: "paypal icon",
                        src: "/icons/payment-providers/paypal.svg"
                    },
                    [i.eq.PAYPAL_SECURE]: {
                        alt: "paypal secure icon",
                        src: "/icons/payment-providers/paypal2.svg"
                    },
                    [i.eq.KLARNA]: {
                        alt: "klarna icon",
                        src: "/icons/payment-providers/klarna.png"
                    },
                    [i.eq.GPAY]: {
                        alt: "google pay icon",
                        src: "/icons/payment-providers/gpay.svg"
                    },
                    [i.eq.CUP]: {
                        alt: "union pay icon",
                        src: "/icons/payment-providers/cup.svg"
                    },
                    [i.eq.DINERS]: {
                        alt: "diners icon",
                        src: "/icons/payment-providers/diners.svg"
                    },
                    [i.eq.BANK_TRANSFER]: {
                        alt: "bank transfer icon",
                        src: "/icons/payment-providers/directEbanking.svg"
                    },
                    [i.eq.EPS]: {
                        alt: "eps icon",
                        src: "/icons/payment-providers/eps.svg"
                    },
                    [i.eq.BCMC]: {
                        alt: "bcmc icon",
                        src: "/icons/payment-providers/bcmc.svg"
                    },
                    [i.eq.TRUSTLY]: {
                        alt: "trustly icon",
                        src: "/icons/payment-providers/trustly.svg"
                    },
                    [i.eq.GIRO]: {
                        alt: "giro pay icon",
                        src: "/icons/payment-providers/giropay.svg"
                    },
                    [i.eq.IDEAL]: {
                        alt: "iDeal icon",
                        src: "/icons/payment-providers/ideal.svg"
                    },
                    [i.eq.APPLE_PAY]: {
                        alt: "apple pay icon",
                        src: "/icons/payment-providers/applepay.svg"
                    }
                },
                o = ({
                    className: e,
                    paymentMethods: t
                }) => {
                    let r = t.map(e => n[e]);
                    return (0, a.jsx)("div", {
                        className: (0, l.cn)("flex flex-wrap justify-center gap-2", e),
                        children: r.map((e, t) => (0, a.jsx)("img", {
                            alt: e.alt,
                            className: "h-[var(--payment-method-height,28px)] w-auto",
                            "data-testid": "payment-method",
                            draggable: !1,
                            loading: "lazy",
                            src: (0, s.v9)({
                                assetPath: e.src
                            }).src
                        }, t))
                    })
                }
        },
        15874: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => s
            });
            var a = r(22884);
            let s = e => {
                (0, a.u)({
                    event: "view_promotion",
                    ecommerce: e
                })
            }
        },
        16373: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => d
            });
            var a = r(14232),
                s = r(50859),
                l = r(2661),
                i = r(92719),
                n = r(47765),
                o = r(35891);
            let d = () => {
                let [e, t] = (0, a.useState)([]), {
                    consumeClientStackItems: r
                } = (0, i.n)(), {
                    fetchedUserInfo: d,
                    userInfo: c,
                    error: u
                } = (0, a.useContext)(o.cy), p = (0, n.aP)(), {
                    pushEvent: m
                } = (0, l.L)(), h = (0, a.useCallback)((e = {}) => {
                    let r = { ...e,
                        pageCategory: e.pageCategory || p.analyticsGaName
                    };
                    t(e => [...e, r])
                }, [p.analyticsGaName]);
                return (0, a.useEffect)(() => {
                    e.length && (d || u) && (e.forEach(e => {
                        (({
                            pageCategory: e,
                            additionalData: t = {},
                            eventParams: a
                        }) => {
                            ["category", "collection-page", "payment", "checkout"].includes(e) || m({
                                eventType: "view",
                                eventName: e || "view",
                                ...a && {
                                    eventParams: a
                                }
                            }), (0, s.j)(e, t, c), r(["trackRegistrationComplete", "trackUserLogout", "trackUserLogin", "login", "registration"])
                        })(e)
                    }), t([]))
                }, [e.length, d, u]), {
                    track: h
                }
            }
        },
        20019: (e, t, r) => {
            "use strict";
            r.d(t, {
                M: () => i,
                O: () => n
            });
            var a = r(37876),
                s = r(14232),
                l = r(90511);
            let i = (0, s.createContext)({
                    uvert: l.v.GeneralUser
                }),
                n = ({
                    children: e,
                    uvert: t
                }) => (0, a.jsx)(i.Provider, {
                    value: {
                        uvert: t
                    },
                    children: e
                })
        },
        20147: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => s
            });
            var a = r(22884);
            let s = e => {
                (0, a.u)({
                    event: "select_promotion",
                    ecommerce: e
                })
            }
        },
        25270: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => x
            });
            var a = r(37876),
                s = r(36256),
                l = r(14619),
                i = r(54587),
                n = r.n(i),
                o = r(10769);
            let d = [{
                alt: "dhl icon",
                src: "/images/footer/providers/dhl.svg"
            }, {
                alt: "ups icon",
                src: "/images/footer/providers/ups.svg"
            }, {
                alt: "fedex icon",
                src: "/images/footer/providers/fedex.svg"
            }];
            var c = r(14232);
            let u = (0, c.forwardRef)(({
                children: e,
                className: t,
                ...r
            }, s) => (0, a.jsx)("div", {
                className: (0, l.cn)("mx-[17%]", "pt-4", "flex", "flex-wrap", "justify-center", "gap-2", t),
                "data-testid": "risk-reducer-media-row",
                ref: s,
                ...r,
                children: e
            }));
            u.displayName = "RiskReducerMediaRow";
            let p = (0, c.forwardRef)(({
                children: e,
                className: t,
                description: r,
                title: s,
                ...i
            }, n) => (0, a.jsxs)("div", {
                className: (0, l.cn)("p-6", "bg-neutral-100", "rounded-sm", "md:flex-1", "md:rounded-md", t),
                "data-testid": "risk-reducer",
                ref: n,
                ...i,
                children: [(0, a.jsx)("h4", {
                    className: (0, l.cn)("text-center", "text-heading-h4"),
                    children: s
                }), r ? (0, a.jsx)("div", {
                    className: (0, l.cn)("text-center", "mt-4", "mx-12", "text-body-sm", "text-text-secondary"),
                    children: r
                }) : null, e]
            }));
            p.displayName = "RiskReducer";
            let m = () => (0, a.jsx)(p, {
                    className: "xl:order-1",
                    description: "At your door in a few days",
                    title: "Fast delivery",
                    children: (0, a.jsx)(u, {
                        children: d.map((e, t) => (0, a.jsx)(n(), {
                            alt: e.alt,
                            className: "h-[32px] w-[48px] object-contain",
                            height: 32,
                            src: (0, o.qH)(e.src),
                            unoptimized: !0,
                            width: 48
                        }, t))
                    })
                }),
                h = () => (0, a.jsx)(p, {
                    className: "xl:order-3",
                    description: "Easy return, no questions asked",
                    title: "100 days for return",
                    children: (0, a.jsx)(n(), {
                        alt: "clock icon",
                        className: "mx-auto mt-6 block h-[64px]",
                        height: 64,
                        src: (0, o.qH)("/images/footer/return_clock.svg"),
                        unoptimized: !0,
                        width: 64
                    })
                });
            var g = r(3320);
            let f = ({
                    paymentMethods: e
                }) => (0, a.jsx)(p, {
                    className: "xl:order-2",
                    description: "100% Secure payment with 256-bit SSL Encryption",
                    title: "Secure payments",
                    children: (0, a.jsx)(g.A, {
                        className: "mt-4 mx-[17%] [--payment-method-height:26px]",
                        paymentMethods: e
                    })
                }),
                x = ({
                    paymentMethods: e,
                    className: t
                }) => (0, a.jsx)(s.mc, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: (0, l.cn)("col-span-full flex flex-col justify-start gap-4", "lg:flex-row xl:gap-6", t),
                        "data-testid": "footer-columns-section",
                        children: [(0, a.jsx)(f, {
                            paymentMethods: e
                        }), (0, a.jsx)(m, {}), (0, a.jsx)(h, {})]
                    })
                })
        },
        30983: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => p
            });
            var a = r(37876),
                s = r(14232),
                l = r(69241),
                i = r(90413),
                n = r(30305),
                o = r(10769),
                d = r(57845),
                c = r.n(d);
            let u = ({
                src: e,
                preload: t,
                responsive: r,
                poster: d,
                autoPlay: u,
                className: p,
                mobileSize: m,
                desktopSize: h,
                ref: g,
                ...f
            }) => {
                let x = (0, i.A)(),
                    {
                        isTabletOrDesktop: v
                    } = (0, n.Q)(),
                    [y, w] = (0, s.useState)(null),
                    b = (0, s.useMemo)(() => {
                        let e;
                        return (e = v ? h : m) ? {
                            width: e.width,
                            ...e.height && {
                                height: e.height
                            }
                        } : {
                            width: v ? 1080 : 720
                        }
                    }, [v, h, m]),
                    j = (0, s.useMemo)(() => d || (x && e ? (0, o.$4)(e, { ...b,
                        videoPoster: !0
                    }) : void 0), [d, x, e, b]),
                    _ = j ? "" : "#t=0.1";
                return (0, s.useEffect)(() => {
                    let e = async () => {
                        g && "current" in g && g.current && await g.current.play()
                    };
                    !y || u && e()
                }, [u, y, g]), (0, s.useEffect)(() => {
                    x && w(b)
                }, [x, b]), (0, a.jsx)("video", {
                    autoPlay: !1,
                    className: (0, l.A)(c().video, p, {
                        [c().responsive]: r
                    }),
                    playsInline: !0,
                    poster: j,
                    preload: t || "metadata",
                    ref: g,
                    src: y ? `${(0,o.$4)(e,y)}${_}` : void 0,
                    ...f
                })
            };
            u.displayName = "SpeedSizeVideoRaw";
            let p = u
        },
        34645: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n,
                R: () => i
            });
            var a = r(37876),
                s = r(14232);
            let l = (0, s.createContext)(null),
                i = ({
                    children: e,
                    value: t
                }) => (0, a.jsx)(l.Provider, {
                    value: t,
                    children: e
                }),
                n = () => {
                    let e = (0, s.useContext)(l);
                    if (!e) throw Error("useHomepageContext has to be used within <HomepageContextProvider>");
                    return e
                }
        },
        36573: (e, t, r) => {
            "use strict";
            r.d(t, {
                Dj: () => l,
                Go: () => o,
                U8: () => n,
                ZF: () => i
            });
            var a = r(31850),
                s = r(16909);
            let l = (e, t, r, a) => `${e}-${t}-${r}-${a}`,
                i = e => e.split("/").slice(-2).filter(e => e).join("/"),
                n = () => {
                    let e = (0, a.qg)(window.navigator.userAgent).isMobile ? "mobile" : "desktop",
                        t = (0, s.UN)() ? "Retina" : "Standard";
                    return `${e}${t}`
                },
                o = e => e.split("/").pop() || e
        },
        37253: e => {
            e.exports = {
                wrapper: "Drawer_wrapper__DWKm0",
                wrapperOpened: "Drawer_wrapperOpened__97itz",
                editHtmlDrawer: "Drawer_editHtmlDrawer__qr4PB",
                editHeaderDrawer: "Drawer_editHeaderDrawer__H9KHI",
                scrollBarWidth: "Drawer_scrollBarWidth__jD0qL",
                drawerContainer: "Drawer_drawerContainer__9_JvQ",
                drawerContainerFullHeight: "Drawer_drawerContainerFullHeight__ditIl",
                clientDrawer: "Drawer_clientDrawer__TZnJO",
                drawerContainerOpened: "Drawer_drawerContainerOpened__ROzgu",
                drawerBox: "Drawer_drawerBox___klHe",
                drawerHeader: "Drawer_drawerHeader__Q7auq",
                closeIcon: "Drawer_closeIcon__P4kSj",
                drawerHeaderScrolled: "Drawer_drawerHeaderScrolled__IVInN",
                drawerHeaderWithButtons: "Drawer_drawerHeaderWithButtons__Gvlwg",
                drawerHeaderNoHeader: "Drawer_drawerHeaderNoHeader__Mlnr4",
                drawerTitle: "Drawer_drawerTitle__4Nld3",
                drawerTitleIcon: "Drawer_drawerTitleIcon__AtTbd",
                drawerTitleText: "Drawer_drawerTitleText__JedG5",
                drawerContent: "Drawer_drawerContent__JjKAd",
                drawerBackdrop: "Drawer_drawerBackdrop___Grpg",
                drawerBackdropOpened: "Drawer_drawerBackdropOpened__ojDvq",
                drawerFooter: "Drawer_drawerFooter__Vwi59"
            }
        },
        40625: (e, t, r) => {
            "use strict";
            r.d(t, {
                Wx: () => d
            });
            var a = r(14232),
                s = Object.defineProperty,
                l = new Map,
                i = new WeakMap,
                n = 0,
                o = void 0;

            function d({
                threshold: e,
                delay: t,
                trackVisibility: r,
                rootMargin: s,
                root: c,
                triggerOnce: u,
                skip: p,
                initialInView: m,
                fallbackInView: h,
                onChange: g
            } = {}) {
                var f;
                let [x, v] = a.useState(null), y = a.useRef(g), [w, b] = a.useState({
                    inView: !!m,
                    entry: void 0
                });
                y.current = g, a.useEffect(() => {
                    let a;
                    if (!p && x) return a = function(e, t, r = {}, a = o) {
                        if (void 0 === window.IntersectionObserver && void 0 !== a) {
                            let s = e.getBoundingClientRect();
                            return t(a, {
                                isIntersecting: a,
                                target: e,
                                intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
                                time: 0,
                                boundingClientRect: s,
                                intersectionRect: s,
                                rootBounds: s
                            }), () => {}
                        }
                        let {
                            id: s,
                            observer: d,
                            elements: c
                        } = function(e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                    var r;
                                    return `${t}_${"root"===t?!(r=e.root)?"0":(i.has(r)||(n+=1,i.set(r,n.toString())),i.get(r)):e[t]}`
                                }).toString(),
                                r = l.get(t);
                            if (!r) {
                                let a, s = new Map,
                                    i = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var r;
                                            let l = t.isIntersecting && a.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = l), null == (r = s.get(t.target)) || r.forEach(e => {
                                                e(l, t)
                                            })
                                        })
                                    }, e);
                                a = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
                                    id: t,
                                    observer: i,
                                    elements: s
                                }, l.set(t, r)
                            }
                            return r
                        }(r), u = c.get(e) || [];
                        return c.has(e) || c.set(e, u), u.push(t), d.observe(e),
                            function() {
                                u.splice(u.indexOf(t), 1), 0 === u.length && (c.delete(e), d.unobserve(e)), 0 === c.size && (d.disconnect(), l.delete(s))
                            }
                    }(x, (e, t) => {
                        b({
                            inView: e,
                            entry: t
                        }), y.current && y.current(e, t), t.isIntersecting && u && a && (a(), a = void 0)
                    }, {
                        root: c,
                        rootMargin: s,
                        threshold: e,
                        trackVisibility: r,
                        delay: t
                    }, h), () => {
                        a && a()
                    }
                }, [Array.isArray(e) ? e.toString() : e, x, c, s, u, p, r, h, t]);
                let j = null == (f = w.entry) ? void 0 : f.target,
                    _ = a.useRef(void 0);
                x || !j || u || p || _.current === j || (_.current = j, b({
                    inView: !!m,
                    entry: void 0
                }));
                let k = [v, w.inView, w.entry];
                return k.ref = k[0], k.inView = k[1], k.entry = k[2], k
            }
            a.Component
        },
        49503: (e, t, r) => {
            "use strict";
            r.d(t, {
                D: () => n
            });
            var a = r(37876),
                s = r(77328),
                l = r.n(s),
                i = r(10769);
            let n = ({
                imageSets: e,
                imageFallbackCoreUrl: t,
                className: r,
                width: s,
                height: n,
                onLoaded: o,
                onError: d,
                priority: c = "auto",
                loading: u = "eager",
                alt: p = "artwork"
            }) => {
                let m = "high" === c && "lazy" !== u;
                return (0, a.jsxs)(a.Fragment, {
                    children: [m ? (0, a.jsx)(l(), {
                        children: e.map((e, t) => (0, a.jsx)("link", {
                            as: "image",
                            fetchPriority: "high",
                            imageSizes: e.srcSet.sizes,
                            imageSrcSet: e.srcSet.srcSet,
                            media: e.media,
                            rel: "preload"
                        }, `preload-${t}`))
                    }) : null, (0, a.jsxs)("picture", {
                        className: r,
                        children: [e.map((e, t) => (0, a.jsx)("source", {
                            "data-testid": "picture-source",
                            media: e.media,
                            sizes: e.srcSet.sizes,
                            srcSet: e.srcSet.srcSet
                        }, t)), (0, a.jsx)("img", {
                            alt: p,
                            className: r,
                            "data-pin-nopin": !0,
                            "data-testid": "picture-image",
                            draggable: "false",
                            fetchPriority: c,
                            height: n,
                            loading: u,
                            onError: d,
                            onLoad: o,
                            src: (0, i.v9)({
                                assetPath: `${t}`
                            }).src,
                            width: s
                        })]
                    })]
                })
            }
        },
        50859: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => s
            });
            var a = r(22884);
            let s = (e, t, r) => {
                let s = new Date().toISOString(),
                    l = {
                        event: "contentLoad",
                        action: "Pageview",
                        pageCat: e,
                        timestamp: s.slice(0, s.length - 1),
                        ...t
                    };
                r ? .account.isUserLoggedIn && (l.userID = r.identity.deprecatedId, l.subscriber = r ? .account.subscriptionActive ? "active" : "inactive", l.uOrds = r ? .history.ordersCreated, l.uDis = r ? .history.platesBought), (0, a.u)(l)
            }
        },
        57845: e => {
            e.exports = {
                responsive: "SpeedSizeVideo_responsive__KXRrR",
                container: "SpeedSizeVideo_container__JRhvK",
                mobilePlaceholderImageContainer: "SpeedSizeVideo_mobilePlaceholderImageContainer__eQltb",
                pauseContainer: "SpeedSizeVideo_pauseContainer__3QmX9",
                playIcon: "SpeedSizeVideo_playIcon__mwFmk",
                playButton: "SpeedSizeVideo_playButton__P2ffR",
                video: "SpeedSizeVideo_video__qA3su"
            }
        },
        64968: (e, t, r) => {
            "use strict";
            r.d(t, {
                e: () => d,
                l: () => o
            });
            var a = r(37876),
                s = r(14232),
                l = r(69241),
                i = r(37253),
                n = r.n(i);
            let o = (0, s.createContext)({}),
                d = ({
                    children: e
                }) => {
                    let [t, r] = (0, s.useState)(!1), [i, d] = (0, s.useState)(!1), [c, u] = (0, s.useState)(0), p = (0, s.useRef)(null), m = (0, s.useRef)(null), h = (0, s.useRef)(null);
                    return (0, s.useEffect)(() => {
                        u(window.innerWidth - document.documentElement.clientWidth)
                    }, []), (0, s.useEffect)(() => {
                        let e = document.getElementById("main-container");
                        document.documentElement.style.setProperty("--scrollBarWidth", `${c}px`), t ? (e && e.classList.add(n().scrollBarWidth), document.body.classList.add(n().editHtmlDrawer), h.current ? .classList.add(n().editHeaderDrawer, n().scrollBarWidth)) : (e && e.classList.remove(n().scrollBarWidth), document.body.classList.remove(n().editHtmlDrawer), h.current ? .classList.remove(n().editHeaderDrawer, n().scrollBarWidth))
                    }, [t, c]), (0, a.jsxs)(o.Provider, {
                        value: {
                            setHeaderRef: e => {
                                h.current = e.current
                            },
                            setIsDrawerFullHeight: d,
                            handleBackdropClose: () => r(!1),
                            handleBackdropOpen: () => r(!0),
                            drawerContainerRef: p,
                            drawerBackdropRef: m
                        },
                        children: [e, (0, a.jsx)("div", {
                            className: (0, l.A)(n().drawerContainer, n().clientDrawer, {
                                [n().drawerContainerOpened]: t,
                                [n().drawerContainerFullHeight]: i
                            }),
                            "data-testid": "drawer-container",
                            ref: p
                        }), (0, a.jsx)("div", {
                            className: (0, l.A)(n().drawerBackdrop, {
                                [n().drawerBackdropOpened]: t
                            }),
                            ref: m
                        })]
                    })
                }
        },
        68873: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var a = r(22884);
            let s = ({
                elementId: e,
                elementVariant: t = "none",
                additionalData: r
            }) => {
                let s = {
                    event: "element_impression",
                    element_id: e,
                    element_variant: t,
                    ...r
                };
                (0, a.u)(s)
            }
        },
        77518: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => F
            });
            var a = r(37876),
                s = r(14232),
                l = r(56413),
                i = r(67768);
            r(18847);
            var n = r(47321),
                o = r(62056),
                d = r(2443),
                c = r(9054),
                u = r(67911),
                p = r(83736),
                m = r(61817),
                h = r(38847),
                g = r(8735),
                f = r(10698);
            let x = ({
                countryCode: e
            }) => {
                let {
                    setCountryCode: t
                } = (0, f.C)();
                return (0, s.useEffect)(() => {
                    t({
                        countryCode: e,
                        shouldUpdateContext: !1
                    })
                }, []), null
            };
            var v = r(67385),
                y = r(14e3),
                w = r(1833),
                b = r(93878),
                j = r(16903),
                _ = r(62120),
                k = r(62564),
                S = r(73678),
                C = r(29454),
                N = r(22884);
            let I = ({
                userVertical: e,
                userEngagement: t
            }) => {
                (0, N.u)({
                    event: "user_data",
                    user_vertical: e,
                    user_engagement_level: t
                })
            };
            var P = r(84810);
            let A = "user-vertical";
            var D = r(74359),
                E = r(98461),
                R = r(35891),
                z = r(87050);
            let L = ["userVertical"];
            var $ = r(90511);
            let O = () => {
                let e = (0, y.usePathname)(),
                    {
                        data: t,
                        isError: r,
                        error: a,
                        refetch: l
                    } = (() => {
                        let {
                            fetchedUserInfo: e
                        } = (0, s.useContext)(R.cy);
                        return (0, D.I)({
                            queryKey: L,
                            queryFn: () => z.$y.getUsersVerticalV2((0, E.R)()),
                            enabled: e,
                            staleTime: 1e3,
                            retry: !1
                        })
                    })(),
                    {
                        userInfo: i
                    } = (0, s.useContext)(R.cy),
                    n = i ? .account.engagement.type,
                    o = (0, s.useRef)(!1);
                return (0, s.useEffect)(() => {
                    o.current ? l() : o.current = !0
                }, [e]), (0, s.useEffect)(() => {
                    void 0 !== t && void 0 !== n && (t.type ? (C.A.set(A, t.type, {
                        domain: P.ConfigPublic.VerticalizationCookieDomain
                    }), I({
                        userVertical: t.type,
                        userEngagement: n
                    })) : (C.A.remove(A, {
                        domain: P.ConfigPublic.VerticalizationCookieDomain
                    }), I({
                        userVertical: $.v.GeneralUser,
                        userEngagement: n
                    })))
                }, [t, n]), (0, s.useEffect)(() => {
                    r && console.error(`Unable to update user vertical: ${a}`)
                }, [r, a]), null
            };
            var T = r(20019),
                M = r(36256);
            let V = () => null,
                F = ({
                    gitInfo: e,
                    children: t,
                    uvert: r,
                    countryCode: f,
                    featureFlags: C,
                    tpid: N,
                    abTests: I
                }) => {
                    let P, A, [D] = (0, s.useState)(() => new l.E(p.K));
                    return P = (0, y.usePathname)(), A = (0, w.o)(e => e.incrementPagesTraversedByUser), (0, s.useEffect)(() => {
                        A()
                    }, [P]), (0, j.p)(), (0, s.useEffect)(() => {
                        window.localStorage.removeItem("elyGtmUserSession"), window.localStorage.removeItem("recentlyViewed"), (0, o.s)()
                    }, []), (0, a.jsx)(c.A, {
                        children: (0, a.jsxs)(i.Ht, {
                            client: D,
                            children: [(0, a.jsxs)(v.y, {
                                countryCode: f,
                                children: [(0, a.jsx)(x, {
                                    countryCode: f
                                }), (0, a.jsx)(T.O, {
                                    uvert: r,
                                    children: (0, a.jsx)(n.td, {
                                        value: I,
                                        children: (0, a.jsx)(R.OJ, {
                                            children: (0, a.jsx)(m.J, {
                                                children: (0, a.jsxs)(h.j$, {
                                                    value: C,
                                                    children: [(0, a.jsx)(b.c, {}), (0, a.jsx)(_.H, {}), (0, a.jsx)(O, {}), (0, a.jsx)(k.A, {
                                                        countryCode: f
                                                    }), (0, a.jsxs)(M.Uc, {
                                                        children: [(0, a.jsx)(u.E, {}), (0, a.jsx)(d.s, {}), (0, a.jsx)(g.i, {
                                                            children: t
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), (0, a.jsx)(V, {
                                initialIsOpen: !1
                            }), e && (0, a.jsx)(S.DynamicGitInfo, {
                                gitInfo: e,
                                tpid: N ? ? null
                            })]
                        })
                    })
                }
        },
        83877: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => eT
            });
            var a = r(37876),
                s = r(14232),
                l = r(18847),
                i = r.n(l),
                n = r(47321),
                o = r(16364),
                d = r(64968),
                c = r(15657),
                u = r(16373),
                p = r(77518),
                m = r(10769),
                h = r(14619),
                g = r(25270),
                f = r(36573),
                x = r(69894);
            let v = (e, t, r, a = "featured_event") => {
                let s = (0, f.U8)();
                return {
                    promotion_id: `${a}|${x.j.analyticsGaName}|${e.id}`,
                    promotion_name: e.title,
                    promotion_type: a,
                    creative_name: e.eventVideo ? .videoUrl ? (0, f.Go)(e.eventVideo ? .videoUrl) : (0, f.Go)(e.desktopImage),
                    creative_slot: `${a}|${void 0!==r?r+1:1}`,
                    creative_size: e.eventVideo ? .videoUrl ? void 0 : s,
                    promotion_label: e.isPromoVisible ? "badge" : "none",
                    ...t ? {
                        click_url: t
                    } : {}
                }
            };
            var y = r(51192),
                w = r(20147),
                b = r(15874),
                j = r(36256),
                _ = r(23748),
                k = r(27888),
                S = r(30305),
                C = r(24073),
                N = r(68720);
            let I = ({
                onPrev: e,
                onNext: t
            }) => (0, a.jsxs)("div", {
                className: "pointer-events-none relative mx-auto flex w-full justify-between px-12",
                "data-testid": "featured-carousel-arrows",
                children: [(0, a.jsx)("div", {
                    className: "pointer-events-auto",
                    children: (0, a.jsx)(j.ff, {
                        "aria-label": "Previous slide",
                        icon: (0, a.jsx)(C.A, {}),
                        onClick: e,
                        size: "lg",
                        variant: "glass"
                    })
                }), (0, a.jsx)("div", {
                    className: "pointer-events-auto",
                    children: (0, a.jsx)(j.ff, {
                        "aria-label": "Next slide",
                        icon: (0, a.jsx)(N.A, {}),
                        onClick: t,
                        size: "lg",
                        variant: "glass"
                    })
                })]
            });
            var P = r(69241);
            let A = ({
                    count: e,
                    activeIndex: t,
                    progress: r,
                    onDotClick: s,
                    classes: l
                }) => (0, a.jsx)("div", {
                    className: (0, P.A)("hidden items-center justify-center gap-2 lg:flex", l ? .container),
                    "data-testid": "carousel-dots",
                    children: Array.from({
                        length: e
                    }).map((e, i) => (0, a.jsx)("button", {
                        "aria-label": `Go to slide ${i+1}`,
                        className: (0, P.A)("relative h-3 w-3 shrink-0 cursor-pointer rounded-xs border-none bg-neutral-400 p-0 transition-colors duration-200 ease-in-out lg:pointer-events-auto hover:bg-neutral-600", l ? .dot, {
                            "w-6 overflow-hidden": i === t
                        }),
                        "data-testid": `carousel-dot-${i}`,
                        onClick: () => s(i),
                        type: "button",
                        children: i === t && (0, a.jsx)("span", {
                            className: "absolute top-0 left-0 h-full rounded-l-xs bg-blue-500 transition-[width] duration-100 ease-linear",
                            style: {
                                width: `${r}%`
                            }
                        })
                    }, i))
                }),
                D = ({
                    count: e,
                    activeIndex: t,
                    progress: r,
                    onDotClick: s
                }) => (0, a.jsx)(A, {
                    activeIndex: e < 4 ? t % e : t,
                    classes: {
                        container: "lg:pointer-events-none lg:absolute lg:bottom-2 lg:left-1/2 lg:z-[11] lg:box-border lg:flex lg:w-full lg:max-w-[327px] lg:-translate-x-1/2 lg:items-center lg:justify-center lg:px-4 lg:pt-0.5 lg:pb-4"
                    },
                    count: e,
                    onDotClick: s,
                    progress: r
                });
            var E = r(27555),
                R = r(31372),
                z = r(87050);
            let L = ({
                children: e,
                frame: t,
                isActive: r
            }) => {
                let s = t === z.lq.RAINBOW;
                return (0, a.jsx)("div", {
                    className: (0, h.cn)("h-[500px] w-full origin-center overflow-clip rounded-sm transition-transform duration-300 ease-out md:h-[560px] md:rounded-md xl:h-[680px]", r ? "scale-y-[1.048] md:scale-y-100" : "", s ? "p-1 bg-[linear-gradient(215deg,black_0%,black_20%,var(--color-magenta-500)_35%,var(--color-red-500)_44%,var(--color-orange-500)_51%,var(--color-lime-500)_58%,var(--color-cyan-500)_65%,var(--color-blue-500)_74%,black_80%,black_100%)]" : null),
                    "data-testid": "featured-slide",
                    children: (0, a.jsx)("div", {
                        className: "relative isolate size-full overflow-clip bg-background-bold",
                        children: e
                    })
                })
            };
            var $ = r(90413);
            let O = [90, 150, 180, 300],
                T = ({
                    brandImage: e
                }) => {
                    if (!e) return null;
                    let t = (0, m.cH)(e, {
                        widths: O
                    });
                    return (0, a.jsx)("img", {
                        alt: "brand logo",
                        className: "pointer-events-none absolute top-4 left-4 size-[90px] object-contain object-left-top lg:top-9 lg:left-12 lg:size-[150px]",
                        "data-testid": "featured-slide-brand-image",
                        sizes: "(min-width: 1024px) 150px, 90px",
                        src: t.src,
                        srcSet: t.srcSet
                    })
                },
                M = ({
                    promotion: e,
                    className: t
                }) => {
                    let {
                        steps: r,
                        displaySettings: s,
                        type: l
                    } = e, i = s.topBar.backgroundColor, n = s.topBar.fontColor, o = l === z.Qw.SHIPPING || l === z.Qw.AUTO_APPLIED_SHIPPING, d = l === z.Qw.FLAT && r.at(0) ? .minQuantity === 1, c = r[r.length - 1], u = c ? .percentageValue ? ? 0;
                    return o || 0 !== u ? (0, a.jsx)("div", {
                        className: (0, h.cn)("flex flex-col items-center justify-center", "w-24 h-24 md:w-[128px] md:h-[128px] lg:w-[160px] lg:h-[160px]", "rounded-sm", "shadow-md", "cursor-default", t),
                        "data-testid": "promo-badge",
                        style: {
                            backgroundColor: `${i}CC`,
                            color: n
                        },
                        children: o ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: "font-display text-[36px] md:text-[50px] lg:text-[60px] font-black leading-[0.85]",
                                children: "FREE"
                            }), (0, a.jsx)("span", {
                                className: "font-display text-[18px] md:text-[25px] lg:text-[32px] font-black leading-[0.9]",
                                children: "SHIPPING"
                            }), (0, a.jsx)("span", {
                                className: "font-display text-[7px] md:text-[9px] lg:text-[11px] font-medium leading-[1] mt-1",
                                children: "TODAY ONLY"
                            })]
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [d ? null : (0, a.jsx)("span", {
                                className: "font-display text-[8px] md:text-[12px] lg:text-size-16 font-medium leading-[1]",
                                children: "UP TO"
                            }), (0, a.jsxs)("span", {
                                className: "font-display text-[40px] md:text-[55px] lg:text-[66px] font-black leading-[0.8]",
                                children: [u, "%"]
                            }), (0, a.jsx)("span", {
                                className: "font-display text-size-36 md:text-size-48 lg:text-[60px] font-black leading-[0.8]",
                                children: "OFF"
                            })]
                        })
                    }) : null
                },
                V = ({
                    event: e,
                    onCtaClick: t,
                    promotion: r
                }) => {
                    let {
                        isDesktop: s
                    } = (0, S.Q)(), l = (0, $.A)(), i = null;
                    return e.brandImage ? i = (0, a.jsx)(T, {
                        brandImage: e.brandImage
                    }) : r && (i = (0, a.jsx)(M, {
                        className: "absolute top-4 left-4 z-3 lg:top-12 lg:left-12",
                        promotion: r
                    })), (0, a.jsxs)("div", {
                        className: "pointer-events-none absolute inset-0 z-20 flex flex-col justify-end bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_50%)] px-4 py-6 transform-[translateZ(0)] backface-hidden [-webkit-backface-visibility:hidden] lg:pt-0 lg:px-12 lg:py-13",
                        "data-testid": "featured-slide-content",
                        children: [i, (0, a.jsxs)("div", {
                            className: "relative z-20 max-w-full flex flex-col items-start gap-4 lg:gap-8",
                            "data-swiper-parallax": "-160",
                            "data-swiper-parallax-duration": l && s ? "500" : "300",
                            "data-swiper-parallax-opacity": "0.35",
                            children: [(0, a.jsx)("h2", {
                                className: "font-black font-display m-0 text-display-sm text-text-inverse uppercase md:max-w-[75%] lg:max-w-[60%] min-[1366px]:max-w-[50%] min-[1366px]:text-display-lg",
                                children: e.title
                            }), (0, a.jsx)(j.$n, {
                                asChild: !0,
                                className: "pointer-events-auto w-full md:w-auto lg:min-w-[185px]",
                                onClick: t,
                                size: "lg",
                                variant: "primary",
                                children: (0, a.jsx)("a", {
                                    href: e.url,
                                    children: e.callToAction
                                })
                            })]
                        })]
                    })
                };
            var F = r(49503);
            let q = ({
                event: e,
                priority: t = "auto"
            }) => {
                if (!e.desktopImage || !e.mobileImage) return null;
                let r = [];
                if (e.mobileImage) {
                    let t = (0, m.ZX)({
                        assetPath: e.mobileImage,
                        widths: [312, 327, 624, 654]
                    });
                    r.push({
                        srcSet: { ...t,
                            sizes: "100vw"
                        },
                        media: `(max-width: ${S.D.md-1}px)`
                    })
                }
                if (e.desktopImage) {
                    let t = (0, m.ZX)({
                        assetPath: e.desktopImage,
                        widths: [714, 1296, 1712, 1920, 2592, 3424]
                    });
                    r.push({
                        srcSet: { ...t,
                            sizes: `(min-width: ${S.D.lg}px) 100vw, 714px`
                        },
                        media: `(min-width: ${S.D.md}px)`
                    })
                }
                if (0 === r.length) return null;
                let s = e.desktopImage || e.mobileImage;
                return (0, a.jsx)("div", {
                    className: "absolute inset-0 z-1",
                    "data-testid": "featured-slide-static",
                    children: (0, a.jsx)(F.D, {
                        alt: e.title,
                        className: "h-full w-full object-cover",
                        imageFallbackCoreUrl: s,
                        imageSets: r,
                        priority: t
                    })
                })
            };
            var B = r(77328),
                H = r.n(B),
                U = r(30983);
            let W = ({
                    event: e,
                    isActive: t,
                    onLoadedMetadata: r,
                    priority: l = "auto"
                }) => {
                    let i = (0, s.useRef)(null),
                        [n, o] = (0, s.useState)(!1),
                        d = e.desktopImage ? (0, m.ZX)({
                            assetPath: e.desktopImage
                        }) : (0, m.ZX)({
                            assetPath: "/images/homepage/featuredEvent/default_poster.jpg"
                        }),
                        c = e.eventVideo ? .videoUrl;
                    return ((0, s.useEffect)(() => {
                        t ? o(!0) : (o(!1), i.current ? .pause(), i.current && (i.current.currentTime = 0))
                    }, [t]), c) ? (0, a.jsxs)(a.Fragment, {
                        children: ["high" === l ? (0, a.jsx)(H(), {
                            children: (0, a.jsx)("link", {
                                as: "image",
                                fetchPriority: "high",
                                href: d.src,
                                rel: "preload"
                            })
                        }) : null, (0, a.jsx)("div", {
                            className: "absolute inset-0 z-1",
                            "data-testid": "featured-slide-video",
                            children: (0, a.jsx)(U.A, {
                                autoPlay: n,
                                className: "h-full w-full scale-[1.02] object-cover",
                                controls: !1,
                                "data-testid": "featured-slide-video-element",
                                desktopSize: {
                                    width: 1920
                                },
                                fetchPriority: l,
                                mobileSize: {
                                    width: 1920
                                },
                                muted: !0,
                                onLoadedMetadata: () => {
                                    i.current && r && r(i.current.duration)
                                },
                                playsInline: !0,
                                poster: d.src,
                                preload: t ? "auto" : "metadata",
                                ref: i,
                                src: c
                            })
                        })]
                    }) : null
                },
                G = ({
                    event: e,
                    onCtaClick: t,
                    onVideoLoadedMetadata: r,
                    priority: s = "auto",
                    promotion: l
                }) => {
                    let i = !!e.eventVideo ? .videoUrl,
                        {
                            isActive: n
                        } = (0, k.JO)();
                    return (0, a.jsxs)(L, {
                        frame: e.frame,
                        isActive: n,
                        children: [i ? (0, a.jsx)(W, {
                            event: e,
                            isActive: n,
                            onLoadedMetadata: e => {
                                r && r(e)
                            },
                            priority: s
                        }) : (0, a.jsx)(q, {
                            event: e,
                            priority: s
                        }), (0, a.jsx)(E.A, {
                            "aria-label": `${e.callToAction}: ${e.title}`,
                            className: "absolute inset-0 z-10",
                            "data-testid": "featured-slide-link",
                            onClick: t,
                            routeInfo: (0, R.j)(e.url).routeInfo,
                            children: null
                        }), (0, a.jsx)(V, {
                            event: e,
                            onCtaClick: t,
                            promotion: l
                        })]
                    })
                },
                Q = ({
                    ref: e,
                    events: t,
                    onEventClick: r,
                    onSlideChange: l,
                    promotion: i
                }) => {
                    let {
                        isDesktop: n
                    } = (0, S.Q)(), o = (0, s.useMemo)(() => {
                        let e = t.map((e, t) => ({ ...e,
                            key: e.id,
                            originalIndex: t
                        }));
                        return t.length < 4 && (e = [...e, ...t.map((e, t) => ({ ...e,
                            key: `${e.id}-2`,
                            originalIndex: t
                        }))]), e
                    }, [t]), d = (0, s.useRef)(null), [c, u] = (0, s.useState)(0), [p, m] = (0, s.useState)(0), g = (0, s.useRef)(0), f = (0, s.useRef)(null), x = (0, s.useRef)(new Map), [v, y] = (0, s.useState)(4e3), [w, b] = (0, s.useState)(!1), j = (0, s.useCallback)(e => {
                        let t = d.current;
                        t ? .autoplay && t.params.autoplay && "boolean" != typeof t.params.autoplay && (t.params.autoplay.delay = e, t.autoplay.running && (t.autoplay.stop(), t.autoplay.start()))
                    }, []), C = (0, s.useCallback)(e => {
                        if (!e.eventVideo ? .videoUrl) return 4e3;
                        let t = x.current.get(e.id);
                        return t ? Math.round(1e3 * t) : 4e3
                    }, []), N = (0, s.useCallback)((e, t, r) => {
                        let a = Math.round(100 - 100 * r);
                        a !== g.current && (g.current = a, null === f.current && (f.current = requestAnimationFrame(() => {
                            m(g.current), f.current = null
                        })))
                    }, []);
                    (0, s.useEffect)(() => () => {
                        null !== f.current && cancelAnimationFrame(f.current)
                    }, []);
                    let P = !n && w;
                    (0, s.useEffect)(() => {
                        d.current ? .update()
                    }, [P, n]);
                    let A = (0, s.useCallback)(e => {
                            let t = e.realIndex;
                            u(t), m(0);
                            let r = o[t];
                            if (r) {
                                let e = C(r);
                                y(e), j(e), w || 0 === r.originalIndex || b(!0), l && l(r, r.originalIndex)
                            }
                        }, [l, o, C, w, j]),
                        E = (0, s.useCallback)((e, t) => {
                            if (!Number.isFinite(t) || t <= 0) return;
                            x.current.set(e, t);
                            let r = o[c];
                            if (r && r.id === e) {
                                let e = Math.round(1e3 * t);
                                y(e), j(e)
                            }
                        }, [o, c, j]),
                        R = (0, s.useCallback)(() => {
                            d.current ? .slidePrev()
                        }, []),
                        z = (0, s.useCallback)(() => {
                            d.current ? .slideNext()
                        }, []),
                        L = (0, s.useCallback)(e => {
                            d.current ? .slideToLoop(e)
                        }, []),
                        $ = !!o[c] ? .eventVideo ? .videoUrl,
                        O = (0, s.useCallback)(() => {
                            $ || d.current ? .autoplay ? .pause()
                        }, [$]),
                        T = (0, s.useCallback)(() => {
                            $ || d.current ? .autoplay ? .resume()
                        }, [$]);
                    return (0, a.jsx)("div", {
                        className: "group/featured-carousel relative overflow-x-hidden",
                        "data-testid": "featured-carousel",
                        onMouseEnter: O,
                        onMouseLeave: T,
                        children: (0, a.jsxs)("div", {
                            className: "relative px-4 pb-6 min-[380px]:pb-7 md:px-0 md:pb-0",
                            ref: e,
                            children: [(0, a.jsx)(k.RC, {
                                autoplay: {
                                    delay: v,
                                    disableOnInteraction: !1,
                                    pauseOnMouseEnter: !1
                                },
                                breakpoints: {
                                    1024: {
                                        slidesPerView: 1,
                                        spaceBetween: 0
                                    }
                                },
                                centeredSlides: P,
                                className: "mt-6 w-full max-w-[100vw] overflow-visible! min-[380px]:mt-7 md:mt-4 lg:mt-0 lg:overflow-hidden!",
                                loop: !0,
                                modules: [_.Ij, _.Vx, _.kQ],
                                onAutoplayTimeLeft: N,
                                onSlideChange: A,
                                onSwiper: e => {
                                    if (d.current = e, l) {
                                        let t = o[e.realIndex];
                                        t && l(t, t.originalIndex)
                                    }
                                },
                                parallax: !0,
                                slidesPerView: "auto",
                                spaceBetween: 12,
                                children: o.map((e, t) => (0, a.jsx)(k.qr, {
                                    className: (0, h.cn)(P ? "w-[calc(100vw-44px)]!" : "w-[calc(100vw-48px)]!", "lg:w-full!"),
                                    children: (0, a.jsx)(G, {
                                        event: e,
                                        onCtaClick: () => r(e),
                                        onVideoLoadedMetadata: t => E(e.id, t),
                                        priority: 0 === t ? "high" : "auto",
                                        promotion: e.isPromoVisible ? i : void 0
                                    })
                                }, e.key))
                            }), (0, a.jsx)("div", {
                                className: "pointer-events-none absolute top-1/2 left-0 z-10 hidden w-full -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover/featured-carousel:opacity-100 lg:block",
                                children: (0, a.jsx)(I, {
                                    onNext: z,
                                    onPrev: R
                                })
                            }), (0, a.jsx)(D, {
                                activeIndex: c,
                                count: t.length,
                                onDotClick: L,
                                progress: p
                            })]
                        })
                    })
                };
            var Y = r(34645);
            let J = ({
                promotion: e,
                ref: t,
                hasTakeoverBackdrop: r
            }) => {
                let l = (0, Y.A)(),
                    i = (0, n._g)(o.oh),
                    d = (0, n._g)(o.H8),
                    c = (0, s.useRef)(new Set),
                    u = (0, s.useMemo)(() => ((e, t) => {
                        if (0 === e.length) return e;
                        let r = e[e.length - 1],
                            a = e.slice(0, -1);
                        return "v1" === t ? [...a, { ...r,
                            title: "Print your own metal posters"
                        }] : "v2" === t ? [...a, { ...r,
                            title: "Your moments, your pics, your custom Displates"
                        }] : e
                    })(((e, t) => {
                        let [r, ...a] = e;
                        return r ? "v1" === t ? [{ ...r,
                            title: "2 million+ ways to show off what you're all about"
                        }, ...a] : "v2" === t ? [{ ...r,
                            title: "Hang it. Love it. Join 5 million Displate collectors"
                        }, ...a] : e : e
                    })(l.featuredEvents || [], i ? .variantName), d ? .variantName), [i ? .variantName, d ? .variantName, l]),
                    p = u.length >= 3 && u.length <= 5,
                    m = (0, s.useCallback)(e => {
                        let t = u.findIndex(t => t.id === e.id); - 1 !== t && ((0, w.$)(v(e, e.url, t, "featured_slide")), (0, y.O)({
                            elementId: "featured_slide_click"
                        }))
                    }, [u]),
                    g = (0, s.useCallback)((e, t) => {
                        c.current.has(e.id) || (c.current.add(e.id), (0, b.z)(v(e, void 0, t, "featured_slide")))
                    }, []);
                return p ? (0, a.jsx)(j.mc, {
                    variant: "noPaddingMobile",
                    children: (0, a.jsx)("section", {
                        className: (0, h.cn)("col-span-full", !r && "lg:mt-6"),
                        "data-testid": "featured-section",
                        id: "featured-section",
                        children: (0, a.jsx)(Q, {
                            events: u,
                            onEventClick: m,
                            onSlideChange: g,
                            promotion: e,
                            ref: t
                        })
                    })
                }) : null
            };
            J.displayName = "FeaturedSection";
            let K = [720, 1080, 1440, 1920, 2560],
                Z = ({
                    takeover: e,
                    children: t
                }) => {
                    let r = e.color && e.color.length > 0 ? {
                            backgroundColor: e.color
                        } : void 0,
                        s = e.image && e.image.length > 0 && e.image ? (0, m.cH)(e.image, {
                            widths: K
                        }) : null;
                    return (0, a.jsxs)("div", {
                        className: "relative w-full overflow-x-clip",
                        "data-testid": "homepage-takeover-shell",
                        style: r,
                        children: [s ? (0, a.jsx)("div", {
                            "aria-hidden": !0,
                            className: "pointer-events-none absolute inset-0 z-1 flex items-center justify-center overflow-hidden",
                            children: (0, a.jsx)("div", {
                                className: "relative h-full w-full max-w-[2560px]",
                                children: (0, a.jsx)("img", {
                                    alt: "",
                                    className: "absolute inset-0 size-full object-cover object-center mix-blend-lighten",
                                    fetchPriority: "high",
                                    sizes: "100vw",
                                    src: s.src,
                                    srcSet: s.srcSet
                                })
                            })
                        }) : null, (0, a.jsx)("div", {
                            className: "relative z-10 lg:pt-6",
                            children: t
                        })]
                    })
                };
            var X = r(25282),
                ee = r(95742),
                et = r(39313);
            let er = ({
                    brands: e,
                    featuredCarouselRef: t
                }) => {
                    let r = (0, s.useRef)(null),
                        [l, i] = (0, s.useState)(!1),
                        {
                            isTabletOrDesktop: n
                        } = (0, S.Q)(),
                        {
                            takeover: o
                        } = (0, Y.A)(),
                        d = !!(o ? .color || o ? .image),
                        c = d && o ? .brandSliderTitleColor !== z.b_.DARK,
                        u = (0, et.P)(r, {
                            threshold: 1,
                            rootMargin: "0px",
                            once: !0
                        });
                    return (0, s.useEffect)(() => {
                        !n && u && i(!0)
                    }, [n, u]), (0, s.useEffect)(() => {
                        if (!n || !t ? .current || l) return;
                        let e = new IntersectionObserver(([t]) => {
                            t.intersectionRatio < .75 && (i(!0), e.disconnect())
                        }, {
                            threshold: [.75]
                        });
                        return e.observe(t.current), () => {
                            e.disconnect()
                        }
                    }, [n, t, l]), (0, a.jsx)(j.mc, {
                        variant: "noPaddingMobile",
                        children: (0, a.jsx)(j.xA, {
                            children: (0, a.jsxs)("section", {
                                className: (0, h.cn)("col-span-full flex flex-col items-center", d ? "gap-6 px-4 pt-10 pb-10" : "mt-6 md:mt-10 lg:mt-16"),
                                "data-testid": "brandshops",
                                ref: r,
                                children: [(0, a.jsxs)("h2", {
                                    className: (0, h.cn)("px-4 text-center font-display uppercase", d ? "text-display-xs" : "mb-4 text-display-xs md:text-display-sm", c ? "text-text-inverse" : "text-text-primary"),
                                    children: ["OFFICIAL METAL POSTERS ", (0, a.jsx)("br", {
                                        className: "lg:hidden"
                                    }), " FROM 200+ FANDOMS"]
                                }), (0, a.jsx)(ee.A, {
                                    brands: e,
                                    className: (0, h.cn)(!d && "mt-6"),
                                    isRunning: l
                                })]
                            })
                        })
                    })
                },
                ea = ({
                    featuredCarouselRef: e
                }) => {
                    let {
                        brandsFeed: t
                    } = (0, Y.A)();
                    return t && 0 !== t.length ? (0, a.jsx)(er, {
                        brands: t,
                        featuredCarouselRef: e
                    }) : null
                };
            var es = r(40625);
            let el = {
                    "#ff9797": "red200",
                    "#b60205": "red600",
                    "#820103": "red700",
                    "#4d0001": "red800",
                    "#ffa85c": "orange300",
                    "#ff7b00": "orange500",
                    "#cc6200": "orange600",
                    "#ddff1a": "lime400",
                    "#aacc00": "lime600",
                    "#047857": "green700",
                    "#99fdff": "cyan300",
                    "#55fcff": "cyan500",
                    "#00c6c9": "cyan600",
                    "#97beff": "blue200",
                    "#004bcc": "blue600",
                    "#003899": "blue700",
                    "#002666": "blue800",
                    "#fba9ff": "magenta200",
                    "#f87fff": "magenta300",
                    "#8d0099": "magenta700",
                    "#5a0066": "magenta800"
                },
                ei = ({
                    isPromoVisible: e,
                    promotion: t,
                    title: r
                }) => {
                    let s, l, i, n = e ? (s = (e => {
                        if (!e) return null;
                        let {
                            steps: t,
                            type: r
                        } = e, a = r === z.Qw.SHIPPING || r === z.Qw.AUTO_APPLIED_SHIPPING, s = r === z.Qw.FLAT && t.at(0) ? .minQuantity === 1, l = t[t.length - 1] ? .percentageValue ? ? 0;
                        return a ? "FREE SHIPPING" : 0 === l ? null : s ? `${l}% OFF` : `UP TO ${l}% OFF`
                    })(t), i = (l = t ? .displaySettings ? .topBar ? .backgroundColor) ? el[l.toLowerCase()] ? ? null : null, s && i ? {
                        label: s,
                        color: i
                    } : null) : null;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [n ? (0, a.jsx)(j.Ex, {
                            color: n.color,
                            children: n.label
                        }) : null, (0, a.jsx)("p", {
                            className: "text-display-xs font-display text-text-inverse text-center w-full uppercase",
                            children: r
                        })]
                    })
                };
            var en = r(84810);
            let eo = ({
                    variant: e,
                    category: t,
                    imageSrc: r,
                    gridPosition: a
                }) => ({
                    promotion_id: (({
                        variant: e,
                        category: t
                    }) => "fixed" === e ? `category|${x.j.analyticsGaName}|${t}` : `category|${x.j.analyticsGaName}|dynamic`)({
                        variant: e,
                        category: t
                    }),
                    promotion_name: t,
                    promotion_type: "category",
                    creative_name: (0, f.Go)(r.split("?")[0]),
                    creative_slot: `categories_grid|${a}`,
                    creative_size: (0, f.U8)()
                }),
                ed = ({
                    variant: e,
                    category: t,
                    imageSrc: r,
                    gridPosition: a,
                    link: s
                }) => ({ ...eo({
                        variant: e,
                        category: t,
                        imageSrc: r,
                        gridPosition: a
                    }),
                    click_url: (e => {
                        let {
                            route: t
                        } = e;
                        if (t.startsWith("http://") || t.startsWith("https://")) return t;
                        let r = en.ConfigPublic.AppUrl.replace(/\/$/, ""),
                            a = t.startsWith("/") ? t : `/${t}`;
                        return `${r}${a}`
                    })(s)
                }),
                ec = ({
                    variant: e,
                    category: t,
                    imageSrc: r,
                    gridPosition: a
                }) => eo({
                    variant: e,
                    category: t,
                    imageSrc: r,
                    gridPosition: a
                }),
                eu = "hp-content-cards-surprise-me-button",
                ep = (e, t) => {
                    let r = ed({
                        variant: "fixed",
                        category: t.category,
                        imageSrc: t.imageSrc.src,
                        gridPosition: e + 1,
                        link: t.link
                    });
                    (0, w.$)(r)
                },
                em = (e, t) => {
                    let r = e.closest(`[${t}]`);
                    if (!r) return null;
                    let a = Number(r.getAttribute(t));
                    return Number.isNaN(a) ? null : a
                },
                eh = ({
                    card: e,
                    cardIndex: t,
                    onCardClick: r,
                    header: l
                }) => {
                    let i = (0, s.useRef)(null);
                    return (0, et.P)(i, {
                        threshold: .5,
                        delay: 1e3,
                        once: !0,
                        callback: () => {
                            let r;
                            r = ec({
                                variant: "fixed",
                                category: e.category,
                                imageSrc: e.imageSrc.src,
                                gridPosition: t + 1
                            }), (0, b.z)(r)
                        }
                    }), (0, a.jsx)(j.mI, {
                        backgroundImageProps: {
                            src: e.imageSrc.src,
                            srcSet: e.imageSrc.srcSet,
                            alt: e.title
                        },
                        classes: {
                            root: "col-span-4 md:col-span-4 lg:col-span-3",
                            header: "gap-3"
                        },
                        "data-testid": "fixed-content-card",
                        footer: (0, a.jsx)(j.$n, {
                            asChild: !0,
                            className: "w-[185px]",
                            "data-testid": "see-more-button",
                            variant: "secondaryLightOutline",
                            children: (0, a.jsx)(E.A, {
                                routeInfo: e.link,
                                children: "See more"
                            })
                        }),
                        header: l,
                        onClick: () => r(t, e),
                        ref: i
                    }, e.title)
                },
                eg = ({
                    link: e,
                    onSurpriseMe: t,
                    hasSurpriseMeButton: r,
                    shouldAnimateButtons: s = !1
                }) => r ? (0, a.jsxs)("div", {
                    className: "flex gap-2 items-center justify-center w-full",
                    children: [(0, a.jsx)(j.$n, {
                        asChild: !0,
                        className: (0, P.A)("w-[144px]", s && "hp-content-card-footer-button"),
                        "data-testid": "see-more-button",
                        variant: "secondaryLightOutline",
                        children: (0, a.jsx)(E.A, {
                            routeInfo: e,
                            children: "See more"
                        })
                    }), (0, a.jsx)(j.$n, {
                        className: (0, P.A)("w-[144px]", s && "hp-content-card-surprise-me-button"),
                        "data-analytics-role": eu,
                        "data-testid": "surprise-me-button",
                        onClick: t,
                        variant: "primary",
                        children: "Surprise me"
                    })]
                }) : (0, a.jsx)("div", {
                    className: "flex gap-2 items-center justify-center w-full",
                    children: (0, a.jsx)(j.$n, {
                        asChild: !0,
                        className: "w-[185px]",
                        "data-testid": "see-more-button",
                        variant: "secondaryLightOutline",
                        children: (0, a.jsx)(E.A, {
                            routeInfo: e,
                            children: "See more"
                        })
                    })
                }),
                ef = "EVERY SIDE OF YOU",
                ex = [343, 432],
                ev = e => ({
                    imageSrc: (0, m.cH)(e.imageUrl, {
                        widths: ex
                    }),
                    link: (0, R.j)(e.link).routeInfo,
                    category: e.category,
                    isPromoVisible: e.isPromoVisible
                }),
                ey = e => ({ ...ev(e),
                    title: e.title.trim()
                }),
                ew = ({
                    contentCards: e,
                    promotion: t
                }) => {
                    let {
                        fixedCards: r,
                        animationCards: l,
                        surpriseCards: i
                    } = (0, s.useMemo)(() => {
                        let t;
                        return t = e ? .fixedCards.map(ey) ? ? [], {
                            fixedCards: t,
                            animationCards: e ? .animationCards.map(ev) ? ? [],
                            surpriseCards: e ? .surpriseCards.map(ev) ? ? []
                        }
                    }, [e]), n = (0, s.useMemo)(() => 0 === l.length ? [] : l.length >= 4 ? l.slice(0, 4) : Array.from({
                        length: 4
                    }, (e, t) => l[t % l.length]), [l]), [o, d] = (0, s.useState)(0), [c, u] = (0, s.useState)(!1), [p, m] = (0, s.useState)(!0), g = (0, s.useRef)(null), {
                        ref: f,
                        inView: x
                    } = (0, es.Wx)({
                        initialInView: !1,
                        rootMargin: "0px",
                        threshold: .8,
                        delay: 350,
                        triggerOnce: !0
                    });
                    (0, et.P)(g, {
                        threshold: .5,
                        delay: 1e3,
                        once: !0,
                        callback: () => {
                            let e = n[0];
                            if (e) {
                                let t;
                                t = ec({
                                    variant: "dynamic",
                                    category: e.category,
                                    imageSrc: e.imageSrc.src,
                                    gridPosition: 4
                                }), (0, b.z)(t)
                            }
                        }
                    });
                    let v = (0, s.useCallback)(e => {
                            g.current = e, f(e)
                        }, [f]),
                        _ = (0, s.useCallback)(() => {
                            (0, y.O)({
                                elementId: "categories_section_surprise_me_button",
                                elementVariant: "none",
                                interactionType: "click"
                            }), p ? m(!1) : i.length > 0 && d(e => (e + 1) % i.length), c || u(!0)
                        }, [p, c, i.length]),
                        k = (0, s.useCallback)(e => {
                            let t;
                            if ((e => {
                                    let {
                                        target: t
                                    } = e;
                                    return t instanceof Element && null !== t.closest(`[data-analytics-role="${eu}"]`)
                                })(e)) return;
                            let r = (({
                                event: e,
                                hasSurpriseSwitched: t,
                                isAnimationPhase: r,
                                animationCards: a,
                                surpriseCards: s,
                                currentSurpriseIndex: l
                            }) => {
                                let i = e.target;
                                if (t && !r) {
                                    let e = em(i, "data-surprise-layer-index");
                                    return null === e || e !== l ? null : s[e] ? ? null
                                }
                                if (r) {
                                    let e = em(i, "data-animation-layer-index");
                                    return null === e ? null : a[e] ? ? null
                                }
                                return null
                            })({
                                event: e,
                                hasSurpriseSwitched: c,
                                isAnimationPhase: p,
                                animationCards: n,
                                surpriseCards: i,
                                currentSurpriseIndex: o
                            });
                            r && (t = ed({
                                variant: "dynamic",
                                category: r.category,
                                imageSrc: r.imageSrc.src,
                                gridPosition: 4,
                                link: r.link
                            }), (0, w.$)(t))
                        }, [c, p, n, i, o]);
                    return 0 === r.length || 0 === l.length || 0 === i.length || 0 === n.length ? null : (0, a.jsx)(j.mc, {
                        children: (0, a.jsx)(j.xA, {
                            asChild: !0,
                            className: "gap-y-6",
                            children: (0, a.jsxs)("section", {
                                "data-testid": "hp-content-cards",
                                children: [(0, a.jsxs)("h2", {
                                    className: (0, h.cn)("col-span-full", "text-display-sm md:text-display-md font-display uppercase", "text-center", "mb-2 md:mb-4"),
                                    children: ["SHOW OFF", (0, a.jsx)("br", {}), "WHAT MAKES YOU, YOU"]
                                }), (0, a.jsxs)("div", {
                                    className: (0, h.cn)("col-span-full", "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12", "gap-6 md:gap-6 lg:gap-8"),
                                    children: [(0, a.jsx)("div", {
                                        className: "contents",
                                        "data-testid": "hp-fixed-cards-region",
                                        children: r.map((e, r) => (0, a.jsx)(eh, {
                                            card: e,
                                            cardIndex: r,
                                            header: (0, a.jsx)(ei, {
                                                isPromoVisible: e.isPromoVisible,
                                                promotion: t,
                                                title: e.title
                                            }),
                                            onCardClick: ep
                                        }, `${e.title}-${r}`))
                                    }), (0, a.jsxs)("div", {
                                        className: "relative col-span-4 md:col-span-4 lg:col-span-3 min-h-[480px]",
                                        "data-animation-phase": p && x,
                                        "data-current-surprise-index": o,
                                        "data-testid": "surprise-card-wrapper",
                                        onClick: k,
                                        ref: v,
                                        children: [(0, a.jsx)("div", {
                                            "aria-hidden": !p,
                                            className: (0, h.cn)("absolute inset-0 z-10 transition-opacity duration-300 ease-in-out", p ? "opacity-100" : "opacity-0"),
                                            "data-testid": "hp-animation-stack",
                                            children: n.map((e, r) => {
                                                let s = r === n.length - 1;
                                                return (0, a.jsx)("div", {
                                                    className: (0, h.cn)("absolute inset-0 w-full opacity-0 transition-opacity duration-300 ease-out hp-content-cards-animation-layer", s ? null : "hp-content-cards-animation-layer--short", s ? "hp-content-cards-animation-layer--last" : null, x ? null : "pause-animation"),
                                                    "data-animation-layer-index": r,
                                                    children: (0, a.jsx)(j.mI, {
                                                        backgroundImageProps: {
                                                            alt: "room with displates",
                                                            src: e.imageSrc.src,
                                                            srcSet: e.imageSrc.srcSet
                                                        },
                                                        classes: {
                                                            content: s ? "motion-reduce:opacity-100" : void 0,
                                                            header: "gap-3"
                                                        },
                                                        footer: (0, a.jsx)(eg, {
                                                            hasSurpriseMeButton: s,
                                                            link: e.link,
                                                            onSurpriseMe: _,
                                                            shouldAnimateButtons: s && x
                                                        }),
                                                        header: (0, a.jsx)(ei, {
                                                            isPromoVisible: e.isPromoVisible,
                                                            promotion: t,
                                                            title: ef
                                                        })
                                                    })
                                                }, `${e.imageSrc.src}-${r}`)
                                            })
                                        }), (0, a.jsx)("div", {
                                            "aria-hidden": !c && p,
                                            className: (0, h.cn)("absolute inset-0 z-20 transition-opacity duration-300 ease-in-out", c && !p ? "opacity-100" : "pointer-events-none opacity-0"),
                                            "data-testid": "hp-surprise-stack",
                                            children: i.map((e, r) => (0, a.jsx)("div", {
                                                className: (0, h.cn)("absolute top-0 left-0 w-full", r === o ? null : "pointer-events-none"),
                                                "data-surprise-layer-index": r,
                                                children: (0, a.jsx)(j.mI, {
                                                    backgroundImageProps: {
                                                        alt: "room with displates",
                                                        src: e.imageSrc.src,
                                                        srcSet: e.imageSrc.srcSet
                                                    },
                                                    classes: {
                                                        root: (0, h.cn)("transition-opacity duration-300 ease-in-out", r === o ? "opacity-100" : "opacity-0"),
                                                        header: "gap-3"
                                                    },
                                                    footer: (0, a.jsx)(eg, {
                                                        hasSurpriseMeButton: !0,
                                                        link: e.link,
                                                        onSurpriseMe: _
                                                    }),
                                                    header: (0, a.jsx)(ei, {
                                                        isPromoVisible: e.isPromoVisible,
                                                        promotion: t,
                                                        title: ef
                                                    })
                                                })
                                            }, e.imageSrc.src))
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                eb = (0, m.v9)({
                    assetPath: "/images/homepage/contentCards/Room_14_Verified_creators_2.png"
                }).src,
                ej = (0, m.v9)({
                    assetPath: "/images/homepage/contentCards/Room_15_Verified_creators_3.png"
                }).src;
            var e_ = r(72678),
                ek = r(89646),
                eS = r(39806),
                eC = r(5846),
                eN = r(7234);
            let eI = [{
                    title: "Displate Metal Posters – Let Your Fandom Shine",
                    content: (0, a.jsxs)(a.Fragment, {
                        children: ["Displate creates metal posters that let your fandom shine. From comics and cult classics to cats, cooking, and whatever lights you up — each design is printed on durable, wall-ready steel. Thanks to our magnet mounting system, you can hang, swap, and stun in seconds — completely tool-free. No frames, no drilling, just premium metal wall art designed to last for decades. With over 2.5 million designs, there’s a Displate for every world you love. Explore our", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, eN.cT)({
                                    query: {
                                        q: "anime"
                                    }
                                }),
                                children: "Anime"
                            })
                        }), ",", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, eN.cT)({
                                    query: {
                                        q: "gaming"
                                    }
                                }),
                                children: "Gaming"
                            })
                        }), ",", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, eN.cT)({
                                    query: {
                                        q: "fantasy"
                                    }
                                }),
                                children: "Fantasy"
                            })
                        }), ",", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, eN.cT)({
                                    query: {
                                        q: "movies and shows"
                                    }
                                }),
                                children: "Movies & Shows"
                            })
                        }), ", and", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, eN.cT)({
                                    query: {
                                        q: "comics"
                                    }
                                }),
                                children: "Comics poster collections"
                            })
                        }), " ", "to find the perfect match for your space and your passions. Want something truly personal? Upload your own photo, artwork, or meme to create a", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, eS.iM)(),
                                children: "custom metal print."
                            })
                        }), " ", "Choose your size and finish for a one-of-a-kind piece — perfect as a gift, or simply because your walls deserve it."]
                    })
                }, {
                    title: "Wall Art, Your Way",
                    content: (0, a.jsxs)(a.Fragment, {
                        children: ["Available in M, L, and XL, Displate metal prints fit any space — from compact setups to bold statement walls. Pick a medium poster for a desk or shelf, or go big with our extra-large metal wall art spanning four connected plates for an epic centerpiece in your living room, bedroom, or office. Choose the look that fits your style — matte, gloss, or Textra, our signature textured wall art finish, for added depth and detail. Every Displate is crafted as a premium, collectible wall piece, combining striking visuals with materials that last. Dive into rare finds and explore our", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, eC.m)(),
                                children: "Limited and Ultra-limited Editions."
                            })
                        }), " ", "Want to build a set? Grab a curated bundle of three Displates and create a setup that tells a story across your walls — the only hard part is stopping at just one."]
                    })
                }, {
                    title: "A Leading Metal Poster Marketplace",
                    content: (0, a.jsxs)(a.Fragment, {
                        children: ["With over 200 officially licensed collections and 40,000+ independent artists, Displate is the world’s leading online marketplace for metal posters and collectible wall art. Showcase what makes you, you — from iconic franchises like", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, e_.xz)({
                                    slug: "marvel"
                                }),
                                children: "Marvel"
                            })
                        }), ",", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, e_.xz)({
                                    slug: "star-wars"
                                }),
                                children: "Star Wars"
                            })
                        }), ",", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, e_.xz)({
                                    slug: "the-witcher"
                                }),
                                children: "The Witcher"
                            })
                        }), ", and", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, e_.xz)({
                                    slug: "one-piece"
                                }),
                                children: "One Piece"
                            })
                        }), " ", "to original artwork from creators around the globe. Join over 5 million fans worldwide who trust Displate to make their walls shine brighter than ever. Discover", " ", (0, a.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(E.A, {
                                routeInfo: (0, ek.Y)(),
                                children: "officially licensed designs"
                            })
                        }), ", original art, and custom prints — and bring your fandom home."]
                    })
                }, {
                    title: "About Displate",
                    content: (0, a.jsx)(a.Fragment, {
                        children: "Founded in 2013, Displate is a metal poster company with headquarters in Seattle, Washington, and Warsaw, Poland. We operate the world’s leading online marketplace for collectible metal wall art, offering artist-made posters and officially licensed designs across pop culture. With over 2.5 million unique designs shipped worldwide, Displate helps fans turn blank walls into bold expressions of fandom."
                    })
                }],
                eP = i()(() => Promise.all([r.e(1353), r.e(3851), r.e(9633), r.e(9030)]).then(r.bind(r, 15212)), {
                    loadableGenerated: {
                        webpack: () => [15212]
                    },
                    ssr: !0
                }),
                eA = i()(() => r.e(2922).then(r.bind(r, 12922)).then(e => e.MoreWaysToDisplate), {
                    loadableGenerated: {
                        webpack: () => [12922]
                    },
                    ssr: !0
                }),
                eD = i()(() => Promise.all([r.e(9440), r.e(1353), r.e(8308), r.e(4504)]).then(r.bind(r, 17220)).then(e => e.InstructionVideoSectionWithForYouDrawer), {
                    loadableGenerated: {
                        webpack: () => [17220]
                    },
                    ssr: !0
                }),
                eE = i()(() => Promise.all([r.e(1353), r.e(3851), r.e(4295)]).then(r.bind(r, 34295)), {
                    loadableGenerated: {
                        webpack: () => [34295]
                    },
                    ssr: !0
                }),
                eR = i()(() => Promise.all([r.e(569), r.e(5257), r.e(6133)]).then(r.bind(r, 35322)).then(e => e.InspirationsSection), {
                    loadableGenerated: {
                        webpack: () => [35322]
                    },
                    ssr: !0
                }),
                ez = i()(() => r.e(1501).then(r.bind(r, 11501)).then(e => e.SocialSection), {
                    loadableGenerated: {
                        webpack: () => [11501]
                    },
                    ssr: !0
                }),
                eL = i()(() => r.e(5169).then(r.bind(r, 55169)).then(e => e.Newsletter), {
                    loadableGenerated: {
                        webpack: () => [55169]
                    },
                    ssr: !0
                }),
                e$ = i()(() => r.e(8952).then(r.bind(r, 8952)).then(e => e.SeoLinkingBox), {
                    loadableGenerated: {
                        webpack: () => [8952]
                    },
                    ssr: !0
                }),
                eO = i()(() => Promise.all([r.e(3219), r.e(7376), r.e(4189)]).then(r.bind(r, 95687)).then(e => e.SeoDescription), {
                    loadableGenerated: {
                        webpack: () => [95687]
                    },
                    ssr: !0
                }),
                eT = ({
                    homepageData: e,
                    header: t
                }) => {
                    let r = x.j.defaultMeta,
                        {
                            trustPilot: l,
                            contentCards: i,
                            takeover: p
                        } = e,
                        f = !!(p ? .color || p ? .image),
                        v = (0, n._g)(o.NR),
                        y = (0, s.useRef)(null),
                        {
                            track: w
                        } = (0, u.z)();
                    (0, s.useEffect)(() => {
                        w()
                    }, []);
                    let b = {
                        webpage: {
                            h1: r.title,
                            url: (0, x.P)({
                                absolute: !0
                            }).route,
                            description: r.description,
                            imageOfPage: (0, m.qH)("/images/logo/logotype_v2.svg")
                        }
                    };
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(c.F, {
                            ldJsonParams: b,
                            pageMeta: x.j.defaultMeta
                        }), (0, a.jsx)(Y.R, {
                            value: e,
                            children: (0, a.jsx)(d.e, {
                                value: {},
                                children: (0, a.jsxs)(X.O, {
                                    headerData: t,
                                    children: [f && p ? (0, a.jsxs)(Z, {
                                        takeover: p,
                                        children: [(0, a.jsx)(J, {
                                            hasTakeoverBackdrop: !0,
                                            promotion: t.promotion,
                                            ref: y
                                        }), (0, a.jsx)(ea, {
                                            featuredCarouselRef: y
                                        })]
                                    }) : (0, a.jsx)(J, {
                                        promotion: t.promotion,
                                        ref: y
                                    }), (0, a.jsxs)("div", {
                                        className: (0, h.cn)("flex flex-col gap-16 lg:gap-22", f && "mt-10 lg:mt-22"),
                                        children: [f ? null : (0, a.jsx)(ea, {
                                            featuredCarouselRef: y
                                        }), (0, a.jsx)(ew, {
                                            contentCards: ((e, t) => {
                                                let r = "v1" === t ? eb : "v2" === t ? ej : void 0,
                                                    a = e ? .fixedCards[1];
                                                if (!e || !r || !a) return e;
                                                let s = [...e.fixedCards];
                                                return s[1] = { ...a,
                                                    imageUrl: r
                                                }, { ...e,
                                                    fixedCards: s
                                                }
                                            })(i, v ? .variantName),
                                            promotion: t.promotion
                                        }), (0, a.jsx)(eP, {}), (0, a.jsx)(eA, {}), (0, a.jsx)(eD, {}), (0, a.jsx)(eE, {
                                            classes: {
                                                container: "p-0",
                                                title: (0, h.cn)("text-center font-display uppercase text-display-sm md:text-display-md", "mb-3 pl-0 md:pl-0 2xl:pl-0")
                                            }
                                        }), (0, a.jsx)(eR, {}), l ? (0, a.jsx)(ez, {
                                            trustPilot: l
                                        }) : null, (0, a.jsx)(eL, {}), (0, a.jsx)(g.default, {
                                            paymentMethods: t.paymentMethods
                                        }), e.seoLinks ? (0, a.jsx)(e$, {
                                            data: e.seoLinks
                                        }) : null, (0, a.jsx)(eO, {
                                            dataTestId: "seo-description-box",
                                            expandableOnMobile: !0,
                                            sections: eI.map(({
                                                title: e,
                                                content: t
                                            }) => ({
                                                title: e,
                                                description: t
                                            }))
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                };
            eT.getLayout = function(e) {
                return (0, a.jsx)(p.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            }
        },
        95742: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => j
            });
            var a = r(37876),
                s = r(14232),
                l = r(24073),
                i = r(68720),
                n = r(45003),
                o = r(69241),
                d = r(68873),
                c = r(39313),
                u = r(36256),
                p = r(51192),
                m = r(27555),
                h = r(84810),
                g = r(10769),
                f = r(91680);
            let x = ({
                    brand: e,
                    isDraggingRef: t
                }) => {
                    let r = e.avatarCoreUrl || "",
                        s = (0, g.ZX)({
                            assetPath: `/brand/layout/${r}`,
                            assetDomain: h.ConfigPublic.ArtworkDomain,
                            widths: [144]
                        });
                    return (0, a.jsx)("div", {
                        className: "flex flex-col gap-2 items-center justify-center shrink-0",
                        "data-testid": `brandshops-tile-${e.slug}`,
                        onClickCapture: e => {
                            t.current && (e.preventDefault(), e.stopPropagation())
                        },
                        children: (0, a.jsx)(m.A, {
                            draggable: !1,
                            onClick: () => (0, p.O)({
                                elementId: "brandshops_slider_tile",
                                elementVariant: "none",
                                interactionType: "click"
                            }),
                            routeInfo: (0, f.bo)({
                                licensed: !0,
                                nick: e.slug
                            }),
                            children: (0, a.jsx)("div", {
                                className: "size-18 lg:size-20 border border-(--color-neutral-100) rounded-md overflow-hidden flex items-center justify-center bg-white transition-transform duration-200 hover:scale-105",
                                title: e.name,
                                children: (0, a.jsx)("img", {
                                    alt: `${e.name} logo`,
                                    className: "size-full object-cover",
                                    draggable: !1,
                                    loading: "lazy",
                                    sizes: s.sizes,
                                    src: s.src,
                                    srcSet: s.srcSet
                                })
                            })
                        })
                    })
                },
                v = e => {
                    let t = e.scrollWidth / 3;
                    return t ? {
                        currentScrollLeft: t,
                        maxScroll: 2 * t,
                        singleSetWidth: t
                    } : null
                },
                y = (e, t) => e >= t.maxScroll - 1 ? e - t.singleSetWidth : e <= 1 ? e + t.singleSetWidth : e,
                w = (e, t, r) => {
                    let a = t.current ? ? v(e);
                    if (!a) {
                        e.scrollLeft = r;
                        return
                    }
                    let s = y(r, a);
                    t.current = { ...a,
                        currentScrollLeft: s
                    }, e.scrollLeft = s
                },
                b = (e, t) => {
                    let r = t.current ? ? v(e);
                    if (!r) return;
                    let a = y(e.scrollLeft, r);
                    t.current = { ...r,
                        currentScrollLeft: a
                    }, a !== e.scrollLeft && (e.scrollLeft = a)
                },
                j = ({
                    brands: e,
                    className: t,
                    isRunning: r = !0
                }) => {
                    let p = (0, s.useRef)(null),
                        m = (0, s.useRef)(null),
                        h = (0, s.useRef)(0),
                        g = (0, s.useRef)(null),
                        f = (0, s.useRef)(null),
                        j = (0, s.useRef)(0),
                        _ = (0, s.useRef)(null),
                        k = (0, s.useRef)(!1),
                        S = (0, s.useRef)(!1),
                        C = (0, s.useRef)(void 0),
                        [N, I] = (0, s.useState)(!1),
                        P = (0, c.P)(p, {
                            threshold: .5,
                            delay: 1e3,
                            once: !0
                        });
                    (0, s.useEffect)(() => {
                        P && (0, d.Z)({
                            elementId: "brandshops_slider_section",
                            elementVariant: "none"
                        })
                    }, [P]);
                    let A = Math.ceil(e.length / 2),
                        D = e.slice(0, A),
                        E = e.slice(A),
                        R = (0, s.useCallback)((e, t, r, a, s, l = () => !0) => {
                            let i = e.current;
                            if (!i) return;
                            let n = () => {
                                let t = e.current;
                                if (!t) return;
                                let a = v(t);
                                a && (r.current = a, t.scrollLeft = a.currentScrollLeft)
                            };
                            n();
                            let o = window.innerWidth,
                                d = 0,
                                c = () => {
                                    let e = window.innerWidth;
                                    if (!l(o, e)) {
                                        o = e;
                                        return
                                    }
                                    o = e, n()
                                },
                                u = e => {
                                    let l = r.current;
                                    if (d && l && s()) {
                                        let t = Math.min((e - d) / 1e3, .05);
                                        t > 0 && w(i, r, l.currentScrollLeft + a * t)
                                    }
                                    d = e, t.current = requestAnimationFrame(u)
                                };
                            return window.addEventListener("resize", c), t.current = requestAnimationFrame(u), () => {
                                window.removeEventListener("resize", c), cancelAnimationFrame(t.current)
                            }
                        }, []),
                        z = e => {
                            let t = f.current;
                            if (!t) return;
                            let r = _.current ? ? v(t),
                                a = t.scrollLeft,
                                s = t.scrollLeft + e;
                            r && (_.current = r, s >= r.maxScroll - 1 && (t.scrollLeft = a -= r.singleSetWidth, s = a + e), s <= 1 && (t.scrollLeft = a += r.singleSetWidth, s = a + e), s = y(s, r)), t.scrollTo({
                                left: s,
                                behavior: "smooth"
                            })
                        };
                    (0, n.useDrag)(e => ((e, t, r) => {
                        let a = t.current;
                        if (!a) return;
                        let [s] = e.delta, [l] = e.movement, {
                            first: i,
                            last: n
                        } = e;
                        C.current && (clearTimeout(C.current), C.current = void 0), i && (k.current = !1), Math.abs(l) > 5 && (k.current = !0), w(a, r, a.scrollLeft - s), n && (C.current = setTimeout(() => k.current = !1, 50))
                    })(e, f, _), {
                        target: f,
                        eventOptions: {
                            passive: !1
                        }
                    }), (0, s.useEffect)(() => R(m, h, g, 30, () => r && !k.current, (e, t) => e !== t), [R, r]), (0, s.useEffect)(() => R(f, j, _, 30, () => r && !k.current && !S.current), [R, r]), (0, s.useEffect)(() => () => {
                        C.current && clearTimeout(C.current)
                    }, []), (0, s.useEffect)(() => {
                        let e = f.current,
                            t = m.current,
                            r = [];
                        if (e) {
                            let t = () => b(e, _);
                            e.addEventListener("scroll", t), r.push(() => {
                                e.removeEventListener("scroll", t)
                            })
                        }
                        if (t) {
                            let e = () => b(t, g);
                            t.addEventListener("scroll", e), r.push(() => {
                                t.removeEventListener("scroll", e)
                            })
                        }
                        return () => {
                            r.forEach(e => e())
                        }
                    }, []);
                    let L = (0, o.A)("overflow-x-auto cursor-grab", "[scrollbar-width:none]", "[-ms-overflow-style:none]", "[&::-webkit-scrollbar]:hidden");
                    return (0, a.jsxs)("div", {
                        className: (0, o.A)("w-full overflow-hidden relative", t),
                        "data-testid": "brandshops--feed",
                        ref: p,
                        children: [(0, a.jsxs)("div", {
                            className: (0, o.A)("flex flex-col gap-6 w-full", L, "[-webkit-overflow-scrolling:touch]", "will-change-scroll", "scroll-auto", "lg:hidden"),
                            onTouchEnd: () => k.current = !1,
                            onTouchStart: () => k.current = !0,
                            ref: m,
                            children: [(0, a.jsx)("div", {
                                className: "flex gap-8 w-max",
                                children: [...D, ...D, ...D].map((e, t) => (0, a.jsx)(x, {
                                    brand: e,
                                    isDraggingRef: k
                                }, `${e.slug}-r1-${t}`))
                            }), (0, a.jsx)("div", {
                                className: "flex gap-8 w-max pl-8",
                                children: [...E, ...E, ...E].map((e, t) => (0, a.jsx)(x, {
                                    brand: e,
                                    isDraggingRef: k
                                }, `${e.slug}-r2-${t}`))
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "hidden lg:block",
                            onMouseEnter: () => {
                                S.current = !0, I(!0)
                            },
                            onMouseLeave: () => {
                                S.current = !1, I(!1)
                            },
                            children: [(0, a.jsx)("div", {
                                className: L,
                                ref: f,
                                children: (0, a.jsx)("div", {
                                    className: "flex flex-nowrap gap-10 w-max py-0.5",
                                    children: [...e, ...e, ...e].map((e, t) => (0, a.jsx)(x, {
                                        brand: e,
                                        isDraggingRef: k
                                    }, `${e.slug}-${t}`))
                                })
                            }), (0, a.jsxs)("div", {
                                className: (0, o.A)("absolute inset-0 pointer-events-none", "transition-opacity duration-200 ease-in-out", N ? "opacity-100" : "opacity-0"),
                                children: [(0, a.jsx)("div", {
                                    className: "absolute top-1/2 -translate-y-1/2 left-12 z-10 pointer-events-auto hidden pointer-fine:flex",
                                    children: (0, a.jsx)(u.ff, {
                                        "aria-label": "Previous slide",
                                        "data-testid": "slider-prev-button",
                                        icon: (0, a.jsx)(l.A, {}),
                                        onClick: () => z(-400),
                                        size: "lg",
                                        variant: "glass"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "absolute top-1/2 -translate-y-1/2 right-12 z-10 pointer-events-auto hidden pointer-fine:flex",
                                    children: (0, a.jsx)(u.ff, {
                                        "aria-label": "Next slide",
                                        "data-testid": "slider-next-button",
                                        icon: (0, a.jsx)(i.A, {}),
                                        onClick: () => {
                                            z(400)
                                        },
                                        size: "lg",
                                        variant: "glass"
                                    })
                                })]
                            })]
                        })]
                    })
                }
        }
    }
]);
//#
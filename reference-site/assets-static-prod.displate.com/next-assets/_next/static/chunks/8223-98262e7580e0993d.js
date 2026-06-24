(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7550, 8223], {
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
        3625: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => v,
                f: () => f
            });
            var a = r(37876),
                s = r(14232),
                i = r(69241),
                l = r(14e3),
                n = r(89099),
                c = r(27555),
                o = r(23903),
                d = r(81900),
                u = r(21984),
                p = r(47765),
                m = r(82378),
                g = r(23242),
                x = r(15715),
                h = r.n(x);
            let f = (e, t) => Object.keys(e).filter(e => t.includes(e) && "ab" !== e).reduce((t, r) => ({ ...t,
                    [r]: e[r]
                }), {}),
                v = ({
                    pageCount: e,
                    onPageSelect: t,
                    allowedQueryParams: r
                }) => {
                    let x = (0, n.useRouter)(),
                        {
                            page: f
                        } = x.query,
                        v = f ? Number(f) : 1,
                        [y, w] = (0, s.useState)(v),
                        b = (0, s.useRef)(null),
                        j = (0, l.usePathname)(),
                        _ = (0, p.aP)(),
                        S = _ ? .forgetScrollPosition === void 0 || _ ? .forgetScrollPosition,
                        C = y > 1 ? y - 1 : 1,
                        k = y < e ? y + 1 : e,
                        N = ({
                            type: e,
                            pageSelected: t
                        }) => {
                            let a = t || ("prev" === e ? C : k),
                                s = { ...r,
                                    page: `${a}`
                                };
                            return a <= 1 && delete s.page, (0, m.ZW)({
                                query: s,
                                path: j,
                                target: "elysium"
                            })
                        };
                    (0, s.useEffect)(() => {
                        v && w(v)
                    }, [v]);
                    let P = e => {
                            t && t(e), x.push(N({
                                pageSelected: e
                            }).route, void 0, {
                                scroll: S
                            })
                        },
                        E = y <= 1,
                        D = y >= e;
                    return (0, a.jsxs)("section", {
                        className: h().container,
                        "data-testid": "pagination-container",
                        children: [(0, a.jsx)(c.A, {
                            "aria-disabled": E,
                            "aria-label": "Previous page",
                            className: (0, i.A)(h().href, {
                                [h().hrefDisabled]: E
                            }),
                            "data-testid": "pagination-previous-button",
                            routeInfo: N({
                                type: "prev"
                            }),
                            scroll: S,
                            children: (0, a.jsx)(d.A, {
                                color: E ? g.A.gray40 : g.A.black,
                                direction: "left",
                                size: u.l.SIZE16,
                                strokeWidth: 2
                            })
                        }), (0, a.jsxs)("span", {
                            className: h().inputContainer,
                            children: [(0, a.jsx)(o.p, {
                                "aria-disabled": E && D,
                                "aria-label": "Current page number",
                                autoComplete: "off",
                                className: h().input,
                                "data-testid": "pagination-input",
                                disabled: E && D,
                                name: "page",
                                onBlur: () => {
                                    y !== v && (0 === y ? (w(1), 1 !== v && P(1)) : P(y))
                                },
                                onChange: t => {
                                    let r = t.target.value;
                                    Number.isNaN(+r) || (+r > e ? w(e) : w(Math.floor(+r)))
                                },
                                onKeyDown: e => {
                                    "Enter" === e.key && ((Number.isNaN(y) || y < 1) && w(1), b.current ? .blur())
                                },
                                ref: b,
                                type: "text",
                                value: y
                            }), " of ", (0, a.jsx)("span", {
                                "data-testid": "pagination-maxpage",
                                children: e
                            })]
                        }), (0, a.jsx)(c.A, {
                            "aria-disabled": D,
                            "aria-label": "Next page",
                            className: (0, i.A)(h().href, {
                                [h().hrefDisabled]: D
                            }),
                            "data-testid": "pagination-next-button",
                            onClick: () => window.scrollTo(0, 0),
                            routeInfo: N({
                                type: "next"
                            }),
                            scroll: S,
                            children: (0, a.jsx)(d.A, {
                                color: D ? g.A.gray40 : g.A.black,
                                direction: "right",
                                size: u.l.SIZE16,
                                strokeWidth: 2
                            })
                        })]
                    })
                }
        },
        15715: e => {
            e.exports = {
                container: "Pagination_container__L3ugy",
                href: "Pagination_href___BASt",
                hrefDisabled: "Pagination_hrefDisabled__OQtkM",
                inputContainer: "Pagination_inputContainer__KXUso",
                input: "Pagination_input__8gjge"
            }
        },
        16373: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => o
            });
            var a = r(14232),
                s = r(50859),
                i = r(2661),
                l = r(92719),
                n = r(47765),
                c = r(35891);
            let o = () => {
                let [e, t] = (0, a.useState)([]), {
                    consumeClientStackItems: r
                } = (0, l.n)(), {
                    fetchedUserInfo: o,
                    userInfo: d,
                    error: u
                } = (0, a.useContext)(c.cy), p = (0, n.aP)(), {
                    pushEvent: m
                } = (0, i.L)(), g = (0, a.useCallback)((e = {}) => {
                    let r = { ...e,
                        pageCategory: e.pageCategory || p.analyticsGaName
                    };
                    t(e => [...e, r])
                }, [p.analyticsGaName]);
                return (0, a.useEffect)(() => {
                    e.length && (o || u) && (e.forEach(e => {
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
                            }), (0, s.j)(e, t, d), r(["trackRegistrationComplete", "trackUserLogout", "trackUserLogin", "login", "registration"])
                        })(e)
                    }), t([]))
                }, [e.length, o, u]), {
                    track: g
                }
            }
        },
        20019: (e, t, r) => {
            "use strict";
            r.d(t, {
                M: () => l,
                O: () => n
            });
            var a = r(37876),
                s = r(14232),
                i = r(90511);
            let l = (0, s.createContext)({
                    uvert: i.v.GeneralUser
                }),
                n = ({
                    children: e,
                    uvert: t
                }) => (0, a.jsx)(l.Provider, {
                    value: {
                        uvert: t
                    },
                    children: e
                })
        },
        23242: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            let a = {
                black: "#10111a",
                gray70: "#424a51",
                gray60: "#616970",
                gray50: "#8d9ba1",
                gray40: "#ccd1d7",
                gray30: "#d8dde1",
                gray20: "#eceff4",
                gray10: "#f6f7f8",
                white: "#fff",
                primary: "#005eff",
                primaryDark: "#003899",
                accent: "#00efd2",
                danger: "#e61e39",
                danger10: "#fdedef",
                success: "#4cc863",
                success10: "#edfcef",
                warning: "#ffa035",
                warning10: "#fff5eb",
                info: "#3fb9f7",
                info10: "#ebf8ff"
            }
        },
        23403: e => {
            e.exports = {
                artworkPicture: "ArtworkPicture_artworkPicture__ZLPSm",
                artworkFallback: "ArtworkPicture_artworkFallback__GtWSt"
            }
        },
        23903: (e, t, r) => {
            "use strict";
            r.d(t, {
                p: () => s
            });
            var a = r(37876);
            let s = ({
                name: e,
                readOnly: t,
                type: r,
                disabled: s,
                ref: i,
                ...l
            }) => (0, a.jsx)("input", {
                disabled: s,
                id: e,
                name: e,
                readOnly: t,
                ref: i,
                type: r || "text",
                ...l
            });
            s.displayName = "Input"
        },
        24806: (e, t, r) => {
            "use strict";
            r.d(t, {
                GR: () => i,
                Xn: () => d,
                ah: () => u,
                pn: () => o,
                yu: () => l
            });
            var a = r(71697),
                s = r(30305);
            let i = {
                    [s.D.xs0]: {
                        x1: a.cc.rect.rect320x230,
                        x2: a.cc.rect.rect640x460
                    },
                    [s.D.md]: {
                        x1: a.cc.rect.rect454x324,
                        x2: a.cc.rect.rect784x560
                    },
                    [s.D.lg]: {
                        x1: a.cc.rect.rect320x230,
                        x2: a.cc.rect.rect640x460
                    },
                    [s.D.xl2]: {
                        x1: a.cc.rect.rect454x324,
                        x2: a.cc.rect.rect784x560
                    },
                    [s.D.xl3]: {
                        x1: a.cc.rect.rect640x460,
                        x2: a.cc.rect.rect1200x857
                    }
                },
                l = {
                    [s.D.xs0]: {
                        x1: a.cc.rect.rect227x162,
                        x2: a.cc.rect.rect454x324
                    },
                    [s.D.xl]: {
                        x1: a.cc.rect.rect320x230,
                        x2: a.cc.rect.rect640x460
                    },
                    [s.D.xl2]: {
                        x1: a.cc.rect.rect454x324,
                        x2: a.cc.rect.rect784x560
                    }
                },
                n = e => {
                    let t = {
                        longSide: e,
                        shortSide: Math.round(5 / 7 * e)
                    };
                    return {
                        x1: t,
                        x2: {
                            longSide: 2 * t.longSide,
                            shortSide: 2 * t.shortSide
                        }
                    }
                },
                c = (e, t) => {
                    let r = {
                        longSide: e,
                        shortSide: Math.round(e / t)
                    };
                    return {
                        x1: r,
                        x2: {
                            longSide: 2 * r.longSide,
                            shortSide: 2 * r.shortSide
                        }
                    }
                },
                o = {
                    [s.D.xs0]: n(227),
                    [s.D.xl]: n(320),
                    [s.D.xl2]: n(454)
                },
                d = {
                    [s.D.xs0]: c(227, 6 / 3.8),
                    [s.D.xl]: c(320, 6 / 3.88),
                    [s.D.xl3]: c(454, 6 / 3.98)
                },
                u = {
                    [s.D.xs0]: c(102, 6 / 3.8),
                    [s.D.lg]: c(227, 6 / 3.8)
                }
        },
        25470: (e, t, r) => {
            "use strict";
            r.d(t, {
                B5: () => n,
                IE: () => u,
                Ix: () => o,
                _4: () => c,
                km: () => d
            });
            var a = r(24806),
                s = r(71697),
                i = r(30305),
                l = r(10769);
            let n = (e, t) => {
                    if (!e) return "";
                    let r = (0, l.al)(e, {
                            resolution: s.cc.rect.rect1422x1016,
                            orientation: t
                        }),
                        a = (0, l.al)(e, {
                            resolution: s.cc.rect.rect2844x2032,
                            orientation: t
                        });
                    return `${r} 1x, ${a} 2x`
                },
                c = { ...a.GR,
                    [i.D.xl3]: {
                        x1: s.cc.rect.rect640x460,
                        x2: s.cc.rect.rect1024x735
                    }
                },
                o = (e, t, r) => {
                    if (!e) return [];
                    let a = Object.keys(r).map(Number).sort((e, t) => t - e);
                    return a.map((s, i) => ({
                        media: ((e, t, r) => {
                            if (0 === e) {
                                let e = Math.min(...r.filter(e => e > 0));
                                return e ? `(max-width: ${e-1}px)` : void 0
                            }
                            let a = r[t - 1];
                            return a ? `(min-width: ${e}px) and (max-width: ${a-1}px)` : `(min-width: ${e}px)`
                        })(s, i, a),
                        href: (0, l.al)(e, {
                            orientation: t,
                            resolution: r[s].x1
                        }),
                        imageSrcSet: u(e, t, s, r)
                    }))
                },
                d = (e, t) => e ? (0, l.al)(e, {
                    resolution: s.cc.rect.rect380x270,
                    orientation: t
                }) : "",
                u = (e, t, r, a) => {
                    if (!e) return "";
                    let s = (0, l.al)(e, {
                            orientation: t,
                            resolution: a[r].x1
                        }),
                        i = (0, l.al)(e, {
                            orientation: t,
                            resolution: a[r].x2
                        });
                    return `${s} 1x, ${i} 2x`
                }
        },
        30983: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => p
            });
            var a = r(37876),
                s = r(14232),
                i = r(69241),
                l = r(90413),
                n = r(30305),
                c = r(10769),
                o = r(57845),
                d = r.n(o);
            let u = ({
                src: e,
                preload: t,
                responsive: r,
                poster: o,
                autoPlay: u,
                className: p,
                mobileSize: m,
                desktopSize: g,
                ref: x,
                ...h
            }) => {
                let f = (0, l.A)(),
                    {
                        isTabletOrDesktop: v
                    } = (0, n.Q)(),
                    [y, w] = (0, s.useState)(null),
                    b = (0, s.useMemo)(() => {
                        let e;
                        return (e = v ? g : m) ? {
                            width: e.width,
                            ...e.height && {
                                height: e.height
                            }
                        } : {
                            width: v ? 1080 : 720
                        }
                    }, [v, g, m]),
                    j = (0, s.useMemo)(() => o || (f && e ? (0, c.$4)(e, { ...b,
                        videoPoster: !0
                    }) : void 0), [o, f, e, b]),
                    _ = j ? "" : "#t=0.1";
                return (0, s.useEffect)(() => {
                    let e = async () => {
                        x && "current" in x && x.current && await x.current.play()
                    };
                    !y || u && e()
                }, [u, y, x]), (0, s.useEffect)(() => {
                    f && w(b)
                }, [f, b]), (0, a.jsx)("video", {
                    autoPlay: !1,
                    className: (0, i.A)(d().video, p, {
                        [d().responsive]: r
                    }),
                    playsInline: !0,
                    poster: j,
                    preload: t || "metadata",
                    ref: x,
                    src: y ? `${(0,c.$4)(e,y)}${_}` : void 0,
                    ...h
                })
            };
            u.displayName = "SpeedSizeVideoRaw";
            let p = u
        },
        50859: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => s
            });
            var a = r(22884);
            let s = (e, t, r) => {
                let s = new Date().toISOString(),
                    i = {
                        event: "contentLoad",
                        action: "Pageview",
                        pageCat: e,
                        timestamp: s.slice(0, s.length - 1),
                        ...t
                    };
                r ? .account.isUserLoggedIn && (i.userID = r.identity.deprecatedId, i.subscriber = r ? .account.subscriptionActive ? "active" : "inactive", i.uOrds = r ? .history.ordersCreated, i.uDis = r ? .history.platesBought), (0, a.u)(i)
            }
        },
        55169: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                Newsletter: () => _,
                NewsletterFormType: () => w
            });
            var a, s = r(37876),
                i = r(14232),
                l = r(78970),
                n = r(27555),
                c = r(74773),
                o = r(2661),
                d = r(40097),
                u = r(87050),
                p = r(39313),
                m = r(54111),
                g = r(10769),
                x = r(16909),
                h = r(35891),
                f = r(36256),
                v = r(14619),
                y = r(39432),
                w = ((a = {}).REGULAR = "regular", a.REGISTRATION = "registration", a.CHECKOUT = "checkout", a.SETTINGS = "settings", a.POPUP = "popup", a);
            let b = {
                    email: null,
                    isError: !1
                },
                j = {
                    email: ""
                },
                _ = ({
                    formType: e = "regular",
                    className: t,
                    webflow: r = !1
                }) => {
                    let a, {
                            userInfo: w,
                            fetchedUserInfo: _
                        } = (0, i.useContext)(h.cy),
                        S = (0, i.useRef)(null),
                        {
                            pushEvent: C
                        } = (0, o.L)();
                    (0, p.P)(S, {
                        once: !0,
                        callback: () => (0, l.I)(e)
                    });
                    let [k, N] = (0, i.useState)(b), [P, E] = (0, i.useState)(j), {
                        mutate: D,
                        isPending: A
                    } = (a = {
                        onSuccess: async t => {
                            switch (t.status) {
                                case u.it.SUCCESS:
                                    N({
                                        email: "E-mail added to the newsletter",
                                        isError: !1
                                    }), (0, l.N)({
                                        formType: e
                                    }), C({
                                        eventType: "click",
                                        eventName: "newsletterRegistration"
                                    });
                                    break;
                                case u.it.ALREADY_ADDED:
                                    N({
                                        email: "Your email is already in newsletter",
                                        isError: !0
                                    });
                                    break;
                                case u.it.FORMAT_ERROR:
                                    N({
                                        email: "Incorrect email address format",
                                        isError: !0
                                    });
                                    break;
                                default:
                                    N({
                                        email: "Could not add you email, please try again.",
                                        isError: !0
                                    })
                            }
                        },
                        onError: e => {
                            (0, x.vV)("sendNewsletter error " + JSON.stringify(e))
                        }
                    }, (0, d.n)({
                        mutationFn: e => u.$y.newsletterSubscribe({
                            email: e
                        }),
                        onSuccess: a ? .onSuccess,
                        onError: a ? .onError
                    }));
                    if (_ && w ? .account.isUserLoggedIn && !w ? .account.shouldMarketingConsentsShow) return null;
                    let I = (0, g.v9)({
                        assetPath: "/images/newsletter/newsletter_discount_v3.jpg",
                        widths: [660, 1320]
                    });
                    return (0, s.jsx)(f.mc, {
                        className: t,
                        variant: "noPaddingMobile",
                        children: (0, s.jsx)(f.xA, {
                            variant: "noGap",
                            children: (0, s.jsxs)("section", {
                                className: (0, v.cn)("col-span-full grid grid-cols-subgrid", r ? "grid!" : null),
                                "data-testid": "newsletter-section",
                                id: "newsletter",
                                ref: S,
                                children: [(0, s.jsx)("img", {
                                    alt: "Newsletter signup with 25% discount offer for Displate products",
                                    className: "col-span-full lg:col-span-6 h-full w-full self-center object-contain lg:object-cover lg:rounded-l-lg",
                                    "data-testid": "newsletter-image",
                                    loading: "lazy",
                                    sizes: I.sizes,
                                    src: I.src
                                }), (0, s.jsxs)("div", {
                                    className: "col-span-full lg:col-span-6 bg-background-information p-8 md:p-14 flex flex-col justify-center lg:rounded-r-lg 2xl:px-20",
                                    children: [(0, s.jsx)("h2", {
                                        className: "w-4/5 sm:w-3/4 2xl:w-full text-heading-h3 sm:text-heading-h2 text-wrap-balance mb-4",
                                        children: "Sign up and never miss a deal"
                                    }), (0, s.jsx)("p", {
                                        className: "text-body-lg mb-4",
                                        children: "Join our newsletter for the latest discounts and Displate goodies"
                                    }), (0, s.jsx)("form", {
                                        className: "flex items-end mb-2",
                                        children: (0, s.jsx)(f.A_, {
                                            actionSlot: (0, s.jsx)(f.$n, {
                                                loading: A,
                                                onClick: () => {
                                                    let e = !P.email.trim().length,
                                                        t = !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/i.test(P.email.trim());
                                                    e || t ? N({ ...k,
                                                        ...(e || t) && {
                                                            email: e ? "Required field" : "Incorrect email address format"
                                                        },
                                                        isError: !0
                                                    }) : (N({
                                                        email: null,
                                                        isError: !1
                                                    }), D(P.email))
                                                },
                                                type: "button",
                                                variant: "primary",
                                                children: "Sign up"
                                            }),
                                            autoComplete: "email",
                                            className: "w-full",
                                            error: k.isError && k.email ? k.email : void 0,
                                            label: "Email address",
                                            name: "email",
                                            onChange: e => {
                                                let {
                                                    target: t
                                                } = e, {
                                                    name: r
                                                } = t, a = t.value;
                                                E({ ...P,
                                                    [r]: a
                                                })
                                            },
                                            placeholder: "Enter your e-mail",
                                            type: "email",
                                            value: P.email
                                        })
                                    }), !k.isError && k.email ? (0, s.jsx)("p", {
                                        className: "text-heading-subtitle-eyebrow text-text-success mb-2",
                                        children: k.email
                                    }) : null, (0, s.jsxs)("p", {
                                        className: "text-body-xs",
                                        children: ["By clicking “Sign up”, you agree to receiving emails and to processing of your personal data in accordance with the", " ", (0, s.jsx)(f.N_, {
                                            asChild: !0,
                                            variant: "secondary",
                                            children: (0, s.jsx)(n.A, {
                                                routeInfo: (0, y.Z)(),
                                                target: "_blank",
                                                children: "Privacy policy"
                                            })
                                        }), ". The data will be processed to customize the newsletter content according to your personal preferences. The controller of your personal data is Displate, i.e. GWD Concept Sp. z o. o. with a registered office in Warsaw. You can unsubscribe at any time by clicking the “Unsubscribe” button in the email footer, unchecking your consent in the “Basic Info” tab of the customer panel, or sending a request to ", (0, s.jsx)(c.$, {
                                            routeInfoFn: m.Qq,
                                            variant: "secondary"
                                        }), "."]
                                    })]
                                })]
                            })
                        })
                    })
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
        73480: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => c
            });
            var a = r(87973),
                s = r(47765),
                i = r(69894),
                l = r(7234),
                n = r(1833);
            let c = () => {
                let {
                    data: e
                } = (0, a._v)(), t = (0, s.aP)(), r = (0, n.o)(e => e.pagesTraversedByUser), c = (0, n.o)(e => e.wasClosed), o = !!e && 0 === e.wishlistItemsCount, d = [i.j.readableName, l.ak.readableName].includes(t.readableName);
                return {
                    shouldShowDrawer: o && d && !c,
                    shouldImmediatelyShowDrawer: o && d && r > 4 && c
                }
            }
        },
        74773: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => l
            });
            var a = r(37876),
                s = r(27555),
                i = r(36256);
            let l = ({
                className: e,
                routeInfoFn: t,
                variant: r = "primary"
            }) => {
                let l = t(),
                    n = l.route.replace("mailto:", "");
                return (0, a.jsx)(i.N_, {
                    asChild: !0,
                    className: e,
                    variant: r,
                    children: (0, a.jsx)(s.A, {
                        routeInfo: l,
                        children: n
                    })
                })
            }
        },
        77128: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var a = r(37876);
            let s = e => (0, a.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 40 40",
                fill: "none",
                ...e,
                children: [(0, a.jsxs)("g", {
                    clipPath: "url(#clip0_7321_38479)",
                    children: [(0, a.jsx)("path", {
                        d: "M36.2793 0C38.3342 0 39.9999 1.6658 40 3.7207V36.2793C40 38.3343 38.3343 40 36.2793 40H3.7207C1.6658 39.9999 0 38.3342 0 36.2793V3.7207C7.91882e-05 1.66585 1.66585 7.66112e-05 3.7207 0H36.2793ZM7.54102 33.3291L13.251 32.2217L15.1475 37.7207L19.9707 29.3643C16.7818 29.357 13.8381 28.305 11.4648 26.5312L7.54102 33.3291ZM28.5322 26.5381C26.1573 28.3102 23.2125 29.36 20.0225 29.3643L24.8467 37.7197L26.7432 32.2217L32.4531 33.3281L28.5322 26.5381ZM19.999 3.51465C13.6061 3.51465 8.42285 8.69689 8.42285 15.0898C8.42297 21.4827 13.6061 26.665 19.999 26.665C26.3917 26.6648 31.5741 21.4826 31.5742 15.0898C31.5742 8.69702 26.3918 3.51486 19.999 3.51465Z",
                        fill: "#F4F2EB"
                    }), (0, a.jsx)("path", {
                        d: "M20.4738 8.04834L22.5262 12.8144L27.6932 13.2936L23.7947 16.7184L24.9357 21.7805L20.4738 19.1312L16.0119 21.7805L17.1528 16.7184L13.2543 13.2936L18.4213 12.8144L20.4738 8.04834Z",
                        fill: "#F4F2EB"
                    })]
                }), (0, a.jsx)("defs", {
                    children: (0, a.jsx)("clipPath", {
                        id: "clip0_7321_38479",
                        children: (0, a.jsx)("path", {
                            d: "M0 0H40V40H0V0Z",
                            fill: "white"
                        })
                    })
                })]
            })
        },
        77518: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => B
            });
            var a = r(37876),
                s = r(14232),
                i = r(56413),
                l = r(67768);
            r(18847);
            var n = r(47321),
                c = r(62056),
                o = r(2443),
                d = r(9054),
                u = r(67911),
                p = r(83736),
                m = r(61817),
                g = r(38847),
                x = r(8735),
                h = r(10698);
            let f = ({
                countryCode: e
            }) => {
                let {
                    setCountryCode: t
                } = (0, h.C)();
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
                S = r(62564),
                C = r(73678),
                k = r(29454),
                N = r(22884);
            let P = ({
                userVertical: e,
                userEngagement: t
            }) => {
                (0, N.u)({
                    event: "user_data",
                    user_vertical: e,
                    user_engagement_level: t
                })
            };
            var E = r(84810);
            let D = "user-vertical";
            var A = r(74359),
                I = r(98461),
                L = r(35891),
                R = r(87050);
            let U = ["userVertical"];
            var $ = r(90511);
            let z = () => {
                let e = (0, y.usePathname)(),
                    {
                        data: t,
                        isError: r,
                        error: a,
                        refetch: i
                    } = (() => {
                        let {
                            fetchedUserInfo: e
                        } = (0, s.useContext)(L.cy);
                        return (0, A.I)({
                            queryKey: U,
                            queryFn: () => R.$y.getUsersVerticalV2((0, I.R)()),
                            enabled: e,
                            staleTime: 1e3,
                            retry: !1
                        })
                    })(),
                    {
                        userInfo: l
                    } = (0, s.useContext)(L.cy),
                    n = l ? .account.engagement.type,
                    c = (0, s.useRef)(!1);
                return (0, s.useEffect)(() => {
                    c.current ? i() : c.current = !0
                }, [e]), (0, s.useEffect)(() => {
                    void 0 !== t && void 0 !== n && (t.type ? (k.A.set(D, t.type, {
                        domain: E.ConfigPublic.VerticalizationCookieDomain
                    }), P({
                        userVertical: t.type,
                        userEngagement: n
                    })) : (k.A.remove(D, {
                        domain: E.ConfigPublic.VerticalizationCookieDomain
                    }), P({
                        userVertical: $.v.GeneralUser,
                        userEngagement: n
                    })))
                }, [t, n]), (0, s.useEffect)(() => {
                    r && console.error(`Unable to update user vertical: ${a}`)
                }, [r, a]), null
            };
            var O = r(20019),
                T = r(36256);
            let V = () => null,
                B = ({
                    gitInfo: e,
                    children: t,
                    uvert: r,
                    countryCode: h,
                    featureFlags: k,
                    tpid: N,
                    abTests: P
                }) => {
                    let E, D, [A] = (0, s.useState)(() => new i.E(p.K));
                    return E = (0, y.usePathname)(), D = (0, w.o)(e => e.incrementPagesTraversedByUser), (0, s.useEffect)(() => {
                        D()
                    }, [E]), (0, j.p)(), (0, s.useEffect)(() => {
                        window.localStorage.removeItem("elyGtmUserSession"), window.localStorage.removeItem("recentlyViewed"), (0, c.s)()
                    }, []), (0, a.jsx)(d.A, {
                        children: (0, a.jsxs)(l.Ht, {
                            client: A,
                            children: [(0, a.jsxs)(v.y, {
                                countryCode: h,
                                children: [(0, a.jsx)(f, {
                                    countryCode: h
                                }), (0, a.jsx)(O.O, {
                                    uvert: r,
                                    children: (0, a.jsx)(n.td, {
                                        value: P,
                                        children: (0, a.jsx)(L.OJ, {
                                            children: (0, a.jsx)(m.J, {
                                                children: (0, a.jsxs)(g.j$, {
                                                    value: k,
                                                    children: [(0, a.jsx)(b.c, {}), (0, a.jsx)(_.H, {}), (0, a.jsx)(z, {}), (0, a.jsx)(S.A, {
                                                        countryCode: h
                                                    }), (0, a.jsxs)(T.Uc, {
                                                        children: [(0, a.jsx)(u.E, {}), (0, a.jsx)(o.s, {}), (0, a.jsx)(x.i, {
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
                            }), e && (0, a.jsx)(C.DynamicGitInfo, {
                                gitInfo: e,
                                tpid: N ? ? null
                            })]
                        })
                    })
                }
        },
        78970: (e, t, r) => {
            "use strict";
            r.d(t, {
                I: () => i,
                N: () => s
            });
            var a = r(22884);
            let s = ({
                    formType: e
                }) => {
                    (0, a.u)({
                        event: "newsletter_signup",
                        newsletter_form_type: e
                    })
                },
                i = e => {
                    (0, a.u)({
                        event: "newsletter_form_view",
                        newsletter_form_type: e
                    })
                }
        },
        85314: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => m
            });
            var a = r(37876),
                s = r(14232),
                i = r(68873),
                l = r(30983),
                n = r(39313),
                c = r(30305),
                o = r(10769),
                d = r(36256),
                u = r(14619);
            let p = [{
                    title: "Damage-resistant metal print",
                    videoUrl: "video.displate.com/metal_5b9cb00753.mp4",
                    poster: "/images/usp/usp-poster-1.jpg"
                }, {
                    title: "Tool-free, magnet mounting included",
                    videoUrl: "video.displate.com/mounting_3176f364dc.mp4",
                    poster: "/images/usp/usp-poster-2.jpg"
                }, {
                    title: "Gift-ready packaging",
                    videoUrl: "video.displate.com/gift_ready_ca0f5ea56d.mp4",
                    poster: "/images/usp/usp-poster-3.jpg"
                }],
                m = ({
                    bottomSlot: e,
                    onViewportEnter: t
                } = {}) => {
                    let r = (0, s.useRef)([]),
                        m = (0, s.useRef)(null),
                        g = (0, s.useRef)(null),
                        {
                            isMobile: x
                        } = (0, c.Q)(),
                        h = async e => {
                            let t = e + 1,
                                a = t >= p.length ? 0 : t;
                            if (await r.current[a] ? .play(), x && g.current && r.current[a]) {
                                let e = g.current,
                                    t = r.current[a],
                                    s = e.getBoundingClientRect(),
                                    i = t.getBoundingClientRect(),
                                    l = e.scrollLeft + (i.left - s.left) - 16;
                                e.scrollTo({
                                    left: l,
                                    behavior: "smooth"
                                })
                            }
                        };
                    return (0, n.P)(m, {
                        once: !0,
                        delay: 0,
                        callback: async () => {
                            await r.current[0] ? .play(), await t ? .()
                        }
                    }), (0, n.P)(m, {
                        once: !0,
                        delay: 1e3,
                        threshold: .5,
                        callback: () => {
                            (0, i.Z)({
                                elementId: "instruction_video_section",
                                elementVariant: "none"
                            })
                        }
                    }), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: (0, u.cn)("relative", "bg-[linear-gradient(-79.96deg,rgba(244,41,255,1)_5.29%,rgba(239,22,131,1)_20.91%,rgba(18,18,18,1)_36.54%)]", "py-10", "text-text-inverse", "lg:py-12"),
                            "data-testid": "why-displate-section-wrapper",
                            ref: m,
                            children: (0, a.jsx)(d.mc, {
                                asChild: !0,
                                children: (0, a.jsx)(d.xA, {
                                    children: (0, a.jsxs)("div", {
                                        className: (0, u.cn)("col-span-4 md:col-span-8 lg:col-span-12", "flex flex-col gap-6", "lg:flex-row lg:items-center lg:gap-10 lg:py-12"),
                                        children: [(0, a.jsx)("h2", {
                                            className: (0, u.cn)("text-center text-display-sm md:text-display-md font-display uppercase", "lg:w-[200px] lg:shrink-0 lg:px-0 lg:text-left", "xl:w-[345px]"),
                                            children: "Why you need metal art from Displate?"
                                        }), (0, a.jsx)("div", {
                                            className: (0, u.cn)("grid grid-cols-1 gap-4 overflow-x-auto ", "md:grid-cols-[repeat(3,1fr)] ", "lg:min-w-0 lg:flex-1 "),
                                            ref: g,
                                            children: p.map(({
                                                title: e,
                                                videoUrl: t,
                                                poster: s
                                            }, i) => (0, a.jsxs)("div", {
                                                className: (0, u.cn)("relative w-full overflow-hidden rounded-xl", "md:w-[328px]", "lg:w-full"),
                                                "data-testid": "why-displate-video-box",
                                                children: [(0, a.jsx)(l.A, {
                                                    className: "block w-full lg:w-full lg:object-cover",
                                                    controls: !1,
                                                    muted: !0,
                                                    onEnded: () => h(i),
                                                    poster: (0, o.v9)({
                                                        assetPath: s,
                                                        speedsize: {
                                                            width: 768
                                                        }
                                                    }).src,
                                                    preload: "metadata",
                                                    ref: e => {
                                                        e && (r.current[i] = e)
                                                    },
                                                    src: t
                                                }, e), (0, a.jsx)("div", {
                                                    className: "absolute bottom-0 w-full rounded-b-xl bg-neutral-800/70 p-2 text-center backdrop-blur-[2px]",
                                                    children: (0, a.jsx)("p", {
                                                        className: (0, u.cn)("text-heading-subtitle", "lg:mx-auto lg:max-w-[140px]", "xl:max-w-full"),
                                                        children: e
                                                    })
                                                })]
                                            }, e))
                                        })]
                                    })
                                })
                            })
                        }), e]
                    })
                }
        },
        88157: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => d
            });
            var a = r(37876),
                s = r(14232),
                i = r(69241),
                l = r(25470),
                n = r(10769),
                c = r(23403),
                o = r.n(c);
            let d = ({
                imageCoreUrl: e,
                artworkOrientation: t,
                artworkSets: r,
                className: c,
                onLoaded: d,
                loading: u = "eager",
                fetchPriority: p = "auto",
                pinNoPin: m = !0,
                alt: g = "artwork"
            }) => {
                let [x, h] = (0, s.useState)(!1), f = (0, l.km)(e, t), v = Object.keys(r).map(e => Number(e));
                return (0, a.jsx)("picture", {
                    className: (0, i.A)(o().artworkPicture, c),
                    children: x ? (0, a.jsx)("img", {
                        alt: "no-image",
                        className: (0, i.A)(o().artworkPicture, o().artworkFallback, c),
                        loading: u,
                        src: (0, n.qH)("/images/no-image.svg")
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [v.reverse().map(s => (0, a.jsx)("source", {
                            "data-testid": "artwork-source",
                            media: 0 !== s ? `(min-width: ${s}px)` : void 0,
                            srcSet: `${(0,l.IE)(e,t,s,r)}`,
                            type: "image/jpeg"
                        }, `${s}-jpeg`)), (0, a.jsx)("img", {
                            alt: g,
                            className: (0, i.A)(o().artworkPicture, c),
                            "data-pin-nopin": m,
                            "data-testid": "artwork-img",
                            draggable: "false",
                            fetchPriority: p,
                            loading: u,
                            onError: () => {
                                h(!0)
                            },
                            onLoad: d,
                            src: f
                        })]
                    })
                })
            }
        }
    }
]);
//#
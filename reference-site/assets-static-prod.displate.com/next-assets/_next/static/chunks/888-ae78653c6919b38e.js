"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        3320: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var a = r(37876),
                s = r(10769),
                i = r(14619),
                n = r(87050);
            let l = {
                    [n.eq.VISA]: {
                        alt: "visa icon",
                        src: "/icons/payment-providers/visa.svg"
                    },
                    [n.eq.MASTERCARD]: {
                        alt: "mastercard icon",
                        src: "/icons/payment-providers/mastercard.svg"
                    },
                    [n.eq.DISCOVER]: {
                        alt: "discover icon",
                        src: "/icons/payment-providers/discover.svg"
                    },
                    [n.eq.AMEX]: {
                        alt: "amex icon",
                        src: "/icons/payment-providers/amex.svg"
                    },
                    [n.eq.PAYPAL]: {
                        alt: "paypal icon",
                        src: "/icons/payment-providers/paypal.svg"
                    },
                    [n.eq.PAYPAL_SECURE]: {
                        alt: "paypal secure icon",
                        src: "/icons/payment-providers/paypal2.svg"
                    },
                    [n.eq.KLARNA]: {
                        alt: "klarna icon",
                        src: "/icons/payment-providers/klarna.png"
                    },
                    [n.eq.GPAY]: {
                        alt: "google pay icon",
                        src: "/icons/payment-providers/gpay.svg"
                    },
                    [n.eq.CUP]: {
                        alt: "union pay icon",
                        src: "/icons/payment-providers/cup.svg"
                    },
                    [n.eq.DINERS]: {
                        alt: "diners icon",
                        src: "/icons/payment-providers/diners.svg"
                    },
                    [n.eq.BANK_TRANSFER]: {
                        alt: "bank transfer icon",
                        src: "/icons/payment-providers/directEbanking.svg"
                    },
                    [n.eq.EPS]: {
                        alt: "eps icon",
                        src: "/icons/payment-providers/eps.svg"
                    },
                    [n.eq.BCMC]: {
                        alt: "bcmc icon",
                        src: "/icons/payment-providers/bcmc.svg"
                    },
                    [n.eq.TRUSTLY]: {
                        alt: "trustly icon",
                        src: "/icons/payment-providers/trustly.svg"
                    },
                    [n.eq.GIRO]: {
                        alt: "giro pay icon",
                        src: "/icons/payment-providers/giropay.svg"
                    },
                    [n.eq.IDEAL]: {
                        alt: "iDeal icon",
                        src: "/icons/payment-providers/ideal.svg"
                    },
                    [n.eq.APPLE_PAY]: {
                        alt: "apple pay icon",
                        src: "/icons/payment-providers/applepay.svg"
                    }
                },
                o = ({
                    className: e,
                    paymentMethods: t
                }) => {
                    let r = t.map(e => l[e]);
                    return (0, a.jsx)("div", {
                        className: (0, i.cn)("flex flex-wrap justify-center gap-2", e),
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
        11654: (e, t, r) => {
            r.d(t, {
                y: () => o
            });
            var a = r(37876),
                s = r(37473),
                i = r(69304),
                n = r(14619),
                l = r(87050);
            let o = ({
                artworkSize: e,
                artworkOrientation: t,
                artworkPicture: r
            }) => {
                let o = e === s.or.M || !0,
                    d = e === s.or.L,
                    c = t === l.JH.VERTICAL || !0,
                    u = t === l.JH.HORIZONTAL;
                return (0, a.jsxs)("div", {
                    className: "relative perspective-[450px]",
                    children: [(0, a.jsx)("div", {
                        className: (0, n.cn)("absolute opacity-40", o && c && "transform-[translate(15%,-15%)_rotateY(40deg)_scale3d(0.55,0.55,1)]", d && c && "transform-[translate(15%,-15%)_rotateY(45deg)_scale3d(0.6,0.6,1)]", o && u && "transform-[translate(15%,10%)_rotateY(52deg)_scale3d(0.79,0.79,1)]", d && u && "transform-[translate(20%,20%)_rotateY(53deg)_scale3d(1,1,1)]"),
                        children: r
                    }), (0, a.jsx)(i.$, {
                        accessoryType: l.Xt.STAND,
                        isPosterLarge: d
                    })]
                })
            }
        },
        13930: (e, t, r) => {
            r.d(t, {
                M: () => s
            });
            var a = r(22884);
            let s = ({
                currency: e,
                method: t,
                items: r
            }) => {
                let s = r.filter(e => null != e.price),
                    i = s.length > 0 ? s.reduce((e, t) => e + (t.price ? ? 0) * t.quantity, 0) : void 0,
                    n = r.map(({
                        item_id: e,
                        price: t,
                        ...r
                    }) => ({ ...r,
                        ...null != e && {
                            item_id: e
                        },
                        ...null != t && {
                            price: t
                        }
                    }));
                (0, a.u)({
                    event: "sst_add_to_cart",
                    ecommerce: {
                        method: t,
                        currency: e,
                        ...void 0 !== i && {
                            value: i
                        },
                        items: n
                    }
                })
            }
        },
        14399: (e, t, r) => {
            r.d(t, {
                A: () => i,
                Op: () => n,
                _V: () => l
            });
            var a = r(84810),
                s = r(10769);
            let i = (e, t, r) => e ? t ? l(e, r) : n(e, r) : {
                    src: "",
                    srcSet: "",
                    widthsSrc: []
                },
                n = (e, t) => e ? (0, s.ZX)({
                    assetPath: e,
                    assetSubPath: "avatars",
                    assetDomain: a.ConfigPublic.ArtworkDomain,
                    widths: t
                }) : {
                    src: "",
                    srcSet: "",
                    widthsSrc: []
                },
                l = (e, t) => e ? (0, s.ZX)({
                    assetPath: e,
                    assetSubPath: "brand/layout",
                    assetDomain: a.ConfigPublic.ArtworkDomain,
                    widths: t
                }) : {
                    src: "",
                    srcSet: "",
                    widthsSrc: []
                }
        },
        16322: (e, t, r) => {
            r.d(t, {
                b: () => i
            });
            var a = r(84583),
                s = r(17495);
            let i = e => e ? e.map(e => ({
                internalId: e.internalId,
                externalId: e.externalId,
                imageCoreUrl: e.imageCoreUrl,
                orientation: e.orientation,
                title: e.title,
                labels: (0, a.pr)(e.labels),
                sku: e.sku || (0, s.s)(e.internalId)
            })) : []
        },
        16373: (e, t, r) => {
            r.d(t, {
                z: () => d
            });
            var a = r(14232),
                s = r(50859),
                i = r(2661),
                n = r(92719),
                l = r(47765),
                o = r(35891);
            let d = () => {
                let [e, t] = (0, a.useState)([]), {
                    consumeClientStackItems: r
                } = (0, n.n)(), {
                    fetchedUserInfo: d,
                    userInfo: c,
                    error: u
                } = (0, a.useContext)(o.cy), m = (0, l.aP)(), {
                    pushEvent: p
                } = (0, i.L)(), h = (0, a.useCallback)((e = {}) => {
                    let r = { ...e,
                        pageCategory: e.pageCategory || m.analyticsGaName
                    };
                    t(e => [...e, r])
                }, [m.analyticsGaName]);
                return (0, a.useEffect)(() => {
                    e.length && (d || u) && (e.forEach(e => {
                        (({
                            pageCategory: e,
                            additionalData: t = {},
                            eventParams: a
                        }) => {
                            ["category", "collection-page", "payment", "checkout"].includes(e) || p({
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
        17495: (e, t, r) => {
            r.d(t, {
                N: () => n,
                s: () => i
            });
            var a = r(97160),
                s = r(87050);
            let i = (e, t = "P001") => {
                    let r = e.toString().padStart(8, "0");
                    return `${t}${r}`
                },
                n = e => {
                    let t = a.$I.of().parse(e, "US");
                    return t ? {
                        internalId: t.artworkId,
                        size: o(t.size),
                        finish: l(t.finish),
                        frame: d(t.frame)
                    } : null
                },
                l = e => {
                    switch (e) {
                        case a.Lc.MATTE:
                            return s.ZU.MATTE;
                        case a.Lc.GLOSS:
                            return s.ZU.GLOSS;
                        case a.Lc.TEXTRA:
                            return s.ZU.TEXTRA;
                        default:
                            return s.ZU.MATTE
                    }
                },
                o = e => {
                    switch (e) {
                        case a.TZ.MEDIUM:
                            return s.or.MEDIUM;
                        case a.TZ.LARGE:
                            return s.or.LARGE;
                        case a.TZ.XLARGE:
                            return s.or.XLARGE;
                        default:
                            return s.or.MEDIUM
                    }
                },
                d = e => {
                    switch (e) {
                        case a.oM.NONE:
                            return s.wI.NONE;
                        case a.oM.NATURAL_WOOD:
                            return s.wI.NATURAL;
                        case a.oM.GRAPHITE:
                            return s.wI.GRAPHITE;
                        case a.oM.WHITE_WOOD:
                            return s.wI.WHITE;
                        case a.oM.BLACK_WOOD:
                            return s.wI.BLACK;
                        default:
                            return s.wI.NONE
                    }
                }
        },
        23039: (e, t, r) => {
            r.d(t, {
                X: () => c
            });
            var a = r(14232),
                s = r(74359),
                i = r(16903),
                n = r(35891),
                l = r(13341),
                o = r(87050);
            let d = ["displate-club-offers"],
                c = e => {
                    let t = (e => {
                            let {
                                fetchedUserInfo: t
                            } = (0, a.useContext)(n.cy), r = (0, i.p)();
                            return (0, s.I)({
                                queryKey: [...l.L, ...d, e, r],
                                queryFn: () => o.$y.getDisplateClubUserOfferDataV3(r, e ? .limit, e ? .purchasable, e ? .sortPrice),
                                enabled: !!t && !!r,
                                staleTime: 6e4
                            })
                        })(e),
                        {
                            data: r
                        } = t,
                        c = r ? .status,
                        u = (0, a.useMemo)(() => r ? .offers.find(e => e.strategy === o.$1.ORDER), [r]),
                        m = (0, a.useMemo)(() => r ? .offers.find(e => e.strategy === o.$1.CURRENT_CART), [r]);
                    return {
                        displateClubOffersQuery: t,
                        displateClubOrderBasedOffer: u,
                        displateClubCartBasedOffer: m,
                        displateClubLowestPossibleOffer: (0, a.useMemo)(() => r ? .offers.find(e => e.strategy === o.$1.LOWEST_POSSIBLE), [r]),
                        displateClubOffersStatus: c,
                        displateClubFlatPriceOffer: (0, a.useMemo)(() => r ? .offers.find(e => e.strategy === o.$1.FLAT_PRICE), [r])
                    }
                }
        },
        23412: (e, t, r) => {
            r.d(t, {
                Bm: () => I,
                nz: () => f,
                xG: () => _,
                P$: () => g,
                v2: () => v,
                T: () => y
            });
            var a = r(37876),
                s = r(95729),
                i = r(27555),
                n = r(16909),
                l = r(36256),
                o = r(1025),
                d = r(48803),
                c = r(16322),
                u = r(29633),
                m = r(55528),
                p = r(30236),
                h = r(60013);
            let x = {
                    pathnamePatterns: ["/artist", "/custom-displate", "/following", "/licensed"]
                },
                y = (e, t = x) => !!(t.pathnamePatterns && t.pathnamePatterns.some(t => e.startsWith(t))) || !1,
                g = e => (t, r, a) => {
                    let s = e ? .[t] ? ? [];
                    return {
                        name: t,
                        shouldBeShown: s.length >= 3,
                        masonryListingFunction: r,
                        items: (0, c.b)(s),
                        ...a
                    }
                },
                v = (e, t) => ({ ...t,
                    itemListName: e.heading ? ? (0, n.ZH)(e.name),
                    listingFunction: e.masonryListingFunction
                }),
                _ = (e, t, r, s, i, n) => {
                    let l, o = !!r && y(r, s),
                        c = n ? ? m.w,
                        x = [...o ? [] : [{
                            item: (0, a.jsx)(d.k, {}),
                            position: p.X
                        }], {
                            item: (0, a.jsx)(h.G, {}),
                            position: p.J
                        }];
                    return l = e.overrideGridComponent ? (0, a.jsx)(e.overrideGridComponent, {}) : (0, a.jsx)(u.m, {
                        artworksToDisplay: i || u.T,
                        customGridItem: c,
                        feedName: e.name,
                        infiniteScroll: e.infiniteScroll,
                        items: e.items,
                        metadata: v(e, t),
                        positionedGridItems: x,
                        redirectButton: e.redirectButton
                    }, e.name), {
                        heading: e.heading ? ? e.name,
                        content: l
                    }
                },
                f = e => e.every(e => !1 === e.shouldBeShown),
                I = ({
                    feedName: e
                }) => (0, a.jsx)(l.$n, {
                    asChild: !0,
                    className: "mt-6 md:mt-10",
                    size: "lg",
                    variant: "primary",
                    children: (0, a.jsx)(i.A, {
                        onClick: () => (0, s.z)("masonry_see_all_posters_button", (0, n.Iy)(e ? ? "")),
                        routeInfo: (0, o.Z)({
                            query: {
                                page: "2"
                            }
                        }),
                        children: "See all posters"
                    })
                })
        },
        28431: (e, t, r) => {
            r.d(t, {
                g: () => i,
                u: () => s
            });
            var a = r(87050);
            let s = {
                    [a.$1.FLAT_PRICE]: "lime",
                    [a.$1.ORDER]: "magenta"
                },
                i = "light-blue"
        },
        28670: (e, t, r) => {
            r.d(t, {
                X: () => n,
                y: () => l
            });
            var a = r(74359),
                s = r(16903),
                i = r(87050);
            let n = ["checkout-providers"],
                l = e => (0, a.I)({
                    queryKey: [...n, e],
                    queryFn: () => i.$y.getCheckoutProvidersV4(e, (0, s.j)())
                })
        },
        30236: (e, t, r) => {
            r.d(t, {
                J: () => s,
                X: () => a
            });
            let a = {
                    mobile: 7,
                    desktop: 10
                },
                s = {
                    mobile: 31,
                    desktop: 31
                }
        },
        36573: (e, t, r) => {
            r.d(t, {
                Dj: () => i,
                Go: () => o,
                U8: () => l,
                ZF: () => n
            });
            var a = r(31850),
                s = r(16909);
            let i = (e, t, r, a) => `${e}-${t}-${r}-${a}`,
                n = e => e.split("/").slice(-2).filter(e => e).join("/"),
                l = () => {
                    let e = (0, a.qg)(window.navigator.userAgent).isMobile ? "mobile" : "desktop",
                        t = (0, s.UN)() ? "Retina" : "Standard";
                    return `${e}${t}`
                },
                o = e => e.split("/").pop() || e
        },
        38757: (e, t, r) => {
            r.d(t, {
                V: () => s
            });
            var a = r(98461);
            let s = (e, t) => {
                    e.metadata.messageSendingDisabled || t({
                        eventName: "artworkClick",
                        eventType: "click",
                        eventParams: i(e)
                    })
                },
                i = e => {
                    let {
                        pathname: t
                    } = window.location, r = (0, a.R)(), {
                        message: s,
                        metadata: {
                            athenaPageName: i,
                            listingFunction: n,
                            listingType: l,
                            searchQueryId: o
                        }
                    } = e;
                    return {
                        impressionId: `${s.index+1}_${s.externalId}_${r}`,
                        userId: r,
                        target: `displate/${s.externalId}`,
                        context: {
                            itemListId: `PT:${i}|LT:${l}|LF:${n}`,
                            abTest: null,
                            position: s.index + 1,
                            source: t
                        },
                        itemCollectionId: s.externalId,
                        searchQueryId: o || null,
                        searchPosition: s.index + 1,
                        itemId: s.internalId
                    }
                }
        },
        40510: (e, t, r) => {
            r.d(t, {
                Q: () => s
            });
            var a = r(51192);
            let s = e => {
                (0, a.O)({
                    elementId: e,
                    elementVariant: "upsell_drawer"
                })
            }
        },
        43160: (e, t, r) => {
            r.d(t, {
                E: () => i,
                F: () => s
            });
            var a = r(87050);
            let s = {
                    [a.Xt.MAGNET_3_PACK]: 738196,
                    [a.Xt.MAGNET_9_PACK]: 738197,
                    [a.Xt.MAGNET_3D]: 5098599,
                    [a.Xt.STAND]: 6927502,
                    [a.Xt.AMBIENT_LIGHT]: 5652955,
                    [a.Xt.HD_MOUNTING_SYSTEM]: 5659414
                },
                i = (e, t) => ({
                    externalId: s[e.type],
                    price: e.price.amount,
                    lowestPrice: e.lowestPrice ? .amount,
                    quantity: t || 1,
                    currency: e.price.currency,
                    sku: e.sku
                })
        },
        48124: (e, t, r) => {
            r.d(t, {
                S: () => o,
                o: () => l
            });
            var a = r(14232),
                s = r(74359),
                i = r(35891),
                n = r(8341);
            let l = ["accessories-cart-excluded"],
                o = e => {
                    let {
                        fetchedUserInfo: t
                    } = (0, a.useContext)(i.cy);
                    return (0, s.I)({
                        queryKey: l,
                        queryFn: () => n.$.getAccessoriesCartItemsExcluded(),
                        enabled: t && e
                    })
                }
        },
        48803: (e, t, r) => {
            r.d(t, {
                k: () => c
            });
            var a = r(37876),
                s = r(27555),
                i = r(27735),
                n = r(38847),
                l = r(10769),
                o = r(36256),
                d = r(39806);
            let c = () => {
                let e = (0, n.u)(i.DY),
                    t = (0, l.v9)({
                        assetPath: e ? "/images/custom-displate/campaign/masonry_tile.jpg" : "/images/custom-displate/tile-img.png",
                        widths: [100, 275]
                    });
                return (0, a.jsxs)(s.A, {
                    className: "relative flex w-full min-w-0 flex-col items-center justify-between pb-4 text-center aspect-5/7 row-end-[span_2] hover:no-underline!",
                    routeInfo: (0, d.iM)(),
                    children: [(0, a.jsx)("div", {
                        className: "w-full",
                        "data-testid": "custom-displate-tile",
                        children: (0, a.jsx)("img", {
                            alt: "Custom Displate",
                            className: "mx-auto h-auto w-[60%] md:w-[80%]",
                            loading: "lazy",
                            src: t.src,
                            srcSet: t.srcSet
                        })
                    }), (0, a.jsx)("h3", {
                        className: "text-heading-subtitle-eyebrow text-text-primary lg:text-heading-subtitle",
                        children: e ? "The gift they'll never forget" : "Custom Displates are here!"
                    }), (0, a.jsx)("p", {
                        className: "mb-1 text-body-sm text-text-primary lg:text-body-md",
                        children: e ? "Turn favorite memories into Custom Displates" : "Upload your own pics and let your moments shine"
                    }), (0, a.jsx)("div", {
                        className: "mt-1 w-[90%]",
                        children: (0, a.jsx)(o.$n, {
                            fullWidth: !0,
                            size: "sm",
                            variant: "primary",
                            children: "Start Creating"
                        })
                    })]
                })
            }
        },
        50859: (e, t, r) => {
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
        52728: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var a = r(37876),
                s = r(10769),
                i = r(14619);
            let n = {
                    sm: "h-3",
                    md: "h-4",
                    lg: "h-6"
                },
                l = ({
                    trustScore: e,
                    className: t,
                    showTrustScore: r,
                    iconSize: l = "md",
                    scoreFirst: o = !1
                }) => {
                    let d = (0, s.qH)("/icons/socials/trustpilot_star.svg"),
                        c = Math.floor(e),
                        u = e - c,
                        m = e => e === c && u >= .5;
                    return (0, a.jsxs)("div", {
                        className: (0, i.cn)("flex items-center gap-0.5", t),
                        children: [r && (0, a.jsxs)("span", {
                            className: (0, i.cn)("inline-block text-body-sm", {
                                "order-1 pl-0.5": !o,
                                "order-0 pr-0.5": o
                            }),
                            children: [e, "/", 5]
                        }), [...[, , , , , ].keys()].map(e => (0, a.jsxs)("span", {
                            className: "relative leading-none",
                            children: [(0, a.jsx)("img", {
                                alt: "Trustpilot star",
                                className: (0, i.cn)(n[l], {
                                    "opacity-35 saturate-0": !m(e) && e > c - 1
                                }),
                                "data-testid": e <= c - 1 ? "active-star" : m(e) ? "half-active-star" : "inactive-star",
                                loading: "lazy",
                                src: d
                            }), m(e) ? (0, a.jsx)("span", {
                                className: "block absolute top-0 right-0 h-full w-1/2 backdrop-saturate-0 backdrop-brightness-[1.4]"
                            }) : null]
                        }, e))]
                    })
                }
        },
        57934: (e, t, r) => {
            r.d(t, {
                N: () => s,
                j: () => a
            });
            let a = {
                    ARTIST: "ar",
                    BRAND: "br",
                    BRAND_OF_THE_WEEK: "botw",
                    BESTSELLING: "bs",
                    CATEGORY_LISTING: "cat",
                    COLECTION_VIEW: "col",
                    FREQUENTLY_BOUGHT_TOGETHER: "fbt",
                    KEYWORDS: "kw",
                    MORE_FROM_THIS_COLLECTION: "mftc",
                    MORE_LIKE_THIS: "mlt",
                    OTHER_USERS_ALSO_VIEWED: "ouav",
                    PROMO_PAGE: "pp",
                    RECENTLY_VIEWED: "rv",
                    STANDARD_VIEW: "st",
                    TRENDING_POSTERS: "tp",
                    YOU_MIGHT_ALSO_LIKE: "ymal",
                    THIS_MIGHT_INTEREST_YOU: "tmiy",
                    DISCOVER_EXCLUSIVE_POSTERS_FROM_TOP_BRANDS: "depftb",
                    RECOMMENDED_FOR_YOU: "rfy",
                    PRODUCT_ADDED_TO_CART: "patc",
                    UNKNOWN: "unknown"
                },
                s = {
                    POPULAR: "popular",
                    SIMILAR: "similar",
                    BESTSELLING: "bestselling",
                    INSPIRATIONAL: "inspirational",
                    FOLLOW: "followed_authors",
                    TRENDING: "trending",
                    PERSONALIZED: "personalized",
                    VERIFIED_CREATORS: "verified_creators",
                    SUGGESTED_PHRASES: "suggested_phrases",
                    TEXTRA: "textra",
                    WISHLIST: "wishlist",
                    COLLECTOR: "collector",
                    FANDOM_FAVES: "fandom_faves"
                }
        },
        60013: (e, t, r) => {
            r.d(t, {
                G: () => o
            });
            var a = r(37876),
                s = r(27555),
                i = r(10769),
                n = r(36256),
                l = r(7234);
            let o = () => {
                let e = (0, i.v9)({
                    assetPath: "/images/artist/verified-artist.png",
                    widths: [100, 275]
                });
                return (0, a.jsxs)(s.A, {
                    className: "relative flex w-full min-w-0 flex-col items-center justify-between pb-4 text-center aspect-5/7 row-end-[span_2] hover:no-underline! xl:pt-4 xl:pb-4 2xl:pt-12 2xl:pb-8",
                    "data-testid": "verified-creators-tile",
                    routeInfo: (0, l.cT)({
                        query: {
                            q: "verified creators"
                        }
                    }),
                    children: [(0, a.jsxs)("h3", {
                        className: "mb-4 text-heading-subtitle-eyebrow text-text-primary lg:text-heading-subtitle",
                        children: ["Discover unique art ", (0, a.jsx)("br", {}), "from Verified Creators"]
                    }), (0, a.jsx)("img", {
                        alt: "Verified Creators",
                        className: "mx-auto h-auto w-full",
                        loading: "lazy",
                        src: e.src,
                        srcSet: e.srcSet
                    }), (0, a.jsx)("div", {
                        className: "mt-1 w-[100px]",
                        children: (0, a.jsx)(n.$n, {
                            fullWidth: !0,
                            size: "sm",
                            variant: "primary",
                            children: "Explore"
                        })
                    })]
                })
            }
        },
        60539: (e, t, r) => {
            r.d(t, {
                A: () => x
            });
            var a = r(37876),
                s = r(14232),
                i = r(51192),
                n = r(27555),
                l = r(52728),
                o = r(54111),
                d = r(82378),
                c = r(10769),
                u = r(36256);
            let m = ({
                data: e,
                isOpen: t,
                handleClose: r,
                showDisclaimer: s
            }) => e ? (0, a.jsx)(u._s, {
                onOpenChange: e => {
                    e || r()
                },
                open: t,
                children: (0, a.jsxs)(u.zj, {
                    "aria-describedby": void 0,
                    "data-testid": "hero-trustpilot-reviews",
                    children: [(0, a.jsx)(u.BE, {
                        children: (0, a.jsxs)("div", {
                            className: "flex-1",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center flex-wrap",
                                children: [(0, a.jsx)("img", {
                                    alt: "logo",
                                    className: "mr-2 mb-4 h-6",
                                    src: (0, c.qH)("/icons/socials/trustpilot_logo.svg")
                                }), (0, a.jsx)(u.gk, {
                                    className: "mb-4",
                                    children: "Trustpilot reviews"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center flex-wrap gap-2 text-body-sm",
                                children: [(0, a.jsx)(l.A, {
                                    trustScore: e.trustScore
                                }), (0, a.jsx)("div", {
                                    className: "text-body-xs",
                                    children: e.aggregatedScoreName
                                })]
                            })]
                        })
                    }), (0, a.jsxs)(u.ys, {
                        children: [s ? (0, a.jsx)("div", {
                            className: "bg-background-strong p-3 rounded-md mb-8 text-body-xs",
                            children: "The reviews come from the Trustpilot system. Displate does not verify that the user has purchased the product. You can read about the verification system used by Trustpilot on their website."
                        }) : null, e.reviews.map((e, t) => (0, a.jsxs)("div", {
                            className: "pb-6",
                            "data-testid": "tp-review",
                            children: [(0, a.jsx)(l.A, {
                                trustScore: e.stars
                            }), (0, a.jsx)(n.A, {
                                className: "inline-block mt-3 font-bold text-text-primary hover:underline",
                                onClick: () => (0, i.O)({
                                    elementId: "trustpilot_review"
                                }),
                                routeInfo: (0, d.ZW)({
                                    path: (0, o.lr)(e.id).route,
                                    target: "external"
                                }),
                                children: e.consumerName
                            }), (0, a.jsx)("div", {
                                className: "mt-2 mb-3 mx-0 text-text-primary text-body-md",
                                children: e.text
                            })]
                        }, t))]
                    })]
                })
            }) : null;
            var p = r(62667),
                h = r(14619);
            let x = ({
                data: e,
                countryCode: t,
                bigIcons: r,
                className: n
            }) => {
                let [o, d] = (0, s.useState)(!1);
                return e ? (0, a.jsxs)("div", {
                    className: (0, h.cn)("mt-3 w-fit lg:mt-1", n),
                    children: [(0, a.jsxs)("div", {
                        className: "flex flex-row items-center gap-3 cursor-pointer",
                        "data-testid": "hero-trustpilot-reviews-button",
                        onClick: () => {
                            d(!0), (0, i.O)({
                                elementId: "reviews_tab",
                                interactionType: "expand"
                            })
                        },
                        children: [(0, a.jsx)(l.A, {
                            iconSize: r ? "md" : "sm",
                            scoreFirst: !0,
                            showTrustScore: !0,
                            trustScore: e.trustScore
                        }), (0, a.jsxs)("div", {
                            className: "text-heading-subtitle-eyebrow leading-5 text-text-link",
                            children: [e.numberOfReviewsFormatted, " reviews"]
                        })]
                    }), (0, a.jsx)(m, {
                        data: e,
                        handleClose: () => d(!1),
                        isOpen: o,
                        showDisclaimer: (0, p.J3)(t)
                    })]
                }) : null
            }
        },
        62667: (e, t, r) => {
            r.d(t, {
                J3: () => s
            });
            let a = ["ME", "CZ", "HR", "IT", "MC", "NO", "PL", "SI", "FI", "GR", "HU", "IE", "LV", "LT", "MT", "NL", "PT", "RO", "SE", "SK", "AT", "BE", "BG", "CH", "DK", "DE", "EE", "ES", "FR", "LU"],
                s = e => !!e && a.includes(e)
        },
        69304: (e, t, r) => {
            r.d(t, {
                $: () => l
            });
            var a = r(37876),
                s = r(87050);
            let i = "/images/pdp/upsell";
            var n = r(10769);
            let l = e => {
                let t = (({
                        accessoryType: e,
                        isPosterLarge: t
                    }) => {
                        switch (e) {
                            case s.Xt.MAGNET_3_PACK:
                                return `${i}/upsell_sticker_magnet`;
                            case s.Xt.MAGNET_3D:
                                return `${i}/upsell_3dMagnet`;
                            case s.Xt.STAND:
                                return t ? `${i}/upsell_stand_large` : `${i}/upsell_stand_alone`;
                            default:
                                throw Error(`Unsupported accessory type: ${e}`)
                        }
                    })(e),
                    r = (0, n.v9)({
                        assetPath: `${t}@2x.jpg`,
                        widths: [168, 336]
                    });
                return (0, a.jsx)("picture", {
                    "data-testid": "accessory-upsell-item-image",
                    children: (0, a.jsx)("img", {
                        alt: e.accessoryType.toLowerCase(),
                        loading: "lazy",
                        sizes: r.sizes,
                        src: r.widthsSrc[0],
                        srcSet: r.srcSet
                    })
                })
            }
        },
        71186: (e, t, r) => {
            r.d(t, {
                q: () => T,
                Q: () => E
            });
            var a = r(37876),
                s = r(14232),
                i = r(67768),
                n = r(40097),
                l = r(46841),
                o = r(2661),
                d = r(87973),
                c = r(16903),
                u = r(48124),
                m = r(35891),
                p = r(36256),
                h = r(13341),
                x = r(87050),
                y = r(97160),
                g = r(72318),
                v = r(13930),
                _ = r(98315);
            class f {
                constructor({
                    addedPositions: e,
                    athenaPushEvent: t,
                    currentCart: r
                }) {
                    this.track = () => {
                        this.handleBrazeAnalytics(), this.handleAthenaAnalytics(), this.handleGAAnalytics()
                    }, this.handleBrazeAnalytics = () => {
                        this.addedProductSkus.forEach(e => {
                            var t;
                            let r;
                            t = Array.from(new Set([...this.currentCartSkus, e])), r = y.SR.fromCode(e), (0, g.m)("product_added_to_cart", {
                                sku: e,
                                currentCartItems: t,
                                internalId: r.variant.code
                            })
                        })
                    }, this.handleAthenaAnalytics = () => {
                        this.addedPositions.forEach(e => {
                            var t;
                            let {
                                metadata: r,
                                sku: a,
                                id: s
                            } = e;
                            T(r) && (t = {
                                internalId: Number(y.SR.fromCode(a).variant.code),
                                externalId: r.externalId,
                                title: r.title,
                                cartItemId: Number(s)
                            }, (0, this.athenaPushEvent)({
                                eventName: "addToCart",
                                eventType: "click",
                                eventParams: (e => {
                                    let {
                                        searchQueryId: t = null,
                                        searchPosition: r = null,
                                        sort: a = null
                                    } = window.history.state;
                                    return {
                                        itemId: e.internalId,
                                        ...e.externalId && {
                                            itemCollectionId: e.externalId
                                        },
                                        name: e.title,
                                        cartItemId: e.cartItemId,
                                        abTest: null,
                                        searchQueryId: t,
                                        searchPosition: r,
                                        sort: a
                                    }
                                })(t)
                            }))
                        })
                    }, this.handleGAAnalytics = () => {
                        this.addedPositions && this.addedPositions.forEach(e => {
                            (0, v.M)({
                                currency: e.metadata.currency ? ? e.pixelEventData ? .content ? .currency,
                                method: e.metadata.method,
                                items: [{
                                    item_variant: e.sku,
                                    quantity: e.quantity ? ? 1,
                                    price: null != e.metadata.price ? (0, _.yJ)(e.metadata.price) : e.pixelEventData ? .content ? .value,
                                    item_id: e.metadata.externalId
                                }]
                            })
                        })
                    }, this.addedPositions = e, this.athenaPushEvent = t, this.currentCart = r
                }
                get addedProductSkus() {
                    return this.addedPositions.map(e => e.sku)
                }
                get currentCartSkus() {
                    let e = this.currentCart ? .positions.filter(e => "product" === e.type);
                    return e ? .map(e => e.productData.sku) || []
                }
            }
            var I = r(74381);
            let T = e => "artwork" === e.productType,
                E = e => {
                    let t = (0, i.jE)(),
                        {
                            enqueueToast: r
                        } = (0, p.oS)(),
                        {
                            fetchUserInfo: y
                        } = (0, s.useContext)(m.cy),
                        {
                            pushEvent: g
                        } = (0, o.L)();
                    return (0, n.n)({
                        mutationKey: I.M,
                        mutationFn: async e => {
                            let t = new Map,
                                r = e.map(e => {
                                    let r = (0, l.Ay)(),
                                        a = e.quantity || 1;
                                    return t.set(r, { ...e,
                                        quantity: a
                                    }), {
                                        type: "product",
                                        clientRequestId: r,
                                        productData: {
                                            sku: e.sku,
                                            quantity: a
                                        }
                                    }
                                });
                            return {
                                positions: (await x.$y.addPositionsToCartV8((0, c.j)(), "0", {
                                    positions: r
                                })).positions.map(e => {
                                    let r = t.get(e.clientRequestId);
                                    if (!r) throw Error(`Item not found for position ${e.clientRequestId}`);
                                    return { ...e,
                                        ...r
                                    }
                                })
                            }
                        },
                        ...e,
                        onSuccess: (r, a, s) => {
                            let i = t.getQueryData(h.L);
                            new f({
                                addedPositions: r.positions,
                                athenaPushEvent: g,
                                currentCart: i
                            }).track(), t.invalidateQueries({
                                queryKey: d.yz
                            }), t.invalidateQueries({
                                queryKey: h.L
                            }), t.invalidateQueries({
                                queryKey: u.o
                            }), y(), e ? .onSuccess ? .(r, a, s)
                        },
                        onError: (t, s, i) => {
                            r({
                                actionAltText: "Refresh",
                                actionSlot: (0, a.jsx)(p.$n, {
                                    onClick: () => location.reload(),
                                    size: "sm",
                                    variant: "secondaryDarkOutline",
                                    children: "Refresh"
                                }),
                                message: "Something went wrong",
                                variant: "error"
                            }), e ? .onError ? .(t, s, i)
                        }
                    })
                }
        },
        71189: (e, t, r) => {
            r.d(t, {
                m: () => g
            });
            var a = r(37876),
                s = r(67768),
                i = r(40097),
                n = r(46841),
                l = r(97620),
                o = r(51192),
                d = r(87973),
                c = r(16903),
                u = r(28670),
                m = r(36256),
                p = r(13341),
                h = r(36883),
                x = r(87050),
                y = r(74381);
            let g = e => {
                    let t = (0, s.jE)(),
                        {
                            enqueueToast: r
                        } = (0, m.oS)();
                    return (0, i.n)({
                        mutationKey: y.M,
                        mutationFn: ({
                            strategy: e,
                            orderId: t
                        }) => x.$y.addPositionsToCartV8((0, c.j)(), "0", {
                            positions: [{
                                type: "displate-club-membership",
                                clientRequestId: (0, n.Ay)(),
                                displateClubMembershipData: {
                                    strategy: v(e),
                                    orderId: t
                                }
                            }]
                        }),
                        ...e,
                        onSuccess: (r, a, s) => {
                            let i = (0, h.f)(a.strategy);
                            t.invalidateQueries({
                                queryKey: d.yz
                            }), t.invalidateQueries({
                                queryKey: p.L
                            }), t.invalidateQueries({
                                queryKey: u.X
                            }), l.v.setItem({
                                origin: a.origin,
                                type: i
                            }), (0, o.O)({
                                elementId: a.elementId,
                                elementVariant: i
                            }), e ? .onSuccess ? .(r, a, s)
                        },
                        onError: (t, s, i) => {
                            r({
                                actionAltText: "Refresh",
                                actionSlot: (0, a.jsx)(m.$n, {
                                    onClick: () => location.reload(),
                                    size: "sm",
                                    variant: "secondaryDarkOutline",
                                    children: "Refresh"
                                }),
                                message: "Something went wrong",
                                variant: "error"
                            }), e ? .onError ? .(t, s, i)
                        }
                    })
                },
                v = e => {
                    switch (e) {
                        case x.$1.FLAT_PRICE:
                            return x.R6.strategy.FLAT_PRICE;
                        case x.$1.ORDER:
                            return x.R6.strategy.ORDER;
                        case x.$1.CURRENT_CART:
                            return x.R6.strategy.CURRENT_CART;
                        default:
                            throw Error(`Invalid strategy: ${e}`)
                    }
                }
        },
        74381: (e, t, r) => {
            r.d(t, {
                M: () => a
            });
            let a = ["add-to-cart"]
        },
        77161: (e, t, r) => {
            r.d(t, {
                VO: () => p,
                n9: () => o,
                qe: () => c,
                Mb: () => l,
                uZ: () => u,
                AZ: () => m,
                m8: () => d
            });
            let a = 5 / 7;
            var s = r(37473),
                i = r(10769),
                n = r(87050);
            let l = e => {
                    let t = "";
                    return t = e === n.JH.HORIZONTAL ? "/images/hero/gloss/gloss_h.png" : "/images/hero/gloss/gloss_v.png", (0, i.v9)({
                        assetPath: t
                    }).src
                },
                o = (e, t) => {
                    let r = "";
                    switch (e) {
                        case "none":
                            return;
                        case s.wI.BLACK:
                            r = t === n.JH.HORIZONTAL ? "/images/hero/frames/frames_black_wood_patterns_h_2.png" : "/images/hero/frames/frames_black_wood_patterns_2.png";
                            break;
                        case s.wI.WHITE:
                            r = t === n.JH.HORIZONTAL ? "/images/hero/frames/frames_white_wood_patterns_h_2.png" : "/images/hero/frames/frames_white_wood_patterns_2.png";
                            break;
                        case s.wI.GRAPHITE:
                            r = t === n.JH.HORIZONTAL ? "/images/hero/frames/frames_graphites_h_2.png" : "/images/hero/frames/frames_graphites_2.png";
                            break;
                        case s.wI.NATURAL:
                            r = t === n.JH.HORIZONTAL ? "/images/hero/frames/frames_natural_wood_patterns_h_2.png" : "/images/hero/frames/frames_natural_wood_patterns_2.png";
                            break;
                        default:
                            throw Error("Invalid frame")
                    }
                    return (0, i.v9)({
                        assetPath: r
                    }).src
                },
                d = e => {
                    let t = e === n.JH.HORIZONTAL ? "/images/pdp/HeroSlider/cross_horizontal.png" : "/images/pdp/HeroSlider/cross_vertical.png";
                    return (0, i.v9)({
                        assetPath: t
                    }).src
                },
                c = (e, t) => {
                    let r = t === n.JH.HORIZONTAL;
                    switch (e) {
                        case s.or.M:
                            return r ? 13 : 12;
                        case s.or.L:
                            return r ? 16 : 15;
                        case s.or.XL:
                            return 17;
                        default:
                            throw Error("Invalid size")
                    }
                },
                u = (e, t = !1) => {
                    let r = {
                        width: 244,
                        height: 174,
                        x: 114,
                        y: 279
                    };
                    switch (e) {
                        case s.or.M:
                            return r;
                        case s.or.L:
                            return {
                                width: 307,
                                height: 219,
                                x: 85,
                                y: 234
                            };
                        case s.or.XL:
                            if (t) return r;
                            return {
                                width: 321,
                                height: 229,
                                x: 110,
                                y: 81
                            };
                        default:
                            throw Error("Invalid size")
                    }
                },
                m = (e, t = !1) => {
                    let r = {
                        width: 171,
                        height: 238,
                        x: 148,
                        y: 229
                    };
                    switch (e) {
                        case s.or.M:
                            return r;
                        case s.or.L:
                            return {
                                width: 214,
                                height: 298,
                                x: 128,
                                y: 161
                            };
                        case s.or.XL:
                            if (t) return r;
                            return {
                                width: 248,
                                height: 345,
                                x: 176,
                                y: 59
                            };
                        default:
                            throw Error("Invalid size")
                    }
                },
                p = (e, t, r, s) => {
                    if (s === n.JH.HORIZONTAL) {
                        let s = parseFloat((e - 2 * r).toFixed(2)),
                            i = parseFloat((s * a).toFixed(2));
                        return {
                            width: s,
                            height: i,
                            x: r,
                            y: (t - i) / 2
                        }
                    } {
                        let s = parseFloat((t - 2 * r).toFixed(2)),
                            i = parseFloat((s * a).toFixed(2));
                        return {
                            width: i,
                            height: s,
                            y: r,
                            x: (e - i) / 2
                        }
                    }
                }
        },
        83609: (e, t, r) => {
            r.d(t, {
                v: () => l
            });
            var a = r(37876),
                s = r(43160),
                i = r(71186),
                n = r(36256);
            let l = ({
                accessory: e,
                trackingMethod: t,
                handleButtonClick: r,
                className: l,
                ...o
            }) => {
                let {
                    mutate: d,
                    isPending: c,
                    isSuccess: u,
                    reset: m
                } = (0, i.Q)({
                    onSuccess: () => {
                        setTimeout(() => {
                            m()
                        }, 2e3)
                    }
                });
                return (0, a.jsx)(n.$n, {
                    "data-testid": "accessory-buy-btn",
                    disabled: !e ? .isAvailable,
                    loading: c,
                    onClick: () => {
                        e && (d([{
                            sku: e.sku,
                            metadata: {
                                productType: "accessory",
                                externalId: s.F[e.type],
                                price: 100 * e.price.amount,
                                currency: e.price.currency,
                                method: t
                            }
                        }]), r ? .())
                    },
                    variant: "primary",
                    ...o,
                    children: u ? "Item added!" : e ? .isAvailable === !1 ? "Currently out of stock" : "Add to cart"
                })
            }
        },
        85876: (e, t, r) => {
            r.d(t, {
                Ol: () => i,
                l3: () => s,
                oZ: () => n
            });
            var a = r(22884);
            let s = e => {
                    (0, a.u)({
                        event: "sst_select_item",
                        ecommerce: {
                            items: [{
                                item_id: e.externalId,
                                item_variant: e.sku,
                                item_list_id: "PT:upsell_drawer|LT:grid|LF:ud",
                                item_list_name: "Upsell Drawer",
                                index: e.position
                            }]
                        }
                    })
                },
                i = e => {
                    (0, a.u)({
                        event: "sst_view_item_list",
                        ecommerce: {
                            items: e.map(e => ({
                                item_id: e.externalId,
                                item_variant: e.sku,
                                item_list_id: "PT:upsell_drawer|LT:grid|LF:ud",
                                item_list_name: "Upsell Drawer",
                                index: e.position
                            }))
                        }
                    })
                },
                n = e => {
                    let t = e.price * e.quantity;
                    (0, a.u)({
                        event: "sst_view_item",
                        ecommerce: {
                            value: t,
                            currency: e.currency,
                            items: [{
                                item_id: e.externalId,
                                item_variant: e.sku,
                                price: e.price,
                                lowest_price: e.lowestPrice,
                                quantity: e.quantity
                            }]
                        }
                    })
                }
        },
        85883: (e, t, r) => {
            r.d(t, {
                f: () => N
            });
            var a = r(37876),
                s = r(40510),
                i = r(27555),
                n = r(85876),
                l = r(23039),
                o = r(18120),
                d = r(14232),
                c = r(83609),
                u = r(69304),
                m = r(87050);
            let p = ({
                accessoryItem: e,
                index: t,
                accessoryData: r,
                standImageBox: s
            }) => {
                let {
                    title: i,
                    urlSlug: l,
                    details: p,
                    priceFollowText: h
                } = e, x = r.price.currency || "USD", y = (0, d.useRef)(null), g = {
                    externalId: e.externalId,
                    price: r.price.amount || 0,
                    quantity: 1,
                    currency: x,
                    sku: r.sku,
                    position: t + 1
                }, {
                    setOnHold: v
                } = (0, o.$)({
                    ref: y,
                    message: g,
                    initialOnHold: !0
                });
                (0, d.useEffect)(() => {
                    x && v(!1)
                }, [x, v]);
                let _ = () => {
                    (0, n.l3)(g)
                };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("a", {
                        className: "block w-full [&_img]:w-full",
                        href: l,
                        onClick: _,
                        ref: y,
                        children: r.type === m.Xt.STAND ? s : (0, a.jsx)(u.$, {
                            accessoryType: r.type
                        })
                    }), (0, a.jsx)("a", {
                        "data-testid": "upsell-item-heading-link",
                        href: l,
                        onClick: _,
                        children: (0, a.jsx)("h4", {
                            className: "mt-2 text-heading-subtitle text-text-primary",
                            children: i
                        })
                    }), (0, a.jsxs)("div", {
                        className: "text-heading-subtitle text-text-secondary",
                        "data-testid": "upsell-item-price",
                        children: [r ? .price ? .formatted, h && x && r.price ? (0, a.jsxs)("span", {
                            className: "text-body-xs",
                            children: [" ", h]
                        }) : null]
                    }), (0, a.jsxs)("div", {
                        className: "my-4 text-body-sm text-text-secondary",
                        "data-testid": "upsell-item-details",
                        children: [p, " ", (0, a.jsx)("br", {}), (0, a.jsx)("a", {
                            className: "text-link-sm text-text-link",
                            href: l,
                            onClick: _,
                            children: "See more"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "mt-auto",
                        children: (0, a.jsx)(c.v, {
                            accessory: r,
                            fullWidth: !0,
                            handleButtonClick: _,
                            size: "sm",
                            trackingMethod: "upsell_drawer",
                            variant: "secondaryDarkOutline"
                        })
                    })]
                })
            };
            var h = r(71189),
                x = r(36256),
                y = r(97610),
                g = r(23278);
            let v = ({
                offer: e
            }) => {
                let {
                    mutate: t,
                    isPending: r,
                    isSuccess: s
                } = (0, h.m)(), n = (0, y.a)(e ? .strategy), {
                    text: l,
                    isDisabled: o
                } = r ? {
                    text: "Adding to cart...",
                    isDisabled: !1
                } : s || e ? .isInCart ? {
                    text: "Already in cart",
                    isDisabled: !0
                } : {
                    text: "Add to cart",
                    isDisabled: !1
                };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i.A, {
                        "data-testid": "upsell-item-heading-link",
                        routeInfo: (0, g.a)(),
                        children: [(0, a.jsx)(x.z0, {
                            badge: n ? (0, a.jsx)(x.Ex, {
                                color: n.color,
                                "data-testid": "dc-offer-badge",
                                children: n.text
                            }) : null
                        }), (0, a.jsx)("h4", {
                            className: "mt-2 text-heading-subtitle text-text-primary",
                            children: "Displate Club"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "text-heading-subtitle text-text-secondary",
                        "data-testid": "upsell-item-price",
                        children: [(0, a.jsx)("span", {
                            children: e ? .price ? .formatted
                        }), (0, a.jsx)("span", {
                            className: "text-body-xs",
                            children: " monthly"
                        }), (0, a.jsx)("br", {}), (0, a.jsx)("span", {
                            className: "text-body-xs",
                            children: " (auto-renewal)"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "my-4 text-body-sm text-text-secondary",
                        "data-testid": "upsell-item-details",
                        children: [(0, a.jsx)("strong", {
                            children: "Free shipping"
                        }), " from the next order onward + more perks.", (0, a.jsx)("br", {}), (0, a.jsx)(i.A, {
                            className: "text-link-sm text-text-link",
                            routeInfo: (0, g.a)(),
                            children: "See more"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "mt-auto",
                        children: (0, a.jsx)(x.$n, {
                            "data-testid": "dc-buy-btn",
                            disabled: o,
                            fullWidth: !0,
                            loading: r,
                            onClick: () => {
                                t({
                                    strategy: e.strategy,
                                    elementId: "dc_offer_add_button",
                                    origin: "upsell",
                                    orderId: e.orderId
                                })
                            },
                            size: "sm",
                            variant: "secondaryDarkOutline",
                            children: l
                        })
                    })]
                })
            };
            var _ = r(48124),
                f = r(37473);
            let I = [m.Xt.MAGNET_3_PACK, m.Xt.MAGNET_3D, m.Xt.STAND],
                T = {
                    STAND: 1,
                    MAGNET_3_PACK: 2,
                    MAGNET_3D: 3,
                    MAGNET_9_PACK: 4,
                    AMBIENT_LIGHT: 5,
                    HD_MOUNTING_SYSTEM: 6
                },
                E = ({
                    items: e,
                    standImageBox: t,
                    isOpen: r,
                    size: s
                }) => {
                    var i;
                    let d, {
                            data: c,
                            isLoading: u
                        } = (0, _.S)(r),
                        {
                            displateClubOffersQuery: h
                        } = (0, l.X)({
                            limit: 4,
                            purchasable: !0,
                            sortPrice: m.xB.ASC
                        }),
                        y = h.data,
                        g = u || h.isLoading,
                        E = (i = c || [], d = s === f.or.XL, i.filter(e => {
                            let t = e.isAvailable && I.includes(e.type);
                            return d && (t = e.type !== m.Xt.STAND), t
                        }).sort((e, t) => T[e.type] - T[t.type]));
                    return (0, a.jsx)(o.L, {
                        callback: e => {
                            (0, n.Ol)(e)
                        },
                        children: (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("h3", {
                                className: "text-heading-h6 text-text-primary",
                                children: "Perfect Add-ons"
                            }), (0, a.jsxs)("div", {
                                className: "mt-4 grid grid-cols-2 gap-8",
                                children: [g ? (0, a.jsx)(x.y$, {}) : null, !h.isLoading && y ? .offers && y.offers.length > 0 ? (0, a.jsx)("div", {
                                    className: "flex flex-col",
                                    "data-testid": "upsell-content-item",
                                    children: (0, a.jsx)(v, {
                                        offer: y.offers[0]
                                    })
                                }) : null, E.length > 0 ? E.map((r, s) => {
                                    let i = e.find(e => e.accessoryItemType === r.type);
                                    return i ? (0, a.jsx)("div", {
                                        className: "flex flex-col",
                                        "data-testid": "upsell-content-item",
                                        children: (0, a.jsx)(p, {
                                            accessoryData: r,
                                            accessoryItem: i,
                                            index: s,
                                            standImageBox: t
                                        })
                                    }, r.type) : null
                                }) : null]
                            })]
                        })
                    })
                },
                w = [{
                    title: "3D Magnet kit",
                    details: "Make your Displates pop with extra 25 mm (1”) depth.",
                    urlSlug: "/about/3d-magnet",
                    formatId: 5003,
                    externalId: 5098599,
                    internalId: 0x5f5e0fc,
                    accessoryItemType: m.Xt.MAGNET_3D,
                    variantId: "99999996-5003-na-na"
                }, {
                    title: "Spare magnet pack",
                    details: "Get a spare magnet kit in case you paint or move.",
                    urlSlug: "/about-mounting",
                    formatId: 5001,
                    externalId: 738196,
                    internalId: 0x5f5e0fe,
                    priceFollowText: "/3-pack",
                    accessoryItemType: m.Xt.MAGNET_3_PACK,
                    variantId: "99999998-5001-na-na"
                }, {
                    title: "Stand",
                    details: "Put your Displate on a shelf, desk, or anywhere you like!",
                    urlSlug: "/accessories",
                    formatId: 5007,
                    externalId: 6927502,
                    internalId: 0x5f5e0f9,
                    accessoryItemType: m.Xt.STAND,
                    variantId: "99999993-5007-na-na"
                }];
            m.Xt.MAGNET_3D, m.Xt.MAGNET_3_PACK, m.Xt.STAND;
            var A = r(71824);
            let N = ({
                isOpen: e,
                handleClose: t,
                standImageBox: r,
                size: n,
                testid: l = "product-added-to-cart-drawer",
                infoBanner: o
            }) => {
                let {
                    items: d
                } = {
                    items: w
                };
                return (0, a.jsx)(x._s, {
                    onOpenChange: e => {
                        e || t()
                    },
                    open: e,
                    children: (0, a.jsxs)(x.zj, {
                        "aria-describedby": void 0,
                        "data-testid": l,
                        children: [(0, a.jsx)(x.BE, {
                            className: "border-b border-border-default-medium",
                            children: (0, a.jsx)(x.gk, {
                                children: "Product added to cart!"
                            })
                        }), (0, a.jsxs)(x.ys, {
                            children: [o, (0, a.jsx)(E, {
                                isOpen: e,
                                items: d,
                                size: n,
                                standImageBox: r
                            })]
                        }), (0, a.jsxs)(x.tb, {
                            sticky: !0,
                            children: [(0, a.jsx)(x.$n, {
                                asChild: !0,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, s.Q)("proceed_to_cart_button")
                                },
                                children: (0, a.jsx)(i.A, {
                                    routeInfo: (0, A.y)(),
                                    children: "Proceed to the cart"
                                })
                            }), (0, a.jsx)(x.$n, {
                                fullWidth: !0,
                                onClick: () => {
                                    (0, s.Q)("continue_shopping_button"), t()
                                },
                                variant: "secondaryDarkOutline",
                                children: "Continue shopping"
                            })]
                        })]
                    })
                })
            }
        },
        95729: (e, t, r) => {
            r.d(t, {
                q: () => i,
                z: () => s
            });
            var a = r(51192);
            let s = (e, t) => {
                    (0, a.O)({
                        elementId: e,
                        elementVariant: t
                    })
                },
                i = e => {
                    (0, a.O)({
                        elementId: "recommendation_feed_toggle",
                        elementVariant: e
                    })
                }
        },
        97610: (e, t, r) => {
            r.d(t, {
                a: () => i
            });
            var a = r(28431),
                s = r(87050);
            let i = e => {
                if (void 0 === e) return null;
                let t = a.u[e];
                if (void 0 === t) return null;
                switch (e) {
                    case s.$1.FLAT_PRICE:
                        return {
                            text: "Time Limited Offer",
                            color: t
                        };
                    case s.$1.ORDER:
                        return {
                            text: "Exclusive Offer",
                            color: t
                        };
                    default:
                        return null
                }
            }
        },
        97620: (e, t, r) => {
            r.d(t, {
                v: () => s
            });
            var a = r(78911);
            let s = new a.d(a.l.DC_OFFER_IN_CART)
        },
        99074: (e, t, r) => {
            r.d(t, {
                s: () => s
            });
            var a = r(7234);
            let s = (e, t, r) => {
                    e.metadata.messageSendingDisabled || t({
                        eventName: "addToWishlist",
                        eventType: "click",
                        eventParams: i(e, r)
                    })
                },
                i = (e, t) => {
                    let {
                        message: {
                            externalId: r,
                            internalId: s,
                            name: i,
                            index: n
                        }
                    } = e;
                    return {
                        itemId: s,
                        itemCollectionId: r,
                        name: i || "",
                        ...((e, t, r) => {
                            let s = {
                                searchQueryId: null,
                                searchPosition: null,
                                sort: null
                            };
                            if (r || window.location.pathname.startsWith(a.rm) || window.location.pathname.startsWith(a.pU)) {
                                let r = window.history.state ? .searchPosition || (e.searchQueryId ? t : null);
                                s.searchQueryId = e.searchQueryId || window.history.state ? .searchQueryId || null, s.searchPosition = r, s.sort = e.sort || window.history.state ? .sort || null
                            }
                            return s
                        })(e.metadata, n, t)
                    }
                }
        }
    }
]);
//#
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4189, 5270, 8707], {
        197: () => {},
        3320: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => o
            });
            var a = s(37876),
                r = s(10769),
                l = s(14619),
                i = s(87050);
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
                    let s = t.map(e => n[e]);
                    return (0, a.jsx)("div", {
                        className: (0, l.cn)("flex flex-wrap justify-center gap-2", e),
                        children: s.map((e, t) => (0, a.jsx)("img", {
                            alt: e.alt,
                            className: "h-[var(--payment-method-height,28px)] w-auto",
                            "data-testid": "payment-method",
                            draggable: !1,
                            loading: "lazy",
                            src: (0, r.v9)({
                                assetPath: e.src
                            }).src
                        }, t))
                    })
                }
        },
        8144: e => {
            e.exports = {
                container: "SearchPage_container__Q7KGO",
                section: "SearchPage_section__WXNkG",
                seoTagsSection: "SearchPage_seoTagsSection__CwTZX"
            }
        },
        14078: (e, t, s) => {
            "use strict";
            s.d(t, {
                F: () => d
            });
            var a = s(37876),
                r = s(36256),
                l = s(14619),
                i = s(29633);
            let n = () => (0, a.jsx)("div", {
                    className: "h-10 w-[240px] overflow-hidden rounded-[46px]",
                    children: (0, a.jsx)(r.EA, {
                        className: "size-full"
                    })
                }),
                o = () => (0, a.jsx)("div", {
                    className: "h-10 w-[150px]",
                    children: (0, a.jsx)(r.EA, {
                        className: "size-full"
                    })
                }),
                d = ({
                    showHeader: e = !0,
                    showFooter: t = !0,
                    testId: s,
                    className: d
                }) => (0, a.jsxs)("div", {
                    className: (0, l.cn)("flex flex-col items-center pb-14", d),
                    "data-testid": s,
                    children: [e ? (0, a.jsx)(n, {}) : null, (0, a.jsx)("div", {
                        className: (0, l.cn)("my-10 grid w-full auto-rows-[minmax(100px,auto)] grid-cols-2 grid-flow-dense gap-4", "md:grid-cols-4 md:gap-6", "lg:grid-cols-5", "xl:grid-cols-6"),
                        children: [...Array(i.T).keys()].map(e => (0, a.jsx)(r.EA, {
                            className: "aspect-5/7 h-auto! size-full"
                        }, e))
                    }), t ? (0, a.jsx)(o, {}) : null]
                })
        },
        16322: (e, t, s) => {
            "use strict";
            s.d(t, {
                b: () => l
            });
            var a = s(84583),
                r = s(17495);
            let l = e => e ? e.map(e => ({
                internalId: e.internalId,
                externalId: e.externalId,
                imageCoreUrl: e.imageCoreUrl,
                orientation: e.orientation,
                title: e.title,
                labels: (0, a.pr)(e.labels),
                sku: e.sku || (0, r.s)(e.internalId)
            })) : []
        },
        17495: (e, t, s) => {
            "use strict";
            s.d(t, {
                N: () => i,
                s: () => l
            });
            var a = s(97160),
                r = s(87050);
            let l = (e, t = "P001") => {
                    let s = e.toString().padStart(8, "0");
                    return `${t}${s}`
                },
                i = e => {
                    let t = a.$I.of().parse(e, "US");
                    return t ? {
                        internalId: t.artworkId,
                        size: o(t.size),
                        finish: n(t.finish),
                        frame: d(t.frame)
                    } : null
                },
                n = e => {
                    switch (e) {
                        case a.Lc.MATTE:
                            return r.ZU.MATTE;
                        case a.Lc.GLOSS:
                            return r.ZU.GLOSS;
                        case a.Lc.TEXTRA:
                            return r.ZU.TEXTRA;
                        default:
                            return r.ZU.MATTE
                    }
                },
                o = e => {
                    switch (e) {
                        case a.TZ.MEDIUM:
                            return r.or.MEDIUM;
                        case a.TZ.LARGE:
                            return r.or.LARGE;
                        case a.TZ.XLARGE:
                            return r.or.XLARGE;
                        default:
                            return r.or.MEDIUM
                    }
                },
                d = e => {
                    switch (e) {
                        case a.oM.NONE:
                            return r.wI.NONE;
                        case a.oM.NATURAL_WOOD:
                            return r.wI.NATURAL;
                        case a.oM.GRAPHITE:
                            return r.wI.GRAPHITE;
                        case a.oM.WHITE_WOOD:
                            return r.wI.WHITE;
                        case a.oM.BLACK_WOOD:
                            return r.wI.BLACK;
                        default:
                            return r.wI.NONE
                    }
                }
        },
        17593: (e, t, s) => {
            "use strict";
            s.d(t, {
                E4: () => o,
                TN: () => n,
                WV: () => i,
                Ys: () => a,
                iA: () => l
            });
            let a = [{
                    name: "Bestselling",
                    value: "bestselling"
                }, {
                    name: "Newest",
                    value: "newest"
                }],
                r = ["all", "bestselling"],
                l = (e, t, s) => Array.isArray(e) ? e.join(",") : (t !== s && r.includes(e) ? "" : e).toLowerCase(),
                i = e => Array.isArray(e) ? e : e.toLowerCase().split(","),
                n = (e, t) => {
                    let {
                        [t]: s, page: a, ...r
                    } = e;
                    return r && Object.keys(r).length < 1 && r.constructor === Object
                },
                o = (e, t) => "string" == typeof e ? e : t
        },
        17779: e => {
            e.exports = {
                masonryFeedGridContainer: "AnimatedFeedSkeleton_masonryFeedGridContainer__8rEey",
                masonryFeedWrapper: "AnimatedFeedSkeleton_masonryFeedWrapper__4Mtb6",
                seeAllButton: "AnimatedFeedSkeleton_seeAllButton__Ohp_Y",
                masonryFeedGrid: "AnimatedFeedSkeleton_masonryFeedGrid__MhkIw",
                link: "AnimatedFeedSkeleton_link__534c3",
                animatedFeedSkeleton: "AnimatedFeedSkeleton_animatedFeedSkeleton__b_95s",
                animatedFeedGridSkeleton: "AnimatedFeedSkeleton_animatedFeedGridSkeleton__bTQG2",
                skeleton: "AnimatedFeedSkeleton_skeleton__GMaeE",
                animationGroup: "AnimatedFeedSkeleton_animationGroup__0keM2",
                scrolling: "AnimatedFeedSkeleton_scrolling__usdYq",
                overlay: "AnimatedFeedSkeleton_overlay__UXgCC",
                text: "AnimatedFeedSkeleton_text__NS22j",
                textContainer: "AnimatedFeedSkeleton_textContainer__KfBGG",
                star: "AnimatedFeedSkeleton_star__Wo9vP",
                grow: "AnimatedFeedSkeleton_grow__XVTcZ",
                star1: "AnimatedFeedSkeleton_star1__2deBb",
                star2: "AnimatedFeedSkeleton_star2__TlX2v",
                star3: "AnimatedFeedSkeleton_star3__Ls5lM",
                star4: "AnimatedFeedSkeleton_star4__WFmnb"
            }
        },
        18291: e => {
            e.exports = {
                wrapper: "NoResultsBar_wrapper__7x2A9",
                filtersLead: "NoResultsBar_filtersLead__se2IY",
                filtersHint: "NoResultsBar_filtersHint__SrpbN",
                title: "NoResultsBar_title__Bg0Hn",
                content: "NoResultsBar_content__UNwPk"
            }
        },
        19977: () => {},
        21866: () => {},
        23412: (e, t, s) => {
            "use strict";
            s.d(t, {
                Bm: () => y,
                nz: () => j,
                xG: () => f,
                P$: () => v,
                v2: () => _,
                T: () => g
            });
            var a = s(37876),
                r = s(95729),
                l = s(27555),
                i = s(16909),
                n = s(36256),
                o = s(1025),
                d = s(48803),
                c = s(16322),
                u = s(29633),
                m = s(55528),
                p = s(30236),
                h = s(60013);
            let x = {
                    pathnamePatterns: ["/artist", "/custom-displate", "/following", "/licensed"]
                },
                g = (e, t = x) => !!(t.pathnamePatterns && t.pathnamePatterns.some(t => e.startsWith(t))) || !1,
                v = e => (t, s, a) => {
                    let r = e ? .[t] ? ? [];
                    return {
                        name: t,
                        shouldBeShown: r.length >= 3,
                        masonryListingFunction: s,
                        items: (0, c.b)(r),
                        ...a
                    }
                },
                _ = (e, t) => ({ ...t,
                    itemListName: e.heading ? ? (0, i.ZH)(e.name),
                    listingFunction: e.masonryListingFunction
                }),
                f = (e, t, s, r, l, i) => {
                    let n, o = !!s && g(s, r),
                        c = i ? ? m.w,
                        x = [...o ? [] : [{
                            item: (0, a.jsx)(d.k, {}),
                            position: p.X
                        }], {
                            item: (0, a.jsx)(h.G, {}),
                            position: p.J
                        }];
                    return n = e.overrideGridComponent ? (0, a.jsx)(e.overrideGridComponent, {}) : (0, a.jsx)(u.m, {
                        artworksToDisplay: l || u.T,
                        customGridItem: c,
                        feedName: e.name,
                        infiniteScroll: e.infiniteScroll,
                        items: e.items,
                        metadata: _(e, t),
                        positionedGridItems: x,
                        redirectButton: e.redirectButton
                    }, e.name), {
                        heading: e.heading ? ? e.name,
                        content: n
                    }
                },
                j = e => e.every(e => !1 === e.shouldBeShown),
                y = ({
                    feedName: e
                }) => (0, a.jsx)(n.$n, {
                    asChild: !0,
                    className: "mt-6 md:mt-10",
                    size: "lg",
                    variant: "primary",
                    children: (0, a.jsx)(l.A, {
                        onClick: () => (0, r.z)("masonry_see_all_posters_button", (0, i.Iy)(e ? ? "")),
                        routeInfo: (0, o.Z)({
                            query: {
                                page: "2"
                            }
                        }),
                        children: "See all posters"
                    })
                })
        },
        25270: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => v
            });
            var a = s(37876),
                r = s(36256),
                l = s(14619),
                i = s(54587),
                n = s.n(i),
                o = s(10769);
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
            var c = s(14232);
            let u = (0, c.forwardRef)(({
                children: e,
                className: t,
                ...s
            }, r) => (0, a.jsx)("div", {
                className: (0, l.cn)("mx-[17%]", "pt-4", "flex", "flex-wrap", "justify-center", "gap-2", t),
                "data-testid": "risk-reducer-media-row",
                ref: r,
                ...s,
                children: e
            }));
            u.displayName = "RiskReducerMediaRow";
            let m = (0, c.forwardRef)(({
                children: e,
                className: t,
                description: s,
                title: r,
                ...i
            }, n) => (0, a.jsxs)("div", {
                className: (0, l.cn)("p-6", "bg-neutral-100", "rounded-sm", "md:flex-1", "md:rounded-md", t),
                "data-testid": "risk-reducer",
                ref: n,
                ...i,
                children: [(0, a.jsx)("h4", {
                    className: (0, l.cn)("text-center", "text-heading-h4"),
                    children: r
                }), s ? (0, a.jsx)("div", {
                    className: (0, l.cn)("text-center", "mt-4", "mx-12", "text-body-sm", "text-text-secondary"),
                    children: s
                }) : null, e]
            }));
            m.displayName = "RiskReducer";
            let p = () => (0, a.jsx)(m, {
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
                h = () => (0, a.jsx)(m, {
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
            var x = s(3320);
            let g = ({
                    paymentMethods: e
                }) => (0, a.jsx)(m, {
                    className: "xl:order-2",
                    description: "100% Secure payment with 256-bit SSL Encryption",
                    title: "Secure payments",
                    children: (0, a.jsx)(x.A, {
                        className: "mt-4 mx-[17%] [--payment-method-height:26px]",
                        paymentMethods: e
                    })
                }),
                v = ({
                    paymentMethods: e,
                    className: t
                }) => (0, a.jsx)(r.mc, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: (0, l.cn)("col-span-full flex flex-col justify-start gap-4", "lg:flex-row xl:gap-6", t),
                        "data-testid": "footer-columns-section",
                        children: [(0, a.jsx)(g, {
                            paymentMethods: e
                        }), (0, a.jsx)(p, {}), (0, a.jsx)(h, {})]
                    })
                })
        },
        25796: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => e0
            });
            var a = s(37876),
                r = s(14232),
                l = s(89099),
                i = s(47321),
                n = s(16364),
                o = s(98461),
                d = s(64968),
                c = s(15657),
                u = s(47325),
                m = s(77518),
                p = s(82378),
                h = s(16909),
                x = s(35891),
                g = s(25282);
            let v = "trending posters";
            var _ = s(7234),
                f = s(57934),
                j = s(27555),
                y = s(93811),
                w = s(48951),
                N = s(14078),
                S = s(79265),
                b = s(30333),
                k = s(3625),
                A = s(88308),
                T = s(1833),
                C = s(73480),
                I = s(39313),
                E = s(71568),
                R = s(77128),
                D = s(18120),
                P = s(24682),
                O = s(36256),
                F = s(90304),
                L = s.n(F);
            let q = () => (0, a.jsx)(w.L, {
                    customOverlayStyle: L().customOverlayStyle,
                    customText: (0, a.jsxs)("div", {
                        className: "text-text-inverse flex w-full flex-col items-center gap-6 md:w-auto",
                        children: [(0, a.jsx)(R.A, {
                            height: 64,
                            width: 64
                        }), (0, a.jsx)("p", {
                            className: "m-0 w-full text-center text-heading-h4 md:w-[300px] md:text-heading-h3",
                            children: "Loading your surprise Verified Creators picks..."
                        })]
                    }),
                    showStars: !1
                }),
                M = ({
                    searchPhrase: e,
                    searchResult: t,
                    page: s,
                    sort: i,
                    showNoResultsBar: n
                }) => {
                    let o = (0, l.useRouter)(),
                        d = (0, r.useRef)(null),
                        c = t ? .count || 0,
                        u = (0, k.f)(o.query, _.Bq),
                        m = (0, T.o)(e => e.isDrawerOpen),
                        p = (0, T.o)(e => e.setIsDrawerOpen),
                        {
                            shouldShowDrawer: h,
                            shouldImmediatelyShowDrawer: x
                        } = (0, C.Q)(),
                        g = "random" === i,
                        v = (0, r.useMemo)(() => ({
                            messageSendingDisabled: !1,
                            itemListName: "Search Results",
                            listingFunction: f.N.POPULAR,
                            listingType: "masonry",
                            athenaPageName: _.ak.analyticsAthenaName,
                            gaPageName: _.ak.analyticsGaName,
                            itemQueryParams: e === P.ZU.TEXTRA ? {
                                productType: P.ZU.TEXTRA
                            } : void 0,
                            searchQueryId: t ? .searchQueryId ? ? null,
                            sort: i || "bestselling"
                        }), [e, t ? .searchQueryId, i]),
                        w = (0, r.useMemo)(() => {
                            let s = (0, E.z)(t ? .artworks);
                            return [{
                                name: "search",
                                heading: "Search Results",
                                shouldBeShown: s.length > 0,
                                masonryListingFunction: e ? .toLowerCase() ? ? f.N.POPULAR,
                                items: s
                            }]
                        }, [e, t ? .artworks]);
                    if ((0, I.P)(d, {
                            once: !0,
                            onHold: !c,
                            callback: () => {
                                h && p(!0)
                            }
                        }), (0, r.useEffect)(() => {
                            x && p(!0)
                        }, [x, p]), n) return (0, a.jsx)(b.L, {
                        routeInfo: (0, _.cT)({
                            query: {
                                q: e
                            }
                        }),
                        variant: "filters"
                    });
                    let R = e => {
                            let {
                                page: t,
                                ...s
                            } = u, a = { ...s,
                                ...e > 1 ? {
                                    page: `${e}`
                                } : {}
                            };
                            return (0, _.cT)({
                                query: a
                            })
                        },
                        F = ({
                            targetPage: e,
                            children: t
                        }) => (0, a.jsx)(j.A, {
                            routeInfo: R(e),
                            children: t
                        });
                    return c ? (0, a.jsxs)(D.L, {
                        callback: y._,
                        children: [(0, a.jsx)(S.$, {
                            artworksToDisplay: 108,
                            className: "mt-4 md:mt-6",
                            feeds: w,
                            metadata: v
                        }), g ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsx)("div", {
                            className: "mt-12 mb-12 flex justify-center",
                            "data-testid": "pagination",
                            ref: d,
                            children: (0, a.jsx)(O.dK, {
                                count: Math.ceil(c / 108),
                                onPageChange: e => {
                                    let {
                                        route: t
                                    } = R(e);
                                    o.push(t, void 0)
                                },
                                page: s,
                                renderNext: F,
                                renderPrevious: F
                            }, s)
                        }), m ? (0, a.jsx)(A.a, {}) : (0, a.jsx)(a.Fragment, {})]
                    }) : g ? (0, a.jsx)(q, {}) : (0, a.jsx)(N.F, {
                        showFooter: !1,
                        showHeader: !1
                    })
                };
            var B = s(48230),
                G = s.n(B),
                z = s(51192),
                H = s(30305),
                $ = s(10769);
            let U = ({
                    children: e,
                    href: t,
                    onClick: s
                }) => t ? (0, a.jsx)(G(), {
                    "aria-label": "Banner link",
                    href: t,
                    onClick: s,
                    children: e
                }) : (0, a.jsx)(a.Fragment, {
                    children: e
                }),
                W = ({
                    data: e,
                    page: t
                }) => {
                    if (!e || t) return null;
                    let {
                        imagesSlim: s,
                        imagesWide: r,
                        bannerUrl: l
                    } = e, i = (0, $.ZX)({
                        assetPath: r.x1,
                        widths: [1440, 2880]
                    }), n = (0, $.ZX)({
                        assetPath: s.x1,
                        widths: [480, 960]
                    });
                    return (0, a.jsx)("div", {
                        className: "relative",
                        children: (0, a.jsxs)(U, {
                            href: l,
                            onClick: () => {
                                (0, z.O)({
                                    elementId: "listing_banner",
                                    elementVariant: l,
                                    interactionType: "click"
                                })
                            },
                            children: [e.bodyTxt || e.titleTxt ? (0, a.jsx)("div", {
                                className: "absolute inset-0 z-1 bg-[rgba(0,0,0,0.3)] min-[480px]:hidden"
                            }) : null, (0, a.jsxs)("picture", {
                                className: "w-full",
                                children: [(0, a.jsx)("source", {
                                    media: `(min-width: ${H.D.xs}px)`,
                                    sizes: i.sizes,
                                    srcSet: i.srcSet
                                }), (0, a.jsx)("source", {
                                    sizes: n.sizes,
                                    srcSet: n.srcSet
                                }), (0, a.jsx)("img", {
                                    alt: e.titleTxt ? e.titleTxt : "listing banner",
                                    className: "mt-4 rounded-md w-full object-contain",
                                    "data-testid": "listing-banner",
                                    src: i.widthsSrc[0]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 max-w-[190px] z-2 min-[480px]:hidden lg:block lg:max-w-full",
                                children: [e.titleTxt ? (0, a.jsx)("h2", {
                                    className: "text-heading-h6 text-text-inverse",
                                    children: e.titleTxt
                                }) : null, e.bodyTxt ? (0, a.jsx)("p", {
                                    className: "text-body-md text-text-inverse",
                                    children: e.bodyTxt
                                }) : null]
                            })]
                        })
                    })
                };
            var V = s(46484),
                Q = s(85314),
                Y = s(95687),
                Z = s(47598),
                K = s(33348),
                X = s(25270),
                J = s(55169),
                ee = s(56323),
                et = s(68873),
                es = s(76436),
                ea = s(98315),
                er = s(2661),
                el = s(47765),
                ei = s(24073),
                en = s(68720),
                eo = s(34820),
                ed = s(96490),
                ec = s(65582),
                eu = s(14619);
            let em = {
                    edge: {
                        prev: "left-0",
                        next: "right-0"
                    },
                    inset: {
                        prev: "left-12",
                        next: "right-12"
                    }
                },
                ep = {
                    none: {
                        container: "",
                        slide: ""
                    },
                    sm: {
                        container: "-ml-2",
                        slide: "pl-2"
                    },
                    md: {
                        container: "-ml-4",
                        slide: "pl-4"
                    },
                    lg: {
                        container: "-ml-6",
                        slide: "pl-6"
                    }
                },
                eh = ({
                    children: e,
                    options: t,
                    plugins: s,
                    showArrows: l = !0,
                    arrowPosition: i = "edge",
                    gap: n = "md",
                    scrollStep: o = 1,
                    className: d,
                    containerClassName: c,
                    slideClassName: u
                }) => {
                    let m = (0, r.useRef)(null),
                        [p, h] = (0, eo.A)({ ...t
                        }, s),
                        [x, g] = (0, r.useState)(!1),
                        [v, _] = (0, r.useState)(!1),
                        f = (0, r.useCallback)(() => {
                            h && (g(h.canScrollPrev()), _(h.canScrollNext()))
                        }, [h]);
                    (0, r.useEffect)(() => {
                        if (h) return f(), h.on("select", f), h.on("reInit", f), () => {
                            h.off("select", f), h.off("reInit", f)
                        }
                    }, [h, f]);
                    let j = (0, r.useCallback)(() => {
                            if (h) {
                                if (1 === o) return void h.scrollPrev();
                                h.scrollTo(Math.max(0, h.selectedScrollSnap() - o))
                            }
                        }, [h, o]),
                        y = (0, r.useCallback)(() => {
                            if (!h) return;
                            if (1 === o) return void h.scrollNext();
                            let e = h.scrollSnapList().length - 1;
                            h.scrollTo(Math.min(e, h.selectedScrollSnap() + o))
                        }, [h, o]);
                    return (0, a.jsxs)("div", {
                        className: (0, eu.cn)("relative max-w-full group/carousel overflow-hidden", d),
                        "data-testid": "carousel-v2",
                        ref: m,
                        children: [(0, a.jsx)(ed.R, {
                            containerRef: m,
                            children: (0, a.jsx)("div", {
                                className: "md:overflow-hidden px-4 md:px-0",
                                ref: p,
                                children: (0, a.jsx)("div", {
                                    className: (0, eu.cn)("flex", ep[n].container, c),
                                    children: r.Children.map(e, e => (0, a.jsx)("div", {
                                        className: (0, eu.cn)("min-w-0 shrink-0 grow-0", ep[n].slide, u),
                                        children: e
                                    }))
                                })
                            })
                        }), l ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: (0, eu.cn)("absolute top-1/2 -translate-y-1/2 z-1", em[i].prev, "hidden pointer-fine:flex", "opacity-0 group-hover/carousel:opacity-100 group-focus-within/carousel:opacity-100 transition-opacity duration-200"),
                                children: x ? (0, a.jsx)(ec.f, {
                                    "aria-label": "Previous slide",
                                    "data-testid": "carousel-v2-prev-button",
                                    icon: (0, a.jsx)(ei.A, {}),
                                    onClick: j,
                                    size: "lg",
                                    variant: "glass"
                                }) : null
                            }), (0, a.jsx)("div", {
                                className: (0, eu.cn)("absolute top-1/2 -translate-y-1/2 z-1", em[i].next, "hidden pointer-fine:flex", "opacity-0 group-hover/carousel:opacity-100 group-focus-within/carousel:opacity-100 transition-opacity duration-200"),
                                children: v ? (0, a.jsx)(ec.f, {
                                    "aria-label": "Next slide",
                                    "data-testid": "carousel-v2-next-button",
                                    icon: (0, a.jsx)(en.A, {}),
                                    onClick: y,
                                    size: "lg",
                                    variant: "glass"
                                }) : null
                            })]
                        }) : null]
                    })
                },
                ex = e => "_custom" in e && !0 === e._custom,
                eg = ({
                    data: e,
                    firstSlide: t,
                    firstSlideKey: s = "first-slide",
                    additionalOnClick: i
                }) => {
                    let {
                        analyticsGaName: n,
                        forgetScrollPosition: o
                    } = (0, el.aP)(), {
                        pushEvent: d
                    } = (0, er.L)(), c = (0, l.useRouter)(), {
                        isTabletOrDesktop: u
                    } = (0, H.Q)(), m = t ? [{
                        _custom: !0,
                        key: s,
                        node: t
                    }, ...e] : e;
                    return (0, r.useEffect)(() => {
                        (0, et.Z)({
                            elementId: "suggested_search_phrases"
                        })
                    }, []), (0, a.jsx)(eh, {
                        gap: "sm",
                        options: {
                            align: "start",
                            duration: 20,
                            dragFree: !0,
                            watchDrag: (e, t) => !u || !t.target.closest("button")
                        },
                        scrollStep: 1,
                        slideClassName: "flex pt-2 pb-1",
                        children: m.map((e, s) => {
                            let r = ex(e) ? String(e.key) : e.phrase;
                            return ex(e) ? (0, a.jsx)("div", {
                                children: e.node
                            }, r) : (0, a.jsx)(O.ab, {
                                asChild: !0,
                                "data-testid": "suggested-phrase-tag",
                                label: e.phrase,
                                onClick: () => (({
                                    phrase: e,
                                    routeInfo: s
                                }, a) => {
                                    (0, es.O)(e, {
                                        location: `${n}|suggested_phrases`,
                                        type: _.ak.analyticsGaName
                                    }), d({
                                        eventName: "suggestedPhraseClick",
                                        eventType: "click",
                                        eventParams: {
                                            phrase: e,
                                            context: {
                                                href: s.route,
                                                itemListId: (0, ea.Mh)(_.ak.analyticsGaName, "slider", f.N.SUGGESTED_PHRASES),
                                                position: a + (t ? 2 : 1)
                                            }
                                        }
                                    }), i && i(e), o || window.scrollTo(0, 0)
                                })(e, s),
                                children: (0, a.jsx)(j.A, {
                                    routeInfo: e.routeInfo,
                                    children: e.phrase
                                })
                            }, r)
                        })
                    }, c.asPath)
                };
            var ev = s(89812),
                e_ = s(22884);
            let ef = ({
                className: e,
                colorClassName: t,
                colorStyle: s,
                ...r
            }) => (0, a.jsx)("div", {
                className: (0, eu.cn)("size-full", t, e),
                "data-testid": "color-swatch",
                style: s,
                ...r
            });
            ef.displayName = "ColorSwatch";
            let ej = {
                name: "All",
                value: "all"
            };
            var ey = s(17593),
                ew = s(51622);
            let eN = ({
                slug: e,
                filterValues: t,
                hideSort: s,
                filterCategoryKey: i
            }) => {
                let [n, o] = (0, r.useState)(!1), {
                    queryParamKey: d = "q",
                    analyticsGaName: c,
                    forgetScrollPosition: u
                } = (0, el.aP)(), m = (0, l.useRouter)(), h = m.route, x = (0, p.sq)(), g = x.colors ? (0, ey.WV)(x.colors) : [], v = void 0 == u || u, _ = (e, t) => {
                    let s = (0, ey.iA)(t, e, d),
                        {
                            page: a,
                            ...r
                        } = { ...x,
                            [e]: s
                        };
                    m.push((0, p.ZW)({
                        path: h,
                        target: "elysium",
                        query: { ...r
                        }
                    }).route, void 0, {
                        scroll: v
                    }), v || window.scrollTo(0, 0)
                }, f = (0, p.ZW)({
                    path: h,
                    target: "elysium",
                    query: {
                        [d]: e
                    }
                }), y = !(0, ey.TN)(x, d), w = [ej, ...t.categories], N = n ? w : w.slice(0, 8), S = t.colors.filter(e => e.value).map(e => ({
                    value: e.value,
                    label: e.name,
                    colorStyle: {
                        backgroundColor: `#${e.value}`
                    }
                }));
                return e ? (0, a.jsxs)(O._s, {
                    children: [(0, a.jsx)(O.C1, {
                        "aria-label": "Filters",
                        className: "shrink-0",
                        type: "status",
                        visible: y,
                        children: (0, a.jsx)(O.Uz, {
                            asChild: !0,
                            children: (0, a.jsx)(O.$n, {
                                "data-testid": "filters-button",
                                onClick: () => {
                                    (0, e_.u)({
                                        event: "element_interaction",
                                        element_id: `${c}_filter_button`,
                                        element_variant: "none",
                                        interaction_type: "click"
                                    })
                                },
                                rightIcon: (0, a.jsx)(ev.A, {}),
                                variant: "secondaryDarkOutline",
                                children: "ALL FILTERS"
                            })
                        })
                    }), (0, a.jsxs)(O.zj, {
                        "aria-describedby": void 0,
                        "data-testid": "filters-drawer",
                        children: [(0, a.jsxs)(O.BE, {
                            children: [(0, a.jsx)(O.gk, {
                                children: "Filters"
                            }), y ? (0, a.jsx)(j.A, {
                                routeInfo: f,
                                scroll: v,
                                children: (0, a.jsx)("span", {
                                    className: "text-heading-h6 text-text-link",
                                    children: "Reset filters"
                                })
                            }) : null]
                        }), (0, a.jsxs)(O.ys, {
                            children: [s ? null : (0, a.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, a.jsx)("p", {
                                    className: "text-heading-subtitle mb-4",
                                    children: "Sort by"
                                }), (0, a.jsx)(O.z6, {
                                    name: "sort",
                                    onValueChange: e => _("sort", e),
                                    value: (0, ey.E4)(x.sort, ey.Ys[0].value),
                                    children: ey.Ys.map(({
                                        name: e,
                                        value: t
                                    }) => (0, a.jsx)(O.CU, {
                                        label: (0, a.jsx)("span", {
                                            className: "capitalize",
                                            children: e
                                        }),
                                        value: t
                                    }, t))
                                })]
                            }), t.orientation.length ? (0, a.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, a.jsx)("p", {
                                    className: "text-heading-subtitle mb-4",
                                    children: "Orientation"
                                }), (0, a.jsx)(O.z6, {
                                    name: "orientation",
                                    onValueChange: e => _("orientation", e),
                                    value: (0, ey.E4)(x.orientation, ej.value),
                                    children: [ej, ...t.orientation].map(({
                                        name: e,
                                        value: t
                                    }) => (0, a.jsx)(O.CU, {
                                        label: (0, a.jsx)("span", {
                                            className: "capitalize",
                                            children: e
                                        }),
                                        value: t
                                    }, t))
                                })]
                            }) : null, t.collections.length ? (0, a.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, a.jsx)("p", {
                                    className: "text-heading-subtitle mb-4",
                                    children: "Collection"
                                }), (0, a.jsx)(O.z6, {
                                    name: "collections",
                                    onValueChange: e => _("collections", e),
                                    value: (0, ey.E4)(x.collections, ej.value),
                                    children: [ej, ...t.collections].map(({
                                        name: e,
                                        value: t
                                    }) => "Verified Creators" === e ? (0, a.jsx)(O.CU, {
                                        caption: (0, a.jsxs)(a.Fragment, {
                                            children: ["Show Displates from Verified Creators", (0, a.jsx)("br", {}), "and top licensed designs.", " ", (0, a.jsx)(j.A, {
                                                routeInfo: ew._p,
                                                target: "_blank",
                                                children: "Learn more here."
                                            })]
                                        }),
                                        label: (0, a.jsxs)("span", {
                                            className: "flex items-center gap-2",
                                            children: [(0, a.jsx)("span", {
                                                className: "capitalize",
                                                children: e
                                            }), " ", (0, a.jsx)(O.Ex, {
                                                color: "lime",
                                                size: "sm",
                                                children: "New"
                                            })]
                                        }),
                                        value: t
                                    }, t) : (0, a.jsx)(O.CU, {
                                        label: (0, a.jsx)("span", {
                                            className: "capitalize",
                                            children: e
                                        }),
                                        value: t
                                    }, t))
                                })]
                            }) : null, t.productType.length ? (0, a.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, a.jsx)("p", {
                                    className: "text-heading-subtitle mb-4",
                                    children: "Product Type"
                                }), (0, a.jsx)(O.z6, {
                                    name: "productType",
                                    onValueChange: e => _("productType", e),
                                    value: (0, ey.E4)(x.productType, ej.value),
                                    children: [ej, ...t.productType].map(({
                                        name: e,
                                        value: t
                                    }) => (0, a.jsx)(O.CU, {
                                        label: (0, a.jsx)("span", {
                                            className: "capitalize",
                                            children: e
                                        }),
                                        value: t
                                    }, t))
                                })]
                            }) : null, t.categories.length ? (0, a.jsxs)("div", {
                                className: "mb-8",
                                children: [(0, a.jsx)("p", {
                                    className: "text-heading-subtitle mb-4",
                                    children: "Category"
                                }), (0, a.jsx)(O.z6, {
                                    name: i,
                                    onValueChange: e => _(i, e),
                                    value: (0, ey.E4)(x[i], ej.value),
                                    children: N.map(({
                                        name: e,
                                        value: t
                                    }) => (0, a.jsx)(O.CU, {
                                        label: (0, a.jsx)("span", {
                                            className: "capitalize",
                                            children: e
                                        }),
                                        value: t.toLowerCase()
                                    }, t))
                                }), w.length > 8 ? (0, a.jsx)(O.$n, {
                                    onClick: () => o(!n),
                                    variant: "text",
                                    children: n ? "Show less" : "Show more"
                                }) : null]
                            }) : null, S.length > 0 ? (0, a.jsxs)("div", {
                                className: "mb-8",
                                children: [(0, a.jsx)("p", {
                                    className: "text-heading-subtitle mb-4",
                                    children: "Color"
                                }), (0, a.jsx)(O.od, {
                                    "aria-label": "Color filters",
                                    onValueChange: e => _("colors", e),
                                    value: g,
                                    children: S.map(e => (0, a.jsx)(O.Fv, {
                                        label: e.label,
                                        value: e.value,
                                        children: (0, a.jsx)(ef, {
                                            colorStyle: e.colorStyle,
                                            "data-testid": `color-swatch-group-tile-${e.value}`
                                        })
                                    }, e.value))
                                })]
                            }) : null, t.artStyle.length ? (0, a.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, a.jsx)("p", {
                                    className: "text-heading-subtitle mb-4",
                                    children: "Art type"
                                }), (0, a.jsx)(O.z6, {
                                    name: "art_style",
                                    onValueChange: e => _("art_style", e),
                                    value: (0, ey.E4)(x.art_style, ej.value),
                                    children: [ej, ...t.artStyle].map(({
                                        name: e,
                                        value: t
                                    }) => (0, a.jsx)(O.CU, {
                                        label: (0, a.jsx)("span", {
                                            className: "capitalize",
                                            children: e
                                        }),
                                        value: t
                                    }, t))
                                })]
                            }) : null]
                        }), (0, a.jsx)(O.tb, {
                            sticky: !0,
                            children: (0, a.jsx)(O.cp, {
                                asChild: !0,
                                children: (0, a.jsx)(O.$n, {
                                    fullWidth: !0,
                                    variant: "primary",
                                    children: "Show results"
                                })
                            })
                        })]
                    })]
                }) : (0, a.jsx)(O.EA, {
                    className: "h-11 w-full"
                })
            };
            var eS = s(57151);
            let eb = () => {
                    let {
                        forgetScrollPosition: e
                    } = (0, el.aP)(), t = (0, l.useRouter)(), s = (0, p.sq)(), r = (0, ee.Q)(e => e.toggleOriginalArtistsFilter), i = void 0 == e || e, n = s.collections === eS.C;
                    return (0, a.jsx)(O.$n, {
                        active: n,
                        onClick: () => {
                            let {
                                page: e,
                                collections: a,
                                ...l
                            } = s, o = n ? { ...l
                            } : { ...l,
                                collections: eS.C
                            };
                            r(), t.push((0, _.cT)({
                                query: o
                            }).route, void 0, {
                                scroll: i
                            }), i || window.scrollTo(0, 0), (0, z.O)({
                                elementId: "search_by_verified_creators_button",
                                elementVariant: n ? "disable" : "enable",
                                interactionType: "click"
                            })
                        },
                        variant: "rainbow",
                        children: "BY VERIFIED CREATORS"
                    })
                },
                ek = (e, t, s) => !("random" === s || eS.u.includes(t || "")) && (e ? .collections ? .some(e => e.slug === eS.C) ? ? !1);
            var eA = s(13027),
                eT = s(67768),
                eC = s(95934),
                eI = s.n(eC);
            let eE = () => (0, a.jsx)("span", {
                    className: eI().animatedStar,
                    "data-name": "star-outline",
                    children: (0, a.jsx)("span", {
                        className: eI().animatedStarBounce,
                        children: (0, a.jsx)("span", {
                            className: eI().animatedStarSpin,
                            children: (0, a.jsx)(eA.A, {
                                "aria-hidden": !0,
                                className: "h-5 w-5"
                            })
                        })
                    })
                }),
                eR = ({
                    isActive: e
                }) => {
                    let t = (0, eT.jE)(),
                        s = (0, p.sq)(),
                        {
                            page: r,
                            sort: l,
                            ...i
                        } = s,
                        n = s.q || v,
                        o = () => {
                            (0, e_.u)({
                                event: "element_interaction",
                                element_id: "verified_creators_surprise_me_button",
                                element_variant: "none",
                                interaction_type: "click"
                            })
                        },
                        d = (0, _.cT)({
                            query: { ...i,
                                q: n,
                                sort: e ? void 0 : "random"
                            }
                        });
                    return (0, a.jsxs)("div", {
                        className: "flex gap-4",
                        children: [e ? (0, a.jsx)(O.$n, {
                            "aria-label": "Back to default search results",
                            asChild: !0,
                            variant: "text",
                            children: (0, a.jsx)(j.A, {
                                routeInfo: d,
                                children: (0, a.jsxs)("span", {
                                    className: "inline-flex items-center gap-1.5",
                                    children: [(0, a.jsx)(ei.A, {
                                        "aria-hidden": !0,
                                        className: "h-4 w-4"
                                    }), "BACK"]
                                })
                            })
                        }) : null, e ? (0, a.jsx)(O.$n, {
                            "aria-label": "Get another set of random results",
                            onClick: () => {
                                t.refetchQueries({
                                    queryKey: (0, u.P)(n)
                                }), o(), window.scrollTo(0, 0)
                            },
                            rightIcon: (0, a.jsx)(eE, {}),
                            variant: "secondaryDarkOutline",
                            children: "SURPRISE ME"
                        }) : (0, a.jsx)(O.$n, {
                            "aria-label": "Surprise me with random search results",
                            asChild: !0,
                            variant: "secondaryDarkOutline",
                            children: (0, a.jsx)(j.A, {
                                onClick: o,
                                routeInfo: d,
                                children: (0, a.jsxs)("span", {
                                    className: "inline-flex items-center gap-1.5",
                                    children: ["SURPRISE ME", (0, a.jsx)(eE, {})]
                                })
                            })
                        })]
                    })
                },
                eD = ({
                    slug: e,
                    filters: t
                }) => {
                    let {
                        sort: s
                    } = (0, p.sq)(), r = "random" === s, l = ek(t, e, s), i = eS.C.replaceAll("-", " ") === e;
                    return (0, a.jsxs)("div", {
                        className: "flex gap-2",
                        children: [l ? (0, a.jsx)(eb, {}) : null, i ? (0, a.jsx)(eR, {
                            isActive: r
                        }) : null, r ? null : (0, a.jsx)(eN, {
                            filterCategoryKey: "categories",
                            filterValues: {
                                categories: t ? .categories ? .map(({
                                    name: e
                                }) => ({
                                    name: e,
                                    value: e
                                })) || [],
                                colors: t ? .colors ? .map(({
                                    name: e,
                                    hex: t
                                }) => ({
                                    name: e,
                                    value: t
                                })) || [],
                                artStyle: t ? .artStyle ? .map(({
                                    name: e
                                }) => ({
                                    name: e,
                                    value: e
                                })) || [],
                                orientation: t ? .orientation ? .map(({
                                    name: e
                                }) => ({
                                    name: e,
                                    value: e
                                })) || [],
                                collections: t ? .collections ? .map(({
                                    name: e,
                                    slug: t
                                }) => ({
                                    name: e,
                                    value: t
                                })) || [],
                                tags: t ? .tags ? .map(({
                                    name: e
                                }) => ({
                                    name: e,
                                    value: e
                                })) || [],
                                productType: t ? .productType ? .map(({
                                    name: e
                                }) => ({
                                    name: e,
                                    value: e
                                })) || []
                            },
                            slug: e
                        })]
                    })
                };
            var eP = s(40675),
                eO = s.n(eP);
            let eF = ({
                suggestedPhrases: e,
                slug: t,
                filters: s
            }) => {
                let r = (0, ee.Q)(e => e.setSearchValue),
                    l = e ? .phrases ? .length,
                    {
                        sort: i
                    } = (0, p.sq)();
                return (0, a.jsx)(eg, {
                    additionalOnClick: r,
                    data: l ? e.phrases.map(e => ({
                        phrase: e.phrase,
                        slug: e.slug,
                        routeInfo: (0, _.cT)({
                            query: {
                                q: e.slug
                            }
                        })
                    })) : [],
                    firstSlide: (0, a.jsx)(a.Fragment, {
                        children: s ? (0, a.jsx)(eD, {
                            filters: s,
                            slug: t
                        }) : "random" === i ? null : (0, a.jsx)(O.EA, {
                            className: `${eO().skeletonContainer} h-11 w-full`
                        })
                    }),
                    firstSlideKey: "search-filters"
                })
            };
            var eL = s(43177),
                eq = s.n(eL);
            let eM = ({
                phrase: e,
                suggestedPhrases: t
            }) => e && t ? "" === t.resultsTitleH1 ? null : (0, a.jsx)("h1", {
                className: "text-heading-h4 mt-6",
                children: t.resultsTitleH1 && t.resultsTitleH1.length > 0 ? t.resultsTitleH1 : `Posters for "${e}"`
            }) : (0, a.jsx)(O.EA, {
                className: `${eq().headingSkeleton} size-full`
            });
            var eB = s(46372);
            let eG = e => `${e}`.replaceAll("-", " ").toLowerCase(),
                ez = ({
                    resultsCount: e,
                    searchPhrase: t,
                    filters: s,
                    sort: a,
                    page: r
                }) => {
                    let l = e ? "regular" : "empty";
                    return (0, e_.u)({
                        event: "search_results",
                        search_term: eG(t),
                        search_results_type: `search_results|${l}`,
                        search_results_number: e,
                        page_number: r,
                        filter_category: s ? .categories || "All",
                        filter_colors: s ? .colors || "All",
                        filter_orientation: s ? .orientation || "All",
                        filter_style: s ? .artStyle || "All",
                        filter_sorting: a || ""
                    })
                };
            var eH = s(16373),
                e$ = s(84558),
                eU = s(74753),
                eW = s(33055),
                eV = s.n(eW);
            let eQ = () => (0, a.jsxs)("div", {
                className: eV().wrapper,
                children: [(0, a.jsx)("span", {
                    className: eV().textBold,
                    children: "Looking for accessories?"
                }), (0, a.jsxs)("span", {
                    children: [(0, a.jsx)(O.N_, {
                        asChild: !0,
                        children: (0, a.jsx)(j.A, {
                            routeInfo: (0, eU.W)(),
                            children: "Check out our accessories page"
                        })
                    }), " ", "and find out more about our mounting systems."]
                })]
            });
            var eY = s(8144),
                eZ = s.n(eY);
            let eK = ({
                    data: e,
                    isFetched: t,
                    paymentMethods: s
                }) => {
                    let i = (0, p.sq)(),
                        n = ((e, t, s) => {
                            let a = !e && t,
                                {
                                    q: r,
                                    ...l
                                } = s,
                                i = a && (0, ey.TN)(l, "q"),
                                n = a && !(0, ey.TN)(l, "q");
                            return {
                                resultsCount: e || 0,
                                noDisplatesReturned: a,
                                hasNoResults: i,
                                hasNoResultsWithFilters: n
                            }
                        })(e ? .searchResult ? .artworks ? .length, t, i),
                        o = "random" === i.sort && e ? .searchResult ? .count === void 0;
                    return (({
                        resultsStatus: e,
                        searchParams: t,
                        data: s
                    }) => {
                        let {
                            track: a
                        } = (0, eH.z)(), {
                            readableName: l
                        } = (0, el.aP)();
                        return (0, r.useEffect)(() => {
                            if (e.resultsCount > 0) {
                                let {
                                    page: r,
                                    query: l,
                                    sort: i,
                                    ...n
                                } = t;
                                a({
                                    eventParams: {
                                        phrase: t.q,
                                        page: Number(r) || 1,
                                        pages: Math.ceil(e.resultsCount / 108),
                                        filters: n,
                                        searchQueryId: s ? .searchResult ? .searchQueryId || null,
                                        sort: i || "bestselling"
                                    }
                                }), ez({
                                    resultsCount: e.resultsCount,
                                    searchPhrase: t.q,
                                    filters: t,
                                    sort: t.sort,
                                    page: Number(t.page) || 1
                                })
                            }
                        }, [s ? .searchResult]), (0, r.useEffect)(() => {
                            e.noDisplatesReturned && !(0, ey.TN)(t, _.ak.queryParamKey) && ez({
                                resultsCount: 0,
                                searchPhrase: t.q,
                                filters: t,
                                sort: t.sort,
                                page: 0
                            })
                        }, [e.noDisplatesReturned]), (0, r.useEffect)(() => {
                            (0, eB.D)(l, eG(t.q))
                        }, [l, t.q])
                    })({
                        resultsStatus: n,
                        searchParams: i,
                        data: e
                    }), (({
                        data: e,
                        hasNoResults: t,
                        searchParams: s
                    }) => {
                        let a = (0, l.useRouter)();
                        (0, r.useEffect)(() => {
                            e$.bA.removeItem()
                        }, []);
                        let i = (0, r.useCallback)(e => {
                            let t = (0, e$.YE)(e);
                            a.push(t.route, void 0)
                        }, [a]);
                        return (0, r.useEffect)(() => {
                            s.q && t && (e$.bA.setItem({
                                copyrighted: e ? .copyrighted,
                                sort: s.sort,
                                suggestedPhrases: e ? .suggestedPhrases ? .phrases,
                                seoTitle: e ? .seo ? .title,
                                seoDescription: e ? .seo ? .description,
                                isWhitelistedSearchPhrase: e ? .seo ? .searchPhraseWhitelisted
                            }), i(s.q))
                        }, [t])
                    })({
                        data: e,
                        hasNoResults: n.hasNoResults,
                        searchParams: i
                    }), (({
                        filters: e,
                        slug: t,
                        searchParams: s
                    }) => {
                        let a = (0, l.useRouter)(),
                            i = (0, ee.Q)(e => e.setOriginalArtistsFilter),
                            n = s.collections === eS.C,
                            o = ek(e, t, s.sort);
                        (0, r.useEffect)(() => {
                            if (e) {
                                if (n && !o) {
                                    i(!1);
                                    let {
                                        collections: e,
                                        page: t,
                                        ...r
                                    } = s;
                                    a.replace((0, _.cT)({
                                        query: r
                                    }).route, void 0, {
                                        scroll: !1
                                    });
                                    return
                                }
                                i(n)
                            }
                        }, [e, n, o, s, i, a])
                    })({
                        filters: e ? .filters,
                        slug: e ? .phrase.slug,
                        searchParams: i
                    }), (0, a.jsxs)("div", {
                        className: eZ().container,
                        children: [(0, a.jsxs)(O.mc, {
                            children: [(0, a.jsx)(V.A, {
                                containerVariant: "noPaddingMobile",
                                noPaddings: o,
                                renderItem: () => (0, a.jsx)(eF, {
                                    filters: e ? .filters,
                                    slug: e ? .phrase.slug,
                                    suggestedPhrases: e ? .suggestedPhrases
                                })
                            }), (0, a.jsx)(eM, {
                                phrase: e ? .phrase ? .phrase,
                                suggestedPhrases: e ? .suggestedPhrases
                            }), (0, a.jsx)(W, {
                                data: e ? .banner,
                                page: i.page
                            }), e ? .showMagnets ? (0, a.jsx)(eQ, {}) : null, (0, a.jsx)(M, {
                                page: (0, K.GB)(i.page) || 1,
                                searchPhrase: i.q,
                                searchResult: e ? .searchResult,
                                showNoResultsBar: n.hasNoResultsWithFilters,
                                sort: i.sort
                            })]
                        }), (0, a.jsx)(Q.z, {}), e ? .seo ? (0, a.jsx)(O.mc, {
                            className: eZ().seoTagsSection,
                            withVerticalPadding: !0,
                            children: (0, a.jsx)(Z.K, {
                                tags: e ? .seo.relatedSearches,
                                title: "Explore related searches"
                            })
                        }) : null, (0, a.jsx)(J.Newsletter, {}), (0, a.jsx)(X.default, {
                            className: "py-8 pt-12 md:pt-16 pb-12 md:pb-16",
                            paymentMethods: s
                        }), e ? .seo ? (0, a.jsx)("div", {
                            className: "mb-9",
                            children: (0, a.jsx)(Y.SeoDescription, {
                                sections: [{
                                    title: e.seo.title,
                                    description: e.seo.description
                                }]
                            })
                        }) : null]
                    })
                },
                eX = ["q", "page", "uvert"],
                eJ = ({
                    header: e,
                    isIndexable: t,
                    initialSearchResult: s
                }) => {
                    let m = (0, p.sq)(),
                        f = (0, l.useRouter)(),
                        {
                            fetchedUserInfo: j
                        } = (0, r.useContext)(x.cy),
                        y = (0, i._g)(n.OD),
                        {
                            q: w,
                            sort: N,
                            categories: S,
                            colors: b,
                            orientation: k,
                            art_style: A,
                            collections: T,
                            page: C,
                            productType: I,
                            isArtistSuggestion: E
                        } = f.query,
                        R = Object.keys(m).filter(e => !eX.includes(e)).length > 0 || !t,
                        {
                            data: D,
                            isFetched: P
                        } = (0, u.W)({
                            phrase: w || v,
                            athenaUserId: (0, o.R)() || "",
                            userAgent: window.navigator.userAgent,
                            enabled: j,
                            filters: {
                                sort: N,
                                categories: S,
                                colors: b,
                                orientation: k,
                                artStyle: A,
                                page: Number(C),
                                size: 108,
                                collections: T,
                                productType: I,
                                isArtistSuggestion: "true" === E
                            },
                            initialData: s || void 0,
                            variant: y && "control" !== y.variantName ? "CONR-4303" : void 0
                        }),
                        O = (0, h.ZH)(`${w||"Trending"}`).replaceAll("-", " "),
                        F = {
                            title: `${O} Posters Online - Shop Unique Metal Prints, Pictures, Paintings ${C&&Number(C)>1?`- page ${C} `:""}| Displate`,
                            description: `Browse amazing ${O} posters designed by thousands of independent artists. Printed on metal. Shipped ready to hang and rock your walls.`,
                            coverImage: _.ak.defaultMeta.coverImage
                        },
                        L = {
                            webpage: {
                                h1: O,
                                url: (0, _.cT)({
                                    absolute: !0,
                                    query: {
                                        q: w,
                                        page: C
                                    }
                                }).route,
                                description: F.description,
                                imageOfPage: F.coverImage
                            }
                        };
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(c.F, {
                            ldJsonParams: L,
                            noIndex: R,
                            pageMeta: F
                        }), (0, a.jsx)(d.e, {
                            value: {},
                            children: (0, a.jsx)(g.O, {
                                headerData: e,
                                children: (0, a.jsx)(eK, {
                                    data: D,
                                    isFetched: P,
                                    paymentMethods: e.paymentMethods
                                })
                            })
                        })]
                    })
                };
            eJ.getLayout = function(e) {
                return (0, a.jsx)(m.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            };
            let e0 = eJ
        },
        30236: (e, t, s) => {
            "use strict";
            s.d(t, {
                J: () => r,
                X: () => a
            });
            let a = {
                    mobile: 7,
                    desktop: 10
                },
                r = {
                    mobile: 31,
                    desktop: 31
                }
        },
        30333: (e, t, s) => {
            "use strict";
            s.d(t, {
                L: () => d
            });
            var a = s(37876),
                r = s(27555),
                l = s(16909),
                i = s(36256),
                n = s(18291),
                o = s.n(n);
            let d = e => {
                if ("filters" === e.variant) {
                    let {
                        routeInfo: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: o().wrapper,
                        children: [(0, a.jsx)("span", {
                            className: o().filtersLead,
                            children: "Oops, looks like we don’t have what you’re searching for."
                        }), (0, a.jsxs)("span", {
                            className: o().filtersHint,
                            children: ["Try changing your query or", " ", (0, a.jsx)(i.N_, {
                                asChild: !0,
                                children: (0, a.jsx)(r.A, {
                                    routeInfo: t,
                                    children: "clear filters."
                                })
                            })]
                        })]
                    })
                }
                let {
                    nick: t,
                    phrase: s,
                    routeInfo: n,
                    headingDisplayName: d
                } = e, c = d && d.trim().length > 0 ? d.trim() : (0, l.ZH)(t);
                return (0, a.jsxs)("div", {
                    className: o().wrapper,
                    children: [(0, a.jsxs)("h2", {
                        className: o().title,
                        children: [c, " hasn’t tackled it yet"]
                    }), (0, a.jsxs)("span", {
                        className: o().content,
                        children: ["We couldn’t find any matches ", (0, a.jsx)("br", {}), "for '", s, "' in this gallery."]
                    }), (0, a.jsxs)("span", {
                        className: o().content,
                        children: ["Try something new or simply", " ", (0, a.jsx)(i.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(r.A, {
                                routeInfo: n,
                                children: "clear the search."
                            })
                        })]
                    })]
                })
            }
        },
        33055: e => {
            e.exports = {
                wrapper: "MagnetsBar_wrapper___B2LP",
                textBold: "MagnetsBar_textBold__8Dmc7"
            }
        },
        36573: (e, t, s) => {
            "use strict";
            s.d(t, {
                Dj: () => l,
                Go: () => o,
                U8: () => n,
                ZF: () => i
            });
            var a = s(31850),
                r = s(16909);
            let l = (e, t, s, a) => `${e}-${t}-${s}-${a}`,
                i = e => e.split("/").slice(-2).filter(e => e).join("/"),
                n = () => {
                    let e = (0, a.qg)(window.navigator.userAgent).isMobile ? "mobile" : "desktop",
                        t = (0, r.UN)() ? "Retina" : "Standard";
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
        38757: (e, t, s) => {
            "use strict";
            s.d(t, {
                V: () => r
            });
            var a = s(98461);
            let r = (e, t) => {
                    e.metadata.messageSendingDisabled || t({
                        eventName: "artworkClick",
                        eventType: "click",
                        eventParams: l(e)
                    })
                },
                l = e => {
                    let {
                        pathname: t
                    } = window.location, s = (0, a.R)(), {
                        message: r,
                        metadata: {
                            athenaPageName: l,
                            listingFunction: i,
                            listingType: n,
                            searchQueryId: o
                        }
                    } = e;
                    return {
                        impressionId: `${r.index+1}_${r.externalId}_${s}`,
                        userId: s,
                        target: `displate/${r.externalId}`,
                        context: {
                            itemListId: `PT:${l}|LT:${n}|LF:${i}`,
                            abTest: null,
                            position: r.index + 1,
                            source: t
                        },
                        itemCollectionId: r.externalId,
                        searchQueryId: o || null,
                        searchPosition: r.index + 1,
                        itemId: r.internalId
                    }
                }
        },
        40636: (e, t, s) => {
            "use strict";
            s.d(t, {
                CN: () => o,
                Tu: () => i,
                hM: () => l,
                kc: () => n,
                lB: () => d
            });
            var a = s(22884),
                r = s(51192);
            let l = ({
                    componentLocation: e,
                    authorId: t,
                    authorName: s
                }) => (0, a.u)({
                    event: "follow",
                    follow_location: e,
                    follow_id: t.toString(),
                    follow_name: s
                }),
                i = e => (0, r.O)({
                    elementId: "follow_button",
                    elementVariant: e
                }),
                n = ({
                    componentLocation: e,
                    authorId: t,
                    authorName: s
                }) => (0, a.u)({
                    event: "unfollow",
                    follow_location: e,
                    follow_id: t.toString(),
                    follow_name: s
                }),
                o = (e, t) => {
                    t({
                        eventType: "click",
                        eventName: e
                    })
                },
                d = e => {
                    e({
                        eventType: "view",
                        eventName: "followList"
                    })
                }
        },
        40675: e => {
            e.exports = {
                skeletonContainer: "FiltersAndSuggestedPhrasesSlider_skeletonContainer__fvGW1",
                slide: "FiltersAndSuggestedPhrasesSlider_slide__wfskY"
            }
        },
        41037: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => a
            });
            let a = e => e.trim().replace(/\s/g, "_").toLowerCase()
        },
        43177: e => {
            e.exports = {
                heading: "SearchTitle_heading__mS2_O",
                headingSkeleton: "SearchTitle_headingSkeleton__uY0cS"
            }
        },
        46372: (e, t, s) => {
            "use strict";
            s.d(t, {
                D: () => r
            });
            var a = s(72318);
            let r = (e, t) => {
                (0, a.m)("page_view", {
                    page: e,
                    parameter: t
                })
            }
        },
        47325: (e, t, s) => {
            "use strict";
            s.d(t, {
                P: () => n,
                W: () => o
            });
            var a = s(74359),
                r = s(37149),
                l = s(83736),
                i = s(87050);
            let n = e => ["search", l.s, e];

            function o({
                phrase: e,
                athenaUserId: t,
                enabled: s,
                userAgent: l,
                filters: d,
                initialData: c,
                variant: u
            }) {
                let m = !!c;
                return (0, a.I)({
                    queryKey: [...n(e), d, u ? ? null],
                    queryFn: () => i.$y.getSearchResultV9(e, t, l, d ? .categories || null, d ? .orientation || null, d ? .artStyle || null, d ? .productType || null, d ? .colors || null, d ? .collections || null, d ? .page || null, d ? .size || null, d ? .sort || null, u || null, d ? .isArtistSuggestion ? ? !1),
                    enabled: !1 !== s && !m,
                    initialData: c || void 0,
                    placeholderData: r.rX
                })
            }
        },
        47598: (e, t, s) => {
            "use strict";
            s.d(t, {
                K: () => p
            });
            var a = s(37876),
                r = s(14232),
                l = s(76436),
                i = s(27555),
                n = s(37787),
                o = s(47765),
                d = s(36256),
                c = s(14619),
                u = s(7234);
            let m = ["electricGreen", "warpSpeedBlue", "flameOrange", "jordyBlue", "powerPink"],
                p = ({
                    tags: e,
                    title: t,
                    classes: s
                }) => {
                    let {
                        analyticsGaName: p
                    } = (0, o.aP)(), h = e.slice(0, 12);
                    return (0, a.jsxs)(d.mc, {
                        className: (0, c.cn)("bg-background-light", s ? .section),
                        "data-testid": "related-searches-section",
                        children: [(0, a.jsx)("h2", {
                            className: "mb-6 block text-center text-display-xs font-display uppercase md:mx-12 md:mb-12 md:text-display-sm",
                            children: t
                        }), (0, a.jsx)("div", {
                            className: "scrollbar-hide -mx-4 max-w-[100vw] overflow-x-auto md:mx-12 md:flex md:flex-wrap md:justify-center md:overflow-visible md:px-10",
                            "data-testid": "related-searches-list",
                            children: h.map((e, t) => t < 12 && t % 3 == 0 ? (0, a.jsx)("div", {
                                className: "ml-4 flex md:ml-0",
                                "data-testid": "tagRow",
                                children: h.slice(t, t + 3).map((e, s) => {
                                    let o, c;
                                    return (0, a.jsxs)(r.Fragment, {
                                        children: [(o = t + s, c = `mobile-tag-${e.slug}`, (0, a.jsx)(d.vu, {
                                            asChild: !0,
                                            className: "mb-3 mr-3 md:mb-4",
                                            color: m[o % m.length],
                                            interactive: !0,
                                            children: (0, a.jsxs)(i.A, {
                                                onClick: () => (0, l.O)(e.phrase, {
                                                    location: `${p}|related_searches`,
                                                    type: u.ak.analyticsGaName
                                                }),
                                                routeInfo: (0, n.mM)(e.slug, e.routeType ? ? n.su.Search),
                                                children: [(0, a.jsx)("span", {
                                                    className: "relative shrink-0 truncate capitalize",
                                                    children: e.phrase
                                                }), (0, a.jsx)("span", {
                                                    className: "relative shrink-0 truncate opacity-60",
                                                    children: "posters"
                                                })]
                                            })
                                        }, c)), 2 === s ? (0, a.jsx)("span", {
                                            className: "inline md:hidden",
                                            children: "\xa0"
                                        }) : null]
                                    }, `tagRow-${s}`)
                                })
                            }, `row-${t}`) : null)
                        })]
                    })
                }
        },
        48803: (e, t, s) => {
            "use strict";
            s.d(t, {
                k: () => c
            });
            var a = s(37876),
                r = s(27555),
                l = s(27735),
                i = s(38847),
                n = s(10769),
                o = s(36256),
                d = s(39806);
            let c = () => {
                let e = (0, i.u)(l.DY),
                    t = (0, n.v9)({
                        assetPath: e ? "/images/custom-displate/campaign/masonry_tile.jpg" : "/images/custom-displate/tile-img.png",
                        widths: [100, 275]
                    });
                return (0, a.jsxs)(r.A, {
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
        48951: (e, t, s) => {
            "use strict";
            s.d(t, {
                L: () => o
            });
            var a = s(37876),
                r = s(69241),
                l = s(36256),
                i = s(17779),
                n = s.n(i);
            let o = ({
                showStars: e = !0,
                customText: t,
                customOverlayStyle: s
            }) => (0, a.jsxs)("div", {
                className: n().animatedFeedSkeleton,
                children: [(0, a.jsxs)("div", {
                    className: n().animatedFeedGridSkeleton,
                    children: [(0, a.jsx)("div", {
                        className: n().animationGroup,
                        children: [...Array(24).keys()].map(e => (0, a.jsx)(l.EA, {
                            className: `${n().skeleton} size-full`
                        }, e))
                    }), (0, a.jsx)("div", {
                        className: n().animationGroup,
                        children: [...Array(24).keys()].map(e => (0, a.jsx)(l.EA, {
                            className: `${n().skeleton} size-full`
                        }, e))
                    })]
                }), (0, a.jsx)("div", {
                    className: (0, r.A)(n().overlay, s),
                    children: (0, a.jsxs)("div", {
                        className: n().textContainer,
                        children: [t || (0, a.jsxs)("p", {
                            className: n().text,
                            children: ["Loading your", (0, a.jsx)("br", {}), "new favourites"]
                        }), e ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("p", {
                                className: (0, r.A)(n().star, n().star1),
                                children: "✨"
                            }), (0, a.jsx)("p", {
                                className: (0, r.A)(n().star, n().star2),
                                children: "✨"
                            }), (0, a.jsx)("p", {
                                className: (0, r.A)(n().star, n().star3),
                                children: "✨"
                            }), (0, a.jsx)("p", {
                                className: (0, r.A)(n().star, n().star4),
                                children: "✨"
                            })]
                        }) : null]
                    })
                })]
            })
        },
        49746: () => {},
        57934: (e, t, s) => {
            "use strict";
            s.d(t, {
                N: () => r,
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
                r = {
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
        60013: (e, t, s) => {
            "use strict";
            s.d(t, {
                G: () => o
            });
            var a = s(37876),
                r = s(27555),
                l = s(10769),
                i = s(36256),
                n = s(7234);
            let o = () => {
                let e = (0, l.v9)({
                    assetPath: "/images/artist/verified-artist.png",
                    widths: [100, 275]
                });
                return (0, a.jsxs)(r.A, {
                    className: "relative flex w-full min-w-0 flex-col items-center justify-between pb-4 text-center aspect-5/7 row-end-[span_2] hover:no-underline! xl:pt-4 xl:pb-4 2xl:pt-12 2xl:pb-8",
                    "data-testid": "verified-creators-tile",
                    routeInfo: (0, n.cT)({
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
                        children: (0, a.jsx)(i.$n, {
                            fullWidth: !0,
                            size: "sm",
                            variant: "primary",
                            children: "Explore"
                        })
                    })]
                })
            }
        },
        64968: (e, t, s) => {
            "use strict";
            s.d(t, {
                e: () => d,
                l: () => o
            });
            var a = s(37876),
                r = s(14232),
                l = s(69241),
                i = s(37253),
                n = s.n(i);
            let o = (0, r.createContext)({}),
                d = ({
                    children: e
                }) => {
                    let [t, s] = (0, r.useState)(!1), [i, d] = (0, r.useState)(!1), [c, u] = (0, r.useState)(0), m = (0, r.useRef)(null), p = (0, r.useRef)(null), h = (0, r.useRef)(null);
                    return (0, r.useEffect)(() => {
                        u(window.innerWidth - document.documentElement.clientWidth)
                    }, []), (0, r.useEffect)(() => {
                        let e = document.getElementById("main-container");
                        document.documentElement.style.setProperty("--scrollBarWidth", `${c}px`), t ? (e && e.classList.add(n().scrollBarWidth), document.body.classList.add(n().editHtmlDrawer), h.current ? .classList.add(n().editHeaderDrawer, n().scrollBarWidth)) : (e && e.classList.remove(n().scrollBarWidth), document.body.classList.remove(n().editHtmlDrawer), h.current ? .classList.remove(n().editHeaderDrawer, n().scrollBarWidth))
                    }, [t, c]), (0, a.jsxs)(o.Provider, {
                        value: {
                            setHeaderRef: e => {
                                h.current = e.current
                            },
                            setIsDrawerFullHeight: d,
                            handleBackdropClose: () => s(!1),
                            handleBackdropOpen: () => s(!0),
                            drawerContainerRef: m,
                            drawerBackdropRef: p
                        },
                        children: [e, (0, a.jsx)("div", {
                            className: (0, l.A)(n().drawerContainer, n().clientDrawer, {
                                [n().drawerContainerOpened]: t,
                                [n().drawerContainerFullHeight]: i
                            }),
                            "data-testid": "drawer-container",
                            ref: m
                        }), (0, a.jsx)("div", {
                            className: (0, l.A)(n().drawerBackdrop, {
                                [n().drawerBackdropOpened]: t
                            }),
                            ref: p
                        })]
                    })
                }
        },
        71568: (e, t, s) => {
            "use strict";
            s.d(t, {
                D: () => r,
                z: () => l
            });
            var a = s(84583);
            let r = e => e ? e.map(e => ({
                    internalId: e.internalId,
                    externalId: e.externalId,
                    imageCoreUrl: e.imageCoreUrl,
                    orientation: e.orientation,
                    title: e.title,
                    labels: (0, a.pr)(e.labels),
                    sku: e.sku
                })) : [],
                l = e => r(e)
        },
        76436: (e, t, s) => {
            "use strict";
            s.d(t, {
                O: () => r
            });
            var a = s(22884);
            let r = (e, t) => {
                (0, a.u)({
                    event: "tag_click",
                    tag_label: e.toLowerCase(),
                    tag_type: t.type,
                    tag_location: t.location
                })
            }
        },
        79265: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => g
            });
            var a = s(37876),
                r = s(14232),
                l = s(89099),
                i = s(14619),
                n = s(29633),
                o = s(14078),
                d = s(40636),
                c = s(41037),
                u = s(95729),
                m = s(2661),
                p = s(36256);
            let h = ({
                feedContents: e,
                activeTab: t,
                handleFeedChange: s
            }) => {
                let {
                    pushEvent: r
                } = (0, m.L)(), l = t < e.length ? t : 0;
                return (0, a.jsxs)(a.Fragment, {
                    children: [e.length > 1 ? (0, a.jsx)("div", {
                        className: "flex w-full justify-evenly overflow-x-auto mb-6 md:mb-10",
                        children: (0, a.jsx)(p.Iz, {
                            className: "shrink-0 uppercase",
                            items: e.map(e => ({
                                label: (0, a.jsx)("span", {
                                    className: "capitalize",
                                    "data-testid": e.heading,
                                    children: e.heading
                                }),
                                value: e.heading
                            })),
                            name: "masonry-feed-v2",
                            onChange: a => {
                                let l = e.findIndex(e => e.heading === a);
                                l < 0 || l === t || (s(l), (0, u.q)((0, c.Z)(a)), "following" === e[l].heading && (0, d.lB)(r))
                            },
                            value: e[l].heading
                        })
                    }) : null, e[l].content]
                })
            };
            var x = s(23412);
            let g = ({
                feeds: e,
                metadata: t,
                className: s,
                artworksToDisplay: d = n.T,
                customGridItem: c
            }) => {
                let u = (0, l.useRouter)(),
                    [m, p] = (0, r.useState)(0);
                (0, r.useEffect)(() => {
                    p(0)
                }, [u.asPath]);
                let g = (0, r.useMemo)(() => e.filter(e => e.shouldBeShown).map(e => (0, x.xG)(e, t, u.pathname, void 0, d, c)), [e, t, u.pathname, d, c]);
                return ((0, r.useEffect)(() => {
                    m >= g.length && g.length > 0 && p(0)
                }, [m, g.length]), 0 === e.length || (0, x.nz)(e)) ? (0, a.jsx)(o.F, {
                    className: s
                }) : (0, a.jsx)("div", {
                    className: (0, i.cn)("flex flex-col items-center [&_button:first-letter]:uppercase", s),
                    "data-testid": "masonry-feed-container",
                    children: (0, a.jsx)(h, {
                        activeTab: m,
                        feedContents: g,
                        handleFeedChange: p
                    })
                })
            }
        },
        90304: e => {
            e.exports = {
                customOverlayStyle: "ResultList_customOverlayStyle__rTnDE"
            }
        },
        93811: (e, t, s) => {
            "use strict";
            s.d(t, {
                _: () => l
            });
            var a = s(30068),
                r = s(2661);
            let l = e => {
                (0, a.S)(e), (0, r.e)(e)
            }
        },
        95687: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                SeoDescription: () => c
            });
            var a = s(37876),
                r = s(14232),
                l = s(67376),
                i = s.n(l),
                n = s(56926),
                o = s(36256),
                d = s(14619);
            let c = ({
                sections: e,
                className: t,
                dataTestId: s = "seo-description",
                expandableOnMobile: l = !1,
                ref: c,
                ...u
            }) => {
                let [m, p] = (0, r.useState)(!1), h = l && e.length > 1;
                return (0, a.jsx)(o.mc, {
                    asChild: !0,
                    children: (0, a.jsx)("section", {
                        className: t,
                        "data-testid": s,
                        ref: c,
                        ...u,
                        children: (0, a.jsxs)("div", {
                            className: "flex w-full flex-col gap-5 overflow-hidden wrap-break-word rounded-md bg-background-medium p-6 text-text-primary md:px-20 md:py-12 md:pl-12",
                            children: [e.map((e, t) => {
                                var s;
                                let r;
                                return (0, a.jsxs)("div", {
                                    className: (0, d.cn)("flex flex-col gap-4", h && !m && t > 0 ? "max-md:hidden" : null),
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-display-xs font-display uppercase",
                                        children: e.title
                                    }), (s = h && !m && 0 === t ? "max-md:line-clamp-12" : void 0, r = (0, d.cn)("text-body-md", s), e.renderDescriptionAsHtml && "string" == typeof e.description ? (0, a.jsx)("div", {
                                        className: r,
                                        dangerouslySetInnerHTML: {
                                            __html: i()(e.description)
                                        }
                                    }) : "string" == typeof e.description ? (0, a.jsx)("p", {
                                        className: r,
                                        children: e.description
                                    }) : (0, a.jsx)("div", {
                                        className: r,
                                        children: e.description
                                    }))]
                                }, e.title)
                            }), h ? (0, a.jsx)(o.$n, {
                                className: "self-center md:hidden",
                                onClick: () => p(e => !e),
                                rightIcon: (0, a.jsx)(n.A, {
                                    className: (0, d.cn)("transition-transform", m ? "rotate-180" : null),
                                    color: "currentColor"
                                }),
                                variant: "secondaryDarkOutline",
                                children: m ? "Show less" : "Show more"
                            }) : null]
                        })
                    })
                })
            };
            c.displayName = "SeoDescription"
        },
        95729: (e, t, s) => {
            "use strict";
            s.d(t, {
                q: () => l,
                z: () => r
            });
            var a = s(51192);
            let r = (e, t) => {
                    (0, a.O)({
                        elementId: e,
                        elementVariant: t
                    })
                },
                l = e => {
                    (0, a.O)({
                        elementId: "recommendation_feed_toggle",
                        elementVariant: e
                    })
                }
        },
        95934: e => {
            e.exports = {
                animatedStar: "SurpriseMeFilter_animatedStar__5Uo9J",
                animatedStarBounce: "SurpriseMeFilter_animatedStarBounce__upQsF",
                surpriseMeStarY: "SurpriseMeFilter_surpriseMeStarY__ApsMF",
                animatedStarSpin: "SurpriseMeFilter_animatedStarSpin__isQtS",
                surpriseMeStarRotate: "SurpriseMeFilter_surpriseMeStarRotate__uJk3l"
            }
        },
        99074: (e, t, s) => {
            "use strict";
            s.d(t, {
                s: () => r
            });
            var a = s(7234);
            let r = (e, t, s) => {
                    e.metadata.messageSendingDisabled || t({
                        eventName: "addToWishlist",
                        eventType: "click",
                        eventParams: l(e, s)
                    })
                },
                l = (e, t) => {
                    let {
                        message: {
                            externalId: s,
                            internalId: r,
                            name: l,
                            index: i
                        }
                    } = e;
                    return {
                        itemId: r,
                        itemCollectionId: s,
                        name: l || "",
                        ...((e, t, s) => {
                            let r = {
                                searchQueryId: null,
                                searchPosition: null,
                                sort: null
                            };
                            if (s || window.location.pathname.startsWith(a.rm) || window.location.pathname.startsWith(a.pU)) {
                                let s = window.history.state ? .searchPosition || (e.searchQueryId ? t : null);
                                r.searchQueryId = e.searchQueryId || window.history.state ? .searchQueryId || null, r.searchPosition = s, r.sort = e.sort || window.history.state ? .sort || null
                            }
                            return r
                        })(e.metadata, i, t)
                    }
                }
        }
    }
]);
//#
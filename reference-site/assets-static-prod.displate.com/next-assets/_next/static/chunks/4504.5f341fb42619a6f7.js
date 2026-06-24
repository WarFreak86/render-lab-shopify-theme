(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4504], {
        2749: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => p
            });
            var s = r(14232),
                a = r(67768),
                l = r(40097),
                i = r(87973),
                c = r(24297),
                o = r(81291),
                n = r(16903),
                d = r(47765),
                u = r(35891),
                m = r(80249),
                x = r(87050);
            let p = e => {
                    let {
                        fetchedUserInfo: t
                    } = (0, s.useContext)(u.cy), r = (0, a.jE)(), p = (0, d.aP)(), h = (0, o.k)({
                        queryKey: (0, i.Me)((0, n.j)()),
                        optimisticUpdateFn: (e, t) => {
                            if (e) return { ...e,
                                wishlistItemsCount: Math.max(0, e.wishlistItemsCount - 1),
                                wishlistItemIds: e.wishlistItemIds.filter(e => e !== t.externalId)
                            }
                        },
                        onSuccess: () => {
                            g(r), r.invalidateQueries({
                                queryKey: c.j
                            }), (0, m.yZ)(r, p), e ? .onSuccess ? .()
                        }
                    });
                    return (0, l.n)({
                        mutationKey: ["remove-from-wishlist"],
                        mutationFn: ({
                            sku: e
                        }) => t ? x.$y.removeFromWishlist(e) : Promise.reject("Cannot use useRemoveFromWishlist before fetching user info"),
                        ...h,
                        onMutate: t => (e ? .onMutate ? .(), h.onMutate(t))
                    })
                },
                g = e => {
                    let t = e.getQueriesData({
                        queryKey: c.j
                    });
                    if (0 === t.length) return;
                    let r = 0,
                        s = t[0][1],
                        a = s.pages ? .map(e => {
                            let t = r;
                            return r += e.items.length, { ...e,
                                limit: e.items.length,
                                offset: t
                            }
                        });
                    s.pages = a, e.setQueryData(c.j, s)
                }
        },
        17220: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                InstructionVideoSectionWithForYouDrawer: () => n
            });
            var s = r(37876),
                a = r(14232),
                l = r(85314),
                i = r(88308),
                c = r(1833),
                o = r(73480);
            let n = () => {
                let e = (0, c.o)(e => e.isDrawerOpen),
                    t = (0, c.o)(e => e.setIsDrawerOpen),
                    {
                        shouldShowDrawer: r,
                        shouldImmediatelyShowDrawer: n
                    } = (0, o.Q)();
                return (0, a.useEffect)(() => {
                    n && t(!0)
                }, [n, t]), (0, s.jsx)(l.z, {
                    bottomSlot: e ? (0, s.jsx)(i.a, {}) : null,
                    onViewportEnter: () => {
                        r && t(!0)
                    }
                })
            }
        },
        18120: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => a.$,
                L: () => s.L
            });
            var s = r(68620),
                a = r(99094)
        },
        23403: e => {
            e.exports = {
                artworkPicture: "ArtworkPicture_artworkPicture__ZLPSm",
                artworkFallback: "ArtworkPicture_artworkFallback__GtWSt"
            }
        },
        24297: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => s
            }), r(87050);
            let s = ["wishlist"]
        },
        24806: (e, t, r) => {
            "use strict";
            r.d(t, {
                GR: () => l,
                Xn: () => d,
                ah: () => u,
                pn: () => n,
                yu: () => i
            });
            var s = r(71697),
                a = r(30305);
            let l = {
                    [a.D.xs0]: {
                        x1: s.cc.rect.rect320x230,
                        x2: s.cc.rect.rect640x460
                    },
                    [a.D.md]: {
                        x1: s.cc.rect.rect454x324,
                        x2: s.cc.rect.rect784x560
                    },
                    [a.D.lg]: {
                        x1: s.cc.rect.rect320x230,
                        x2: s.cc.rect.rect640x460
                    },
                    [a.D.xl2]: {
                        x1: s.cc.rect.rect454x324,
                        x2: s.cc.rect.rect784x560
                    },
                    [a.D.xl3]: {
                        x1: s.cc.rect.rect640x460,
                        x2: s.cc.rect.rect1200x857
                    }
                },
                i = {
                    [a.D.xs0]: {
                        x1: s.cc.rect.rect227x162,
                        x2: s.cc.rect.rect454x324
                    },
                    [a.D.xl]: {
                        x1: s.cc.rect.rect320x230,
                        x2: s.cc.rect.rect640x460
                    },
                    [a.D.xl2]: {
                        x1: s.cc.rect.rect454x324,
                        x2: s.cc.rect.rect784x560
                    }
                },
                c = e => {
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
                o = (e, t) => {
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
                n = {
                    [a.D.xs0]: c(227),
                    [a.D.xl]: c(320),
                    [a.D.xl2]: c(454)
                },
                d = {
                    [a.D.xs0]: o(227, 6 / 3.8),
                    [a.D.xl]: o(320, 6 / 3.88),
                    [a.D.xl3]: o(454, 6 / 3.98)
                },
                u = {
                    [a.D.xs0]: o(102, 6 / 3.8),
                    [a.D.lg]: o(227, 6 / 3.8)
                }
        },
        25470: (e, t, r) => {
            "use strict";
            r.d(t, {
                B5: () => c,
                IE: () => u,
                Ix: () => n,
                _4: () => o,
                km: () => d
            });
            var s = r(24806),
                a = r(71697),
                l = r(30305),
                i = r(10769);
            let c = (e, t) => {
                    if (!e) return "";
                    let r = (0, i.al)(e, {
                            resolution: a.cc.rect.rect1422x1016,
                            orientation: t
                        }),
                        s = (0, i.al)(e, {
                            resolution: a.cc.rect.rect2844x2032,
                            orientation: t
                        });
                    return `${r} 1x, ${s} 2x`
                },
                o = { ...s.GR,
                    [l.D.xl3]: {
                        x1: a.cc.rect.rect640x460,
                        x2: a.cc.rect.rect1024x735
                    }
                },
                n = (e, t, r) => {
                    if (!e) return [];
                    let s = Object.keys(r).map(Number).sort((e, t) => t - e);
                    return s.map((a, l) => ({
                        media: ((e, t, r) => {
                            if (0 === e) {
                                let e = Math.min(...r.filter(e => e > 0));
                                return e ? `(max-width: ${e-1}px)` : void 0
                            }
                            let s = r[t - 1];
                            return s ? `(min-width: ${e}px) and (max-width: ${s-1}px)` : `(min-width: ${e}px)`
                        })(a, l, s),
                        href: (0, i.al)(e, {
                            orientation: t,
                            resolution: r[a].x1
                        }),
                        imageSrcSet: u(e, t, a, r)
                    }))
                },
                d = (e, t) => e ? (0, i.al)(e, {
                    resolution: a.cc.rect.rect380x270,
                    orientation: t
                }) : "",
                u = (e, t, r, s) => {
                    if (!e) return "";
                    let a = (0, i.al)(e, {
                            orientation: t,
                            resolution: s[r].x1
                        }),
                        l = (0, i.al)(e, {
                            orientation: t,
                            resolution: s[r].x2
                        });
                    return `${a} 1x, ${l} 2x`
                }
        },
        72318: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => s
            });
            let s = (e, t) => {
                Promise.all([r.e(3080), r.e(9027)]).then(r.bind(r, 59027)).then(({
                    isInitialized: r,
                    logCustomEvent: s
                }) => {
                    r() && s(e, t)
                })
            }
        },
        73480: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => o
            });
            var s = r(87973),
                a = r(47765),
                l = r(69894),
                i = r(7234),
                c = r(1833);
            let o = () => {
                let {
                    data: e
                } = (0, s._v)(), t = (0, a.aP)(), r = (0, c.o)(e => e.pagesTraversedByUser), o = (0, c.o)(e => e.wasClosed), n = !!e && 0 === e.wishlistItemsCount, d = [l.j.readableName, i.ak.readableName].includes(t.readableName);
                return {
                    shouldShowDrawer: n && d && !o,
                    shouldImmediatelyShowDrawer: n && d && r > 4 && o
                }
            }
        },
        80249: (e, t, r) => {
            "use strict";
            r.d(t, {
                Dl: () => u,
                yZ: () => d
            });
            var s = r(14232),
                a = r(74359),
                l = r(98461),
                i = r(83736),
                c = r(35891),
                o = r(4186),
                n = r(87050);
            let d = (e, t) => {
                    t.readableName !== o.J.readableName && e.invalidateQueries({
                        queryKey: ["posters", "recommended", n.ao.FOR_YOU]
                    })
                },
                u = (e, t, r) => {
                    let {
                        fetchedUserInfo: o
                    } = (0, s.useContext)(c.cy);
                    return (0, a.I)({
                        queryKey: ["posters", "recommended", n.ao.FOR_YOU, i.s, e || 1],
                        queryFn: () => n.$y.getForYouPosters((0, l.R)() || "", e, t, r),
                        retry: !1,
                        enabled: o
                    })
                }
        },
        81291: (e, t, r) => {
            "use strict";
            r.d(t, {
                k: () => a
            });
            var s = r(67768);
            let a = ({
                queryKey: e,
                optimisticUpdateFn: t,
                onError: r,
                onSuccess: a
            }) => {
                let l = (0, s.jE)();
                return {
                    onMutate: async r => {
                        await l.cancelQueries({
                            queryKey: e
                        });
                        let s = l.getQueryData(e),
                            a = t(s, r);
                        return a && l.setQueryData(e, a), {
                            previousData: s
                        }
                    },
                    onError: (t, s, a) => {
                        r ? .(t, s, a), a && "object" == typeof a && "previousData" in a && void 0 !== a.previousData && l.setQueryData(e, a.previousData)
                    },
                    onSuccess: (t, r, s) => {
                        a ? .(t, r, s), l.invalidateQueries({
                            queryKey: e
                        })
                    }
                }
            }
        },
        85314: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => x
            });
            var s = r(37876),
                a = r(14232),
                l = r(68873),
                i = r(30983),
                c = r(39313),
                o = r(30305),
                n = r(10769),
                d = r(36256),
                u = r(14619);
            let m = [{
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
                x = ({
                    bottomSlot: e,
                    onViewportEnter: t
                } = {}) => {
                    let r = (0, a.useRef)([]),
                        x = (0, a.useRef)(null),
                        p = (0, a.useRef)(null),
                        {
                            isMobile: g
                        } = (0, o.Q)(),
                        h = async e => {
                            let t = e + 1,
                                s = t >= m.length ? 0 : t;
                            if (await r.current[s] ? .play(), g && p.current && r.current[s]) {
                                let e = p.current,
                                    t = r.current[s],
                                    a = e.getBoundingClientRect(),
                                    l = t.getBoundingClientRect(),
                                    i = e.scrollLeft + (l.left - a.left) - 16;
                                e.scrollTo({
                                    left: i,
                                    behavior: "smooth"
                                })
                            }
                        };
                    return (0, c.P)(x, {
                        once: !0,
                        delay: 0,
                        callback: async () => {
                            await r.current[0] ? .play(), await t ? .()
                        }
                    }), (0, c.P)(x, {
                        once: !0,
                        delay: 1e3,
                        threshold: .5,
                        callback: () => {
                            (0, l.Z)({
                                elementId: "instruction_video_section",
                                elementVariant: "none"
                            })
                        }
                    }), (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: (0, u.cn)("relative", "bg-[linear-gradient(-79.96deg,rgba(244,41,255,1)_5.29%,rgba(239,22,131,1)_20.91%,rgba(18,18,18,1)_36.54%)]", "py-10", "text-text-inverse", "lg:py-12"),
                            "data-testid": "why-displate-section-wrapper",
                            ref: x,
                            children: (0, s.jsx)(d.mc, {
                                asChild: !0,
                                children: (0, s.jsx)(d.xA, {
                                    children: (0, s.jsxs)("div", {
                                        className: (0, u.cn)("col-span-4 md:col-span-8 lg:col-span-12", "flex flex-col gap-6", "lg:flex-row lg:items-center lg:gap-10 lg:py-12"),
                                        children: [(0, s.jsx)("h2", {
                                            className: (0, u.cn)("text-center text-display-sm md:text-display-md font-display uppercase", "lg:w-[200px] lg:shrink-0 lg:px-0 lg:text-left", "xl:w-[345px]"),
                                            children: "Why you need metal art from Displate?"
                                        }), (0, s.jsx)("div", {
                                            className: (0, u.cn)("grid grid-cols-1 gap-4 overflow-x-auto ", "md:grid-cols-[repeat(3,1fr)] ", "lg:min-w-0 lg:flex-1 "),
                                            ref: p,
                                            children: m.map(({
                                                title: e,
                                                videoUrl: t,
                                                poster: a
                                            }, l) => (0, s.jsxs)("div", {
                                                className: (0, u.cn)("relative w-full overflow-hidden rounded-xl", "md:w-[328px]", "lg:w-full"),
                                                "data-testid": "why-displate-video-box",
                                                children: [(0, s.jsx)(i.A, {
                                                    className: "block w-full lg:w-full lg:object-cover",
                                                    controls: !1,
                                                    muted: !0,
                                                    onEnded: () => h(l),
                                                    poster: (0, n.v9)({
                                                        assetPath: a,
                                                        speedsize: {
                                                            width: 768
                                                        }
                                                    }).src,
                                                    preload: "metadata",
                                                    ref: e => {
                                                        e && (r.current[l] = e)
                                                    },
                                                    src: t
                                                }, e), (0, s.jsx)("div", {
                                                    className: "absolute bottom-0 w-full rounded-b-xl bg-neutral-800/70 p-2 text-center backdrop-blur-[2px]",
                                                    children: (0, s.jsx)("p", {
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
        87477: (e, t, r) => {
            "use strict";
            r.d(t, {
                _: () => N
            });
            var s, a = r(37876),
                l = r(14232),
                i = r(13327),
                c = r(46734),
                o = r(89099),
                n = r(27555),
                d = r(34026),
                u = r(90508),
                m = r(67768),
                x = r(40097),
                p = r(97160),
                g = r(72318),
                h = r(87973),
                w = r(24297),
                f = r(81291),
                v = r(16903),
                y = r(47765),
                _ = r(35891),
                D = r(80249),
                b = r(87050),
                j = r(2749),
                I = r(54111),
                S = r(36256),
                k = r(91444),
                E = ((s = E || {}).ADDING = "ADDING", s.REMOVING = "REMOVING", s.IDLE = "IDLE", s);
            let N = ({
                externalId: e,
                sku: t,
                onAddToWishlist: s,
                onRemoveFromWishlist: E,
                className: N,
                showToast: T = !0,
                disableAllNotifications: O = !1,
                size: R = "lg",
                ref: A
            }) => {
                let {
                    enqueueToast: P
                } = (0, S.oS)(), {
                    displayModal: C
                } = (0, d.A)(), {
                    userInfo: M,
                    hasFeatureAccess: F
                } = (0, l.useContext)(_.cy), $ = (0, o.useRouter)(), L = window.location.origin + $.asPath, U = M ? .account.isUserLoggedIn, {
                    mutate: Q
                } = (e => {
                    let {
                        fetchedUserInfo: t,
                        fetchUserInfo: r
                    } = (0, l.useContext)(_.cy), s = (0, m.jE)(), a = (0, y.aP)(), i = (0, f.k)({
                        queryKey: (0, h.Me)((0, v.j)()),
                        optimisticUpdateFn: (e, t) => {
                            if (e) return { ...e,
                                wishlistItemsCount: e.wishlistItemsCount + 1,
                                wishlistItemIds: [...e.wishlistItemIds, t.externalId]
                            }
                        },
                        onSuccess: (t, l, i) => {
                            var c;
                            let o;
                            s.invalidateQueries({
                                queryKey: w.j
                            }), (0, D.yZ)(s, a), c = l.sku, o = p.SR.fromCode(c), (0, g.m)("artwork_added_to_wishlist", {
                                sku: c,
                                internalId: o.variant.code
                            }), r(), e ? .onSuccess ? .(t, l, i)
                        }
                    });
                    return (0, x.n)({
                        mutationKey: ["add-to-wishlist"],
                        mutationFn: ({
                            sku: e
                        }) => t ? b.$y.addToWishlistV3("0", {
                            sku: e
                        }) : Promise.reject("Cannot use useAddToWishlist before fetching user info"),
                        ...i
                    })
                })({
                    onSuccess: async () => {
                        if (s ? .(), !O) {
                            if (F("collectorSpaceFreeAccess") || F("collectorSpacePremium")) {
                                let {
                                    PopupAddToSets: s
                                } = await Promise.all([r.e(5412), r.e(9440), r.e(8992), r.e(3834), r.e(1667)]).then(r.bind(r, 13834));
                                C((0, a.jsx)(s, {
                                    externalId: e,
                                    sku: t,
                                    stage: u.i.EDIT,
                                    triggerSource: u.H.ADD_TO_SET_BUTTON
                                }))
                            } else if (T) {
                                let e = U ? (0, k.x)() : (0, I.NW)({
                                        query: {
                                            redirectUrl: L
                                        }
                                    }),
                                    t = U ? "Show" : "Sign up & keep it";
                                P({
                                    actionAltText: t,
                                    actionSlot: (0, a.jsx)(S.$n, {
                                        asChild: !0,
                                        size: "sm",
                                        variant: "secondaryDarkOutline",
                                        children: (0, a.jsx)(n.A, {
                                            routeInfo: e,
                                            children: t
                                        })
                                    }),
                                    message: "Added to wishlist",
                                    variant: "success"
                                })
                            }
                        }
                    }
                }), {
                    mutate: B
                } = (0, j.j)({
                    onSuccess: E
                }), [G, V] = (0, l.useState)("IDLE"), {
                    data: W,
                    isLoading: q
                } = (0, h._v)({
                    select: e => e.wishlistItemIds
                }), K = W ? .some(t => t === e), H = K && !q, Z = (H || "ADDING" === G) && "REMOVING" !== G, z = async () => {
                    if (K)
                        if (V("REMOVING"), F("collectorSpaceFreeAccess") || F("collectorSpacePremium") && !O) {
                            let {
                                PopupAddToSets: s
                            } = await Promise.all([r.e(5412), r.e(9440), r.e(8992), r.e(3834), r.e(1667)]).then(r.bind(r, 13834));
                            C((0, a.jsx)(s, {
                                externalId: e,
                                sku: t,
                                stage: u.i.EDIT,
                                triggerSource: u.H.REMOVE_FROM_WISHLIST_BUTTON
                            }))
                        } else B({
                            sku: t,
                            externalId: e
                        });
                    else V("ADDING"), Q({
                        sku: t,
                        externalId: e
                    });
                    setTimeout(() => {
                        V("IDLE")
                    }, 2e3)
                };
                (0, l.useImperativeHandle)(A, () => ({
                    trigger: z
                }));
                let Y = async e => {
                    e.preventDefault(), e.stopPropagation(), await z()
                };
                return (0, a.jsx)(S.ff, {
                    "aria-label": H ? "Remove from wishlist" : "Add to wishlist",
                    className: N,
                    "data-in-wishlist": Z ? "true" : void 0,
                    "data-testid": "wishlist-icon-container",
                    icon: Z ? (0, a.jsx)(c.A, {
                        className: "text-blue-300"
                    }) : (0, a.jsx)(i.A, {}),
                    onClick: Y,
                    size: R,
                    variant: "glass"
                })
            };
            N.displayName = "WishlistButton"
        },
        88157: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => d
            });
            var s = r(37876),
                a = r(14232),
                l = r(69241),
                i = r(25470),
                c = r(10769),
                o = r(23403),
                n = r.n(o);
            let d = ({
                imageCoreUrl: e,
                artworkOrientation: t,
                artworkSets: r,
                className: o,
                onLoaded: d,
                loading: u = "eager",
                fetchPriority: m = "auto",
                pinNoPin: x = !0,
                alt: p = "artwork"
            }) => {
                let [g, h] = (0, a.useState)(!1), w = (0, i.km)(e, t), f = Object.keys(r).map(e => Number(e));
                return (0, s.jsx)("picture", {
                    className: (0, l.A)(n().artworkPicture, o),
                    children: g ? (0, s.jsx)("img", {
                        alt: "no-image",
                        className: (0, l.A)(n().artworkPicture, n().artworkFallback, o),
                        loading: u,
                        src: (0, c.qH)("/images/no-image.svg")
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [f.reverse().map(a => (0, s.jsx)("source", {
                            "data-testid": "artwork-source",
                            media: 0 !== a ? `(min-width: ${a}px)` : void 0,
                            srcSet: `${(0,i.IE)(e,t,a,r)}`,
                            type: "image/jpeg"
                        }, `${a}-jpeg`)), (0, s.jsx)("img", {
                            alt: p,
                            className: (0, l.A)(n().artworkPicture, o),
                            "data-pin-nopin": x,
                            "data-testid": "artwork-img",
                            draggable: "false",
                            fetchPriority: m,
                            loading: u,
                            onError: () => {
                                h(!0)
                            },
                            onLoad: d,
                            src: w
                        })]
                    })
                })
            }
        },
        90508: (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => i,
                i: () => l
            });
            var s, a, l = ((s = {}).EDIT = "edit", s.CREATE = "create", s.REMOVE = "remove", s),
                i = ((a = {}).CREATE_SET_BUTTON = "create_set_button", a.ADD_TO_SET_BUTTON = "add_to_set_button", a.REMOVE_FROM_WISHLIST_BUTTON = "remove_from_wishlist_button", a.ADD_TO_SET_COLLECTED_ARTWORK_BUTTON = "add_to_set_collected_artwork_button", a)
        },
        94392: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var s = r(14232);
            let a = s.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, a) {
                return s.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: a,
                    "aria-labelledby": t
                }, r), e ? s.createElement("title", {
                    id: t
                }, e) : null, s.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
                    clipRule: "evenodd"
                }))
            })
        },
        99094: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => c
            });
            var s = r(14232),
                a = r(39313),
                l = r(27745),
                i = r(68017);
            let c = ({
                ref: e,
                message: t,
                delay: r,
                threshold: c,
                initialOnHold: o = !1
            }) => {
                let n = (0, l.a)(),
                    [d, u] = (0, s.useState)(o);
                return (0, a.P)(e, {
                    threshold: c || .5,
                    delay: r ? ? 1e3,
                    callback: () => {
                        n && (0, i.X)(t) && n.postMessage(t)
                    },
                    once: !0,
                    onHold: d
                }), {
                    onHold: d,
                    setOnHold: u
                }
            }
        }
    }
]);
//#
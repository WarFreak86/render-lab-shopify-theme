"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9633], {
        27591: (e, t, r) => {
            r.d(t, {
                W: () => h
            });
            var i = r(37876),
                s = r(96932),
                a = r(27555),
                n = r(10769),
                l = r(36256),
                o = r(14619),
                d = r(87050);
            let m = (0, n.qH)("/images/no-image.svg"),
                h = ({
                    imageCoreUrl: e,
                    artworkOrientation: t,
                    sizes: r,
                    routeInfo: n,
                    onClick: h,
                    onImageLoad: u,
                    ref: c,
                    className: g,
                    ...p
                }) => {
                    let f = (0, s.M)(e, {
                        sizes: r
                    });
                    return (0, i.jsx)(a.A, {
                        className: (0, o.cn)("block", g),
                        onClick: h,
                        ref: c,
                        routeInfo: n,
                        children: (0, i.jsx)(l.W8, { ...p,
                            fallbackSrc: m,
                            onImageLoad: u,
                            orientation: t === d.JH.HORIZONTAL ? "horizontal" : "vertical",
                            sizes: f.sizes,
                            src: f.src,
                            srcSet: f.srcSet
                        })
                    })
                }
        },
        29633: (e, t, r) => {
            r.d(t, {
                T: () => p,
                m: () => f
            });
            var i = r(37876),
                s = r(14232),
                a = r(95729),
                n = r(30305),
                l = r(16909),
                o = r(36256),
                d = r(14619),
                m = r(55528);
            let h = e => ({
                    mobile: e ? .position ? .mobile ? ? 0,
                    desktop: e ? .position ? .desktop ? ? 0
                }),
                u = (e, t, r) => {
                    if (!e ? .length || t !== p) return t;
                    let i = [...g(e, r)].filter(e => e < p).length;
                    return p - i
                },
                c = (e, t, r, i) => t ? .length ? t.filter(t => {
                    let s = h(t),
                        a = r ? s.mobile : s.desktop;
                    return (void 0 === i || !(a >= i)) && e === (r ? s.mobile : s.desktop)
                }).map(e => e.item) : [],
                g = (e, t, r) => {
                    let i = new Set;
                    return e ? .length && e.forEach(e => {
                        let s = h(e),
                            a = t ? s.mobile : s.desktop;
                        void 0 !== r && a >= r || i.add(a)
                    }), i
                },
                p = 18,
                f = ({
                    className: e,
                    items: t,
                    feedName: r,
                    metadata: h,
                    infiniteScroll: f,
                    artworksToDisplay: w = p,
                    additionalComponent: x,
                    redirectButton: v,
                    additionalGridItem: k,
                    handleWishlistCallback: $,
                    customGridItem: b,
                    positionedGridItems: S,
                    showWishlistToast: j
                }) => {
                    let {
                        isMobile: I
                    } = (0, n.Q)(), z = m.w, L = u(S, w, !0), C = u(S, w, !1), y = Math.max(L, C), [M, R] = (0, s.useState)({
                        page: 1,
                        limit: f ? 5e3 : y
                    }), P = e => e ? e - !f : 0, _ = (e, t) => {
                        let s = {
                                additionalComponent: x,
                                index: t,
                                item: e,
                                metadata: h,
                                handleWishlistCallback: $,
                                showWishlistToast: j
                            },
                            a = `${r}-${e.externalId}-${t}`;
                        return b ? (0, i.jsx)(b, { ...s
                        }, a) : (0, i.jsx)(z, { ...s
                        }, a)
                    };
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("div", {
                            className: (0, d.cn)("grid w-full auto-rows-[minmax(100px,auto)] grid-cols-2 grid-flow-dense gap-4 md:grid-cols-4 md:gap-6 lg:grid-cols-5 xl:grid-cols-6", e),
                            "data-testid": "masonry-feed-grid",
                            children: [(() => {
                                let e = P(M.limit),
                                    a = Math.min(t.length, e + 1),
                                    n = e + 1,
                                    l = I ? L : C,
                                    o = !f && w === p && 1 === M.page && M.limit === y,
                                    d = o && S ? .length ? [...g(S, I)].filter(e => e < p).length : 0,
                                    m = o ? Math.min(t.length, n + d - Math.max(0, M.limit - l)) : Math.min(t.length, n),
                                    h = Math.min(a + 1, m),
                                    u = g(S, I, h),
                                    x = u.size > 0 ? Math.max(...u) : 0,
                                    v = Math.max(e + u.size, x),
                                    k = [],
                                    $ = 0,
                                    b = 0;
                                for (; k.length < m && b <= v;) {
                                    let e = c(b, S, I, h);
                                    e.length > 0 ? e.forEach((e, t) => {
                                        k.length < m && k.push((0, i.jsx)(s.Fragment, {
                                            children: e
                                        }, `${r}-positioned-${b}-${t}`))
                                    }) : t[$] && k.length < m && (k.push((0, i.jsx)(s.Fragment, {
                                        children: _(t[$], $)
                                    }, `${r}-item-${$}`)), $ += 1), b += 1
                                }
                                return k
                            })(), k]
                        }), f ? null : (0, i.jsx)(i.Fragment, {
                            children: P(M.limit) >= P(t ? .length) ? v ? v() : null : (0, i.jsx)(o.$n, {
                                className: "mt-6 md:mt-10",
                                "data-testid": "masonry-feed-grid-see-more-btn",
                                onClick: () => {
                                    R(e => {
                                        let t = e.page + 1;
                                        return {
                                            page: t,
                                            limit: p * t
                                        }
                                    }), (0, a.z)("masonry_see_more_posters_button", (0, l.Iy)(r))
                                },
                                variant: "secondaryDarkOutline",
                                children: "See more posters"
                            })
                        })]
                    })
                }
        },
        55528: (e, t, r) => {
            r.d(t, {
                w: () => v
            });
            var i = r(37876),
                s = r(45867),
                a = r(27591),
                n = r(87477),
                l = r(14619),
                o = r(87050),
                d = r(14232),
                m = r(99074),
                h = r(38757),
                u = r(95685),
                c = r(57075),
                g = r(98315),
                p = r(2661),
                f = r(18120),
                w = r(54810);
            let x = [{
                    media: "(max-width: 1279px)",
                    width: 227
                }, {
                    media: "(max-width: 1535px)",
                    width: 320
                }, {
                    width: 454
                }],
                v = e => {
                    let {
                        additionalComponent: t,
                        index: r,
                        item: v,
                        showWishlistToast: k
                    } = e, $ = (({
                        index: e,
                        item: t,
                        metadata: r,
                        handleWishlistCallback: i
                    }) => {
                        let s = (0, d.useRef)(null),
                            [a, n] = (0, d.useState)(!1),
                            [l, o] = (0, d.useState)(!1),
                            x = (0, g.SS)({
                                index: e,
                                item: t,
                                metadata: r
                            }),
                            {
                                setOnHold: v
                            } = (0, f.$)({
                                ref: s,
                                message: x,
                                initialOnHold: !0
                            }),
                            {
                                pushEvent: k
                            } = (0, p.L)(),
                            $ = (0, w.Vo)({
                                externalId: t.externalId.toString(),
                                query: r.itemQueryParams
                            });
                        return (0, d.useEffect)(() => {
                            l || n(!0)
                        }, [l]), {
                            eventMessage: x,
                            handleAddToWishlist: () => {
                                (0, u.v)(x, "wishlist"), (0, c.p)(x), (0, m.s)(x, k), i ? .()
                            },
                            handleProductClick: () => {
                                (0, u.v)(x, "artwork"), (0, h.V)(x, k), (0, g.kw)({
                                    index: e,
                                    metadata: r,
                                    externalId: t.externalId
                                })
                            },
                            handleRemoveFromWishlist: () => {
                                (0, u.v)(x, "wishlist"), (0, c.P)(x), i ? .()
                            },
                            imageRef: s,
                            isLoading: a,
                            onLoaded: () => {
                                v(!1), n(!1), o(!0)
                            },
                            routeInfo: $
                        }
                    })(e), b = v.labels ? .length > 0 ? (0, i.jsx)(s.T, {
                        labels: v.labels
                    }) : null, S = (0, i.jsx)(n._, {
                        className: "transition-opacity md:opacity-0 md:group-hover:opacity-100",
                        externalId: v.externalId,
                        onAddToWishlist: $.handleAddToWishlist,
                        onRemoveFromWishlist: $.handleRemoveFromWishlist,
                        showToast: k,
                        size: "sm",
                        sku: v.sku
                    });
                    return (0, i.jsxs)("div", {
                        className: (0, l.cn)("group relative z-auto cursor-pointer [-webkit-tap-highlight-color:transparent] contain-[layout_style]", v.orientation === o.JH.HORIZONTAL ? "row-end-[span_1]" : "row-end-[span_2]"),
                        "data-testid": "masonry-grid-item",
                        children: [(0, i.jsx)(a.W, {
                            alt: v.title,
                            artworkOrientation: v.orientation,
                            imageCoreUrl: v.imageCoreUrl,
                            onClick: $.handleProductClick,
                            onImageLoad: $.onLoaded,
                            ref: $.imageRef,
                            routeInfo: $.routeInfo,
                            sizes: x,
                            topLeft: b,
                            topRight: S
                        }), t ? t({
                            eventMessage: $.eventMessage,
                            externalId: v.externalId,
                            sku: v.sku,
                            index: r
                        }) : null]
                    })
                }
        },
        96932: (e, t, r) => {
            r.d(t, {
                M: () => a
            });
            var i = r(84810),
                s = r(10769);
            let a = (e, t) => {
                if (!e) return {
                    src: "",
                    srcSet: void 0,
                    sizes: void 0
                };
                let {
                    sizes: r
                } = t, a = ((e, t) => {
                    let r = t.useCdn ? ? !0;
                    if (i.ConfigPublic.CdnDomain && r) {
                        let t = e.replace(".jpg", "");
                        return new URL(`https://${i.ConfigPublic.CdnDomain}/artwork/${t}.jpg`)
                    }
                    return new URL(i.ConfigPublic.IsLocalEnvironment ? `https://${i.ConfigPublic.ArtworkDomain}/784x560/displate/${e}.jpg` : `https://${i.ConfigPublic.ArtworkDomain}/artwork/${e}.jpg`)
                })(e, t);
                if ("number" == typeof r) {
                    let e = Math.round(1.5 * r),
                        t = new URL(a);
                    return t.searchParams.set("speedsize", (0, s.$L)({
                        width: e
                    })), {
                        src: t.toString(),
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let n = (e => {
                    let t = [],
                        r = 320;
                    for (let {
                            media: i,
                            width: a
                        } of e) {
                        let e = i ? .match(/max-width:\s*(\d+(?:\.\d+)?)px/),
                            n = r,
                            l = e ? parseFloat(e[1]) : 1920;
                        if (e && (r = parseFloat(e[1]) + 1), "number" == typeof a) {
                            let e = Math.round(1.5 * a);
                            t.push({
                                width: e,
                                param: (0, s.$L)({
                                    width: e
                                })
                            })
                        } else {
                            let e = parseFloat(a);
                            for (let r of [n, l]) {
                                let i = Math.round(r * e * 1.5 / 100);
                                t.push({
                                    width: i,
                                    param: (0, s.$L)({
                                        width: i
                                    })
                                })
                            }
                        }
                    }
                    let i = new Set;
                    return t.filter(e => !i.has(e.width) && (i.add(e.width), !0)).sort((e, t) => e.width - t.width)
                })(r);
                if (0 === n.length) return {
                    src: a.toString(),
                    srcSet: void 0,
                    sizes: void 0
                };
                if (1 === n.length) {
                    let e = new URL(a);
                    return e.searchParams.set("speedsize", n[0].param), {
                        src: e.toString(),
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let l = n.map(({
                        width: e,
                        param: t
                    }) => {
                        let r = new URL(a);
                        return r.searchParams.set("speedsize", t), `${r.toString()} ${e}w`
                    }).join(", "),
                    o = n[n.length - 1],
                    d = new URL(a);
                return d.searchParams.set("speedsize", o.param), {
                    src: d.toString(),
                    srcSet: l,
                    sizes: r.map(({
                        media: e,
                        width: t
                    }) => {
                        let r = "number" == typeof t ? `${t}px` : t;
                        return e ? `${e} ${r}` : r
                    }).join(", ")
                }
            }
        }
    }
]);
//#
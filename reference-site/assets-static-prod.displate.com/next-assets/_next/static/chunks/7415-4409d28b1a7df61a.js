(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7415], {
        12013: (e, r, t) => {
            "use strict";
            t.d(r, {
                M: () => l,
                h: () => i
            });
            var a = t(22884);
            let s = ({
                    categorySlug: e,
                    collectionId: r,
                    artistName: t,
                    collectionTitle: a,
                    index: s
                }) => ({
                    ecommerce: {
                        promotion_id: `collection|${e}|${r}`,
                        promotion_name: `${t}|${a}`,
                        creative_slot: `${e}|${s+1}`,
                        promotion_type: "collection"
                    }
                }),
                l = e => {
                    e.forEach(e => {
                        (0, a.u)({
                            event: "view_promotion",
                            ...s(e)
                        })
                    })
                },
                i = e => {
                    (0, a.u)({
                        event: "select_promotion",
                        ...s(e)
                    })
                }
        },
        16322: (e, r, t) => {
            "use strict";
            t.d(r, {
                b: () => l
            });
            var a = t(84583),
                s = t(17495);
            let l = e => e ? e.map(e => ({
                internalId: e.internalId,
                externalId: e.externalId,
                imageCoreUrl: e.imageCoreUrl,
                orientation: e.orientation,
                title: e.title,
                labels: (0, a.pr)(e.labels),
                sku: e.sku || (0, s.s)(e.internalId)
            })) : []
        },
        17495: (e, r, t) => {
            "use strict";
            t.d(r, {
                N: () => i,
                s: () => l
            });
            var a = t(97160),
                s = t(87050);
            let l = (e, r = "P001") => {
                    let t = e.toString().padStart(8, "0");
                    return `${r}${t}`
                },
                i = e => {
                    let r = a.$I.of().parse(e, "US");
                    return r ? {
                        internalId: r.artworkId,
                        size: d(r.size),
                        finish: n(r.finish),
                        frame: o(r.frame)
                    } : null
                },
                n = e => {
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
                d = e => {
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
                o = e => {
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
        18291: e => {
            e.exports = {
                wrapper: "NoResultsBar_wrapper__7x2A9",
                filtersLead: "NoResultsBar_filtersLead__se2IY",
                filtersHint: "NoResultsBar_filtersHint__SrpbN",
                title: "NoResultsBar_title__Bg0Hn",
                content: "NoResultsBar_content__UNwPk"
            }
        },
        23412: (e, r, t) => {
            "use strict";
            t.d(r, {
                Bm: () => j,
                nz: () => g,
                xG: () => v,
                P$: () => _,
                v2: () => f,
                T: () => x
            });
            var a = t(37876),
                s = t(95729),
                l = t(27555),
                i = t(16909),
                n = t(36256),
                d = t(1025),
                o = t(48803),
                c = t(16322),
                u = t(29633),
                m = t(55528),
                h = t(30236),
                w = t(60013);
            let p = {
                    pathnamePatterns: ["/artist", "/custom-displate", "/following", "/licensed"]
                },
                x = (e, r = p) => !!(r.pathnamePatterns && r.pathnamePatterns.some(r => e.startsWith(r))) || !1,
                _ = e => (r, t, a) => {
                    let s = e ? .[r] ? ? [];
                    return {
                        name: r,
                        shouldBeShown: s.length >= 3,
                        masonryListingFunction: t,
                        items: (0, c.b)(s),
                        ...a
                    }
                },
                f = (e, r) => ({ ...r,
                    itemListName: e.heading ? ? (0, i.ZH)(e.name),
                    listingFunction: e.masonryListingFunction
                }),
                v = (e, r, t, s, l, i) => {
                    let n, d = !!t && x(t, s),
                        c = i ? ? m.w,
                        p = [...d ? [] : [{
                            item: (0, a.jsx)(o.k, {}),
                            position: h.X
                        }], {
                            item: (0, a.jsx)(w.G, {}),
                            position: h.J
                        }];
                    return n = e.overrideGridComponent ? (0, a.jsx)(e.overrideGridComponent, {}) : (0, a.jsx)(u.m, {
                        artworksToDisplay: l || u.T,
                        customGridItem: c,
                        feedName: e.name,
                        infiniteScroll: e.infiniteScroll,
                        items: e.items,
                        metadata: f(e, r),
                        positionedGridItems: p,
                        redirectButton: e.redirectButton
                    }, e.name), {
                        heading: e.heading ? ? e.name,
                        content: n
                    }
                },
                g = e => e.every(e => !1 === e.shouldBeShown),
                j = ({
                    feedName: e
                }) => (0, a.jsx)(n.$n, {
                    asChild: !0,
                    className: "mt-6 md:mt-10",
                    size: "lg",
                    variant: "primary",
                    children: (0, a.jsx)(l.A, {
                        onClick: () => (0, s.z)("masonry_see_all_posters_button", (0, i.Iy)(e ? ? "")),
                        routeInfo: (0, d.Z)({
                            query: {
                                page: "2"
                            }
                        }),
                        children: "See all posters"
                    })
                })
        },
        30236: (e, r, t) => {
            "use strict";
            t.d(r, {
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
        30333: (e, r, t) => {
            "use strict";
            t.d(r, {
                L: () => o
            });
            var a = t(37876),
                s = t(27555),
                l = t(16909),
                i = t(36256),
                n = t(18291),
                d = t.n(n);
            let o = e => {
                if ("filters" === e.variant) {
                    let {
                        routeInfo: r
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: d().wrapper,
                        children: [(0, a.jsx)("span", {
                            className: d().filtersLead,
                            children: "Oops, looks like we don’t have what you’re searching for."
                        }), (0, a.jsxs)("span", {
                            className: d().filtersHint,
                            children: ["Try changing your query or", " ", (0, a.jsx)(i.N_, {
                                asChild: !0,
                                children: (0, a.jsx)(s.A, {
                                    routeInfo: r,
                                    children: "clear filters."
                                })
                            })]
                        })]
                    })
                }
                let {
                    nick: r,
                    phrase: t,
                    routeInfo: n,
                    headingDisplayName: o
                } = e, c = o && o.trim().length > 0 ? o.trim() : (0, l.ZH)(r);
                return (0, a.jsxs)("div", {
                    className: d().wrapper,
                    children: [(0, a.jsxs)("h2", {
                        className: d().title,
                        children: [c, " hasn’t tackled it yet"]
                    }), (0, a.jsxs)("span", {
                        className: d().content,
                        children: ["We couldn’t find any matches ", (0, a.jsx)("br", {}), "for '", t, "' in this gallery."]
                    }), (0, a.jsxs)("span", {
                        className: d().content,
                        children: ["Try something new or simply", " ", (0, a.jsx)(i.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(s.A, {
                                routeInfo: n,
                                children: "clear the search."
                            })
                        })]
                    })]
                })
            }
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
        48803: (e, r, t) => {
            "use strict";
            t.d(r, {
                k: () => c
            });
            var a = t(37876),
                s = t(27555),
                l = t(27735),
                i = t(38847),
                n = t(10769),
                d = t(36256),
                o = t(39806);
            let c = () => {
                let e = (0, i.u)(l.DY),
                    r = (0, n.v9)({
                        assetPath: e ? "/images/custom-displate/campaign/masonry_tile.jpg" : "/images/custom-displate/tile-img.png",
                        widths: [100, 275]
                    });
                return (0, a.jsxs)(s.A, {
                    className: "relative flex w-full min-w-0 flex-col items-center justify-between pb-4 text-center aspect-5/7 row-end-[span_2] hover:no-underline!",
                    routeInfo: (0, o.iM)(),
                    children: [(0, a.jsx)("div", {
                        className: "w-full",
                        "data-testid": "custom-displate-tile",
                        children: (0, a.jsx)("img", {
                            alt: "Custom Displate",
                            className: "mx-auto h-auto w-[60%] md:w-[80%]",
                            loading: "lazy",
                            src: r.src,
                            srcSet: r.srcSet
                        })
                    }), (0, a.jsx)("h3", {
                        className: "text-heading-subtitle-eyebrow text-text-primary lg:text-heading-subtitle",
                        children: e ? "The gift they'll never forget" : "Custom Displates are here!"
                    }), (0, a.jsx)("p", {
                        className: "mb-1 text-body-sm text-text-primary lg:text-body-md",
                        children: e ? "Turn favorite memories into Custom Displates" : "Upload your own pics and let your moments shine"
                    }), (0, a.jsx)("div", {
                        className: "mt-1 w-[90%]",
                        children: (0, a.jsx)(d.$n, {
                            fullWidth: !0,
                            size: "sm",
                            variant: "primary",
                            children: "Start Creating"
                        })
                    })]
                })
            }
        },
        60013: (e, r, t) => {
            "use strict";
            t.d(r, {
                G: () => d
            });
            var a = t(37876),
                s = t(27555),
                l = t(10769),
                i = t(36256),
                n = t(7234);
            let d = () => {
                let e = (0, l.v9)({
                    assetPath: "/images/artist/verified-artist.png",
                    widths: [100, 275]
                });
                return (0, a.jsxs)(s.A, {
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
        61117: (e, r, t) => {
            "use strict";
            t.d(r, {
                J: () => g
            });
            var a = t(37876),
                s = t(14232),
                l = t(75808),
                i = t(89099);
            let n = "artworks",
                d = "collections",
                o = "textra",
                c = [{
                    label: "Artworks",
                    value: n
                }, {
                    label: "Collections",
                    value: d
                }],
                u = "Bestselling",
                m = {
                    artist: "artist",
                    licensed: "brand"
                };
            var h = t(77153),
                w = t(80208),
                p = t(47765),
                x = t(36256),
                _ = t(14619);
            let f = [n, d, o],
                v = "flex flex-row items-center gap-4 overflow-x-auto px-4 -mx-4 sm:overflow-visible sm:mx-0 sm:px-0 md:overflow-x-visible",
                g = ({
                    artworkCount: e,
                    buildRoute: r,
                    clearRouteQuery: t,
                    displayName: d,
                    filtersRowClassName: g = v,
                    showTextra: j,
                    sortOptions: b,
                    textraViewValue: N = o
                }) => {
                    let y, D = (0, i.useRouter)(),
                        {
                            analyticsGaName: C
                        } = (0, p.aP)(),
                        k = m[C] ? ? "artist",
                        [I, T] = (0, s.useState)(!1),
                        {
                            sort: A,
                            view: B,
                            search: H
                        } = D.query,
                        S = ((e = [], r) => {
                            let t = e.find(({
                                value: e
                            }) => e === r);
                            return {
                                btnLabel: t ? .label || u,
                                sort: t || {
                                    label: u,
                                    value: "bestselling"
                                }
                            }
                        })(b, A),
                        E = (({
                            currentView: e,
                            defaultView: r,
                            artworksViewValue: t,
                            validViews: a
                        }) => {
                            let s = e && a.includes(e) ? e : r;
                            return {
                                pillsValue: s === o ? t : s,
                                value: s,
                                isTextraViewActive: s === o
                            }
                        })({
                            currentView: B,
                            defaultView: n,
                            artworksViewValue: n,
                            validViews: f
                        }),
                        L = (y = E.value, (e ? ? 0) > 50 && y === n),
                        O = (e, t, a) => {
                            (({
                                router: e,
                                queryKey: r,
                                value: t,
                                clearOtherParams: a,
                                buildRoute: s
                            }) => {
                                let l = (e => {
                                    let {
                                        page: r,
                                        slug: t,
                                        ab: a,
                                        uvert: s,
                                        artistNick: l,
                                        ...i
                                    } = e;
                                    return i
                                })(e.query);
                                e.push(s({ ...a ? {} : l,
                                    [r]: t
                                }), void 0, {
                                    scroll: !1
                                })
                            })({
                                router: D,
                                queryKey: e,
                                value: t,
                                clearOtherParams: a,
                                buildRoute: r
                            })
                        };
                    return (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4 md:flex-row",
                        children: [(0, a.jsxs)("div", {
                            className: (0, _.cn)(g),
                            children: [(0, a.jsxs)(x._s, {
                                onOpenChange: T,
                                open: I,
                                children: [(0, a.jsx)(x.Uz, {
                                    asChild: !0,
                                    className: "md:hidden",
                                    children: (0, a.jsx)(x.ff, {
                                        "aria-label": "Sort by",
                                        "data-testid": `${k}-sort-btn-mobile`,
                                        icon: (0, a.jsx)(l.A, {}),
                                        size: "sm",
                                        variant: "darkOutline"
                                    })
                                }), (0, a.jsx)(x.Uz, {
                                    asChild: !0,
                                    className: "hidden md:inline-flex",
                                    children: (0, a.jsx)(x.$n, {
                                        "data-testid": `${k}-sort-btn-desktop`,
                                        rightIcon: (0, a.jsx)(l.A, {}),
                                        size: "sm",
                                        variant: "secondaryDarkOutline",
                                        children: (0, a.jsx)("span", {
                                            className: "sr-only md:not-sr-only md:inline",
                                            children: S.btnLabel
                                        })
                                    })
                                }), (0, a.jsxs)(x.zj, {
                                    "aria-describedby": void 0,
                                    "data-testid": `${k}-sort-drawer`,
                                    children: [(0, a.jsx)(x.BE, {
                                        children: (0, a.jsx)(x.gk, {
                                            children: "Sort by:"
                                        })
                                    }), (0, a.jsx)(x.ys, {
                                        children: b.length ? (0, a.jsx)(x.z6, {
                                            name: "sort",
                                            onValueChange: e => {
                                                O("sort", e), T(!1)
                                            },
                                            value: S.sort.value,
                                            children: b.map(e => (0, a.jsx)(x.CU, {
                                                label: (0, a.jsx)("span", {
                                                    className: "capitalize",
                                                    children: e.label
                                                }),
                                                value: e.value
                                            }, e.value))
                                        }) : null
                                    }), (0, a.jsx)(x.tb, {
                                        sticky: !0,
                                        children: (0, a.jsx)(x.cp, {
                                            asChild: !0,
                                            children: (0, a.jsx)(x.$n, {
                                                fullWidth: !0,
                                                variant: "primary",
                                                children: "View results"
                                            })
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)(w.R, {
                                activeOption: E.pillsValue,
                                name: `${k}-view-picker`,
                                onChange: e => {
                                    0 !== e.length && O("view", e, !0)
                                },
                                options: c
                            }), j ? (0, a.jsx)(x.ab, {
                                "data-testid": "filter-textra",
                                label: "Textra",
                                onClick: () => E.isTextraViewActive ? D.push({
                                    pathname: D.pathname,
                                    query: t
                                }, void 0, {
                                    scroll: !1
                                }) : O("view", N, !0),
                                selected: E.isTextraViewActive
                            }) : null]
                        }), (0, a.jsx)(h.D, {
                            ariaLabel: `Search artworks from ${d}`,
                            defaultValue: H ? ? "",
                            name: `${k}-page-search`,
                            onChange: e => {
                                O("search", e.trim())
                            },
                            placeholder: `Search artworks from ${d}`,
                            searchMethod: k,
                            showSearchInput: L
                        })]
                    })
                }
        },
        64968: (e, r, t) => {
            "use strict";
            t.d(r, {
                e: () => o,
                l: () => d
            });
            var a = t(37876),
                s = t(14232),
                l = t(69241),
                i = t(37253),
                n = t.n(i);
            let d = (0, s.createContext)({}),
                o = ({
                    children: e
                }) => {
                    let [r, t] = (0, s.useState)(!1), [i, o] = (0, s.useState)(!1), [c, u] = (0, s.useState)(0), m = (0, s.useRef)(null), h = (0, s.useRef)(null), w = (0, s.useRef)(null);
                    return (0, s.useEffect)(() => {
                        u(window.innerWidth - document.documentElement.clientWidth)
                    }, []), (0, s.useEffect)(() => {
                        let e = document.getElementById("main-container");
                        document.documentElement.style.setProperty("--scrollBarWidth", `${c}px`), r ? (e && e.classList.add(n().scrollBarWidth), document.body.classList.add(n().editHtmlDrawer), w.current ? .classList.add(n().editHeaderDrawer, n().scrollBarWidth)) : (e && e.classList.remove(n().scrollBarWidth), document.body.classList.remove(n().editHtmlDrawer), w.current ? .classList.remove(n().editHeaderDrawer, n().scrollBarWidth))
                    }, [r, c]), (0, a.jsxs)(d.Provider, {
                        value: {
                            setHeaderRef: e => {
                                w.current = e.current
                            },
                            setIsDrawerFullHeight: o,
                            handleBackdropClose: () => t(!1),
                            handleBackdropOpen: () => t(!0),
                            drawerContainerRef: m,
                            drawerBackdropRef: h
                        },
                        children: [e, (0, a.jsx)("div", {
                            className: (0, l.A)(n().drawerContainer, n().clientDrawer, {
                                [n().drawerContainerOpened]: r,
                                [n().drawerContainerFullHeight]: i
                            }),
                            "data-testid": "drawer-container",
                            ref: m
                        }), (0, a.jsx)("div", {
                            className: (0, l.A)(n().drawerBackdrop, {
                                [n().drawerBackdropOpened]: r
                            }),
                            ref: h
                        })]
                    })
                }
        },
        77153: (e, r, t) => {
            "use strict";
            t.d(r, {
                D: () => c
            });
            var a = t(37876),
                s = t(14232),
                l = t(95494),
                i = t(79868),
                n = t(22884),
                d = t(36256),
                o = t(14619);
            let c = ({
                name: e,
                onChange: r,
                placeholder: t,
                ariaLabel: c = "Search",
                defaultValue: u = "",
                className: m,
                showSearchInput: h = !1,
                searchMethod: w
            }) => {
                let p = (0, s.useRef)(null),
                    x = (0, s.useRef)(null),
                    [_, f] = (0, s.useState)(u),
                    v = (0, s.useRef)(r),
                    g = (0, s.useRef)(_);
                v.current = r, g.current = _, (0, s.useEffect)(() => {
                    g.current !== u && f(u)
                }, [u]);
                let j = e => {
                        e && (0, n.u)({
                            event: "search_perform_feed",
                            search_term: e.toLowerCase(),
                            search_method: w
                        }), v.current ? .(e), x.current ? .scrollIntoView ? .({
                            behavior: "smooth",
                            block: "start"
                        })
                    },
                    b = _.trim().length > 0 || (u ? ? "").trim().length > 0,
                    N = _.length > 0;
                return h || b ? (0, a.jsx)("div", {
                    className: (0, o.cn)("mr-0 max-w-full overflow-hidden transition-all duration-400 ease-in-out", "scroll-mt-[calc(var(--headerNavBarHeight)+(var(--spacing-2)))]", "md:max-w-[300px]", h ? "w-full" : "w-0", m),
                    "data-testid": e,
                    ref: x,
                    children: (0, a.jsx)(d.A_, {
                        "aria-label": c,
                        className: "min-w-0",
                        hideErrorMessage: !0,
                        id: e,
                        inputClassName: "placeholder-shown:truncate",
                        name: e,
                        onChange: e => {
                            let r = e.target.value;
                            f("" === r.trim() ? "" : r)
                        },
                        onKeyDown: e => {
                            if ("Enter" !== e.key) return;
                            e.preventDefault();
                            let r = e.currentTarget.value.trim();
                            f(r), j(r)
                        },
                        placeholder: t,
                        ref: p,
                        trailingSlot: N ? (0, a.jsx)(d.$n, {
                            "aria-label": "Clear search",
                            "data-testid": "search-input-clear",
                            onClick: e => {
                                e.preventDefault(), f(""), j(""), p.current ? .focus()
                            },
                            rightIcon: (0, a.jsx)(l.A, {
                                "aria-hidden": !0,
                                className: "text-text-secondary"
                            }),
                            size: "sm",
                            variant: "text"
                        }) : (0, a.jsx)(i.A, {
                            "aria-hidden": !0,
                            className: "size-5 shrink-0 text-text-secondary"
                        }),
                        type: "search",
                        value: _
                    })
                }) : null
            }
        },
        99019: (e, r, t) => {
            "use strict";
            t.d(r, {
                h: () => d
            });
            var a = t(37876),
                s = t(14e3),
                l = t(89099),
                i = t(27555),
                n = t(82378);
            let d = () => {
                let e, r, t = (0, l.useRouter)(),
                    d = (e = (0, s.usePathname)(), r = t.asPath, e ? ? r.split("?")[0].split("#")[0]),
                    o = e => {
                        let {
                            slug: r,
                            artistNick: a,
                            page: s,
                            ...l
                        } = t.query, i = { ...l
                        };
                        return e > 1 && (i.page = String(e)), (0, n.ZW)({
                            path: d,
                            query: i,
                            target: "elysium"
                        })
                    };
                return {
                    buildRouteForPage: o,
                    onPageChange: e => {
                        let {
                            route: r
                        } = o(e);
                        t.push(r, r)
                    },
                    renderPaginationLink: ({
                        targetPage: e,
                        children: r
                    }) => (0, a.jsx)(i.A, {
                        routeInfo: o(e),
                        scroll: !0,
                        children: r
                    })
                }
            }
        }
    }
]);
//#
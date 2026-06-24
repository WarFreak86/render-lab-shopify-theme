(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8716], {
        1333: e => {
            e.exports = {
                boxContainer: "CollectionBox_boxContainer__lQv3Y",
                boxContainerVisible: "CollectionBox_boxContainerVisible__IogLg",
                boxHeaderContainer: "CollectionBox_boxHeaderContainer__LXdl7",
                skeletonTitle: "CollectionBox_skeletonTitle__s0vmw",
                boxAuthorImage: "CollectionBox_boxAuthorImage__hBg0V",
                boxPreviewContainer: "CollectionBox_boxPreviewContainer__rWTMY",
                boxLastSlideLink: "CollectionBox_boxLastSlideLink__4_skO",
                titleAuthorContainer: "CollectionBox_titleAuthorContainer__mpG6G",
                authorTitle: "CollectionBox_authorTitle__dS7DI",
                authorTitleLink: "CollectionBox_authorTitleLink__NLKff",
                authorDescription: "CollectionBox_authorDescription__ugWdM",
                thumbnailContainer: "CollectionBox_thumbnailContainer__mev_a",
                "lazy-load-image-background": "CollectionBox_lazy-load-image-background__Tk1a6",
                "lazy-load-image-loaded": "CollectionBox_lazy-load-image-loaded__6wSBN",
                pulseAnimation: "CollectionBox_pulseAnimation__O8LNY",
                linkAbsoluteWrapper: "CollectionBox_linkAbsoluteWrapper__QuM9M",
                showMoreText: "CollectionBox_showMoreText__3QqdT"
            }
        },
        4860: e => {
            e.exports = {
                title: "ArtistCollectionsResults_title__kkvTp"
            }
        },
        13180: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: () => e5,
                default: () => e2
            });
            var a = s(37876),
                i = s(64968),
                r = s(15657),
                l = s(14399),
                n = s(27735),
                o = s(96697),
                c = s(77518),
                d = s(14232),
                m = s(89099),
                x = s(68451),
                p = s(58756),
                u = s(16373),
                g = s(36256),
                h = s(69241),
                _ = s(61846),
                j = s(27555),
                f = s(57699),
                v = s(91680),
                N = s(80153),
                k = s.n(N);
            let b = ({
                displayName: e,
                nick: t,
                avatarCoreUrl: s,
                isVerifiedOrigin: i
            }) => {
                let r = (0, _.X)(s, "avatars", "/images/artist/avatar_default.png", [150, 300]);
                return (0, a.jsxs)("div", {
                    className: k().wrapper,
                    children: [(0, a.jsx)("div", {
                        className: k().button,
                        children: (0, a.jsx)("img", {
                            alt: e,
                            className: k().image,
                            loading: "lazy",
                            sizes: r.sizes,
                            src: r.widthsSrc[0],
                            srcSet: r.srcSet
                        })
                    }), (0, a.jsx)(j.A, {
                        className: k().profileLink,
                        routeInfo: (0, v.bo)({
                            nick: t
                        }),
                        children: (0, a.jsx)("h2", {
                            children: e
                        })
                    }), i ? (0, a.jsx)(f.J, {
                        artistName: e,
                        artistRoute: (0, v.bo)({
                            nick: t
                        })
                    }) : null]
                })
            };
            var y = s(47602),
                C = s.n(y),
                w = s(71697),
                A = s(10769),
                L = s(54810),
                S = s(87050),
                T = s(89581),
                I = s.n(T);
            let P = ({
                    data: e
                }) => e.length ? (0, a.jsxs)("div", {
                    className: I().wrapper,
                    children: [(0, a.jsx)("span", {
                        className: I().title,
                        children: "The latest drops"
                    }), (0, a.jsx)("div", {
                        className: I().boxes,
                        children: e.map(e => (0, a.jsx)(j.A, {
                            routeInfo: (0, L.Vo)({
                                externalId: `${e.externalId}`
                            }),
                            children: (0, a.jsx)("img", {
                                alt: e.imageCoreUrl,
                                className: (0, h.A)(I().image, {
                                    [I().imageHorizontal]: e.orientation === S.JH.HORIZONTAL
                                }),
                                src: (0, A.al)(e.imageCoreUrl, {
                                    orientation: e.orientation,
                                    resolution: w.cc.rect.rect190x135
                                })
                            })
                        }, e.externalId))
                    })]
                }) : null,
                F = ({
                    data: e,
                    artworksPromoted: t
                }) => {
                    let s = (0, _.X)(e.coverCoreUrl, "covers", "/images/artist/cover_bg_default.png", [1240, 2480]),
                        i = (0, d.useRef)(null),
                        [r, l] = (0, d.useState)(!1),
                        [n, o] = (0, d.useState)(!1),
                        c = (0, h.A)(C().description, {
                            [C().descriptionExpanded]: r
                        }),
                        m = (0, h.A)(C().descriptionWrapper, {
                            [C().descriptionWrapperExpanded]: r
                        });
                    return (0, d.useEffect)(() => {
                        i.current && o(i.current.offsetWidth < i.current.scrollWidth)
                    }, []), (0, a.jsxs)("div", {
                        className: C().container,
                        children: [(0, a.jsxs)("div", {
                            className: C().wrapper,
                            children: [(0, a.jsx)("img", {
                                alt: "cover image",
                                className: C().backgroundBlur,
                                sizes: s.sizes,
                                src: s.widthsSrc[0],
                                srcSet: s.srcSet
                            }), (0, a.jsx)("img", {
                                alt: "cover image",
                                className: C().background,
                                sizes: s.sizes,
                                src: s.widthsSrc[0],
                                srcSet: s.srcSet
                            }), (0, a.jsx)(P, {
                                data: t
                            }), (0, a.jsx)("div", {
                                className: C().sectionWrapper,
                                children: (0, a.jsx)(b, {
                                    avatarCoreUrl: e.avatarCoreUrl,
                                    displayName: e.displayName,
                                    isVerifiedOrigin: e.isVerifiedOrigin,
                                    nick: e.nick
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: m,
                            children: e.description ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("span", {
                                    className: c,
                                    ref: i,
                                    title: e.description,
                                    children: e.description
                                }), n ? (0, a.jsx)("span", {
                                    className: C().readMoreBtn,
                                    onClick: () => l(!r),
                                    children: r ? "Read less" : "Read more"
                                }) : null]
                            }) : null
                        })]
                    })
                };
            var M = s(41018),
                R = s.n(M),
                z = s(3625),
                B = s(4860),
                H = s.n(B);
            s(32283);
            var V = s(30068),
                U = s(12013),
                D = s(87189),
                O = s(54587),
                E = s.n(O),
                q = s(95685),
                $ = s(58773),
                Z = s.n($);
            let W = ({
                thumbnail: e,
                collectionIndex: t,
                index: s,
                metadata: i,
                useSlideImpression: r
            }) => {
                let l = (0, d.useRef)(null),
                    n = {
                        message: {
                            index: s,
                            ...e,
                            externalId: e.itemCollectionId
                        },
                        metadata: i
                    },
                    {
                        setOnHold: o
                    } = r(l, n, {
                        onHold: !0
                    }),
                    c = (0, h.A)(Z().slideWrapper, {
                        [Z().slideHorizontal]: e.orientation === S.JH.HORIZONTAL,
                        [Z().slideVertical]: e.orientation === S.JH.VERTICAL
                    });
                return (0, a.jsx)("div", {
                    className: c,
                    "data-testid": "slide",
                    ref: l,
                    children: (0, a.jsx)(j.A, {
                        onClick: () => {
                            (0, q.v)(n, "artwork")
                        },
                        routeInfo: (0, L.Vo)({
                            externalId: e.itemCollectionId.toString()
                        }),
                        children: (0, a.jsx)(E(), {
                            alt: `collection-preview-${s}`,
                            className: Z().image,
                            fill: !0,
                            loading: 0 === t ? "eager" : "lazy",
                            onLoad: () => o(!1),
                            priority: 0 === t,
                            src: e.imageUrl,
                            unoptimized: !0
                        })
                    })
                })
            };
            var G = s(81900),
                X = s(21984),
                J = s(12291),
                K = s(23242);
            let Q = ({
                item: e,
                collectionIndex: t,
                pageConfig: s,
                routeInfo: i,
                analyticsMetadata: r,
                sliderClassName: l
            }) => {
                let n = (0, d.useRef)(null),
                    o = (0, J.G)(n, {}),
                    c = (0, h.A)(Z().slideWrapper, {
                        [Z().slideHorizontal]: e.thumbnails[0].orientation === S.JH.HORIZONTAL,
                        [Z().slideVertical]: e.thumbnails[0].orientation === S.JH.VERTICAL
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h2", {
                        className: Z().title,
                        children: e.title
                    }), (0, a.jsx)("section", {
                        "data-testid": "brand-collection-slider",
                        ref: n,
                        children: (0, a.jsxs)(g.FN, {
                            className: (0, h.A)(Z().slider, l),
                            showArrows: !1,
                            children: [e.thumbnails.map((i, l) => (0, a.jsx)(W, {
                                collectionIndex: t,
                                index: l,
                                metadata: {
                                    itemListName: r ? .collectionListName || e.title,
                                    listingFunction: e.slug,
                                    listingType: "slider",
                                    athenaPageName: s.analyticsAthenaName,
                                    gaPageName: s.analyticsGaName
                                },
                                thumbnail: i,
                                useSlideImpression: o
                            }, `${i.itemCollectionId}`)), (0, a.jsxs)("div", {
                                className: c,
                                "data-testid": "slide",
                                children: [(0, a.jsx)(D.LazyLoadImage, {
                                    alt: "collection-preview-last",
                                    className: Z().image,
                                    delayTime: 50,
                                    draggable: !1,
                                    effect: "opacity",
                                    src: e.thumbnails[0].imageUrl,
                                    threshold: 300
                                }), (0, a.jsxs)(j.A, {
                                    className: Z().link,
                                    routeInfo: i,
                                    children: [(0, a.jsx)(G.A, {
                                        color: K.A.primary,
                                        direction: "right",
                                        size: X.l.SIZE24
                                    }), (0, a.jsx)("span", {
                                        className: Z().linkText,
                                        children: "Explore more"
                                    })]
                                })]
                            }, "explore-more")]
                        })
                    })]
                })
            };
            var Y = s(18120),
                ee = s(1333),
                et = s.n(ee);
            let es = ({
                thumbnails: e,
                title: t,
                priorityImages: s,
                routeInfo: i,
                onClick: r
            }) => (0, a.jsxs)("div", {
                className: (0, h.A)(et().boxContainer, {
                    [et().boxContainerVisible]: !0
                }),
                "data-testid": "collection-box",
                children: [(0, a.jsx)("div", {
                    className: et().boxHeaderContainer,
                    "data-testid": "collection-box-header",
                    children: (0, a.jsx)("div", {
                        className: et().titleAuthorContainer,
                        children: (0, a.jsx)("h3", {
                            className: et().authorTitle,
                            children: t ? (0, a.jsxs)(j.A, {
                                "data-testid": "col-slider-collection-title-link",
                                onClick: r,
                                routeInfo: i,
                                children: [" ", t, " "]
                            }) : (0, a.jsx)("span", {
                                className: et().skeletonTitle,
                                children: "_"
                            })
                        })
                    })
                }), (0, a.jsxs)("div", {
                    className: et().boxPreviewContainer,
                    "data-testid": "collection-box-preview",
                    children: [e.map((e, i) => (0, a.jsx)("div", {
                        className: et().thumbnailContainer,
                        "data-testid": "collection-box-thumbnail",
                        children: e.imageUrl ? (0, a.jsx)(E(), {
                            alt: `${t}-preview-${i}`,
                            fill: !0,
                            priority: !!s,
                            src: e.imageUrl,
                            unoptimized: !0
                        }) : (0, a.jsx)(g.EA, {
                            className: "size-full",
                            style: {
                                position: "absolute"
                            }
                        })
                    }, e.imageUrl)), (0, a.jsx)(j.A, {
                        className: et().linkAbsoluteWrapper,
                        "data-testid": "collection-box-link",
                        onClick: r,
                        routeInfo: i,
                        children: " "
                    })]
                })]
            });
            var ea = s(87014);
            let ei = ({
                collection: e,
                index: t,
                artistNick: s
            }) => {
                let i = (0, d.useRef)(null),
                    r = {
                        categorySlug: v.Nv.analyticsGaName,
                        collectionId: e.id,
                        artistName: s,
                        collectionTitle: e.title,
                        index: t
                    };
                return (0, Y.$)({
                    ref: i,
                    message: r
                }), (0, a.jsx)("div", {
                    ref: i,
                    children: (0, a.jsx)(es, {
                        onClick: () => (0, U.h)(r),
                        priorityImages: t < 4,
                        routeInfo: (0, ea.Eq)({
                            artistNick: s,
                            collectionSlug: e.slug
                        }),
                        thumbnails: e.thumbnails.map(e => ({
                            imageUrl: (0, A.al)(e.imageCoreUrl, {
                                orientation: e.orientation,
                                resolution: w.cc.rect.rect392x280
                            })
                        })),
                        title: e.title
                    }, e.title)
                })
            };
            var er = s(64730),
                el = s.n(er);
            let en = ({
                    data: e,
                    testId: t,
                    collectionListName: s,
                    author: i
                }) => e.length ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(Y.L, {
                        callback: e => (0, U.M)(e),
                        children: (0, a.jsx)("div", {
                            className: el().desktopContainer,
                            "data-testid": `${t}-container`,
                            children: e.map((e, t) => (0, a.jsx)(ei, {
                                artistNick: i.nick,
                                collection: e,
                                index: t
                            }, e.id))
                        })
                    }), (0, a.jsx)("div", {
                        className: el().mobileContainer,
                        "data-testid": `${t}-container-mobile`,
                        children: e.map(e => ({
                            title: e.title,
                            slug: e.slug,
                            author: {
                                nick: i.nick
                            },
                            thumbnails: e.thumbnails ? e.thumbnails.map(e => ({
                                internalId: e.internalId,
                                imageUrl: (0, A.al)(e.imageCoreUrl, {
                                    orientation: e.orientation,
                                    resolution: w.cc.rect.rect392x280
                                }),
                                orientation: e.orientation,
                                itemCollectionId: e.externalId,
                                sku: e.sku
                            })) : []
                        })).map((e, t) => (0, a.jsx)(Y.L, {
                            callback: V.S,
                            children: (0, a.jsx)(Q, {
                                analyticsMetadata: {
                                    collectionListName: s
                                },
                                collectionIndex: t,
                                item: e,
                                pageConfig: v.Nv,
                                routeInfo: (0, ea.Eq)({
                                    artistNick: i.nick,
                                    collectionSlug: e.slug
                                })
                            })
                        }, `${t}-${e.title}`))
                    })]
                }) : null,
                eo = ({
                    collectionsOwned: e,
                    collectionsRecommended: t,
                    pages: s,
                    author: i
                }) => {
                    let r = (0, m.useRouter)(),
                        {
                            page: l
                        } = r.query;
                    return e ? .length || t ? .length ? (0, a.jsxs)(a.Fragment, {
                        children: [e ? .length ? (0, a.jsx)(en, {
                            author: i,
                            collectionListName: "Artist Artworks",
                            data: e,
                            testId: "artist-collections-owned"
                        }) : null, t ? .length ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("h2", {
                                className: H().title,
                                children: ["Recommended by ", i.fullName]
                            }), (0, a.jsx)(en, {
                                author: i,
                                collectionListName: "Artist Collection Recommended",
                                data: t,
                                testId: "artist-collections-recommended"
                            })]
                        }) : null, (0, a.jsx)("div", {
                            className: H().pagination,
                            children: (0, a.jsx)(z.d, {
                                allowedQueryParams: (0, z.f)(r.query, v.yn),
                                pageCount: s
                            }, l)
                        })]
                    }) : null
                };
            var ec = s(84583),
                ed = s(32418),
                em = s(93811),
                ex = s(30333);
            let ep = [{
                    label: "Displates",
                    value: "displates"
                }, {
                    label: "Collections",
                    value: "collections"
                }],
                eu = ["bestselling", "new", "newest"];
            var eg = s(44710),
                eh = s.n(eg),
                e_ = s(7234),
                ej = s(85777),
                ef = s.n(ej);
            let ev = () => (0, a.jsxs)("div", {
                    className: ef().container,
                    children: [(0, a.jsx)("span", {
                        className: ef().title,
                        children: "True greatness takes time"
                    }), (0, a.jsxs)("p", {
                        className: ef().description,
                        children: ["This artist’s first Displates are still cooking. Trust the process – and in the meantime,", " ", (0, a.jsx)(g.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(j.A, {
                                routeInfo: (0, e_.cT)({
                                    query: {
                                        q: "displate artists"
                                    }
                                }),
                                children: "explore art from other creators."
                            })
                        })]
                    })]
                }),
                eN = e => e ? e.map(e => ({
                    internalId: e.internalId,
                    externalId: e.externalId,
                    imageCoreUrl: e.imageCoreUrl,
                    orientation: e.orientation,
                    title: e.title,
                    labels: (0, ec.pr)(e.labels),
                    sku: e.sku
                })) : [],
                ek = ({
                    artworksOwned: e,
                    artworksRecommended: t,
                    pages: s,
                    slug: i
                }) => {
                    let r = (0, m.useRouter)(),
                        {
                            view: l,
                            search: n,
                            sort: o,
                            page: c
                        } = r.query,
                        x = n ? .trim() || void 0,
                        p = l === S.ZU.TEXTRA ? {
                            productType: S.ZU.TEXTRA
                        } : void 0,
                        u = e.length || 0,
                        g = t.length || 0,
                        h = eN(e),
                        _ = eN(t),
                        j = !u && !g,
                        f = j && void 0 !== x;
                    return (0, a.jsx)("div", {
                        className: eh().container,
                        "data-testid": "masonry-feed-container",
                        children: (0, a.jsxs)(Y.L, {
                            callback: em._,
                            children: [j ? f ? (0, a.jsx)(ex.L, {
                                nick: i,
                                phrase: x,
                                routeInfo: (0, v.bo)({
                                    query: { ...l && {
                                            view: l
                                        },
                                        ...o && {
                                            sort: o
                                        },
                                        ...c && {
                                            page: c
                                        }
                                    },
                                    nick: i
                                }),
                                variant: "search"
                            }) : (0, a.jsx)(ev, {}) : (0, a.jsx)(ed.U, {
                                artworksToDisplay: 108,
                                className: eh().masonryGrid,
                                feedName: "search",
                                items: h,
                                metadata: {
                                    messageSendingDisabled: !1,
                                    itemListName: "Artist Artworks",
                                    listingFunction: i,
                                    listingType: "masonry",
                                    athenaPageName: v.Nv.analyticsAthenaName,
                                    gaPageName: v.Nv.analyticsGaName,
                                    itemQueryParams: p
                                }
                            }), (0, a.jsx)(a.Fragment, {
                                children: g ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("h2", {
                                        className: eh().title,
                                        children: "Recommended artworks"
                                    }), (0, a.jsx)(ed.U, {
                                        artworksToDisplay: 108,
                                        className: eh().masonryGrid,
                                        feedName: "search",
                                        items: _,
                                        metadata: {
                                            messageSendingDisabled: !1,
                                            itemListName: "Artist Recommended Artworks",
                                            listingFunction: i,
                                            listingType: "masonry",
                                            athenaPageName: v.Nv.analyticsAthenaName,
                                            gaPageName: v.Nv.analyticsGaName,
                                            itemQueryParams: p
                                        }
                                    })]
                                }) : null
                            }), j ? (0, a.jsx)(d.Fragment, {}) : (0, a.jsx)("div", {
                                className: eh().pagination,
                                children: (0, a.jsx)(z.d, {
                                    allowedQueryParams: (0, z.f)(r.query, v.yn),
                                    pageCount: s
                                })
                            })]
                        })
                    })
                };
            var eb = s(74997),
                ey = s(45168),
                eC = s(68045),
                ew = s(77153),
                eA = s(80208);
            let eL = e => (0, a.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, a.jsxs)("g", {
                        id: "Group",
                        children: [(0, a.jsx)("path", {
                            id: "Shape",
                            d: "M1.46967 5.47032C1.17678 5.76321 1.17678 6.23809 1.46967 6.53098C1.76256 6.82387 2.23744 6.82387 2.53033 6.53098L1.46967 5.47032ZM4.66667 3.33398L5.197 2.80365C4.9041 2.51076 4.42923 2.51076 4.13634 2.80365L4.66667 3.33398ZM6.803 6.53098C7.0959 6.82387 7.57077 6.82387 7.86366 6.53098C8.15656 6.23809 8.15656 5.76321 7.86366 5.47032L6.803 6.53098ZM5.41667 3.33398C5.41667 2.91977 5.08088 2.58398 4.66667 2.58398C4.25245 2.58398 3.91667 2.91977 3.91667 3.33398H5.41667ZM3.91667 12.6673C3.91667 13.0815 4.25245 13.4173 4.66667 13.4173C5.08088 13.4173 5.41667 13.0815 5.41667 12.6673H3.91667ZM2.53033 6.53098L5.197 3.86431L4.13634 2.80365L1.46967 5.47032L2.53033 6.53098ZM4.13634 3.86431L6.803 6.53098L7.86366 5.47032L5.197 2.80365L4.13634 3.86431ZM3.91667 3.33398V12.6673H5.41667V3.33398H3.91667Z",
                            fill: "#10111A"
                        }), (0, a.jsx)("path", {
                            id: "Shape_2",
                            d: "M14.5307 10.531C14.8235 10.2381 14.8235 9.76321 14.5307 9.47032C14.2378 9.17743 13.7629 9.17743 13.47 9.47032L14.5307 10.531ZM11.3337 12.6673L10.8033 13.1976C10.944 13.3383 11.1347 13.4173 11.3337 13.4173C11.5326 13.4173 11.7233 13.3383 11.864 13.1976L11.3337 12.6673ZM9.19732 9.47032C8.90443 9.17743 8.42956 9.17743 8.13666 9.47032C7.84377 9.76321 7.84377 10.2381 8.13666 10.531L9.19732 9.47032ZM10.5837 12.6673C10.5837 13.0815 10.9194 13.4173 11.3337 13.4173C11.7479 13.4173 12.0837 13.0815 12.0837 12.6673H10.5837ZM12.0837 3.33398C12.0837 2.91977 11.7479 2.58398 11.3337 2.58398C10.9194 2.58398 10.5837 2.91977 10.5837 3.33398H12.0837ZM13.47 9.47032L10.8033 12.137L11.864 13.1976L14.5307 10.531L13.47 9.47032ZM11.864 12.137L9.19732 9.47032L8.13666 10.531L10.8033 13.1976L11.864 12.137ZM12.0837 12.6673V3.33398H10.5837V12.6673H12.0837Z",
                            fill: "#10111A"
                        })]
                    })
                }),
                eS = ({
                    router: e,
                    queryKey: t,
                    value: s,
                    artistNick: a,
                    clearOtherParams: i
                }) => {
                    let r = i ? {} : ((e, t) => {
                        let s = e => !!e && eu.includes(e);
                        switch (t) {
                            case "sort":
                                {
                                    let {
                                        artistNick: t,
                                        ...s
                                    } = e;
                                    return s
                                }
                            case "collectionType":
                                {
                                    let t = {};
                                    return s(e.sort) && (t.sort = e.sort),
                                    e.view && (t.view = e.view),
                                    Object.keys(t).length > 0 ? t : null
                                }
                            case "search":
                                {
                                    let t = {};
                                    return s(e.sort) && (t.sort = e.sort),
                                    e.view && (t.view = e.view),
                                    e.collectionType && (t.collectionType = e.collectionType),
                                    Object.keys(t).length > 0 ? t : null
                                }
                            default:
                                return s(e.sort) ? {
                                    sort: e.sort
                                } : null
                        }
                    })(e.query, t) ? ? {};
                    e.push((0, v.bo)({
                        query: { ...r,
                            [t]: s
                        },
                        nick: a
                    }).route, void 0, {
                        scroll: !1
                    })
                };
            var eT = s(35494),
                eI = s.n(eT);
            let eP = ({
                    artistDetails: e,
                    filters: t,
                    showSearchInput: s
                }) => {
                    let i = (0, m.useRouter)(),
                        {
                            isDrawerOpen: r,
                            handleDrawerOpen: l,
                            handleDrawerClose: n
                        } = (0, ey.b)(),
                        {
                            search: o
                        } = i.query,
                        {
                            activeSort: c,
                            activeView: d,
                            activeCollectionType: x
                        } = ((e, t) => {
                            let {
                                view: s,
                                sort: a,
                                collectionType: i
                            } = t.query, r = ((e = [], t) => {
                                let s = e.find(({
                                    value: e
                                }) => e === t);
                                return {
                                    btnLabel: s ? .label || "Bestselling",
                                    sort: s || {
                                        label: "Bestselling",
                                        value: "bestselling"
                                    }
                                }
                            })(e.sort, a);
                            return {
                                activeSort: r,
                                activeView: ((e = "") => {
                                    let t = ["displates", "collections", "textra"].includes(e) ? e : "displates";
                                    return {
                                        pillsValue: t === S.ZU.TEXTRA ? "displates" : t,
                                        value: t,
                                        isTextraViewActive: t === S.ZU.TEXTRA
                                    }
                                })(s),
                                activeCollectionType: ((e = [], t) => {
                                    let s = e.find(({
                                        value: e
                                    }) => e === t);
                                    return s ? s.value : "all"
                                })(e.collectionType, i)
                            }
                        })(t, i),
                        {
                            displayName: p,
                            nick: u,
                            containsTextra: _
                        } = e;
                    return (0, a.jsxs)("div", {
                        className: eI().container,
                        children: [(0, a.jsxs)("div", {
                            className: eI().wrapper,
                            children: [(0, a.jsx)(g.$n, {
                                className: eI().sortBtn,
                                "data-testid": "artist-sort-btn",
                                leftIcon: (0, a.jsx)(eL, {}),
                                onClick: l,
                                size: "sm",
                                variant: "secondaryDarkOutline",
                                children: (0, a.jsx)("span", {
                                    className: eI().sortInfo,
                                    children: c.btnLabel
                                })
                            }), (0, a.jsx)(eb._, {
                                contentClassName: eI().content,
                                footer: (0, a.jsx)(g.$n, {
                                    fullWidth: !0,
                                    onClick: n,
                                    children: "View results"
                                }),
                                handleClose: n,
                                isOpen: r,
                                testId: "artist-sort-drawer",
                                title: "Sort by:",
                                children: (0, a.jsx)(eC.z, {
                                    fieldName: "sort",
                                    onChange: (e, t) => {
                                        eS({
                                            router: i,
                                            queryKey: e,
                                            value: t,
                                            artistNick: u
                                        }), n()
                                    },
                                    options: t.sort.map(e => ({
                                        name: e.label,
                                        value: e.value
                                    })),
                                    selected: c.sort.value
                                })
                            }), (0, a.jsx)(eA.R, {
                                activeOption: d.pillsValue,
                                name: "artist-view-picker",
                                onChange: e => {
                                    0 !== e.length && eS({
                                        router: i,
                                        queryKey: "view",
                                        value: e,
                                        artistNick: u
                                    })
                                },
                                options: ep
                            }), t.collectionType ? (0, a.jsx)(eA.R, {
                                activeOption: x,
                                name: "artist-collection-type-picker",
                                onChange: e => eS({
                                    router: i,
                                    queryKey: "collectionType",
                                    value: e,
                                    artistNick: u
                                }),
                                options: t.collectionType
                            }) : null, _ ? (0, a.jsx)(g.$n, {
                                className: (0, h.A)(eI().textraBtn, {
                                    [eI().textraBtnActive]: d.isTextraViewActive
                                }),
                                "data-testid": "filter-textra",
                                onClick: () => eS({
                                    router: i,
                                    queryKey: "view",
                                    value: d.isTextraViewActive ? "displates" : "textra",
                                    artistNick: u
                                }),
                                size: "sm",
                                variant: "secondaryDarkOutline",
                                children: "Textra"
                            }) : null]
                        }), (0, a.jsx)(ew.D, {
                            ariaLabel: `Search artworks from ${p}`,
                            defaultValue: o ? ? "",
                            name: "artist-page-search",
                            onChange: e => {
                                eS({
                                    router: i,
                                    queryKey: "search",
                                    value: e.trim(),
                                    artistNick: u
                                })
                            },
                            placeholder: `Search artworks from ${p}`,
                            searchMethod: "artist",
                            showSearchInput: s
                        })]
                    })
                },
                eF = ({
                    filters: e,
                    artworksOwned: t,
                    artworksRecommended: s,
                    artworksPromoted: i,
                    collectionsOwned: r,
                    collectionsRecommended: l,
                    details: n,
                    metadata: o
                }) => {
                    let {
                        track: c
                    } = (0, u.z)(), h = (0, m.useRouter)(), [_, j] = (0, d.useState)(!1);
                    (0, d.useEffect)(() => {
                        c({
                            eventParams: {
                                page: o.page,
                                pages: o.totalPagesCount
                            }
                        });
                        let e = () => {
                                j(!0)
                            },
                            t = () => {
                                j(!1)
                            };
                        return h.events.on("routeChangeStart", e), h.events.on("routeChangeComplete", t), h.events.on("routeChangeError", t), () => {
                            h.events.off("routeChangeStart", e), h.events.off("routeChangeComplete", t), h.events.off("routeChangeError", t)
                        }
                    }, [h]);
                    let {
                        view: f
                    } = h.query, v = f || "displates", N = !!((n.artworkCount || 0) > 50 && "displates" === v);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(F, {
                            artworksPromoted: i,
                            data: n
                        }), (0, a.jsxs)("div", {
                            className: R().container,
                            children: [(0, a.jsxs)(g.mc, {
                                withVerticalPadding: !0,
                                children: [(0, a.jsx)(eP, {
                                    artistDetails: n,
                                    filters: e,
                                    showSearchInput: N
                                }), (0, a.jsx)("div", {
                                    className: R().listingWrapper,
                                    children: "collections" === v ? (0, a.jsx)(eo, {
                                        author: {
                                            fullName: n.displayName,
                                            nick: n.nick
                                        },
                                        collectionsOwned: r,
                                        collectionsRecommended: l,
                                        pages: o.totalPagesCount
                                    }) : _ ? (0, a.jsx)(x.R, {
                                        className: R().skeleton,
                                        showHeader: !1
                                    }) : (0, a.jsx)(ek, {
                                        artworksOwned: t,
                                        artworksRecommended: s,
                                        pages: o.totalPagesCount,
                                        slug: n.nick
                                    })
                                })]
                            }), (0, a.jsx)(p.e, {
                                className: R().sliderContainer,
                                dataTestId: "artist-page-creators-slider",
                                title: "More Creators you can’t miss",
                                trackingPromotionId: "artist_page",
                                trackingPromotionType: "artist"
                            }, n.nick)]
                        })]
                    })
                };
            var eM = s(61117),
                eR = s(53499),
                ez = s(14619);
            let eB = (e, t, s) => `${e} ${1===e?t:s}`,
                eH = ({
                    displayName: e,
                    nick: t,
                    avatarCoreUrl: s,
                    isVerifiedOrigin: i,
                    artworkCount: r,
                    collectionCount: l
                }) => {
                    let n = (0, _.X)(s, "avatars", "/images/artist/avatar_default.png", [80, 160]),
                        o = (0, v.bo)({
                            nick: t
                        }),
                        c = void 0 !== l || void 0 !== r;
                    return (0, a.jsxs)("div", {
                        className: "flex w-full flex-col items-center gap-4 lg:flex-row",
                        "data-testid": "artist-page-avatar",
                        children: [(0, a.jsx)(g.eu, {
                            alt: e,
                            className: "size-20 lg:size-22",
                            src: n.widthsSrc[0]
                        }), (0, a.jsx)("div", {
                            "aria-hidden": !0,
                            className: "hidden h-auto w-px shrink-0 self-stretch bg-border-inverse/50 lg:block"
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-center gap-3 lg:items-start",
                            children: [(0, a.jsx)("h1", {
                                className: "text-display-xs font-display uppercase text-text-inverse no-underline lg:text-display-md lg:truncate lg:text-left",
                                children: e
                            }), i || c ? (0, a.jsxs)("div", {
                                className: "flex flex-col items-center gap-1 lg:items-start",
                                children: [i ? (0, a.jsx)(f.J, {
                                    artistName: e,
                                    artistRoute: o
                                }) : null, c ? (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2 text-body-md text-text-inverse",
                                    children: [void 0 !== l ? (0, a.jsx)("span", {
                                        children: eB(l, "Collection", "Collections")
                                    }) : null, void 0 !== l && void 0 !== r ? (0, a.jsx)("span", {
                                        "aria-hidden": !0,
                                        className: "text-body-sm",
                                        children: "|"
                                    }) : null, void 0 !== r ? (0, a.jsx)("span", {
                                        children: eB(r, "Artwork", "Artworks")
                                    }) : null]
                                }) : null]
                            }) : null]
                        })]
                    })
                };
            var eV = s(51622),
                eU = s(69894),
                eD = s(27591);
            let eO = ({
                    data: e
                }) => e.length ? (0, a.jsxs)("div", {
                    className: "hidden w-[440px] shrink-0 flex-col gap-4 rounded-lg bg-background-light px-4 py-6 lg:flex",
                    "data-testid": "artist-promoted-displates",
                    children: [(0, a.jsx)("div", {
                        className: "flex items-start justify-center gap-2",
                        children: e.map(e => (0, a.jsx)(eD.W, {
                            alt: e.imageCoreUrl,
                            artworkOrientation: e.orientation,
                            className: (0, ez.cn)("aspect-auto h-[180px] w-[128px] shrink-0 content-center"),
                            imageCoreUrl: e.imageCoreUrl,
                            routeInfo: (0, L.Vo)({
                                externalId: `${e.externalId}`
                            }),
                            sizes: 128
                        }, e.externalId))
                    }), (0, a.jsx)("p", {
                        className: "text-heading-h6 text-text-primary",
                        children: "The latest drops"
                    })]
                }) : null,
                eE = ({
                    data: e,
                    artworksPromoted: t
                }) => {
                    let s = (0, _.X)(e.coverCoreUrl, "covers", "/images/artist/cover_bg_default_v2.png", [1240, 2480]),
                        i = (0, d.useRef)(null),
                        [r, l] = (0, d.useState)(!1),
                        [n, o] = (0, d.useState)(!1),
                        [c, m] = (0, d.useState)(!1),
                        x = (0, d.useMemo)(() => {
                            let t = [{
                                id: "artist-homepage",
                                children: (0, a.jsx)(j.A, {
                                    routeInfo: (0, eU.P)(),
                                    children: "Homepage"
                                })
                            }];
                            return e.isVerifiedOrigin && t.push({
                                id: "artist-verified-creators",
                                children: (0, a.jsx)(j.A, {
                                    routeInfo: (0, eV.zq)(),
                                    children: "Verified Creators"
                                })
                            }), t.push({
                                id: `artist-current-${e.nick}`,
                                label: e.displayName
                            }), t
                        }, [e.displayName, e.isVerifiedOrigin, e.nick]);
                    (0, d.useEffect)(() => {
                        m(!1)
                    }, [e.description]), (0, d.useEffect)(() => {
                        let e = i.current;
                        if (e) {
                            if (window.matchMedia(`(min-width: ${eR.Y}px)`).matches) {
                                o(!1), m(!0);
                                return
                            }
                            if (r) {
                                o(!0), m(!0);
                                return
                            }
                            o(e.scrollHeight > e.clientHeight), m(!0)
                        }
                    }, [e.description, r]);
                    let p = n || r;
                    return (0, a.jsxs)("header", {
                        className: "relative mb-12 border-b border-border-default-medium bg-background-inverse",
                        "data-testid": "artist-page-header",
                        children: [(0, a.jsxs)("div", {
                            "aria-hidden": !0,
                            className: "absolute inset-0 overflow-hidden",
                            children: [(0, a.jsx)("img", {
                                alt: "",
                                className: "absolute inset-0 block size-full object-cover object-top opacity-80 blur-[20px]",
                                sizes: s.sizes,
                                src: s.widthsSrc[0],
                                srcSet: s.srcSet
                            }), (0, a.jsx)("img", {
                                alt: "",
                                className: "absolute inset-y-0 left-1/2 h-full w-full max-w-[1920px] -translate-x-1/2 object-cover object-top",
                                sizes: s.sizes,
                                src: s.widthsSrc[0],
                                srcSet: s.srcSet
                            }), (0, a.jsx)("div", {
                                className: "pointer-events-none absolute inset-0 z-1 bg-neutral-900/50 lg:bg-transparent"
                            }), (0, a.jsx)("div", {
                                className: "pointer-events-none absolute inset-x-0 top-0.5 z-1 hidden h-[calc(100%-2px)] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.4)_65%,rgba(0,0,0,0.6)_100%)] lg:block"
                            })]
                        }), (0, a.jsx)(g.mc, {
                            className: (0, ez.cn)("relative z-10 md:h-[350px] lg:h-[400px]", p ? "min-h-[374px]" : "h-[374px]"),
                            children: (0, a.jsxs)("div", {
                                className: (0, ez.cn)("col-span-full flex flex-col gap-6 pt-0.5 lg:justify-between lg:gap-0 lg:py-8", p ? "min-h-full pb-4" : "h-full"),
                                children: [(0, a.jsx)(g.BI, {
                                    className: "flex",
                                    "data-testid": "artist-page-breadcrumbs",
                                    items: x,
                                    variant: "light"
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col items-center gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex w-full min-w-0 flex-col items-center gap-4 lg:max-w-[559px] lg:items-start",
                                        children: [(0, a.jsx)(eH, {
                                            artworkCount: e.artworkCount,
                                            avatarCoreUrl: e.avatarCoreUrl,
                                            collectionCount: e.collectionCount,
                                            displayName: e.displayName,
                                            isVerifiedOrigin: e.isVerifiedOrigin,
                                            nick: e.nick
                                        }), e.description ? (0, a.jsxs)("div", {
                                            className: "flex w-full flex-col items-center gap-2 lg:flex-row lg:items-baseline lg:justify-start",
                                            children: [(0, a.jsx)("p", {
                                                className: (0, ez.cn)("min-w-0 w-full text-body-md text-text-inverse", "text-center lg:text-left", r ? "whitespace-normal" : "line-clamp-3 md:line-clamp-2 lg:line-clamp-3"),
                                                ref: i,
                                                title: e.description,
                                                children: e.description
                                            }), c && n ? (0, a.jsx)("button", {
                                                className: "shrink-0 cursor-pointer text-nowrap text-body-md font-bold text-text-link",
                                                "data-testid": "artist-page-description-read-more",
                                                onClick: () => l(!r),
                                                type: "button",
                                                children: r ? "Read less" : "Read more"
                                            }) : null]
                                        }) : null]
                                    }), (0, a.jsx)(eO, {
                                        data: t
                                    })]
                                })]
                            })
                        })]
                    })
                };
            var eq = s(99019);
            let e$ = ({
                    collection: e,
                    index: t,
                    artistNick: s
                }) => {
                    let i = (0, d.useRef)(null),
                        r = {
                            categorySlug: v.Nv.analyticsGaName,
                            collectionId: e.id,
                            artistName: s,
                            collectionTitle: e.title,
                            index: t
                        };
                    (0, Y.$)({
                        ref: i,
                        message: r
                    });
                    let l = e.thumbnails.slice(0, 3).map(t => ({
                        alt: e.title,
                        orientation: t.orientation,
                        src: (0, A.al)(t.imageCoreUrl, {
                            orientation: t.orientation,
                            resolution: w.cc.rect.rect392x280
                        })
                    }));
                    return (0, a.jsx)(j.A, {
                        "aria-label": e.title,
                        className: "col-span-4",
                        onClick: () => (0, U.h)(r),
                        ref: i,
                        routeInfo: (0, ea.Eq)({
                            artistNick: s,
                            collectionSlug: e.slug
                        }),
                        children: (0, a.jsx)(g.KI, {
                            items: l,
                            title: e.title
                        })
                    })
                },
                eZ = ({
                    collectionsOwned: e,
                    collectionsRecommended: t,
                    pages: s,
                    artistNick: i
                }) => {
                    let r = (0, m.useRouter)(),
                        {
                            onPageChange: l,
                            renderPaginationLink: n
                        } = (0, eq.h)(),
                        {
                            page: o
                        } = r.query,
                        c = (0, d.useMemo)(() => [...e ? ? [], ...t ? ? []], [e, t]),
                        x = Number(o || 1),
                        p = !c.length && s > 1;
                    return c.length ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(Y.L, {
                            callback: e => (0, U.M)(e),
                            children: c.map((e, t) => (0, a.jsx)(e$, {
                                artistNick: i,
                                collection: e,
                                index: t
                            }, e.slug))
                        }), p ? (0, a.jsx)("div", {
                            className: "col-span-full my-6 flex justify-center",
                            children: (0, a.jsx)(g.dK, {
                                count: s,
                                onPageChange: l,
                                page: x,
                                renderNext: n,
                                renderPrevious: n
                            })
                        }) : (0, a.jsx)(d.Fragment, {})]
                    }) : null
                };
            var eW = s(48803),
                eG = s(16322),
                eX = s(29633),
                eJ = s(23412),
                eK = s(55528),
                eQ = s(30236),
                eY = s(60013);
            let e0 = () => (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 px-2 py-9 text-center md:px-4 lg:py-20",
                    children: [(0, a.jsx)("span", {
                        className: "text-body-sm font-bold text-text-primary",
                        children: "True greatness takes time"
                    }), (0, a.jsxs)("p", {
                        className: "max-w-[400px] text-body-md text-text-secondary lg:max-w-[550px]",
                        children: ["This artist’s first Displates are still cooking. Trust the process – and in the meantime,", " ", (0, a.jsx)(g.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(j.A, {
                                routeInfo: (0, e_.cT)({
                                    query: {
                                        q: "displate artists"
                                    }
                                }),
                                children: "explore art from other creators."
                            })
                        })]
                    })]
                }),
                e1 = (e, t, s, a) => ({
                    name: e,
                    heading: t,
                    shouldBeShown: s.length > 0,
                    masonryListingFunction: a,
                    items: (0, eG.b)(s)
                }),
                e3 = ({
                    artworksOwned: e,
                    artworksRecommended: t,
                    pages: s,
                    slug: i,
                    displayName: r
                }) => {
                    let l = (0, m.useRouter)(),
                        {
                            onPageChange: n,
                            renderPaginationLink: o
                        } = (0, eq.h)(),
                        {
                            view: c,
                            search: x,
                            sort: p,
                            page: u
                        } = l.query,
                        h = x ? .trim() || void 0,
                        _ = e.length || 0,
                        j = t.length || 0,
                        f = !_ && !j,
                        N = f && void 0 !== h,
                        k = !f && s > 1,
                        b = (0, d.useMemo)(() => ({
                            messageSendingDisabled: !1,
                            itemListName: "Artist Artworks",
                            listingFunction: i,
                            listingType: "masonry",
                            athenaPageName: v.Nv.analyticsAthenaName,
                            gaPageName: v.Nv.analyticsGaName,
                            itemQueryParams: c === S.ZU.TEXTRA ? {
                                productType: S.ZU.TEXTRA
                            } : void 0
                        }), [i, c]),
                        y = (0, d.useMemo)(() => e1("owned", "Artist Artworks", e, i), [e, i]),
                        C = (0, d.useMemo)(() => e1("recommended", `Recommended by ${r}`, t, i), [t, r, i]),
                        w = [...(0, eJ.T)(l.pathname) ? [] : [{
                            item: (0, a.jsx)(eW.k, {}),
                            position: eQ.X
                        }], {
                            item: (0, a.jsx)(eY.G, {}),
                            position: eQ.J
                        }],
                        A = Number(u || 1),
                        L = e => (0, a.jsx)(eX.m, {
                            artworksToDisplay: 108,
                            customGridItem: eK.w,
                            feedName: e.name,
                            items: e.items,
                            metadata: (0, eJ.v2)(e, b),
                            positionedGridItems: w
                        }, e.name);
                    return (0, a.jsxs)(Y.L, {
                        callback: em._,
                        children: [f ? N ? (0, a.jsx)(ex.L, {
                            nick: i,
                            phrase: h,
                            routeInfo: (0, v.bo)({
                                query: { ...c && {
                                        view: c
                                    },
                                    ...p && {
                                        sort: p
                                    },
                                    ...u && {
                                        page: u
                                    }
                                },
                                nick: i
                            }),
                            variant: "search"
                        }) : (0, a.jsx)(e0, {}) : (0, a.jsxs)("div", {
                            className: "col-span-full mt-6 flex flex-col",
                            "data-testid": "masonry-feed-container",
                            children: [y.shouldBeShown ? L(y) : null, C.shouldBeShown ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("h2", {
                                    className: "pt-16 pb-12 text-center text-display-sm font-display uppercase md:text-display-md",
                                    children: C.heading
                                }), L(C)]
                            }) : null]
                        }), k ? (0, a.jsx)("div", {
                            className: "col-span-full my-6 flex justify-center",
                            children: (0, a.jsx)(g.dK, {
                                count: s,
                                onPageChange: n,
                                page: A,
                                renderNext: o,
                                renderPrevious: o
                            })
                        }) : (0, a.jsx)(d.Fragment, {})]
                    })
                },
                e7 = ({
                    filters: e,
                    artworksOwned: t,
                    artworksRecommended: s,
                    artworksPromoted: i,
                    collectionsOwned: r,
                    collectionsRecommended: l,
                    details: n,
                    metadata: o
                }) => {
                    let {
                        track: c
                    } = (0, u.z)(), x = (0, m.useRouter)(), {
                        view: h
                    } = x.query, _ = "string" == typeof h ? h : void 0, j = "collections" === (("displates" === _ ? "artworks" : _) || "artworks");
                    return (0, d.useEffect)(() => {
                        c({
                            eventParams: {
                                page: o.page,
                                pages: o.totalPagesCount
                            }
                        })
                    }, [x]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(eE, {
                            artworksPromoted: i,
                            data: n
                        }), (0, a.jsx)(g.mc, {
                            children: (0, a.jsx)("div", {
                                className: "col-span-full mb-2",
                                children: (0, a.jsx)(eM.J, {
                                    artworkCount: n.artworkCount,
                                    buildRoute: e => (0, v.bo)({
                                        query: e,
                                        nick: n.nick
                                    }).route,
                                    clearRouteQuery: {
                                        artistNick: n.nick
                                    },
                                    displayName: n.displayName,
                                    showTextra: n.containsTextra,
                                    sortOptions: e.sort
                                })
                            })
                        }), (0, a.jsx)(g.mc, {
                            "data-testid": j ? "artist-collections-container" : "artist-artworks-container",
                            children: j ? (0, a.jsx)(g.xA, {
                                className: "gap-y-6 mt-12",
                                children: (0, a.jsx)(eZ, {
                                    artistNick: n.nick,
                                    collectionsOwned: r,
                                    collectionsRecommended: l,
                                    pages: o.totalPagesCount
                                })
                            }) : (0, a.jsx)(e3, {
                                artworksOwned: t,
                                artworksRecommended: s,
                                displayName: n.displayName,
                                pages: o.totalPagesCount,
                                slug: n.nick
                            })
                        }), (0, a.jsx)(p.e, {
                            className: "mt-16 mb-8",
                            dataTestId: "artist-page-creators-slider",
                            title: "More Creators you can’t miss",
                            trackingPromotionId: "artist_page",
                            trackingPromotionType: "artist"
                        }, n.nick)]
                    })
                };
            var e6 = s(25282);
            let e4 = ({
                header: e,
                filters: t,
                details: s,
                metadata: c,
                artworksRecommended: d,
                artworksOwned: m,
                artworksPromoted: x,
                collectionsRecommended: p,
                collectionsOwned: u
            }) => {
                let g = (0, l.Op)(s.avatarCoreUrl, [150, 300]).src,
                    h = (0, v.bo)({
                        nick: s.nick,
                        absolute: !0
                    }).route,
                    _ = {
                        webpage: {
                            h1: `${s.nick}'s Profile on Displate`,
                            url: h,
                            description: s.description,
                            imageOfPage: g
                        },
                        person: {
                            avatarUrl: g,
                            nick: s.nick,
                            collectionNames: s.seoData.collections,
                            fullName: s.displayName,
                            alternateName: s.nick,
                            socialLinks: [s.links ? .twitch || "", s.links ? .youtube || ""].filter(Boolean),
                            url: h
                        },
                        profile: {
                            nick: s.nick,
                            description: s.description,
                            fullName: s.displayName,
                            url: h
                        }
                    },
                    j = {
                        artworksOwned: m,
                        artworksPromoted: x,
                        artworksRecommended: d,
                        collectionsOwned: u,
                        collectionsRecommended: p,
                        details: s,
                        filters: t,
                        metadata: c
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.F, {
                        ldJsonParams: _,
                        pageMeta: {
                            coverImage: v.Nv.defaultMeta.coverImage,
                            title: s.seoData.title,
                            description: s.seoData.description
                        }
                    }), (0, a.jsx)(i.e, {
                        value: {},
                        children: (0, a.jsx)(e6.O, {
                            headerData: e,
                            children: (0, a.jsx)(o.X, {
                                fallback: (0, a.jsx)(eF, { ...j
                                }),
                                name: n.GY,
                                children: (0, a.jsx)(e7, { ...j
                                })
                            })
                        })
                    })]
                })
            };
            e4.getLayout = function(e) {
                return (0, a.jsx)(c.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            };
            let e2 = e4;
            var e5 = !0
        },
        15874: (e, t, s) => {
            "use strict";
            s.d(t, {
                z: () => i
            });
            var a = s(22884);
            let i = e => {
                (0, a.u)({
                    event: "view_promotion",
                    ecommerce: e
                })
            }
        },
        20147: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => i
            });
            var a = s(22884);
            let i = e => {
                (0, a.u)({
                    event: "select_promotion",
                    ecommerce: e
                })
            }
        },
        26055: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => h
            });
            var a = s(37876),
                i = s(14232),
                r = s(20147),
                l = s(15874),
                n = s(71697),
                o = s(27555),
                c = s(14399),
                d = s(39313),
                m = s(10769),
                x = s(14619),
                p = s(91680),
                u = s(33561),
                g = s.n(u);
            let h = ({
                artistItem: e,
                trackingMetadata: t,
                className: s
            }) => {
                let u = (0, c.Op)(e.avatarCoreUrl, [80, 160]),
                    h = (0, i.useRef)(null),
                    _ = e.artworks.slice(0, 3);
                return (0, d.P)(h, {
                    once: !0,
                    threshold: .5,
                    delay: 1e3,
                    callback: () => (0, l.z)(t)
                }), (0, a.jsx)("div", {
                    className: (0, x.cn)(g().container, s),
                    ref: h,
                    children: (0, a.jsxs)(o.A, {
                        onClick: () => {
                            (0, r.$)(t)
                        },
                        routeInfo: (0, p.bo)({
                            nick: e.nick,
                            licensed: e.isLicensed
                        }),
                        children: [(0, a.jsx)("div", {
                            className: g().imagesContainer,
                            children: _.map((t, s) => (0, a.jsx)("div", {
                                className: g().artworkContainer,
                                children: (0, a.jsx)("img", {
                                    alt: `${e.displayName} artwork`,
                                    className: g().artworkImage,
                                    loading: "lazy",
                                    src: (0, m.al)(t.imageCoreUrl, {
                                        resolution: n.cc.rect.rect380x270,
                                        orientation: t.orientation
                                    })
                                })
                            }, s))
                        }), (0, a.jsx)("div", {
                            className: g().descriptionContainer,
                            children: (0, a.jsxs)("div", {
                                className: g().brandInfoContainer,
                                children: [(0, a.jsx)("div", {
                                    className: g().brandLink,
                                    children: (0, a.jsx)("img", {
                                        alt: e.displayName,
                                        className: g().brandAvatarImage,
                                        loading: "lazy",
                                        sizes: u.sizes,
                                        src: u.widthsSrc[0],
                                        srcSet: u.srcSet
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: g().brandDescLink,
                                    children: [(0, a.jsx)("p", {
                                        className: g().brandTitle,
                                        children: e.displayName
                                    }), e.artworksCount ? (0, a.jsxs)("p", {
                                        className: g().brandText,
                                        children: [e.artworksCount, " Artworks"]
                                    }) : null]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        33561: e => {
            e.exports = {
                container: "ArtistTile_container__TL7dQ",
                followButton: "ArtistTile_followButton__VYzZY",
                imagesContainer: "ArtistTile_imagesContainer__CGDof",
                descriptionContainer: "ArtistTile_descriptionContainer___ZhfG",
                brandInfoContainer: "ArtistTile_brandInfoContainer__kofZ4",
                artworkContainer: "ArtistTile_artworkContainer__mVAtS",
                artworkImage: "ArtistTile_artworkImage__yUakY",
                brandAvatarImage: "ArtistTile_brandAvatarImage__7h3G3",
                brandLink: "ArtistTile_brandLink__qr12U",
                brandTitle: "ArtistTile_brandTitle__Mnpuc",
                brandText: "ArtistTile_brandText__an6w7",
                brandDescLink: "ArtistTile_brandDescLink__SwKCH"
            }
        },
        35494: e => {
            e.exports = {
                container: "Filters_container__KfC4u",
                wrapper: "Filters_wrapper__orH1j",
                textraBtn: "Filters_textraBtn__QQsTX",
                textraBtnActive: "Filters_textraBtnActive__QHLlt",
                sortBtn: "Filters_sortBtn__wyPvO",
                sortInfo: "Filters_sortInfo__p01Op"
            }
        },
        41018: e => {
            e.exports = {
                container: "ArtistPage_container__UEkff",
                listingWrapper: "ArtistPage_listingWrapper__XWHpC",
                sliderContainer: "ArtistPage_sliderContainer__GZMGe",
                skeleton: "ArtistPage_skeleton__RNmKb"
            }
        },
        44710: e => {
            e.exports = {
                container: "ArtistDisplateResults_container__crnxc",
                pagination: "ArtistDisplateResults_pagination__T345B",
                title: "ArtistDisplateResults_title__zA51o"
            }
        },
        47602: e => {
            e.exports = {
                container: "ArtistPageHeader_container__c8JXM",
                wrapper: "ArtistPageHeader_wrapper__zdPRA",
                sectionWrapper: "ArtistPageHeader_sectionWrapper__1gsZ2",
                background: "ArtistPageHeader_background__53o6I",
                backgroundBlur: "ArtistPageHeader_backgroundBlur__K5fRJ",
                descriptionWrapper: "ArtistPageHeader_descriptionWrapper__SYRN2",
                descriptionWrapperExpanded: "ArtistPageHeader_descriptionWrapperExpanded__Bszhw",
                description: "ArtistPageHeader_description__JkaVN",
                descriptionExpanded: "ArtistPageHeader_descriptionExpanded__p4_qp",
                readMoreBtn: "ArtistPageHeader_readMoreBtn__bP1Oq"
            }
        },
        53499: (e, t, s) => {
            "use strict";
            s.d(t, {
                EX: () => a,
                Kk: () => n,
                RD: () => o,
                Y: () => i,
                as: () => r,
                kY: () => l
            });
            let a = 640,
                i = 768,
                r = 1024,
                l = 1280,
                n = 1440,
                o = 1920
        },
        57699: (e, t, s) => {
            "use strict";
            s.d(t, {
                J: () => _
            });
            var a = s(37876),
                i = s(74997),
                r = s(45168),
                l = s(27555),
                n = s(3231),
                o = s(90413),
                c = s(30305),
                d = s(67076),
                m = s(36256),
                x = s(14619),
                p = s(51622);
            let u = "flex items-center gap-1 p-0 normal-case cursor-pointer focus:outline-none hover:bg-transparent",
                g = "text-body-lg md:text-body-sm",
                h = ({
                    artistName: e,
                    artistRoute: t
                }) => (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4 lg:gap-2 lg:p-2",
                    children: [(0, a.jsxs)("h3", {
                        className: "hidden lg:block lg:text-heading-subtitle-eyebrow",
                        children: [(0, a.jsx)(m.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(l.A, {
                                routeInfo: t,
                                children: e
                            })
                        }), " ", "is a Verified Creator"]
                    }), (0, a.jsx)("p", {
                        className: g,
                        children: "This badge highlights artists, illustrators, and designers recognized for creative skill and vision."
                    }), (0, a.jsxs)("p", {
                        className: g,
                        children: ["Verified Creators bring unique style, strong craft, and consistent creativity – showcasing genuine artistic expression on metal. ", (0, a.jsx)("br", {}), (0, a.jsx)(m.N_, {
                            asChild: !0,
                            children: (0, a.jsx)(l.A, {
                                routeInfo: p._p,
                                target: "_blank",
                                children: "Learn more about Verified Creators."
                            })
                        })]
                    })]
                }),
                _ = ({
                    blackText: e = !1,
                    artistName: t,
                    artistRoute: s
                }) => {
                    let {
                        isDrawerOpen: p,
                        handleDrawerOpen: g,
                        handleDrawerClose: _
                    } = (0, r.b)(), j = (0, o.A)(), {
                        isMobileOrTablet: f
                    } = (0, c.Q)(), v = (0, x.cn)("text-heading-subtitle text-text-inverse", e && "text-text-tertiary");
                    return (0, a.jsxs)("div", {
                        "data-testid": "v-artist-badge",
                        children: [j && f ? (0, a.jsx)(m.$n, {
                            className: u,
                            leftIcon: (0, a.jsx)(d.A, {}),
                            onClick: g,
                            size: "sm",
                            variant: "text",
                            children: (0, a.jsx)("span", {
                                className: v,
                                children: "Verified creator"
                            })
                        }) : (0, a.jsx)(n.A, {
                            icon: (0, a.jsxs)("div", {
                                className: u,
                                children: [(0, a.jsx)(d.A, {}), (0, a.jsx)("span", {
                                    className: v,
                                    children: "Verified creator"
                                })]
                            }),
                            isActive: !0,
                            position: n.n.DOWN_MID,
                            children: (0, a.jsx)("div", {
                                className: "flex max-w-[400px] flex-col gap-1",
                                children: (0, a.jsx)(h, {
                                    artistName: t,
                                    artistRoute: s
                                })
                            })
                        }), (0, a.jsx)(i._, {
                            contentClassName: "flex flex-col gap-4 mt-0 pt-0 pr-6 text-body-lg",
                            handleClose: _,
                            isOpen: p,
                            testId: "v-artist-drawer",
                            title: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(m.N_, {
                                    asChild: !0,
                                    children: (0, a.jsx)(l.A, {
                                        routeInfo: s,
                                        children: t
                                    })
                                }), " ", "is a Verified Creator"]
                            }),
                            children: (0, a.jsx)(h, {
                                artistName: t,
                                artistRoute: s
                            })
                        })]
                    })
                }
        },
        58756: (e, t, s) => {
            "use strict";
            s.d(t, {
                e: () => m
            });
            var a = s(37876),
                i = s(51192),
                r = s(26055),
                l = s(27555),
                n = s(36256),
                o = s(51622),
                c = s(74359),
                d = s(87050);
            let m = ({
                title: e,
                dataTestId: t,
                className: s,
                trackingPromotionType: m,
                trackingPromotionId: x
            }) => {
                let {
                    data: p
                } = (0, c.I)({
                    queryKey: ["verified-artists-slider"],
                    queryFn: () => d.V6.getVerifiedArtistsSliderV1()
                });
                return p ? .length ? (0, a.jsxs)(n.mc, {
                    className: s,
                    "data-testid": t,
                    variant: "noPaddingMobile",
                    children: [(0, a.jsx)("h2", {
                        className: "text-center mt-4 mb-6 text-display-sm md:text-display-md font-display uppercase",
                        children: e || "Discover Verified Creators"
                    }), (0, a.jsx)(n.FN, {
                        elementVariant: "verified_artists_slider",
                        gap: "md",
                        offset: "page",
                        children: p.map((e, t) => (0, a.jsx)(r.A, {
                            artistItem: e,
                            className: "w-[280px] md:w-[320px]",
                            trackingMetadata: {
                                promotion_id: `${m}|${x}|${e.nick}`,
                                promotion_name: e.displayName,
                                promotion_type: m,
                                creative_name: e.avatarCoreUrl,
                                creative_slot: `creators_slider|${t+1}`
                            }
                        }, t))
                    }), (0, a.jsx)("div", {
                        className: "flex flex-col items-center mt-9 mb-16 lg:mt-12 lg:mb-[88px]",
                        children: (0, a.jsx)(n.$n, {
                            asChild: !0,
                            "data-testid": "see-more-designs-button",
                            onClick: () => (0, i.O)({
                                elementId: "creators_slider_see_more_button"
                            }),
                            children: (0, a.jsx)(l.A, {
                                routeInfo: (0, o.zq)(),
                                children: "See more designs"
                            })
                        })
                    })]
                }) : null
            }
        },
        58773: e => {
            e.exports = {
                title: "CollectionMobileSlider_title__NSC5m",
                link: "CollectionMobileSlider_link__Pkov2",
                linkText: "CollectionMobileSlider_linkText__DCAQV",
                slider: "CollectionMobileSlider_slider__dXTII",
                slideWrapper: "CollectionMobileSlider_slideWrapper__giS40",
                slideHorizontal: "CollectionMobileSlider_slideHorizontal__h7ys0",
                slideVertical: "CollectionMobileSlider_slideVertical__9gL5y",
                image: "CollectionMobileSlider_image__0ShfU"
            }
        },
        64730: e => {
            e.exports = {
                desktopContainer: "CollectionSlider_desktopContainer__uXrtE",
                mobileContainer: "CollectionSlider_mobileContainer__DSbNI"
            }
        },
        67076: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            var a = s(37876);
            let i = e => (0, a.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.63935 1.41806L11.745 0.930014L12.5423 2.95305L14.6322 3.5065L14.4044 5.67125L16 7.13935L14.7999 8.94983L15.5347 10.9967L13.6371 12.0377L13.344 14.1945L11.1833 14.2277L9.92856 16L8 15.018L6.07144 16L4.81672 14.2277L2.65601 14.1945L2.36287 12.0377L0.465294 10.9967L1.20012 8.94983L0 7.13935L1.59557 5.67125L1.36785 3.5065L3.45773 2.95305L4.25503 0.930014L6.36065 1.41806L8 0L9.63935 1.41806ZM11.1449 5.7644C11.0136 5.64972 10.8146 5.66382 10.7008 5.79611L7.27747 9.7753L5.27808 7.88654C5.15127 7.76677 4.95187 7.7732 4.83295 7.9009C4.71407 8.02865 4.72045 8.22952 4.84722 8.34931L7.08564 10.4635C7.14808 10.5225 7.23184 10.5532 7.31731 10.5487C7.40281 10.5443 7.48306 10.5049 7.53913 10.4397L11.1764 6.21182C11.2902 6.07951 11.2762 5.87912 11.1449 5.7644Z",
                    fill: "url(#paint0_linear_7486_44158)"
                }), (0, a.jsx)("defs", {
                    children: (0, a.jsxs)("linearGradient", {
                        id: "paint0_linear_7486_44158",
                        x1: -.0590224,
                        y1: 0,
                        x2: 16.1764,
                        y2: 16.1166,
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, a.jsx)("stop", {
                            stopColor: "#EA0307"
                        }), (0, a.jsx)("stop", {
                            offset: .5,
                            stopColor: "#F429FF"
                        }), (0, a.jsx)("stop", {
                            offset: 1,
                            stopColor: "#FF7B00"
                        })]
                    })
                })]
            })
        },
        68451: (e, t, s) => {
            "use strict";
            s.d(t, {
                R: () => m
            });
            var a = s(37876),
                i = s(69241),
                r = s(32418),
                l = s(36256),
                n = s(72593),
                o = s.n(n);
            let c = () => (0, a.jsx)("div", {
                    className: o().masonryFeedHeaderSkeleton,
                    children: (0, a.jsx)(l.EA, {
                        className: `${o().skeleton} size-full`
                    })
                }),
                d = () => (0, a.jsx)("div", {
                    className: o().masonryFeedButtonSkeleton,
                    children: (0, a.jsx)(l.EA, {
                        className: `${o().skeleton} size-full`
                    })
                }),
                m = ({
                    showHeader: e = !0,
                    showFooter: t = !0,
                    testId: s,
                    className: n
                }) => (0, a.jsxs)("div", {
                    className: o().masonryFeedSkeleton,
                    "data-testid": s,
                    children: [e ? (0, a.jsx)(c, {}) : null, (0, a.jsx)("div", {
                        className: (0, i.A)(o().masonryFeedGridSkeleton, n),
                        children: [...Array(r.S).keys()].map(e => (0, a.jsx)(l.EA, {
                            className: `${o().skeleton} size-full`
                        }, e))
                    }), t ? (0, a.jsx)(d, {}) : null]
                })
        },
        72593: e => {
            e.exports = {
                masonryFeedGridContainer: "MasonryFeedSkeleton_masonryFeedGridContainer__tyRl7",
                masonryFeedWrapper: "MasonryFeedSkeleton_masonryFeedWrapper__PVCWF",
                seeAllButton: "MasonryFeedSkeleton_seeAllButton__uM5Iq",
                masonryFeedGrid: "MasonryFeedSkeleton_masonryFeedGrid__kgSZR",
                link: "MasonryFeedSkeleton_link__C4xr8",
                masonryFeedSkeleton: "MasonryFeedSkeleton_masonryFeedSkeleton__pMIiu",
                masonryFeedHeaderSkeleton: "MasonryFeedSkeleton_masonryFeedHeaderSkeleton__i5Llp",
                masonryFeedGridSkeleton: "MasonryFeedSkeleton_masonryFeedGridSkeleton___KSoJ",
                skeleton: "MasonryFeedSkeleton_skeleton__3y8Av",
                masonryFeedButtonSkeleton: "MasonryFeedSkeleton_masonryFeedButtonSkeleton__UIHuj"
            }
        },
        80153: e => {
            e.exports = {
                wrapper: "ArtistPageAvatar_wrapper__1b6b4",
                button: "ArtistPageAvatar_button__1mhH5",
                image: "ArtistPageAvatar_image__3tSB6",
                profileLink: "ArtistPageAvatar_profileLink__XqBlU"
            }
        },
        85165: (e, t, s) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/artist/[artistNick]", function() {
                return s(13180)
            }])
        },
        85777: e => {
            e.exports = {
                container: "NoArtworksInfo_container__rDy74",
                title: "NoArtworksInfo_title__73M4g",
                description: "NoArtworksInfo_description__rafCS"
            }
        },
        89581: e => {
            e.exports = {
                wrapper: "PromotedDisplates_wrapper__sFuJ6",
                title: "PromotedDisplates_title__iqfQc",
                boxes: "PromotedDisplates_boxes__djDSX",
                image: "PromotedDisplates_image__aSsfF",
                imageHorizontal: "PromotedDisplates_imageHorizontal__WymaG"
            }
        }
    },
    e => {
        e.O(0, [4024, 2183, 1353, 1671, 4587, 4676, 5706, 9658, 3915, 5657, 3851, 8043, 126, 9633, 1899, 7415, 7532, 636, 6593, 8792], () => e(e.s = 85165)), _N_E = e.O()
    }
]);
//#
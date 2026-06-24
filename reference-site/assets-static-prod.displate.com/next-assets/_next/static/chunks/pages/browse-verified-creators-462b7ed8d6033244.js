(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4627], {
        2749: (e, t, s) => {
            "use strict";
            s.d(t, {
                j: () => m
            });
            var i = s(14232),
                r = s(67768),
                a = s(40097),
                n = s(87973),
                o = s(24297),
                l = s(81291),
                c = s(16903),
                d = s(47765),
                u = s(35891),
                p = s(80249),
                _ = s(87050);
            let m = e => {
                    let {
                        fetchedUserInfo: t
                    } = (0, i.useContext)(u.cy), s = (0, r.jE)(), m = (0, d.aP)(), C = (0, l.k)({
                        queryKey: (0, n.Me)((0, c.j)()),
                        optimisticUpdateFn: (e, t) => {
                            if (e) return { ...e,
                                wishlistItemsCount: Math.max(0, e.wishlistItemsCount - 1),
                                wishlistItemIds: e.wishlistItemIds.filter(e => e !== t.externalId)
                            }
                        },
                        onSuccess: () => {
                            h(s), s.invalidateQueries({
                                queryKey: o.j
                            }), (0, p.yZ)(s, m), e ? .onSuccess ? .()
                        }
                    });
                    return (0, a.n)({
                        mutationKey: ["remove-from-wishlist"],
                        mutationFn: ({
                            sku: e
                        }) => t ? _.$y.removeFromWishlist(e) : Promise.reject("Cannot use useRemoveFromWishlist before fetching user info"),
                        ...C,
                        onMutate: t => (e ? .onMutate ? .(), C.onMutate(t))
                    })
                },
                h = e => {
                    let t = e.getQueriesData({
                        queryKey: o.j
                    });
                    if (0 === t.length) return;
                    let s = 0,
                        i = t[0][1],
                        r = i.pages ? .map(e => {
                            let t = s;
                            return s += e.items.length, { ...e,
                                limit: e.items.length,
                                offset: t
                            }
                        });
                    i.pages = r, e.setQueryData(o.j, i)
                }
        },
        11705: e => {
            e.exports = {
                wrapper: "ArtistInfoBoxes_wrapper__HgwGD",
                innerWrapper: "ArtistInfoBoxes_innerWrapper__CsCkq",
                box: "ArtistInfoBoxes_box__ar_tq",
                icon: "ArtistInfoBoxes_icon__0Wka_",
                label: "ArtistInfoBoxes_label__BoTO1"
            }
        },
        13308: (e, t, s) => {
            "use strict";
            s.d(t, {
                y: () => x
            });
            var i = s(37876),
                r = s(14232),
                a = s(51192),
                n = s(68873),
                o = s(27555),
                l = s(1121),
                c = s(82709),
                d = s.n(c);
            let u = ({
                assetLink: e,
                assetDescription: t,
                onClose: s,
                bottomSlot: r
            }) => (0, i.jsxs)(l.L, {
                className: d().inspirationPopup,
                dataTestId: "inspiration-popup",
                onClose: s,
                children: [(0, i.jsx)("img", {
                    alt: t || "inspiration image",
                    className: d().inspirationPopupImage,
                    src: e
                }), r]
            });
            var p = s(34026),
                _ = s(39313),
                m = s(30305),
                h = s(10769),
                C = s(36256),
                g = s(13944);
            let x = ({
                inspirations: e,
                title: t,
                hasSeAllButton: s = !0,
                lazyLoad: l = !0
            }) => {
                let {
                    displayModal: c,
                    closeModal: x
                } = (0, p.A)(), w = e => (0, i.jsx)(C.$n, {
                    asChild: !0,
                    onClick: () => (0, a.O)({
                        elementId: "see_all_inspirations_button",
                        elementVariant: e
                    }),
                    children: (0, i.jsx)(o.A, {
                        routeInfo: (0, g.FW)(),
                        children: "See all inspirations"
                    })
                }), j = (0, r.useRef)(null);
                return ((0, _.P)(j, {
                    once: !0,
                    delay: 500,
                    callback: () => (0, n.Z)({
                        elementId: "inspirations_section",
                        elementVariant: "none"
                    })
                }), 0 === e.length) ? null : (0, i.jsxs)("div", {
                    className: d().container,
                    "data-testid": "inspirations-container",
                    ref: j,
                    children: [(0, i.jsx)("h2", {
                        className: "text-display-sm uppercase font-display text-center",
                        children: t ? ? "Displates in your awesome spaces"
                    }), (0, i.jsx)("div", {
                        className: d().inspirationsMasonry,
                        children: e.map(({
                            uniqueId: e,
                            assetLink: t,
                            assetDescription: s
                        }) => (0, i.jsx)("button", {
                            className: d().inspirationItem,
                            onClick: () => {
                                (0, a.O)({
                                    elementId: "inspiration_card",
                                    elementVariant: e
                                }), c((0, i.jsx)(u, {
                                    assetDescription: s,
                                    assetLink: t,
                                    bottomSlot: w("popup"),
                                    onClose: x
                                }))
                            },
                            type: "button",
                            children: (0, i.jsxs)("picture", {
                                children: [(0, i.jsx)("source", {
                                    sizes: (0, h.ZX)({
                                        assetPath: t,
                                        widths: [360, 720]
                                    }).sizes,
                                    srcSet: (0, h.ZX)({
                                        assetPath: t,
                                        widths: [360, 720]
                                    }).srcSet
                                }), (0, i.jsx)("source", {
                                    media: `(min-width: ${m.D.xl3}px)`,
                                    sizes: (0, h.ZX)({
                                        assetPath: t,
                                        widths: [400, 800]
                                    }).sizes,
                                    srcSet: (0, h.ZX)({
                                        assetPath: t,
                                        widths: [400, 800]
                                    }).srcSet
                                }), (0, i.jsx)("img", {
                                    alt: s || "inspiration image",
                                    className: d().inspirationImage,
                                    loading: l ? "lazy" : "eager",
                                    src: (0, h.ZX)({
                                        assetPath: t,
                                        speedsize: {
                                            width: 360
                                        }
                                    }).src
                                })]
                            })
                        }, `${e}-${t}`))
                    }), s ? w("widget") : null]
                })
            }
        },
        14399: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a,
                Op: () => n,
                _V: () => o
            });
            var i = s(84810),
                r = s(10769);
            let a = (e, t, s) => e ? t ? o(e, s) : n(e, s) : {
                    src: "",
                    srcSet: "",
                    widthsSrc: []
                },
                n = (e, t) => e ? (0, r.ZX)({
                    assetPath: e,
                    assetSubPath: "avatars",
                    assetDomain: i.ConfigPublic.ArtworkDomain,
                    widths: t
                }) : {
                    src: "",
                    srcSet: "",
                    widthsSrc: []
                },
                o = (e, t) => e ? (0, r.ZX)({
                    assetPath: e,
                    assetSubPath: "brand/layout",
                    assetDomain: i.ConfigPublic.ArtworkDomain,
                    widths: t
                }) : {
                    src: "",
                    srcSet: "",
                    widthsSrc: []
                }
        },
        15874: (e, t, s) => {
            "use strict";
            s.d(t, {
                z: () => r
            });
            var i = s(22884);
            let r = e => {
                (0, i.u)({
                    event: "view_promotion",
                    ecommerce: e
                })
            }
        },
        17220: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                InstructionVideoSectionWithForYouDrawer: () => c
            });
            var i = s(37876),
                r = s(14232),
                a = s(85314),
                n = s(88308),
                o = s(1833),
                l = s(73480);
            let c = () => {
                let e = (0, o.o)(e => e.isDrawerOpen),
                    t = (0, o.o)(e => e.setIsDrawerOpen),
                    {
                        shouldShowDrawer: s,
                        shouldImmediatelyShowDrawer: c
                    } = (0, l.Q)();
                return (0, r.useEffect)(() => {
                    c && t(!0)
                }, [c, t]), (0, i.jsx)(a.z, {
                    bottomSlot: e ? (0, i.jsx)(n.a, {}) : null,
                    onViewportEnter: () => {
                        s && t(!0)
                    }
                })
            }
        },
        18120: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => r.$,
                L: () => i.L
            });
            var i = s(68620),
                r = s(99094)
        },
        20147: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => r
            });
            var i = s(22884);
            let r = e => {
                (0, i.u)({
                    event: "select_promotion",
                    ecommerce: e
                })
            }
        },
        22449: e => {
            e.exports = {
                title: "BrowseVerifiedCreatorsPage_title__Yrvsj",
                uspSection: "BrowseVerifiedCreatorsPage_uspSection___P0CG",
                inspirationsSection: "BrowseVerifiedCreatorsPage_inspirationsSection__OMP6T",
                newsletterSection: "BrowseVerifiedCreatorsPage_newsletterSection__P7fDZ"
            }
        },
        24297: (e, t, s) => {
            "use strict";
            s.d(t, {
                j: () => i
            }), s(87050);
            let i = ["wishlist"]
        },
        26055: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => C
            });
            var i = s(37876),
                r = s(14232),
                a = s(20147),
                n = s(15874),
                o = s(71697),
                l = s(27555),
                c = s(14399),
                d = s(39313),
                u = s(10769),
                p = s(14619),
                _ = s(91680),
                m = s(33561),
                h = s.n(m);
            let C = ({
                artistItem: e,
                trackingMetadata: t,
                className: s
            }) => {
                let m = (0, c.Op)(e.avatarCoreUrl, [80, 160]),
                    C = (0, r.useRef)(null),
                    g = e.artworks.slice(0, 3);
                return (0, d.P)(C, {
                    once: !0,
                    threshold: .5,
                    delay: 1e3,
                    callback: () => (0, n.z)(t)
                }), (0, i.jsx)("div", {
                    className: (0, p.cn)(h().container, s),
                    ref: C,
                    children: (0, i.jsxs)(l.A, {
                        onClick: () => {
                            (0, a.$)(t)
                        },
                        routeInfo: (0, _.bo)({
                            nick: e.nick,
                            licensed: e.isLicensed
                        }),
                        children: [(0, i.jsx)("div", {
                            className: h().imagesContainer,
                            children: g.map((t, s) => (0, i.jsx)("div", {
                                className: h().artworkContainer,
                                children: (0, i.jsx)("img", {
                                    alt: `${e.displayName} artwork`,
                                    className: h().artworkImage,
                                    loading: "lazy",
                                    src: (0, u.al)(t.imageCoreUrl, {
                                        resolution: o.cc.rect.rect380x270,
                                        orientation: t.orientation
                                    })
                                })
                            }, s))
                        }), (0, i.jsx)("div", {
                            className: h().descriptionContainer,
                            children: (0, i.jsxs)("div", {
                                className: h().brandInfoContainer,
                                children: [(0, i.jsx)("div", {
                                    className: h().brandLink,
                                    children: (0, i.jsx)("img", {
                                        alt: e.displayName,
                                        className: h().brandAvatarImage,
                                        loading: "lazy",
                                        sizes: m.sizes,
                                        src: m.widthsSrc[0],
                                        srcSet: m.srcSet
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: h().brandDescLink,
                                    children: [(0, i.jsx)("p", {
                                        className: h().brandTitle,
                                        children: e.displayName
                                    }), e.artworksCount ? (0, i.jsxs)("p", {
                                        className: h().brandText,
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
        48607: e => {
            e.exports = {
                header: "ArtistOriginHeader_header__GP7LL",
                imageWrapper: "ArtistOriginHeader_imageWrapper__gR_F6",
                wrapper: "ArtistOriginHeader_wrapper__0pPXY",
                image: "ArtistOriginHeader_image__Zry0B",
                video: "ArtistOriginHeader_video__dXQfn",
                content: "ArtistOriginHeader_content__f12g4",
                badge: "ArtistOriginHeader_badge__tefG1",
                badgeIcon: "ArtistOriginHeader_badgeIcon__FS462",
                title: "ArtistOriginHeader_title__1Vzli",
                text: "ArtistOriginHeader_text__xUzCa"
            }
        },
        51626: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: () => G,
                default: () => W
            });
            var i = s(37876),
                r = s(77328),
                a = s.n(r),
                n = s(89099),
                o = s(15657),
                l = s(84810),
                c = s(77518),
                d = s(14232),
                u = s(13308),
                p = s(17220),
                _ = s(16373),
                m = s(77128),
                h = s(11705),
                C = s.n(h);
            let g = [{
                    icon: (0, i.jsx)(m.A, {
                        className: C().icon
                    }),
                    label: "Skills & Artistry"
                }, {
                    icon: (0, i.jsx)(e => (0, i.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        ...e,
                        children: [(0, i.jsx)("path", {
                            d: "M36.9414 0C38.6306 0 40 1.36941 40 3.05859V36.9414C40 38.6306 38.6306 40 36.9414 40H3.05859C1.36941 40 0 38.6306 0 36.9414V3.05859C0 1.36941 1.36941 0 3.05859 0H36.9414ZM16.6934 3.6875C17.9224 7.56543 18.0048 10.9525 12.2158 16.4619C12.2158 16.4619 6.89335 20.2604 6.97363 26.8418C7.06036 33.9294 13.7567 37.9405 20.2158 37.7695C27.2622 37.5828 33.1501 32.72 32.9658 25.9834C32.8505 21.7705 31.9202 18.7465 27.8379 14.9014C27.6984 16.3518 26.9445 17.0774 25.5498 17.4121C26.2613 10.2642 24.5324 7.21066 16.6934 3.6875Z",
                            fill: "#F4F2EB"
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20.0483 38.4279V38.4217L20.0809 38.3923C22.5445 36.168 28.4407 30.8449 28.4407 27.3038C28.4407 24.3172 26.1275 22.6641 24.3067 22.6641C22.4859 22.6641 20.5502 24.1588 20.0454 26.04C19.5406 24.1588 17.609 22.6641 15.7824 22.6641C13.9558 22.6641 11.6484 24.3168 11.6484 27.3038C11.6484 30.8449 17.5446 36.168 20.0083 38.3923L20.0408 38.4217V38.4279C20.0425 38.4267 20.0454 38.425 20.0454 38.425L20.0483 38.4279Z",
                            fill: "#F4F2EB"
                        })]
                    }), {
                        className: C().icon
                    }),
                    label: "Original Designs"
                }, {
                    icon: (0, i.jsx)(e => (0, i.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        ...e,
                        children: [(0, i.jsx)("g", {
                            clipPath: "url(#clip0_7321_38767)",
                            children: (0, i.jsx)("path", {
                                d: "M0 31.3535C0.93505 32.8166 2.11151 34.2919 3.51074 35.6904C3.78848 35.9682 4.06961 36.2377 4.35254 36.4961C4.46676 36.6022 4.58301 36.7084 4.7002 36.8115C4.82794 36.9229 4.95722 37.0344 5.08496 37.1436C5.09823 37.1597 5.11173 37.1706 5.125 37.1816C5.25349 37.2908 5.38495 37.3967 5.5127 37.5029C5.64931 37.615 5.78499 37.7239 5.92383 37.833C6.46298 38.2608 7.00475 38.6523 7.54688 39.0088C7.56099 39.0199 7.57448 39.0289 7.59082 39.0371C7.85505 39.2145 8.11858 39.38 8.38281 39.5381C8.48381 39.5975 8.58455 39.6577 8.68555 39.7148C8.85391 39.8105 9.02305 39.9054 9.19141 39.9951L9.19922 40H2.24219C1.00417 39.9999 5.50183e-06 38.9966 0 37.7578V31.3535ZM37.7598 0C38.9978 0 40.0019 1.00338 40.002 2.24219V37.7578C40.0019 38.9959 38.9986 40 37.7598 40H30.9248C31.1168 39.7022 31.1395 39.3104 30.9502 38.9824C30.6807 38.5156 30.0841 38.3557 29.6172 38.625C29.1502 38.8946 28.9902 39.492 29.2598 39.959C29.2679 39.9731 29.2774 39.9864 29.2861 40H21.8145C21.8523 39.9555 21.8921 39.9112 21.9277 39.8652C21.9953 39.7814 22.06 39.6962 22.1201 39.6064C22.1223 39.6064 22.1231 39.6045 22.126 39.6016C22.1861 39.517 22.2427 39.4296 22.2969 39.3398C22.3028 39.3346 22.3056 39.3284 22.3086 39.3232C22.3494 39.258 22.3899 39.1903 22.4277 39.1221C22.4901 39.0136 22.5473 38.9044 22.6045 38.79C22.1173 39.0247 21.5946 39.1991 21.0361 39.3164C20.2742 39.4746 19.4538 39.523 18.5879 39.4658C18.5931 39.4555 18.5964 39.4475 18.6016 39.4365H18.5967C18.5937 39.4468 18.5901 39.4547 18.585 39.4658C17.9152 39.422 17.2204 39.3161 16.5068 39.1445C15.6543 38.9433 14.777 38.654 13.8896 38.2812C12.5143 37.7012 11.1174 36.9229 9.74805 35.9561C9.62339 35.8663 9.49482 35.7744 9.36719 35.6816C9.23956 35.5896 9.11174 35.4934 8.98633 35.3984C8.96491 35.3851 8.94523 35.3688 8.92383 35.3525C8.81763 35.2708 8.71069 35.1892 8.60449 35.1045C8.59426 35.0993 8.58618 35.0911 8.5752 35.083C8.46086 34.9902 8.34383 34.8968 8.22949 34.8018C7.96806 34.5864 7.70642 34.3654 7.4502 34.1396C7.43689 34.1286 7.4232 34.1178 7.41211 34.1045C7.14254 33.8646 6.87863 33.6194 6.61426 33.3662C6.59801 33.3529 6.58362 33.3385 6.57031 33.3252C6.45389 33.214 6.33982 33.0996 6.22266 32.9824C2.63619 29.396 0.440863 25.4008 0.321289 22.6855C2.97639 22.604 6.63438 24.2871 9.97266 27.2822C7.38599 28.4341 5.49867 27.709 3.71777 26.4131C3.72172 26.4268 4.4844 29.078 7.2793 31.9248C7.32009 31.9678 7.36054 32.009 7.4043 32.0527C7.89745 32.5451 8.372 32.9758 8.81836 33.3486C8.94602 33.4548 9.07155 33.5609 9.19922 33.6641C9.20435 33.667 9.20992 33.6697 9.21289 33.6748C11.1876 35.2456 12.56 35.7055 12.5703 35.709C10.7383 33.4439 10.9365 31.5836 12.2139 29.5605C14.5993 32.3107 16.091 35.2496 16.4424 37.6484C17.292 37.8995 18.1196 38.0632 18.915 38.1338C19.2039 35.2469 17.3628 31.0853 13.9561 27.3027C14.3073 26.8995 14.6828 26.4827 15.0801 26.0498C15.2679 25.8456 15.4612 25.6362 15.6572 25.4209C19.4346 29.5763 21.425 34.3557 21.1992 38.084C21.8662 37.9837 22.4936 37.8008 23.0625 37.5312C24.0643 33.624 22.0432 28.0005 17.6592 23.2266C20.3272 20.2921 22.9684 17.3652 23.0068 17.333L22.3916 16.7939C22.3755 16.8087 19.8268 19.1483 16.5693 22.1016C10.9486 16.6316 3.96622 14.4924 0.000976562 16.8223V2.24219C0.000982477 1.00412 1.0051 0 2.24316 0H37.7598ZM25.5322 25.2217L23.7432 26.7617L26.0635 27.2021L27.6035 28.9912L28.0439 26.6709L29.833 25.1309L27.5127 24.6904L25.9727 22.9014L25.5322 25.2217ZM0.000976562 18.1416C4.01893 17.3537 9.65853 19.5555 14.3701 24.0918C14.1333 24.3071 13.896 24.522 13.6562 24.7373C13.2367 25.116 12.8335 25.4546 12.4443 25.7539C8.51995 22.0204 4.08335 19.9796 1.05762 20.293L0.902344 20.3115C0.583773 20.3524 0.283165 20.423 0.000976562 20.5195V18.1416ZM35.8594 22.7373C35.5898 22.2704 34.9923 22.1103 34.5254 22.3799C34.0586 22.6495 33.8984 23.247 34.168 23.7139C34.4376 24.1807 35.0351 24.3407 35.502 24.0713C35.9689 23.8017 36.1289 23.2042 35.8594 22.7373ZM27.0039 15.8008L30.2148 19.0127V19.0117L31.0527 17.8945C31.0506 17.8826 30.2715 13.4819 30.6895 12.1152L27.0039 15.8008ZM36.7676 4.36328C36.7391 4.34701 34.6976 3.18939 32.8398 4.38184C30.9691 5.58197 28.8758 7.22962 27.8145 8.01172C26.7544 8.79209 22.0728 8.12466 22.0615 8.12305L20.4707 9.43555L24.6309 13.5957L22.2568 13.2324L21.5127 13.9775L24.332 16.7979H24.333L36.7676 4.36328ZM14.6016 11.6182C14.063 11.6397 13.6438 12.0933 13.665 12.6318C13.6864 13.1706 14.1409 13.5907 14.6797 13.5693C15.2183 13.5477 15.6376 13.0933 15.6162 12.5547C15.5948 12.0159 15.1403 11.5968 14.6016 11.6182ZM10.916 5.76758L8.61523 6.29883L10.4639 7.76758L10.9961 10.0674L12.4639 8.21875L14.7646 7.6875L12.916 6.21875L12.3848 3.91895L10.916 5.76758ZM6.4248 4.72461C5.88604 4.74599 5.4669 5.20049 5.48828 5.73926C5.50977 6.27785 5.96335 6.69704 6.50195 6.67578C7.04055 6.65441 7.46055 6.20066 7.43945 5.66211C7.41807 5.12337 6.96354 4.70327 6.4248 4.72461Z",
                                fill: "#F4F2EB"
                            })
                        }), (0, i.jsx)("defs", {
                            children: (0, i.jsx)("clipPath", {
                                id: "clip0_7321_38767",
                                children: (0, i.jsx)("rect", {
                                    width: 40,
                                    height: 40,
                                    rx: 2.49071,
                                    fill: "white"
                                })
                            })
                        })]
                    }), {
                        className: C().icon
                    }),
                    label: "Unique styles"
                }],
                x = () => (0, i.jsx)("div", {
                    className: C().wrapper,
                    "data-testid": "artist-info-boxes",
                    children: (0, i.jsx)("div", {
                        className: C().innerWrapper,
                        children: g.map(({
                            icon: e,
                            label: t
                        }, s) => (0, i.jsxs)("div", {
                            className: C().box,
                            children: [e, (0, i.jsx)("span", {
                                className: C().label,
                                children: t
                            })]
                        }, s))
                    })
                });
            var w = s(96557),
                j = s(27555),
                v = s(30983),
                f = s(30305),
                I = s(67076),
                L = s(10769),
                b = s(36256);
            let y = "verified-creators-grid";
            var A = s(7234),
                N = s(48607),
                S = s.n(N);
            let T = () => {
                    let e = document.getElementById(y);
                    e && e.scrollIntoView({
                        behavior: "smooth"
                    })
                },
                D = () => {
                    let e = (0, d.useRef)(null),
                        t = (0, w.Ub)({
                            maxWidth: f.D.xs - 1
                        }),
                        [s, r] = (0, d.useState)(""),
                        a = (0, L.v9)({
                            assetPath: "/images/browse-original-artists/artist_origin_d_placeholder.jpg",
                            widths: [1920, 3840]
                        }),
                        n = (0, L.v9)({
                            assetPath: "/images/browse-original-artists/artist_origin_m_placeholder.jpg",
                            widths: [768, 1536]
                        });
                    return (0, d.useEffect)(() => {
                        t ? r("artist_origin_banner_m.mp4") : r("artist_origin_banner_d.mp4")
                    }, [t]), (0, i.jsxs)("header", {
                        className: S().header,
                        children: [(0, i.jsx)("div", {
                            className: S().imageWrapper,
                            children: (0, i.jsxs)("picture", {
                                children: [(0, i.jsx)("source", {
                                    media: "(max-width: 479px)",
                                    sizes: n.sizes,
                                    srcSet: n.srcSet
                                }), (0, i.jsx)("img", {
                                    alt: "Artist painting picture",
                                    className: S().image,
                                    sizes: a.sizes,
                                    src: a.src,
                                    srcSet: a.srcSet
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: S().wrapper,
                            children: (0, i.jsx)(v.A, {
                                autoPlay: !0,
                                className: S().video,
                                desktopSize: {
                                    width: 2560
                                },
                                loop: !0,
                                muted: !0,
                                ref: e,
                                src: s
                            })
                        }), (0, i.jsxs)("div", {
                            className: S().content,
                            children: [(0, i.jsx)("div", {
                                className: S().badge,
                                children: (0, i.jsx)(I.A, {
                                    className: S().badgeIcon
                                })
                            }), (0, i.jsx)("h1", {
                                className: S().title,
                                children: "Where Creativity Shines"
                            }), (0, i.jsxs)("p", {
                                className: S().text,
                                children: ["Style, craft, vision. Find Displates from ", (0, i.jsx)("br", {}), " recognized artists, illustrators, and designers."]
                            }), (0, i.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, i.jsx)(b.$n, {
                                    asChild: !0,
                                    "data-testid": "artist-origin-header-see-designs-button",
                                    size: "lg",
                                    variant: "secondaryLightOutline",
                                    children: (0, i.jsx)(j.A, {
                                        routeInfo: (0, A.cT)({
                                            query: {
                                                q: "verified creators"
                                            }
                                        }),
                                        children: "See designs"
                                    })
                                }), (0, i.jsx)(b.$n, {
                                    "data-testid": "artist-origin-header-explore-button",
                                    onClick: T,
                                    size: "lg",
                                    variant: "primary",
                                    children: "Explore"
                                })]
                            })]
                        })]
                    })
                };
            var O = s(26055),
                P = s(3625),
                k = s(82378),
                E = s(67847),
                M = s.n(E);
            let F = ({
                data: e
            }) => {
                let t = (0, n.useRouter)();
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: M().container,
                        id: y,
                        children: e.artists.map((e, t) => (0, i.jsx)(O.A, {
                            artistItem: e,
                            trackingMetadata: {
                                promotion_id: `original_artist|all_original_artists|${e.authorId}`,
                                promotion_name: e.displayName,
                                promotion_type: "original_artist",
                                creative_name: e.avatarCoreUrl,
                                creative_slot: `original_artist_grid|${t+1}`
                            }
                        }, e.authorId))
                    }), (0, i.jsx)("div", {
                        className: M().pagination,
                        children: (0, i.jsx)(P.d, {
                            allowedQueryParams: (0, P.f)(t.query, k.oQ),
                            pageCount: Math.ceil(e.totalCount / 30)
                        }, e.totalCount)
                    })]
                })
            };
            var V = s(55169),
                R = s(22449),
                Z = s.n(R);
            let z = ({
                data: e,
                showHeader: t
            }) => {
                let {
                    track: s
                } = (0, _.z)();
                return (0, d.useEffect)(() => {
                    s()
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [t ? (0, i.jsx)(D, {}) : null, t ? (0, i.jsx)(x, {}) : null, (0, i.jsxs)("h2", {
                        className: Z().title,
                        children: ["Discover the ", (0, i.jsx)("br", {}), " Verified Creators"]
                    }), (0, i.jsx)(F, {
                        data: e
                    }), (0, i.jsx)("div", {
                        className: Z().uspSection,
                        children: (0, i.jsx)(p.InstructionVideoSectionWithForYouDrawer, {})
                    }), (0, i.jsx)("div", {
                        className: Z().inspirationsSection,
                        children: (0, i.jsx)(u.y, {
                            inspirations: e.inspirations,
                            title: "Get inspired by our community"
                        })
                    }), (0, i.jsx)(V.Newsletter, {
                        className: Z().newsletterSection
                    })]
                })
            };
            var B = s(51622),
                H = s(25282);
            let U = ({
                header: e,
                data: t,
                showHeader: s
            }) => {
                let {
                    asPath: r
                } = (0, n.useRouter)(), c = B.t3.defaultMeta, d = {
                    webpage: {
                        h1: c.title,
                        url: (0, B.zq)({
                            absolute: !0
                        }).route,
                        description: c.description,
                        imageOfPage: c.coverImage
                    }
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a(), {
                        children: (0, i.jsx)("link", {
                            href: l.ConfigPublic.AppUrl + r,
                            rel: "canonical"
                        })
                    }), (0, i.jsx)(o.F, {
                        ldJsonParams: d,
                        pageMeta: c
                    }), (0, i.jsx)(H.O, {
                        headerData: e,
                        children: (0, i.jsx)(z, {
                            data: t,
                            showHeader: s
                        })
                    })]
                })
            };
            U.getLayout = function(e) {
                return (0, i.jsx)(c.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            };
            let W = U;
            var G = !0
        },
        67076: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => r
            });
            var i = s(37876);
            let r = e => (0, i.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.63935 1.41806L11.745 0.930014L12.5423 2.95305L14.6322 3.5065L14.4044 5.67125L16 7.13935L14.7999 8.94983L15.5347 10.9967L13.6371 12.0377L13.344 14.1945L11.1833 14.2277L9.92856 16L8 15.018L6.07144 16L4.81672 14.2277L2.65601 14.1945L2.36287 12.0377L0.465294 10.9967L1.20012 8.94983L0 7.13935L1.59557 5.67125L1.36785 3.5065L3.45773 2.95305L4.25503 0.930014L6.36065 1.41806L8 0L9.63935 1.41806ZM11.1449 5.7644C11.0136 5.64972 10.8146 5.66382 10.7008 5.79611L7.27747 9.7753L5.27808 7.88654C5.15127 7.76677 4.95187 7.7732 4.83295 7.9009C4.71407 8.02865 4.72045 8.22952 4.84722 8.34931L7.08564 10.4635C7.14808 10.5225 7.23184 10.5532 7.31731 10.5487C7.40281 10.5443 7.48306 10.5049 7.53913 10.4397L11.1764 6.21182C11.2902 6.07951 11.2762 5.87912 11.1449 5.7644Z",
                    fill: "url(#paint0_linear_7486_44158)"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: "paint0_linear_7486_44158",
                        x1: -.0590224,
                        y1: 0,
                        x2: 16.1764,
                        y2: 16.1166,
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#EA0307"
                        }), (0, i.jsx)("stop", {
                            offset: .5,
                            stopColor: "#F429FF"
                        }), (0, i.jsx)("stop", {
                            offset: 1,
                            stopColor: "#FF7B00"
                        })]
                    })
                })]
            })
        },
        67847: e => {
            e.exports = {
                container: "OriginalArtistGrid_container__KhDKO",
                pagination: "OriginalArtistGrid_pagination__IHaVr"
            }
        },
        72318: (e, t, s) => {
            "use strict";
            s.d(t, {
                m: () => i
            });
            let i = (e, t) => {
                Promise.all([s.e(3080), s.e(9027)]).then(s.bind(s, 59027)).then(({
                    isInitialized: s,
                    logCustomEvent: i
                }) => {
                    s() && i(e, t)
                })
            }
        },
        72369: (e, t, s) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/browse-verified-creators", function() {
                return s(51626)
            }])
        },
        77328: (e, t, s) => {
            e.exports = s(88022)
        },
        80249: (e, t, s) => {
            "use strict";
            s.d(t, {
                Dl: () => u,
                yZ: () => d
            });
            var i = s(14232),
                r = s(74359),
                a = s(98461),
                n = s(83736),
                o = s(35891),
                l = s(4186),
                c = s(87050);
            let d = (e, t) => {
                    t.readableName !== l.J.readableName && e.invalidateQueries({
                        queryKey: ["posters", "recommended", c.ao.FOR_YOU]
                    })
                },
                u = (e, t, s) => {
                    let {
                        fetchedUserInfo: l
                    } = (0, i.useContext)(o.cy);
                    return (0, r.I)({
                        queryKey: ["posters", "recommended", c.ao.FOR_YOU, n.s, e || 1],
                        queryFn: () => c.$y.getForYouPosters((0, a.R)() || "", e, t, s),
                        retry: !1,
                        enabled: l
                    })
                }
        },
        81291: (e, t, s) => {
            "use strict";
            s.d(t, {
                k: () => r
            });
            var i = s(67768);
            let r = ({
                queryKey: e,
                optimisticUpdateFn: t,
                onError: s,
                onSuccess: r
            }) => {
                let a = (0, i.jE)();
                return {
                    onMutate: async s => {
                        await a.cancelQueries({
                            queryKey: e
                        });
                        let i = a.getQueryData(e),
                            r = t(i, s);
                        return r && a.setQueryData(e, r), {
                            previousData: i
                        }
                    },
                    onError: (t, i, r) => {
                        s ? .(t, i, r), r && "object" == typeof r && "previousData" in r && void 0 !== r.previousData && a.setQueryData(e, r.previousData)
                    },
                    onSuccess: (t, s, i) => {
                        r ? .(t, s, i), a.invalidateQueries({
                            queryKey: e
                        })
                    }
                }
            }
        },
        82709: e => {
            e.exports = {
                container: "Inspirations_container___kYZ4",
                inspirationsMasonry: "Inspirations_inspirationsMasonry__g3xcG",
                inspirationItem: "Inspirations_inspirationItem__Q_PI1",
                inspirationImage: "Inspirations_inspirationImage__QlgUC",
                inspirationPopup: "Inspirations_inspirationPopup__45Ozl",
                inspirationPopupImage: "Inspirations_inspirationPopupImage__j56ex"
            }
        },
        87477: (e, t, s) => {
            "use strict";
            s.d(t, {
                _: () => S
            });
            var i, r = s(37876),
                a = s(14232),
                n = s(13327),
                o = s(46734),
                l = s(89099),
                c = s(27555),
                d = s(34026),
                u = s(90508),
                p = s(67768),
                _ = s(40097),
                m = s(97160),
                h = s(72318),
                C = s(87973),
                g = s(24297),
                x = s(81291),
                w = s(16903),
                j = s(47765),
                v = s(35891),
                f = s(80249),
                I = s(87050),
                L = s(2749),
                b = s(54111),
                y = s(36256),
                A = s(91444),
                N = ((i = N || {}).ADDING = "ADDING", i.REMOVING = "REMOVING", i.IDLE = "IDLE", i);
            let S = ({
                externalId: e,
                sku: t,
                onAddToWishlist: i,
                onRemoveFromWishlist: N,
                className: S,
                showToast: T = !0,
                disableAllNotifications: D = !1,
                size: O = "lg",
                ref: P
            }) => {
                let {
                    enqueueToast: k
                } = (0, y.oS)(), {
                    displayModal: E
                } = (0, d.A)(), {
                    userInfo: M,
                    hasFeatureAccess: F
                } = (0, a.useContext)(v.cy), V = (0, l.useRouter)(), R = window.location.origin + V.asPath, Z = M ? .account.isUserLoggedIn, {
                    mutate: z
                } = (e => {
                    let {
                        fetchedUserInfo: t,
                        fetchUserInfo: s
                    } = (0, a.useContext)(v.cy), i = (0, p.jE)(), r = (0, j.aP)(), n = (0, x.k)({
                        queryKey: (0, C.Me)((0, w.j)()),
                        optimisticUpdateFn: (e, t) => {
                            if (e) return { ...e,
                                wishlistItemsCount: e.wishlistItemsCount + 1,
                                wishlistItemIds: [...e.wishlistItemIds, t.externalId]
                            }
                        },
                        onSuccess: (t, a, n) => {
                            var o;
                            let l;
                            i.invalidateQueries({
                                queryKey: g.j
                            }), (0, f.yZ)(i, r), o = a.sku, l = m.SR.fromCode(o), (0, h.m)("artwork_added_to_wishlist", {
                                sku: o,
                                internalId: l.variant.code
                            }), s(), e ? .onSuccess ? .(t, a, n)
                        }
                    });
                    return (0, _.n)({
                        mutationKey: ["add-to-wishlist"],
                        mutationFn: ({
                            sku: e
                        }) => t ? I.$y.addToWishlistV3("0", {
                            sku: e
                        }) : Promise.reject("Cannot use useAddToWishlist before fetching user info"),
                        ...n
                    })
                })({
                    onSuccess: async () => {
                        if (i ? .(), !D) {
                            if (F("collectorSpaceFreeAccess") || F("collectorSpacePremium")) {
                                let {
                                    PopupAddToSets: i
                                } = await Promise.all([s.e(5412), s.e(9440), s.e(8992), s.e(3834), s.e(1667)]).then(s.bind(s, 13834));
                                E((0, r.jsx)(i, {
                                    externalId: e,
                                    sku: t,
                                    stage: u.i.EDIT,
                                    triggerSource: u.H.ADD_TO_SET_BUTTON
                                }))
                            } else if (T) {
                                let e = Z ? (0, A.x)() : (0, b.NW)({
                                        query: {
                                            redirectUrl: R
                                        }
                                    }),
                                    t = Z ? "Show" : "Sign up & keep it";
                                k({
                                    actionAltText: t,
                                    actionSlot: (0, r.jsx)(y.$n, {
                                        asChild: !0,
                                        size: "sm",
                                        variant: "secondaryDarkOutline",
                                        children: (0, r.jsx)(c.A, {
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
                } = (0, L.j)({
                    onSuccess: N
                }), [H, U] = (0, a.useState)("IDLE"), {
                    data: W,
                    isLoading: G
                } = (0, C._v)({
                    select: e => e.wishlistItemIds
                }), $ = W ? .some(t => t === e), q = $ && !G, Q = (q || "ADDING" === H) && "REMOVING" !== H, K = async () => {
                    if ($)
                        if (U("REMOVING"), F("collectorSpaceFreeAccess") || F("collectorSpacePremium") && !D) {
                            let {
                                PopupAddToSets: i
                            } = await Promise.all([s.e(5412), s.e(9440), s.e(8992), s.e(3834), s.e(1667)]).then(s.bind(s, 13834));
                            E((0, r.jsx)(i, {
                                externalId: e,
                                sku: t,
                                stage: u.i.EDIT,
                                triggerSource: u.H.REMOVE_FROM_WISHLIST_BUTTON
                            }))
                        } else B({
                            sku: t,
                            externalId: e
                        });
                    else U("ADDING"), z({
                        sku: t,
                        externalId: e
                    });
                    setTimeout(() => {
                        U("IDLE")
                    }, 2e3)
                };
                (0, a.useImperativeHandle)(P, () => ({
                    trigger: K
                }));
                let X = async e => {
                    e.preventDefault(), e.stopPropagation(), await K()
                };
                return (0, r.jsx)(y.ff, {
                    "aria-label": q ? "Remove from wishlist" : "Add to wishlist",
                    className: S,
                    "data-in-wishlist": Q ? "true" : void 0,
                    "data-testid": "wishlist-icon-container",
                    icon: Q ? (0, r.jsx)(o.A, {
                        className: "text-blue-300"
                    }) : (0, r.jsx)(n.A, {}),
                    onClick: X,
                    size: O,
                    variant: "glass"
                })
            };
            S.displayName = "WishlistButton"
        },
        90508: (e, t, s) => {
            "use strict";
            s.d(t, {
                H: () => n,
                i: () => a
            });
            var i, r, a = ((i = {}).EDIT = "edit", i.CREATE = "create", i.REMOVE = "remove", i),
                n = ((r = {}).CREATE_SET_BUTTON = "create_set_button", r.ADD_TO_SET_BUTTON = "add_to_set_button", r.REMOVE_FROM_WISHLIST_BUTTON = "remove_from_wishlist_button", r.ADD_TO_SET_COLLECTED_ARTWORK_BUTTON = "add_to_set_collected_artwork_button", r)
        },
        94392: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => r
            });
            var i = s(14232);
            let r = i.forwardRef(function({
                title: e,
                titleId: t,
                ...s
            }, r) {
                return i.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: r,
                    "aria-labelledby": t
                }, s), e ? i.createElement("title", {
                    id: t
                }, e) : null, i.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
                    clipRule: "evenodd"
                }))
            })
        },
        99094: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => o
            });
            var i = s(14232),
                r = s(39313),
                a = s(27745),
                n = s(68017);
            let o = ({
                ref: e,
                message: t,
                delay: s,
                threshold: o,
                initialOnHold: l = !1
            }) => {
                let c = (0, a.a)(),
                    [d, u] = (0, i.useState)(l);
                return (0, r.P)(e, {
                    threshold: o || .5,
                    delay: s ? ? 1e3,
                    callback: () => {
                        c && (0, n.X)(t) && c.postMessage(t)
                    },
                    once: !0,
                    onHold: d
                }), {
                    onHold: d,
                    setOnHold: u
                }
            }
        }
    },
    e => {
        e.O(0, [4024, 2183, 1353, 5706, 9658, 3915, 5657, 8308, 8223, 636, 6593, 8792], () => e(e.s = 72369)), _N_E = e.O()
    }
]);
//#
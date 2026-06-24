(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5257], {
        827: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => u
            });
            var s = a(37876),
                n = a(69241),
                r = a(27555),
                i = a(14399),
                l = a(10769),
                o = a(91680),
                c = a(42957),
                d = a.n(c);
            let u = ({
                author: e,
                className: t,
                imageClassName: a,
                showName: c = !1,
                onClick: u
            }) => {
                let p = {
                        nick: e.isLicensed ? e.slug : e.nick,
                        licensed: e.isLicensed
                    },
                    m = "avatarUrl" in e ? (0, l.ZX)({
                        assetPath: e.avatarUrl,
                        widths: [80, 160]
                    }) : (0, i.A)(e.avatarCoreUrl, e.isLicensed, [80, 160]);
                return (0, s.jsxs)(r.A, {
                    className: (0, n.A)(d().container, t),
                    "data-testid": "avatar",
                    onClick: () => u && u((0, o.bo)({ ...p,
                        absolute: !0
                    }).route),
                    routeInfo: (0, o.bo)(p),
                    children: [(0, s.jsx)("div", {
                        className: (0, n.A)(d().imageWrapper, a),
                        "data-testid": "avatar-image",
                        children: (0, s.jsx)("img", {
                            alt: `${e.name} avatar`,
                            className: d().image,
                            loading: "lazy",
                            sizes: m.sizes,
                            src: m.src,
                            srcSet: m.srcSet
                        })
                    }), c && (0, s.jsx)("div", {
                        className: d().nameWrapper,
                        children: (0, s.jsx)("span", {
                            className: d().authorName,
                            children: e.name
                        })
                    })]
                })
            }
        },
        18397: e => {
            e.exports = {
                iconWrapper: "PlayIcon_iconWrapper__Zwf7g",
                iconHidden: "PlayIcon_iconHidden__jIQmp",
                iconTransition: "PlayIcon_iconTransition__60tAS",
                icon: "PlayIcon_icon__52Ftx"
            }
        },
        42957: e => {
            e.exports = {
                container: "Avatar_container__4nZUl",
                imageWrapper: "Avatar_imageWrapper__9zVcA",
                image: "Avatar_image__q51yk",
                nameWrapper: "Avatar_nameWrapper__TNtso",
                authorName: "Avatar_authorName__v33t7"
            }
        },
        82678: (e, t, a) => {
            "use strict";
            a.d(t, {
                q: () => s
            });
            let s = {
                name: "All",
                uniqueId: "00000000-0000-0000-0000-000000000000",
                assetLink: (0, a(10769).v9)({
                    assetPath: "/images/categories/icons/star.png"
                }).src
            }
        },
        87911: (e, t, a) => {
            "use strict";
            a.d(t, {
                u: () => o
            });
            var s = a(37876),
                n = a(69241),
                r = a(10302),
                i = a(18397),
                l = a.n(i);
            let o = ({
                isVisible: e,
                onClick: t,
                className: a,
                hasTransition: i = !0
            }) => (0, s.jsx)("div", {
                className: (0, n.A)(l().iconWrapper, {
                    [l().iconHidden]: !e,
                    [l().iconTransition]: i
                }),
                "data-testid": "play-icon",
                children: (0, s.jsx)(r.A, {
                    className: (0, n.A)(l().icon, a),
                    onClick: t
                })
            })
        },
        90637: (e, t, a) => {
            "use strict";
            a.d(t, {
                T: () => r
            });
            var s = a(54810),
                n = a(97160);
            let r = e => ({
                sku: t,
                externalId: a
            }) => (0, s.Vo)({
                externalId: a.toString(),
                query: ((e, t) => {
                    let a = new n.$I().parse(e, t);
                    if (a) return {
                        productType: (e => {
                            switch (e) {
                                case n.Lc.GLOSS:
                                    return s.Q2.gloss;
                                case n.Lc.TEXTRA:
                                    return s.Q2.textra;
                                default:
                                    return s.Q2.matte
                            }
                        })(a.finish),
                        size: (e => {
                            switch (e) {
                                case n.TZ.LARGE:
                                    return s.Hu.L;
                                case n.TZ.XLARGE:
                                    return s.Hu.XL;
                                default:
                                    return s.Hu.M
                            }
                        })(a.size)
                    }
                })(t, e)
            })
        },
        91757: (e, t, a) => {
            "use strict";
            a.d(t, {
                I: () => P
            });
            var s = a(37876),
                n = a(14232),
                r = a(51192),
                i = a(68873),
                l = a(27555),
                o = a(82678),
                c = a(36256);
            let d = ({
                filterCategories: e,
                currentCategory: t,
                setCurrentCategory: a,
                resetVideoIndex: n
            }) => {
                if (!e || 0 === e.length) return null;
                let r = [o.q, ...e];
                return (0, s.jsxs)("div", {
                    className: "flex max-w-full gap-4 pb-4 overflow-x-auto max-lg:scrollbar-hide lg:scrollbar-thin-hover",
                    children: [(0, s.jsxs)("p", {
                        className: "mt-0 whitespace-nowrap text-body-sm md:mt-2 sm:text-heading-subtitle",
                        children: ["Filter by", (0, s.jsx)("br", {
                            className: "md:hidden"
                        }), " interest:"]
                    }), (0, s.jsx)("div", {
                        className: "flex items-center gap-4",
                        children: r.map(e => (0, s.jsx)(c.ab, {
                            label: e.name,
                            onClick: () => {
                                n(), a(e)
                            },
                            selected: t.uniqueId === e.uniqueId,
                            trailingIcon: e.assetLink ? (0, s.jsx)("img", {
                                alt: e.name,
                                className: "size-4",
                                loading: "lazy",
                                src: e.assetLink
                            }) : null
                        }, e.uniqueId))
                    })]
                })
            };
            var u = a(14619);
            let p = ({
                videoRef: e
            }) => {
                let [t, a] = (0, n.useState)(0), [r, i] = (0, n.useState)(0);
                return (0, n.useEffect)(() => {
                    let t = e.current;
                    if (!t) return;
                    let s = () => {
                            i(t.duration)
                        },
                        n = () => {
                            t.duration && a(Math.min(Math.max(t.currentTime / t.duration * 100, 0), 100))
                        };
                    return t.addEventListener("loadedmetadata", s), t.addEventListener("timeupdate", n), () => {
                        t.removeEventListener("loadedmetadata", s), t.removeEventListener("timeupdate", n)
                    }
                }, [e]), (0, s.jsx)("div", {
                    className: "absolute inset-x-0 top-0 z-3",
                    children: (0, s.jsx)("div", {
                        className: (0, u.cn)("group h-1 w-full cursor-pointer rounded-tl-full transition-[height] duration-200 ease-out hover:h-1.5"),
                        "data-testid": "video-progress-bar",
                        onClick: t => {
                            let a = e.current;
                            if (!a || !r) return;
                            let s = t.currentTarget.getBoundingClientRect();
                            a.currentTime = Math.min(Math.max(Math.min(Math.max((t.clientX - s.left) / s.width, 0), 1) * r, 0), r)
                        },
                        children: (0, s.jsx)("div", {
                            className: (0, u.cn)("relative h-full rounded-tl-full bg-neutral-200 transition-[width] duration-300 ease-in-out"),
                            style: {
                                width: `${t}%`
                            },
                            children: (0, s.jsx)("span", {
                                "aria-hidden": !0,
                                className: (0, u.cn)("pointer-events-none absolute right-0 top-1/2 size-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-neutral-200 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100")
                            })
                        })
                    })
                })
            };
            var m = a(87911),
                h = a(30983);
            let x = ({
                className: e,
                videoRef: t,
                inspiration: a,
                isOpen: n = !1,
                playVideo: r,
                showProgressBar: i
            }) => a.videoLink ? (0, s.jsxs)("div", {
                className: "relative h-full w-full",
                children: [(0, s.jsx)(h.A, {
                    autoPlay: r,
                    className: (0, u.cn)("aspect-9/16 h-full w-full object-cover object-center", e),
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    poster: a.assetLink,
                    ref: t,
                    src: a.videoLink
                }), (0, s.jsx)(m.u, {
                    className: "[--color:var(--color-text-inverse)]! z-2 rounded-full bg-neutral-900/50",
                    isVisible: !r || n,
                    onClick: () => null
                }), i ? (0, s.jsx)(p, {
                    videoRef: t
                }) : null]
            }) : null;
            var g = a(30305),
                v = a(10769);
            let f = ({
                assetLink: e,
                imageClassName: t,
                loading: a = "lazy"
            }) => {
                let n = (0, v.ZX)({
                        assetPath: e,
                        widths: [360, 720]
                    }),
                    r = (0, v.ZX)({
                        assetPath: e,
                        widths: [400, 800]
                    }),
                    i = (0, v.ZX)({
                        assetPath: e,
                        speedsize: {
                            width: 360
                        }
                    });
                return (0, s.jsxs)("picture", {
                    className: "contents",
                    "data-testid": "inspiration-picture",
                    children: [(0, s.jsx)("source", {
                        sizes: n.sizes,
                        srcSet: n.srcSet
                    }), (0, s.jsx)("source", {
                        media: `(min-width: ${g.D.xl3}px)`,
                        sizes: r.sizes,
                        srcSet: r.srcSet
                    }), (0, s.jsx)("img", {
                        alt: "inspiration image",
                        className: (0, u.cn)("h-full w-full object-cover object-center rounded-sm lg:rounded-md", t),
                        loading: a,
                        src: i.src
                    })]
                })
            };
            var j = a(71697),
                w = a(827);
            let y = ({
                videoRef: e,
                inspiration: t,
                isOpen: a = !1,
                className: r,
                playVideo: i,
                showProgressBar: l,
                onLoadedMetadata: o
            }) => {
                let [c, d] = (0, n.useState)(!1);
                return t.videoLink ? (0, s.jsxs)("div", {
                    className: "relative h-full w-full",
                    children: [(0, s.jsx)(f, {
                        assetLink: t.assetLink,
                        imageClassName: (0, u.cn)("absolute inset-0 size-full object-cover object-center rounded-sm transition-opacity duration-300 ease-in-out lg:rounded-md", c && i ? "opacity-0" : "opacity-100")
                    }), i ? (0, s.jsx)(h.A, {
                        autoPlay: i,
                        className: (0, u.cn)("aspect-9/16 h-full w-full object-cover object-center", r),
                        loop: !0,
                        muted: !0,
                        onLoadedMetadata: o,
                        onPlaying: () => {
                            d(!0)
                        },
                        playsInline: !0,
                        poster: t.assetLink,
                        ref: e,
                        src: t.videoLink
                    }) : null, (0, s.jsx)(m.u, {
                        className: "[--color:var(--color-text-inverse)] z-[2] rounded-full bg-neutral-900/50",
                        isVisible: !i || a,
                        onClick: () => null
                    }), l ? (0, s.jsx)(p, {
                        videoRef: e
                    }) : null]
                }) : null
            };
            var b = a(19276),
                N = a(82378),
                k = a(91680),
                _ = a(39806),
                L = a(7234);
            let A = {
                    src: (0, v.qH)("/icons/media/icon_player_play.svg"),
                    alt: "play icon"
                },
                C = {
                    src: (0, v.qH)("/icons/media/icon_player_pause.svg"),
                    alt: "pause icon"
                },
                I = ({
                    inspiration: e,
                    resolveArtworkProductRoute: t,
                    isOpen: a,
                    onOpenChange: r
                }) => {
                    let i = (0, n.useRef)(null),
                        [o, d] = (0, n.useState)(!0),
                        [u, p] = (0, n.useState)(!1),
                        m = (e.associatedArtworks ? .length ? ? 0) > 0,
                        h = e.isCustomAssociated ? ? !1;
                    (0, n.useEffect)(() => {
                        if (!a || !e.videoLink) {
                            p(!1), d(!0);
                            return
                        }
                        d(!0), p((i.current ? .readyState ? ? 0) >= HTMLMediaElement.HAVE_METADATA)
                    }, [e.videoLink, a]);
                    let x = async () => {
                            i.current && (o ? i.current.pause() : await i.current.play(), d(!o))
                        },
                        g = (0, v.v9)({
                            assetPath: "/images/custom-displate/tile-img.png",
                            widths: [112, 224]
                        });
                    return (0, s.jsx)(c.lG, {
                        onOpenChange: r,
                        open: a,
                        children: (0, s.jsxs)(c.Cf, {
                            "aria-describedby": void 0,
                            className: "md:max-w-[820px] md:max-h-[calc(100vh-2.5rem)]",
                            "data-testid": "inspiration-popup",
                            size: "lg",
                            children: [(0, s.jsx)(c.c7, {
                                children: (0, s.jsx)(c.L3, {
                                    className: "text-heading-h6 md:text-heading-h4",
                                    children: "Shop this look"
                                })
                            }), (0, s.jsx)(c.R4, {
                                children: (0, s.jsxs)("div", {
                                    className: "grid gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-0",
                                    children: [e.videoLink ? (0, s.jsxs)("div", {
                                        className: "relative mx-auto w-full min-w-0 max-w-full aspect-9/16 md:max-w-[360px]",
                                        children: [u ? (0, s.jsx)("button", {
                                            className: "absolute right-4 top-4 z-2 m-0 flex cursor-pointer flex-col gap-4 border-none bg-transparent p-0",
                                            onClick: x,
                                            type: "button",
                                            children: (0, s.jsx)("img", {
                                                alt: o ? C.alt : A.alt,
                                                className: "size-9 cursor-pointer rounded-full bg-neutral-900/50 p-2 transition-colors duration-300 ease-in-out hover:bg-neutral-900/75",
                                                src: o ? C.src : A.src
                                            })
                                        }) : null, (0, s.jsx)(y, {
                                            className: "max-h-[504px] rounded-md object-cover object-center md:max-h-[unset]",
                                            inspiration: e,
                                            onLoadedMetadata: () => p(!0),
                                            playVideo: !0,
                                            showProgressBar: !0,
                                            videoRef: i
                                        })]
                                    }) : (0, s.jsx)(f, {
                                        assetLink: e.assetLink,
                                        imageClassName: "max-h-full min-h-[100px] max-w-full rounded-md object-contain object-center md:max-h-[60vh] md:w-auto"
                                    }), (0, s.jsx)("div", {
                                        className: "flex flex-col gap-4",
                                        "data-testid": "inspiration-popup-artworks",
                                        children: m || h ? (0, s.jsxs)(s.Fragment, {
                                            children: [e.associatedArtworks ? .map(e => (0, s.jsxs)("div", {
                                                className: "flex flex-row items-start gap-2",
                                                children: [(0, s.jsx)(l.A, {
                                                    routeInfo: t ? t({
                                                        sku: e.sku,
                                                        externalId: e.externalId
                                                    }) : (0, N.ZW)({
                                                        path: `/displate/${e.externalId}`,
                                                        target: "elysium"
                                                    }),
                                                    children: (0, s.jsx)("img", {
                                                        alt: e.author.name,
                                                        className: "h-[157px] w-[112px] rounded-[1px] object-cover shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.3)] md:h-[140px] md:w-[100px]",
                                                        src: (0, v.al)(e.imageCoreUrl, {
                                                            resolution: j.cc.rect.rect190x135,
                                                            orientation: e.orientation
                                                        })
                                                    })
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex items-center gap-3 pt-2",
                                                    children: [(0, s.jsx)(w.A, {
                                                        author: {
                                                            isLicensed: e.author.isLicensed,
                                                            name: e.author.name,
                                                            nick: e.author.nick,
                                                            slug: e.author.nick,
                                                            avatarCoreUrl: e.author.avatarCoreUrl
                                                        },
                                                        imageClassName: "size-16 rounded-full object-cover shadow-[inset_1px_-1px_1px_rgba(0,0,0,0.2)]"
                                                    }), (0, s.jsxs)(l.A, {
                                                        className: "flex flex-col gap-1 text-text-primary no-underline",
                                                        routeInfo: (0, k.bo)({
                                                            nick: e.author.nick,
                                                            licensed: e.author.isLicensed
                                                        }),
                                                        children: [e.author.isLicensed ? (0, s.jsxs)("div", {
                                                            className: "flex items-center gap-1 text-body-sm text-text-secondary",
                                                            children: [(0, s.jsx)(b.A, {
                                                                className: "fill-neutral-600 [&>path:first-of-type]:fill-gradient-displate-club-dark-end"
                                                            }), (0, s.jsx)("span", {
                                                                children: "Officially licensed"
                                                            })]
                                                        }) : null, (0, s.jsx)("p", {
                                                            className: "text-heading-h6",
                                                            children: e.author.name
                                                        }), (0, s.jsxs)("p", {
                                                            className: "text-body-sm",
                                                            children: [e.author.numberOfArtworks, " artworks"]
                                                        })]
                                                    })]
                                                })]
                                            }, e.sku)), h ? (0, s.jsxs)("div", {
                                                className: "flex flex-row items-start gap-3 py-4",
                                                "data-testid": "inspiration-popup-custom-displate",
                                                children: [(0, s.jsx)("img", {
                                                    alt: "Custom Displates",
                                                    className: "h-[73px] w-[112px] rounded-xs object-cover",
                                                    loading: "lazy",
                                                    src: g.src,
                                                    srcSet: g.srcSet
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-col items-start gap-3",
                                                    children: [(0, s.jsx)("p", {
                                                        className: "text-heading-h6 text-text-primary",
                                                        children: "Some pieces here are Custom Displates"
                                                    }), (0, s.jsx)(c.$n, {
                                                        asChild: !0,
                                                        size: "sm",
                                                        variant: "primary",
                                                        children: (0, s.jsx)(l.A, {
                                                            routeInfo: (0, _.iM)(),
                                                            children: "Create your own"
                                                        })
                                                    })]
                                                })]
                                            }) : null]
                                        }) : (0, s.jsxs)("div", {
                                            className: "flex w-full flex-col items-start justify-center gap-3 py-4",
                                            "data-testid": "inspiration-popup-empty-artworks",
                                            children: [(0, s.jsx)("p", {
                                                className: "text-heading-h6",
                                                children: "Some posters from this setup are sold out"
                                            }), (0, s.jsx)(c.$n, {
                                                asChild: !0,
                                                size: "sm",
                                                variant: "primary",
                                                children: (0, s.jsx)(l.A, {
                                                    routeInfo: (0, L.We)(),
                                                    children: "See our bestsellers"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                z = ({
                    inspiration: e,
                    playVideo: t,
                    setCurrentIndexVideoPlaying: a,
                    index: i,
                    loading: l = "lazy",
                    resolveArtworkProductRoute: o
                }) => {
                    let [c, d] = (0, n.useState)(!1), p = (0, n.useRef)(null), m = async () => {
                        e.videoLink && p.current && (a(i), await p.current.play())
                    }, h = () => {
                        p.current && (p.current ? .pause(), p.current.currentTime = 0)
                    }, g = async () => {
                        await p.current ? .play()
                    };
                    return (0, n.useEffect)(() => {
                        e.videoLink && p.current && (t ? g() : h())
                    }, [t, e.videoLink]), (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("button", {
                            className: (0, u.cn)("relative col-span-2 overflow-hidden rounded-sm border-none p-0 hover:cursor-pointer", e.videoLink ? "aspect-9/16 row-span-5" : "nth-[4n+1]:aspect-square nth-[4n+1]:row-span-3 nth-[4n+2]:aspect-[9/12] nth-[4n+2]:row-span-4 nth-[4n+3]:aspect-[9/12] nth-[4n+3]:row-span-4 nth-[4n+4]:aspect-square nth-[4n+4]:row-span-3 md:nth-[8n+1]:aspect-square md:nth-[8n+1]:row-span-3 md:nth-[8n+2]:aspect-[9/12] md:nth-[8n+2]:row-span-4 md:nth-[8n+3]:aspect-square md:nth-[8n+3]:row-span-3 md:nth-[8n+4]:aspect-[9/12] md:nth-[8n+4]:row-span-4 md:nth-[8n+5]:aspect-[9/12] md:nth-[8n+5]:row-span-4 md:nth-[8n+6]:aspect-square md:nth-[8n+6]:row-span-3 md:nth-[8n+7]:aspect-[9/12] md:nth-[8n+7]:row-span-4 md:nth-[8n+8]:aspect-square md:nth-[8n+8]:row-span-3 lg:nth-[12n+1]:aspect-square lg:nth-[12n+1]:row-span-3 lg:nth-[12n+2]:aspect-[9/12] lg:nth-[12n+2]:row-span-4 lg:nth-[12n+3]:aspect-square lg:nth-[12n+3]:row-span-3 lg:nth-[12n+4]:aspect-[9/12] lg:nth-[12n+4]:row-span-4 lg:nth-[12n+5]:aspect-square lg:nth-[12n+5]:row-span-3 lg:nth-[12n+6]:aspect-[9/12] lg:nth-[12n+6]:row-span-4 lg:nth-[12n+7]:aspect-[9/12] lg:nth-[12n+7]:row-span-4 lg:nth-[12n+8]:aspect-square lg:nth-[12n+8]:row-span-3 lg:nth-[12n+9]:aspect-[9/12] lg:nth-[12n+9]:row-span-4 lg:nth-[12n+10]:aspect-square lg:nth-[12n+10]:row-span-3 lg:nth-[12n+11]:aspect-[9/12] lg:nth-[12n+11]:row-span-4 lg:nth-[12n+12]:aspect-square lg:nth-[12n+12]:row-span-3"),
                            "data-testid": "inspiration-item",
                            onClick: () => {
                                (0, r.O)({
                                    elementId: "inspiration_card",
                                    elementVariant: e.uniqueId
                                }), d(!0), h()
                            },
                            onMouseEnter: m,
                            type: "button",
                            children: e.videoLink ? (0, s.jsx)(x, {
                                inspiration: e,
                                isOpen: c,
                                playVideo: t,
                                videoRef: p
                            }) : (0, s.jsx)(f, {
                                assetLink: e.assetLink,
                                loading: l
                            })
                        }), (0, s.jsx)(I, {
                            inspiration: e,
                            isOpen: c,
                            onOpenChange: e => {
                                d(e), e || g()
                            },
                            resolveArtworkProductRoute: o
                        })]
                    })
                };
            var S = a(39313);
            let q = (0, N.ZW)({
                    path: "/inspirations",
                    target: "elysium"
                }),
                P = ({
                    inspirations: e,
                    filterCategories: t,
                    title: a,
                    currentCategory: o,
                    setCurrentCategory: p,
                    hasSeeAllButton: m = !0,
                    isDataLoading: h = !1,
                    resolveArtworkProductRoute: x,
                    hasFilters: g = !0
                }) => {
                    let v = (0, n.useRef)(null),
                        [f, j] = (0, n.useState)(0),
                        w = (0, S.P)(v, {
                            once: !0,
                            delay: 500,
                            threshold: .1,
                            callback: () => (0, i.Z)({
                                elementId: "inspirations_section",
                                elementVariant: "none"
                            })
                        }),
                        y = !!e ? .length,
                        b = g && !!t ? .length;
                    return y || h || b ? (0, s.jsxs)("div", {
                        className: "mx-auto flex w-full min-w-0 flex-col items-center justify-center gap-8",
                        "data-testid": "inspirations-v4",
                        ref: v,
                        children: [(0, s.jsx)("h2", {
                            className: "text-center text-display-sm md:text-display-md font-display uppercase",
                            "data-testid": "inspirations-v4-title",
                            children: a ? ? "Get inspired by our community"
                        }), b ? (0, s.jsx)(d, {
                            currentCategory: o,
                            filterCategories: t,
                            resetVideoIndex: () => j(0),
                            setCurrentCategory: p
                        }) : null, h ? (0, s.jsx)(c.y$, {
                            className: "size-8"
                        }) : null, !h && y ? (0, s.jsx)(c.xA, {
                            className: (0, u.cn)("w-full grid-flow-dense auto-rows-auto justify-center", "gap-y-4 md:gap-y-6 2xl:gap-y-8", "*:self-start"),
                            id: "inspiration-masonry",
                            children: e.map((e, t) => (0, s.jsx)(z, {
                                index: t,
                                inspiration: e,
                                loading: "lazy",
                                playVideo: w && t === f,
                                resolveArtworkProductRoute: x,
                                setCurrentIndexVideoPlaying: j
                            }, `${e.uniqueId}-${e.assetLink}`))
                        }) : null, h || y ? null : (0, s.jsx)("p", {
                            className: "text-center text-body-md text-text-secondary",
                            "data-testid": "inspirations-v4-empty",
                            children: "Something went wrong loading these inspirations. Please try again later."
                        }), m ? (0, s.jsx)(c.$n, {
                            asChild: !0,
                            className: "self-center",
                            onClick: () => (0, r.O)({
                                elementId: "see_all_inspirations_button",
                                elementVariant: "widget"
                            }),
                            children: (0, s.jsx)(l.A, {
                                routeInfo: q,
                                children: "See all inspirations"
                            })
                        }) : null]
                    }) : null
                }
        }
    }
]);
//#
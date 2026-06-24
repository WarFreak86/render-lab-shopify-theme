(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [519], {
        24322: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            var a = s(37876);
            let i = e => (0, a.jsxs)("svg", {
                fill: "none",
                height: "1em",
                viewBox: "0 0 24 24",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, a.jsx)("path", {
                    clipRule: "evenodd",
                    d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z",
                    fill: "#000",
                    fillRule: "evenodd"
                }), (0, a.jsx)("path", {
                    clipRule: "evenodd",
                    d: "M12 17.75C11.5858 17.75 11.25 17.4142 11.25 17L11.25 11C11.25 10.5858 11.5858 10.25 12 10.25C12.4142 10.25 12.75 10.5858 12.75 11L12.75 17C12.75 17.4142 12.4142 17.75 12 17.75Z",
                    fill: "#000",
                    fillRule: "evenodd"
                }), (0, a.jsx)("path", {
                    d: "M10.9997 6.92611C10.9997 6.41472 11.4142 6.00016 11.9256 6.00016C12.437 6.00016 12.8516 6.41472 12.8516 6.92611C12.8516 7.43749 12.437 7.85205 11.9256 7.85205C11.4142 7.85205 10.9997 7.43749 10.9997 6.92611Z",
                    fill: "#000"
                }), (0, a.jsx)("path", {
                    clipRule: "evenodd",
                    d: "M11.9256 7.00016C11.9665 7.00016 11.9997 6.96701 11.9997 6.92611C11.9997 6.88521 11.9665 6.85205 11.9256 6.85205C11.8847 6.85205 11.8516 6.88521 11.8516 6.92611C11.8516 6.96701 11.8847 7.00016 11.9256 7.00016ZM11.9256 6.00016C11.4142 6.00016 10.9997 6.41472 10.9997 6.92611C10.9997 7.43749 11.4142 7.85205 11.9256 7.85205C12.437 7.85205 12.8516 7.43749 12.8516 6.92611C12.8516 6.41472 12.437 6.00016 11.9256 6.00016Z",
                    fill: "#000",
                    fillRule: "evenodd"
                })]
            })
        },
        30492: (e, t, s) => {
            "use strict";
            s.d(t, {
                AZ: () => g,
                Lm: () => l,
                Mb: () => n,
                cP: () => h,
                n9: () => o,
                qe: () => d,
                uZ: () => c
            });
            var a = s(37473),
                i = s(10769),
                r = s(87050);
            let l = {
                    width: 484,
                    height: 484,
                    x: 0,
                    y: 0
                },
                n = e => e === r.JH.HORIZONTAL ? (0, i.v9)({
                    assetPath: "/images/hero/gloss/gloss_h.png"
                }).src : (0, i.v9)({
                    assetPath: "/images/hero/gloss/gloss_v.png"
                }).src,
                o = (e, t) => {
                    let s = "";
                    switch (e) {
                        case "none":
                            return;
                        case a.wI.BLACK:
                            s = t === r.JH.HORIZONTAL ? "/images/hero/frames/frames_black_wood_patterns_h_2.png" : "/images/hero/frames/frames_black_wood_patterns_2.png";
                            break;
                        case a.wI.WHITE:
                            s = t === r.JH.HORIZONTAL ? "/images/hero/frames/frames_white_wood_patterns_h_2.png" : "/images/hero/frames/frames_white_wood_patterns_2.png";
                            break;
                        case a.wI.GRAPHITE:
                            s = t === r.JH.HORIZONTAL ? "/images/hero/frames/frames_graphites_h_2.png" : "/images/hero/frames/frames_graphites_2.png";
                            break;
                        case a.wI.NATURAL:
                            s = t === r.JH.HORIZONTAL ? "/images/hero/frames/frames_natural_wood_patterns_h_2.png" : "/images/hero/frames/frames_natural_wood_patterns_2.png";
                            break;
                        default:
                            throw Error("Invalid frame " + e)
                    }
                    return (0, i.v9)({
                        assetPath: s
                    }).src
                },
                d = (e, t) => {
                    let s = t === r.JH.HORIZONTAL;
                    switch (e) {
                        case a.or.M:
                            return s ? 13 : 12;
                        case a.or.L:
                            return s ? 16 : 15;
                        case a.or.XL:
                            return 17;
                        default:
                            throw Error("Invalid size")
                    }
                },
                h = (e, t) => {
                    let s = "";
                    if (t === r.JH.HORIZONTAL) switch (e) {
                        case a.or.M:
                            s = "/images/hero/size-picker/mask_horizontal_m@2x.png";
                            break;
                        case a.or.L:
                            s = "/images/hero/size-picker/mask_horizontal_l@2x.png";
                            break;
                        case a.or.XL:
                            s = "/images/hero/size-picker/mask_horizontal_xl@2x.png";
                            break;
                        default:
                            throw Error("Invalid size")
                    } else switch (e) {
                        case a.or.M:
                            s = "/images/hero/size-picker/mask_vertical_m@2x.png";
                            break;
                        case a.or.L:
                            s = "/images/hero/size-picker/mask_vertical_l@2x.png";
                            break;
                        case a.or.XL:
                            s = "/images/hero/size-picker/mask_vertical_xl@2x.png";
                            break;
                        default:
                            throw Error("Invalid size")
                    }
                    return s
                },
                c = e => {
                    switch (e) {
                        case a.or.M:
                            return {
                                width: 244,
                                height: 174,
                                x: 114,
                                y: 279
                            };
                        case a.or.L:
                            return {
                                width: 307,
                                height: 219,
                                x: 85,
                                y: 234
                            };
                        case a.or.XL:
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
                g = e => {
                    switch (e) {
                        case a.or.M:
                            return {
                                width: 171,
                                height: 238,
                                x: 148,
                                y: 229
                            };
                        case a.or.L:
                            return {
                                width: 214,
                                height: 298,
                                x: 128,
                                y: 161
                            };
                        case a.or.XL:
                            return {
                                width: 248,
                                height: 345,
                                x: 176,
                                y: 59
                            };
                        default:
                            throw Error("Invalid size")
                    }
                }
        },
        30983: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => g
            });
            var a = s(37876),
                i = s(14232),
                r = s(69241),
                l = s(90413),
                n = s(30305),
                o = s(10769),
                d = s(57845),
                h = s.n(d);
            let c = ({
                src: e,
                preload: t,
                responsive: s,
                poster: d,
                autoPlay: c,
                className: g,
                mobileSize: p,
                desktopSize: m,
                ref: u,
                ...x
            }) => {
                let f = (0, l.A)(),
                    {
                        isTabletOrDesktop: v
                    } = (0, n.Q)(),
                    [w, _] = (0, i.useState)(null),
                    j = (0, i.useMemo)(() => {
                        let e;
                        return (e = v ? m : p) ? {
                            width: e.width,
                            ...e.height && {
                                height: e.height
                            }
                        } : {
                            width: v ? 1080 : 720
                        }
                    }, [v, m, p]),
                    b = (0, i.useMemo)(() => d || (f && e ? (0, o.$4)(e, { ...j,
                        videoPoster: !0
                    }) : void 0), [d, f, e, j]),
                    y = b ? "" : "#t=0.1";
                return (0, i.useEffect)(() => {
                    let e = async () => {
                        u && "current" in u && u.current && await u.current.play()
                    };
                    !w || c && e()
                }, [c, w, u]), (0, i.useEffect)(() => {
                    f && _(j)
                }, [f, j]), (0, a.jsx)("video", {
                    autoPlay: !1,
                    className: (0, r.A)(h().video, g, {
                        [h().responsive]: s
                    }),
                    playsInline: !0,
                    poster: b,
                    preload: t || "metadata",
                    ref: u,
                    src: w ? `${(0,o.$4)(e,w)}${y}` : void 0,
                    ...x
                })
            };
            c.displayName = "SpeedSizeVideoRaw";
            let g = c
        },
        44003: (e, t, s) => {
            "use strict";
            s.d(t, {
                j: () => n
            });
            var a = s(37876),
                i = s(63145),
                r = s.n(i),
                l = s(14619);
            let n = ({
                maskImageSrcSet: e,
                maskImageSize: t,
                sourceImageSize: s,
                sourceImageSrc: i,
                glossImage: n,
                frameImage: o,
                frameWidth: d,
                className: h
            }) => {
                let c = s;
                return o && (c = {
                    width: s.width - 2 * d,
                    height: s.height - 2 * d,
                    x: s.x + d,
                    y: s.y + d
                }), (0, a.jsx)("svg", {
                    className: (0, l.cn)(h),
                    "data-testid": "artwork-picture-masked-svg",
                    height: "100%",
                    viewBox: `0 0 ${t.width} ${t.height}`,
                    width: "100%",
                    children: (0, a.jsxs)("g", {
                        children: [(0, a.jsx)("foreignObject", {
                            height: c.height,
                            name: "artworkImage",
                            preserveAspectRatio: "none",
                            width: c.width,
                            x: c.x,
                            y: c.y,
                            children: (0, a.jsx)("img", {
                                alt: "artwork",
                                className: r().internalSvgImage,
                                draggable: "false",
                                src: i
                            })
                        }), n ? (0, a.jsx)("foreignObject", {
                            height: c.height,
                            name: "glossImage",
                            preserveAspectRatio: "none",
                            width: c.width,
                            x: c.x,
                            y: c.y,
                            children: (0, a.jsx)("img", {
                                alt: "gloss",
                                className: r().internalSvgImage,
                                draggable: "false",
                                src: n
                            })
                        }) : null, o ? (0, a.jsx)("foreignObject", {
                            height: s.height,
                            name: "frameImage",
                            preserveAspectRatio: "none",
                            width: s.width,
                            x: s.x,
                            y: s.y,
                            children: (0, a.jsx)("img", {
                                alt: "frame",
                                className: r().internalSvgImage,
                                draggable: "false",
                                src: o
                            })
                        }) : null, (0, a.jsx)("foreignObject", {
                            height: "100%",
                            name: "mask",
                            width: "100%",
                            children: (0, a.jsx)("img", {
                                alt: "mask",
                                className: r().internalSvgImage,
                                draggable: "false",
                                srcSet: e
                            })
                        })]
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
        60741: (e, t, s) => {
            "use strict";
            s.d(t, {
                k: () => f
            });
            var a = s(37876),
                i = s(14232);
            let r = i.forwardRef(function({
                title: e,
                titleId: t,
                ...s
            }, a) {
                return i.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: a,
                    "aria-labelledby": t
                }, s), e ? i.createElement("title", {
                    id: t
                }, e) : null, i.createElement("path", {
                    fillRule: "evenodd",
                    d: "M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",
                    clipRule: "evenodd"
                }))
            });
            var l = s(30983),
                n = s(36256),
                o = s(14619);
            let d = ({
                finish: e,
                currentVideo: t,
                setCurrentVideo: s,
                isVisible: d,
                src: h,
                poster: c
            }) => {
                let [g, p] = (0, i.useState)(!1), [m, u] = (0, i.useState)(!d), x = (0, i.useRef)(null), f = x.current, v = t === e;
                g && f && v && d && m && (f.play(), u(!1)), !g || !f || v && d || m || (f.pause(), u(!0));
                let w = () => {
                    f && (f.currentTime = .1)
                };
                return !d && f && f.currentTime > 0 && setTimeout(w, 500), (0, a.jsxs)("div", {
                    className: "relative mx-auto aspect-square w-full max-w-[400px]",
                    children: [(0, a.jsx)("div", {
                        className: (0, o.cn)("absolute top-0 left-0 z-1 h-full w-full rounded-sm bg-alpha-dark opacity-100 transition-opacity duration-300 ease-in-out", !m && g ? "z-0 opacity-0" : null)
                    }), (0, a.jsx)(l.A, {
                        className: "h-full w-full rounded-sm object-cover object-center",
                        controls: !1,
                        muted: !0,
                        onEnded: () => {
                            s(null), w()
                        },
                        onLoadedMetadata: () => p(!0),
                        poster: c,
                        preload: d ? "auto" : "none",
                        ref: x,
                        src: h
                    }), (0, a.jsx)(n.y$, {
                        className: (0, o.cn)("absolute top-1/2 left-1/2 z-1 size-8 -translate-x-1/2 -translate-y-1/2 text-icon-inverse opacity-100 transition-opacity duration-300 ease-in-out", g ? "z-0 opacity-0" : null)
                    }), (0, a.jsx)("div", {
                        className: (0, o.cn)("absolute top-1/2 left-1/2 z-2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-out", g && (m || !v) ? "opacity-100" : "pointer-events-none opacity-0"),
                        children: (0, a.jsx)(n.ff, {
                            "aria-label": "Play finish video",
                            icon: (0, a.jsx)(r, {}),
                            onClick: () => {
                                s(e)
                            },
                            size: "lg",
                            variant: "glass"
                        })
                    })]
                })
            };
            var h = s(37473),
                c = s(10769);
            let g = ({
                    isOpen: e,
                    currentVideo: t,
                    setCurrentVideo: s
                }) => (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    "data-testid": "about-drawer-gloss",
                    children: [(0, a.jsx)("h4", {
                        className: "text-heading-subtitle",
                        children: "Gloss"
                    }), (0, a.jsx)(d, {
                        currentVideo: t,
                        finish: h.ZU.GLOSS,
                        isVisible: e,
                        poster: (0, c.v9)({
                            assetPath: "/images/pdp/FinishDrawer/gloss.jpg"
                        }).src,
                        setCurrentVideo: s,
                        src: "pages/gloss_pdp_preview.mp4"
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-col gap-2 text-body-md",
                        children: [(0, a.jsx)("h4", {
                            className: "text-heading-subtitle",
                            children: "Shine on with vivid colors"
                        }), (0, a.jsx)("p", {
                            children: "With their gently reflective surface, glossy Displates offer enhanced contrast, highlighting vibrant hues, deep blacks, and intricate details."
                        }), (0, a.jsx)("p", {
                            children: "Go for gloss if you're looking for a photo-like finish. For best effect, try to avoid direct light when arranging your posters."
                        })]
                    })]
                }),
                p = ({
                    isOpen: e,
                    currentVideo: t,
                    setCurrentVideo: s
                }) => (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    "data-testid": "about-drawer-matte",
                    children: [(0, a.jsx)("h4", {
                        className: "text-heading-subtitle",
                        children: "Matte"
                    }), (0, a.jsx)(d, {
                        currentVideo: t,
                        finish: h.ZU.MATTE,
                        isVisible: e,
                        poster: (0, c.v9)({
                            assetPath: "/images/pdp/FinishDrawer/matte.jpg"
                        }).src,
                        setCurrentVideo: s,
                        src: "pages/matte_pdp_preview.mp4"
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-col gap-2 text-body-md",
                        children: [(0, a.jsx)("h4", {
                            className: "text-heading-subtitle",
                            children: "Sleek, soft, and elegant"
                        }), (0, a.jsx)("p", {
                            children: "The subtle matte finish draws more attention to the smooth metal surface of your Displates, absorbing light and enhancing their elegant, soft texture."
                        }), (0, a.jsx)("p", {
                            children: "The colors are slightly toned down, making this finish a perfect fit for all atmospheric illustrations and paintings."
                        })]
                    })]
                });
            var m = s(27555),
                u = s(7234);
            let x = ({
                    isOpen: e,
                    currentVideo: t,
                    setCurrentVideo: s,
                    isGiftCardPage: i = !1
                }) => (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    "data-testid": "about-drawer-textra",
                    children: [(0, a.jsx)("h4", {
                        className: "text-heading-subtitle",
                        children: "Textra"
                    }), (0, a.jsx)(d, {
                        currentVideo: t,
                        finish: h.ZU.TEXTRA,
                        isVisible: e,
                        poster: (0, c.v9)({
                            assetPath: "/images/pdp/FinishDrawer/textra.jpg"
                        }).src,
                        setCurrentVideo: s,
                        src: "pages/textra_pdp_preview.mp4"
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-col gap-2 text-body-md",
                        children: [(0, a.jsx)("h4", {
                            className: "text-heading-subtitle",
                            children: "Textured finish that pops"
                        }), (0, a.jsx)("p", {
                            children: "Using selective matt & gloss finish and 3D-enhanced print, Textra lets you feel the details and outlines as they seamlessly pop up on the metal surface."
                        }), (0, a.jsxs)("p", {
                            children: ["This tactile finish evolves with different light conditions, creating a whole new, dynamic and immersive art experience.", " ", i ? null : (0, a.jsx)(n.N_, {
                                asChild: !0,
                                children: (0, a.jsx)(m.A, {
                                    routeInfo: (0, u.cT)({
                                        query: {
                                            q: "textra"
                                        }
                                    }),
                                    children: "Find your Textra"
                                })
                            })]
                        }), i ? (0, a.jsx)("p", {
                            children: "Textra is available on many of our best-loved items, though it's important to note that some designs may not include this option yet."
                        }) : null]
                    })]
                }),
                f = ({
                    isOpen: e,
                    currentVideo: t,
                    setCurrentVideo: s,
                    hasTextra: i,
                    isGiftCardPage: r
                }) => (0, a.jsxs)(a.Fragment, {
                    children: [i ? (0, a.jsx)(x, {
                        currentVideo: t,
                        isGiftCardPage: r,
                        isOpen: e,
                        setCurrentVideo: s
                    }) : null, (0, a.jsx)(g, {
                        currentVideo: t,
                        isOpen: e,
                        setCurrentVideo: s
                    }), (0, a.jsx)(p, {
                        currentVideo: t,
                        isOpen: e,
                        setCurrentVideo: s
                    })]
                })
        },
        63145: e => {
            e.exports = {
                internalSvgImage: "MaskedImage_internalSvgImage__M2HXE"
            }
        }
    }
]);
//#
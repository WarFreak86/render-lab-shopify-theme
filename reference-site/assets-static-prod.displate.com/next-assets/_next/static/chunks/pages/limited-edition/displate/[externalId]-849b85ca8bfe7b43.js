(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9013, 9127], {
        305: (e, t, i) => {
            "use strict";
            i.d(t, {
                X: () => o
            });
            var r = i(37876),
                s = i(77161),
                a = i(87050);
            let n = {
                    [a.t.M]: {
                        width: 244,
                        height: 174,
                        x: 114,
                        y: 279
                    },
                    [a.t.L]: {
                        width: 307,
                        height: 219,
                        x: 85,
                        y: 234
                    }
                },
                l = {
                    [a.t.M]: {
                        width: 171,
                        height: 238,
                        x: 148,
                        y: 229
                    },
                    [a.t.L]: {
                        width: 214,
                        height: 298,
                        x: 128,
                        y: 161
                    }
                },
                o = ({
                    imageSrc: e,
                    imageSrcSet: t,
                    orientation: i,
                    size: o,
                    frame: d,
                    isGloss: c = !1,
                    isMatt: m = !1,
                    className: u,
                    enableClipPath: p = !1
                }) => {
                    let h = i === a.JH.HORIZONTAL ? n[o] : l[o],
                        x = (0, s.n9)(d || a.p1.NONE, i),
                        _ = (0, s.qe)(o, i),
                        g = c ? (0, s.Mb)(i) : void 0,
                        j = {
                            x: 0,
                            y: 0,
                            width: h.width,
                            height: h.height
                        };
                    x && (j = (0, s.VO)(h.width, h.height, _, i)), a.JH.VERTICAL;
                    let v = .011 * j.width,
                        f = .016 * j.height,
                        y = .978 * j.width,
                        w = .968 * j.height;
                    return (0, r.jsxs)("svg", {
                        className: u,
                        "data-testid": "artwork-picture-masked-svg",
                        height: "100%",
                        viewBox: `0 0 ${h.width} ${h.height}`,
                        width: "100%",
                        children: [p ? (0, r.jsx)("defs", {
                            children: (0, r.jsx)("clipPath", {
                                id: "artwork-clip",
                                children: (0, r.jsx)("rect", {
                                    height: w,
                                    width: y,
                                    x: v,
                                    y: f
                                })
                            })
                        }) : null, (0, r.jsxs)("g", {
                            clipPath: p ? "url(#artwork-clip)" : void 0,
                            children: [(0, r.jsx)("foreignObject", {
                                height: j.height,
                                name: "artworkImage",
                                width: j.width,
                                x: j.x,
                                y: j.y,
                                children: (0, r.jsx)("img", {
                                    alt: "artwork",
                                    "data-pin-nopin": "true",
                                    draggable: "false",
                                    loading: "lazy",
                                    src: e,
                                    srcSet: t,
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        height: "100%"
                                    }
                                })
                            }), m ? (0, r.jsx)("rect", {
                                fill: "white",
                                height: j.height,
                                opacity: "0.12",
                                style: {
                                    mixBlendMode: "normal"
                                },
                                width: j.width,
                                x: j.x,
                                y: j.y
                            }) : null, c && g ? (0, r.jsx)("foreignObject", {
                                height: j.height,
                                name: "glossImage",
                                width: j.width,
                                x: j.x,
                                y: j.y,
                                children: (0, r.jsx)("img", {
                                    alt: "gloss",
                                    draggable: "false",
                                    src: g,
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        height: "100%"
                                    }
                                })
                            }) : null, x ? (0, r.jsx)("foreignObject", {
                                height: h.height,
                                name: "frameImage",
                                width: h.width,
                                x: 0,
                                y: 0,
                                children: (0, r.jsx)("img", {
                                    alt: "frame",
                                    draggable: "false",
                                    src: x,
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        height: "100%"
                                    }
                                })
                            }) : null]
                        })]
                    })
                }
        },
        1833: (e, t, i) => {
            "use strict";
            i.d(t, {
                o: () => r
            });
            let r = (0, i(8106).v)(e => ({
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
        2673: e => {
            e.exports = {
                wrapper: "LimitedEditionCertificate_wrapper__SxKsn",
                figure: "LimitedEditionCertificate_figure__1XYFC",
                image: "LimitedEditionCertificate_image__vYqoJ",
                ultraLimitedImage: "LimitedEditionCertificate_ultraLimitedImage__jVEJW",
                caption: "LimitedEditionCertificate_caption__J7tP3"
            }
        },
        2762: e => {
            e.exports = {
                swiperStyled: "GallerySliderThumbnails_swiperStyled__sSIVl",
                swiperSlideStyled: "GallerySliderThumbnails_swiperSlideStyled__w_dwu"
            }
        },
        3231: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => m,
                n: () => c
            });
            var r, s = i(37876),
                a = i(14232),
                n = i(69241),
                l = i(98477),
                o = i(67013),
                d = i.n(o),
                c = ((r = {}).DOWN_LEFT = "down_left", r.DOWN_MID = "down_mid", r);
            let m = ({
                children: e,
                icon: t,
                className: i,
                containerClassName: r,
                testid: o = "tooltip",
                onShow: c,
                isActive: m,
                isCropper: u,
                position: p
            }) => {
                let h, x, _, [g, j] = (0, a.useState)(!1),
                    [v, f] = (0, a.useState)({}),
                    [y, w] = (0, a.useState)(!1),
                    [L, b] = (0, a.useState)(0);
                (0, a.useEffect)(() => {
                    g && E.current && b(E.current.getBoundingClientRect().width)
                }, [g]);
                let E = (0, a.useRef)(null);
                (0, a.useEffect)(() => {
                    let e = E.current,
                        {
                            bottom: t
                        } = v;
                    e && t && e.style.setProperty("--tooltip-bottom-transformed", `${t+4}px`)
                }, [y, v]);
                let k = (0, a.useMemo)(() => {
                        let e = "down_mid" === p && v.left ? v.left - L / 2 : v.left;
                        return { ...v,
                            left: e
                        }
                    }, [v, p, L]),
                    N = (0, n.A)(d().contentWrapper, i, {
                        [d().visible]: y,
                        [d().downLeft]: "down_left" === p,
                        [d().downMid]: "down_mid" === p
                    });
                return (0, s.jsxs)("div", {
                    className: (0, n.A)(d().tooltip, r),
                    "data-testid": o,
                    onMouseEnter: e => {
                        let t, i, r;
                        return m && (i = (t = e.currentTarget ? .getBoundingClientRect()).width / 2, r = 1.4 * t.height, void(h = setTimeout(() => {
                            p ? "down_left" === p ? f({
                                right: -(t.right + i - 2),
                                top: -(window.innerHeight - t.top - r)
                            }) : "down_mid" === p && f({
                                left: t.left + i,
                                top: -(window.innerHeight - t.top - r)
                            }) : f({
                                left: u ? t.left : t.left + i - 2,
                                bottom: window.innerHeight - t.top + t.height / 2
                            }), j(!0), c && c()
                        }, 500), x = setTimeout(() => {
                            w(!0)
                        }, 550)))
                    },
                    onMouseLeave: () => m && void(h && clearTimeout(h), x && clearTimeout(x), w(!1), setTimeout(() => {
                        j(!1)
                    }, 250)),
                    children: [(0, s.jsx)("div", {
                        className: d().iconWrapper,
                        children: t
                    }), g ? (0, l.createPortal)((0, s.jsx)("div", {
                        className: N,
                        "data-testid": "tooltip-content",
                        ref: E,
                        style: { ...k
                        },
                        children: (0, s.jsx)("div", {
                            className: d().content,
                            children: e
                        })
                    }), ((_ = document.getElementById("tooltip-wrapper")) || ((_ = document.createElement("div")).setAttribute("id", "tooltip-wrapper"), _.setAttribute("data-testid", "tooltip-wrapper"), document.body.appendChild(_)), _)) : null]
                })
            }
        },
        5421: e => {
            e.exports = {
                imageContainer: "LimitedEditionZoomPopup_imageContainer___EIg4",
                zoomImage: "LimitedEditionZoomPopup_zoomImage__4TQTz"
            }
        },
        9461: e => {
            e.exports = {
                container: "Slider_container__9ahZJ",
                navigationButton: "Slider_navigationButton__JCKeS",
                slide: "Slider_slide__TxHv7",
                navigation: "Slider_navigation__88wO5",
                prevButton: "Slider_prevButton__biZHV",
                nextButton: "Slider_nextButton__x50Ob"
            }
        },
        9633: (e, t, i) => {
            "use strict";
            i.d(t, {
                e: () => s
            });
            var r = i(87050);
            let s = e => {
                switch (e) {
                    case r.jt.STANDARD:
                        return "Limited Edition";
                    case r.jt.ULTRA:
                        return "Ultra Limited Edition";
                    case r.jt.EVENT_EXCLUSIVE:
                        return "Event Limited Edition";
                    default:
                        return "Limited Edition"
                }
            }
        },
        10752: (e, t, i) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/limited-edition/displate/[externalId]", function() {
                return i(51113)
            }])
        },
        10867: e => {
            e.exports = {
                container: "LimitedEditionPulsometer_container__H51lQ",
                containerCentered: "LimitedEditionPulsometer_containerCentered__tm_sd",
                pulsometerText: "LimitedEditionPulsometer_pulsometerText__Xjhe6",
                pulsometerTextTiny: "LimitedEditionPulsometer_pulsometerTextTiny__BJFHu",
                pulsometerTextSoldOut: "LimitedEditionPulsometer_pulsometerTextSoldOut__r0HaV",
                noBold: "LimitedEditionPulsometer_noBold__AC1V4",
                pulsometer: "LimitedEditionPulsometer_pulsometer__u4WST"
            }
        },
        14078: (e, t, i) => {
            "use strict";
            i.d(t, {
                F: () => d
            });
            var r = i(37876),
                s = i(36256),
                a = i(14619),
                n = i(29633);
            let l = () => (0, r.jsx)("div", {
                    className: "h-10 w-[240px] overflow-hidden rounded-[46px]",
                    children: (0, r.jsx)(s.EA, {
                        className: "size-full"
                    })
                }),
                o = () => (0, r.jsx)("div", {
                    className: "h-10 w-[150px]",
                    children: (0, r.jsx)(s.EA, {
                        className: "size-full"
                    })
                }),
                d = ({
                    showHeader: e = !0,
                    showFooter: t = !0,
                    testId: i,
                    className: d
                }) => (0, r.jsxs)("div", {
                    className: (0, a.cn)("flex flex-col items-center pb-14", d),
                    "data-testid": i,
                    children: [e ? (0, r.jsx)(l, {}) : null, (0, r.jsx)("div", {
                        className: (0, a.cn)("my-10 grid w-full auto-rows-[minmax(100px,auto)] grid-cols-2 grid-flow-dense gap-4", "md:grid-cols-4 md:gap-6", "lg:grid-cols-5", "xl:grid-cols-6"),
                        children: [...Array(n.T).keys()].map(e => (0, r.jsx)(s.EA, {
                            className: "aspect-5/7 h-auto! size-full"
                        }, e))
                    }), t ? (0, r.jsx)(o, {}) : null]
                })
        },
        16178: e => {
            e.exports = {
                separator: "LimitedEditionDetails_separator__5L8Eo",
                section: "LimitedEditionDetails_section__K8cn4",
                authorWrapper: "LimitedEditionDetails_authorWrapper__TcZCJ"
            }
        },
        16606: e => {
            e.exports = {
                downloadLink: "AddToCalendarButton_downloadLink__EnIcD",
                icon: "AddToCalendarButton_icon__2iz4P"
            }
        },
        18368: e => {
            e.exports = {
                container: "LimitedEditionProductPage_container__bWmoj",
                hiddenForDesktop: "LimitedEditionProductPage_hiddenForDesktop__7TLBO",
                hiddenForMobile: "LimitedEditionProductPage_hiddenForMobile__mUTcW"
            }
        },
        18443: (e, t, i) => {
            "use strict";
            i.d(t, {
                d: () => d
            });
            var r = i(14232),
                s = i(56557),
                a = i.n(s),
                n = i(26023),
                l = i(35891),
                o = i(87050);
            let d = e => {
                let {
                    userInfo: t
                } = (0, r.useContext)(l.cy), i = (0, n.Oh)(e.startDate), s = 0 === e.amountLeft, d = i && t ? .account.subscriptionActive && !s;
                return {
                    isSoldOut: s,
                    isUpcomingDisplateForUser: e.status === o.lL.UPCOMING && !d,
                    userBasedStartTime: t ? .account.subscriptionActive ? (0, n.V9)(e.startDate) : a()(e.startDate)
                }
            }
        },
        20019: (e, t, i) => {
            "use strict";
            i.d(t, {
                M: () => n,
                O: () => l
            });
            var r = i(37876),
                s = i(14232),
                a = i(90511);
            let n = (0, s.createContext)({
                    uvert: a.v.GeneralUser
                }),
                l = ({
                    children: e,
                    uvert: t
                }) => (0, r.jsx)(n.Provider, {
                    value: {
                        uvert: t
                    },
                    children: e
                })
        },
        23524: e => {
            e.exports = {
                productBuyBoxWrapper: "LimitedEditionBuyBox_productBuyBoxWrapper__scHwq",
                pulsometerWrapper: "LimitedEditionBuyBox_pulsometerWrapper__oXVw1",
                soldOutBox: "LimitedEditionBuyBox_soldOutBox__7mFDq",
                restrictedBox: "LimitedEditionBuyBox_restrictedBox__tACd5",
                soldOutText: "LimitedEditionBuyBox_soldOutText__wlM9o",
                restrictedText: "LimitedEditionBuyBox_restrictedText__QgcdR",
                productBuyBoxContent: "LimitedEditionBuyBox_productBuyBoxContent__44AXt",
                benefitsList: "LimitedEditionBuyBox_benefitsList__F4tV9",
                featuresList: "LimitedEditionBuyBox_featuresList__PIG0D",
                checkmarkIcon: "LimitedEditionBuyBox_checkmarkIcon__n5DuI",
                compareImageBox: "LimitedEditionBuyBox_compareImageBox__MWKUi",
                compareImageSize: "LimitedEditionBuyBox_compareImageSize___IMHQ",
                format: "LimitedEditionBuyBox_format__L7fkN",
                compareImage: "LimitedEditionBuyBox_compareImage__yQGGb",
                purchaseWrapper: "LimitedEditionBuyBox_purchaseWrapper__ww5zt",
                hiddenOnDesktop: "LimitedEditionBuyBox_hiddenOnDesktop__CiUao",
                hiddenOnMobile: "LimitedEditionBuyBox_hiddenOnMobile__r8BPw",
                buttonWrapper: "LimitedEditionBuyBox_buttonWrapper__elOll",
                deliveryText: "LimitedEditionBuyBox_deliveryText__2J1ZE",
                estimatedDelivery: "LimitedEditionBuyBox_estimatedDelivery__LMION",
                trustpilotWrapper: "LimitedEditionBuyBox_trustpilotWrapper__5GTDI",
                eventExclusiveContainer: "LimitedEditionBuyBox_eventExclusiveContainer__3o7_H",
                eventExclusiveWrapper: "LimitedEditionBuyBox_eventExclusiveWrapper__NneJx",
                eventExclusiveText: "LimitedEditionBuyBox_eventExclusiveText__Qx3y4"
            }
        },
        24651: (e, t, i) => {
            "use strict";
            i.d(t, {
                W: () => h
            });
            var r = i(37876),
                s = i(95494),
                a = i(14232),
                n = i(53969),
                l = i(35093),
                o = i.n(l);
            let d = ({
                    children: e,
                    isZoomed: t,
                    setIsZoomed: i
                }) => {
                    let s = (0, n.Bn)(),
                        {
                            zoomIn: a,
                            resetTransform: l
                        } = (0, n._5)();
                    return t || l(), (0, r.jsx)("div", {
                        className: o().pinchZoomImageWrapper,
                        onClick: () => void(1 === s.transformState.scale && (a(), i(!0))),
                        children: e
                    })
                },
                c = ({
                    children: e
                }) => {
                    let t = (0, a.useRef)(null),
                        [i, s] = a.useState(!1);
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("div", {
                            className: o().pinchZoomWrapper,
                            children: (0, r.jsx)(n.GT, {
                                centerOnInit: !0,
                                disablePadding: !0,
                                limitToBounds: !0,
                                maxScale: 2.5,
                                minScale: 1,
                                onZoom: ({
                                    state: e
                                }) => {
                                    1 === e.scale ? s(!1) : e.scale > 1 && s(!0)
                                },
                                ref: t,
                                children: (0, r.jsx)(n.WZ, {
                                    children: (0, r.jsx)(d, {
                                        isZoomed: i,
                                        setIsZoomed: s,
                                        children: e
                                    })
                                })
                            })
                        })
                    })
                };
            var m = i(36256),
                u = i(53817),
                p = i.n(u);
            let h = ({
                children: e,
                onClose: t,
                additionalButtons: i,
                showWatermarkMessage: a = !0
            }) => {
                let n = Array.isArray(e) ? e[0] : e,
                    l = Array.isArray(e) && e.length > 1 ? e.slice(1) : null;
                return (0, r.jsx)("div", {
                    className: p().overlay,
                    "data-testid": "popup",
                    role: "dialog",
                    children: (0, r.jsxs)("section", {
                        className: p().wrapper,
                        children: [a ? (0, r.jsx)("aside", {
                            className: p().aside,
                            children: "Watermark will not appear on purchased poster"
                        }) : null, (0, r.jsx)(c, {
                            children: n
                        }), (0, r.jsxs)("div", {
                            className: p().buttonsWrapper,
                            children: [(0, r.jsx)(m.ff, {
                                "aria-label": "Close zoom",
                                "data-testid": "trigger-zoom-button",
                                icon: (0, r.jsx)(s.A, {}),
                                onClick: t,
                                size: "lg",
                                variant: "glass"
                            }), l, i]
                        })]
                    })
                })
            }
        },
        25093: e => {
            e.exports = {
                wrapper: "LimitedEditionUsp_wrapper__x5Wib",
                usp: "LimitedEditionUsp_usp__2UjkS",
                icon: "LimitedEditionUsp_icon__VeTi8",
                text: "LimitedEditionUsp_text__SCEjy",
                textTooltipWrapper: "LimitedEditionUsp_textTooltipWrapper__PzhgL",
                tooltip: "LimitedEditionUsp_tooltip__MmjBi",
                tooltipContent: "LimitedEditionUsp_tooltipContent__rgGPQ"
            }
        },
        26023: (e, t, i) => {
            "use strict";
            i.d(t, {
                Oh: () => a,
                Pd: () => n,
                V9: () => d,
                jq: () => l,
                lr: () => o
            });
            var r = i(56557),
                s = i.n(r);
            let a = e => {
                    let t = s()(),
                        i = s()(e);
                    return !i.isBefore(t) && 24 > i.diff(t, "hours")
                },
                n = e => {
                    let t = s()();
                    return s()(e).isAfter(t)
                },
                l = (e, t, i) => {
                    let r = e > 1 ? `${t}s` : t;
                    return i ? `${e}${r.charAt(0)}` : `${e} ${r}`
                };

            function o(e, t) {
                let i = new Date,
                    r = new Date(e).getTime() - i.getTime();
                return t ? .subtractHours && (r -= 60 * t.subtractHours * 6e4), {
                    daysLeft: Math.floor(r / 864e5),
                    hoursLeft: Math.floor(r / 36e5),
                    minutesLeft: Math.floor(r / 6e4 % 60)
                }
            }
            let d = e => s()(e).subtract(1, "day")
        },
        28799: (e, t, i) => {
            "use strict";
            i.d(t, {
                $: () => s
            });
            var r = i(14232);
            let s = ({
                trigger: e,
                onOpen: t,
                dataTestId: i = "trigger-zoom-button"
            }) => {
                let s = e.props;
                return (0, r.cloneElement)(e, {
                    onClick: () => {
                        t(), s.onClick ? .()
                    },
                    role: "button",
                    "data-testid": i
                })
            }
        },
        30983: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => u
            });
            var r = i(37876),
                s = i(14232),
                a = i(69241),
                n = i(90413),
                l = i(30305),
                o = i(10769),
                d = i(57845),
                c = i.n(d);
            let m = ({
                src: e,
                preload: t,
                responsive: i,
                poster: d,
                autoPlay: m,
                className: u,
                mobileSize: p,
                desktopSize: h,
                ref: x,
                ..._
            }) => {
                let g = (0, n.A)(),
                    {
                        isTabletOrDesktop: j
                    } = (0, l.Q)(),
                    [v, f] = (0, s.useState)(null),
                    y = (0, s.useMemo)(() => {
                        let e;
                        return (e = j ? h : p) ? {
                            width: e.width,
                            ...e.height && {
                                height: e.height
                            }
                        } : {
                            width: j ? 1080 : 720
                        }
                    }, [j, h, p]),
                    w = (0, s.useMemo)(() => d || (g && e ? (0, o.$4)(e, { ...y,
                        videoPoster: !0
                    }) : void 0), [d, g, e, y]),
                    L = w ? "" : "#t=0.1";
                return (0, s.useEffect)(() => {
                    let e = async () => {
                        x && "current" in x && x.current && await x.current.play()
                    };
                    !v || m && e()
                }, [m, v, x]), (0, s.useEffect)(() => {
                    g && f(y)
                }, [g, y]), (0, r.jsx)("video", {
                    autoPlay: !1,
                    className: (0, a.A)(c().video, u, {
                        [c().responsive]: i
                    }),
                    playsInline: !0,
                    poster: w,
                    preload: t || "metadata",
                    ref: x,
                    src: v ? `${(0,o.$4)(e,v)}${L}` : void 0,
                    ..._
                })
            };
            m.displayName = "SpeedSizeVideoRaw";
            let u = m
        },
        32008: e => {
            e.exports = {
                root: "KlarnaInfoMessage_root__YUDK9"
            }
        },
        32214: (e, t, i) => {
            "use strict";
            i.d(t, {
                v: () => v
            });
            var r = i(37876),
                s = i(14232),
                a = i(69241),
                n = i(27555),
                l = i(51260),
                o = i.n(l);
            let d = ({
                variant: e = "green",
                className: t
            }) => (0, r.jsx)("span", {
                className: `${o().container} ${o()[e]} ${t||""}`,
                "data-testid": "pulsometer",
                "data-variant": e
            });
            var c = i(18443),
                m = i(26023);
            let u = (e, t, i) => "timeUntilPremiere" === e ? ((e, t) => {
                let {
                    daysLeft: i,
                    hoursLeft: r,
                    minutesLeft: s
                } = e;
                return r >= 24 ? `${(0,m.jq)(i,"day",t)} ${(0,m.jq)(r%24,"hour",t)}` : r > 0 ? `${(0,m.jq)(r,"hour",t)}` : `${(0,m.jq)(s,"minute",t)}`
            })(t, i) : (e => {
                let {
                    daysLeft: t,
                    hoursLeft: i,
                    minutesLeft: r
                } = e;
                return t > 0 ? `${(0,m.jq)(t,"day")} left` : i > 0 ? `${(0,m.jq)(i,"hour")} left` : r > 0 ? `${(0,m.jq)(r,"minute")} left` : ""
            })(t);
            var p = i(35891),
                h = i(36256),
                x = i(23278),
                _ = i(87050),
                g = i(10867),
                j = i.n(g);
            let v = ({
                limitedEdition: e,
                classes: t,
                dataTestId: i,
                variant: l = "listing"
            }) => {
                var o;
                let {
                    userInfo: g
                } = (0, s.useContext)(p.cy), {
                    size: v,
                    startDate: f,
                    endDate: y
                } = e, {
                    isSoldOut: w,
                    isUpcomingDisplateForUser: L
                } = (0, c.d)(e), b = e.type === _.jt.EVENT_EXCLUSIVE, E = g ? .account.subscriptionActive, k = "listing" === l, N = "pdp" === l, S = (0, m.Pd)(f), {
                    daysLeft: C,
                    hoursLeft: I,
                    minutesLeft: A
                } = f ? (0, m.lr)(f, {
                    subtractHours: 24 * !!E
                }) : {
                    daysLeft: 0,
                    hoursLeft: 0,
                    minutesLeft: 0
                }, {
                    daysLeft: P,
                    hoursLeft: B,
                    minutesLeft: T
                } = y ? (0, m.lr)(y) : {
                    daysLeft: 0,
                    hoursLeft: 0,
                    minutesLeft: 0
                }, M = f && (0, m.Oh)(f), W = u("timeUntilPremiere", {
                    daysLeft: C,
                    hoursLeft: I,
                    minutesLeft: A
                }, k), D = u("timeUntilEnd", {
                    daysLeft: P,
                    hoursLeft: B,
                    minutesLeft: T
                }, k);
                return (0, r.jsxs)("div", {
                    className: (0, a.A)(j().container, {
                        [j().containerCentered]: k
                    }, t ? .container),
                    "data-testid": i,
                    children: [L ? null : (0, r.jsx)(d, {
                        className: t ? .pulsometer,
                        variant: (o = !!E && !!M, b ? "noDot" : S && !o || w ? "grey" : P < 23 && P >= 8 ? "orange" : P < 8 && P >= 0 ? "red" : "green")
                    }), (0, r.jsx)("div", {
                        className: (0, a.A)(j().pulsometerText, {
                            [j().pulsometerTextSoldOut]: w
                        }),
                        children: (() => {
                            if (w) return "Sold out";
                            if (b && N) return "Available only on selected events";
                            if (b) return "Event Exclusive";
                            if (k && L) return `Available in: ${W}`;
                            if (N && S && (M && !E || !M)) {
                                let e, t;
                                return e = `Available in ${W} - mark your calendar!`, t = (0, r.jsxs)("span", {
                                    className: j().pulsometerTextTiny,
                                    children: ["Join the", " ", (0, r.jsx)(h.N_, {
                                        asChild: !0,
                                        children: (0, r.jsx)(n.A, {
                                            routeInfo: (0, x.a)(),
                                            children: "Displate Club"
                                        })
                                    }), " ", M ? "and order yours now." : "and order yours 24h early."]
                                }), E ? (0, r.jsx)(r.Fragment, {
                                    children: e
                                }) : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("span", {
                                        children: e
                                    }), (0, r.jsx)("br", {}), t]
                                })
                            }
                            return (0, r.jsxs)(r.Fragment, {
                                children: [D, (0, r.jsxs)("span", {
                                    className: j().noBold,
                                    children: [" or until ", v, " are sold"]
                                })]
                            })
                        })()
                    })]
                })
            }
        },
        35093: e => {
            e.exports = {
                pinchZoomWrapper: "PinchZoom_pinchZoomWrapper__bbZsz",
                pinchZoomImageWrapper: "PinchZoom_pinchZoomImageWrapper__I0kLF"
            }
        },
        36294: () => {},
        37038: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => c
            });
            var r = i(37876),
                s = i(27555),
                a = i(14399),
                n = i(14619);
            let l = ({
                itemName: e,
                artist: t,
                className: i
            }) => {
                let s = (0, a.A)(t.avatarUrl, t.isLicensed, [48, 96]);
                return (0, r.jsx)("img", {
                    alt: e || "avatar",
                    className: (0, n.cn)("mr-2 h-6 w-6 rounded-full border border-neutral-400", i),
                    sizes: s.sizes,
                    src: s.widthsSrc[0],
                    srcSet: s.srcSet
                })
            };
            var o = i(63735),
                d = i.n(o);
            let c = ({
                itemUrl: e,
                itemName: t,
                artist: i
            }) => (0, r.jsx)("li", {
                className: d().breadcrumbItem,
                "data-testid": "breadcrumb-item",
                children: e ? (0, r.jsxs)(s.A, {
                    className: d().breadcrumbItemLink,
                    itemProp: "item",
                    routeInfo: e,
                    children: [i ? (0, r.jsx)(l, {
                        artist: i,
                        itemName: t
                    }) : null, (0, r.jsx)("span", {
                        itemProp: "name",
                        children: t
                    })]
                }) : (0, r.jsx)("span", {
                    itemProp: "name",
                    children: t
                })
            }, t)
        },
        40636: (e, t, i) => {
            "use strict";
            i.d(t, {
                CN: () => o,
                Tu: () => n,
                hM: () => a,
                kc: () => l,
                lB: () => d
            });
            var r = i(22884),
                s = i(51192);
            let a = ({
                    componentLocation: e,
                    authorId: t,
                    authorName: i
                }) => (0, r.u)({
                    event: "follow",
                    follow_location: e,
                    follow_id: t.toString(),
                    follow_name: i
                }),
                n = e => (0, s.O)({
                    elementId: "follow_button",
                    elementVariant: e
                }),
                l = ({
                    componentLocation: e,
                    authorId: t,
                    authorName: i
                }) => (0, r.u)({
                    event: "unfollow",
                    follow_location: e,
                    follow_id: t.toString(),
                    follow_name: i
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
        41037: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => r
            });
            let r = e => e.trim().replace(/\s/g, "_").toLowerCase()
        },
        43343: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => n
            });
            var r = i(37876),
                s = i(93568),
                a = i(36256);
            let n = ({
                className: e,
                onClick: t
            }) => (0, r.jsx)(a.ff, {
                "aria-label": "Zoom in",
                className: e,
                "data-testid": "trigger-zoom-button",
                icon: (0, r.jsx)(s.A, {}),
                onClick: t,
                size: "lg",
                variant: "glass"
            })
        },
        47486: e => {
            e.exports = {
                availabilityInfo: "DisplateClubAvailabilityInfo_availabilityInfo__Z06Bt"
            }
        },
        50703: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => l
            });
            var r = i(37876),
                s = i(14232),
                a = i(12291),
                n = i(51563);
            let l = ({
                renderSlide: e,
                impressionOptions: t,
                ...i
            }) => {
                let l = (0, s.useRef)(null),
                    o = (0, a.G)(l, t);
                return (0, r.jsx)(n.A, { ...i,
                    ref: l,
                    renderSlide: (t, i) => e(t, i, o)
                })
            }
        },
        51113: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                __N_SSP: () => tN,
                default: () => tk
            });
            var r = i(37876),
                s = i(15657),
                a = i(77518),
                n = i(68130),
                l = i(10769),
                o = i(25282),
                d = i(14232);
            let c = (0, d.createContext)({});
            var m = i(22884),
                u = i(98315),
                p = i(16373),
                h = i(60539),
                x = i(69241),
                _ = i(27555),
                g = i(14399),
                j = i(36256),
                v = i(91680),
                f = i(72678),
                y = i(68221),
                w = i.n(y);
            let L = ({
                    className: e
                }) => {
                    let {
                        limitedEdition: {
                            general: t
                        }
                    } = (0, d.useContext)(c), {
                        author: i
                    } = t, s = (0, g.A)(i.avatarUrl, i.isLicensed, [190, 380]), a = i.isLicensed ? (0, f.xz)({
                        slug: i.slug
                    }) : (0, v.bo)({
                        nick: i.nick,
                        licensed: !1
                    });
                    return (0, r.jsxs)("div", {
                        className: (0, x.A)(w().wrapper, e),
                        children: [(0, r.jsx)("div", {
                            className: w().avatar,
                            children: (0, r.jsx)("img", {
                                alt: i.name,
                                "data-testid": "author-image",
                                height: 42,
                                loading: "lazy",
                                src: s.src,
                                srcSet: s.srcSet,
                                width: 42
                            })
                        }), (0, r.jsx)(j.N_, {
                            asChild: !0,
                            children: (0, r.jsx)(_.A, {
                                "data-testid": "author-link",
                                routeInfo: a,
                                children: i.name
                            })
                        })]
                    })
                },
                b = () => {
                    let e = (0, d.useContext)(c);
                    if (!e) throw Error("useLimitedEditionContext has to be used within <LimitedEditionContext.Provider>");
                    return e
                };
            var E = i(87050),
                k = i(2673),
                N = i.n(k);
            let S = () => {
                let {
                    limitedEdition: {
                        general: e
                    }
                } = b(), t = e.type === E.jt.ULTRA, i = (0, l.v9)({
                    assetPath: "/images/limited-edition/pdp/limited_certificate.jpeg",
                    widths: [387, 774]
                });
                return (0, r.jsx)("div", {
                    className: N().wrapper,
                    children: (0, r.jsxs)("figure", {
                        className: N().figure,
                        children: [t && e.productDetails ? .url ? (0, r.jsx)("img", {
                            alt: e.productDetails.alt || "Author's signature",
                            className: (0, x.A)(N().image, N().ultraLimitedImage),
                            "data-testid": "certificate-image",
                            loading: "lazy",
                            src: e.productDetails.url
                        }) : (0, r.jsx)("img", {
                            alt: "Limited Edition Certificate",
                            className: N().image,
                            "data-testid": "certificate-image",
                            loading: "lazy",
                            sizes: i.sizes,
                            src: i.src,
                            srcSet: i.srcSet
                        }), (0, r.jsx)("figcaption", {
                            className: N().caption,
                            "data-testid": "certificate-caption",
                            children: "Kickass designs enhanced for maximum greatness – that’s our Limited Edition prints. Using our love for the original art and some technical wizardry, we bring their inherent epicness to a whole other level that you simply have to experience for yourself."
                        })]
                    })
                })
            };
            var C = i(9633),
                I = i(72697),
                A = i.n(I);
            let P = ({
                hasDescription: e = !0
            }) => {
                let {
                    limitedEdition: {
                        general: t
                    }
                } = (0, d.useContext)(c), {
                    title: i,
                    type: s,
                    texts: a
                } = t;
                return (0, r.jsxs)("div", {
                    className: A().wrapper,
                    children: [(0, r.jsx)("h2", {
                        className: A().type,
                        children: (0, C.e)(s)
                    }), (0, r.jsx)("h1", {
                        className: A().title,
                        children: i
                    }), e ? (0, r.jsx)("p", {
                        className: A().description,
                        "data-testid": "le-description",
                        children: a.main
                    }) : null]
                })
            };
            var B = i(3231),
                T = i(97278);
            let M = e => (0, r.jsx)("svg", {
                    height: "1em",
                    viewBox: "0 0 62 62",
                    width: "1em",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, r.jsxs)("g", {
                        "data-name": "Group 14298",
                        id: "Group_14298",
                        transform: "translate(-1058 -1222)",
                        children: [(0, r.jsx)("path", {
                            d: "M0,0H62V62H0Z",
                            "data-name": "Path 4825",
                            fill: "#fff",
                            id: "Path_4825",
                            opacity: 0,
                            transform: "translate(1058 1222)"
                        }), (0, r.jsxs)("g", {
                            "data-name": "Group 6023",
                            id: "Group_6023",
                            transform: "translate(1065 1227)",
                            children: [(0, r.jsx)("path", {
                                d: "M101.308,58.389c1.473,1.642.776,2.842.776,4.611",
                                "data-name": "Path 4826",
                                fill: "none",
                                id: "Path_4826",
                                stroke: "#020203",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 1.6,
                                transform: "translate(-60.198 -33)"
                            }), (0, r.jsx)("path", {
                                d: "M78.6,11.287s.567-3.469,5-2.946",
                                "data-name": "Path 4834",
                                fill: "none",
                                id: "Path_4834",
                                stroke: "#000",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 1.6,
                                transform: "translate(-45.599 -5.287)"
                            }), (0, r.jsx)("path", {
                                d: "M12.9,53.8c0-4.278.182-7.683,2-11",
                                "data-name": "Path 4827",
                                fill: "none",
                                id: "Path_4827",
                                stroke: "#020203",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 1.6,
                                transform: "translate(-7.901 -24.8)"
                            }), (0, r.jsx)("path", {
                                d: "M6,68.7c-3.07,0-5-2.949-5-5.726S2.93,58.7,6,58.7",
                                "data-name": "Path 4828",
                                fill: "none",
                                id: "Path_4828",
                                stroke: "#020203",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 1.6,
                                transform: "translate(-1 -32.7)"
                            }), (0, r.jsx)("path", {
                                d: "M101.3,72.4c2.949,0,5-2.667,5-8",
                                "data-name": "Path 4830",
                                fill: "none",
                                id: "Path_4830",
                                stroke: "#020203",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 1.6,
                                transform: "translate(-59.3 -36.4)"
                            }), (0, r.jsx)("path", {
                                d: "M30,49.367S40,45.991,40,54.6v6",
                                "data-name": "Path 4832",
                                fill: "none",
                                id: "Path_4832",
                                stroke: "#020203",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 1.6,
                                transform: "translate(-15.001 -26.715)"
                            }), (0, r.jsx)("path", {
                                d: "M18.136,3.763C31.515-7.584,53.471,19.507,53.471,19.507s5.232,6.509,3.474,8.532a2.634,2.634,0,0,1-3.817.176c-20.37-14.865-39.152-8.8-39.152-8.8s-4.846-4.4,1.973-12.578",
                                "data-name": "Path 4833",
                                fill: "none",
                                id: "Path_4833",
                                stroke: "#000",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 1.6,
                                transform: "translate(-9.307 -0.986)"
                            }), (0, r.jsx)("path", {
                                d: "M12.9,79.3c1.387,9.692,9.67,18,18.542,18a14.449,14.449,0,0,0,8.83-2.683A24.608,24.608,0,0,0,48.807,83.8,25.535,25.535,0,0,0,49.9,79.689",
                                "data-name": "Path 4835",
                                fill: "none",
                                id: "Path_4835",
                                stroke: "#020203",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 1.6,
                                transform: "translate(-7.4 -44.3)"
                            }), (0, r.jsxs)("g", {
                                "data-name": "Group 6022",
                                id: "Group_6022",
                                transform: "translate(13.001 39)",
                                children: [(0, r.jsx)("path", {
                                    d: "M38.072,89.331s-1.317-2.656-5.452,1.642-5.818.676-5.489-1.111c.293-1.593,1.5-1.207,1.5-1.207",
                                    "data-name": "Path 4836",
                                    fill: "none",
                                    id: "Path_4836",
                                    stroke: "#005eff",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeMiterlimit: 10,
                                    strokeWidth: 1.6,
                                    transform: "translate(-27.09 -88.52)"
                                }), (0, r.jsx)("path", {
                                    d: "M31.2,96.562s7.868,4.153,9.441-1.062",
                                    "data-name": "Path 4837",
                                    fill: "none",
                                    id: "Path_4837",
                                    stroke: "#005eff",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeMiterlimit: 10,
                                    strokeWidth: 1.6,
                                    transform: "translate(-29.696 -92.129)"
                                }), (0, r.jsx)("path", {
                                    d: "M57.2,89.331s1.317-2.656,5.452,1.642,5.818.676,5.489-1.111c-.329-1.593-1.5-1.159-1.5-1.159",
                                    "data-name": "Path 4838",
                                    fill: "none",
                                    id: "Path_4838",
                                    stroke: "#005eff",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeMiterlimit: 10,
                                    strokeWidth: 1.6,
                                    transform: "translate(-46.182 -88.52)"
                                }), (0, r.jsx)("path", {
                                    d: "M66.641,96.562S58.774,100.715,57.2,95.5",
                                    "data-name": "Path 4839",
                                    fill: "none",
                                    id: "Path_4839",
                                    stroke: "#005eff",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeMiterlimit: 10,
                                    strokeWidth: 1.6,
                                    transform: "translate(-46.182 -92.129)"
                                })]
                            }), (0, r.jsx)("path", {
                                d: "M32.3,33.933s13.137-2.094,24,5.746",
                                "data-name": "Path 4840",
                                fill: "none",
                                id: "Path_4840",
                                stroke: "#000",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 1.6,
                                transform: "translate(-19.301 -20.679)"
                            })]
                        })]
                    })
                }),
                W = e => (0, r.jsx)("svg", {
                    height: "1em",
                    viewBox: "0 0 100 100",
                    width: "1em",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, r.jsxs)("g", {
                        id: "icon_magnet2",
                        transform: "translate(-821 -974)",
                        children: [(0, r.jsx)("g", {
                            "data-name": "Group 9317",
                            id: "Group_9317",
                            transform: "translate(821 974)",
                            children: (0, r.jsx)("rect", {
                                "data-name": "Rectangle 1939",
                                fill: "#fff",
                                height: 100,
                                id: "Rectangle_1939",
                                opacity: 0,
                                transform: "translate(0 0)",
                                width: 100
                            })
                        }), (0, r.jsxs)("g", {
                            "data-name": "Group 9318",
                            id: "Group_9318",
                            transform: "translate(834 987)",
                            children: [(0, r.jsx)("path", {
                                d: "M1,48.959V69.5H68.77V1H1V23.939",
                                "data-name": "Path 13522",
                                fill: "none",
                                id: "Path_13522",
                                stroke: "#000",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 2,
                                transform: "translate(-1 -1)"
                            }), (0, r.jsx)("path", {
                                d: "M25.435,61.921,1,43.952S1,28.713,17.275,21.09c0,22.862,15.076,53.188,32.6,53.188",
                                "data-name": "Path 13523",
                                fill: "none",
                                id: "Path_13523",
                                stroke: "#000",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 2,
                                transform: "translate(-1 -5.775)"
                            }), (0, r.jsx)("path", {
                                d: "M48.37,36.327S48.513,21.08,64.706,21.08h4.4",
                                "data-name": "Path 13524",
                                fill: "none",
                                id: "Path_13524",
                                stroke: "#0084f5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 2,
                                transform: "translate(-12.645 -5.772)"
                            }), (0, r.jsx)("path", {
                                d: "M65.92,11.09l8.13,7.623-8.13,7.623",
                                "data-name": "Path 13525",
                                fill: "none",
                                id: "Path_13525",
                                stroke: "#0084f5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 2,
                                transform: "translate(-16.959 -3.398)"
                            }), (0, r.jsx)("path", {
                                d: "M1,71.189l5.883,5.5H75V8.09",
                                "data-name": "Path 13526",
                                fill: "none",
                                id: "Path_13526",
                                stroke: "#000",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                                strokeWidth: 2,
                                transform: "translate(-1 -2.685)"
                            })]
                        })]
                    })
                }),
                D = e => (0, r.jsxs)("svg", {
                    fill: "none",
                    height: "1em",
                    width: "1em",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, r.jsx)("path", {
                        d: "M13.705 33.324l-4.86-17.917a.305.305 0 01.217-.375l12.443-3.352M42.775 11.287l15.155 8.822a.306.306 0 01.111.418l-7.409 12.685M42.773 7.04v26.228M21.591 33.209V7.344a.308.308 0 01.189-.284.306.306 0 01.117-.023h18.549",
                        stroke: "#000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.4
                    }), (0, r.jsx)("path", {
                        d: "M36.391 27.862L32.183 24.8l-4.209 3.063a.162.162 0 01-.249-.181l1.607-4.956-4.208-3.063a.162.162 0 01.1-.293h5.2l1.607-4.956a.16.16 0 01.154-.113.161.161 0 01.153.113l1.607 4.956h5.2a.162.162 0 01.1.293l-4.208 3.063",
                        stroke: "#0084F5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.4
                    }), (0, r.jsx)("path", {
                        d: "M24.27 11.96l1.308-1.23M26.918 14.42l5.233-4.92M13.786 19.817l4.42-4.194M47.135 24.182l1.308-1.23M49.141 26.225l4.42-4.194M36.826 33.1l4.109-3.754M54.994 46.009l-.115 9.887a1.068 1.068 0 01-1.068 1.063H10.478a1.07 1.07 0 01-1.068-1.07V43.01M32.141 33.492v23.266M24.732 43.007H1.92L9.188 33.3H32l-7.268 9.708zM39.268 43.007H62.08L54.812 33.3H32l7.268 9.708z",
                        stroke: "#000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.4
                    })]
                });
            var U = i(25093),
                z = i.n(U);
            let O = () => (0, r.jsxs)("div", {
                    className: z().wrapper,
                    "data-testid": "perks-list-container",
                    children: [(0, r.jsxs)("div", {
                        className: z().usp,
                        "data-testid": "perk-item",
                        children: [(0, r.jsx)(M, {
                            className: z().icon
                        }), (0, r.jsxs)("div", {
                            className: z().textTooltipWrapper,
                            children: [(0, r.jsxs)("p", {
                                className: z().text,
                                children: ["Every purchase ", (0, r.jsx)("strong", {
                                    children: "supports"
                                }), " an Artist"]
                            }), (0, r.jsx)("div", {
                                className: z().tooltip,
                                children: (0, r.jsx)(B.A, {
                                    icon: (0, r.jsx)(T.A, {}),
                                    isActive: !0,
                                    position: B.n.DOWN_LEFT,
                                    children: (0, r.jsx)("p", {
                                        className: z().tooltipContent,
                                        children: "Every design is created and owned by one of the artists from around the world. They receive a commission for each Displate you buy."
                                    })
                                })
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: z().usp,
                        "data-testid": "perk-item",
                        children: [(0, r.jsx)(D, {
                            className: z().icon,
                            viewBox: "0 0 64 64"
                        }), (0, r.jsxs)("p", {
                            className: z().text,
                            children: ["Already ", (0, r.jsx)("strong", {
                                children: "gift packed"
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: z().usp,
                        "data-testid": "perk-item",
                        children: [(0, r.jsx)(W, {
                            className: z().icon
                        }), (0, r.jsxs)("p", {
                            className: z().text,
                            children: [(0, r.jsx)("strong", {
                                children: "Safe Wall Magnet mounting system"
                            }), (0, r.jsx)("br", {}), "which majorly decrease a risk of damaging the wall"]
                        })]
                    })]
                }),
                V = () => (0, r.jsxs)("div", {
                    className: z().wrapper,
                    "data-testid": "perks-list-container",
                    children: [(0, r.jsxs)("div", {
                        className: z().usp,
                        "data-testid": "perk-item",
                        children: [(0, r.jsx)("img", {
                            alt: "Large poster icon",
                            className: z().icon,
                            loading: "lazy",
                            src: (0, l.qH)("/images/limited-edition/pdp/l_size.svg")
                        }), (0, r.jsxs)("p", {
                            className: z().text,
                            children: [(0, r.jsx)("strong", {
                                children: "Larger Artwork"
                            }), " to crown your collection"]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: z().usp,
                        "data-testid": "perk-item",
                        children: [(0, r.jsx)("img", {
                            alt: "Exclusivity icon",
                            className: z().icon,
                            loading: "lazy",
                            src: (0, l.qH)("/images/limited-edition/pdp/exclusive.svg")
                        }), (0, r.jsxs)("p", {
                            className: z().text,
                            children: ["Art created ", (0, r.jsx)("strong", {
                                children: "exclusively for Displate"
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: z().usp,
                        "data-testid": "perk-item",
                        children: [(0, r.jsx)("img", {
                            alt: "Gift package icon",
                            className: z().icon,
                            loading: "lazy",
                            src: (0, l.qH)("/icons/limited-edition/pdp/icon_unboxing.svg")
                        }), (0, r.jsxs)("p", {
                            className: z().text,
                            children: ["Already ", (0, r.jsx)("strong", {
                                children: "gift packed"
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: z().usp,
                        "data-testid": "perk-item",
                        children: [(0, r.jsx)("img", {
                            alt: "Collector item icon",
                            className: z().icon,
                            loading: "lazy",
                            src: (0, l.qH)("/images/limited-edition/pdp/collector_item.svg")
                        }), (0, r.jsxs)("p", {
                            className: z().text,
                            children: [(0, r.jsx)("strong", {
                                children: "Rare collector item"
                            }), " in a small number of copies"]
                        })]
                    })]
                }),
                R = () => {
                    let {
                        limitedEdition: {
                            general: e
                        }
                    } = b();
                    return e.type === E.jt.ULTRA ? (0, r.jsx)(V, {}) : (0, r.jsx)(O, {})
                };
            var G = i(16178),
                H = i.n(G);
            let $ = () => {
                let {
                    limitedEdition: {
                        reviews: e
                    }
                } = b();
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: H().separator
                    }), (0, r.jsxs)("section", {
                        className: H().section,
                        "data-testid": "desktop-details-section",
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(P, {}), (0, r.jsx)(L, {
                                className: H().authorWrapper
                            }), e ? (0, r.jsx)(h.A, {
                                data: e
                            }) : null]
                        }), (0, r.jsx)(S, {}), (0, r.jsx)(R, {})]
                    }), (0, r.jsx)("div", {
                        className: H().separator
                    })]
                })
            };
            var F = i(57934),
                Z = i(93811),
                q = i(23412),
                J = i(79265),
                K = i(18120),
                X = i(43614),
                Q = i(90056),
                Y = i.n(Q);
            let ee = () => {
                let e, {
                        limitedEdition: {
                            feeds: t,
                            lowestPossiblePrice: i,
                            general: s
                        }
                    } = b(),
                    {
                        isLicensed: a
                    } = s.author;
                if (!t) return null;
                let n = (e = (0, q.P$)(t), [a ? e("branded", F.N.FANDOM_FAVES, {
                    name: "fandom faves"
                }) : e("similar", F.N.SIMILAR), e("bestselling", F.N.BESTSELLING)]);
                if (!n.some(e => e.shouldBeShown)) return null;
                let l = i ? .formatted,
                    o = "Similar styles, easier to get";
                a && l ? o = `Grab the classics from just ${l}` : a ? o = "Grab the classics" : l && (o += ` - from ${l}`);
                let d = {
                    itemListName: "Similar",
                    listingFunction: F.N.SIMILAR,
                    listingType: "masonry",
                    athenaPageName: X.$.analyticsAthenaName,
                    gaPageName: X.$.analyticsGaName
                };
                return (0, r.jsx)(K.L, {
                    callback: Z._,
                    children: (0, r.jsxs)("section", {
                        className: Y().wrapper,
                        "data-testid": "limited-edition-masonry-feed-section",
                        children: [(0, r.jsx)("h2", {
                            className: Y().title,
                            children: o
                        }), (0, r.jsx)(J.$, {
                            feeds: n,
                            metadata: d
                        })]
                    })
                })
            };
            var et = i(50703),
                ei = i(53499),
                er = i(90413),
                es = i(27888),
                ea = i(32214),
                en = i(59753),
                el = i.n(en);
            let eo = ({
                routeInfo: e,
                limitedEdition: t,
                index: i,
                useSlideImpression: s,
                onClick: a
            }) => {
                let n = (0, l.rP)("560x784", {
                        assetPath: t.imageCoreUrl,
                        widths: [200, 560]
                    }),
                    o = (0, d.useRef)(null);
                s(o, {
                    itemId: t.artworkId.toString(),
                    itemVariant: t.sku,
                    index: i
                });
                let c = (0, es.Mn)(),
                    m = t.orientation === E.JH.HORIZONTAL;
                return (0, r.jsxs)("div", {
                    className: el().wrapper,
                    "data-testid": t.status === E.lL.ACTIVE ? "slider-item-active" : "slider-item-upcoming",
                    ref: o,
                    children: [(0, r.jsx)("div", {
                        className: el().imageWrapper,
                        children: (0, r.jsx)("img", {
                            alt: t.title,
                            className: (0, x.A)(el().image, {
                                [el().imageHorizontal]: m
                            }),
                            loading: "lazy",
                            sizes: n.sizes,
                            src: n.src,
                            srcSet: n.srcSet
                        })
                    }), (0, r.jsx)(ea.v, {
                        classes: {
                            container: el().pulsometer
                        },
                        dataTestId: "limited-edition-slide-pulsometer",
                        limitedEdition: t
                    }), (0, r.jsx)("h5", {
                        className: el().type,
                        children: t.type === E.jt.ULTRA ? "Ultra Limited Edition" : "Limited Edition"
                    }), (0, r.jsx)(_.A, {
                        className: el().link,
                        onClick: () => {
                            a ? .(), window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            }), setTimeout(() => {
                                c.slideTo(0)
                            }, 1e3)
                        },
                        routeInfo: e,
                        children: (0, r.jsx)("h4", {
                            className: el().title,
                            children: t.title
                        })
                    }), (0, r.jsx)("div", {
                        className: el().price,
                        "data-testid": "limited-edition-slide-price",
                        children: t.price.formatted
                    })]
                })
            };
            var ed = i(80437),
                ec = i.n(ed);
            let em = () => {
                let e = (0, er.A)(),
                    {
                        limitedEdition: {
                            otherLimitedEditions: t
                        }
                    } = b(),
                    i = [...t.comingSoon, ...t.active];
                return e ? (0, r.jsxs)("section", {
                    className: ec().container,
                    "data-testid": "more-le-slider-section",
                    children: [(0, r.jsx)("h3", {
                        className: ec().title,
                        children: "More Limited Editions Displates"
                    }), (0, r.jsx)(K.L, {
                        callback: e => {
                            (0, m.u)({
                                event: "sst_view_item_list",
                                ecommerce: {
                                    item_list_id: "PT:product-le|LT:slider|LF:more",
                                    item_list_name: "More Limited Editions Displates",
                                    items: e.map(e => ({
                                        item_id: e.itemId,
                                        item_variant: e.itemVariant,
                                        index: e.index + 1
                                    }))
                                }
                            })
                        },
                        children: (0, r.jsx)(et.A, {
                            additionalClassNames: {
                                slide: ec().slide,
                                navigation: ec().navigation
                            },
                            keyExtractor: e => e.artworkId.toString(),
                            options: {
                                slidesPerView: "auto",
                                breakpoints: {
                                    [ei.as]: {
                                        slidesPerView: 5.5
                                    }
                                }
                            },
                            renderSlide: (e, t, i) => (0, r.jsx)(eo, {
                                index: t,
                                limitedEdition: e,
                                onClick: () => {
                                    (0, m.u)({
                                        event: "sst_select_item",
                                        ecommerce: {
                                            method: "artwork",
                                            item_list_id: "PT:product-le|LT:slider|LF:more",
                                            item_list_name: "More Limited Editions Displates",
                                            items: [{
                                                item_id: e.artworkId.toString(),
                                                item_variant: e.sku,
                                                index: t + 1
                                            }]
                                        }
                                    })
                                },
                                routeInfo: (0, X.X)({
                                    externalId: e.artworkId.toString()
                                }),
                                useSlideImpression: i
                            }),
                            slides: i
                        })
                    })]
                }) : null
            };
            var eu = i(37038),
                ep = i(72383),
                eh = i(31372);
            let ex = () => {
                let {
                    limitedEdition: e
                } = b(), {
                    breadcrumbs: t
                } = e.general;
                return t && 0 !== t.length ? (0, r.jsx)(ep.B, {
                    hasLastItemHighlight: !0,
                    children: t.map(e => (0, r.jsx)(eu.A, {
                        artist: e.imageUrl ? {
                            avatarUrl: e.imageUrl,
                            isLicensed: "true" === e.params.licensed
                        } : void 0,
                        itemName: e.title,
                        itemUrl: (0, eh.F)({
                            pageType: e.type,
                            options: e.params
                        })
                    }, e.title))
                }) : null
            };
            var e_ = i(93391),
                eg = i(305),
                ej = i(75087),
                ev = i(3320),
                ef = i(84810),
                ey = i(10698),
                ew = i(11654),
                eL = i(85883),
                eb = i(26023),
                eE = i(35891),
                ek = i(86752),
                eN = i(71186),
                eS = i(16909);
            let eC = ["US", "UK", "GB"],
                eI = ({
                    handleAfterAddToCart: e,
                    isEarlyAccessAvailableForUser: t
                }) => {
                    let {
                        limitedEdition: {
                            general: i
                        }
                    } = b(), {
                        sku: s,
                        price: a,
                        status: n,
                        artworkId: l
                    } = i, o = "sold_out" === n, d = "upcoming" === n, {
                        mutate: c,
                        isPending: m,
                        isError: u,
                        reset: p
                    } = (0, eN.Q)({
                        onSuccess: async () => {
                            e()
                        },
                        onSettled() {
                            setTimeout(() => {
                                p()
                            }, 1e3)
                        }
                    });
                    return (0, r.jsxs)(j.$n, {
                        "data-testid": "limited-edition-buy-btn",
                        disabled: !s || o || d && !t,
                        fullWidth: !0,
                        loading: m,
                        onClick: () => {
                            u || (() => {
                                if (!s) return (0, eS.vV)(`No variant present for artwork ${l}`);
                                c([{
                                    sku: s,
                                    metadata: {
                                        productType: "limited",
                                        externalId: l,
                                        price: a.amountInCurrency,
                                        currency: a.currency,
                                        method: "product|main"
                                    }
                                }])
                            })()
                        },
                        size: "lg",
                        variant: "primary",
                        children: [a.formatted, (0, r.jsx)("span", {
                            className: "px-1",
                            children: "•"
                        }), o ? "Sold out" : d && !t ? "Available soon" : "Add to cart"]
                    })
                };
            var eA = i(82963),
                eP = i(16606),
                eB = i.n(eP);
            let eT = e => {
                    let t = e.getUTCFullYear(),
                        i = String(e.getUTCMonth() + 1).padStart(2, "0"),
                        r = String(e.getUTCDate()).padStart(2, "0");
                    return `${t}${i}${r}`
                },
                eM = () => {
                    let {
                        limitedEdition: {
                            general: e
                        }
                    } = (0, d.useContext)(c), {
                        userInfo: t
                    } = (0, d.useContext)(eE.cy), i = t ? .account.subscriptionActive ? ? !1, {
                        startDate: s,
                        title: a
                    } = e, n = (0, d.useRef)(null), [l, o] = (0, d.useState)(null);
                    return ((0, d.useEffect)(() => {
                        var e, t, r;
                        let l, d, c, m;
                        null !== n.current && window.URL.revokeObjectURL(n.current);
                        let u = (e = s, t = a, r = i, d = window.location.href, c = r ? `${t} - Early Access` : `${t}`, m = new Blob([`BEGIN:VCALENDAR
CALSCALE:GREGORIAN
METHOD:PUBLISH
PRODID:-//Displate Limited Edition//EN
VERSION:2.0
BEGIN:VEVENT
UID:limited-edition-${e}-${Date.now()}
DTSTART;VALUE=DATE:` + eT(new Date(e)) + "\nDTEND;VALUE=DATE:" + ((l = new Date(e)).setUTCDate(l.getUTCDate() + 1), eT(l)) + "\n" + `SUMMARY:${c.replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\n/g,"\\n")} - Displate Limited Edition Release
` + "DESCRIPTION:Displate Limited Edition release date\n" + `LOCATION:${d}
` + "END:VEVENT\nEND:VCALENDAR"], {
                            type: "text/calendar"
                        }), window.URL.createObjectURL(m));
                        return n.current = u, o(u), () => {
                            null !== n.current && window.URL.revokeObjectURL(n.current)
                        }
                    }, [s, a, i]), null === l) ? null : (0, r.jsxs)("a", {
                        className: eB().downloadLink,
                        "data-testid": "add-to-calendar-button",
                        download: `${a}-displate-limited-edition-event.ics`,
                        href: l,
                        children: [(0, r.jsx)(eA.A, {
                            className: eB().icon
                        }), "Add to Calendar"]
                    })
                };
            var eW = i(89099),
                eD = i(27735),
                eU = i(38847),
                ez = i(54111),
                eO = i(23278),
                eV = i(47486),
                eR = i.n(eV);
            let eG = () => {
                let {
                    userInfo: e
                } = (0, d.useContext)(eE.cy), t = (0, eU.u)(eD.vC), i = e ? .account.isUserLoggedIn, s = (0, eW.useRouter)(), a = e ? .account.subscriptionActive, n = window.location.origin + s.asPath;
                return (0, r.jsxs)("p", {
                    className: eR().availabilityInfo,
                    children: ["Available now for Displate Club members.", (0, r.jsx)("br", {}), i ? a ? null : (0, r.jsx)(j.N_, {
                        asChild: !0,
                        children: (0, r.jsx)(_.A, {
                            routeInfo: (0, eO.a)(),
                            children: "Get early access"
                        })
                    }) : (0, r.jsx)(j.N_, {
                        asChild: !0,
                        children: (0, r.jsx)(_.A, {
                            routeInfo: (0, ez.qr)({
                                query: {
                                    redirectUrl: n
                                },
                                useCognitoLogin: t
                            }),
                            children: "Sign in"
                        })
                    })]
                })
            };
            var eH = i(23524),
                e$ = i.n(eH);
            let eF = () => {
                let {
                    limitedEdition: e,
                    paymentMethods: t
                } = b(), {
                    countryCode: i
                } = (0, ey.C)(), {
                    general: {
                        texts: s,
                        images: a,
                        startDate: n,
                        sizes: o,
                        status: c,
                        format: m,
                        orientation: u,
                        type: p,
                        restrictedByCountry: _,
                        size: g
                    },
                    availability: {
                        estimatedDelivery: j,
                        country: v
                    },
                    reviews: f
                } = e, y = (0, d.useRef)(null), [w, k] = (0, d.useState)(!1), N = () => k(!0), C = eC.includes(i) ? o[1] : o[0], I = (0, l.rP)("600x600", {
                    assetPath: a.sizeCompare.coreUrl,
                    widths: [300, 768]
                }), {
                    userInfo: A
                } = (0, d.useContext)(eE.cy), B = (0, eb.Oh)(n), T = B && A ? .account.subscriptionActive || !1, M = c === E.lL.SOLD_OUT, W = c === E.lL.UPCOMING, D = p === E.jt.ULTRA ? E.t.L : E.t.M, U = (0, r.jsxs)("p", {
                    className: e$().deliveryText,
                    "data-testid": "shipping-info",
                    children: ["We ship to ", v, (0, r.jsxs)("span", {
                        className: e$().estimatedDelivery,
                        children: [" (", j, ") "]
                    })]
                }), z = !B || T ? U : (0, r.jsx)(eG, {}), O = M || W && !B, V = (0, l.rP)("560x784", {
                    assetPath: a.artwork.coreUrl,
                    widths: [300, 560]
                });
                return (0, r.jsxs)("div", {
                    className: e$().productBuyBoxWrapper,
                    children: [(0, r.jsx)("div", {
                        className: e$().hiddenOnMobile,
                        children: (0, r.jsx)(P, {
                            hasDescription: !1
                        })
                    }), !_ || M ? _ ? M ? (0, r.jsxs)("div", {
                        className: e$().soldOutBox,
                        "data-testid": "hero-sold-out-box",
                        children: [(0, r.jsx)("p", {
                            className: e$().soldOutText,
                            children: "This poster is no longer available"
                        }), (0, r.jsxs)("p", {
                            className: e$().soldOutText,
                            children: ["Print run: ", g]
                        })]
                    }) : void 0 : (0, r.jsx)("div", {
                        className: e$().restrictedBox,
                        children: (0, r.jsx)("p", {
                            className: e$().restrictedText,
                            children: "The Displate is not available in your country. Some licenses are only available in selected countries."
                        })
                    }) : (0, r.jsx)(ea.v, {
                        classes: {
                            container: e$().pulsometerWrapper
                        },
                        dataTestId: "pulsometer-container",
                        limitedEdition: e.general,
                        variant: "pdp"
                    }), W ? (0, r.jsx)(eM, {}) : null, (0, r.jsx)("div", {
                        className: e$().hiddenOnDesktop,
                        children: (0, r.jsx)(P, {})
                    }), (0, r.jsxs)("div", {
                        className: e$().productBuyBoxContent,
                        children: [(0, r.jsxs)("div", {
                            className: e$().compareImageBox,
                            children: [(0, r.jsxs)("div", {
                                className: e$().compareImageSize,
                                children: [(0, r.jsx)("span", {
                                    className: e$().format,
                                    children: m
                                }), " ", (0, r.jsx)("span", {
                                    children: C.text
                                })]
                            }), (0, r.jsx)("img", {
                                alt: "Size comparison",
                                className: e$().compareImage,
                                src: I.src,
                                srcSet: I.srcSet
                            })]
                        }), (0, r.jsx)("div", {
                            className: e$().benefitsList,
                            children: s.features && s.features.length > 0 && (0, r.jsx)(ek.M, {
                                classes: {
                                    list: e$().featuresList,
                                    icon: e$().checkmarkIcon
                                },
                                items: s.features
                            })
                        })]
                    }), _ && p !== E.jt.EVENT_EXCLUSIVE && (0, r.jsxs)("div", {
                        className: e$().purchaseWrapper,
                        ref: y,
                        children: [(0, r.jsxs)("div", {
                            className: (0, x.A)(e$().buttonWrapper, e$().hiddenOnMobile),
                            children: [(0, r.jsx)(eI, {
                                handleAfterAddToCart: N,
                                isEarlyAccessAvailableForUser: T
                            }), (!B || T) && U]
                        }), B && !T && (0, r.jsx)(eG, {}), i && ef.ConfigPublic.KlarnaCountries.includes(i) ? (0, r.jsx)(ej.A, {
                            countryCode: i,
                            dataKey: "top-strip-promotion-badge"
                        }) : null, (0, r.jsx)(ev.A, {
                            className: e$().paymentMethods,
                            paymentMethods: t
                        })]
                    }), p === E.jt.EVENT_EXCLUSIVE && (0, r.jsx)("div", {
                        className: e$().eventExclusiveContainer,
                        children: (0, r.jsxs)("div", {
                            className: e$().eventExclusiveWrapper,
                            children: [s.additional ? (0, r.jsx)("div", {
                                className: e$().eventExclusiveText,
                                dangerouslySetInnerHTML: {
                                    __html: s.additional
                                }
                            }) : null, (0, r.jsx)("img", {
                                alt: "exclusive design badge",
                                src: (0, l.qH)("/images/limited-edition/pdp/event_exclusive_badge.svg")
                            })]
                        })
                    }), (0, r.jsxs)("div", {
                        className: e$().hiddenOnDesktop,
                        "data-testid": "mobile-details-section",
                        children: [(0, r.jsx)(S, {}), f ? (0, r.jsx)("div", {
                            className: e$().trustpilotWrapper,
                            children: (0, r.jsx)(h.A, {
                                data: f
                            })
                        }) : null, (0, r.jsx)(L, {}), (0, r.jsx)(R, {})]
                    }), _ && p !== E.jt.EVENT_EXCLUSIVE && (0, r.jsx)(e_.T, {
                        deliveryInfoSlot: O ? null : z,
                        isPermanent: !0,
                        promoBoxRef: y,
                        children: (0, r.jsx)(eI, {
                            handleAfterAddToCart: N,
                            isEarlyAccessAvailableForUser: T
                        })
                    }), (0, r.jsx)(eL.f, {
                        handleClose: () => k(!1),
                        isOpen: w,
                        size: m,
                        standImageBox: (0, r.jsx)(ew.y, {
                            artworkOrientation: u,
                            artworkPicture: (0, r.jsx)(eg.X, {
                                imageSrc: V.src,
                                imageSrcSet: V.srcSet,
                                orientation: u,
                                size: D
                            }),
                            artworkSize: D
                        })
                    })]
                })
            };
            i(32283), i(79165), i(70031), i(36294);
            var eZ = i(23748),
                eq = i(30305),
                eJ = i(51970),
                eK = i.n(eJ);
            let eX = ({
                thumbsSwiper: e,
                children: t,
                customStyles: i = {},
                onSlideChange: s,
                wrapperStyles: a,
                fadeEffect: n
            }) => {
                let {
                    isDesktop: l
                } = (0, eq.Q)();
                return (0, r.jsx)(es.RC, {
                    allowTouchMove: !l,
                    className: (eK().gallerySliderMain, a),
                    "data-testid": "gallery-slider-main",
                    effect: n ? "fade" : "",
                    fadeEffect: {
                        crossFade: !!n
                    },
                    grabCursor: !l,
                    modules: [eZ.Vx, eZ.WO, eZ._R],
                    navigation: !1,
                    onSlideChange: s,
                    slidesPerView: 1,
                    style: {
                        backgroundColor: i.$customBackgroundColor
                    },
                    thumbs: {
                        swiper: e && !e.destroyed ? e : null,
                        autoScrollOffset: 1,
                        multipleActiveThumbs: !1
                    },
                    children: t
                })
            };
            var eQ = i(96877),
                eY = i(99200),
                e0 = i.n(eY);
            let e1 = ({
                direction: e
            }) => {
                let [t, i] = (0, d.useState)(!0), [s, a] = (0, d.useState)(!1), n = (0, es.Mn)(), l = (0, d.useRef)(void 0), o = (0, d.useRef)(void 0), c = (0, d.useCallback)(e => {
                    e.isBeginning || i(!1), e.isEnd || a(!1)
                }, []), m = (0, eQ.d)(c, 300);
                return ((0, d.useEffect)(() => {
                    let e = () => i(!0),
                        t = () => a(!0);
                    return n.on("setTranslate", m), n.on("reachBeginning", e), n.on("reachEnd", t), () => {
                        n.off("setTranslate", m), n.off("reachBeginning", e), n.off("reachEnd", t)
                    }
                }, [m, n]), "top" === e) ? (0, r.jsx)("div", {
                    className: (0, x.A)(e0().autoScroll, e0().autoScrollTop, {
                        [e0().autoScrollDisabled]: t
                    }),
                    onMouseEnter: () => {
                        l.current = setInterval(() => {
                            n.slidePrev(500)
                        }, 5)
                    },
                    onMouseLeave: () => {
                        clearInterval(l.current)
                    },
                    role: "button"
                }) : "bottom" === e ? (0, r.jsx)("div", {
                    className: (0, x.A)(e0().autoScroll, e0().autoScrollBottom, {
                        [e0().autoScrollDisabled]: s
                    }),
                    onClick: () => {
                        n.slideTo(n.slides.length - 1)
                    },
                    onMouseEnter: () => {
                        o.current = setInterval(() => {
                            n.slideNext(500)
                        }, 5)
                    },
                    onMouseLeave: () => {
                        clearInterval(o.current)
                    },
                    role: "button"
                }) : null
            };
            var e2 = i(2762),
                e3 = i.n(e2);
            let e8 = ({
                    thumbnails: e,
                    setThumbsSwiper: t,
                    thumbnailsBreakpoints: i,
                    thumbnailsSlideStyle: s,
                    thumbnailsSwiperStyle: a
                }) => (0, r.jsxs)(es.RC, {
                    breakpoints: i || {
                        768: {
                            direction: "vertical",
                            spaceBetween: 12
                        }
                    },
                    className: (0, x.A)(e3().swiperStyled, a && a),
                    "data-testid": "gallery-slider-thumbnails",
                    direction: "horizontal",
                    freeMode: !0,
                    modules: [eZ.U1, eZ.Vx, eZ.WO],
                    onSwiper: e => t(e),
                    slidesPerView: "auto",
                    spaceBetween: 8,
                    threshold: 15,
                    children: [(0, r.jsx)(e1, {
                        direction: "top"
                    }), e.map(e => (0, r.jsx)(es.qr, {
                        className: (0, x.A)(e3().swiperSlideStyled, s && s),
                        children: (0, r.jsx)("img", {
                            alt: e.alt,
                            src: e.src,
                            srcSet: e.srcSet
                        })
                    }, e.alt)), (0, r.jsx)(e1, {
                        direction: "bottom"
                    })]
                }),
                e6 = ({
                    thumbnails: e,
                    children: t,
                    mainCustomStyles: i,
                    className: s,
                    onSlideChange: a,
                    fadeEffect: n,
                    customStyles: l
                }) => {
                    let [o, c] = (0, d.useState)(null), {
                        mainSwiper: m,
                        breakpoints: u,
                        thumbnailsSlide: p,
                        thumbnailsSwiper: h
                    } = l || {};
                    return (0, r.jsxs)("div", {
                        className: s,
                        "data-testid": "gallery-slider",
                        children: [(0, r.jsx)(eX, {
                            customStyles: i,
                            fadeEffect: n,
                            onSlideChange: a,
                            thumbsSwiper: o,
                            wrapperStyles: m,
                            children: t
                        }), (0, r.jsx)(e8, {
                            setThumbsSwiper: c,
                            thumbnails: e,
                            thumbnailsBreakpoints: u,
                            thumbnailsSlideStyle: p,
                            thumbnailsSwiperStyle: h
                        })]
                    })
                };
            var e4 = i(53288),
                e5 = i.n(e4),
                e7 = i(51192),
                e9 = i(43343),
                te = i(60980),
                tt = i(24651),
                ti = i(28799),
                tr = i(5421),
                ts = i.n(tr);
            let ta = ({
                triggerEl: e,
                imageUrl: t,
                ref: i
            }) => {
                let [s, a] = (0, d.useState)(!1), n = (0, r.jsx)(tt.W, {
                    onClose: () => a(!1),
                    children: (0, r.jsx)("div", {
                        className: ts().imageContainer,
                        children: (0, r.jsx)("img", {
                            alt: "Limited Edition artwork zoom",
                            className: ts().zoomImage,
                            loading: "lazy",
                            src: t
                        })
                    })
                });
                return (0, r.jsxs)(r.Fragment, {
                    children: [e ? (0, ti.$)({
                        trigger: e,
                        onOpen: () => a(!0)
                    }) : null, (0, r.jsx)(te.b, {
                        isOpen: s,
                        onClose: () => a(!1),
                        ref: i,
                        children: n
                    })]
                })
            };
            ta.displayName = "LimitedEditionZoomPopup";
            let tn = ({
                    imageUrl: e
                }) => (0, r.jsx)(ta, {
                    imageUrl: e,
                    triggerEl: (0, r.jsx)(e9.i, {
                        className: "absolute top-4 right-4 z-1",
                        onClick: () => (0, e7.O)({
                            elementId: "trigger_zoom_button"
                        })
                    })
                }),
                tl = () => {
                    let {
                        limitedEdition: {
                            general: e
                        }
                    } = b(), {
                        product: t
                    } = e.images, {
                        isTablet: i,
                        isDesktop: s
                    } = (0, eq.Q)(), a = t.map(({
                        coreUrl: e
                    }) => (0, l.rP)("1200x1200", {
                        assetPath: e,
                        widths: [600, 1200]
                    })), {
                        zoomImageUrl: n,
                        isValidZoomDimensions: o
                    } = (() => {
                        let {
                            limitedEdition: {
                                general: e
                            }
                        } = b(), {
                            artwork: t
                        } = e.images, i = e.orientation === E.JH.HORIZONTAL ? {
                            height: 2880,
                            width: 4032
                        } : {
                            height: 4032,
                            width: 2880
                        };
                        return {
                            zoomImageUrl: (0, l.rP)(`${i.width}x${i.height}`, {
                                assetPath: t.coreUrl,
                                useCdn: !1
                            }).src,
                            isValidZoomDimensions: t.height >= i.height && t.width >= i.width
                        }
                    })(), d = {
                        breakpoints: {
                            320: {
                                direction: "horizontal",
                                spaceBetween: 12
                            },
                            1280: {
                                direction: "vertical",
                                spaceBetween: 14
                            }
                        },
                        mainSwiper: e5().gallerySliderMain,
                        thumbnailsSlide: e5().limitedGalleryThumbnail,
                        thumbnailsSwiper: e5().limitedGallerySwiper
                    };
                    return (0, r.jsxs)(e6, {
                        className: e5().galleryWrapper,
                        customStyles: d,
                        fadeEffect: !0,
                        isDesktop: s,
                        isTablet: i,
                        thumbnails: a.map((e, t) => ({
                            src: e.src,
                            srcSet: e.srcSet,
                            sizes: e.sizes,
                            alt: `Thumbnail ${t+1}`
                        })),
                        children: [a.map((e, t) => (0, r.jsx)(es.qr, {
                            children: (0, r.jsx)("img", {
                                alt: "Limited Displate image",
                                className: e5().galleryImage,
                                loading: 0 === t ? "eager" : "lazy",
                                sizes: e.sizes,
                                src: e.src,
                                srcSet: e.srcSet
                            })
                        }, e.src)), o ? (0, r.jsx)(tn, {
                            imageUrl: n
                        }) : null]
                    })
                };
            var to = i(97588),
                td = i.n(to);
            let tc = () => (0, r.jsxs)("div", {
                className: td().heroSectionWrapper,
                children: [(0, r.jsx)(tl, {}), (0, r.jsx)("div", {
                    className: td().hiddenForMobile,
                    "data-testid": "desktop-hero-section",
                    children: (0, r.jsx)(eF, {})
                })]
            });
            var tm = i(30983),
                tu = i(90861),
                tp = i(98477),
                th = i(47991),
                tx = i(79371),
                t_ = i.n(tx);
            let tg = ({
                    imageUrl: e,
                    onClose: t
                }) => {
                    let {
                        limitedEdition: {
                            general: i
                        }
                    } = b();
                    return (0, tp.createPortal)((0, r.jsxs)("div", {
                        className: t_().zoom,
                        children: [(0, r.jsx)("img", {
                            alt: `${i.title} poster details`,
                            "data-testid": "popup-zoom-image",
                            loading: "lazy",
                            sizes: e.sizes,
                            src: e.src,
                            srcSet: e.srcSet
                        }), (0, r.jsx)("button", {
                            "aria-label": "Close zoomed image",
                            className: t_().closeButton,
                            "data-testid": "close-zoom-popup",
                            onClick: t,
                            type: "button",
                            children: (0, r.jsx)(th.A, {
                                className: t_().closeIcon,
                                height: 20,
                                onClick: t,
                                width: 20
                            })
                        })]
                    }), document.body)
                },
                tj = ({
                    imageUrl: e
                }) => {
                    let [t, i] = (0, d.useState)(!1), s = (0, l.rP)("600x600", {
                        assetPath: e,
                        widths: [300, 600]
                    }), {
                        isDesktop: a
                    } = (0, eq.Q)(), {
                        lockScroll: n,
                        unlockScroll: o
                    } = (0, tu.A)();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: t_().galleryItem,
                            children: (0, r.jsx)("img", {
                                alt: "Poster details",
                                className: t_().image,
                                loading: "lazy",
                                onClick: () => {
                                    a || (i(!0), n())
                                },
                                sizes: s.sizes,
                                src: s.src,
                                srcSet: s.srcSet
                            })
                        }), !a && t ? (0, r.jsx)(tg, {
                            imageUrl: s,
                            onClose: () => {
                                i(!1), o()
                            }
                        }) : null]
                    })
                };
            var tv = i(59056),
                tf = i.n(tv);
            let ty = () => {
                let e = (0, d.useRef)(null),
                    {
                        limitedEdition: {
                            general: t
                        }
                    } = (0, d.useContext)(c),
                    {
                        video: i,
                        images: {
                            detail: s
                        }
                    } = t;
                return (0, r.jsxs)("section", {
                    className: tf().section,
                    children: [(0, r.jsxs)("div", {
                        className: tf().subsection,
                        children: [(0, r.jsxs)("h2", {
                            className: tf().heading,
                            children: ["Great designs", (0, r.jsx)("br", {}), "masterfully re-imagined"]
                        }), i ? .videoUrl ? (0, r.jsx)(tm.A, {
                            autoPlay: !0,
                            className: tf().video,
                            controls: !0,
                            "data-testid": "limited-edition-gallery-video",
                            loop: !0,
                            muted: !0,
                            ref: e,
                            src: i.videoUrl
                        }) : null]
                    }), (0, r.jsxs)("div", {
                        className: tf().subsection,
                        children: [(0, r.jsxs)("h2", {
                            className: tf().heading,
                            children: ["Advanced printing techniques", (0, r.jsx)("br", {}), "stretch the limits of awesomeness"]
                        }), (0, r.jsx)("div", {
                            className: tf().gallery,
                            children: s.map(({
                                coreUrl: e
                            }) => (0, r.jsx)(tj, {
                                imageUrl: e
                            }, e))
                        })]
                    })]
                })
            };
            var tw = i(18368),
                tL = i.n(tw);
            let tb = () => {
                    let {
                        limitedEdition: {
                            general: e
                        }
                    } = b(), {
                        track: t
                    } = (0, p.z)();
                    return (0, d.useEffect)(() => {
                        t({
                            pageCategory: "product-le"
                        }), (0, m.u)({
                            event: "sst_view_item",
                            ecommerce: {
                                currency: e.price.currency,
                                value: (0, u.yJ)(e.price.amountInCurrency),
                                method: "pdp_load",
                                items: [{
                                    item_id: e.artworkId,
                                    item_variant: e.sku,
                                    price: (0, u.yJ)(e.price.amountInCurrency),
                                    lowest_price: (0, u.yJ)(e.price.amountInCurrency),
                                    quantity: 1
                                }]
                            }
                        })
                    }, [e.artworkId, e.sku, e.price.currency, e.price.amountInCurrency, t]), (0, r.jsxs)("div", {
                        className: tL().container,
                        "data-testid": "limited-edition-product-page",
                        children: [(0, r.jsx)("div", {
                            className: tL().hiddenForMobile,
                            children: (0, r.jsx)(ex, {})
                        }), (0, r.jsx)(tc, {}), (0, r.jsx)(ty, {}), (0, r.jsx)("div", {
                            className: tL().hiddenForDesktop,
                            "data-testid": "mobile-hero-section",
                            children: (0, r.jsx)(eF, {})
                        }), (0, r.jsx)("div", {
                            className: tL().hiddenForMobile,
                            children: (0, r.jsx)($, {})
                        }), (0, r.jsx)(em, {}), (0, r.jsx)(ee, {})]
                    })
                },
                tE = ({
                    header: e,
                    limitedEdition: t
                }) => {
                    let i = `${t.general.title} metal poster - Limited Edition | Displate`,
                        a = t.general.texts.main,
                        d = (0, l.rP)("560x784", {
                            assetPath: t.general.images.artwork.coreUrl
                        }).src,
                        m = {
                            webpage: {
                                h1: i,
                                url: (0, X.X)({
                                    absolute: !0,
                                    externalId: t.general.artworkId.toString()
                                }).route,
                                description: a,
                                imageOfPage: d
                            },
                            breadcrumbs: (0, n.M)(t.general.breadcrumbs)
                        },
                        u = {
                            limitedEdition: t,
                            paymentMethods: e.paymentMethods
                        };
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.F, {
                            ldJsonParams: m,
                            pageMeta: {
                                title: i,
                                description: a,
                                coverImage: d
                            }
                        }), (0, r.jsx)(o.O, {
                            headerData: e,
                            children: (0, r.jsx)(c.Provider, {
                                value: u,
                                children: (0, r.jsx)(tb, {})
                            })
                        })]
                    })
                };
            tE.getLayout = function(e) {
                return (0, r.jsx)(a.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            };
            let tk = tE;
            var tN = !0
        },
        51260: e => {
            e.exports = {
                container: "Pulsometer_container__H_Ls_",
                pulsometer: "Pulsometer_pulsometer__8dy5E",
                green: "Pulsometer_green__jK2Wt",
                orange: "Pulsometer_orange__UpGHB",
                red: "Pulsometer_red__laU_w",
                grey: "Pulsometer_grey__dYmpe",
                noDot: "Pulsometer_noDot__u9pUz"
            }
        },
        51563: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => x
            });
            var r = i(37876);
            i(32283), i(70031);
            var s = i(14232),
                a = i(24073),
                n = i(68720),
                l = i(69241),
                o = i(23748),
                d = i(27888),
                c = i(51192),
                m = i(36256),
                u = i(9461),
                p = i.n(u);
            let h = ({
                options: e,
                renderSlide: t,
                keyExtractor: i,
                slides: u,
                children: h,
                additionalClassNames: x = {},
                additionalModules: _ = [],
                metadata: g,
                onPrevClick: j,
                onNextClick: v,
                showArrows: f = !0,
                ref: y
            }) => {
                let [w, L] = (0, s.useState)(null), b = (0, s.useRef)(null), E = (0, s.useRef)(null), [k, N] = (0, s.useState)(u.length), [S, C] = (0, s.useState)(!1);
                k !== u.length && (N(u.length), w ? .updateSlides());
                let I = (0, l.A)(p().container, x.container),
                    A = (0, l.A)(p().slider, x.slider),
                    P = (0, l.A)(p().slide, x.slide),
                    B = (0, l.A)(p().navigation, x.navigation);
                return (0, r.jsxs)("div", {
                    className: I,
                    "data-testid": "slider",
                    children: [(0, r.jsxs)(d.RC, {
                        className: A,
                        cssMode: !0,
                        modules: [o.Vx, ..._],
                        navigation: {
                            prevEl: b.current,
                            nextEl: E.current
                        },
                        onLock: () => {
                            C(!0)
                        },
                        onSwiper: e => {
                            L(e)
                        },
                        onUnlock: () => {
                            C(!1)
                        },
                        ref: y,
                        slidesPerGroupAuto: !0,
                        slidesPerView: "auto",
                        wrapperClass: x.wrapper,
                        ...e,
                        children: [u.map((e, s) => (0, r.jsx)(d.qr, {
                            className: P,
                            children: t(e, s)
                        }, `${String(i(e))}+${s}`)), h]
                    }), f ? (0, r.jsxs)("div", {
                        className: B,
                        children: [(0, r.jsx)(m.ff, {
                            "aria-label": "Previous slide",
                            className: (0, l.A)(p().navigationButton, p().prevButton),
                            "data-testid": "slider-prev-button",
                            disabled: S,
                            icon: (0, r.jsx)(a.A, {}),
                            onClick: () => {
                                j ? .(), g ? .elementVariant && (0, c.O)({
                                    elementId: "previous_slide_button",
                                    elementVariant: g.elementVariant
                                })
                            },
                            ref: b,
                            size: "lg",
                            variant: "glass"
                        }), (0, r.jsx)(m.ff, {
                            "aria-label": "Next slide",
                            className: (0, l.A)(p().navigationButton, p().nextButton),
                            "data-testid": "slider-next-button",
                            disabled: S,
                            icon: (0, r.jsx)(n.A, {}),
                            onClick: () => {
                                v ? .(), g ? .elementVariant && (0, c.O)({
                                    elementId: "next_slide_button",
                                    elementVariant: g.elementVariant
                                })
                            },
                            ref: E,
                            size: "lg",
                            variant: "glass"
                        })]
                    }) : null]
                })
            };
            h.displayName = "Slider";
            let x = h
        },
        51970: e => {
            e.exports = {
                gallerySliderMain: "GallerySliderMain_gallerySliderMain__zskr8"
            }
        },
        53288: e => {
            e.exports = {
                galleryWrapper: "LimitedEditionGallery_galleryWrapper__d9nsK",
                galleryImage: "LimitedEditionGallery_galleryImage__4cocc",
                gallerySliderMain: "LimitedEditionGallery_gallerySliderMain__erj2W",
                limitedGallerySwiper: "LimitedEditionGallery_limitedGallerySwiper__Y6_vH",
                limitedGalleryThumbnail: "LimitedEditionGallery_limitedGalleryThumbnail__dNAef",
                slide: "LimitedEditionGallery_slide__Tw_Wa"
            }
        },
        53499: (e, t, i) => {
            "use strict";
            i.d(t, {
                EX: () => r,
                Kk: () => l,
                RD: () => o,
                Y: () => s,
                as: () => a,
                kY: () => n
            });
            let r = 640,
                s = 768,
                a = 1024,
                n = 1280,
                l = 1440,
                o = 1920
        },
        53817: e => {
            e.exports = {
                wrapper: "ZoomPopupLayout_wrapper__K1MUG",
                buttonsWrapper: "ZoomPopupLayout_buttonsWrapper__8WN9B",
                overlay: "ZoomPopupLayout_overlay__kGR2h",
                aside: "ZoomPopupLayout_aside__nBFRt"
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
        59056: e => {
            e.exports = {
                section: "LimitedEditionDetailsGallery_section__FhJCJ",
                heading: "LimitedEditionDetailsGallery_heading__KP9pg",
                subsection: "LimitedEditionDetailsGallery_subsection__opJRb",
                video: "LimitedEditionDetailsGallery_video__Z8EYu",
                gallery: "LimitedEditionDetailsGallery_gallery__7UKbK"
            }
        },
        59753: e => {
            e.exports = {
                wrapper: "LimitedEditionSlide_wrapper__lDjRA",
                imageWrapper: "LimitedEditionSlide_imageWrapper__xG2jj",
                image: "LimitedEditionSlide_image__WxbdW",
                imageHorizontal: "LimitedEditionSlide_imageHorizontal__g0K4q",
                price: "LimitedEditionSlide_price__S__ay",
                type: "LimitedEditionSlide_type__4vHoo",
                title: "LimitedEditionSlide_title__04OyG",
                link: "LimitedEditionSlide_link__d3oS6",
                pulsometer: "LimitedEditionSlide_pulsometer__HkjBP"
            }
        },
        60980: (e, t, i) => {
            "use strict";
            i.d(t, {
                b: () => l
            });
            var r = i(37876),
                s = i(14232),
                a = i(98477),
                n = i(80288);
            let l = ({
                isOpen: e,
                onClose: t,
                children: i,
                ref: l
            }) => {
                let o, d = (0, s.useRef)(null),
                    {
                        enableEngagementPopup: c,
                        disableEngagementPopup: m
                    } = (0, n.M)();
                return (0, s.useImperativeHandle)(l, () => ({
                    close: () => t(),
                    open: () => {}
                })), (0, s.useEffect)(() => {
                    if (e) return m(), () => c()
                }, [e, m, c]), (0, s.useEffect)(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto", () => {
                    document.body.style.overflow = "auto"
                }), [e]), (({
                    callback: e,
                    isActive: t
                }) => {
                    (0, s.useEffect)(() => {
                        let i = i => {
                            "Escape" === i.key && t && e()
                        };
                        return t && document.addEventListener("keydown", i), () => {
                            document.removeEventListener("keydown", i)
                        }
                    }, [e, t])
                })({
                    callback: t,
                    isActive: e
                }), e ? (0, a.createPortal)((0, r.jsx)("div", {
                    ref: d,
                    children: i
                }), ((o = document.getElementById("popup-wrapper")) || ((o = document.createElement("div")).setAttribute("id", "popup-wrapper"), o.setAttribute("data-testid", "popup-wrapper"), document.body.appendChild(o)), o)) : null
            };
            l.displayName = "BaseZoomPopup"
        },
        63735: e => {
            e.exports = {
                breadcrumbItem: "BreadcrumbItem_breadcrumbItem__IkJki",
                breadcrumbItemLink: "BreadcrumbItem_breadcrumbItemLink__nbBLC",
                breadcrumbItemAvatar: "BreadcrumbItem_breadcrumbItemAvatar__zbROb"
            }
        },
        67013: e => {
            e.exports = {
                tooltip: "Tooltip_tooltip__Oa908",
                iconWrapper: "Tooltip_iconWrapper___QDR4",
                content: "Tooltip_content__w0wV2",
                contentWrapper: "Tooltip_contentWrapper___xj2d",
                downLeft: "Tooltip_downLeft__xSIyT",
                downMid: "Tooltip_downMid__iF0p_",
                visible: "Tooltip_visible__vPuN0"
            }
        },
        68130: (e, t, i) => {
            "use strict";
            i.d(t, {
                M: () => r
            });
            let r = e => e.map(e => ({
                title: e.title,
                type: e.type,
                params: e.params,
                queryParams: e.queryParams ? ? {}
            }))
        },
        68221: e => {
            e.exports = {
                wrapper: "LimitedEditionAuthor_wrapper__D45qf",
                avatar: "LimitedEditionAuthor_avatar__T_gqy"
            }
        },
        72383: (e, t, i) => {
            "use strict";
            i.d(t, {
                B: () => l
            });
            var r = i(37876),
                s = i(69241),
                a = i(88679),
                n = i.n(a);
            let l = ({
                children: e,
                className: t,
                hasLastItemHighlight: i
            }) => (0, r.jsx)("nav", {
                "aria-label": "breadcrumbs",
                children: (0, r.jsx)("ol", {
                    className: (0, s.A)(n().breadcrumbs, t, {
                        [n().lastItemHighlight]: i
                    }),
                    children: e
                })
            })
        },
        72697: e => {
            e.exports = {
                wrapper: "LimitedEditionTitle_wrapper__evWrJ",
                type: "LimitedEditionTitle_type__Vg9yM",
                title: "LimitedEditionTitle_title__hnkf_",
                description: "LimitedEditionTitle_description___xxpq"
            }
        },
        75087: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => d
            });
            var r = i(37876),
                s = i(45105),
                a = i.n(s),
                n = i(84810),
                l = i(32008),
                o = i.n(l);
            let d = ({
                countryCode: e,
                dataKey: t,
                purchaseAmount: i
            }) => (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(a(), {
                    async: !0,
                    "data-client-id": "US" === e ? n.ConfigPublic.KlarnaClientIdUs : n.ConfigPublic.KlarnaClientIdEu,
                    "data-environment": n.ConfigPublic.KlarnaEnvironment,
                    src: "https://js.klarna.com/web-sdk/v1/klarna.js"
                }), (0, r.jsx)("klarna-placement", {
                    class: o().root,
                    "data-key": t,
                    "data-locale": `en-${e}`,
                    "data-purchase-amount": i,
                    "data-testid": "klarna-info-message",
                    "data-theme": "default"
                })]
            })
        },
        77518: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => V
            });
            var r = i(37876),
                s = i(14232),
                a = i(56413),
                n = i(67768);
            i(18847);
            var l = i(47321),
                o = i(62056),
                d = i(2443),
                c = i(9054),
                m = i(67911),
                u = i(83736),
                p = i(61817),
                h = i(38847),
                x = i(8735),
                _ = i(10698);
            let g = ({
                countryCode: e
            }) => {
                let {
                    setCountryCode: t
                } = (0, _.C)();
                return (0, s.useEffect)(() => {
                    t({
                        countryCode: e,
                        shouldUpdateContext: !1
                    })
                }, []), null
            };
            var j = i(67385),
                v = i(14e3),
                f = i(1833),
                y = i(93878),
                w = i(16903),
                L = i(62120),
                b = i(62564),
                E = i(73678),
                k = i(29454),
                N = i(22884);
            let S = ({
                userVertical: e,
                userEngagement: t
            }) => {
                (0, N.u)({
                    event: "user_data",
                    user_vertical: e,
                    user_engagement_level: t
                })
            };
            var C = i(84810);
            let I = "user-vertical";
            var A = i(74359),
                P = i(98461),
                B = i(35891),
                T = i(87050);
            let M = ["userVertical"];
            var W = i(90511);
            let D = () => {
                let e = (0, v.usePathname)(),
                    {
                        data: t,
                        isError: i,
                        error: r,
                        refetch: a
                    } = (() => {
                        let {
                            fetchedUserInfo: e
                        } = (0, s.useContext)(B.cy);
                        return (0, A.I)({
                            queryKey: M,
                            queryFn: () => T.$y.getUsersVerticalV2((0, P.R)()),
                            enabled: e,
                            staleTime: 1e3,
                            retry: !1
                        })
                    })(),
                    {
                        userInfo: n
                    } = (0, s.useContext)(B.cy),
                    l = n ? .account.engagement.type,
                    o = (0, s.useRef)(!1);
                return (0, s.useEffect)(() => {
                    o.current ? a() : o.current = !0
                }, [e]), (0, s.useEffect)(() => {
                    void 0 !== t && void 0 !== l && (t.type ? (k.A.set(I, t.type, {
                        domain: C.ConfigPublic.VerticalizationCookieDomain
                    }), S({
                        userVertical: t.type,
                        userEngagement: l
                    })) : (k.A.remove(I, {
                        domain: C.ConfigPublic.VerticalizationCookieDomain
                    }), S({
                        userVertical: W.v.GeneralUser,
                        userEngagement: l
                    })))
                }, [t, l]), (0, s.useEffect)(() => {
                    i && console.error(`Unable to update user vertical: ${r}`)
                }, [i, r]), null
            };
            var U = i(20019),
                z = i(36256);
            let O = () => null,
                V = ({
                    gitInfo: e,
                    children: t,
                    uvert: i,
                    countryCode: _,
                    featureFlags: k,
                    tpid: N,
                    abTests: S
                }) => {
                    let C, I, [A] = (0, s.useState)(() => new a.E(u.K));
                    return C = (0, v.usePathname)(), I = (0, f.o)(e => e.incrementPagesTraversedByUser), (0, s.useEffect)(() => {
                        I()
                    }, [C]), (0, w.p)(), (0, s.useEffect)(() => {
                        window.localStorage.removeItem("elyGtmUserSession"), window.localStorage.removeItem("recentlyViewed"), (0, o.s)()
                    }, []), (0, r.jsx)(c.A, {
                        children: (0, r.jsxs)(n.Ht, {
                            client: A,
                            children: [(0, r.jsxs)(j.y, {
                                countryCode: _,
                                children: [(0, r.jsx)(g, {
                                    countryCode: _
                                }), (0, r.jsx)(U.O, {
                                    uvert: i,
                                    children: (0, r.jsx)(l.td, {
                                        value: S,
                                        children: (0, r.jsx)(B.OJ, {
                                            children: (0, r.jsx)(p.J, {
                                                children: (0, r.jsxs)(h.j$, {
                                                    value: k,
                                                    children: [(0, r.jsx)(y.c, {}), (0, r.jsx)(L.H, {}), (0, r.jsx)(D, {}), (0, r.jsx)(b.A, {
                                                        countryCode: _
                                                    }), (0, r.jsxs)(z.Uc, {
                                                        children: [(0, r.jsx)(m.E, {}), (0, r.jsx)(d.s, {}), (0, r.jsx)(x.i, {
                                                            children: t
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), (0, r.jsx)(O, {
                                initialIsOpen: !1
                            }), e && (0, r.jsx)(E.DynamicGitInfo, {
                                gitInfo: e,
                                tpid: N ? ? null
                            })]
                        })
                    })
                }
        },
        79165: () => {},
        79265: (e, t, i) => {
            "use strict";
            i.d(t, {
                $: () => _
            });
            var r = i(37876),
                s = i(14232),
                a = i(89099),
                n = i(14619),
                l = i(29633),
                o = i(14078),
                d = i(40636),
                c = i(41037),
                m = i(95729),
                u = i(2661),
                p = i(36256);
            let h = ({
                feedContents: e,
                activeTab: t,
                handleFeedChange: i
            }) => {
                let {
                    pushEvent: s
                } = (0, u.L)(), a = t < e.length ? t : 0;
                return (0, r.jsxs)(r.Fragment, {
                    children: [e.length > 1 ? (0, r.jsx)("div", {
                        className: "flex w-full justify-evenly overflow-x-auto mb-6 md:mb-10",
                        children: (0, r.jsx)(p.Iz, {
                            className: "shrink-0 uppercase",
                            items: e.map(e => ({
                                label: (0, r.jsx)("span", {
                                    className: "capitalize",
                                    "data-testid": e.heading,
                                    children: e.heading
                                }),
                                value: e.heading
                            })),
                            name: "masonry-feed-v2",
                            onChange: r => {
                                let a = e.findIndex(e => e.heading === r);
                                a < 0 || a === t || (i(a), (0, m.q)((0, c.Z)(r)), "following" === e[a].heading && (0, d.lB)(s))
                            },
                            value: e[a].heading
                        })
                    }) : null, e[a].content]
                })
            };
            var x = i(23412);
            let _ = ({
                feeds: e,
                metadata: t,
                className: i,
                artworksToDisplay: d = l.T,
                customGridItem: c
            }) => {
                let m = (0, a.useRouter)(),
                    [u, p] = (0, s.useState)(0);
                (0, s.useEffect)(() => {
                    p(0)
                }, [m.asPath]);
                let _ = (0, s.useMemo)(() => e.filter(e => e.shouldBeShown).map(e => (0, x.xG)(e, t, m.pathname, void 0, d, c)), [e, t, m.pathname, d, c]);
                return ((0, s.useEffect)(() => {
                    u >= _.length && _.length > 0 && p(0)
                }, [u, _.length]), 0 === e.length || (0, x.nz)(e)) ? (0, r.jsx)(o.F, {
                    className: i
                }) : (0, r.jsx)("div", {
                    className: (0, n.cn)("flex flex-col items-center [&_button:first-letter]:uppercase", i),
                    "data-testid": "masonry-feed-container",
                    children: (0, r.jsx)(h, {
                        activeTab: u,
                        feedContents: _,
                        handleFeedChange: p
                    })
                })
            }
        },
        79371: e => {
            e.exports = {
                galleryItem: "LimitedEditionGalleryItem_galleryItem__tfSLW",
                image: "LimitedEditionGalleryItem_image__fO_1t",
                zoom: "LimitedEditionGalleryItem_zoom__DJ1qa",
                closeButton: "LimitedEditionGalleryItem_closeButton__tyE8H",
                closeIcon: "LimitedEditionGalleryItem_closeIcon__9dzma"
            }
        },
        80437: e => {
            e.exports = {
                container: "OtherLimitedEditions_container__es2A7",
                title: "OtherLimitedEditions_title__mpGf_",
                slide: "OtherLimitedEditions_slide__fl8YF"
            }
        },
        82963: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            var r = i(37876);
            let s = e => (0, r.jsx)("svg", {
                fill: "none",
                height: "1em",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, r.jsx)("path", {
                    d: "M13.198 3.602H2.8a.8.8 0 0 0-.8.8V13.2a.8.8 0 0 0 .8.8h10.398a.8.8 0 0 0 .8-.8V4.4a.8.8 0 0 0-.8-.8ZM2 6.797h11.997M5.203 4.8V2M10.797 4.8V2",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5
                })
            })
        },
        86752: (e, t, i) => {
            "use strict";
            i.d(t, {
                M: () => a
            });
            var r = i(37876),
                s = i(46243);
            let a = ({
                items: e,
                classes: t
            }) => 0 === e.length ? null : (0, r.jsx)("ul", {
                className: t ? .list,
                "data-testid": "checkmark-list",
                children: e.map((e, i) => (0, r.jsxs)("li", {
                    className: "flex items-center gap-3 first:mt-0 not-first:mt-2.5 text-body-md",
                    children: [(0, r.jsx)("div", {
                        className: `flex size-6 shrink-0 items-center justify-center rounded-full bg-background-information text-icon-brand ${t?.icon??""}`,
                        children: (0, r.jsx)(s.A, {
                            className: "size-4",
                            "data-testid": "checkmark-icon"
                        })
                    }), e]
                }, i))
            })
        },
        88679: e => {
            e.exports = {
                breadcrumbs: "Breadcrumbs_breadcrumbs__Zh6if",
                lastItemHighlight: "Breadcrumbs_lastItemHighlight__0IEe5"
            }
        },
        90056: e => {
            e.exports = {
                wrapper: "LimitedEditionMasonryFeedSection_wrapper__iCpU7",
                title: "LimitedEditionMasonryFeedSection_title__gLH2w"
            }
        },
        93391: (e, t, i) => {
            "use strict";
            i.d(t, {
                T: () => o
            });
            var r = i(37876),
                s = i(14232),
                a = i(98477),
                n = i(90413),
                l = i(14619);
            let o = ({
                promoBoxRef: e,
                children: t,
                targetThreshold: i = 200,
                deliveryInfoSlot: o,
                isPermanent: d = !1
            }) => {
                let c, [m, u] = (0, s.useState)(!1),
                    p = (0, n.A)();
                return (0, s.useEffect)(() => {
                    if (d) return void u(!0);
                    let t = e.current;
                    if (!t) return void console.warn("promoBoxRef is not attached to the DOM");
                    let r = new IntersectionObserver(([e]) => {
                        u(!e.isIntersecting && e.boundingClientRect.top < (e.rootBounds ? .top ? ? 0))
                    }, {
                        rootMargin: `${-i}px 0px 0px 0px`,
                        threshold: 0
                    });
                    return r.observe(t), () => r.disconnect()
                }, [e, i, d]), (0, r.jsx)(r.Fragment, {
                    children: p && (0, a.createPortal)((0, r.jsxs)("div", {
                        className: (0, l.cn)("fixed bottom-0 left-0 w-full p-4 bg-background-light translate-y-full transition-transform duration-300 ease-out z-29", "flex flex-col items-center justify-center lg:hidden", {
                            "translate-y-0": m
                        }),
                        "data-testid": "sticky-add-to-cart-section-mobile",
                        children: [(0, r.jsx)("div", {
                            className: "w-full max-w-[400px] mx-auto",
                            children: t
                        }), o]
                    }), ((c = document.getElementById("mobile-add-to-cart")) || ((c = document.createElement("div")).setAttribute("id", "mobile-add-to-cart"), c.setAttribute("data-testid", "mobile-add-to-cart"), document.body.appendChild(c)), c))
                })
            }
        },
        93568: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            var r = i(14232);
            let s = r.forwardRef(function({
                title: e,
                titleId: t,
                ...i
            }, s) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: s,
                    "aria-labelledby": t
                }, i), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                }))
            })
        },
        93811: (e, t, i) => {
            "use strict";
            i.d(t, {
                _: () => a
            });
            var r = i(30068),
                s = i(2661);
            let a = e => {
                (0, r.S)(e), (0, s.e)(e)
            }
        },
        96877: (e, t, i) => {
            "use strict";
            i.d(t, {
                d: () => s
            });
            var r = i(14232);
            let s = (e, t) => {
                let i = (0, r.useRef)(void 0);
                return (0, r.useCallback)((...r) => {
                    clearTimeout(i.current), i.current = setTimeout(() => {
                        e.apply(void 0, r)
                    }, t)
                }, [e, t])
            }
        },
        97278: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => s
            });
            var r = i(37876);
            let s = e => (0, r.jsxs)("svg", {
                fill: "none",
                height: "1em",
                viewBox: "0 0 24 24",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, r.jsx)("path", {
                    clipRule: "evenodd",
                    d: "M8.56201 9.53699C8.56201 9.07684 8.7018 8.61063 8.98139 8.13838C9.26098 7.66612 9.66889 7.27499 10.2051 6.96499C10.7414 6.655 11.367 6.5 12.082 6.5C12.7466 6.5 13.3333 6.62957 13.842 6.8887C14.3508 7.14784 14.7438 7.50022 15.0211 7.94584C15.2984 8.39146 15.437 8.87583 15.437 9.39894C15.437 9.81066 15.358 10.1715 15.1998 10.4815C15.0417 10.7915 14.8538 11.0591 14.6361 11.2843C14.4184 11.5096 14.0277 11.8886 13.4639 12.4214C13.3081 12.5715 13.1832 12.7035 13.0892 12.8174C12.9953 12.9312 12.9254 13.0353 12.8795 13.1298C12.8337 13.2242 12.7982 13.3187 12.773 13.4131C12.7478 13.5076 12.71 13.6735 12.6595 13.9108C12.5725 14.4146 12.2998 14.6664 11.8414 14.6664C11.6031 14.6664 11.4026 14.5841 11.2399 14.4194C11.0771 14.2547 10.9958 14.0101 10.9958 13.6856C10.9958 13.2787 11.0554 12.9264 11.1745 12.6285C11.2937 12.3306 11.4518 12.069 11.6489 11.8438C11.846 11.6186 12.1118 11.3509 12.4464 11.0409C12.7398 10.7697 12.9517 10.5651 13.0824 10.427C13.213 10.289 13.323 10.1352 13.4124 9.96565C13.5017 9.79611 13.5464 9.61206 13.5464 9.41347C13.5464 9.02598 13.4101 8.69903 13.1374 8.43263C12.8646 8.16622 12.5129 8.03302 12.082 8.03302C11.5779 8.03302 11.2066 8.16743 10.9683 8.43626C10.73 8.70508 10.5283 9.10105 10.3633 9.62417C10.2075 10.1715 9.91183 10.4452 9.47642 10.4452C9.21975 10.4452 9.00319 10.3495 8.82673 10.1582C8.65027 9.96686 8.56205 9.75979 8.56205 9.53698L8.56201 9.53699ZM11.9171 17.5002C11.6375 17.5002 11.3934 17.4046 11.1849 17.2132C10.9763 17.0219 10.8721 16.7543 10.8721 16.4104C10.8721 16.1052 10.9729 15.8485 11.1746 15.6403C11.3762 15.432 11.6237 15.3278 11.9171 15.3278C12.2058 15.3278 12.4487 15.432 12.6458 15.6403C12.8429 15.8485 12.9415 16.1052 12.9415 16.4104C12.9415 16.7495 12.8383 17.0159 12.6321 17.2096C12.4258 17.4034 12.1875 17.5002 11.9171 17.5002Z",
                    fill: "#005eff",
                    fillRule: "evenodd"
                }), (0, r.jsx)("circle", {
                    cx: 12,
                    cy: 12,
                    r: 10.5,
                    stroke: "#10111A",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        },
        97588: e => {
            e.exports = {
                heroSectionWrapper: "LimitedEditionHeroSection_heroSectionWrapper__jcXrJ",
                hiddenForMobile: "LimitedEditionHeroSection_hiddenForMobile__3HbmJ"
            }
        },
        99200: e => {
            e.exports = {
                autoScroll: "AutoScroll_autoScroll__Kr_oS",
                autoScrollDisabled: "AutoScroll_autoScrollDisabled__WgQkP",
                autoScrollTop: "AutoScroll_autoScrollTop__C4BWD",
                autoScrollBottom: "AutoScroll_autoScrollBottom__y5jDw"
            }
        }
    },
    e => {
        e.O(0, [4024, 2183, 1353, 1671, 3969, 5706, 9658, 3915, 5657, 3851, 9633, 888, 636, 6593, 8792], () => e(e.s = 10752)), _N_E = e.O()
    }
]);
//#
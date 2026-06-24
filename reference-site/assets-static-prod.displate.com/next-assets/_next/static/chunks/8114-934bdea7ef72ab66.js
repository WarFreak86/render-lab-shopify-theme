(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8114], {
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
        64968: (e, r, t) => {
            "use strict";
            t.d(r, {
                e: () => i,
                l: () => o
            });
            var a = t(37876),
                s = t(14232),
                n = t(69241),
                l = t(37253),
                d = t.n(l);
            let o = (0, s.createContext)({}),
                i = ({
                    children: e
                }) => {
                    let [r, t] = (0, s.useState)(!1), [l, i] = (0, s.useState)(!1), [c, p] = (0, s.useState)(0), u = (0, s.useRef)(null), m = (0, s.useRef)(null), x = (0, s.useRef)(null);
                    return (0, s.useEffect)(() => {
                        p(window.innerWidth - document.documentElement.clientWidth)
                    }, []), (0, s.useEffect)(() => {
                        let e = document.getElementById("main-container");
                        document.documentElement.style.setProperty("--scrollBarWidth", `${c}px`), r ? (e && e.classList.add(d().scrollBarWidth), document.body.classList.add(d().editHtmlDrawer), x.current ? .classList.add(d().editHeaderDrawer, d().scrollBarWidth)) : (e && e.classList.remove(d().scrollBarWidth), document.body.classList.remove(d().editHtmlDrawer), x.current ? .classList.remove(d().editHeaderDrawer, d().scrollBarWidth))
                    }, [r, c]), (0, a.jsxs)(o.Provider, {
                        value: {
                            setHeaderRef: e => {
                                x.current = e.current
                            },
                            setIsDrawerFullHeight: i,
                            handleBackdropClose: () => t(!1),
                            handleBackdropOpen: () => t(!0),
                            drawerContainerRef: u,
                            drawerBackdropRef: m
                        },
                        children: [e, (0, a.jsx)("div", {
                            className: (0, n.A)(d().drawerContainer, d().clientDrawer, {
                                [d().drawerContainerOpened]: r,
                                [d().drawerContainerFullHeight]: l
                            }),
                            "data-testid": "drawer-container",
                            ref: u
                        }), (0, a.jsx)("div", {
                            className: (0, n.A)(d().drawerBackdrop, {
                                [d().drawerBackdropOpened]: r
                            }),
                            ref: m
                        })]
                    })
                }
        },
        68873: (e, r, t) => {
            "use strict";
            t.d(r, {
                Z: () => s
            });
            var a = t(22884);
            let s = ({
                elementId: e,
                elementVariant: r = "none",
                additionalData: t
            }) => {
                let s = {
                    event: "element_impression",
                    element_id: e,
                    element_variant: r,
                    ...t
                };
                (0, a.u)(s)
            }
        },
        70911: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => I
            });
            var a = t(37876),
                s = t(14232),
                n = t(56557),
                l = t.n(n),
                d = t(89099),
                o = t(84080),
                i = t(10769),
                c = t(14619);
            let p = ({
                code: e,
                className: r,
                label: t,
                location: n
            }) => {
                let [l, d] = (0, s.useState)("copy");
                return e ? (0, a.jsxs)("button", {
                    "aria-label": "Copy code",
                    className: (0, c.cn)("flex cursor-pointer items-center gap-0.5", r),
                    onClick: () => {
                        navigator.clipboard && e && navigator.clipboard.writeText(e), d("checkmark-color"), (0, o.J)(n), setTimeout(() => {
                            d("copy")
                        }, 2e3)
                    },
                    type: "button",
                    children: [(0, a.jsxs)("span", {
                        children: [t, " ", (0, a.jsx)("strong", {
                            children: e
                        })]
                    }), (0, a.jsx)("img", {
                        alt: "copyButtonIcon",
                        src: (0, i.qH)(`/images/pdp/HeroOptions/icon_${l}.svg`)
                    })]
                }) : null
            };
            var u = t(10342);
            let m = ({
                promotionPrice: e,
                regularPrice: r
            }) => e && r ? (0, a.jsxs)("span", {
                className: "ml-2 inline-flex items-center gap-0.5",
                "data-testid": "promo-box-price",
                children: [(0, a.jsx)("span", {
                    className: "text-body-sm text-text-error",
                    children: e
                }), (0, a.jsx)("span", {
                    className: "text-body-xs text-text-secondary line-through",
                    children: r
                })]
            }) : null;
            var x = t(41443);
            let w = ({
                    percent: e,
                    discountableTypes: r,
                    onError: t
                }) => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("strong", {
                        children: [e, "% OFF"]
                    }), " on ", (0, x.cp)(r, t)]
                }),
                h = ({
                    percent: e,
                    quantityRange: r,
                    isPlural: t,
                    isBundle: s = !1
                }) => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("strong", {
                        children: [e, "% OFF"]
                    }), " on ", r, " ", s ? "Bundle" : "Displate", t ? "s" : ""]
                }),
                _ = ({
                    percent: e
                }) => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("strong", {
                        children: 100 === e ? "Free delivery" : `${e}% OFF delivery`
                    }), " on all orders"]
                }),
                g = ({
                    threshold: e
                }) => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("strong", {
                        children: "Free delivery"
                    }), " on orders above ", e]
                }),
                b = (e, r) => {
                    switch (r) {
                        case u.Q.AUTO_APPLIED_SHIPPING:
                            return (0, a.jsx)(g, {
                                threshold: e.minValue.formatted
                            });
                        case u.Q.SHIPPING:
                        case u.Q.FLAT:
                        case u.Q.STEP:
                        case u.Q.CATEGORY:
                        case u.Q.COLLECTION:
                        case u.Q.ARTIST:
                        case u.Q.FORMAT:
                        case u.Q.ITEM:
                            return (0, a.jsx)(_, {
                                percent: e.percentageValue
                            });
                        default:
                            return null
                    }
                },
                j = ({
                    steps: e,
                    shipping: r,
                    type: t,
                    regularPrice: s,
                    showPrice: n,
                    discountableTypes: l = [],
                    onError: d,
                    isBundle: o = !1
                }) => {
                    let i = (0, x.at)(e);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [i.map(e => (0, a.jsxs)("p", {
                            children: [((e, r, t, s, n) => {
                                switch (r) {
                                    case u.Q.FLAT:
                                    case u.Q.CATEGORY:
                                    case u.Q.COLLECTION:
                                    case u.Q.ARTIST:
                                    case u.Q.FORMAT:
                                    case u.Q.ITEM:
                                        return (0, a.jsx)(w, {
                                            discountableTypes: t,
                                            onError: s,
                                            percent: e.percentageValue
                                        });
                                    case u.Q.STEP:
                                        return (0, a.jsx)(h, {
                                            isBundle: n,
                                            isPlural: e.isPlural,
                                            percent: e.percentageValue,
                                            quantityRange: e.quantityRange
                                        });
                                    case u.Q.SHIPPING:
                                    case u.Q.AUTO_APPLIED_SHIPPING:
                                        return null
                                }
                            })(e, t, l, d, o), n ? (0, a.jsx)(m, {
                                promotionPrice: e.price ? .formatted,
                                regularPrice: s
                            }) : null]
                        }, e.percentageValue)), r ? (0, a.jsx)("p", {
                            children: b(r, t)
                        }) : null]
                    })
                };
            var y = t(60346),
                C = t(56926);
            let f = e => (0, a.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.93005 2.31046C6.5916 2.10551 8.28365 2 10 2C11.7163 2 13.4084 2.10551 15.07 2.31046C16.1942 2.44913 17 3.41374 17 4.51661V17.25C17 17.5078 16.8676 17.7475 16.6494 17.8848C16.4312 18.0221 16.1578 18.0377 15.9255 17.9261L13.125 16.5819L10.3245 17.9261C10.1194 18.0246 9.88061 18.0246 9.67545 17.9261L6.875 16.5819L4.07455 17.9261C3.84215 18.0377 3.56875 18.0221 3.35057 17.8848C3.13239 17.7475 3 17.5078 3 17.25V4.51661C3 3.41374 3.80579 2.44913 4.93005 2.31046ZM13.7803 7.28033C14.0732 6.98744 14.0732 6.51256 13.7803 6.21967C13.4874 5.92678 13.0126 5.92678 12.7197 6.21967L6.21967 12.7197C5.92678 13.0126 5.92678 13.4874 6.21967 13.7803C6.51256 14.0732 6.98744 14.0732 7.28033 13.7803L13.7803 7.28033ZM9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",
                        fill: "#FF7B00"
                    })
                }),
                N = ({
                    endsAt: e,
                    onEnd: r,
                    onClick: t,
                    promoType: s = "sale",
                    isExpanded: n,
                    canBeExpanded: l
                }) => (0, a.jsxs)("div", {
                    "aria-label": "Show promotion details",
                    className: (0, c.cn)("mb-3 flex items-center gap-2", l ? "cursor-pointer" : "cursor-default"),
                    onClick: t,
                    role: "button",
                    children: [(0, a.jsx)(f, {
                        "aria-hidden": !0,
                        className: "size-5 shrink-0",
                        "data-testid": "promo-box-sale-icon"
                    }), (0, a.jsxs)("p", {
                        className: "text-body-sm text-text-primary",
                        children: ["promotion" === s ? "Promotion" : "Sale", " ends in", " ", (0, a.jsx)(y.A, {
                            className: "font-bold",
                            endsAt: e,
                            onEnd: r
                        })]
                    }), l ? (0, a.jsx)(C.A, {
                        className: (0, c.cn)("ml-auto transition-transform duration-200 ease-linear", n && "rotate-180"),
                        "data-testid": "promo-box-chevron",
                        height: 24,
                        width: 24
                    }) : null]
                });
            var v = t(19470);
            let D = ({
                    promotion: e,
                    location: r,
                    className: t,
                    testId: s = "promo-box",
                    onEnd: n,
                    showPrice: l = !0
                }) => {
                    let d = (0, x.at)(e.steps),
                        o = e.regularPrice ? .formatted,
                        i = e.type === u.Q.SHIPPING || e.type === u.Q.AUTO_APPLIED_SHIPPING;
                    return (0, a.jsxs)("div", {
                        className: (0, c.cn)("flex flex-col gap-3 rounded-sm bg-background-warning p-4", t),
                        "data-testid": s,
                        children: [(0, a.jsxs)("p", {
                            className: "text-body-sm text-text-primary",
                            children: [i ? "Promotion" : "Sale", " ends in", " ", (0, a.jsx)(y.A, {
                                className: "font-bold",
                                endsAt: e.endsAt,
                                onEnd: n
                            })]
                        }), i && e.shipping ? (0, a.jsx)("p", {
                            className: "border-t border-border-promo-separator pt-3 text-body-sm text-text-primary",
                            children: b(e.shipping, e.type)
                        }) : null, l && !i ? (0, a.jsx)("div", {
                            className: "flex flex-col gap-2 border-t border-border-promo-separator pt-3",
                            "data-testid": "promo-box-pdp-prices",
                            children: d.map(r => {
                                if (!r.price) return null;
                                let {
                                    main: t,
                                    decimals: s,
                                    trailing: n
                                } = (0, v.g)(r.price.formatted, r.price.amountInCurrency);
                                return (0, a.jsxs)("div", {
                                    className: "flex w-full items-baseline gap-2",
                                    children: [(0, a.jsxs)("p", {
                                        className: "flex items-baseline gap-1",
                                        children: [(0, a.jsxs)("span", {
                                            className: "flex items-baseline text-text-promo-price",
                                            children: [(0, a.jsx)("span", {
                                                className: "text-heading-h4",
                                                children: t
                                            }), s ? (0, a.jsx)("span", {
                                                className: "text-heading-subtitle",
                                                children: s
                                            }) : null, n ? (0, a.jsx)("span", {
                                                className: "text-heading-h4 ml-1",
                                                children: n
                                            }) : null]
                                        }), o ? (0, a.jsx)("span", {
                                            className: "text-body-xs text-text-secondary line-through",
                                            children: o
                                        }) : null]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-baseline gap-2",
                                        children: [(0, a.jsxs)("span", {
                                            className: "text-body-sm text-text-primary",
                                            children: ["for ", r.quantityRange, " Displate", r.isPlural ? "s" : ""]
                                        }), (0, a.jsxs)("span", {
                                            className: "rounded-sm px-1 text-body-sm font-bold",
                                            style: e.displaySettings ? {
                                                backgroundColor: e.displaySettings.topBar.backgroundColor,
                                                color: e.displaySettings.topBar.fontColor
                                            } : void 0,
                                            children: ["-", r.percentageValue, "%"]
                                        })]
                                    })]
                                }, r.percentageValue)
                            })
                        }) : null, (0, a.jsx)(p, {
                            className: "border-none bg-transparent p-0 text-body-sm",
                            code: e.code,
                            label: "Use code",
                            location: r
                        })]
                    })
                },
                P = ["pdp", "custom-displate-pdp"],
                I = ({
                    className: e,
                    promotion: r,
                    location: t,
                    testId: n = "promo-box",
                    onClick: o,
                    canBeExpanded: i,
                    showPrice: m,
                    isBundle: x = !1
                }) => {
                    let [w, h] = (0, s.useState)(!1), [_, g] = (0, s.useState)(!1), [b, y] = (0, s.useState)(!i), [C, f] = (0, s.useState)(0), v = (0, d.useRouter)(), I = void 0 !== v.query.ctrc && "" !== v.query.ctrc, H = P.includes(t);
                    (0, s.useEffect)(() => {
                        h(l()(r ? .endsAt).isBefore(l()()))
                    }, [r ? .endsAt]);
                    let T = (0, s.useCallback)(e => {
                        e && f(e.scrollHeight)
                    }, []);
                    if (w || _) return null;
                    let A = () => {
                        h(!0)
                    };
                    if (H) return (0, a.jsx)(D, {
                        className: e,
                        location: t,
                        onEnd: A,
                        promotion: r,
                        showPrice: !I && m,
                        testId: n
                    });
                    let B = r.type === u.Q.SHIPPING || r.type === u.Q.AUTO_APPLIED_SHIPPING ? "promotion" : "sale",
                        S = !0 === i,
                        E = S && !b,
                        O = S && b && C > 0 ? C : void 0;
                    return (0, a.jsxs)("div", {
                        className: (0, c.cn)("rounded-md bg-background-warning p-4 text-body-sm", S && "overflow-hidden transition-[max-height] duration-300 ease-in-out", E && "max-h-[54px]", e),
                        "data-testid": n,
                        ref: T,
                        style: void 0 !== O ? {
                            maxHeight: O
                        } : void 0,
                        children: [(0, a.jsx)(N, {
                            canBeExpanded: i,
                            endsAt: r.endsAt,
                            isExpanded: b,
                            onClick: () => {
                                i && (y(!b), o ? .(b))
                            },
                            onEnd: A,
                            promoType: B
                        }), (0, a.jsx)(j, {
                            discountableTypes: r.discountableTypes,
                            isBundle: x,
                            onError: e => {
                                console.error(e), g(!0)
                            },
                            regularPrice: r.regularPrice ? .formatted,
                            shipping: r.shipping,
                            showPrice: !I && m,
                            steps: r.steps,
                            type: r.type
                        }), (0, a.jsx)(p, {
                            className: "mt-3 border-none bg-transparent pl-0",
                            code: r.code,
                            label: "Use code",
                            location: t
                        })]
                    })
                }
        }
    }
]);
//#
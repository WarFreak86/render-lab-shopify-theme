(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1194], {
        2843: (e, t, i) => {
            "use strict";
            i.d(t, {
                R9: () => s,
                _g: () => a,
                gu: () => n
            });
            var r, a = ((r = {}).FINISH = "FINISH", r);
            let s = {
                    openedDrawers: []
                },
                n = (e, t) => ({ ...s,
                    handleDrawerOpen: i => {
                        let r = [...t().openedDrawers];
                        r.includes(i) || (r.push(i), e(e => ({ ...e,
                            openedDrawers: r
                        })))
                    },
                    handleDrawerClose: i => {
                        let r = [...t().openedDrawers];
                        e(e => ({ ...e,
                            openedDrawers: r.filter(e => e !== i)
                        }))
                    }
                })
        },
        8325: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => a
            });
            var r = i(37876);
            let a = e => (0, r.jsx)("svg", {
                fill: "none",
                height: "1em",
                viewBox: "0 0 24 24",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, r.jsx)("path", {
                    clipRule: "evenodd",
                    d: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V12.625C12.75 13.0392 12.4142 13.375 12 13.375C11.5858 13.375 11.25 13.0392 11.25 12.625V7C11.25 6.58579 11.5858 6.25 12 6.25ZM12 17.625C12.5178 17.625 12.9375 17.2053 12.9375 16.6875C12.9375 16.1697 12.5178 15.75 12 15.75C11.4822 15.75 11.0625 16.1697 11.0625 16.6875C11.0625 17.2053 11.4822 17.625 12 17.625Z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                })
            })
        },
        13506: (e, t, i) => {
            "use strict";
            i.d(t, {
                Q: () => a
            });
            var r = i(37876);
            let a = ({
                presentation: e,
                options: t
            }) => (0, r.jsxs)("section", {
                className: "flex flex-col lg:grid lg:gap-8 lg:grid-cols-[1fr_348px] lg:auto-rows-fr xl:gap-10 xl:grid-cols-[1fr_368px]",
                children: [(0, r.jsx)("div", {
                    className: "w-full z-[9] min-h-[450px] max-h-[600px] h-[65vh] md:h-[75vh] md:min-h-[575px] md:max-h-[600px] lg:sticky lg:top-[120px] lg:min-h-[545px] lg:max-h-[585px] xl:min-h-[585px] xl:max-h-[765px] 2xl:min-h-[765px] 2xl:max-h-[1000px]",
                    children: e
                }), t]
            })
        },
        17981: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => V
            });
            var r = i(37876),
                a = i(14232),
                s = i(16973),
                n = i(51192),
                l = i(37872),
                o = i(10698),
                d = i(27555),
                c = i(82378),
                u = i(36256),
                h = i(10769);
            let m = ({
                element: e
            }) => (0, r.jsxs)("div", {
                className: "mb-3",
                "data-testid": "drawer-content-element",
                children: [e.img ? .slug && (0, r.jsx)("div", {
                    className: "mb-4 flex w-full flex-col items-center justify-center overflow-hidden rounded-sm bg-neutral-100",
                    children: (0, r.jsx)("img", {
                        alt: e.img.alt,
                        className: "block w-full",
                        fetchPriority: "low",
                        loading: "lazy",
                        src: (0, h.v9)({
                            assetPath: e.img.slug
                        }).src
                    })
                }), (0, r.jsx)("div", {
                    className: "text-left text-heading-subtitle",
                    children: e.title
                }), (0, r.jsx)("div", {
                    className: "mt-2 mb-8 text-left text-body-md",
                    children: e.body
                })]
            });
            var p = i(89473),
                g = i(71280),
                x = i(91680),
                f = i(87014);
            let v = ({
                    content: e
                }) => (0, r.jsx)(r.Fragment, {
                    children: [...e.artistRoute && e.artistName ? [{
                        title: "Artist",
                        body: (0, r.jsx)(u.N_, {
                            asChild: !0,
                            children: (0, r.jsx)(d.A, {
                                onClick: () => (0, n.O)({
                                    elementId: "about_poster_artist_link"
                                }),
                                routeInfo: (0, c.ZW)({
                                    path: e.artistRoute,
                                    target: "external"
                                }),
                                children: e.artistName
                            })
                        })
                    }] : [], ...e.collectionRoute && e.collectionName ? [{
                        title: "Collection",
                        body: (0, r.jsx)(u.N_, {
                            asChild: !0,
                            children: (0, r.jsx)(d.A, {
                                onClick: () => (0, n.O)({
                                    elementId: "about_poster_collection_link"
                                }),
                                routeInfo: (0, c.ZW)({
                                    path: e.collectionRoute,
                                    target: "external"
                                }),
                                children: e.collectionName
                            })
                        })
                    }] : [], {
                        title: "Material",
                        body: "stainless steel"
                    }, {
                        title: "Size",
                        body: e.variantSize
                    }, {
                        title: "Thickness",
                        body: e.variantThickness
                    }, {
                        title: "Weight",
                        body: e.variantWeight
                    }, {
                        title: "Mounting",
                        body: "Magnet (no tools)"
                    }, {
                        title: "Included in the package",
                        body: e.packageContent
                    }].map((e, t) => (0, r.jsx)(m, {
                        element: e
                    }, t))
                }),
                b = ({
                    title: e,
                    icon: t,
                    isOpen: i,
                    handleClose: a,
                    author: s,
                    collection: n,
                    shouldShowTrademarkDisclaimer: d = !0
                }) => {
                    let {
                        currentSize: c
                    } = (0, p.V)((0, l.k)(e => ({
                        currentSize: e.size
                    }))), {
                        countryCode: m
                    } = (0, o.C)(), b = (0, g.i)(c, m), C = {
                        variantSize: b.description,
                        variantWeight: b.weight,
                        variantThickness: b.thickness,
                        ...s ? {
                            artistName: s.name,
                            artistRoute: (0, x.bo)({
                                licensed: s ? .isLicensed ? ? !1,
                                nick: s ? .nick ? ? ""
                            }).route
                        } : {},
                        ...n && s ? {
                            collectionName: n.title,
                            collectionRoute: (0, f.Eq)({
                                artistNick: s ? .collectionSlug ? ? "",
                                collectionSlug: n ? .slug ? ? ""
                            }).route
                        } : {},
                        packageContent: b.packageContent,
                        ...s ? .isLicensed || !d ? {} : {
                            trademarkDisclaimer: "This Displate is a purely decorative item. It was created by an independent artist. The trademarks that might be featured within are for decorative purposes only. Unless expressly stated otherwise, Displate does not have any direct contractual or licensing relationship with the trademark owner"
                        }
                    };
                    return (0, r.jsx)(u._s, {
                        onOpenChange: e => {
                            e || a()
                        },
                        open: i,
                        children: (0, r.jsxs)(u.zj, {
                            "aria-describedby": void 0,
                            "data-testid": "hero-about-poster",
                            children: [(0, r.jsxs)(u.BE, {
                                children: [(0, r.jsx)("img", {
                                    alt: "about-icon",
                                    src: (0, h.qH)(t)
                                }), (0, r.jsx)(u.gk, {
                                    children: e
                                })]
                            }), (0, r.jsx)(u.ys, {
                                children: (0, r.jsx)(v, {
                                    content: C
                                })
                            })]
                        })
                    })
                },
                C = e => (0, r.jsx)("svg", {
                    fill: "none",
                    height: "1em",
                    viewBox: "0 0 20 20",
                    width: "1em",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, r.jsx)("path", {
                        clipRule: "evenodd",
                        d: "M10.7513 4.1665C10.7513 3.75229 10.4155 3.4165 10.0013 3.4165C9.58709 3.4165 9.2513 3.75229 9.2513 4.1665V9.24984H4.16797C3.75375 9.24984 3.41797 9.58562 3.41797 9.99984C3.41797 10.4141 3.75375 10.7498 4.16797 10.7498H9.2513V15.8332C9.2513 16.2474 9.58709 16.5832 10.0013 16.5832C10.4155 16.5832 10.7513 16.2474 10.7513 15.8332V10.7498H15.8346C16.2488 10.7498 16.5846 10.4141 16.5846 9.99984C16.5846 9.58562 16.2488 9.24984 15.8346 9.24984H10.7513V4.1665Z",
                        fill: "currentColor",
                        fillRule: "evenodd"
                    })
                });
            var y = i(14619);
            let j = ({
                    title: e,
                    icon: t,
                    handleClick: i
                }) => (0, r.jsxs)("div", {
                    className: (0, y.cn)("flex w-full cursor-pointer items-center py-6", "text-body-md font-bold leading-20 text-text-primary", "pointer-fine:hover:text-text-link", "active:text-text-link-hover active:cursor-default", "last:relative last:pb-0", "last:before:absolute last:before:bottom-[-24px] last:before:left-0 last:before:h-6 last:before:w-full last:before:content-['']", "[&_svg]:h-5 [&_svg]:w-5 [&_svg:first-of-type]:mr-3"),
                    "data-testid": "pdp-details-button",
                    onClick: i,
                    children: [t, e, (0, r.jsx)(C, {
                        className: "ml-auto shrink-0"
                    })]
                }),
                w = ({
                    author: e,
                    collection: t,
                    shouldShowTrademarkDisclaimer: i
                }) => {
                    let [l, o] = (0, a.useState)(!1), d = "About this poster";
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(j, {
                            handleClick: () => {
                                (0, n.O)({
                                    elementId: "about_poster_tab",
                                    interactionType: "expand"
                                }), o(!0)
                            },
                            icon: (0, r.jsx)(s.A, {
                                "aria-hidden": !0
                            }),
                            title: d
                        }), (0, r.jsx)(b, {
                            author: e,
                            collection: t,
                            handleClose: () => o(!1),
                            icon: "/images/pdp/HeroOptions/about/info.svg",
                            isOpen: l,
                            shouldShowTrademarkDisclaimer: i,
                            title: d
                        })]
                    })
                },
                _ = e => (0, r.jsx)("svg", {
                    fill: "none",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    width: "1em",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, r.jsx)("path", {
                        clipRule: "evenodd",
                        d: "M3.5 11.25V3.5H11.25V5.75464C11.25 6.4982 11.8692 7.01808 12.5179 7.041C12.8561 7.05295 13.2303 7.10349 13.4953 7.22036C13.6214 7.27598 13.6837 7.32993 13.7117 7.365C13.7301 7.38798 13.75 7.42015 13.75 7.5C13.75 7.6298 13.7175 7.68966 13.6927 7.72326C13.6613 7.76569 13.5996 7.82099 13.479 7.87585C13.2187 7.99422 12.8451 8.04017 12.4796 8.05002C11.8228 8.06772 11.25 8.5925 11.25 9.3V11.25H3.5ZM3.5 12.75V20.5H11.25V18.5395C10.8583 18.5156 10.352 18.4468 9.90011 18.2413C9.61723 18.1127 9.32366 17.9163 9.10058 17.6142C8.871 17.3032 8.75 16.9255 8.75 16.5C8.75 15.6017 9.34292 15.0934 9.89933 14.8479C10.3539 14.6474 10.8636 14.5759 11.25 14.5509V12.75H3.5ZM12.75 20.5H20.5V12.75H18.4491C18.4241 13.1364 18.3526 13.6461 18.1521 14.1007C17.9066 14.6571 17.3983 15.25 16.5 15.25C16.0745 15.25 15.6968 15.129 15.3858 14.8994C15.0837 14.6763 14.8873 14.3828 14.7587 14.0999C14.5532 13.648 14.4844 13.1417 14.4605 12.75H12.75V14.7546C12.75 15.4982 12.1308 16.0181 11.4821 16.041C11.1439 16.053 10.7697 16.1035 10.5047 16.2204C10.3786 16.276 10.3163 16.3299 10.2883 16.365C10.2699 16.388 10.25 16.4202 10.25 16.5C10.25 16.6298 10.2825 16.6897 10.3073 16.7233C10.3387 16.7657 10.4004 16.821 10.521 16.8758C10.7813 16.9942 11.1549 17.0402 11.5204 17.05C12.1772 17.0677 12.75 17.5925 12.75 18.3V20.5ZM20.5 11.25V3.5H12.75V5.55087C13.1364 5.57593 13.6461 5.64743 14.1007 5.84795C14.6571 6.09338 15.25 6.60173 15.25 7.5C15.25 7.92554 15.129 8.30322 14.8994 8.6142C14.6763 8.91634 14.3828 9.11267 14.0999 9.2413C13.648 9.44679 13.1417 9.51563 12.75 9.53952V11.25H14.7C15.4075 11.25 15.9323 11.8228 15.95 12.4796C15.9598 12.8451 16.0058 13.2187 16.1242 13.479C16.179 13.5996 16.2343 13.6613 16.2767 13.6927C16.3103 13.7175 16.3702 13.75 16.5 13.75C16.5798 13.75 16.612 13.7301 16.635 13.7117C16.6701 13.6837 16.724 13.6214 16.7796 13.4953C16.8965 13.2303 16.947 12.8561 16.959 12.5179C16.9819 11.8692 17.5018 11.25 18.2454 11.25H20.5ZM2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3Z",
                        fill: "currentColor",
                        fillRule: "evenodd"
                    })
                }),
                S = [{
                    title: "Stick the leaf",
                    body: "If necessary, clean the wall with a dry wipe. Stick the Protective Leaf and press around to remove air bubbles.",
                    img: {
                        slug: "/images/pdp/HeroOptions/mounting/mounting_system-01.gif",
                        alt: "Stick the leaf"
                    }
                }, {
                    title: "Place the magnet",
                    body: "Peel off the foil and stick the magnet in a designated spot on the Protective Leaf. Press it firmly for at least 5 seconds to ensure a tight fit.",
                    img: {
                        slug: "/images/pdp/HeroOptions/mounting/mounting_system-02.gif",
                        alt: "Place the magnet"
                    }
                }, {
                    title: "Hang your Displate",
                    body: "Position it any way you want and display yourself! You can swap it for another Displate in seconds and hang it using the same magnet.",
                    img: {
                        slug: "/images/pdp/HeroOptions/mounting/mounting_system-03.gif",
                        alt: "Hang your Displate"
                    }
                }],
                k = ({
                    contentSteps: e
                }) => (0, r.jsx)(r.Fragment, {
                    children: e.map((e, t) => (0, r.jsx)(m, {
                        element: e
                    }, t))
                }),
                I = ({
                    title: e,
                    icon: t,
                    isOpen: i,
                    handleClose: a
                }) => (0, r.jsx)(u._s, {
                    onOpenChange: e => {
                        e || a()
                    },
                    open: i,
                    children: (0, r.jsxs)(u.zj, {
                        "aria-describedby": void 0,
                        "data-testid": "hero-easy-mounting",
                        children: [(0, r.jsxs)(u.BE, {
                            children: [(0, r.jsx)("img", {
                                alt: e,
                                fetchPriority: "low",
                                loading: "lazy",
                                src: (0, h.qH)(t)
                            }), (0, r.jsx)(u.gk, {
                                children: e
                            })]
                        }), (0, r.jsx)(u.ys, {
                            children: (0, r.jsx)(k, {
                                contentSteps: S
                            })
                        })]
                    })
                }),
                N = () => {
                    let [e, t] = (0, a.useState)(!1), i = "Easy mounting in 3 steps";
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(j, {
                            handleClick: () => {
                                (0, n.O)({
                                    elementId: "mounting_tab",
                                    interactionType: "expand"
                                }), t(!0)
                            },
                            icon: (0, r.jsx)(_, {}),
                            title: i
                        }), (0, r.jsx)(I, {
                            handleClose: () => t(!1),
                            icon: "/images/pdp/HeroOptions/mounting/mounting.svg",
                            isOpen: e,
                            title: i
                        })]
                    })
                },
                z = a.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...i
                }, r) {
                    return a.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        "data-slot": "icon",
                        ref: r,
                        "aria-labelledby": t
                    }, i), e ? a.createElement("title", {
                        id: t
                    }, e) : null, a.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    }))
                });
            var L = i(84086),
                A = i(23278);
            let T = () => {
                    (0, n.O)({
                        elementId: "pdp_shipping_drawer_join_displate_club",
                        interactionType: "click"
                    })
                },
                E = ({
                    estimatedDelivery: e,
                    productType: t
                }) => (0, r.jsx)(r.Fragment, {
                    children: (({
                        deliveryTime: e,
                        productType: t = "regular"
                    }) => [{
                        title: "Time",
                        body: `Expected delivery time is ${e} from placing your order.`
                    }, {
                        title: "Returns",
                        body: ((e = "regular") => "custom" === e ? (0, r.jsxs)(r.Fragment, {
                            children: ["As per our policy, custom prints are not eligible for a refund. Please check out our return policy", " ", (0, r.jsx)(u.N_, {
                                asChild: !0,
                                children: (0, r.jsx)(d.A, {
                                    routeInfo: (0, L.B)(),
                                    children: "here"
                                })
                            }), "."]
                        }) : "You may return a Displate within 100 calendar days of delivery and you will receive 100% refund (Displate needs to be sent at the customer's cost).")(t)
                    }, {
                        title: "Gift-ready packaging",
                        body: "Displates arrive in a stylish, eco-friendly box that’s packed with goodies!"
                    }, {
                        title: "Free Shipping for Displate Club Members",
                        body: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(u.N_, {
                                asChild: !0,
                                children: (0, r.jsx)(d.A, {
                                    onClick: T,
                                    routeInfo: (0, A.a)(),
                                    target: "_blank",
                                    children: "Join Displate Club"
                                })
                            }), " ", "and say goodbye to shipping costs. Whether you’re grabbing one Displate or ten, shipping is always on us!"]
                        })
                    }])({
                        deliveryTime: e.trim().toLowerCase(),
                        productType: t
                    }).map((e, t) => (0, r.jsx)(m, {
                        element: e
                    }, t))
                }),
                O = ({
                    title: e,
                    icon: t,
                    isOpen: i,
                    handleClose: a,
                    estimatedDelivery: s,
                    productType: n
                }) => (0, r.jsx)(u._s, {
                    onOpenChange: e => {
                        e || a()
                    },
                    open: i,
                    children: (0, r.jsxs)(u.zj, {
                        "aria-describedby": void 0,
                        "data-testid": "hero-shipping",
                        children: [(0, r.jsxs)(u.BE, {
                            children: [(0, r.jsx)("img", {
                                alt: e,
                                src: t
                            }), (0, r.jsx)(u.gk, {
                                children: e
                            })]
                        }), (0, r.jsx)(u.ys, {
                            children: (0, r.jsx)(E, {
                                estimatedDelivery: s,
                                productType: n
                            })
                        })]
                    })
                }),
                P = ({
                    estimatedDelivery: e,
                    productType: t
                }) => {
                    let [i, s] = (0, a.useState)(!1), l = (0, h.qH)("/images/pdp/HeroOptions/shipping/icon_truck.svg"), o = `Shipping and${"custom"!==t?" a 100 days":""} return`;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(j, {
                            handleClick: () => {
                                (0, n.O)({
                                    elementId: "shipping_tab",
                                    interactionType: "expand"
                                }), s(!0)
                            },
                            icon: (0, r.jsx)(z, {
                                "aria-hidden": !0
                            }),
                            title: o
                        }), (0, r.jsx)(O, {
                            estimatedDelivery: e,
                            handleClose: () => s(!1),
                            icon: l,
                            isOpen: i,
                            productType: t,
                            title: o
                        })]
                    })
                },
                V = ({
                    author: e,
                    collection: t,
                    estimatedDelivery: i,
                    shouldShowTrademarkDisclaimer: a,
                    productType: s,
                    className: n,
                    ref: l
                }) => (0, r.jsxs)("div", {
                    className: (0, y.cn)("w-full flex flex-col items-center", n),
                    "data-testid": "hero-product-details",
                    ref: l,
                    children: [(0, r.jsx)("div", {
                        className: "w-full my-4 text-heading-h4 lg:hidden",
                        children: "Product Details"
                    }), (0, r.jsx)(u.cG, {}), "bundle" !== s ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(w, {
                            author: e,
                            collection: t,
                            shouldShowTrademarkDisclaimer: a
                        }), (0, r.jsx)(u.cG, {})]
                    }) : null, (0, r.jsx)(P, {
                        estimatedDelivery: i,
                        productType: s
                    }), (0, r.jsx)(u.cG, {}), (0, r.jsx)(N, {}), "bundle" === s ? (0, r.jsx)(u.cG, {}) : null]
                });
            V.displayName = "ProductDetails"
        },
        19276: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => a
            });
            var r = i(37876);
            let a = e => (0, r.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, r.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.63935 1.41806L11.745 0.930014L12.5423 2.95305L14.6322 3.5065L14.4044 5.67125L16 7.13935L14.7999 8.94983L15.5347 10.9967L13.6371 12.0377L13.344 14.1945L11.1833 14.2277L9.92856 16L8 15.018L6.07144 16L4.81672 14.2277L2.65601 14.1945L2.36287 12.0377L0.465294 10.9967L1.20012 8.94983L0 7.13935L1.59557 5.67125L1.36785 3.5065L3.45773 2.95305L4.25503 0.930014L6.36065 1.41806L8 0L9.63935 1.41806ZM11.1449 5.7644C11.0136 5.64972 10.8146 5.66382 10.7008 5.79611L7.27747 9.7753L5.27808 7.88654C5.15127 7.76677 4.95187 7.7732 4.83295 7.9009C4.71407 8.02865 4.72045 8.22952 4.84722 8.34931L7.08564 10.4635C7.14808 10.5225 7.23184 10.5532 7.31731 10.5487C7.40281 10.5443 7.48306 10.5049 7.53913 10.4397L11.1764 6.21182C11.2902 6.07951 11.2762 5.87912 11.1449 5.7644Z",
                    fill: "url(#paint0_linear_7486_45979)"
                }), (0, r.jsx)("defs", {
                    children: (0, r.jsxs)("linearGradient", {
                        id: "paint0_linear_7486_45979",
                        x1: -.0590224,
                        y1: 0,
                        x2: 16.1764,
                        y2: 16.1166,
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, r.jsx)("stop", {
                            stopColor: "#55FCFF"
                        }), (0, r.jsx)("stop", {
                            offset: .5,
                            stopColor: "#005EFF"
                        }), (0, r.jsx)("stop", {
                            offset: 1
                        })]
                    })
                })]
            })
        },
        25874: e => {
            e.exports = {
                container: "ProductPageGallery_container__st2eC",
                slidesWrapper: "ProductPageGallery_slidesWrapper__wuHdz",
                thumbnailsListWrapper: "ProductPageGallery_thumbnailsListWrapper__hLxY_",
                thumbnailsList: "ProductPageGallery_thumbnailsList__FEBwa",
                thumbnailWrapper: "ProductPageGallery_thumbnailWrapper__2uUCX",
                thumbnailWrapperActive: "ProductPageGallery_thumbnailWrapperActive__WsqWG",
                thumbnailButton: "ProductPageGallery_thumbnailButton__lx_2j",
                slideWrapper: "ProductPageGallery_slideWrapper__FamEw",
                activeSlide: "ProductPageGallery_activeSlide__E6AGQ"
            }
        },
        31464: (e, t, i) => {
            "use strict";
            i.d(t, {
                q: () => s
            });
            var r = i(37876),
                a = i(36256);
            let s = ({
                children: e,
                onClick: t,
                dataTestId: i
            }) => (0, r.jsx)(a.$n, {
                "data-testid": i,
                onClick: t,
                size: "sm",
                variant: "textRawStyle",
                children: e
            })
        },
        44792: e => {
            e.exports = {
                thumbnail: "DefaultThumbnail_thumbnail__qyG_X",
                thumbnailImage: "DefaultThumbnail_thumbnailImage__7PWKf",
                artworkWrapper: "DefaultThumbnail_artworkWrapper__lD0pb"
            }
        },
        46140: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => n
            });
            var r = i(37876),
                a = i(16973),
                s = i(36256);
            let n = ({
                onClick: e,
                dataTestId: t,
                children: i
            }) => (0, r.jsxs)("div", {
                className: "h-5 w-max shrink-0 overflow-hidden",
                children: [(0, r.jsx)("div", {
                    className: "flex h-5 translate-y-0 items-center transition-transform duration-150 ease-[cubic-bezier(0.42,0,0,1)] pointer-fine:group-hover/picker-more:-translate-y-5",
                    children: (0, r.jsx)(a.A, {
                        "aria-hidden": !0,
                        className: "size-3 shrink-0 text-text-secondary"
                    })
                }), (0, r.jsx)("div", {
                    className: "flex min-h-10 w-full translate-y-0 cursor-pointer items-center justify-start transition-transform duration-150 ease-[cubic-bezier(0.42,0,0,1)] pointer-fine:group-hover/picker-more:-translate-y-[30px]",
                    children: (0, r.jsx)(s.N_, {
                        asChild: !0,
                        variant: "primary",
                        children: (0, r.jsx)("button", {
                            className: "w-full border-0 bg-transparent p-0 text-left text-link-sm hover:text-text-link-hover",
                            "data-testid": t,
                            onClick: t => {
                                e(), t.currentTarget.blur()
                            },
                            type: "button",
                            children: i ? ? "Learn more"
                        })
                    })
                })]
            })
        },
        49503: (e, t, i) => {
            "use strict";
            i.d(t, {
                D: () => l
            });
            var r = i(37876),
                a = i(77328),
                s = i.n(a),
                n = i(10769);
            let l = ({
                imageSets: e,
                imageFallbackCoreUrl: t,
                className: i,
                width: a,
                height: l,
                onLoaded: o,
                onError: d,
                priority: c = "auto",
                loading: u = "eager",
                alt: h = "artwork"
            }) => {
                let m = "high" === c && "lazy" !== u;
                return (0, r.jsxs)(r.Fragment, {
                    children: [m ? (0, r.jsx)(s(), {
                        children: e.map((e, t) => (0, r.jsx)("link", {
                            as: "image",
                            fetchPriority: "high",
                            imageSizes: e.srcSet.sizes,
                            imageSrcSet: e.srcSet.srcSet,
                            media: e.media,
                            rel: "preload"
                        }, `preload-${t}`))
                    }) : null, (0, r.jsxs)("picture", {
                        className: i,
                        children: [e.map((e, t) => (0, r.jsx)("source", {
                            "data-testid": "picture-source",
                            media: e.media,
                            sizes: e.srcSet.sizes,
                            srcSet: e.srcSet.srcSet
                        }, t)), (0, r.jsx)("img", {
                            alt: h,
                            className: i,
                            "data-pin-nopin": !0,
                            "data-testid": "picture-image",
                            draggable: "false",
                            fetchPriority: c,
                            height: l,
                            loading: u,
                            onError: d,
                            onLoad: o,
                            src: (0, n.v9)({
                                assetPath: `${t}`
                            }).src,
                            width: a
                        })]
                    })]
                })
            }
        },
        55462: (e, t, i) => {
            "use strict";
            i.d(t, {
                v: () => o
            });
            var r = i(37876),
                a = i(14232);
            let s = a.forwardRef(function({
                title: e,
                titleId: t,
                ...i
            }, r) {
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: r,
                    "aria-labelledby": t
                }, i), e ? a.createElement("title", {
                    id: t
                }, e) : null, a.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                }))
            });
            var n = i(36256),
                l = i(14619);
            let o = ({
                isAvailable: e,
                estimatedDelivery: t,
                country: i,
                className: a
            }) => {
                if (!1 === e) return null;
                let o = e && t && i;
                return (0, r.jsx)(r.Fragment, {
                    children: o ? (0, r.jsxs)("p", {
                        className: (0, l.cn)("text-body-xs flex items-center gap-2 text-text-secondary", a),
                        "data-testid": "hero-delivery-info",
                        children: [(0, r.jsx)(s, {
                            className: "size-6"
                        }), (0, r.jsxs)("strong", {
                            children: [t, " delivery to ", i]
                        })]
                    }) : (0, r.jsx)(n.EA, {
                        className: "h-6 w-full mb-4"
                    })
                })
            }
        },
        56855: (e, t, i) => {
            "use strict";
            i.d(t, {
                o: () => s
            });
            var r = i(37876),
                a = i(14619);
            let s = ({
                title: e,
                titleComponent: t = "p",
                tooltipSlot: i,
                pillsPickerSlot: s,
                classes: n,
                ref: l
            }) => (0, r.jsxs)("div", {
                className: (0, a.cn)("flex flex-col items-start gap-2 w-full", n ? .wrapper),
                ref: l,
                children: [(0, r.jsxs)("div", {
                    className: (0, a.cn)("group/picker-more flex flex-wrap items-center justify-start gap-1", n ? .titleWrapper),
                    children: [(0, r.jsx)(t, {
                        className: (0, a.cn)("m-0 p-0 text-body-sm font-bold text-text-primary", n ? .title),
                        children: e
                    }), i]
                }), s]
            });
            s.displayName = "ProductPillsPicker"
        },
        58112: (e, t, i) => {
            "use strict";
            i.d(t, {
                L: () => d
            });
            var r = i(37876),
                a = i(69241),
                s = i(37872),
                n = i(89473),
                l = i(25874),
                o = i.n(l);
            let d = ({
                config: e,
                onThumbnailClick: t
            }) => {
                let {
                    slides: i,
                    thumbnails: l
                } = e, {
                    currentSlide: d,
                    currentThumbnail: c,
                    setCurrentSlide: u,
                    setCurrentThumbnail: h
                } = (0, n.V)((0, s.k)(e => ({
                    currentSlide: e.currentSlide,
                    currentThumbnail: e.currentThumbnail,
                    hasSlideChanged: e.hasSlideChanged,
                    setCurrentSlide: e.setCurrentSlide,
                    setCurrentThumbnail: e.setCurrentThumbnail
                })));
                return (0, r.jsxs)("div", {
                    className: o().container,
                    "data-testid": "hero-slider",
                    children: [(0, r.jsx)("div", {
                        className: o().slidesWrapper,
                        children: i.map((e, t) => (0, r.jsx)("div", {
                            className: (0, a.A)(o().slideWrapper, {
                                [o().activeSlide]: d === e.type
                            }),
                            children: e.slide
                        }, t))
                    }), (0, r.jsx)("div", {
                        className: o().thumbnailsListWrapper,
                        children: (0, r.jsx)("ul", {
                            className: o().thumbnailsList,
                            children: l.map((e, i) => (0, r.jsx)("li", {
                                className: (0, a.A)(o().thumbnailWrapper, {
                                    [o().thumbnailWrapperActive]: c === i
                                }),
                                "data-testid": "pdp-gallery-thumbnail",
                                children: (0, r.jsx)("button", {
                                    className: o().thumbnailButton,
                                    onClick: () => {
                                        !e.isDisabled && (u(e.type), h(i), t ? .(i, e), e.additionalThumbnailClickHandler && e.additionalThumbnailClickHandler())
                                    },
                                    type: "button",
                                    children: e.thumbnail
                                })
                            }, i))
                        })
                    })]
                })
            }
        },
        65294: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => l
            });
            var r = i(37876),
                a = i(14232),
                s = i(51192),
                n = i(14619);
            let l = ({
                description: e,
                className: t
            }) => {
                let [i, l] = (0, a.useState)(!1), [o, d] = (0, a.useState)(!1), [c, u] = (0, a.useState)(!1), [h, m] = (0, a.useState)(!1), p = (0, a.useRef)(null);
                (0, a.useEffect)(() => {
                    let t = p ? .current;
                    if (t) {
                        let i = t.offsetWidth,
                            r = (e ? .length ? ? 0) > (i - 85) / 267 * 44;
                        d(!r), m(r)
                    }
                }, [e]);
                let g = (0, n.cn)("text-body-sm pr-[84px] font-normal max-h-4 transition-[max-height] duration-200 ease-in-out overflow-hidden text-ellipsis whitespace-nowrap scrollbar-hide", "leading-4", {
                    "whitespace-normal pr-0": c,
                    "overflow-y-auto": i,
                    "max-h-[250px]": o
                });
                return (0, r.jsx)("div", {
                    className: (0, n.cn)("w-full", t),
                    children: (0, r.jsx)("div", {
                        className: "relative overflow-hidden lg:mb-0.5",
                        children: (0, r.jsxs)("p", {
                            className: g,
                            ref: p,
                            children: [e, h ? (0, r.jsx)("button", {
                                className: (0, n.cn)("font-bold text-text-link  absolute right-0 top-0 cursor-pointer hover:text-button-primary-hover active:text-button-primary-pressed transition-colors", {
                                    "static ml-1": c
                                }),
                                onClick: () => o ? void(l(!1), d(!1), setTimeout(() => u(!1), 200)) : void(d(!0), u(!0), setTimeout(() => l(!0), 200), (0, s.O)({
                                    elementId: "description_read_more_link"
                                })),
                                type: "button",
                                children: c ? "Read less" : "Read more"
                            }) : null]
                        })
                    })
                })
            }
        },
        71280: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => a
            });
            var r = i(87050);
            let a = (e, t) => {
                    let i = ["US", "UK", "GB"].includes(t),
                        a = null;
                    switch (e) {
                        case r.t.M:
                            a = i ? o : s;
                            break;
                        case r.t.L:
                            a = i ? d : n;
                            break;
                        case r.t.XL:
                            a = i ? c : l
                    }
                    if (!a) throw Error(`Invalid size: ${e}`);
                    let h = i ? o.size : s.size,
                        m = i ? d.size : n.size;
                    return {
                        thickness: a.thickness,
                        weight: a.weight,
                        description: a.size,
                        formattedDescription: a.formattedSize,
                        packageContent: u(e, h, m)
                    }
                },
                s = {
                    size: "45 cm / 32 cm",
                    formattedSize: "45 x 32cm",
                    thickness: "3,50 mm",
                    weight: "0,7 kg"
                },
                n = {
                    size: "67.5 cm / 48 cm",
                    formattedSize: "67.5 x 48cm",
                    thickness: "3,50 mm",
                    weight: "1,20 kg"
                },
                l = {
                    size: "90 cm / 64 cm",
                    formattedSize: "90 x 64cm",
                    thickness: "3,50 mm",
                    weight: "2,80 kg"
                },
                o = {
                    size: "17.7'' / 12.6''",
                    formattedSize: "17.7 x 12.6''",
                    thickness: "0.13''",
                    weight: "1.54 pounds"
                },
                d = {
                    size: "26.6'' / 18.9''",
                    formattedSize: "26.6 x 18.9''",
                    thickness: "0.13''",
                    weight: "2.65 pounds"
                },
                c = {
                    size: "35.4'' / 25.2''",
                    formattedSize: "35.4 x 25.2''",
                    thickness: "0.13''",
                    weight: "6.17 pounds"
                },
                u = (e, t, i) => {
                    switch (e) {
                        case r.t.M:
                            return `1 metal poster (${t}), 1 protective leaf, 1 magnet`;
                        case r.t.L:
                            return `1 metal poster (${i}), 2 protective leaves, 2 magnets`;
                        case r.t.XL:
                            return `4 metal posters (4 x ${t}), 4 protective leaves, 4 magnets`
                    }
                }
        },
        76486: (e, t, i) => {
            "use strict";
            i.d(t, {
                ln: () => n,
                qs: () => o
            });
            var r = i(37473),
                a = i(98566),
                s = i(16909);
            let n = (e, t) => {
                    let {
                        size: i,
                        type: r,
                        frame: s
                    } = t || {}, n = d(e), o = l(n), x = h(o, r), f = c(n, x), v = m(f, i), b = u(n, v, x), C = p(b, s), y = g(n, x, v, C);
                    return {
                        type: x,
                        availableTypes: o,
                        frame: C,
                        availableFrames: b,
                        size: v,
                        availableSizes: f,
                        availableVariants: n,
                        currentVariant: y,
                        sizeFlags: (0, a.B)(v)
                    }
                },
                l = e => {
                    let t = new Set;
                    return e.forEach(e => {
                        Object.keys(e).forEach(i => {
                            if (Object.values(r.ZU).includes(i) && e[i]) return t.add(i)
                        })
                    }), Array.from(t)
                },
                o = e => !(1 === e.length && e.includes(r.wI.NONE)),
                d = e => {
                    let t;
                    if (0 === (t = Array.isArray(e) ? e : (0, s.sN)([e.M, e.L, e.XL])).length) throw Error("No variants available");
                    return t
                },
                c = (e, t) => {
                    let i = [];
                    return e.forEach(e => {
                        e[t] && i.push(e.size)
                    }), i
                },
                u = (e, t, i) => {
                    let r = e.find(e => e.size === t);
                    if (!r) throw Error("No variants for selected size");
                    let {
                        size: a,
                        ...n
                    } = r;
                    if (!n[i]) throw Error("No variants for selected type and size");
                    let {
                        type: l,
                        ...o
                    } = n[i], d = (0, s.pA)(o);
                    if (!d.length) throw Error("No frame available");
                    return d
                },
                h = (e, t) => e.find(e => e === t) || e[0],
                m = (e, t) => e.find(e => e === t) || e[0],
                p = (e, t) => e.find(e => e === t) || e.find(e => e === r.wI.NONE) || e[0],
                g = (e, t, i, r) => {
                    for (let a = 0; a < e.length; a++) {
                        let s = e[a][t] ? .[r];
                        if (e[a].size === i && void 0 !== s) return s
                    }
                    throw Error("Invalid variant")
                }
        },
        89473: (e, t, i) => {
            "use strict";
            i.d(t, {
                V: () => x
            });
            var r = i(8106),
                a = i(2843),
                s = i(37473);
            let n = {
                currentlyPlayingVideo: s.ZU.TEXTRA
            };
            var l = i(99693);
            let o = {
                    currentSlide: l.K.PRESENTATION_3D_VISUALIZATION,
                    currentThumbnail: 0,
                    hasSlideChanged: !1,
                    isHeroZoomPopupOpen: !1
                },
                d = {
                    currentSlide: l.K.PRESENTATION_3D_ANIMATION,
                    currentThumbnail: 0,
                    hasSlideChanged: !1,
                    isHeroZoomPopupOpen: !1
                },
                c = {
                    currentSlide: l.K.SIDE_VIEW_VISUALIZATION,
                    currentThumbnail: 0,
                    hasSlideChanged: !1,
                    isHeroZoomPopupOpen: !1
                },
                u = {
                    currentSlide: l.K.CUSTOM_DISPLATE_VISUALIZATION,
                    currentThumbnail: 0,
                    hasSlideChanged: !1,
                    isHeroZoomPopupOpen: !1
                };
            var h = i(98566),
                m = i(76486);
            let p = {
                    sizeFlags: (0, h.B)(s.or.M),
                    size: s.or.M,
                    availableSizes: [],
                    type: s.ZU.MATTE,
                    availableTypes: [],
                    frame: s.wI.NONE,
                    availableFrames: [],
                    availableVariants: [],
                    currentVariant: {},
                    hasInitializedProductVariants: !1,
                    hasInitializedCustomizationWizard: !1
                },
                g = {
                    isAfterFirstInteraction: !1,
                    isAnimationEnded: !1,
                    isBackplateImpressionSentForCurrentSku: !1,
                    hasCustomizationWizardBeenUsed: !1
                },
                x = (0, r.v)((e, t) => ({ ...o,
                    setCurrentSlide: t => e(e => ({ ...e,
                        hasSlideChanged: !0,
                        currentSlide: t
                    })),
                    setCurrentThumbnail: t => e(e => ({ ...e,
                        currentThumbnail: t
                    })),
                    setIsHeroZoomPopupOpen: t => e(e => ({ ...e,
                        isHeroZoomPopupOpen: t
                    })),
                    ...n,
                    setCurrentlyPlayingVideo: t => e(e => ({ ...e,
                        currentlyPlayingVideo: t
                    })),
                    ...p,
                    initProductVariants: (t, i, r) => {
                        let a = (0, m.ln)(t, {
                            type: i,
                            size: r
                        });
                        return e(e => ({ ...e,
                            ...a,
                            hasInitializedProductVariants: !0
                        }))
                    },
                    selectSize: t => e(e => {
                        let i = (0, m.ln)(e.availableVariants, {
                            size: t,
                            type: e.type,
                            frame: e.frame
                        });
                        return { ...e,
                            ...i,
                            ...e.hasCustomizationWizardBeenUsed ? {} : {
                                hasCustomizationWizardBeenUsed: !0
                            }
                        }
                    }),
                    selectType: t => e(e => {
                        let i = (0, m.ln)(e.availableVariants, {
                            size: e.size,
                            type: t,
                            frame: e.frame
                        });
                        return { ...e,
                            ...e.hasCustomizationWizardBeenUsed ? {} : {
                                hasCustomizationWizardBeenUsed: !0
                            },
                            ...i,
                            isInitialLightAnimationTriggered: !0
                        }
                    }),
                    selectFrame: t => e(e => {
                        let i = (0, m.ln)(e.availableVariants, {
                            size: e.size,
                            type: e.type,
                            frame: t
                        });
                        return { ...e,
                            ...i,
                            ...e.hasCustomizationWizardBeenUsed ? {} : {
                                hasCustomizationWizardBeenUsed: !0
                            }
                        }
                    }),
                    ...g,
                    handleUserFirstInteraction: () => e(e => ({ ...e,
                        isAfterFirstInteraction: !0
                    })),
                    handleAnimationEnded: () => e(e => ({ ...e,
                        isAnimationEnded: !0
                    })),
                    resetHandleAnimationEnded: () => e(e => ({ ...e,
                        isAnimationEnded: !1
                    })),
                    handleBackplateImpressionSentForCurrentSku: () => e(e => ({ ...e,
                        isBackplateImpressionSentForCurrentSku: !0
                    })),
                    resetBackplateImpressionSentForCurrentSku: () => e(e => ({ ...e,
                        isBackplateImpressionSentForCurrentSku: !1
                    })),
                    ...(0, a.gu)(e, t),
                    initPdpStore: () => {
                        e(() => ({ ...o,
                            ...n,
                            ...p,
                            ...g,
                            ...a.R9
                        }))
                    },
                    initABPdpStore: () => {
                        e(() => ({ ...d,
                            ...n,
                            ...p,
                            ...g,
                            ...a.R9
                        }))
                    },
                    initCustomDisplateStore: () => {
                        e(() => ({ ...u,
                            ...n,
                            ...p,
                            ...g,
                            ...a.R9
                        }))
                    },
                    initPdpStoreFallback: () => {
                        e(() => ({ ...c,
                            ...n,
                            ...p,
                            ...g,
                            ...a.R9
                        }))
                    }
                }))
        },
        91549: (e, t, i) => {
            "use strict";
            i.d(t, {
                a: () => s,
                x: () => n
            });
            var r = i(22884),
                a = i(51192);
            let s = (e, t) => {
                    (0, r.u)({
                        event: "dots_button_click",
                        element_name: `position:${e+1}|${t}`
                    })
                },
                n = (e, t) => (0, a.O)({
                    elementId: "slider_thumbnail",
                    elementVariant: `${e+1}|${t}`
                })
        },
        98566: (e, t, i) => {
            "use strict";
            i.d(t, {
                B: () => a
            });
            var r = i(37473);
            let a = e => ({
                isM: e === r.or.M,
                isL: e === r.or.L,
                isXL: e === r.or.XL
            })
        },
        99693: (e, t, i) => {
            "use strict";
            i.d(t, {
                K: () => a
            });
            var r, a = ((r = {}).PRESENTATION_3D_ANIMATION = "presentation-3d-animation", r.PRESENTATION_3D_VISUALIZATION = "presentation-3d", r.PRESENTATION_3D_SIDE_VIEW_VISUALIZATION = "side-3d", r.DRESSER_VISUALIZATION = "dresser", r.DRESSER_ZOOM_VISUALIZATION = "dresser-zoom", r.DESK_VISUALIZATION = "desk", r.CUPBOARD_VISUALIZATION = "cupboard", r.COUCH_VISUALIZATION = "couch", r.PRESENTATION_VIDEO = "video", r.SIDE_VIEW_VISUALIZATION = "side", r.OFFICE_VISUALIZATION = "office", r.CUSTOM_DISPLATE_VISUALIZATION = "dog", r)
        }
    }
]);
//#
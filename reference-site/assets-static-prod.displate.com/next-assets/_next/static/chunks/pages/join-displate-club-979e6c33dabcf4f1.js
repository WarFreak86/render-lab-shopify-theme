(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1358, 5169, 7550], {
        1833: (e, t, s) => {
            "use strict";
            s.d(t, {
                o: () => r
            });
            let r = (0, s(8106).v)(e => ({
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
        11337: e => {
            e.exports = {
                section: "HeroSection_section__5URTb",
                container: "HeroSection_container__g1kCT",
                logoTitleWrapper: "HeroSection_logoTitleWrapper___wdRK",
                logo: "HeroSection_logo___9iMj",
                title: "HeroSection_title__sQoeb",
                titleText: "HeroSection_titleText__YA7AY",
                slideRight: "HeroSection_slideRight__i7IUY",
                collect: "HeroSection_collect__jtX_n",
                hang: "HeroSection_hang__VkS_n",
                connect: "HeroSection_connect__HynTA",
                hideOnDesktop: "HeroSection_hideOnDesktop__yorpQ",
                hideOnMobile: "HeroSection_hideOnMobile__O3msJ",
                button: "HeroSection_button__neyre",
                fadeIn: "HeroSection_fadeIn__GA6Y5",
                slideDown: "HeroSection_slideDown__TacGT"
            }
        },
        12819: e => {
            e.exports = {
                carousel: "Carousel_carousel__a4VY3",
                slideIn: "Carousel_slideIn__IFPbo",
                fadeIn: "Carousel_fadeIn__7H4X8",
                carouselVisible: "Carousel_carouselVisible__1OnEl",
                track: "Carousel_track__yR1DA",
                slide: "Carousel_slide__yo9LR",
                slideVertical: "Carousel_slideVertical__CnFw0",
                trackReversed: "Carousel_trackReversed__u_BqG",
                carouselItem: "Carousel_carouselItem__UE3Xb",
                carouselItemSkwed: "Carousel_carouselItemSkwed__eKvP7"
            }
        },
        13539: (e, t, s) => {
            "use strict";
            s.d(t, {
                l: () => a
            });
            var r = s(37876),
                i = s(36256);
            let a = ({
                data: e,
                headerTitle: t = "Frequently asked questions"
            }) => (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("h2", {
                    className: "mb-12 text-center text-display-sm md:text-display-md uppercase font-display",
                    children: t
                }), (0, r.jsx)(i.nD, {
                    type: "multiple",
                    children: e.map(({
                        title: e,
                        content: t
                    }, s) => {
                        let a = `${e}_${s}`;
                        return (0, r.jsx)(i.As, {
                            trigger: (0, r.jsx)("span", {
                                className: "text-heading-h4",
                                children: e
                            }),
                            value: a,
                            children: t
                        }, a)
                    })
                })]
            })
        },
        15994: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: () => eq,
                default: () => ez
            });
            var r = s(37876),
                i = s(64968),
                a = s(15657),
                n = s(77518),
                l = s(14232),
                o = s(23794),
                d = s(59140),
                c = s(23039),
                u = s(39313),
                p = s(16373),
                h = s(80581),
                f = s(35891),
                C = s(36256);
            let m = "default",
                x = "currentCart",
                _ = "flatPrice",
                g = "order",
                b = "dcNotSupported",
                j = "offer";
            var w = s(87050),
                v = s(43067),
                y = s(69241),
                D = s(68873),
                k = s(27555),
                N = s(47526),
                S = s(86752),
                L = s(20717),
                O = s.n(L);
            let I = ({
                title: e,
                subtitle: t,
                benefits: s,
                price: i,
                pricePrefix: a,
                buttonSlot: n,
                testId: o,
                variant: d = m,
                badgeSlot: c,
                dcNotSupportedInfo: p,
                showDcLogo: f
            }) => {
                let j = (0, l.useRef)(null);
                (0, u.P)(j, {
                    once: !0,
                    threshold: .5,
                    delay: 1e3,
                    callback: () => {
                        (0, D.Z)({
                            elementId: "dc_offer",
                            elementVariant: (e => {
                                switch (e) {
                                    case _:
                                        return "dc_flat_basic";
                                    case g:
                                        return "dc_exclusive";
                                    case x:
                                        return "dc_standard";
                                    default:
                                        return "dc_logged_out"
                                }
                            })(d)
                        })
                    },
                    afterDelayCallback: !0
                });
                let w = (0, r.jsx)("div", {
                        className: (0, y.A)(O().buttonWrapper, {
                            [O().noPriceButtonWrapper]: !i
                        }),
                        children: n
                    }),
                    v = d === b,
                    L = i ? (0, r.jsxs)("div", {
                        className: O().priceWrapper,
                        "data-testid": "dc-offer-price-wrapper",
                        children: [a ? (0, r.jsxs)("span", {
                            "data-testid": "dc-offer-price-prefix",
                            children: [a, " "]
                        }) : null, (0, r.jsx)("span", {
                            className: O().price,
                            "data-testid": "dc-offer-price",
                            children: i
                        }), "/monthly"]
                    }) : null;
                return (0, r.jsxs)("div", {
                    className: (0, y.A)(O().wrapper, {
                        [O().unknownUser]: d === m,
                        [O().flatPrice]: d === _,
                        [O().order]: d === g,
                        [O().currentCart]: d === x,
                        [O().notSupported]: v
                    }),
                    "data-testid": o,
                    ref: j,
                    children: [(0, r.jsxs)("div", {
                        className: v ? O().desktopFullWidthSection : O().desktopLeftSection,
                        children: [(0, r.jsxs)("div", {
                            children: [c, f ? (0, r.jsx)(h.A, {
                                className: O().logo,
                                height: 40,
                                width: 40
                            }) : null, (0, r.jsx)("h3", {
                                className: (0, y.A)(O().title, v && O().titleCentered),
                                "data-testid": "dc-offer-title",
                                children: e
                            }), t ? (0, r.jsx)("h4", {
                                className: O().subtitle,
                                "data-testid": "dc-offer-subtitle",
                                children: t
                            }) : null, p ? (0, r.jsx)("p", {
                                className: O().dcNotSupportedInfo,
                                "data-testid": "dc-offer-not-available-info",
                                children: p
                            }) : null]
                        }), (0, r.jsxs)("div", {
                            className: O().visibleOnDesktop,
                            children: [L, w]
                        })]
                    }), s && s.length > 0 ? (0, r.jsxs)("div", {
                        className: O().desktopRightSection,
                        children: [(0, r.jsx)(S.M, {
                            classes: {
                                list: O().benefits,
                                icon: O().benefitsIcon
                            },
                            items: s.map(e => (0, r.jsx)("span", {
                                className: O().benefit,
                                "data-testid": "dc-offer-benefit",
                                children: e
                            }, e.toString()))
                        }), (0, r.jsx)(C.N_, {
                            asChild: !0,
                            className: O().link,
                            children: (0, r.jsx)(k.A, {
                                routeInfo: (0, N.U)(),
                                children: "Full Terms of Use available here"
                            })
                        })]
                    }) : null, (0, r.jsxs)("div", {
                        className: O().hiddenOnDesktop,
                        children: [L, w]
                    })]
                })
            };
            var M = s(51192),
                H = s(45168),
                E = s(71189),
                T = s(74997);
            let R = e => (0, r.jsx)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 146 140",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, r.jsx)("path", {
                    id: "Vector",
                    d: "M3 3H28.4545L45.5091 88.441C46.091 91.3787 47.6849 94.0176 50.0117 95.8958C52.3384 97.774 55.2499 98.7717 58.2364 98.7143H120.091C123.077 98.7717 125.989 97.774 128.316 95.8958C130.642 94.0176 132.236 91.3787 132.818 88.441L143 34.9048H34.8182M60.2727 130.619C60.2727 134.143 57.4236 137 53.9091 137C50.3946 137 47.5455 134.143 47.5455 130.619C47.5455 127.095 50.3946 124.238 53.9091 124.238C57.4236 124.238 60.2727 127.095 60.2727 130.619ZM130.273 130.619C130.273 134.143 127.424 137 123.909 137C120.395 137 117.545 134.143 117.545 130.619C117.545 127.095 120.395 124.238 123.909 124.238C127.424 124.238 130.273 127.095 130.273 130.619Z",
                    stroke: "currentColor",
                    strokeWidth: 5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            });
            var V = s(40510),
                B = s(71824);
            let A = ({
                    handleClose: e
                }) => (0, r.jsxs)("div", {
                    className: "w-full",
                    children: [(0, r.jsx)("h3", {
                        className: "text-heading-h6 text-text-primary",
                        children: "Product added to cart!"
                    }), (0, r.jsxs)("div", {
                        className: "mt-6 flex flex-row-reverse items-center justify-between lg:flex-row",
                        children: [(0, r.jsx)(C.$n, {
                            asChild: !0,
                            onClick: () => (0, V.Q)("proceed_to_cart_button"),
                            children: (0, r.jsx)(k.A, {
                                routeInfo: (0, B.y)(),
                                children: "Proceed to the cart"
                            })
                        }), (0, r.jsx)(C.$n, {
                            onClick: () => {
                                (0, V.Q)("continue_shopping_button"), e()
                            },
                            variant: "text",
                            children: "Continue shopping"
                        })]
                    })]
                }),
                P = ({
                    isOpen: e,
                    handleClose: t
                }) => (0, r.jsx)(T._, {
                    contentClassName: "h-full",
                    customHeader: (0, r.jsx)(A, {
                        handleClose: t
                    }),
                    drawerHeaderWithButtons: !0,
                    handleClose: t,
                    isOpen: e,
                    testId: "displate-club-added-to-cart-drawer",
                    children: (0, r.jsxs)("div", {
                        className: "relative flex h-full flex-col items-center justify-center text-center",
                        children: [(0, r.jsx)(h.A, {
                            className: "ml-6 animate-bounce-in-top",
                            height: 60,
                            width: 60
                        }), (0, r.jsx)(R, {
                            className: "-mt-[68px]",
                            height: 120,
                            width: 120
                        }), (0, r.jsx)("p", {
                            className: "mt-10 text-heading-h5 text-text-link",
                            children: "Nice move! "
                        }), (0, r.jsx)("p", {
                            className: "mt-2 text-heading-h5",
                            children: "You're on your way to becoming a true Displate collector!"
                        })]
                    })
                });
            var $ = s(54111),
                W = s(69945),
                Z = s(13341),
                F = s(57597),
                U = s(36883),
                z = s(23278),
                q = s(7234);
            let G = ({
                    strategy: e,
                    isInCart: t = !1,
                    orderId: s,
                    isPurchasable: i
                }) => {
                    let {
                        userInfo: a
                    } = (0, l.useContext)(f.cy), n = a ? .account.isUserLoggedIn ? ? !1, {
                        isDrawerOpen: o,
                        handleDrawerOpen: d,
                        handleDrawerClose: c
                    } = (0, H.b)(), {
                        data: u
                    } = (0, Z._)(), {
                        mutate: p
                    } = (0, F.I)(), {
                        mutate: h,
                        isPending: m
                    } = (0, E.m)({
                        onSuccess: () => {
                            d()
                        }
                    }), {
                        text: x,
                        isDisabled: _
                    } = m ? {
                        text: "Adding to cart...",
                        isDisabled: !1
                    } : t ? {
                        text: "Already in cart",
                        isDisabled: !0
                    } : {
                        text: "Add to cart",
                        isDisabled: !1
                    };
                    return n ? i ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(C.$n, {
                            disabled: _,
                            fullWidth: !0,
                            onClick: () => {
                                let t = u ? .positions.find(W.E0),
                                    r = {
                                        strategy: e,
                                        ...void 0 !== s && {
                                            orderId: s
                                        },
                                        elementId: "dc_offer_add_button",
                                        origin: "lp"
                                    };
                                t ? p(t.id, {
                                    onSuccess: () => {
                                        h(r)
                                    }
                                }) : h(r)
                            },
                            children: x
                        }), (0, r.jsx)(P, {
                            handleClose: c,
                            isOpen: o
                        })]
                    }) : (0, r.jsx)(C.$n, {
                        asChild: !0,
                        "data-testid": "dc-offer-browse-button",
                        fullWidth: !0,
                        onClick: () => (0, M.O)({
                            elementId: "dc_offer_browse_button",
                            elementVariant: (0, U.f)(e)
                        }),
                        children: (0, r.jsx)(k.A, {
                            routeInfo: (0, q.We)(),
                            children: "Add Displates & join"
                        })
                    }) : (0, r.jsx)(C.$n, {
                        asChild: !0,
                        "data-testid": "dc-offer-sign-in-button",
                        fullWidth: !0,
                        onClick: () => (0, M.O)({
                            elementId: "dc_offer_login_button",
                            elementVariant: "dc_logged_out"
                        }),
                        children: (0, r.jsx)("a", {
                            href: (0, $.NW)({
                                query: {
                                    redirectUrl: `${(0,z.a)({absolute:!0}).route}#${j}`
                                }
                            }).route,
                            children: "Log in or sign up"
                        })
                    })
                },
                K = (0, r.jsxs)("span", {
                    "data-testid": "benefit-early-access",
                    children: [(0, r.jsx)("strong", {
                        children: "24-hour early access"
                    }), " to limited releases"]
                }),
                J = (0, r.jsxs)("span", {
                    "data-testid": "benefit-custom-displates",
                    children: ["Print your ", (0, r.jsx)("strong", {
                        children: "Custom Displates for less"
                    })]
                }),
                Y = (0, r.jsxs)("span", {
                    "data-testid": "benefit-storage-sleeves",
                    children: [(0, r.jsx)("strong", {
                        children: "Storage sleeves"
                    }), " to organize your Displate collection"]
                }),
                Q = (0, r.jsxs)("span", {
                    "data-testid": "benefit-free-shipping",
                    children: [(0, r.jsx)("strong", {
                        children: "Free shipping"
                    }), " for future orders"]
                }),
                X = (0, r.jsxs)("span", {
                    "data-testid": "benefit-order-based-shipping",
                    children: ["Subscribe ", (0, r.jsx)("strong", {
                        children: "instantly"
                    }), " without a full order & get", " ", (0, r.jsx)("strong", {
                        children: "free shipping on next Displates"
                    })]
                }),
                ee = (0, r.jsxs)("span", {
                    "data-testid": "benefit-cart-based-shipping",
                    children: ["Subscribe with your ", (0, r.jsx)("strong", {
                        children: "next order"
                    }), " & enjoy", " ", (0, r.jsx)("strong", {
                        children: "free shipping on future Displates"
                    })]
                }),
                et = (0, r.jsxs)("span", {
                    "data-testid": "benefit-flat-fee-free-displate",
                    children: [(0, r.jsx)("strong", {
                        children: "One free Displate every year:"
                    }), " a voucher for 1 x M Matte, Gloss or Textra, sent to your inbox every 12 months after joining"]
                }),
                es = (0, r.jsxs)("span", {
                    "data-testid": "benefit-lowest-price-free-displate",
                    children: [(0, r.jsx)("strong", {
                        children: "Free Displates every year:"
                    }), " get a voucher equal to the value of your joining order, sent to your inbox every 12 months after you join"]
                }),
                er = e => (0, r.jsxs)("span", {
                    "data-testid": "benefit-dynamic-free-displate",
                    children: [(0, r.jsx)("strong", {
                        children: "Free Displates every year:"
                    }), " a voucher for ", e, ", sent to your inbox every 12 months after joining"]
                }),
                ei = e => (0, r.jsxs)("span", {
                    "data-testid": "benefit-discount",
                    children: [(0, r.jsxs)("strong", {
                        children: [e, "% permanent discount"]
                    }), " on all Matte, Gloss & Textra designs"]
                }),
                ea = e => {
                    let {
                        orderId: t,
                        price: s = {
                            formatted: ""
                        },
                        discount: r = 0,
                        voucher: i = {
                            items: "",
                            amount: 0
                        },
                        isInCart: a = !1,
                        isPurchasable: n = !1,
                        expiresAt: l = ""
                    } = e || {}, {
                        items: o = ""
                    } = i, d = s ? .formatted ? ? "";
                    return {
                        orderId: t,
                        price: s,
                        discount: r,
                        voucher: i,
                        isInCart: a,
                        isPurchasable: n,
                        expiresAt: l,
                        formattedPrice: d,
                        voucherItems: o
                    }
                },
                en = ({
                    offer: e,
                    hasBadge: t = !0
                }) => {
                    if (!e) return null;
                    let {
                        discount: s,
                        voucher: i,
                        isInCart: a,
                        isPurchasable: n,
                        formattedPrice: l
                    } = ea(e);
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(I, {
                            badgeSlot: t ? (0, r.jsx)(v.a, {
                                strategy: w.$1.CURRENT_CART
                            }) : null,
                            benefits: [ee, er(i.items), ei(s), K, J, Y],
                            buttonSlot: (0, r.jsx)(G, {
                                isInCart: a,
                                isPurchasable: n,
                                strategy: w.$1.CURRENT_CART
                            }),
                            price: l,
                            testId: "dc-offer-cart-based",
                            title: "Join Displate Club when placing new order",
                            variant: x
                        })
                    })
                },
                el = ({
                    offer: e,
                    hasBadge: t = !1
                }) => {
                    let {
                        userInfo: s
                    } = (0, l.useContext)(f.cy), i = s ? .account.isUserLoggedIn ? ? !1, {
                        displateClubOrderBasedOffer: a
                    } = (0, c.X)();
                    if (!e) return null;
                    let {
                        discount: n,
                        isInCart: o,
                        isPurchasable: d,
                        expiresAt: u,
                        orderId: p,
                        formattedPrice: h
                    } = ea(e);
                    return (0, r.jsx)(I, {
                        badgeSlot: t ? (0, r.jsx)(v.a, {
                            countdownDate: u,
                            strategy: w.$1.FLAT_PRICE
                        }) : null,
                        benefits: [i ? a ? X : ee : Q, et, ei(n), K, J, Y],
                        buttonSlot: (0, r.jsx)(G, {
                            isInCart: o,
                            isPurchasable: d,
                            orderId: p,
                            strategy: w.$1.FLAT_PRICE
                        }),
                        price: h,
                        subtitle: i ? void 0 : "You're just one step away from discovering your offer",
                        testId: "dc-offer-flat-fee",
                        title: i ? "Join now with a special price" : "Sign in to proceed",
                        variant: _
                    })
                },
                eo = ({
                    offer: e,
                    hasBadge: t = !1
                }) => {
                    let {
                        userInfo: s
                    } = (0, l.useContext)(f.cy), i = s ? .account.isUserLoggedIn ? ? !1;
                    if (!e) return null;
                    let {
                        formattedPrice: a,
                        isPurchasable: n
                    } = ea(e);
                    return (0, r.jsx)(I, {
                        badgeSlot: t ? (0, r.jsx)(v.a, {
                            strategy: w.$1.LOWEST_POSSIBLE
                        }) : null,
                        benefits: [i ? ee : Q, es, K, J, Y],
                        buttonSlot: (0, r.jsx)(G, {
                            isPurchasable: n,
                            strategy: w.$1.LOWEST_POSSIBLE
                        }),
                        price: a,
                        pricePrefix: i ? "from" : "Join from",
                        subtitle: i ? void 0 : "You're just one step away from discovering your offer",
                        testId: "dc-offer-lowest-possible",
                        title: i ? "Join Displate Club when placing new order" : "Sign in to proceed",
                        variant: i ? x : m
                    })
                },
                ed = () => (0, r.jsx)(I, {
                    buttonSlot: (0, r.jsx)(C.$n, {
                        asChild: !0,
                        "data-testid": "dc-offer-browse-button",
                        onClick: () => (0, M.O)({
                            elementId: "dc_offer_browse_button",
                            elementVariant: "dc_not_supported"
                        }),
                        children: (0, r.jsx)(k.A, {
                            routeInfo: (0, q.We)(),
                            children: "Browse Displates"
                        })
                    }),
                    dcNotSupportedInfo: "Displate Club isn’t available in your country just yet, but hang tight – we’re working on it! \uD83D\uDE80",
                    showDcLogo: !0,
                    testId: "dc-offer-lowest-possible",
                    title: "Oops, Displate Club not here yet!",
                    variant: b
                }),
                ec = ({
                    offer: e,
                    hasBadge: t = !0
                }) => {
                    if (!e) return null;
                    let {
                        orderId: s,
                        discount: i,
                        isInCart: a,
                        isPurchasable: n,
                        expiresAt: l,
                        formattedPrice: o,
                        voucherItems: d
                    } = ea(e);
                    return (0, r.jsx)(I, {
                        badgeSlot: t ? (0, r.jsx)(v.a, {
                            countdownDate: l,
                            strategy: w.$1.ORDER
                        }) : null,
                        benefits: [X, er(d), ei(i), K, J, Y],
                        buttonSlot: (0, r.jsx)(G, {
                            isInCart: a,
                            isPurchasable: n,
                            orderId: s,
                            strategy: w.$1.ORDER
                        }),
                        price: o,
                        testId: "dc-offer-order-based",
                        title: "Join now - your last order unlocks this offer",
                        variant: g
                    })
                };
            var eu = s(90813),
                ep = s.n(eu);
            let eh = () => {
                let {
                    displateClubOffersQuery: e,
                    displateClubOrderBasedOffer: t,
                    displateClubCartBasedOffer: s,
                    displateClubFlatPriceOffer: i,
                    displateClubLowestPossibleOffer: a,
                    displateClubOffersStatus: n
                } = (0, c.X)(), {
                    userInfo: o
                } = (0, l.useContext)(f.cy), d = o ? .account.isUserLoggedIn, {
                    isPending: u,
                    isSuccess: p
                } = e, m = n === w.L.COUNTRY_NOT_SUPPORTED, x = n === w.L.USER_IS_IN_DC, _ = i ? "Different Displate Club plans come with different rules for benefits and pricing" : "Displate Club benefits and costs vary based on the type and quantity of Displates you order";
                return m ? (0, r.jsx)(ed, {}) : x ? null : (0, r.jsx)(C.mc, {
                    asChild: !0,
                    withScrollMargin: !0,
                    withVerticalPadding: !0,
                    children: (0, r.jsxs)("section", {
                        className: ep().section,
                        "data-testid": "section-how-to",
                        id: j,
                        children: [(0, r.jsxs)("div", {
                            className: ep().titleWrapper,
                            children: [(0, r.jsx)(h.A, {
                                height: 40,
                                width: 40
                            }), (0, r.jsx)("h2", {
                                className: ep().title,
                                "data-testid": "how-to-heading",
                                children: "How to join Displate Club?"
                            }), (0, r.jsx)("p", {
                                className: ep().description,
                                children: _
                            }), (0, r.jsx)("p", {
                                className: "sr-only",
                                children: "Choose from available membership plans below"
                            })]
                        }), u ? (0, r.jsx)("div", {
                            className: ep().skeletonWrapper,
                            children: (0, r.jsx)(C.EA, {
                                className: `${ep().skeleton} size-full`
                            })
                        }) : null, p && !d ? (0, r.jsx)(r.Fragment, {
                            children: i ? (0, r.jsx)(el, {
                                hasBadge: !0,
                                offer: i
                            }) : (0, r.jsx)(eo, {
                                offer: a
                            })
                        }) : null, p && d ? (0, r.jsxs)(r.Fragment, {
                            children: [i ? (0, r.jsx)(el, {
                                hasBadge: !0,
                                offer: i
                            }) : null, i ? (0, r.jsxs)("p", {
                                className: ep().otherMembershipPlansInfo,
                                children: ["Other membership plans, tailored to your cart", t ? " or past orders" : "", ":"]
                            }) : null, t ? (0, r.jsx)(ec, {
                                hasBadge: !0,
                                offer: t
                            }) : null, s ? (0, r.jsx)(en, {
                                hasBadge: !0,
                                offer: s
                            }) : (0, r.jsx)(eo, {
                                offer: a
                            })]
                        }) : null]
                    })
                })
            };
            var ef = s(53499),
                eC = s(84810),
                em = s(10769);
            let ex = e => (0, r.jsx)("svg", {
                    fill: "none",
                    height: "1em",
                    viewBox: "0 0 169 34",
                    width: "1em",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, r.jsx)("path", {
                        d: "M18.1619 33.576C8.36988 33.576 0.785875 26.856 0.785875 17.016C0.785875 7.128 8.36988 0.455998 18.1619 0.455998C26.8019 0.455998 31.0259 5.352 32.9459 9.768L24.5939 13.656C23.7779 11.16 21.2819 9 18.1619 9C13.7459 9 10.6259 12.552 10.6259 17.016C10.6259 21.48 13.7459 25.032 18.1619 25.032C21.2819 25.032 23.7779 22.872 24.5939 20.376L32.9459 24.216C31.0739 28.488 26.8019 33.576 18.1619 33.576ZM47.2146 33.576C39.0066 33.576 34.2066 27.864 34.2066 21.384C34.2066 14.904 39.0066 9.24 47.2146 9.24C55.4706 9.24 60.2706 14.904 60.2706 21.384C60.2706 27.864 55.4706 33.576 47.2146 33.576ZM47.2146 25.944C49.9026 25.944 51.3906 23.976 51.3906 21.384C51.3906 18.84 49.9026 16.872 47.2146 16.872C44.5746 16.872 43.0866 18.84 43.0866 21.384C43.0866 23.976 44.5746 25.944 47.2146 25.944ZM72.1338 33H63.4938V0.983997H72.1338V33ZM85.5869 33H76.9469V0.983997H85.5869V33ZM88.816 21.384C88.816 14.664 93.952 9.24 101.44 9.24C108.256 9.24 113.488 14.136 113.488 22.296V24.072H97.744C98.224 25.56 99.904 27 102.832 27C104.8 27 106.912 26.28 108.064 25.368L111.616 30.696C109.312 32.664 105.184 33.576 101.728 33.576C94.48 33.576 88.816 29.016 88.816 21.384ZM101.44 15.816C98.8 15.816 97.936 17.544 97.648 18.6H105.28C105.04 17.592 104.224 15.816 101.44 15.816ZM114.879 21.384C114.879 14.04 120.543 9.24 127.887 9.24C133.167 9.24 136.431 11.64 137.727 13.608L132.159 18.84C131.439 17.736 130.095 16.872 128.271 16.872C125.823 16.872 123.711 18.408 123.711 21.384C123.711 24.36 125.823 25.944 128.271 25.944C130.095 25.944 131.439 24.984 132.159 23.928L137.727 29.208C136.431 31.128 133.167 33.576 127.887 33.576C120.543 33.576 114.879 28.776 114.879 21.384ZM150.3 33.576C145.164 33.576 142.332 31.128 142.332 26.28V17.304H138.492V9.816H142.332V3.48H150.972V9.816H155.676V17.304H150.972V23.784C150.972 24.984 151.74 25.944 152.892 25.944C153.66 25.944 154.428 25.704 154.62 25.512L156.156 32.04C155.244 32.856 153.228 33.576 150.3 33.576ZM158.116 28.44C158.116 25.656 160.468 23.304 163.252 23.304C166.036 23.304 168.388 25.656 168.388 28.44C168.388 31.224 166.036 33.576 163.252 33.576C160.468 33.576 158.116 31.224 158.116 28.44Z",
                        fill: "black"
                    })
                }),
                e_ = e => (0, r.jsx)("svg", {
                    fill: "none",
                    height: "1em",
                    viewBox: "0 0 200 34",
                    width: "1em",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, r.jsx)("path", {
                        d: "M17.4588 33.576C7.66675 33.576 0.0827501 26.856 0.0827501 17.016C0.0827501 7.128 7.66675 0.455998 17.4588 0.455998C26.0988 0.455998 30.3228 5.352 32.2428 9.768L23.8907 13.656C23.0748 11.16 20.5788 9 17.4588 9C13.0428 9 9.92275 12.552 9.92275 17.016C9.92275 21.48 13.0428 25.032 17.4588 25.032C20.5788 25.032 23.0748 22.872 23.8907 20.376L32.2428 24.216C30.3708 28.488 26.0988 33.576 17.4588 33.576ZM46.5115 33.576C38.3035 33.576 33.5035 27.864 33.5035 21.384C33.5035 14.904 38.3035 9.24 46.5115 9.24C54.7675 9.24 59.5675 14.904 59.5675 21.384C59.5675 27.864 54.7675 33.576 46.5115 33.576ZM46.5115 25.944C49.1995 25.944 50.6875 23.976 50.6875 21.384C50.6875 18.84 49.1995 16.872 46.5115 16.872C43.8715 16.872 42.3835 18.84 42.3835 21.384C42.3835 23.976 43.8715 25.944 46.5115 25.944ZM87.1266 33H78.4866V20.184C78.4866 17.784 77.1906 16.872 75.1266 16.872C73.1586 16.872 72.1506 17.88 71.4306 18.696V33H62.7906V9.816H71.4306V12.456C72.7746 10.92 75.3186 9.24 79.3986 9.24C84.7746 9.24 87.1266 12.504 87.1266 16.536V33ZM116.283 33H107.643V20.184C107.643 17.784 106.347 16.872 104.283 16.872C102.315 16.872 101.307 17.88 100.587 18.696V33H91.9469V9.816H100.587V12.456C101.931 10.92 104.475 9.24 108.555 9.24C113.931 9.24 116.283 12.504 116.283 16.536V33ZM119.519 21.384C119.519 14.664 124.655 9.24 132.143 9.24C138.959 9.24 144.191 14.136 144.191 22.296V24.072H128.447C128.927 25.56 130.607 27 133.535 27C135.503 27 137.615 26.28 138.767 25.368L142.319 30.696C140.015 32.664 135.887 33.576 132.431 33.576C125.183 33.576 119.519 29.016 119.519 21.384ZM132.143 15.816C129.503 15.816 128.639 17.544 128.351 18.6H135.983C135.743 17.592 134.927 15.816 132.143 15.816ZM145.582 21.384C145.582 14.04 151.246 9.24 158.59 9.24C163.87 9.24 167.134 11.64 168.43 13.608L162.862 18.84C162.142 17.736 160.798 16.872 158.974 16.872C156.526 16.872 154.414 18.408 154.414 21.384C154.414 24.36 156.526 25.944 158.974 25.944C160.798 25.944 162.142 24.984 162.862 23.928L168.43 29.208C167.134 31.128 163.87 33.576 158.59 33.576C151.246 33.576 145.582 28.776 145.582 21.384ZM181.003 33.576C175.867 33.576 173.035 31.128 173.035 26.28V17.304H169.195V9.816H173.035V3.48H181.675V9.816H186.379V17.304H181.675V23.784C181.675 24.984 182.443 25.944 183.595 25.944C184.363 25.944 185.131 25.704 185.323 25.512L186.859 32.04C185.947 32.856 183.931 33.576 181.003 33.576ZM188.82 28.44C188.82 25.656 191.172 23.304 193.956 23.304C196.74 23.304 199.092 25.656 199.092 28.44C199.092 31.224 196.74 33.576 193.956 33.576C191.172 33.576 188.82 31.224 188.82 28.44Z",
                        fill: "black"
                    })
                }),
                eg = e => (0, r.jsxs)("svg", {
                    fill: "none",
                    height: "1em",
                    viewBox: "0 0 280 47",
                    width: "1em",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, r.jsx)("path", {
                        d: "M49.8069 38.3898V13.1644H56.4503V38.3898H49.8069ZM53.1286 10.9304C50.7758 10.9304 49.1611 9.34802 49.1611 7.16058C49.1611 4.97313 50.7758 3.43727 53.1286 3.43727C55.4815 3.43727 57.0961 4.97313 57.0961 7.16058C57.0961 9.34802 55.4815 10.9304 53.1286 10.9304Z",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        d: "M67.7095 39.181C63.7881 39.181 60.4665 37.459 58.3904 34.4338L62.8654 30.3847C64.1572 32.1998 65.9564 33.4565 68.0786 33.4565C69.7856 33.4565 70.8467 32.5256 70.8467 31.1759C70.8467 29.5935 69.4626 29.1281 67.8018 28.6162C62.9577 27.2199 59.6361 25.1721 59.6361 20.3783C59.6361 15.538 63.6036 12.3732 68.4938 12.3732C71.8616 12.3732 74.4913 13.7695 76.5673 16.3292L72.0462 20.518C70.8928 18.9355 69.8317 18.0513 68.3554 18.0513C66.6485 18.0513 65.6335 18.9821 65.6335 20.1922C65.6335 21.8211 67.1559 22.2865 68.909 22.7985C73.7993 24.1947 76.8441 26.196 76.8441 31.0363C76.8441 35.7835 73.1995 39.181 67.7095 39.181Z",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        d: "M78.9111 47V13.1644H85.5545C85.5545 14.2814 85.5545 15.3519 85.5083 16.4689H85.6006C87.3076 14.0022 90.2601 12.6059 93.2127 12.6059C99.8099 12.6059 104.654 18.1443 104.654 25.7771C104.654 33.4099 99.5793 39.0414 93.2589 39.0414C89.8449 39.0414 87.2614 37.6917 85.6006 35.225H85.5083C85.5545 36.6213 85.5545 37.5056 85.5545 39.0414V47H78.9111ZM91.7364 32.9445C95.4733 32.9445 98.0107 29.8728 98.0107 25.7771C98.0107 21.7746 95.4733 18.6098 91.7364 18.6098C87.9534 18.6098 85.4161 21.6349 85.4161 25.8237C85.4161 30.0589 87.9534 32.9445 91.7364 32.9445Z",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        d: "M106.844 38.3898V4.6008H113.487V38.3898H106.844Z",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        d: "M127.148 39.0414C120.55 39.0414 115.66 33.5495 115.66 25.8702C115.66 18.284 120.735 12.6525 127.055 12.6525C130.469 12.6525 133.053 13.9091 134.714 16.4689H134.806C134.76 15.3519 134.76 14.3745 134.76 13.1644H141.403V38.3898H134.76C134.76 37.0401 134.76 36.4351 134.806 35.1785H134.714C132.961 37.6917 130.1 39.0414 127.148 39.0414ZM128.578 32.991C132.407 32.991 134.898 30.1055 134.898 25.8702C134.898 21.6815 132.361 18.6563 128.578 18.6563C124.841 18.6563 122.304 21.8211 122.304 25.8702C122.304 29.9193 124.887 32.991 128.578 32.991Z",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        d: "M147.145 38.3898V19.3544H143.593V13.1644H147.145V6.69516H153.789V13.1644H159.048V19.3544H153.789V38.3898H147.145Z",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        d: "M172.005 39.181C164.439 39.181 159.271 33.5961 159.271 25.8237C159.271 18.0047 164.485 12.3732 172.097 12.3732C179.893 12.3732 184.23 17.3066 184.23 25.4048C184.23 26.2425 184.184 26.9407 184.092 27.825H165.73C166.422 31.1294 168.821 33.4099 172.327 33.4099C174.957 33.4099 177.033 32.1533 178.14 29.6401L183.584 32.2464C181.324 36.9471 177.172 39.181 172.005 39.181ZM165.915 22.9846H178.187C177.541 19.9595 175.465 18.0978 172.143 18.0978C168.96 18.0978 166.791 20.0991 165.915 22.9846Z",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        d: "M202.373 39.1345C192.777 39.1345 185.995 32.1998 185.995 22.5192C185.995 12.8386 192.777 5.90396 202.373 5.90396C209.293 5.90396 214.922 9.72035 217.136 16.1431L210.216 18.3771C208.924 14.7934 206.064 12.4663 202.327 12.4663C196.883 12.4663 193.561 16.8877 193.561 22.5192C193.561 28.1973 196.837 32.6187 202.327 32.6187C206.11 32.6187 209.016 30.2451 210.308 26.5218L217.228 28.8023C215.014 35.3181 209.385 39.1345 202.373 39.1345Z",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        d: "M219.521 38.3898V4.6008H226.165V38.3898H219.521Z",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        d: "M240.238 39.181C233.364 39.181 228.935 35.0389 228.935 28.1973V13.1644H235.579V27.7784C235.579 30.8967 237.239 33.0841 240.238 33.0841C243.237 33.0841 244.898 30.8967 244.898 27.7784V13.1644H251.495V28.1507C251.495 35.0389 247.112 39.181 240.238 39.181Z",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        d: "M268.605 38.9483C265.191 38.9483 262.654 37.6917 260.947 35.132H260.854C260.9 36.2024 260.9 37.1798 260.9 38.3898H254.257V4.6008H260.9V12.5594C260.9 14.1883 260.9 14.8864 260.854 16.3758H260.947C262.7 13.9091 265.56 12.5594 268.559 12.5594C275.156 12.5594 280 18.0513 280 25.7306C280 33.3168 274.925 38.9483 268.605 38.9483ZM267.082 32.898C270.819 32.898 273.357 29.7797 273.357 25.7306C273.357 21.6815 270.819 18.6098 267.082 18.6098C263.299 18.6098 260.762 21.4953 260.762 25.7306C260.762 29.9193 263.299 32.898 267.082 32.898Z",
                        fill: "black"
                    }), (0, r.jsx)("path", {
                        d: "M42.7333 8.74392C33.7573 -2.52007 16.3374 -2.51255 5.80645 6.53348C1.94202 9.85452 -0.978743 14.842 0.307975 20.1402C1.60324 25.4727 7.76966 26.3296 12.3907 25.992C11.7645 28.6465 11.0548 31.33 9.82905 33.7716C11.1254 35.1456 13.1965 35.8831 15.0475 36.0648C15.7379 35.9874 16.5426 33.349 16.7329 32.7244C17.5184 30.1473 18.0036 27.4402 18.5026 24.7911L25.0014 22.5914L24.3794 26.4887L28.2866 24.475C28.3721 24.4309 28.4736 24.4309 28.5591 24.475L32.4663 26.4887L31.7706 22.128C31.7556 22.0324 31.7866 21.9356 31.855 21.8679L34.966 18.7522L30.6281 18.0706C30.533 18.0555 30.4507 17.9953 30.408 17.9093L28.4234 13.9701L26.4388 17.9093C26.395 17.9953 26.3138 18.0555 26.2187 18.0706L21.8808 18.7522L24.3271 21.2034L18.7848 22.9634C19.0819 21.2013 19.3683 19.4166 19.5371 17.6341C19.6387 16.5557 19.9155 14.0184 19.6034 13.0906C19.1332 11.693 16.0916 10.5146 14.7504 10.6093C13.5738 10.692 14.0697 11.5435 14.1381 12.2811C14.3582 14.6452 14.0472 17.2943 13.6967 19.6413C13.484 21.0691 13.2061 22.4957 12.8834 23.9009C10.5771 23.8579 7.53134 23.5289 5.86843 21.7346C3.68507 19.379 5.0295 15.2043 6.53317 12.8132C11.8329 4.39508 26.1994 2.15131 34.0758 7.92899C40.6932 12.7831 42.432 21.0572 38.482 28.3046C34.1431 36.2648 21.2834 40.8362 12.6729 39.9298C9.98828 39.6471 6.32905 38.6644 5.82355 35.5305C5.59912 35.0402 4.69927 35.7906 4.49195 36.053C3.42645 37.4022 4.68431 40.4975 5.41958 41.865C7.93851 46.5482 14.2727 46.7719 18.9333 46.23C28.2471 45.1463 39.7741 39.1213 44.3962 30.6613C48.0993 23.8837 47.5714 14.8183 42.7323 8.745L42.7333 8.74392Z",
                        fill: "black"
                    })]
                }),
                eb = e => (0, r.jsx)("svg", {
                    fill: "none",
                    height: "1em",
                    viewBox: "0 0 131 43",
                    width: "1em",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, r.jsx)("path", {
                        d: "M31.3779 33H21.6819V20.76H10.2099V33H0.513875V0.983997H10.2099V12.312H21.6819V0.983997H31.3779V33ZM58.4008 33H49.7608V30.792C48.4648 32.424 45.6328 33.576 42.7528 33.576C39.2968 33.576 34.7848 31.224 34.7848 25.944C34.7848 20.184 39.2968 18.792 42.7528 18.792C45.7768 18.792 48.5128 19.752 49.7608 21.336V18.696C49.7608 17.064 48.2728 15.816 45.4408 15.816C43.2808 15.816 40.8328 16.68 39.0088 18.072L36.0808 12.744C39.2008 10.248 43.5208 9.24 47.0248 9.24C52.7848 9.24 58.4008 11.256 58.4008 18.984V33ZM49.7608 26.712V25.416C49.1848 24.6 47.6968 24.168 46.3528 24.168C44.9128 24.168 43.3288 24.648 43.3288 26.088C43.3288 27.528 44.9128 27.96 46.3528 27.96C47.6968 27.96 49.1848 27.528 49.7608 26.712ZM87.5173 33H78.8773V20.184C78.8773 17.784 77.5813 16.872 75.5173 16.872C73.5493 16.872 72.5413 17.88 71.8213 18.696V33H63.1813V9.816H71.8213V12.456C73.1653 10.92 75.7093 9.24 79.7893 9.24C85.1653 9.24 87.5173 12.504 87.5173 16.536V33ZM91.5215 38.952L95.1695 32.808C96.9455 34.584 99.5855 35.352 102.082 35.352C104.098 35.352 107.458 34.584 107.458 30.504V29.256C105.49 31.512 103.33 32.376 100.93 32.376C95.3615 32.376 90.7535 28.728 90.7535 20.808C90.7535 13.08 95.2175 9.24 100.93 9.24C103.33 9.24 105.586 10.056 107.458 12.264V9.816H116.098V30.504C116.098 40.536 107.842 42.408 102.082 42.408C98.0975 42.408 94.5455 41.352 91.5215 38.952ZM107.458 23.256V18.36C106.642 17.4 105.01 16.872 103.906 16.872C101.554 16.872 99.5855 17.976 99.5855 20.808C99.5855 23.64 101.554 24.744 103.906 24.744C105.01 24.744 106.642 24.216 107.458 23.256ZM120.116 28.44C120.116 25.656 122.468 23.304 125.252 23.304C128.036 23.304 130.388 25.656 130.388 28.44C130.388 31.224 128.036 33.576 125.252 33.576C122.468 33.576 120.116 31.224 120.116 28.44Z",
                        fill: "black"
                    })
                });
            var ej = s(81037);
            let ew = e => (0, r.jsxs)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 214 228",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, r.jsx)("path", {
                        d: "M120.573 38.8606C123.225 43.2724 124.293 48.4567 123.601 53.5573C122.983 58.2522 120.923 62.6392 117.703 66.1118C114.484 69.5844 110.265 71.971 105.631 72.9416C100.996 73.9122 96.1741 73.4189 91.832 71.5298C87.4898 69.6408 83.8419 66.4493 81.3925 62.3967C78.9432 58.3442 77.8134 53.6307 78.1595 48.9081C78.5055 44.1855 80.3103 39.6871 83.3243 36.0348C86.3383 32.3826 90.4125 29.757 94.9836 28.5211C99.5547 27.2852 104.397 27.5001 108.841 29.1359M157.598 138.297C154.947 133.885 153.879 128.701 154.57 123.6C155.147 119.097 157.049 114.868 160.033 111.446C163.017 108.025 166.949 105.567 171.332 104.384C175.714 103.2 180.349 103.344 184.65 104.798C188.95 106.252 192.723 108.949 195.488 112.549C198.254 116.149 199.889 120.489 200.185 125.019C200.481 129.549 199.426 134.064 197.154 137.994C194.881 141.924 191.492 145.09 187.418 147.092C183.344 149.093 178.767 149.841 174.267 149.238C172.582 149.016 170.926 148.609 169.33 148.025M200.554 26.7278L77.7 150.512",
                        stroke: "#0084F5",
                        strokeWidth: 4,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, r.jsx)("path", {
                        d: "M192.04 -19.317C204.201 -13.3538 225.363 -19.6665 235.247 -9.9926C244.689 -0.642759 239.218 20.4396 245.715 32.7345C252.212 45.0294 272.986 52.3714 275.153 65.5305C277.437 78.9119 260.335 92.9065 258.381 106.266C256.428 119.625 268.84 137.788 262.848 149.895C256.856 162.002 234.919 163.114 225.423 172.852C216.032 182.253 215.597 204.345 203.245 210.81C190.893 217.275 172.479 205.336 159.26 207.494C145.821 209.765 132.255 227.242 119.052 225.183C105.636 223.239 97.6328 202.763 85.4713 196.8C73.3099 190.837 52.1512 197.149 42.2645 187.475C32.8193 178.126 38.2901 157.04 31.7805 144.745C25.2708 132.45 4.51248 125.108 2.34578 111.949C0.0615355 98.5678 17.1632 84.5701 19.1139 71.2141C21.0645 57.8581 8.65525 39.6921 14.647 27.5878C20.6388 15.4836 42.5758 14.3684 52.0718 4.63102C61.4629 -4.77283 61.8982 -26.8623 74.2503 -33.3275C86.6023 -39.7926 105.016 -27.8536 118.235 -30.0107C131.677 -32.2823 145.24 -49.762 158.443 -47.7001C164.48 -46.9376 169.48 -42.2707 174.052 -36.8126",
                        stroke: "white",
                        strokeWidth: 4,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }),
                ev = e => (0, r.jsxs)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 182 213",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, r.jsx)("path", {
                        d: "M202 210.732H4.88977C4.12128 210.729 3.38527 210.433 2.84343 209.908C2.30159 209.383 1.99824 208.672 2.00001 207.932L2.00001 -56.1999C1.99824 -56.9403 2.30159 -57.651 2.84343 -58.1761C3.38527 -58.7011 4.12128 -58.9974 4.88977 -59L199.094 -59C199.862 -58.9974 200.598 -58.7011 201.14 -58.1761C201.682 -57.651 201.985 -56.9403 201.983 -56.1999V188.356",
                        stroke: "white",
                        strokeWidth: 4,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, r.jsx)("path", {
                        d: "M134.373 100.637L144.085 129.621C144.183 129.914 144.182 130.23 144.083 130.523C143.984 130.816 143.793 131.072 143.535 131.255C143.277 131.437 142.966 131.537 142.646 131.54C142.326 131.543 142.013 131.449 141.752 131.271L102.019 103.283L62.2886 131.271C62.027 131.449 61.7143 131.543 61.3944 131.54C61.0745 131.537 60.7637 131.437 60.5058 131.255C60.248 131.072 60.0561 130.816 59.9573 130.523C59.8586 130.23 59.8579 129.914 59.9554 129.621L75.1308 84.3439L35.4008 56.3557C35.1401 56.1719 34.9461 55.9135 34.8465 55.6174C34.7469 55.3213 34.7468 55.0025 34.8461 54.7062C34.9454 54.41 35.1391 54.1515 35.3996 53.9674C35.6601 53.7833 35.9743 53.6831 36.2974 53.6809H85.41L100.585 8.40394C100.682 8.10669 100.875 7.84701 101.136 7.66266C101.397 7.47831 101.712 7.37891 102.035 7.37891C102.359 7.37891 102.674 7.47831 102.934 7.66266C103.195 7.84701 103.388 8.10669 103.485 8.40394L118.661 53.6809H167.773C168.096 53.6837 168.41 53.7845 168.67 53.9688C168.93 54.1531 169.123 54.4117 169.222 54.7077C169.32 55.0038 169.32 55.3224 169.22 55.6182C169.121 55.914 168.927 56.172 168.666 56.3557L128.933 84.3439",
                        stroke: "#0084F5",
                        strokeWidth: 4,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, r.jsx)("path", {
                        d: "M27.3079 -14.0475L39.6602 -25.2864M93.3557 173.649L110.661 157.902M52.3058 8.43041L101.715 -36.5254M127.3 188.254L176.709 143.298",
                        stroke: "white",
                        strokeWidth: 4,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }),
                ey = e => (0, r.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 157 150",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, r.jsx)("g", {
                        id: "Group",
                        children: (0, r.jsxs)("g", {
                            id: "Group_2",
                            children: [(0, r.jsx)("path", {
                                id: "Vector",
                                d: "M1 99.9307V24.3433H104.333V99.9401H26.8464",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, r.jsx)("path", {
                                id: "Vector_2",
                                d: "M1 117.302H156V91.9782L130.167 49.3818H117.25",
                                stroke: "#0084F5",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, r.jsx)("path", {
                                id: "Vector_3",
                                d: "M53.0524 24.3305C53.0524 24.3305 49.5925 -7.02979 37.4859 3.96994C25.3793 14.9697 53.0524 24.3305 53.0524 24.3305Z",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, r.jsx)("path", {
                                id: "Vector_4",
                                d: "M52.6572 129.873H104.335M52.6572 24.3302C52.6572 24.3302 71.0951 16.2771 64.2954 9.10256C58.5715 3.06384 52.6572 24.3302 52.6572 24.3302Z",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, r.jsx)("path", {
                                id: "Vector_5",
                                d: "M25.618 148.683C31.5318 148.683 36.3259 143.651 36.3259 137.443C36.3259 131.236 31.5318 126.203 25.618 126.203C19.7041 126.203 14.91 131.236 14.91 137.443C14.91 143.651 19.7041 148.683 25.618 148.683Z",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, r.jsx)("path", {
                                id: "Vector_6",
                                d: "M130.231 148.683C136.145 148.683 140.939 143.651 140.939 137.443C140.939 131.236 136.145 126.203 130.231 126.203C124.317 126.203 119.523 131.236 119.523 137.443C119.523 143.651 124.317 148.683 130.231 148.683Z",
                                stroke: "white",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, r.jsxs)("g", {
                                id: "Group_3",
                                children: [(0, r.jsx)("path", {
                                    id: "Vector_7",
                                    d: "M66.1541 52.3634C65.439 51.2515 64.4024 50.4097 63.1967 49.962C61.9911 49.5143 60.6803 49.4843 59.4572 49.8765C58.2341 50.2687 57.1634 51.0623 56.4028 52.1405C55.6422 53.2186 55.2318 54.5244 55.2321 55.8656C55.2529 57.2943 55.7182 58.6769 56.557 59.803C58.7215 62.9975 63.938 61.4148 65.8828 64.5105C66.7094 65.6235 67.1633 66.991 67.1745 68.4016C67.1507 69.7953 66.6924 71.1426 65.8699 72.2377C65.0473 73.3328 63.9055 74.1156 62.6189 74.4664C61.3323 74.8173 59.9715 74.717 58.7443 74.1809C57.5172 73.6448 56.491 72.7023 55.8226 71.4974M61.1904 45.0845V79.1323M47.067 68.8253C47.067 70.6085 46.3914 72.3187 45.1889 73.5797C43.9863 74.8406 42.3554 75.549 40.6548 75.549C38.9541 75.549 37.3232 74.8406 36.1206 73.5797C34.9181 72.3187 34.2426 70.6085 34.2426 68.8253V54.1996C34.2426 52.4164 34.9181 50.7062 36.1206 49.4453C37.3232 48.1844 38.9541 47.476 40.6548 47.476C42.3554 47.476 43.9863 48.1844 45.1889 49.4453C46.3914 50.7062 47.067 52.4164 47.067 54.1996V68.8253Z",
                                    stroke: "white",
                                    strokeWidth: 2,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), (0, r.jsx)("path", {
                                    id: "Vector_8",
                                    d: "M52.6547 92.1472C68.4466 92.1472 81.2485 78.7096 81.2485 62.1335C81.2485 45.5575 68.4466 32.1199 52.6547 32.1199C36.8628 32.1199 24.0609 45.5575 24.0609 62.1335C24.0609 78.7096 36.8628 92.1472 52.6547 92.1472Z",
                                    stroke: "white",
                                    strokeWidth: 2,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            })]
                        })
                    })
                });
            var eD = s(69947),
                ek = s.n(eD);
            let eN = "displate-club-benefits",
                eS = "Join and unlock the ultimate perks",
                eL = () => {
                    let e = (0, em.v9)({
                            assetPath: "/images/displate-club/sleeve.png",
                            widths: [300, 613]
                        }),
                        t = (0, em.v9)({
                            assetPath: "/images/displate-club/mopsia.png",
                            widths: [340, 680]
                        }),
                        s = (0, em.v9)({
                            assetPath: "/images/displate-club/limited-orange.png",
                            widths: [150, 250]
                        }),
                        i = (0, em.v9)({
                            assetPath: "/images/displate-club/limited-violet.png",
                            widths: [150, 250]
                        });
                    return (0, r.jsxs)("section", {
                        className: ek().container,
                        id: eN,
                        children: [(0, r.jsx)("h2", {
                            className: ek().benefitContainerTitle,
                            children: eS
                        }), (0, r.jsxs)("div", {
                            className: ek().benefitsBoxWrapper,
                            children: [(0, r.jsxs)("div", {
                                className: (0, y.A)(ek().freeShipping, ek().benefitsBox),
                                "data-testid": "benefit-container",
                                children: [(0, r.jsx)(ey, {
                                    className: (0, y.A)(ek().shippingIcon, ek().icon),
                                    "data-testid": "benefit-icon",
                                    height: 150,
                                    width: 157
                                }), (0, r.jsx)("h3", {
                                    className: ek().benefitBoxTitle,
                                    "data-testid": "benefit-title",
                                    children: "Free shipping"
                                }), (0, r.jsx)("p", {
                                    className: ek().paragraph,
                                    "data-testid": "benefit-description",
                                    children: "Grow your collection effortlessly: all your future orders ship for free!"
                                })]
                            }), (0, r.jsx)("div", {
                                className: (0, y.A)(ek().verticalItem, ek().benefitsBox),
                                "data-testid": "benefit-container",
                                children: (0, r.jsxs)("p", {
                                    className: ek().dcInfo,
                                    "data-testid": "benefit-description",
                                    children: [(0, r.jsx)(ej.A, {
                                        className: (0, y.A)(ek().dcLogo, ek().icon),
                                        "data-testid": "benefit-icon",
                                        height: 150,
                                        width: 150
                                    }), "Displate Club:", (0, r.jsx)("br", {}), (0, r.jsx)("br", {}), "Welcome to Next-Level Collecting!"]
                                })
                            }), (0, r.jsxs)("div", {
                                className: (0, y.A)(ek().customDisplates, ek().benefitsBox),
                                "data-testid": "benefit-container",
                                children: [(0, r.jsx)("img", {
                                    alt: "Custom Displates",
                                    className: (0, y.A)(ek().customImage, ek().icon),
                                    "data-testid": "benefit-image",
                                    loading: "lazy",
                                    src: t.widthsSrc[0],
                                    srcSet: t.srcSet
                                }), (0, r.jsx)("h3", {
                                    className: (0, y.A)(ek().benefitBoxTitle, ek().customDisplatesTitle),
                                    "data-testid": "benefit-title",
                                    children: "Custom Displates at a better price"
                                }), (0, r.jsx)("p", {
                                    className: (0, y.A)(ek().paragraph, ek().customDisplatesParagraph),
                                    "data-testid": "benefit-description",
                                    children: "Let your photos, designs, and ideas shine on metal."
                                })]
                            }), (0, r.jsxs)("div", {
                                className: (0, y.A)(ek().limitedDrops, ek().benefitsBox),
                                "data-testid": "benefit-container",
                                children: [(0, r.jsx)("img", {
                                    alt: "limited Displate image",
                                    className: ek().limitedDisplateViolet,
                                    "data-testid": "benefit-image",
                                    loading: "lazy",
                                    src: i.src,
                                    srcSet: i.srcSet
                                }), (0, r.jsx)("img", {
                                    alt: "limited Displate image",
                                    className: ek().limitedDisplateOrange,
                                    "data-testid": "benefit-image",
                                    loading: "lazy",
                                    src: s.src,
                                    srcSet: s.srcSet
                                }), (0, r.jsx)("h3", {
                                    className: ek().limitedTitle,
                                    children: "Early Access to limited series"
                                }), (0, r.jsx)("p", {
                                    className: (0, y.A)(ek().limitedParagraph, ek().paragraph),
                                    "data-testid": "benefit-description",
                                    children: "Grab new limited Displates a full 24 hours before others."
                                })]
                            }), (0, r.jsxs)("div", {
                                className: (0, y.A)(ek().freeDisplates, ek().benefitsBox),
                                "data-testid": "benefit-container",
                                children: [(0, r.jsx)(ev, {
                                    className: (0, y.A)(ek().freeDisplatesIcon, ek().icon),
                                    "data-testid": "benefit-icon"
                                }), (0, r.jsx)("h3", {
                                    className: (0, y.A)(ek().freeDisplatesTitle, ek().benefitBoxTitle),
                                    "data-testid": "benefit-title",
                                    children: "Free Displates every year"
                                }), (0, r.jsx)("p", {
                                    className: ek().paragraph,
                                    "data-testid": "benefit-description",
                                    children: "12 months in? We send a voucher for your free Displate(s), based on the offer you picked."
                                })]
                            }), (0, r.jsxs)("div", {
                                className: (0, y.A)(ek().discounts, ek().benefitsBox),
                                "data-testid": "benefit-container",
                                children: [(0, r.jsx)(ew, {
                                    className: (0, y.A)(ek().discountIcon, ek().icon),
                                    "data-testid": "benefit-icon"
                                }), (0, r.jsx)("h3", {
                                    className: ek().benefitBoxTitle,
                                    "data-testid": "benefit-title",
                                    children: "Member-exclusive discount"
                                }), (0, r.jsx)("p", {
                                    className: ek().paragraph,
                                    "data-testid": "benefit-description",
                                    children: "Slash the prices on all designs in Matte, Gloss and Textra. Always!"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: (0, y.A)(ek().horizontalItem, ek().benefitsBox),
                                "data-testid": "benefit-container",
                                children: [(0, r.jsx)("img", {
                                    alt: "sleeve image",
                                    className: ek().sleeve,
                                    "data-testid": "benefit-image",
                                    loading: "lazy",
                                    src: e.widthsSrc[0],
                                    srcSet: e.srcSet
                                }), (0, r.jsx)("h3", {
                                    className: (0, y.A)(ek().sleeveBoxTitle, ek().benefitBoxTitle),
                                    "data-testid": "benefit-title",
                                    children: "Unique storage sleeve"
                                }), (0, r.jsxs)("p", {
                                    className: (0, y.A)(ek().sleeveParagraph, ek().paragraph),
                                    "data-testid": "benefit-description",
                                    children: ["Organize your Displate collection and keep it in top shape.", " "]
                                })]
                            })]
                        })]
                    })
                },
                eO = ({
                    className: e
                }) => (0, r.jsx)(C.$n, {
                    asChild: !0,
                    className: e,
                    size: "lg",
                    children: (0, r.jsx)("a", {
                        href: `#${eN}`,
                        children: "Explore the perks"
                    })
                }),
                eI = "images/displate-club/hero",
                eM = [148, 212, 273, 424, 546];
            var eH = s(12819),
                eE = s.n(eH);
            let eT = ({
                    startIndex: e = 0,
                    endIndex: t,
                    isVertical: s,
                    hasImageClassName: i = !0,
                    isSkwed: a = !1
                }) => {
                    let n = t - e + 1;
                    return t < 1 || n > 40 ? null : (0, r.jsx)(r.Fragment, {
                        children: Array(n).fill(null).map((t, n) => {
                            let l = (0, em.v9)({
                                assetPath: `${eI}/${e+n+1}.jpg`,
                                widths: eM
                            });
                            return (0, r.jsx)("div", {
                                className: (0, y.A)(eE().carouselItem, {
                                    [eE().carouselItemVertical]: s,
                                    [eE().carouselItemSkwed]: a
                                }),
                                children: (0, r.jsx)("img", {
                                    alt: "displate club member",
                                    className: i ? "carousel-image" : void 0,
                                    fetchPriority: "high",
                                    sizes: `
                (min-resolution: 2dppx) and (min-width: ${ef.RD}px) ${eM[4]}px,
                (min-width: ${ef.RD}px) ${eM[2]}px,
                (min-resolution: 2dppx) and (min-width: ${ef.Kk}px) ${eM[3]}px,
                (min-width: ${ef.Kk}px) ${eM[1]}px,
                (min-resolution: 2dppx) ${eM[2]}px,
                ${eM[0]}px`,
                                    src: l.src,
                                    srcSet: l.srcSet
                                })
                            }, l.src)
                        })
                    })
                },
                eR = ({
                    className: e,
                    startIndex: t = 0,
                    endIndex: s = 39,
                    isReversed: i = !1,
                    isReady: a = !0,
                    isSkwed: n = !1
                }) => (0, r.jsx)("div", {
                    className: (0, y.A)(eE().carousel, e, {
                        [eE().carouselVisible]: a
                    }),
                    children: (0, r.jsxs)("div", {
                        className: (0, y.A)(eE().track, {
                            [eE().trackReversed]: i
                        }),
                        children: [(0, r.jsx)(eT, {
                            endIndex: s,
                            isSkwed: n,
                            startIndex: t
                        }), (0, r.jsx)(eT, {
                            endIndex: s,
                            hasImageClassName: !1,
                            isSkwed: n,
                            startIndex: t
                        })]
                    })
                });
            var eV = s(11337),
                eB = s.n(eV);
            let eA = ({
                onIntroFinished: e
            }) => {
                let [t, s] = (0, l.useState)(!1);
                return (({
                    images: e,
                    breakpoints: t,
                    onLoad: s
                }) => {
                    (0, l.useEffect)(() => {
                        let r = new Set,
                            i = t => {
                                r.add(t), r.size === e.length && s()
                            };
                        Object.entries(t).forEach(([s, r]) => {
                            window.matchMedia(`(min-width: ${s}px)`).matches && e.forEach(e => {
                                let s = (0, em.v9)({
                                        assetPath: e,
                                        widths: Object.values(t)
                                    }),
                                    a = new Image;
                                eC.ConfigPublic.IsLocalEnvironment ? a.src = s.src : a.src = s.widthsSrc.find(e => e.includes(r.toString())) || s.src, a.complete ? i(e) : a.onload = () => {
                                    i(e)
                                }
                            })
                        })
                    }, [e, t, s])
                })({
                    images: Array(40).fill(null).map((e, t) => `${eI}/${t+1}.jpg`),
                    breakpoints: {
                        [ef.as]: eM[0],
                        [ef.Kk]: eM[1],
                        [ef.RD]: eM[2]
                    },
                    onLoad: () => {
                        s(!0)
                    }
                }), (0, r.jsx)("section", {
                    className: eB().section,
                    children: (0, r.jsxs)("div", {
                        className: eB().container,
                        children: [(0, r.jsx)(eR, {
                            className: eB().hideOnMobile,
                            endIndex: 9,
                            isReady: t
                        }), (0, r.jsx)(eR, {
                            className: eB().hideOnMobile,
                            endIndex: 19,
                            isReady: t,
                            isReversed: !0,
                            startIndex: 10
                        }), (0, r.jsxs)("div", {
                            className: eB().logoTitleWrapper,
                            children: [(0, r.jsx)(eg, {
                                className: eB().logo,
                                height: 31,
                                width: 184
                            }), (0, r.jsxs)("div", {
                                className: eB().title,
                                children: [(0, r.jsx)("div", {
                                    className: eB().titleText,
                                    children: (0, r.jsx)(ex, {
                                        className: eB().collect,
                                        height: 24,
                                        width: 140
                                    })
                                }), (0, r.jsx)("div", {
                                    className: eB().titleText,
                                    children: (0, r.jsx)(e_, {
                                        className: eB().connect,
                                        height: 24,
                                        width: 160
                                    })
                                }), (0, r.jsx)("div", {
                                    className: eB().titleText,
                                    onAnimationEnd: () => {
                                        e ? .()
                                    },
                                    children: (0, r.jsx)(eb, {
                                        className: eB().hang,
                                        height: 24,
                                        width: 140
                                    })
                                })]
                            }), (0, r.jsx)(eR, {
                                className: eB().hideOnDesktop
                            }), (0, r.jsx)(eO, {
                                className: (0, y.A)(eB().button, eB().hideOnMobile)
                            })]
                        }), (0, r.jsx)(eO, {
                            className: (0, y.A)(eB().button, eB().hideOnDesktop)
                        }), (0, r.jsx)(eR, {
                            className: eB().hideOnMobile,
                            endIndex: 29,
                            isReady: t,
                            startIndex: 20
                        }), (0, r.jsx)(eR, {
                            className: eB().hideOnMobile,
                            endIndex: 39,
                            isReady: t,
                            isReversed: !0,
                            startIndex: 30
                        })]
                    })
                })
            };
            var eP = s(55169),
                e$ = s(43779),
                eW = s.n(e$);
            let eZ = ({
                    heroSeen: e,
                    hideSticky: t,
                    price: s
                }) => {
                    let [i, a] = (0, l.useState)(!1);
                    (0, l.useEffect)(() => {
                        e && a(!0)
                    }, [e]);
                    let n = i && !t;
                    return (0, r.jsx)("div", {
                        "aria-live": n ? "polite" : void 0,
                        className: (0, y.A)(eW().container, {
                            [eW().visible]: n,
                            [eW().hidden]: !n
                        }),
                        "data-testid": "limited-time-offer-sticky",
                        children: (0, r.jsxs)("div", {
                            className: eW().card,
                            "data-testid": "limited-time-offer-card",
                            children: [(0, r.jsxs)("div", {
                                className: eW().badgeWrapper,
                                children: [(0, r.jsx)("span", {
                                    className: eW().badge,
                                    "data-testid": "limited-time-offer-badge",
                                    children: "Limited Time Offer"
                                }), (0, r.jsxs)("span", {
                                    className: eW().limitedOfferCopy,
                                    "data-testid": "limited-time-offer-copy",
                                    children: ["Now for only ", (0, r.jsx)("span", {
                                        className: eW().limitedOfferPrice,
                                        children: s
                                    }), "/monthly"]
                                })]
                            }), (0, r.jsx)(C.$n, {
                                "data-testid": "limited-time-offer-link",
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation();
                                    let t = document.getElementById("offer");
                                    if (t) {
                                        let e = t.getBoundingClientRect().top + window.scrollY;
                                        window.scrollTo({
                                            top: e - 100,
                                            behavior: "smooth"
                                        })
                                    }
                                },
                                type: "button",
                                variant: "text",
                                children: "See details"
                            })]
                        })
                    })
                },
                eF = ({
                    displateClub: e
                }) => {
                    let {
                        track: t
                    } = (0, p.z)(), s = (0, l.useRef)(null), i = (0, l.useRef)(null), a = (0, u.P)(s, {
                        threshold: 1,
                        toggle: !0
                    }), [n, h] = (0, l.useState)(!1), f = (0, u.P)(i, {
                        threshold: 0,
                        toggle: !0,
                        rootMargin: "0px 0px -250px 0px"
                    }), {
                        displateClubFlatPriceOffer: C
                    } = (0, c.X)();
                    return (0, l.useEffect)(() => {
                        t()
                    }, []), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            ref: s,
                            children: (0, r.jsx)(eA, {
                                onIntroFinished: () => h(!0)
                            })
                        }), (0, r.jsx)(eL, {}), (0, r.jsxs)("div", {
                            ref: i,
                            children: [(0, r.jsx)("div", {
                                id: "displate-club-offers",
                                children: (0, r.jsx)(eh, {})
                            }), (0, r.jsx)(eZ, {
                                heroSeen: !!a && n,
                                hideSticky: !!f || !C,
                                price: C ? .price ? .formatted ? ? ""
                            }), (0, r.jsx)(d.A, {
                                className: "px-4 py-20 lg:px-25 lg:py-30",
                                testId: "faq",
                                children: (0, r.jsx)(o.y, {
                                    data: e.faq.data
                                })
                            }), (0, r.jsx)(eP.Newsletter, {})]
                        })]
                    })
                };
            var eU = s(25282);
            let ez = ({
                displateClub: e,
                header: t
            }) => {
                let s = z.w.defaultMeta,
                    n = {
                        webpage: {
                            h1: eS,
                            url: (0, z.a)({
                                absolute: !0
                            }).route,
                            description: s.description,
                            imageOfPage: s.coverImage
                        }
                    };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.F, {
                        ldJsonParams: n,
                        pageMeta: s
                    }), (0, r.jsx)(i.e, {
                        value: {},
                        children: (0, r.jsx)(eU.O, {
                            headerData: t,
                            children: (0, r.jsx)(eF, {
                                displateClub: e
                            })
                        })
                    })]
                })
            };
            ez.getLayout = function(e) {
                return (0, r.jsx)(n.A, {
                    abTests: e.props.abTests,
                    countryCode: e.props.countryCode,
                    featureFlags: e.props.featureFlags,
                    gitInfo: e.props.gitInfo,
                    tpid: e.props.tpid,
                    uvert: e.props.uvert,
                    children: e
                })
            };
            var eq = !0
        },
        16373: (e, t, s) => {
            "use strict";
            s.d(t, {
                z: () => d
            });
            var r = s(14232),
                i = s(50859),
                a = s(2661),
                n = s(92719),
                l = s(47765),
                o = s(35891);
            let d = () => {
                let [e, t] = (0, r.useState)([]), {
                    consumeClientStackItems: s
                } = (0, n.n)(), {
                    fetchedUserInfo: d,
                    userInfo: c,
                    error: u
                } = (0, r.useContext)(o.cy), p = (0, l.aP)(), {
                    pushEvent: h
                } = (0, a.L)(), f = (0, r.useCallback)((e = {}) => {
                    let s = { ...e,
                        pageCategory: e.pageCategory || p.analyticsGaName
                    };
                    t(e => [...e, s])
                }, [p.analyticsGaName]);
                return (0, r.useEffect)(() => {
                    e.length && (d || u) && (e.forEach(e => {
                        (({
                            pageCategory: e,
                            additionalData: t = {},
                            eventParams: r
                        }) => {
                            ["category", "collection-page", "payment", "checkout"].includes(e) || h({
                                eventType: "view",
                                eventName: e || "view",
                                ...r && {
                                    eventParams: r
                                }
                            }), (0, i.j)(e, t, c), s(["trackRegistrationComplete", "trackUserLogout", "trackUserLogin", "login", "registration"])
                        })(e)
                    }), t([]))
                }, [e.length, d, u]), {
                    track: f
                }
            }
        },
        20019: (e, t, s) => {
            "use strict";
            s.d(t, {
                M: () => n,
                O: () => l
            });
            var r = s(37876),
                i = s(14232),
                a = s(90511);
            let n = (0, i.createContext)({
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
        20717: e => {
            e.exports = {
                wrapper: "DisplateClubOffer_wrapper__cyspM",
                unknownUser: "DisplateClubOffer_unknownUser__PUZGU",
                notSupported: "DisplateClubOffer_notSupported__lB59H",
                flatPrice: "DisplateClubOffer_flatPrice__xZpbs",
                hiddenOnDesktop: "DisplateClubOffer_hiddenOnDesktop__Ap2rJ",
                visibleOnDesktop: "DisplateClubOffer_visibleOnDesktop__YYsyC",
                desktopLeftSection: "DisplateClubOffer_desktopLeftSection__r_NzG",
                desktopFullWidthSection: "DisplateClubOffer_desktopFullWidthSection__2nt5J",
                desktopRightSection: "DisplateClubOffer_desktopRightSection__P_wVw",
                logo: "DisplateClubOffer_logo__c_DQn",
                title: "DisplateClubOffer_title__xj_Yo",
                titleCentered: "DisplateClubOffer_titleCentered__K5N2_",
                subtitle: "DisplateClubOffer_subtitle__yYih6",
                benefits: "DisplateClubOffer_benefits__9GMhm",
                benefitsIcon: "DisplateClubOffer_benefitsIcon__TD6SZ",
                benefit: "DisplateClubOffer_benefit__40Vzw",
                link: "DisplateClubOffer_link__Y6xU4",
                priceWrapper: "DisplateClubOffer_priceWrapper__YvcGO",
                price: "DisplateClubOffer_price__O4Cns",
                buttonWrapper: "DisplateClubOffer_buttonWrapper__JzB54",
                noPriceButtonWrapper: "DisplateClubOffer_noPriceButtonWrapper__AN_J6",
                dcNotSupportedInfo: "DisplateClubOffer_dcNotSupportedInfo__LfPT5"
            }
        },
        23039: (e, t, s) => {
            "use strict";
            s.d(t, {
                X: () => c
            });
            var r = s(14232),
                i = s(74359),
                a = s(16903),
                n = s(35891),
                l = s(13341),
                o = s(87050);
            let d = ["displate-club-offers"],
                c = e => {
                    let t = (e => {
                            let {
                                fetchedUserInfo: t
                            } = (0, r.useContext)(n.cy), s = (0, a.p)();
                            return (0, i.I)({
                                queryKey: [...l.L, ...d, e, s],
                                queryFn: () => o.$y.getDisplateClubUserOfferDataV3(s, e ? .limit, e ? .purchasable, e ? .sortPrice),
                                enabled: !!t && !!s,
                                staleTime: 6e4
                            })
                        })(e),
                        {
                            data: s
                        } = t,
                        c = s ? .status,
                        u = (0, r.useMemo)(() => s ? .offers.find(e => e.strategy === o.$1.ORDER), [s]),
                        p = (0, r.useMemo)(() => s ? .offers.find(e => e.strategy === o.$1.CURRENT_CART), [s]);
                    return {
                        displateClubOffersQuery: t,
                        displateClubOrderBasedOffer: u,
                        displateClubCartBasedOffer: p,
                        displateClubLowestPossibleOffer: (0, r.useMemo)(() => s ? .offers.find(e => e.strategy === o.$1.LOWEST_POSSIBLE), [s]),
                        displateClubOffersStatus: c,
                        displateClubFlatPriceOffer: (0, r.useMemo)(() => s ? .offers.find(e => e.strategy === o.$1.FLAT_PRICE), [s])
                    }
                }
        },
        23794: (e, t, s) => {
            "use strict";
            s.d(t, {
                y: () => l
            });
            var r = s(37876),
                i = s(14232),
                a = s(13539),
                n = s(16441);
            let l = ({
                data: e
            }) => {
                let t = (0, i.useMemo)(() => e.map(e => ({
                    title: e.attributes.question,
                    content: (0, r.jsx)(n.T, {
                        markdown: e.attributes.answer,
                        useComponents: ["link", "image", "table"]
                    })
                })), [e]);
                return (0, r.jsx)(a.l, {
                    data: t,
                    headerTitle: "Frequently asked questions"
                })
            }
        },
        28431: (e, t, s) => {
            "use strict";
            s.d(t, {
                g: () => a,
                u: () => i
            });
            var r = s(87050);
            let i = {
                    [r.$1.FLAT_PRICE]: "lime",
                    [r.$1.ORDER]: "magenta"
                },
                a = "light-blue"
        },
        28670: (e, t, s) => {
            "use strict";
            s.d(t, {
                X: () => n,
                y: () => l
            });
            var r = s(74359),
                i = s(16903),
                a = s(87050);
            let n = ["checkout-providers"],
                l = e => (0, r.I)({
                    queryKey: [...n, e],
                    queryFn: () => a.$y.getCheckoutProvidersV4(e, (0, i.j)())
                })
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
        40003: (e, t, s) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/join-displate-club", function() {
                return s(15994)
            }])
        },
        40097: (e, t, s) => {
            "use strict";
            s.d(t, {
                n: () => u
            });
            var r = s(14232),
                i = s(21407),
                a = s(60388),
                n = s(90089),
                l = s(37149),
                o = class extends n.Q {#
                    e;#
                    t = void 0;#
                    s;#
                    r;
                    constructor(e, t) {
                        super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#i()
                    }
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(e) {
                        let t = this.options;
                        this.options = this.#e.defaultMutationOptions(e), (0, l.f8)(this.options, t) || this.#e.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#s,
                            observer: this
                        }), t ? .mutationKey && this.options.mutationKey && (0, l.EN)(t.mutationKey) !== (0, l.EN)(this.options.mutationKey) ? this.reset() : this.#s ? .state.status === "pending" && this.#s.setOptions(this.options)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#s ? .removeObserver(this)
                    }
                    onMutationUpdate(e) {
                        this.#i(), this.#a(e)
                    }
                    getCurrentResult() {
                        return this.#t
                    }
                    reset() {
                        this.#s ? .removeObserver(this), this.#s = void 0, this.#i(), this.#a()
                    }
                    mutate(e, t) {
                        return this.#r = t, this.#s ? .removeObserver(this), this.#s = this.#e.getMutationCache().build(this.#e, this.options), this.#s.addObserver(this), this.#s.execute(e)
                    }#
                    i() {
                        let e = this.#s ? .state ? ? (0, i.$)();
                        this.#t = { ...e,
                            isPending: "pending" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    a(e) {
                        a.j.batch(() => {
                            if (this.#r && this.hasListeners()) {
                                let t = this.#t.variables,
                                    s = this.#t.context;
                                e ? .type === "success" ? (this.#r.onSuccess ? .(e.data, t, s), this.#r.onSettled ? .(e.data, null, t, s)) : e ? .type === "error" && (this.#r.onError ? .(e.error, t, s), this.#r.onSettled ? .(void 0, e.error, t, s))
                            }
                            this.listeners.forEach(e => {
                                e(this.#t)
                            })
                        })
                    }
                },
                d = s(67768),
                c = s(37507);

            function u(e, t) {
                let s = (0, d.jE)(t),
                    [i] = r.useState(() => new o(s, e));
                r.useEffect(() => {
                    i.setOptions(e)
                }, [i, e]);
                let n = r.useSyncExternalStore(r.useCallback(e => i.subscribe(a.j.batchCalls(e)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult()),
                    l = r.useCallback((e, t) => {
                        i.mutate(e, t).catch(c.l)
                    }, [i]);
                if (n.error && (0, c.G)(i.options.throwOnError, [n.error])) throw n.error;
                return { ...n,
                    mutate: l,
                    mutateAsync: n.mutate
                }
            }
        },
        40510: (e, t, s) => {
            "use strict";
            s.d(t, {
                Q: () => i
            });
            var r = s(51192);
            let i = e => {
                (0, r.O)({
                    elementId: e,
                    elementVariant: "upsell_drawer"
                })
            }
        },
        43067: (e, t, s) => {
            "use strict";
            s.d(t, {
                a: () => p
            });
            var r = s(37876),
                i = s(56557),
                a = s.n(i),
                n = s(86090),
                l = s.n(n),
                o = s(4119),
                d = s(28431),
                c = s(36256),
                u = s(87050);
            a().extend(l());
            let p = ({
                strategy: e,
                countdownDate: t
            }) => {
                let s = (0, o.A)(a()(t), {
                        enabled: !!t && (e === u.$1.ORDER || e === u.$1.FLAT_PRICE)
                    }),
                    i = a().duration(s),
                    n = Math.floor(i.asDays()),
                    l = Math.floor(i.hours()),
                    p = Math.floor(i.minutes()),
                    h = () => n > 1 ? `${n} days` : 1 === n ? `${n} day` : l > 0 ? `${l}h : ${p}min` : `${p}min`;
                if (0 === n && 0 === l && 0 === p && (e === u.$1.ORDER || e === u.$1.FLAT_PRICE)) return null;
                let f = d.u[e] ? ? d.g;
                return e === u.$1.ORDER ? (0, r.jsxs)(c.Ex, {
                    color: f,
                    children: ["Exclusive Offer valid for ", h()]
                }) : e === u.$1.FLAT_PRICE ? (0, r.jsxs)(c.Ex, {
                    color: f,
                    children: ["Time Limited Offer ends in ", h()]
                }) : (0, r.jsx)(c.Ex, {
                    color: f,
                    children: "Standard Offer"
                })
            }
        },
        43779: e => {
            e.exports = {
                container: "LimitedTimeOfferSticky_container__hAx9N",
                card: "LimitedTimeOfferSticky_card__8hx6l",
                badgeWrapper: "LimitedTimeOfferSticky_badgeWrapper__pdObC",
                badge: "LimitedTimeOfferSticky_badge__3jzLl",
                limitedOfferCopy: "LimitedTimeOfferSticky_limitedOfferCopy__3RkBv",
                limitedOfferPrice: "LimitedTimeOfferSticky_limitedOfferPrice__ZH2X_",
                hidden: "LimitedTimeOfferSticky_hidden__65ILG",
                visible: "LimitedTimeOfferSticky_visible__o0LjX"
            }
        },
        45168: (e, t, s) => {
            "use strict";
            s.d(t, {
                b: () => a
            });
            var r = s(14232),
                i = s(64968);
            let a = () => {
                let [e, t] = (0, r.useState)(!1), {
                    handleBackdropOpen: s,
                    handleBackdropClose: a
                } = (0, r.useContext)(i.l);
                return {
                    isDrawerOpen: e,
                    handleDrawerClose: () => {
                        t(!1), a ? .()
                    },
                    handleDrawerOpen: () => {
                        t(!0), s ? .()
                    }
                }
            }
        },
        50859: (e, t, s) => {
            "use strict";
            s.d(t, {
                j: () => i
            });
            var r = s(22884);
            let i = (e, t, s) => {
                let i = new Date().toISOString(),
                    a = {
                        event: "contentLoad",
                        action: "Pageview",
                        pageCat: e,
                        timestamp: i.slice(0, i.length - 1),
                        ...t
                    };
                s ? .account.isUserLoggedIn && (a.userID = s.identity.deprecatedId, a.subscriber = s ? .account.subscriptionActive ? "active" : "inactive", a.uOrds = s ? .history.ordersCreated, a.uDis = s ? .history.platesBought), (0, r.u)(a)
            }
        },
        53499: (e, t, s) => {
            "use strict";
            s.d(t, {
                EX: () => r,
                Kk: () => l,
                RD: () => o,
                Y: () => i,
                as: () => a,
                kY: () => n
            });
            let r = 640,
                i = 768,
                a = 1024,
                n = 1280,
                l = 1440,
                o = 1920
        },
        55169: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                Newsletter: () => v,
                NewsletterFormType: () => b
            });
            var r, i = s(37876),
                a = s(14232),
                n = s(78970),
                l = s(27555),
                o = s(74773),
                d = s(2661),
                c = s(40097),
                u = s(87050),
                p = s(39313),
                h = s(54111),
                f = s(10769),
                C = s(16909),
                m = s(35891),
                x = s(36256),
                _ = s(14619),
                g = s(39432),
                b = ((r = {}).REGULAR = "regular", r.REGISTRATION = "registration", r.CHECKOUT = "checkout", r.SETTINGS = "settings", r.POPUP = "popup", r);
            let j = {
                    email: null,
                    isError: !1
                },
                w = {
                    email: ""
                },
                v = ({
                    formType: e = "regular",
                    className: t,
                    webflow: s = !1
                }) => {
                    let r, {
                            userInfo: b,
                            fetchedUserInfo: v
                        } = (0, a.useContext)(m.cy),
                        y = (0, a.useRef)(null),
                        {
                            pushEvent: D
                        } = (0, d.L)();
                    (0, p.P)(y, {
                        once: !0,
                        callback: () => (0, n.I)(e)
                    });
                    let [k, N] = (0, a.useState)(j), [S, L] = (0, a.useState)(w), {
                        mutate: O,
                        isPending: I
                    } = (r = {
                        onSuccess: async t => {
                            switch (t.status) {
                                case u.it.SUCCESS:
                                    N({
                                        email: "E-mail added to the newsletter",
                                        isError: !1
                                    }), (0, n.N)({
                                        formType: e
                                    }), D({
                                        eventType: "click",
                                        eventName: "newsletterRegistration"
                                    });
                                    break;
                                case u.it.ALREADY_ADDED:
                                    N({
                                        email: "Your email is already in newsletter",
                                        isError: !0
                                    });
                                    break;
                                case u.it.FORMAT_ERROR:
                                    N({
                                        email: "Incorrect email address format",
                                        isError: !0
                                    });
                                    break;
                                default:
                                    N({
                                        email: "Could not add you email, please try again.",
                                        isError: !0
                                    })
                            }
                        },
                        onError: e => {
                            (0, C.vV)("sendNewsletter error " + JSON.stringify(e))
                        }
                    }, (0, c.n)({
                        mutationFn: e => u.$y.newsletterSubscribe({
                            email: e
                        }),
                        onSuccess: r ? .onSuccess,
                        onError: r ? .onError
                    }));
                    if (v && b ? .account.isUserLoggedIn && !b ? .account.shouldMarketingConsentsShow) return null;
                    let M = (0, f.v9)({
                        assetPath: "/images/newsletter/newsletter_discount_v3.jpg",
                        widths: [660, 1320]
                    });
                    return (0, i.jsx)(x.mc, {
                        className: t,
                        variant: "noPaddingMobile",
                        children: (0, i.jsx)(x.xA, {
                            variant: "noGap",
                            children: (0, i.jsxs)("section", {
                                className: (0, _.cn)("col-span-full grid grid-cols-subgrid", s ? "grid!" : null),
                                "data-testid": "newsletter-section",
                                id: "newsletter",
                                ref: y,
                                children: [(0, i.jsx)("img", {
                                    alt: "Newsletter signup with 25% discount offer for Displate products",
                                    className: "col-span-full lg:col-span-6 h-full w-full self-center object-contain lg:object-cover lg:rounded-l-lg",
                                    "data-testid": "newsletter-image",
                                    loading: "lazy",
                                    sizes: M.sizes,
                                    src: M.src
                                }), (0, i.jsxs)("div", {
                                    className: "col-span-full lg:col-span-6 bg-background-information p-8 md:p-14 flex flex-col justify-center lg:rounded-r-lg 2xl:px-20",
                                    children: [(0, i.jsx)("h2", {
                                        className: "w-4/5 sm:w-3/4 2xl:w-full text-heading-h3 sm:text-heading-h2 text-wrap-balance mb-4",
                                        children: "Sign up and never miss a deal"
                                    }), (0, i.jsx)("p", {
                                        className: "text-body-lg mb-4",
                                        children: "Join our newsletter for the latest discounts and Displate goodies"
                                    }), (0, i.jsx)("form", {
                                        className: "flex items-end mb-2",
                                        children: (0, i.jsx)(x.A_, {
                                            actionSlot: (0, i.jsx)(x.$n, {
                                                loading: I,
                                                onClick: () => {
                                                    let e = !S.email.trim().length,
                                                        t = !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/i.test(S.email.trim());
                                                    e || t ? N({ ...k,
                                                        ...(e || t) && {
                                                            email: e ? "Required field" : "Incorrect email address format"
                                                        },
                                                        isError: !0
                                                    }) : (N({
                                                        email: null,
                                                        isError: !1
                                                    }), O(S.email))
                                                },
                                                type: "button",
                                                variant: "primary",
                                                children: "Sign up"
                                            }),
                                            autoComplete: "email",
                                            className: "w-full",
                                            error: k.isError && k.email ? k.email : void 0,
                                            label: "Email address",
                                            name: "email",
                                            onChange: e => {
                                                let {
                                                    target: t
                                                } = e, {
                                                    name: s
                                                } = t, r = t.value;
                                                L({ ...S,
                                                    [s]: r
                                                })
                                            },
                                            placeholder: "Enter your e-mail",
                                            type: "email",
                                            value: S.email
                                        })
                                    }), !k.isError && k.email ? (0, i.jsx)("p", {
                                        className: "text-heading-subtitle-eyebrow text-text-success mb-2",
                                        children: k.email
                                    }) : null, (0, i.jsxs)("p", {
                                        className: "text-body-xs",
                                        children: ["By clicking “Sign up”, you agree to receiving emails and to processing of your personal data in accordance with the", " ", (0, i.jsx)(x.N_, {
                                            asChild: !0,
                                            variant: "secondary",
                                            children: (0, i.jsx)(l.A, {
                                                routeInfo: (0, g.Z)(),
                                                target: "_blank",
                                                children: "Privacy policy"
                                            })
                                        }), ". The data will be processed to customize the newsletter content according to your personal preferences. The controller of your personal data is Displate, i.e. GWD Concept Sp. z o. o. with a registered office in Warsaw. You can unsubscribe at any time by clicking the “Unsubscribe” button in the email footer, unchecking your consent in the “Basic Info” tab of the customer panel, or sending a request to ", (0, i.jsx)(o.$, {
                                            routeInfoFn: h.Qq,
                                            variant: "secondary"
                                        }), "."]
                                    })]
                                })]
                            })
                        })
                    })
                }
        },
        57597: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => u,
                I: () => p
            });
            var r = s(67768),
                i = s(40097),
                a = s(87973),
                n = s(81291),
                l = s(16903),
                o = s(69945),
                d = s(87050),
                c = s(13341);
            let u = ["remove-from-cart"],
                p = e => {
                    let {
                        onError: t,
                        onSuccess: s
                    } = e ? ? {}, p = (0, r.jE)(), h = (0, l.j)(), f = (0, n.k)({
                        queryKey: (0, a.Me)(h),
                        optimisticUpdateFn: (e, t) => {
                            if (!e) return;
                            let s = p.getQueryData(c.L),
                                r = s ? .positions.find(e => e.id === t);
                            if (!r) return e;
                            let i = "product" === r.type ? r.quantity : 1;
                            return { ...e,
                                cartCount: Math.max(0, (e.cartCount || 0) - i)
                            }
                        }
                    }), C = (0, n.k)({
                        queryKey: c.L,
                        optimisticUpdateFn: (e, t) => {
                            if (e) return { ...e,
                                positions: e.positions.filter(e => e.id !== t)
                            }
                        }
                    });
                    return (0, i.n)({
                        mutationKey: u,
                        mutationFn: e => d.$y.deletePositionFromCartV8(e, h),
                        onMutate: async e => {
                            let t = p.getQueryData(c.L),
                                s = t ? .positions.find(t => t.id === e),
                                r = !!s && (0, o.E0)(s),
                                i = await f.onMutate(e);
                            return {
                                cartContext: await C.onMutate(e),
                                headerContext: i,
                                isDisplateClubMembership: r
                            }
                        },
                        onError: (e, s, r) => {
                            t ? .(), r ? .headerContext && f.onError(e, s, r.headerContext), r ? .cartContext && C.onError(e, s, r.cartContext)
                        },
                        onSuccess: (e, t, r) => {
                            s ? .({
                                isDisplateClubMembership: r ? .isDisplateClubMembership ? ? !1
                            }), f.onSuccess(e, t, r ? .headerContext), C.onSuccess(e, t, r ? .cartContext)
                        }
                    })
                }
        },
        59140: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => n
            });
            var r = s(37876),
                i = s(69241),
                a = s(36256);
            let n = ({
                children: e,
                testId: t,
                className: s
            }) => (0, r.jsx)(a.xA, {
                asChild: !0,
                children: (0, r.jsx)("section", {
                    className: (0, i.A)("[&_ol]:list-inside [&_ol]:list-decimal", s),
                    "data-testid": t,
                    children: (0, r.jsx)("div", {
                        className: "col-span-full xl:col-start-3 xl:col-span-8",
                        children: e
                    })
                })
            })
        },
        64968: (e, t, s) => {
            "use strict";
            s.d(t, {
                e: () => d,
                l: () => o
            });
            var r = s(37876),
                i = s(14232),
                a = s(69241),
                n = s(37253),
                l = s.n(n);
            let o = (0, i.createContext)({}),
                d = ({
                    children: e
                }) => {
                    let [t, s] = (0, i.useState)(!1), [n, d] = (0, i.useState)(!1), [c, u] = (0, i.useState)(0), p = (0, i.useRef)(null), h = (0, i.useRef)(null), f = (0, i.useRef)(null);
                    return (0, i.useEffect)(() => {
                        u(window.innerWidth - document.documentElement.clientWidth)
                    }, []), (0, i.useEffect)(() => {
                        let e = document.getElementById("main-container");
                        document.documentElement.style.setProperty("--scrollBarWidth", `${c}px`), t ? (e && e.classList.add(l().scrollBarWidth), document.body.classList.add(l().editHtmlDrawer), f.current ? .classList.add(l().editHeaderDrawer, l().scrollBarWidth)) : (e && e.classList.remove(l().scrollBarWidth), document.body.classList.remove(l().editHtmlDrawer), f.current ? .classList.remove(l().editHeaderDrawer, l().scrollBarWidth))
                    }, [t, c]), (0, r.jsxs)(o.Provider, {
                        value: {
                            setHeaderRef: e => {
                                f.current = e.current
                            },
                            setIsDrawerFullHeight: d,
                            handleBackdropClose: () => s(!1),
                            handleBackdropOpen: () => s(!0),
                            drawerContainerRef: p,
                            drawerBackdropRef: h
                        },
                        children: [e, (0, r.jsx)("div", {
                            className: (0, a.A)(l().drawerContainer, l().clientDrawer, {
                                [l().drawerContainerOpened]: t,
                                [l().drawerContainerFullHeight]: n
                            }),
                            "data-testid": "drawer-container",
                            ref: p
                        }), (0, r.jsx)("div", {
                            className: (0, a.A)(l().drawerBackdrop, {
                                [l().drawerBackdropOpened]: t
                            }),
                            ref: h
                        })]
                    })
                }
        },
        68873: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => i
            });
            var r = s(22884);
            let i = ({
                elementId: e,
                elementVariant: t = "none",
                additionalData: s
            }) => {
                let i = {
                    event: "element_impression",
                    element_id: e,
                    element_variant: t,
                    ...s
                };
                (0, r.u)(i)
            }
        },
        69947: e => {
            e.exports = {
                container: "DisplateClubBenefits_container__J3YJF",
                benefitContainerTitle: "DisplateClubBenefits_benefitContainerTitle__Qxh46",
                benefitsBoxWrapper: "DisplateClubBenefits_benefitsBoxWrapper__7neHL",
                limitedTitle: "DisplateClubBenefits_limitedTitle__zVhV5",
                benefitsBox: "DisplateClubBenefits_benefitsBox__MR8jI",
                benefitBoxTitle: "DisplateClubBenefits_benefitBoxTitle__JTfmQ",
                icon: "DisplateClubBenefits_icon__pkG_Q",
                paragraph: "DisplateClubBenefits_paragraph__Nmt3U",
                freeShipping: "DisplateClubBenefits_freeShipping__JBhgx",
                freeDisplates: "DisplateClubBenefits_freeDisplates__ZiykE",
                discounts: "DisplateClubBenefits_discounts__KeNqy",
                customDisplates: "DisplateClubBenefits_customDisplates__xzLNR",
                limitedDrops: "DisplateClubBenefits_limitedDrops__Dxokb",
                horizontalItem: "DisplateClubBenefits_horizontalItem__Dj8Ty",
                shippingIcon: "DisplateClubBenefits_shippingIcon__ZXC4k",
                verticalItem: "DisplateClubBenefits_verticalItem__gqNF1",
                dcLogo: "DisplateClubBenefits_dcLogo__PRexo",
                dcInfo: "DisplateClubBenefits_dcInfo__HL4Hk",
                customDisplatesTitle: "DisplateClubBenefits_customDisplatesTitle__T8I5N",
                customDisplatesParagraph: "DisplateClubBenefits_customDisplatesParagraph__T5Ua_",
                customImage: "DisplateClubBenefits_customImage__P1zuG",
                limitedDisplateViolet: "DisplateClubBenefits_limitedDisplateViolet__Y47al",
                limitedDisplateOrange: "DisplateClubBenefits_limitedDisplateOrange__xBIU6",
                limitedParagraph: "DisplateClubBenefits_limitedParagraph__Anu2V",
                freeDisplatesTitle: "DisplateClubBenefits_freeDisplatesTitle__kZ3YN",
                freeDisplatesIcon: "DisplateClubBenefits_freeDisplatesIcon__ZD61N",
                discountIcon: "DisplateClubBenefits_discountIcon__CwL9q",
                sleeve: "DisplateClubBenefits_sleeve__l0AAc",
                sleeveBoxTitle: "DisplateClubBenefits_sleeveBoxTitle__eeFk2",
                sleeveParagraph: "DisplateClubBenefits_sleeveParagraph__Lm4y2"
            }
        },
        71189: (e, t, s) => {
            "use strict";
            s.d(t, {
                m: () => x
            });
            var r = s(37876),
                i = s(67768),
                a = s(40097),
                n = s(46841),
                l = s(97620),
                o = s(51192),
                d = s(87973),
                c = s(16903),
                u = s(28670),
                p = s(36256),
                h = s(13341),
                f = s(36883),
                C = s(87050),
                m = s(74381);
            let x = e => {
                    let t = (0, i.jE)(),
                        {
                            enqueueToast: s
                        } = (0, p.oS)();
                    return (0, a.n)({
                        mutationKey: m.M,
                        mutationFn: ({
                            strategy: e,
                            orderId: t
                        }) => C.$y.addPositionsToCartV8((0, c.j)(), "0", {
                            positions: [{
                                type: "displate-club-membership",
                                clientRequestId: (0, n.Ay)(),
                                displateClubMembershipData: {
                                    strategy: _(e),
                                    orderId: t
                                }
                            }]
                        }),
                        ...e,
                        onSuccess: (s, r, i) => {
                            let a = (0, f.f)(r.strategy);
                            t.invalidateQueries({
                                queryKey: d.yz
                            }), t.invalidateQueries({
                                queryKey: h.L
                            }), t.invalidateQueries({
                                queryKey: u.X
                            }), l.v.setItem({
                                origin: r.origin,
                                type: a
                            }), (0, o.O)({
                                elementId: r.elementId,
                                elementVariant: a
                            }), e ? .onSuccess ? .(s, r, i)
                        },
                        onError: (t, i, a) => {
                            s({
                                actionAltText: "Refresh",
                                actionSlot: (0, r.jsx)(p.$n, {
                                    onClick: () => location.reload(),
                                    size: "sm",
                                    variant: "secondaryDarkOutline",
                                    children: "Refresh"
                                }),
                                message: "Something went wrong",
                                variant: "error"
                            }), e ? .onError ? .(t, i, a)
                        }
                    })
                },
                _ = e => {
                    switch (e) {
                        case C.$1.FLAT_PRICE:
                            return C.R6.strategy.FLAT_PRICE;
                        case C.$1.ORDER:
                            return C.R6.strategy.ORDER;
                        case C.$1.CURRENT_CART:
                            return C.R6.strategy.CURRENT_CART;
                        default:
                            throw Error(`Invalid strategy: ${e}`)
                    }
                }
        },
        74381: (e, t, s) => {
            "use strict";
            s.d(t, {
                M: () => r
            });
            let r = ["add-to-cart"]
        },
        74773: (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => n
            });
            var r = s(37876),
                i = s(27555),
                a = s(36256);
            let n = ({
                className: e,
                routeInfoFn: t,
                variant: s = "primary"
            }) => {
                let n = t(),
                    l = n.route.replace("mailto:", "");
                return (0, r.jsx)(a.N_, {
                    asChild: !0,
                    className: e,
                    variant: s,
                    children: (0, r.jsx)(i.A, {
                        routeInfo: n,
                        children: l
                    })
                })
            }
        },
        74997: (e, t, s) => {
            "use strict";
            s.d(t, {
                _: () => f
            });
            var r = s(37876),
                i = s(14232),
                a = s(69241),
                n = s(98477),
                l = s(37253),
                o = s.n(l),
                d = s(64968),
                c = s(91619),
                u = s(22133);
            let p = ({
                children: e,
                handleClose: t,
                icon: s,
                isOpen: n,
                title: l,
                customHeader: p,
                testId: h = "drawer",
                drawerHeaderWithButtons: f = !1,
                footerClassName: C,
                contentClassName: m,
                footer: x,
                ariaLabel: _
            }) => {
                let g, b, j, w = (0, i.useRef)(null),
                    {
                        handleBackdropClose: v,
                        drawerBackdropRef: y
                    } = (0, i.useContext)(d.l),
                    [D, k] = (0, i.useState)(!1),
                    N = (0, i.useRef)(null),
                    S = y ? .current,
                    L = (0, i.useRef)(t),
                    O = (0, i.useRef)(v),
                    [I, M] = (0, i.useState)(0),
                    H = l ? `drawer-title-${h}` : void 0;
                g = (0, i.useRef)(null), b = N || g, j = (0, i.useRef)(null), (0, i.useEffect)(() => {
                    if (!n) return;
                    j.current = document.activeElement;
                    let e = [document.querySelector("main"), document.querySelector("header"), document.querySelector("footer")].filter(Boolean);
                    return e.forEach(e => {
                        e && !e.hasAttribute("inert") && e.setAttribute("inert", "")
                    }), () => {
                        e.forEach(e => {
                            e && e.removeAttribute("inert")
                        }), j.current && document.body.contains(j.current) && j.current.focus()
                    }
                }, [n, b]), (0, i.useEffect)(() => {
                    L.current = t
                }, [t]), (0, i.useEffect)(() => {
                    O.current = v
                }, [v]), (0, i.useEffect)(() => {
                    w.current && M(w.current.offsetHeight)
                }, []);
                let E = (0, i.useCallback)(() => {
                    let e = N.current;
                    O ? .current ? .(), L.current ? .(), setTimeout(() => {
                        e && (e.scrollTop = 0)
                    }, 250)
                }, []);
                return (0, i.useEffect)(() => (S ? .addEventListener("click", E), () => {
                    S ? .removeEventListener("click", E)
                }), [S, E]), (0, i.useEffect)(() => {
                    let e = N.current,
                        t = () => {
                            let t = (e ? .scrollTop || 0) > 0;
                            !D && t ? k(!0) : D && !t && k(!1)
                        };
                    return e ? .addEventListener("scroll", t), () => {
                        e ? .removeEventListener("scroll", t)
                    }
                }, [D]), (0, i.useEffect)(() => {
                    let e = e => {
                        ("Escape" === e.key || "Esc" === e.key) && E()
                    };
                    return document.addEventListener("keydown", e), () => {
                        document.removeEventListener("keydown", e)
                    }
                }, [E]), (0, r.jsxs)("div", {
                    "aria-label": _ || void 0,
                    "aria-labelledby": H || void 0,
                    "aria-modal": "true",
                    className: o().drawerBox,
                    "data-testid": h,
                    ref: N,
                    role: "dialog",
                    children: [(0, r.jsxs)("div", {
                        className: (0, a.A)(o().drawerHeader, {
                            [o().drawerHeaderScrolled]: D,
                            [o().drawerHeaderWithButtons]: f,
                            [o().drawerHeaderNoHeader]: !s && !l && !p
                        }),
                        "data-testid": "drawer-header",
                        children: [p ? ? (0, r.jsxs)("div", {
                            className: o().drawerTitle,
                            children: [s && (0, r.jsx)("div", {
                                className: o().drawerTitleIcon,
                                children: s
                            }), (0, r.jsx)("div", {
                                className: o().drawerTitleText,
                                id: H,
                                children: l
                            })]
                        }), (0, r.jsx)("button", {
                            "aria-label": "Close drawer",
                            className: o().closeIcon,
                            "data-testid": "drawer-close-button",
                            onClick: E,
                            type: "button",
                            children: (0, r.jsx)(c.A, {
                                name: u.$.CLOSE,
                                strokeWidth: 1.5,
                                width: "24"
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: (0, a.A)(o().drawerContent, m),
                        "data-testid": "drawer-content",
                        style: {
                            paddingBottom: `${I}px`
                        },
                        children: e
                    }), x ? (0, r.jsx)("div", {
                        className: (0, a.A)(o().drawerFooter, C),
                        ref: w,
                        children: x
                    }) : null]
                })
            };
            var h = s(90413);
            let f = ({
                children: e,
                isOpen: t,
                handleClose: s,
                icon: l,
                footer: c,
                footerClassName: u,
                title: f,
                customHeader: C,
                testId: m = "drawer",
                fullHeight: x = !1,
                drawerHeaderWithButtons: _ = !1,
                contentClassName: g,
                isSSR: b = !1,
                ariaLabel: j
            }) => {
                let w = (0, h.A)(),
                    {
                        drawerContainerRef: v,
                        setIsDrawerFullHeight: y
                    } = (0, i.useContext)(d.l);
                return ((0, i.useEffect)(() => {
                    y ? .(x)
                }, [x, y]), t && w && v ? .current) ? (0, n.createPortal)((0, r.jsx)(p, {
                    ariaLabel: j,
                    contentClassName: g,
                    customHeader: C,
                    drawerHeaderWithButtons: _,
                    footer: c,
                    footerClassName: u,
                    handleClose: s,
                    icon: l,
                    isOpen: t,
                    testId: m,
                    title: f,
                    children: e
                }), v.current) : b && !w ? (0, r.jsx)("div", {
                    className: (0, a.A)(o().drawerContainer, {
                        [o().drawerContainerFullHeight]: x,
                        [o().drawerContainerOpened]: t
                    }),
                    "data-testid": "drawer-container-ssr",
                    children: (0, r.jsx)(p, {
                        ariaLabel: j,
                        contentClassName: g,
                        customHeader: C,
                        drawerHeaderWithButtons: _,
                        footer: c,
                        footerClassName: u,
                        handleClose: s,
                        icon: l,
                        isOpen: t,
                        testId: m,
                        title: f,
                        children: e
                    })
                }) : null
            }
        },
        77328: (e, t, s) => {
            e.exports = s(88022)
        },
        77518: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => $
            });
            var r = s(37876),
                i = s(14232),
                a = s(56413),
                n = s(67768);
            s(18847);
            var l = s(47321),
                o = s(62056),
                d = s(2443),
                c = s(9054),
                u = s(67911),
                p = s(83736),
                h = s(61817),
                f = s(38847),
                C = s(8735),
                m = s(10698);
            let x = ({
                countryCode: e
            }) => {
                let {
                    setCountryCode: t
                } = (0, m.C)();
                return (0, i.useEffect)(() => {
                    t({
                        countryCode: e,
                        shouldUpdateContext: !1
                    })
                }, []), null
            };
            var _ = s(67385),
                g = s(14e3),
                b = s(1833),
                j = s(93878),
                w = s(16903),
                v = s(62120),
                y = s(62564),
                D = s(73678),
                k = s(29454),
                N = s(22884);
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
            var L = s(84810);
            let O = "user-vertical";
            var I = s(74359),
                M = s(98461),
                H = s(35891),
                E = s(87050);
            let T = ["userVertical"];
            var R = s(90511);
            let V = () => {
                let e = (0, g.usePathname)(),
                    {
                        data: t,
                        isError: s,
                        error: r,
                        refetch: a
                    } = (() => {
                        let {
                            fetchedUserInfo: e
                        } = (0, i.useContext)(H.cy);
                        return (0, I.I)({
                            queryKey: T,
                            queryFn: () => E.$y.getUsersVerticalV2((0, M.R)()),
                            enabled: e,
                            staleTime: 1e3,
                            retry: !1
                        })
                    })(),
                    {
                        userInfo: n
                    } = (0, i.useContext)(H.cy),
                    l = n ? .account.engagement.type,
                    o = (0, i.useRef)(!1);
                return (0, i.useEffect)(() => {
                    o.current ? a() : o.current = !0
                }, [e]), (0, i.useEffect)(() => {
                    void 0 !== t && void 0 !== l && (t.type ? (k.A.set(O, t.type, {
                        domain: L.ConfigPublic.VerticalizationCookieDomain
                    }), S({
                        userVertical: t.type,
                        userEngagement: l
                    })) : (k.A.remove(O, {
                        domain: L.ConfigPublic.VerticalizationCookieDomain
                    }), S({
                        userVertical: R.v.GeneralUser,
                        userEngagement: l
                    })))
                }, [t, l]), (0, i.useEffect)(() => {
                    s && console.error(`Unable to update user vertical: ${r}`)
                }, [s, r]), null
            };
            var B = s(20019),
                A = s(36256);
            let P = () => null,
                $ = ({
                    gitInfo: e,
                    children: t,
                    uvert: s,
                    countryCode: m,
                    featureFlags: k,
                    tpid: N,
                    abTests: S
                }) => {
                    let L, O, [I] = (0, i.useState)(() => new a.E(p.K));
                    return L = (0, g.usePathname)(), O = (0, b.o)(e => e.incrementPagesTraversedByUser), (0, i.useEffect)(() => {
                        O()
                    }, [L]), (0, w.p)(), (0, i.useEffect)(() => {
                        window.localStorage.removeItem("elyGtmUserSession"), window.localStorage.removeItem("recentlyViewed"), (0, o.s)()
                    }, []), (0, r.jsx)(c.A, {
                        children: (0, r.jsxs)(n.Ht, {
                            client: I,
                            children: [(0, r.jsxs)(_.y, {
                                countryCode: m,
                                children: [(0, r.jsx)(x, {
                                    countryCode: m
                                }), (0, r.jsx)(B.O, {
                                    uvert: s,
                                    children: (0, r.jsx)(l.td, {
                                        value: S,
                                        children: (0, r.jsx)(H.OJ, {
                                            children: (0, r.jsx)(h.J, {
                                                children: (0, r.jsxs)(f.j$, {
                                                    value: k,
                                                    children: [(0, r.jsx)(j.c, {}), (0, r.jsx)(v.H, {}), (0, r.jsx)(V, {}), (0, r.jsx)(y.A, {
                                                        countryCode: m
                                                    }), (0, r.jsxs)(A.Uc, {
                                                        children: [(0, r.jsx)(u.E, {}), (0, r.jsx)(d.s, {}), (0, r.jsx)(C.i, {
                                                            children: t
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), (0, r.jsx)(P, {
                                initialIsOpen: !1
                            }), e && (0, r.jsx)(D.DynamicGitInfo, {
                                gitInfo: e,
                                tpid: N ? ? null
                            })]
                        })
                    })
                }
        },
        78970: (e, t, s) => {
            "use strict";
            s.d(t, {
                I: () => a,
                N: () => i
            });
            var r = s(22884);
            let i = ({
                    formType: e
                }) => {
                    (0, r.u)({
                        event: "newsletter_signup",
                        newsletter_form_type: e
                    })
                },
                a = e => {
                    (0, r.u)({
                        event: "newsletter_form_view",
                        newsletter_form_type: e
                    })
                }
        },
        80581: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            var r = s(37876);
            let i = e => (0, r.jsx)("svg", {
                height: "1em",
                viewBox: "0 0 19 19",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, r.jsxs)("g", {
                    "data-name": "Group 13304",
                    id: "Group_13304",
                    transform: "translate(0.5 0.5)",
                    children: [(0, r.jsx)("path", {
                        d: "M72.567,20.052a9,9,0,0,1-13.36,11.734M70.785,18A9,9,0,0,0,56.344,27.47",
                        "data-name": "Path 16143",
                        fill: "none",
                        id: "Path_16143",
                        stroke: "#000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1,
                        transform: "translate(-55.961 -15.865)"
                    }), (0, r.jsx)("path", {
                        d: "M136.943,70.85l-1.354.7.265-1.5-1.088-1.068,1.51-.214.68-1.365.67,1.37,1.508.226-1.1,1.06.252,1.5Z",
                        "data-name": "Path 16144",
                        fill: "#005eff",
                        id: "Path_16144",
                        transform: "translate(-123.708 -60.173)"
                    }), (0, r.jsx)("path", {
                        d: "M90.918,40.809A4.231,4.231,0,0,1,87.7,42.645h-.067c-1.354-.028-1.985-.616-2.327-2.172a8.641,8.641,0,0,1,.2-3.394,11.473,11.473,0,0,1,.449-1.43c.618-1.418,1.726-2.488,2.577-2.488a.911.911,0,0,1,.167.015,1.125,1.125,0,0,1,.8.609,2.458,2.458,0,0,1,.1,1.746A3.165,3.165,0,0,0,91,34.56a1.626,1.626,0,0,0,.025-1.9,2.734,2.734,0,0,0-.969-.9,5.288,5.288,0,0,0-1.42-.5,3.515,3.515,0,0,0-.734-.08,3.469,3.469,0,0,0-2.365.987l-.174.166c-1.52,1.3-2.71,4.4-2.71,7.049,0,.19.009.391.028.6a6.878,6.878,0,0,0,.482,1.892,3.689,3.689,0,0,0,3.627,2.424c1.509,0,3.629-.754,5.469-4.159Z",
                        "data-name": "Path 16145",
                        id: "Path_16145",
                        transform: "translate(-78.909 -29.027)"
                    })]
                })
            })
        },
        81291: (e, t, s) => {
            "use strict";
            s.d(t, {
                k: () => i
            });
            var r = s(67768);
            let i = ({
                queryKey: e,
                optimisticUpdateFn: t,
                onError: s,
                onSuccess: i
            }) => {
                let a = (0, r.jE)();
                return {
                    onMutate: async s => {
                        await a.cancelQueries({
                            queryKey: e
                        });
                        let r = a.getQueryData(e),
                            i = t(r, s);
                        return i && a.setQueryData(e, i), {
                            previousData: r
                        }
                    },
                    onError: (t, r, i) => {
                        s ? .(t, r, i), i && "object" == typeof i && "previousData" in i && void 0 !== i.previousData && a.setQueryData(e, i.previousData)
                    },
                    onSuccess: (t, s, r) => {
                        i ? .(t, s, r), a.invalidateQueries({
                            queryKey: e
                        })
                    }
                }
            }
        },
        86752: (e, t, s) => {
            "use strict";
            s.d(t, {
                M: () => a
            });
            var r = s(37876),
                i = s(46243);
            let a = ({
                items: e,
                classes: t
            }) => 0 === e.length ? null : (0, r.jsx)("ul", {
                className: t ? .list,
                "data-testid": "checkmark-list",
                children: e.map((e, s) => (0, r.jsxs)("li", {
                    className: "flex items-center gap-3 first:mt-0 not-first:mt-2.5 text-body-md",
                    children: [(0, r.jsx)("div", {
                        className: `flex size-6 shrink-0 items-center justify-center rounded-full bg-background-information text-icon-brand ${t?.icon??""}`,
                        children: (0, r.jsx)(i.A, {
                            className: "size-4",
                            "data-testid": "checkmark-icon"
                        })
                    }), e]
                }, s))
            })
        },
        90813: e => {
            e.exports = {
                section: "DisplateClubOffersSection_section__KZLR_",
                skeletonWrapper: "DisplateClubOffersSection_skeletonWrapper__rTVuC",
                skeleton: "DisplateClubOffersSection_skeleton__MzwRa",
                titleWrapper: "DisplateClubOffersSection_titleWrapper__GbynU",
                title: "DisplateClubOffersSection_title__vKB1D",
                description: "DisplateClubOffersSection_description__3evtX",
                otherMembershipPlansInfo: "DisplateClubOffersSection_otherMembershipPlansInfo__oWxH8"
            }
        },
        97620: (e, t, s) => {
            "use strict";
            s.d(t, {
                v: () => i
            });
            var r = s(78911);
            let i = new r.d(r.l.DC_OFFER_IN_CART)
        }
    },
    e => {
        e.O(0, [4024, 2183, 5706, 9658, 3915, 5657, 636, 6593, 8792], () => e(e.s = 40003)), _N_E = e.O()
    }
]);
//#
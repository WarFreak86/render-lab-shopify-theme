(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8308], {
        7217: e => {
            e.exports = {
                eyes: "AnimatedEyes_eyes__sYTgW",
                eye: "AnimatedEyes_eye__4xmL8",
                pupil: "AnimatedEyes_pupil__KETcY",
                movePupil: "AnimatedEyes_movePupil__7OTAa"
            }
        },
        15195: e => {
            e.exports = {
                animatedHand: "AnimatedHand_animatedHand__b9UWH",
                "wave-animation": "AnimatedHand_wave-animation__REsbe"
            }
        },
        42127: e => {
            e.exports = {
                greetingText: "GreetingText_greetingText__705nr",
                greetingTextSlideIn: "GreetingText_greetingTextSlideIn__bdfwH",
                slideInFromRight: "GreetingText_slideInFromRight__j0trO",
                openDrawerDesktopButton: "GreetingText_openDrawerDesktopButton__FW87U",
                openDrawerDesktopButtonExpanded: "GreetingText_openDrawerDesktopButtonExpanded__KlEfM",
                openDrawerDesktopButtonSearchPage: "GreetingText_openDrawerDesktopButtonSearchPage__bVg_3"
            }
        },
        88308: (e, t, a) => {
            "use strict";
            a.d(t, {
                a: () => V
            });
            var r = a(37876),
                s = a(14232),
                n = a(94392),
                i = a(51192),
                d = a(68873);
            let o = e => {
                (0, i.O)({
                    elementId: "for_you_quiz_drawer",
                    elementVariant: "none",
                    interactionType: e
                })
            };
            var l = a(22884);
            let m = e => {
                (0, l.u)({
                    event: "sst_view_item_list",
                    ecommerce: {
                        item_list_id: "PT:for-you-quiz|LT:grid|LF:drawer",
                        item_list_name: "For You Quiz",
                        items: e.map(e => ({
                            item_id: e.itemId,
                            item_variant: e.itemVariant,
                            index: e.index + 1
                        }))
                    }
                })
            };
            var c = a(27555),
                u = a(7217),
                x = a.n(u);
            let p = () => (0, r.jsxs)("span", {
                "aria-label": "eyes",
                className: x().eyes,
                children: [(0, r.jsx)("span", {
                    className: x().eye,
                    children: (0, r.jsx)("span", {
                        className: x().pupil
                    })
                }), (0, r.jsx)("span", {
                    className: x().eye,
                    children: (0, r.jsx)("span", {
                        className: x().pupil
                    })
                })]
            });
            var f = a(69241),
                b = a(15195),
                _ = a.n(b);
            let g = () => (0, r.jsx)("span", {
                    className: _().animatedHand,
                    children: "\uD83D\uDC4B"
                }),
                h = "Still searching for perfect poster?";
            var v = a(1833),
                y = a(47765),
                w = a(36256),
                k = a(7234),
                j = a(42127),
                I = a.n(j);
            let N = ({
                    withButton: e,
                    handleOpenDrawerDesktop: t
                }) => {
                    let a = (0, v.o)(e => e.wasOpened),
                        n = (0, v.o)(e => e.setWasOpened),
                        [i, d] = (0, s.useState)(a ? h : "Hi"),
                        [o, l] = (0, s.useState)(!1),
                        m = (0, y.aP)().readableName === k.ak.readableName;
                    return ((0, s.useEffect)(() => {
                        if (a) return;
                        let e = setTimeout(() => {
                            d(h), l(!0), n(!0)
                        }, 3300);
                        return () => {
                            e && clearTimeout(e)
                        }
                    }, [a, n]), e) ? (0, r.jsx)(w.$n, {
                        className: (0, f.A)(I().openDrawerDesktopButton, {
                            [I().openDrawerDesktopButtonExpanded]: o || a,
                            [I().openDrawerDesktopButtonSearchPage]: m
                        }),
                        "data-testid": "for-you-drawer-desktop-button",
                        onClick: () => t ? .(),
                        children: (0, r.jsxs)("span", {
                            className: (0, f.A)(I().greetingText, {
                                [I().greetingTextSlideIn]: o
                            }),
                            children: [i, " ", "Hi" === i ? (0, r.jsx)(g, {}) : (0, r.jsx)(p, {})]
                        })
                    }) : (0, r.jsxs)("span", {
                        className: (0, f.A)(I().greetingText, {
                            [I().greetingTextSlideIn]: o
                        }),
                        children: [i, " ", "Hi" === i ? (0, r.jsx)(g, {}) : (0, r.jsx)(p, {})]
                    })
                },
                T = [{
                    externalId: 7941958,
                    sku: "P00106995077",
                    imageCoreUrl: "2025-02-03/4a02eaa2e51a41411e13c4fca5967709_c855eb961a894732050ea478813c4d38"
                }, {
                    externalId: 7376395,
                    sku: "P00106431649",
                    imageCoreUrl: "2024-06-24/7959c886e1d71cc9d5645c2684e7d048_49bce8384ea6f4101dc11db043b8cc83"
                }, {
                    externalId: 8049261,
                    sku: "P00107102118",
                    imageCoreUrl: "2025-03-14/2397f069bc1d2ed7c7411b830cb8d6ed_325de3e26dc63bcfd2efc5017d61ebc3"
                }, {
                    externalId: 6544820,
                    sku: "P00105620651",
                    imageCoreUrl: "2023-05-08/d9e57625b5415a42a2f5580a5e0122f1_13a965833b1339d5d1cbb298188aa5fa"
                }, {
                    externalId: 7441421,
                    sku: "P00106496215",
                    imageCoreUrl: "2024-08-16/5f1e47fb15bb079bd3f78a811a2e2720_84653d30a80556c1a2ceedaebaf37628"
                }, {
                    externalId: 8100730,
                    sku: "P00107153557",
                    imageCoreUrl: "2025-04-07/ee2fc70d82d7b4f906d2b50b4f77f6a6_11b1e5be857d6a935815bc7ab915b29d"
                }, {
                    externalId: 8025538,
                    sku: "P00107078431",
                    imageCoreUrl: "2025-03-05/a70cbf1a-0185-4d87-9c2a-06a439e8cfb1"
                }, {
                    externalId: 5291090,
                    sku: "P00104399955",
                    imageCoreUrl: "2022-01-12/8084247ff1b3914b6efbf003d2d53d9b_c101a7cf757d01eb5dbae28f00463bc5"
                }, {
                    externalId: 7809493,
                    sku: "P00106863088",
                    imageCoreUrl: "2024-12-20/83384a72-2f26-4ede-8f02-f498941f389b"
                }, {
                    externalId: 8581905,
                    sku: "P00107623036",
                    imageCoreUrl: "2025-09-22/b859f469-ddb4-4824-9ba6-59a75db53520"
                }],
                C = ({
                    method: e,
                    item_id: t,
                    item_variant: a,
                    index: r
                }) => {
                    (0, l.u)({
                        event: "add" === e ? "sst_add_to_wishlist" : "sst_remove_from_wishlist",
                        ecommerce: {
                            method: "for_you_quiz",
                            item_list_id: "PT:for-you-quiz|LT:grid|LF:drawer",
                            item_list_name: "For You Quiz",
                            items: [{
                                item_id: t,
                                item_variant: a,
                                index: r
                            }]
                        }
                    })
                };
            var z = a(88157),
                P = a(24806),
                D = a(87477),
                A = a(99094),
                E = a(14619),
                S = a(87050);
            let U = ({
                externalId: e,
                sku: t,
                imageCoreUrl: a,
                wishlistItemsIds: n,
                index: i
            }) => {
                let d = (0, s.useRef)(null),
                    o = (0, s.useRef)(null),
                    m = {
                        item_id: e.toString(),
                        item_variant: t,
                        index: i + 1
                    };
                return (0, A.$)({
                    ref: o,
                    message: {
                        index: i,
                        itemId: e.toString(),
                        itemVariant: t
                    }
                }), (0, r.jsxs)("div", {
                    className: (0, E.cn)("relative col-span-2 cursor-pointer border-4 border-transparent after:absolute after:inset-0 after:z-1 after:content-[''] md:col-span-1", i >= 8 && "md:max-lg:hidden", n.includes(e) && "border-border-brand"),
                    onClick: () => {
                        (({
                            item_id: e,
                            item_variant: t,
                            index: a
                        }) => {
                            (0, l.u)({
                                event: "sst_select_item",
                                ecommerce: {
                                    method: "artwork",
                                    item_list_id: "PT:for-you-quiz|LT:grid|LF:drawer",
                                    item_list_name: "For You Quiz",
                                    items: [{
                                        item_id: e,
                                        item_variant: t,
                                        index: a
                                    }]
                                }
                            })
                        })(m), d.current ? .trigger()
                    },
                    ref: o,
                    children: [(0, r.jsx)("div", {
                        className: "absolute right-2 top-2 z-[1] cursor-pointer text-text-inverse",
                        children: (0, r.jsx)(D._, {
                            disableAllNotifications: !0,
                            externalId: e,
                            onAddToWishlist: () => {
                                C({
                                    method: "add",
                                    ...m
                                })
                            },
                            onRemoveFromWishlist: () => {
                                C({
                                    method: "remove",
                                    ...m
                                })
                            },
                            ref: d,
                            size: "sm",
                            sku: t
                        })
                    }), (0, r.jsx)(z.V, {
                        artworkOrientation: S.JH.VERTICAL,
                        artworkSets: P.yu,
                        className: "rounded-xs shadow-sm",
                        imageCoreUrl: a,
                        loading: "lazy"
                    })]
                })
            };
            var F = a(87973),
                H = a(30305),
                B = a(90861),
                L = a(47991),
                G = a(18120),
                O = a(4186);
            let V = ({
                onGoToRecommendations: e,
                partiallyOpenedOnMobile: t = !0,
                title: a = h
            }) => {
                let [l, u] = (0, s.useState)(!1), [x, f] = (0, s.useState)(!1), {
                    isMobile: b,
                    isTabletOrDesktop: _
                } = (0, H.Q)(), {
                    lockScroll: g,
                    unlockScroll: y
                } = (0, B.A)(), k = (0, v.o)(e => e.resetPagesTraversedByUser), j = (0, v.o)(e => e.setWasClosed), I = (0, v.o)(e => e.setIsDrawerOpen), {
                    data: C
                } = (0, F._v)(), z = C ? .wishlistItemsCount ? ? 0, [P] = (0, s.useState)(() => {
                    let e = [...T];
                    for (let t = e.length - 1; t > 0; t--) {
                        let a = Math.floor(Math.random() * (t + 1));
                        [e[t], e[a]] = [e[a], e[t]]
                    }
                    return e
                }), D = () => {
                    b && y(), o("close"), k(), j(!0), I(!1), u(!1), f(!1)
                };
                return (0, s.useEffect)(() => {
                    let e;
                    return b && (f(t), t || g(), u(!0)), _ && (f(!1), e = setTimeout(() => {
                        u(!0)
                    }, 200)), () => {
                        e && clearTimeout(e)
                    }
                }, [b, _]), (0, s.useEffect)(() => {
                    (0, d.Z)({
                        elementId: "for_you_quiz_drawer",
                        elementVariant: "none"
                    })
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: (0, E.cn)("fixed inset-0 z-999 bg-alpha-dark opacity-0 pointer-events-none", l && !x && "opacity-100 pointer-events-auto md:hidden"),
                        onClick: () => {
                            l && !x && D()
                        }
                    }), (0, r.jsx)("div", {
                        className: (0, E.cn)("fixed inset-x-0 bottom-0 z-1000 w-full overflow-hidden bg-transparent", "h-full max-h-[clamp(590px,60vh,80vh)] supports-[height:100dvh]:max-h-[clamp(590px,60dvh,80dvh)] rounded-t-lg md:h-auto md:rounded-t-md", "translate-y-full opacity-0 transition-transform duration-250 ease-out", "before:fixed before:inset-0 before:-z-1 before:size-full before:content-['']", "before:bg-[linear-gradient(197deg,var(--color-magenta-500)_3.41%,#000_60.22%)]", "md:before:bg-[linear-gradient(358deg,#000_7.94%,var(--color-magenta-500)_98.75%)]", "data-[state=open]:translate-y-0 data-[state=open]:opacity-100", "data-[state=partial]:z-997 data-[state=partial]:translate-y-[86%] data-[state=partial]:opacity-100"),
                        "data-state": x ? "partial" : l ? "open" : "closed",
                        "data-testid": "for-you-drawer-container",
                        children: (0, r.jsxs)("div", {
                            "aria-labelledby": "for-you-drawer",
                            "aria-modal": "true",
                            className: "flex h-full w-full flex-col",
                            "data-testid": "for-you-drawer",
                            role: "dialog",
                            children: [(0, r.jsxs)("div", {
                                className: (0, E.cn)("sticky top-0 z-100 flex items-center justify-between bg-transparent p-4 text-text-inverse md:block", !x && "py-8 md:pb-1 md:pt-8 xl:pt-10"),
                                "data-testid": "for-you-drawer-header",
                                onClick: () => {
                                    if (b && x) {
                                        g(), o("expand"), f(!1);
                                        return
                                    }
                                    if (b) {
                                        y(), f(!0);
                                        return
                                    }
                                    l || (g(), u(!0), f(!1))
                                },
                                children: [(0, r.jsx)("p", {
                                    className: "text-heading-h6 md:mx-auto md:text-center md:text-heading-h4",
                                    children: b ? (0, r.jsx)(N, {}) : (0, r.jsxs)(r.Fragment, {
                                        children: [a, " ", (0, r.jsx)(p, {})]
                                    })
                                }), x || !l ? (0, r.jsx)(n.A, {
                                    className: "size-6 shrink-0 text-text-inverse"
                                }) : (0, r.jsx)("button", {
                                    "aria-label": "Close drawer",
                                    className: "ml-auto flex cursor-pointer items-center justify-center border-none bg-none p-0 text-text-inverse md:absolute md:right-4 md:top-4",
                                    onClick: e => {
                                        e.stopPropagation(), D()
                                    },
                                    type: "button",
                                    children: (0, r.jsx)(L.A, {
                                        className: "size-5 md:size-6"
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "overflow-y-hidden",
                                children: (0, r.jsxs)(w.mc, {
                                    className: "overflow-y-scroll md:overflow-y-hidden [scrollbar-width:none] h-full pb-24 md:pb-8 xl:pb-10",
                                    children: [(0, r.jsxs)("p", {
                                        className: (0, E.cn)("pb-4 text-body-md text-text-inverse md:text-center", x ? "hidden" : "block"),
                                        children: ["Pick your favorite themes to unlock ", (0, r.jsx)("br", {
                                            className: "md:hidden"
                                        }), "a personalized gallery curated just for you ✨"]
                                    }), (0, r.jsx)(G.L, {
                                        callback: m,
                                        children: (0, r.jsx)(w.xA, {
                                            className: "gap-x-2 gap-y-2 text-text-inverse lg:[&>*:first-child]:col-start-2",
                                            variant: "noGap",
                                            children: P.map((e, t) => (0, r.jsx)(U, {
                                                externalId: e.externalId,
                                                imageCoreUrl: e.imageCoreUrl,
                                                index: t,
                                                sku: e.sku,
                                                wishlistItemsIds: C ? .wishlistItemIds ? ? []
                                            }, `${e.externalId}-${t}`))
                                        })
                                    }), (0, r.jsx)(w.$n, {
                                        asChild: !0,
                                        className: "fixed bottom-10 left-1/2 z-2 mt-6 -translate-x-1/2 whitespace-nowrap md:relative md:bottom-auto",
                                        disabled: 0 === z,
                                        onClick: () => {
                                            j(!0), I(!1), (0, i.O)({
                                                elementId: "for_you_quiz_drawer_cta_button",
                                                elementVariant: "none",
                                                interactionType: "click"
                                            }), y(), e ? .()
                                        },
                                        children: (0, r.jsx)(c.A, {
                                            routeInfo: (0, O.f)(),
                                            children: "Go to my recommendations"
                                        })
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
        }
    }
]);
//#
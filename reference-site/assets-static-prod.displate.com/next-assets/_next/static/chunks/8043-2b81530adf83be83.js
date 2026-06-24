(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8043], {
        1833: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => s
            });
            let s = (0, r(8106).v)(e => ({
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
        3231: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u,
                n: () => c
            });
            var s, n = r(37876),
                i = r(14232),
                l = r(69241),
                o = r(98477),
                a = r(67013),
                d = r.n(a),
                c = ((s = {}).DOWN_LEFT = "down_left", s.DOWN_MID = "down_mid", s);
            let u = ({
                children: e,
                icon: t,
                className: r,
                containerClassName: s,
                testid: a = "tooltip",
                onShow: c,
                isActive: u,
                isCropper: p,
                position: v
            }) => {
                let m, f, x, [h, w] = (0, i.useState)(!1),
                    [_, g] = (0, i.useState)({}),
                    [j, y] = (0, i.useState)(!1),
                    [b, C] = (0, i.useState)(0);
                (0, i.useEffect)(() => {
                    h && T.current && C(T.current.getBoundingClientRect().width)
                }, [h]);
                let T = (0, i.useRef)(null);
                (0, i.useEffect)(() => {
                    let e = T.current,
                        {
                            bottom: t
                        } = _;
                    e && t && e.style.setProperty("--tooltip-bottom-transformed", `${t+4}px`)
                }, [j, _]);
                let E = (0, i.useMemo)(() => {
                        let e = "down_mid" === v && _.left ? _.left - b / 2 : _.left;
                        return { ..._,
                            left: e
                        }
                    }, [_, v, b]),
                    N = (0, l.A)(d().contentWrapper, r, {
                        [d().visible]: j,
                        [d().downLeft]: "down_left" === v,
                        [d().downMid]: "down_mid" === v
                    });
                return (0, n.jsxs)("div", {
                    className: (0, l.A)(d().tooltip, s),
                    "data-testid": a,
                    onMouseEnter: e => {
                        let t, r, s;
                        return u && (r = (t = e.currentTarget ? .getBoundingClientRect()).width / 2, s = 1.4 * t.height, void(m = setTimeout(() => {
                            v ? "down_left" === v ? g({
                                right: -(t.right + r - 2),
                                top: -(window.innerHeight - t.top - s)
                            }) : "down_mid" === v && g({
                                left: t.left + r,
                                top: -(window.innerHeight - t.top - s)
                            }) : g({
                                left: p ? t.left : t.left + r - 2,
                                bottom: window.innerHeight - t.top + t.height / 2
                            }), w(!0), c && c()
                        }, 500), f = setTimeout(() => {
                            y(!0)
                        }, 550)))
                    },
                    onMouseLeave: () => u && void(m && clearTimeout(m), f && clearTimeout(f), y(!1), setTimeout(() => {
                        w(!1)
                    }, 250)),
                    children: [(0, n.jsx)("div", {
                        className: d().iconWrapper,
                        children: t
                    }), h ? (0, o.createPortal)((0, n.jsx)("div", {
                        className: N,
                        "data-testid": "tooltip-content",
                        ref: T,
                        style: { ...E
                        },
                        children: (0, n.jsx)("div", {
                            className: d().content,
                            children: e
                        })
                    }), ((x = document.getElementById("tooltip-wrapper")) || ((x = document.createElement("div")).setAttribute("id", "tooltip-wrapper"), x.setAttribute("data-testid", "tooltip-wrapper"), document.body.appendChild(x)), x)) : null]
                })
            }
        },
        20019: (e, t, r) => {
            "use strict";
            r.d(t, {
                M: () => l,
                O: () => o
            });
            var s = r(37876),
                n = r(14232),
                i = r(90511);
            let l = (0, n.createContext)({
                    uvert: i.v.GeneralUser
                }),
                o = ({
                    children: e,
                    uvert: t
                }) => (0, s.jsx)(l.Provider, {
                    value: {
                        uvert: t
                    },
                    children: e
                })
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
        77518: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => z
            });
            var s = r(37876),
                n = r(14232),
                i = r(56413),
                l = r(67768);
            r(18847);
            var o = r(47321),
                a = r(62056),
                d = r(2443),
                c = r(9054),
                u = r(67911),
                p = r(83736),
                v = r(61817),
                m = r(38847),
                f = r(8735),
                x = r(10698);
            let h = ({
                countryCode: e
            }) => {
                let {
                    setCountryCode: t
                } = (0, x.C)();
                return (0, n.useEffect)(() => {
                    t({
                        countryCode: e,
                        shouldUpdateContext: !1
                    })
                }, []), null
            };
            var w = r(67385),
                _ = r(14e3),
                g = r(1833),
                j = r(93878),
                y = r(16903),
                b = r(62120),
                C = r(62564),
                T = r(73678),
                E = r(29454),
                N = r(22884);
            let I = ({
                userVertical: e,
                userEngagement: t
            }) => {
                (0, N.u)({
                    event: "user_data",
                    user_vertical: e,
                    user_engagement_level: t
                })
            };
            var O = r(84810);
            let U = "user-vertical";
            var A = r(74359),
                D = r(98461),
                S = r(35891),
                P = r(87050);
            let B = ["userVertical"];
            var W = r(90511);
            let k = () => {
                let e = (0, _.usePathname)(),
                    {
                        data: t,
                        isError: r,
                        error: s,
                        refetch: i
                    } = (() => {
                        let {
                            fetchedUserInfo: e
                        } = (0, n.useContext)(S.cy);
                        return (0, A.I)({
                            queryKey: B,
                            queryFn: () => P.$y.getUsersVerticalV2((0, D.R)()),
                            enabled: e,
                            staleTime: 1e3,
                            retry: !1
                        })
                    })(),
                    {
                        userInfo: l
                    } = (0, n.useContext)(S.cy),
                    o = l ? .account.engagement.type,
                    a = (0, n.useRef)(!1);
                return (0, n.useEffect)(() => {
                    a.current ? i() : a.current = !0
                }, [e]), (0, n.useEffect)(() => {
                    void 0 !== t && void 0 !== o && (t.type ? (E.A.set(U, t.type, {
                        domain: O.ConfigPublic.VerticalizationCookieDomain
                    }), I({
                        userVertical: t.type,
                        userEngagement: o
                    })) : (E.A.remove(U, {
                        domain: O.ConfigPublic.VerticalizationCookieDomain
                    }), I({
                        userVertical: W.v.GeneralUser,
                        userEngagement: o
                    })))
                }, [t, o]), (0, n.useEffect)(() => {
                    r && console.error(`Unable to update user vertical: ${s}`)
                }, [r, s]), null
            };
            var M = r(20019),
                V = r(36256);
            let R = () => null,
                z = ({
                    gitInfo: e,
                    children: t,
                    uvert: r,
                    countryCode: x,
                    featureFlags: E,
                    tpid: N,
                    abTests: I
                }) => {
                    let O, U, [A] = (0, n.useState)(() => new i.E(p.K));
                    return O = (0, _.usePathname)(), U = (0, g.o)(e => e.incrementPagesTraversedByUser), (0, n.useEffect)(() => {
                        U()
                    }, [O]), (0, y.p)(), (0, n.useEffect)(() => {
                        window.localStorage.removeItem("elyGtmUserSession"), window.localStorage.removeItem("recentlyViewed"), (0, a.s)()
                    }, []), (0, s.jsx)(c.A, {
                        children: (0, s.jsxs)(l.Ht, {
                            client: A,
                            children: [(0, s.jsxs)(w.y, {
                                countryCode: x,
                                children: [(0, s.jsx)(h, {
                                    countryCode: x
                                }), (0, s.jsx)(M.O, {
                                    uvert: r,
                                    children: (0, s.jsx)(o.td, {
                                        value: I,
                                        children: (0, s.jsx)(S.OJ, {
                                            children: (0, s.jsx)(v.J, {
                                                children: (0, s.jsxs)(m.j$, {
                                                    value: E,
                                                    children: [(0, s.jsx)(j.c, {}), (0, s.jsx)(b.H, {}), (0, s.jsx)(k, {}), (0, s.jsx)(C.A, {
                                                        countryCode: x
                                                    }), (0, s.jsxs)(V.Uc, {
                                                        children: [(0, s.jsx)(u.E, {}), (0, s.jsx)(d.s, {}), (0, s.jsx)(f.i, {
                                                            children: t
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), (0, s.jsx)(R, {
                                initialIsOpen: !1
                            }), e && (0, s.jsx)(T.DynamicGitInfo, {
                                gitInfo: e,
                                tpid: N ? ? null
                            })]
                        })
                    })
                }
        },
        80208: (e, t, r) => {
            "use strict";
            r.d(t, {
                R: () => c
            });
            var s = r(37876),
                n = r(14232),
                i = r(36256),
                l = r(14619),
                o = r(3231);
            let a = ({
                    capitalize: e,
                    isChecked: t,
                    option: r
                }) => {
                    let n = r.label ? (0, s.jsxs)("span", {
                        className: (0, l.cn)("inline-flex items-center justify-center text-center capitalize", {
                            "normal-case": !1 === e
                        }),
                        children: [(0, s.jsx)("span", {
                            children: r.label
                        }), r.description ? (0, s.jsx)("span", {
                            className: (0, l.cn)("ml-2 hidden", t ? "inline" : void 0),
                            children: r.description
                        }) : null]
                    }) : (0, s.jsx)(i.EA, {
                        className: "h-full w-[55px] rounded-12",
                        "data-testid": "pills-picker-label-skeleton"
                    });
                    return r.tooltipDescription ? (0, s.jsx)(o.A, {
                        className: "flex max-w-[155px] translate-y-[10%] items-center rounded-4 bg-neutral-0 p-8 text-size-14 leading-20 before:left-1/2 before:shadow-none [&>div:first-letter]:uppercase",
                        icon: n,
                        isActive: !0,
                        children: r.tooltipDescription
                    }) : n
                },
                d = (e, t) => String(e.value ? ? t),
                c = ({
                    activeOption: e,
                    capitalize: t = !0,
                    className: r,
                    name: o,
                    onChange: c,
                    options: u,
                    testId: p,
                    variant: v
                }) => {
                    let m = (0, n.useMemo)(() => u.map((r, n) => {
                        let i = d(r, n),
                            l = r.disabled && !!r.tooltipDescription;
                        return {
                            children: r.children,
                            className: l ? "cursor-default text-text-disabled hover:text-text-disabled" : void 0,
                            disabled: r.disabled && !l,
                            label: (0, s.jsx)(a, {
                                capitalize: t,
                                isChecked: String(e) === i,
                                option: r
                            }),
                            testId: r.testId ? ? i,
                            value: i
                        }
                    }), [e, t, u]);
                    return (0, s.jsx)(i.Iz, {
                        className: (0, l.cn)(r),
                        items: m,
                        name: o,
                        onChange: e => {
                            let t = u.find((t, r) => d(t, r) === e);
                            if (t && !t.disabled) {
                                let e;
                                c((e = u.indexOf(t), t.value ? ? e))
                            }
                        },
                        testId: p,
                        value: String(e),
                        variant: "transparent" === v ? "subtle" : v
                    })
                }
        }
    }
]);
//#